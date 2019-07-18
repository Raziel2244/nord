nord.breeding = {
  // details of possible horse genes
  geneData: {
    agouti: {
      rgx: /\b(A\+|At|A|a)(A\+|At|A|a)/,
      sort: ["A+","At","A","a"],
    },
    black: {
      rgx: /\b(E|e)(E|e)/,
      sort: ["E","e"],
    },
  },

  // breeding potion data
  potionData: [
    { id: "none", name: "No Potion"       },
    { id: "glch", name: "Glitch"          },
    { id: "wrap", name: "Wrapping Paper"  },
    { id: "cook", name: "Cookiedanner"    },
    { id: "gold", name: "Pot 'o' Gold"    },
    { id: "fire", name: "Firedapple"      },
    { id: "grdn", name: "Guardian"        },
    { id: "hndd", name: "Houndanner"      },
    { id: "lava", name: "Lava"            },
    { id: "pstl", name: "Pastel Dun"      },
    { id: "atms", name: "Atmospherica"    }
  ],




  // ======================================================================
  // helper functions

  // called from breed button handler
  breed: function() {
    // 'this' is module - nord.breeding
    try {
      const uidata = nord.data.breeding;
      const fields = uidata.fields;
      const output = uidata.output;

      // runtime variable for storing all data during a 'breed'
      const breedData = uidata.breedData;

      breedData.sire={},
      breedData.dam={},
      breedData.foal={};

      // clear output from previous use
      if (output.children.length) rzl.destroyChildren(output);

      // store genos
      breedData.sire.geno = fields.siregeno.value;
      breedData.dam.geno = fields.damgeno.value;
      breedData.foal.geno = "";

      //store gene arrays
      breedData.sire.genes = breedData.sire.geno.split(" ");
      breedData.dam.genes = breedData.dam.geno.split(" ");
      breedData.foal.genes = [];

      this.geneCommon(breedData);

      breedData.foal.geno = breedData.foal.genes.join(" ");
      console.log("end data",breedData)

      rzl.addDiv(output,{content:`Geno: ${breedData.foal.geno}`})
      output.classList.remove("rzl-hidden");
    } catch (e) {
      console.error(e);return;
    }
  },

  // generate basic foal genes - all foals get these
  geneCommon: function(breedData) {
    this.geneRoll("black",breedData);
    breedData.sire.agouti = breedData.sire.geno.search(/\b(A\+|At|A|a)(A\+|At|A|a)/) || -1;
    breedData.dam.agouti = breedData.dam.geno.search(/\b(A\+|At|A|a)(A\+|At|A|a)/) || -1;
    if (breedData.sire.agouti !== -1 && breedData.dam.agouti !== -1) this.geneRoll("agouti",breedData);
    else breedData.foal.genes.push("??");
  },


  // roll for gene using geneData[geneName] and given breedData
  geneRoll: function(geneName,breedData) {
    // gather data on the gene itself
    const geneData = this.geneData[geneName];
    const rgx = geneData.rgx;
    const sort = geneData.sort;

    // gather parent and roll foal genes
    const sireGene = this.matchGenes(breedData.sire.geno,rgx);
    const damGene = this.matchGenes(breedData.dam.geno,rgx);

    // roll a random gene from each of the parent genes
    const sireIndex = rzl.rng0to(sireGene.length-1);
    const damIndex = rzl.rng0to(damGene.length-1);
    let foalGene = [sireGene[sireIndex],damGene[damIndex]];

    // if sort parameter is present then sort the parts
    if (sort) foalGene.sort((a,b) => {return sort.indexOf(a) - sort.indexOf(b);});

    // join the parts together into gene
    foalGene = foalGene.join("");

    // push gene to foal data
    breedData.foal.genes.push(foalGene);
  },
  // get gene array from given geno using given regex
  matchGenes: function(geno,rgx) {
    if (!geno || !rgx) return false; // need geno and regex
    let match = geno.match(rgx); // get matching gene from geno as parts
    return [match[1],match[2]];
  },




  // ======================================================================
  // event handlers

  // called on arena UI build
  built: function(ev) {
    // 'this' is ui - nord.data.breeding
    try {
      // console.log("breeding built");
      this.form = rzl.findChild(this.rootNode,"form","breeding-form");
      this.fields = rzl.getFormFields(this.form);
      this.output = rzl.findChild(this.rootNode,"div","output");
      this.breedData = {};

      this.optsBP = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.breeding.potionData,"name");
      rzl.setSelOpts(this.fields.sirebp1,this.optsBP);
      rzl.setSelOpts(this.fields.sirebp2,this.optsBP);
      rzl.setSelOpts(this.fields.dambp1,this.optsBP);
      rzl.setSelOpts(this.fields.dambp2,this.optsBP);
    } catch (e) {
      console.error(e);return;
    }
  },

  // click handler for breed button
  breedClick: function(ev) {
    //'this' is button
    nord.breeding.breed();
  },
};




nord.uiDefs.breeding = {
  meta: {
    name: "breeding",
    domain: "nord",
    data: "data",
    pnode: "norduiBox",
    builtCB: "nord.breeding.built"
  },
  view: {
    style: {
      // "width":"80vw",
      margin:"auto",
      display:"flex",
      "flex-flow":"column nowrap",
      "align-items":"center",
    },
    children: [
      {tag:"h2",class:"title",content:"Breeding Tool"},
      {tag:"form",id:"breeding-form",class:"rzl-form",children: [
        {class:"rzl-form-row",children: [
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Sire:",props:{for:"siregeno"}},
            {tag:"input",id:"siregeno",props:{type:"text"}}
          ]},
          {class:"rzl-form-item",children: [
            {tag:"select",class:"itemWidth",id:"sirebp1"},
            {tag:"select",class:"itemWidth",id:"sirebp2"}
          ]},
        ]},
        {class:"rzl-form-row",children: [
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Dam :",props:{for:"damgeno"}},
            {tag:"input",id:"damgeno",props:{type:"text"}}
          ]},
          {class:"rzl-form-item",children: [
            {tag:"select",class:"itemWidth",id:"dambp1"},
            {tag:"select",class:"itemWidth",id:"dambp2"}
          ]},
        ]},
        {class:"rzl-form-row",children: [
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Luck Potion 1:",props:{for:"luck1"}},
            {tag:"input",id:"luck1",props:{type:"checkbox"}}
          ]},
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Luck Potion 2:",props:{for:"luck2"}},
            {tag:"input",id:"luck2",props:{type:"checkbox"}}
          ]},
        ]},
        {class:"rzl-form-row",children: [
          {tag:"button",id:"btnBreeding",class:"rzl-btn",content:"Breed",events: {
            click: "nord.breeding.breedClick"
          },props:{type:"button"}},
        ]}
      ]},
      {id:"output",class:"rzl-hidden",style:{"text-align":"center"}}
    ]
  },
};
