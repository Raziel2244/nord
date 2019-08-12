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
    champagne: {
      rgx: /\b(Ch|n)(Ch)/,
      sort: ["n","Ch"],
    },
    cream: {
      rgx: /\b(Cr|n)(Cr)/,
      sort: ["n","Cr"],
    },
    dun: {
      rgx: /\b(D|n)(D)/,
      sort: ["n","D"],
    },
    flaxen: {
      rgx: /\b(f|n)(f)/,
      sort: ["n","f"],
    },
    grey: {
      rgx: /\b(G|n)(G)/,
      sort: ["n","G"],
    },
    overo: {
      rgx: /\b(O|n)(O)/,
      sort: ["n","O"],
    },
    pangare: {
      rgx: /\b(P|n)(P)/,
      sort: ["n","P"],
    },
    pearl: {
      rgx: /\b(prl|n)(prl)/,
      sort: ["n","prl"],
    },
    rabicano: {
      rgx: /\b(Rb|n)(Rb)/,
      sort: ["n","Rb"],
    },
    roan: {
      rgx: /\b(R|n)(R)/,
      sort: ["n","R"],
    },
    sabino: {
      rgx: /\b(Sb|n)(Sb)/,
      sort: ["n","Sb"],
    },
    silver: {
      rgx: /\b(Z|n)(Z)/,
      sort: ["n","Z"],
    },
    sooty: {
      rgx: /\b(Sty|n)(Sty)/,
      sort: ["n","Sty"],
    },
    splash: {
      rgx: /\b(Spl|n)(Spl)/,
      sort: ["n","Spl"],
    },
    tobiano: {
      rgx: /\b(Tb|n)(Tb)/,
      sort: ["n","Tb"],
    },
    white: {
      rgx: /\b(W|n)(W)/,
      sort: ["n","W"],
    },
    pumpkin: {
      month: [8,9,10],
      rgx: /\b(Pkn|n)(Pkn)/,
      sort: ["n","Pkn"],
    },
    eggnog: {
      month: [10,11,0,1],
      rgx: /\b(Nog|n)(Nog)/,
      sort: ["n","Nog"],
    },
    test: {
      rgx: /\b(Z|n)(Z)/,
      sort: ["n","Z"],
    },
  },

  geneSets: {
    common: [
      "black",
      "agouti"
    ],
    dilutes: [
      "champagne",
      "sooty",
      "silver",
      "pangare",
      "cream",
      "grey",
      "roan",
      "dun",
      "pearl",
      "flaxen",
    ],
    whites: [
      "sabino",
      "tobiano",
      "rabicano",
      "overo",
      "splash",
      "white"
    ],
    potions: [
      "",
    ],
    mutations: [
      "agis",
      "angler",
      "atlanticus",
      "bloodsplash",
      "butterfly",
      "candycane",
      "carved",
      "cemophora",
      "checkered",
      "christmasbells",
      "christmaslights",
      "cloudedleopard",
      "eggnog",
      "emblem",
      "fawn",
      "flametouched",
      "frostsplash",
      "glimmer",
      "griffinstouch",
      "henna",
      "hummingbird",
      "inkspill",
      "jaguar",
      "kascel",
      "lacedtobiano",
      "mandarin",
      "masquerade",
      "moulin",
      "panda",
      "peafowl",
      "pumpkin",
      "snowdripple",
      "snowglobe",
      "stainedglass",
      "tabby",
      "tiger",
      "tigerroan",
      "universe",
      "wooded",
      "zebra",
    ],
    test: [
      "",
    ],
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


  Horse: class {
    constructor(geno="") {
      this.geno = geno;
      this.genes = (geno=="") ? [] : geno.split(" ");
      this.pheno = "PHENOTYPE";
    }
  },




  // ======================================================================
  // helper functions

  // called from breed button handler
  breed: function() {
    // 'this' is module - nord.breeding
    this.initBreed();
    try {
      const output = nord.state.breeding.output,
            twins = nord.state.breeding.breed.twins,
            foals = nord.state.breeding.breed.foals;
      this.rollTwins();
      this.rollFoals();

      const join = (twins) ? "AND" : "OR",
            str0 = "Geno: " + foals[0].geno + "<br>Colour: " + foals[0].pheno,
            str1 = "Geno: " + foals[1].geno + "<br>Colour: " + foals[1].pheno,
            out = str0 + "<br>" + join + "<br>" + str1;
      rzl.addDiv(output,{content:out});

      console.log("breed complete",nord.state.breeding.breed);
      output.classList.remove("rzl-hidden");
    } catch (e) {
      console.error(e);return;
    }
  },

  // initialise breed data
  initBreed: function() {
    const fields = nord.state.breeding.fields,
          breed = nord.state.breeding.breed;
    rzl.destroyChildren(nord.state.breeding.output);
    breed.sire = new this.Horse(fields.siregeno.value);
    breed.dam = new this.Horse(fields.damgeno.value);
    breed.foals = [new this.Horse(),new this.Horse()];
  },

  // roll for twins
  rollTwins: function() {
    const state = nord.state.breeding,
          potion = state.fields.luck2.checked;
          cap = 1000,
          rng = rzl.rng1to(cap),
          chance = (potion) ? 150 : 8,
    state.breed.twins = (rng <= chance) ? true : false;
    state.breed.stats.twins = {
      potion : potion,
      rng : rng,
      chance : chance,
      cap : cap,
      success : state.breed.twins
    };
    return state.breed.twins;
  },

  // roll all steps for each foal
  rollFoals: function() {
    const foals = nord.state.breeding.breed.foals;
    for (f in foals) {
      this.rollSet(foals[f],"common");
      this.rollSet(foals[f],"dilutes");
      this.rollSet(foals[f],"whites");
      // this.rollAppaloosa(foals[f]);

      foals[f].geno = foals[f].genes.join(" ");
    }
  },

  // roll set of genes for foal using geneSets[setName]
  rollSet: function(foal,setName) {
    if (!foal || !setName) return false;
    const geneSet = this.geneSets[setName];
    // geneSet.forEach(function(geneName) { this.rollGene(foal,geneName) });
    for (g in geneSet) this.rollGene(foal,geneSet[g]);
  },
  // roll gene for foal using geneData[geneName]
  rollGene: function(foal,geneName) {
    if (!foal || !geneName) return false;
    const breed = nord.state.breeding.breed;

    const geneData = this.geneData[geneName];
    const rgx = geneData.rgx;
    const sort = geneData.sort;

    // gather parent and roll foal genes
    const sireGene = this.matchGenes(breed.sire.geno,rgx);
    const damGene = this.matchGenes(breed.dam.geno,rgx);

    // in case of error push unknown
    if (!sireGene || !damGene) {
      if (geneName==="agouti") foal.genes.push("??");
      return;
    }

    // roll a random gene from each of the parent genes
    const sireIndex = rzl.rng0to(sireGene.length-1);
    const damIndex = rzl.rng0to(damGene.length-1);
    let foalGene = [sireGene[sireIndex],damGene[damIndex]];

    // if sort parameter is present then sort the parts
    if (sort) foalGene.sort((a,b) => {return sort.indexOf(a) - sort.indexOf(b);});

    // join the parts together into gene
    foalGene = foalGene.join("");

    // push gene to foal data
    if (foalGene!=="nn") foal.genes.push(foalGene);
  },
  // get gene array from given geno using given regexp
  matchGenes: function(geno,rgx) {
    if (!geno || !rgx) return false; // need geno and regex
    let match = geno.match(rgx); // get matching gene from geno as parts
    if (!match) return false;
    return [match[1],match[2]];
  },
  // //
  // rollAppaloosa: function(foal) {
  //   if (!foal || !geneName) return false;
  //   const breedData = this.state.breed;
  //
  //   const rgx = ;
  //   const sort = ;
  // },
  // appaloosa: {
  //   rgx: /\b(Lp|n)(Lp)/,
  //   sort: ["n","Lp"],
  // },
  // appymarks: {
  //   rgx: /(patn1|patn2|snow|roan|frost|ZfallZ)(patn1|patn2|snow|roan|frost|ZfallZ)|(patn1|patn2|snow|roan|frost|ZfallZ)/,
  //   sort: ["patn1","patn2","snow","roan","frost","ZfallZ"],
  // },


  // ======================================================================
  // event handlers

  // called on arena UI build
  built: function(ev) {
    // 'this' is ui state - nord.state.breeding
    try {
      // console.log("breeding built");
      this.form = rzl.findChild(this.rootNode,"form","breeding-form");
      this.fields = rzl.getFormFields(this.form);
      this.output = rzl.findChild(this.rootNode,"div","output");
      this.breed = { stats : {} };

      this.potions = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.breeding.potionData,"name");
      rzl.setSelOpts(this.fields.sirebp1,this.potions);
      rzl.setSelOpts(this.fields.sirebp2,this.potions);
      rzl.setSelOpts(this.fields.dambp1,this.potions);
      rzl.setSelOpts(this.fields.dambp2,this.potions);

      this.fields.siregeno.value = "Ee AtA ";
      this.fields.damgeno.value = "ee A+a ";
    } catch (e) {
      console.error(e);return;
    }
  },

  // click handler for breed button
  breedClick: function(ev) {
    //'this' is button
    nord.breeding.breed();
  },



  //=======================================================================
  // SECTION: Definitions
  uiDef : {
    meta: {
      name: "breeding",
      domain: "nord",
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
        {tag:"h1",class:"title",content:"Breeding Tool"},
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
  },
};
