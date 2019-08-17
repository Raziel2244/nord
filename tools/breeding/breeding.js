nord.breeding = {
  // details of possible horse genes
  geneData : {
    agouti : {
      rgx  : /\b(A\+|At|A|a)(A\+|At|A|a)\b/,
      sort : ["A+","At","A","a"],
    },
    appaloosa : {
      rgx  : /\b(Lp|n)(Lp)\b/,
      sort : ["n","Lp"],
    },
    black : {
      rgx  : /\b(E|e)(E|e)\b/,
      sort : ["E","e"],
    },
    champagne : {
      rgx  : /\b(Ch|n)(Ch)\b/,
      sort : ["n","Ch"],
    },
    cream : {
      rgx  : /\b(Cr|n)(Cr)\b/,
      sort : ["n","Cr"],
    },
    dun : {
      rgx  : /\b(D|n)(D)\b/,
      sort : ["n","D"],
    },
    flaxen : {
      rgx  : /\b(f|n)(f)\b/,
      sort : ["n","f"],
    },
    grey : {
      rgx  : /\b(G|n)(G)\b/,
      sort : ["n","G"],
    },
    overo : {
      rgx  : /\b(O|n)(O)\b/,
      sort : ["n","O"],
    },
    pangare : {
      rgx  : /\b(P|n)(P)\b/,
      sort : ["n","P"],
    },
    pearl : {
      rgx  : /\b(prl|n)(prl)\b/,
      sort : ["n","prl"],
    },
    rabicano : {
      rgx  : /\b(Rb|n)(Rb)\b/,
      sort : ["n","Rb"],
    },
    roan : {
      rgx  : /\b(R|n)(R)\b/,
      sort : ["n","R"],
    },
    sabino : {
      rgx  : /\b(Sb|n)(Sb)\b/,
      sort : ["n","Sb"],
    },
    silver : {
      rgx  : /\b(Z|n)(Z)\b/,
      sort : ["n","Z"],
    },
    sooty : {
      rgx  : /\b(Sty|n)(Sty)\b/,
      sort : ["n","Sty"],
    },
    splash : {
      rgx  : /\b(Spl|n)(Spl)\b/,
      sort : ["n","Spl"],
    },
    tobiano : {
      rgx  : /\b(Tb|n)(Tb)\b/,
      sort : ["n","Tb"],
    },
    white : {
      rgx  : /\b(W|n)(W)\b/,
      sort : ["n","W"],
    },
    test : {
      rgx  : /\b(Z|n)(Z)\b/,
      sort : ["n","Z"],
    },
  },

  // groups of genes to be rolled
  geneSets : {
    common  : [
      "black",
      "agouti"
    ],
    dilutes : [
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
    whites  : [
      "sabino",
      "tobiano",
      "rabicano",
      "overo",
      "splash",
      "white"
    ],
    potions : [
      "",
    ],
    // mutations: [
    //   "agis",
    //   "angler",
    //   "atlanticus",
    //   "bloodsplash",
    //   "butterfly",
    //   "candycane",
    //   "carved",
    //   "cemophora",
    //   "checkered",
    //   "christmasbells",
    //   "christmaslights",
    //   "cloudedleopard",
    //   "eggnog",
    //   "emblem",
    //   "fawn",
    //   "flametouched",
    //   "frostsplash",
    //   "glimmer",
    //   "griffinstouch",
    //   "henna",
    //   "hummingbird",
    //   "inkspill",
    //   "jaguar",
    //   "kascel",
    //   "lacedtobiano",
    //   "mandarin",
    //   "masquerade",
    //   "moulin",
    //   "panda",
    //   "peafowl",
    //   "pumpkin",
    //   "snowdripple",
    //   "snowglobe",
    //   "stainedglass",
    //   "tabby",
    //   "tiger",
    //   "tigerroan",
    //   "universe",
    //   "wooded",
    //   "zebra",
    // ],
  },

  // list of all appaloosa patterns
  patterns : [
    "nopatn",
    "patn1",
    "patn2",
    "varn",
    "snow",
    "frost",
    "fall",
  ],

  // details of different mutations
  mutationData : {
    agis : {
      rgx  : /\b(Ags|n)(Ags)\b/,
      sort : ["n","Ags"]
    },
    angler : {
      rgx  : /\b(Ang|n)(Ang)\b/,
      sort : ["n","Ang"]
    },
    atlanticus : {
      rgx  : /\b(Atl|n)(Atl)\b/,
      sort : ["n","Atl"]
    },
    bloodsplash : {
      rgx  : /\b(Bsh|n)(Bsh)\b/,
      sort : ["n","Bsh"]
    },
    butterfly : {
      rgx  : /\b(Bp|n)(Bp)\b/,
      sort : ["n","Bp"]
    },
    candycane : {
      rgx  : /\b(Cnd|n)(Cnd)\b/,
      sort : ["n","Cnd"]
    },
    carved : {
      rgx  : /\b(Crv|n)(Crv)\b/,
      sort : ["n","Crv"]
    },
    cemophora : {
      rgx  : /\b(Cmp|n)(Cmp)\b/,
      sort : ["n","Cmp"]
    },
    checkered : {
      rgx  : /\b(Cc|n)(Cc)\b/,
      sort : ["n","Cc"]
    },
    christmasbells : {
      rgx  : /\b(Bls|n)(Bls)\b/,
      sort : ["n","Bls"]
    },
    christmaslights : {
      rgx  : /\b(Lht|n)(Lht)\b/,
      sort : ["n","Lht"]
    },
    cloudedleopard : {
      rgx  : /\b(Cd|n)(Cd)\b/,
      sort : ["n","Cd"]
    },
    eggnog : {
      month : [10,11,0,1],
      rgx   : /\b(Nog|n)(Nog)\b/,
      sort  : ["n","Nog"],
    },
    emblem : {
      rgx  : /\b(Em|n)(Em)\b/,
      sort : ["n","Em"]
    },
    fawn : {
      rgx  : /\b(Fwn|n)(Fwn)\b/,
      sort : ["n","Fwn"]
    },
    flametouched : {
      rgx  : /\b(Flm|n)(Flm)\b/,
      sort : ["n","Flm"]
    },
    frostsplash : {
      rgx  : /\b(Fspl|n)(Fspl)\b/,
      sort : ["n","Fspl"]
    },
    glimmer : {
      rgx  : /\b(Glm|Glm\^r|n)(Glm|Glm\^r)\b/,
      sort : ["n","Glm","Glm\^r"]
    },
    griffinstouch : {
      rgx  : /\b(Gft|n)(Gft)\b/,
      sort : ["n","Gft"]
    },
    henna : {
      rgx  : /\b(Hn|n)(Hn)\b/,
      sort : ["n","Hn"]
    },
    hummingbird : {
      rgx  : /\b(Hmg|n)(Hmg)\b/,
      sort : ["n","Hmg"]
    },
    inkspill : {
      rgx  : /\b(Iks|n)(Iks)\b/,
      sort : ["n","Iks"]
    },
    jaguar : {
      rgx  : /\b(Ja|n)(Ja)\b/,
      sort : ["n","Ja"]
    },
    kascel : {
      rgx  : /\b(Kc|n)(Kc)\b/,
      sort : ["n","Kc"]
    },
    lacedtobiano : {
      rgx  : /\b(Tl|n)(Tl)\b/,
      sort : ["n","Tl"]
    },
    mandarin : {
      rgx  : /\b(Mnd|n)(Mnd)\b/,
      sort : ["n","Mnd"]
    },
    masquerade : {
      rgx  : /\b(Msq|n)(Msq)\b/,
      sort : ["n","Msq"]
    },
    moulin : {
      rgx  : /\b(M|n)(M)\b/,
      sort : ["n","M"]
    },
    panda : {
      rgx  : /\b(Pan|n)(Pan)\b/,
      sort : ["n","Pan"]
    },
    peafowl : {
      rgx  : /\b(Pwl|n)(Pwl)\b/,
      sort : ["n","Pwl"]
    },
    pumpkin : {
      month : [8,9,10],
      rgx   : /\b(Pkn|n)(Pkn)\b/,
      sort  : ["n","Pkn"],
    },
    snowdripple : {
      rgx  : /\b(Sd|n)(Sd)\b/,
      sort : ["n","Sd"]
    },
    snowglobe : {
      rgx  : /\b(Glb|n)(Glb)\b/,
      sort : ["n","Glb"]
    },
    stainedglass : {
      rgx  : /\b(Sgl|n)(Sgl)\b/,
      sort : ["n","Sgl"]
    },
    tabby : {
      rgx  : /\b(Ty|n)(Ty)\b/,
      sort : ["n","Ty"]
    },
    tiger : {
      rgx  : /\b(Ti|n)(Ti)\b/,
      sort : ["n","Ti"]
    },
    tigerroan : {
      rgx  : /\b(Tr|n)(Tr)\b/,
      sort : ["n","Tr"]
    },
    universe : {
      rgx  : /\b(Unv|n)(Unv)\b/,
      sort : ["n","Unv"]
    },
    wooded : {
      rgx  : /\b(Wd|n)(Wd)\b/,
      sort : ["n","Wd"]
    },
    zebra : {
      rgx  : /\b(Ze|n)(Ze)\b/,
      sort : ["n","Ze"]
    },
  },

  // groups of mutations to be rolled
  mutationSets : {
    breedable : [
      "pumpkin",
      "eggnog"
    ],
    normal : [
      "glimmer",
      "snowglobe",
      "mandarin",
      "agis",
      "angler",
      "atlanticus",
      "bloodsplash",
      "butterfly",
      "candycane",
      "cemophora",
      "checkered",
      "christmasbells",
      "christmaslights",
      "cloudedleopard",
      "fawn",
      "frostsplash",
      "griffinstouch",
      "jaguar",
      "kascel",
      "lacedtobiano",
      "moulin",
      "masquerade",
      "panda",
      "peafowl",
      "snowdripple",
      "stainedglass",
      "tabby",
      "tiger",
      "tigerroan",
      "zebra",
      "inkspill",
      "carved",
      "wooded",
      "universe",
      "hummingbird",
      "henna",
      "flametouched",
      "emblem",
    ]
  },

  // breeding potion data
  potionData : [
    { name : "No Potion"      },
    { name : "Glitch"         },
    { name : "Wrapping Paper" },
    { name : "Cookiedanner"   },
    { name : "Pot 'o' Gold"   },
    { name : "Firedapple"     },
    { name : "Guardian"       },
    { name : "Houndanner"     },
    { name : "Lava"           },
    { name : "Pastel Dun"     },
    { name : "Atmospherica"   }
  ],

  // Horse class for constructing Horse objects
  Horse : class {
    constructor(geno="",appy=[]) {
      this._pheno = "", this._geno = "", this._genes = [], this._appaloosa=[];
      this.geno = geno;
      this.appaloosa = appy;
    }

    get pheno() { return this._pheno; }
    set pheno(pheno) { return false; }

    get geno() { return this._geno; }
    set geno(geno) {
      if (!geno||typeof geno !== 'string') return false;
      this._geno = geno;
      this._genes = (geno == "") ? [] : geno.split(" ");
      return true;
    }

    get genes() { return this._genes; }
    set genes(genes) {
      if (!genes||typeof genes !== 'array') return false;
      this._genes = genes;
      this._geno = genes.join(" ");
    }

    addGene(gene) {
      if (!gene||typeof gene !== "string") return false;
      this.genes = this._genes.push(gene);
    }

    isAppaloosa() { return this.geno.match(/\b(Lp|n)(Lp)\b/) ? true : false; }
    get appaloosa() { return this._appaloosa; }
    set appaloosa(appy) {
      if (!appy||typeof appy !== 'object') return false;
      this._appaloosa = appy;
    }
  },




  // ======================================================================
  // helper functions

  // called from breed button handler
  breed : function() {
    // 'this' is module - nord.breeding
    this.initBreed();
    try {
      const output = nord.state.breeding.output,
            twins = nord.state.breeding.breed.twins,
            foals = nord.state.breeding.breed.foals;
      this.rollTwinsChance();
      this.rollFoals();

      const join = (twins) ? "AND" : "OR",
            str0 = "Geno: " + foals[0].geno + "<br>Pheno: " + foals[0].pheno,
            str1 = "Geno: " + foals[1].geno + "<br>Pheno: " + foals[1].pheno,
            out = str0 + "<br>" + join + "<br>" + str1;
      rzl.addDiv(output,{content:out});

      console.log("breed complete",nord.state.breeding.breed);
      output.classList.remove("rzl-hidden");
    } catch (e) {
      console.error(e);return;
    }
  },

  // initialise breed data
  initBreed : function() {
    const breed = nord.state.breeding.breed,
          fields = nord.state.breeding.fields,
          siregeno = fields.siregeno.value,
          sireappy = [fields.sirepatn1.value,fields.sirepatn2.value],
          damgeno = fields.damgeno.value,
          damappy = [fields.dampatn1.value,fields.dampatn2.value];
    rzl.destroyChildren(nord.state.breeding.output);
    breed.sire = new this.Horse(siregeno,sireappy);
    breed.dam = new this.Horse(damgeno,damappy);
    breed.foals = [new this.Horse(),new this.Horse()];
  },

  // roll for twins
  rollTwinsChance: function() {
    const state = nord.state.breeding,
          potion = state.fields.luck2.checked;
          cap = 1000,
          rng = rzl.rng1to(cap),
          chance = (potion) ? 150 : 8,
    state.breed.twins = (rng <= chance) ? true : false;
    state.breed.stats.twins = {
      potion  : potion,
      rng     : rng,
      chance  : chance,
      cap     : cap,
      success : state.breed.twins
    };
    return state.breed.twins;
  },

  // roll all steps for each foal
  rollFoals: function() {
    const foals = nord.state.breeding.breed.foals;
    for (f in foals) {
      this.rollGeneSet(foals[f],"common");
      this.rollGeneSet(foals[f],"dilutes");
      this.rollGeneSet(foals[f],"whites");
      this.rollAppaloosa(foals[f]);
      this.rollMutations(foals[f]);

      foals[f].geno = foals[f].genes.join(" ");
    }
  },

  // roll set of genes for foal using geneSets[setName]
  rollGeneSet: function(foal,setName) {
    if (!foal || !setName) return false;
    const geneSet = this.geneSets[setName];
    for (g in geneSet) this.rollGene(foal,geneSet[g]);
  },
  // roll gene for foal using geneData[geneName]
  rollGene: function(foal,geneName) {
    if (!foal || !geneName) return false;
    const breed = nord.state.breeding.breed,
          geneData = this.geneData[geneName],
          rgx = geneData.rgx,
          sort = geneData.sort;

    // gather parent and roll foal genes
    let sireGene = this.matchGenes(breed.sire.geno,rgx);
    let damGene = this.matchGenes(breed.dam.geno,rgx);

    // handle specific needs for certain genes
    if (geneName === "agouti") {
      // in case of error push unknown
      // is this needed? found in old breeder - Elliot(Raziel)
      if (!sireGene||!damGene) { foal.genes.push("??");return; }
    } else {
      if (!sireGene) sireGene = ["n","n"];
      if (!damGene) damGene = ["n","n"];
    }

    let foalGene = this.finalisePart(sireGene,damGene,sort);

    // join the parts together into gene
    foalGene = foalGene.join("");

    // if gene true, push gene to foal data and return
    // if (foalGene!=="nn") return foal.genes.push(foalGene);
    if (foalGene!=="nn") return foal.addGene(foalGene);
    else return false;
  },
  // roll appaloosa gene and markings
  rollAppaloosa: function(foal) {
    if (!foal) return false;

    // roll appaloosa gene and update foal.isAppaloosa
    this.rollGene(foal,"appaloosa");

    // return now if foal not appaloosa
    if (foal.isAppaloosa) {
      const sort = ["patn1","patn2","varn","snow","frost","fall","nopatn"],
            sireappy = nord.state.breeding.breed.sire.appaloosa,
            damappy = nord.state.breeding.breed.dam.appaloosa;
      foal.appaloosa = this.finalisePart(sireappy,damappy,sort);
    }
  },
  //
  rollMutations : function(foal) {
    if (!foal) return false;

    const siregeno = nord.state.breeding.breed.sire.geno,
          damgeno = nord.state.breeding.breed.dam.geno;

    // breedables
    for (let m in this.mutationSets.breedable) {
      const mut = this.mutationSets.breedable[m],
            sort = this.mutationData[mut].sort,
            rgx = this.mutationData[mut].rgx,
            rng = rzl.rng1to(1000),
            curDate = new Date(),
            curMonth = curDate.getMonth(),
            mutMonth = this.mutationData[mut].month;
      let sireGene = this.matchGenes(siregeno,rgx),
          damGene = this.matchGenes(damgeno,rgx);
      if (sireGene||damGene) {
        if (mutMonth.includes(curMonth)||rng===1) {
          if (!sireGene) sireGene = ["n","n"];
          if (!damGene) damGene = ["n","n"];
          let foalGene = this.finalisePart(sireGene,damGene,sort);
          foalGene = foalGene.join("");
          if (foalGene!=="nn") foal.addGene(foalGene);
        }
      } else if (mutMonth.includes(curMonth)&&rng<=47) {
        foal.addGene(sort.join(""));
      }
    }

    // normal
    for (let m in this.mutationSets.normal) {
      const mut = this.mutationSets.normal[m],
            sort = this.mutationData[mut].sort,
            rgx = this.mutationData[mut].rgx;
      let sireGene = this.matchGenes(siregeno,rgx),
          damGene = this.matchGenes(damgeno,rgx);
      if (!sireGene) sireGene = ["n","n"];
      if (!damGene) damGene = ["n","n"];
      if (mut === "glimmer") {
        const rng = rzl.rng1to(10000),
              x = rzl.rng1to(100),
              rad = (((sireGene.includes("Glm^r")||damGene.includes("Glm^r"))&&x<=50)||rng<=80),
              gfrom = rad ? "Glm" : "Glm^r",
              gto = rad ? "Glm^r" : "Glm";
        while (sireGene.includes(gfrom)) {sireGene[sireGene.indexOf(gfrom)]=gto;}
        while (damGene.includes(gfrom)) {damGene[damGene.indexOf(gfrom)]=gto;}
      }
      let foalGene = this.finalisePart(sireGene,damGene,sort);
      foalGene = foalGene.join("");
      if (foalGene!=="nn") foal.addGene(foalGene);
    }
  },
  // get gene array from given geno using given regexp
  matchGenes: function(geno,rgx) {
    if (!geno || !rgx) return false; // need geno and regex
    let match = geno.match(rgx); // get matching gene from geno as parts
    if (!match) return false;
    return [match[1],match[2]];
  },
  finalisePart: function(sirepart,dampart,sort) {
    // roll a random gene from each of the parent genes
    const sireIndex = rzl.rng0to(sirepart.length-1),
          damIndex = rzl.rng0to(dampart.length-1);
    let foalpart = [sirepart[sireIndex],dampart[damIndex]];

    // if sort parameter is present then sort the parts
    if (sort) foalpart.sort((a,b) => {return sort.indexOf(a) - sort.indexOf(b);});

    return foalpart;
  },


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
      // this.patterns = {};
      // for (let p in nord.breeding.patterns) {
        // this.patterns
      // }

      // this.patterns = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.breeding.patterns,"name");
      this.potions = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.breeding.potionData,"name");
      rzl.setSelOpts(this.fields.sirepatn1,nord.breeding.patterns);
      rzl.setSelOpts(this.fields.sirepatn2,nord.breeding.patterns);
      rzl.setSelOpts(this.fields.dampatn1,nord.breeding.patterns);
      rzl.setSelOpts(this.fields.dampatn2,nord.breeding.patterns);
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
              {tag:"select",class:"itemWidth",id:"sirepatn1"},
              {tag:"select",class:"itemWidth",id:"sirepatn2"}
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
              {tag:"select",class:"itemWidth",id:"dampatn1"},
              {tag:"select",class:"itemWidth",id:"dampatn2"}
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
        {id:"output",class:"rzl-hidden",style:{"text-align":"center"}},
        {id:"statsout",class:"rzl-hidden",style:{"text-align":"center"}}
      ]
    },
  },
};
