nord.breeding = {
  // details of possible horse genes
  geneData : {
    agouti    : { rgx : /(A[t+]?|a)(A[t+]?|a)/, sort : ["A+","At","A","a"] },
    appaloosa : { rgx : /\b(Lp|n)(Lp)\b/,       sort : ["n","Lp"]          },
    black     : { rgx : /\b(E|e)(E|e)\b/,       sort : ["E","e"]           },
    champagne : { rgx : /\b(Ch|n)(Ch)\b/,       sort : ["n","Ch"]          },
    cream     : { rgx : /\b(Cr|n)(Cr)\b/,       sort : ["n","Cr"]          },
    dun       : { rgx : /\b(D|n)(D)\b/,         sort : ["n","D"]           },
    flaxen    : { rgx : /\b(f|n)(f)\b/,         sort : ["n","f"]           },
    grey      : { rgx : /\b(G|n)(G)\b/,         sort : ["n","G"]           },
    overo     : { rgx : /\b(O|n)(O)\b/,         sort : ["n","O"]           },
    pangare   : { rgx : /\b(P|n)(P)\b/,         sort : ["n","P"]           },
    pearl     : { rgx : /\b(prl|n)(prl)\b/,     sort : ["n","prl"]         },
    rabicano  : { rgx : /\b(Rb|n)(Rb)\b/,       sort : ["n","Rb"]          },
    roan      : { rgx : /\b(R|n)(R)\b/,         sort : ["n","R"]           },
    sabino    : { rgx : /\b(Sb|n)(Sb)\b/,       sort : ["n","Sb"]          },
    silver    : { rgx : /\b(Z|n)(Z)\b/,         sort : ["n","Z"]           },
    sooty     : { rgx : /\b(Sty|n)(Sty)\b/,     sort : ["n","Sty"]         },
    splash    : { rgx : /\b(Spl|n)(Spl)\b/,     sort : ["n","Spl"]         },
    tobiano   : { rgx : /\b(Tb|n)(Tb)\b/,       sort : ["n","Tb"]          },
    white     : { rgx : /\b(W|n)(W)\b/,         sort : ["n","W"]           },
  },

  // groups of genes to be rolled
  geneSets : {
    common  : [ "black", "agouti" ],
    dilutes : [ "champagne", "sooty", "silver", "pangare", "cream", "grey", "roan", "dun", "pearl", "flaxen" ],
    whites  : [ "sabino", "tobiano", "rabicano", "overo", "splash", "white" ],
  },

  // list of all appaloosa patterns
  patterns : [ "nopatn", "patn1", "patn2", "varn", "snow", "frost", "fall" ],

  // details of different mutations
  mutationData : {
    agis : { rgx : /\b(Ags|n)(Ags)\b/, sort : ["n","Ags"] },
    angler : { rgx : /\b(Ang|n)(Ang)\b/, sort : ["n","Ang"] },
    atlanticus : { rgx : /\b(Atl|n)(Atl)\b/, sort : ["n","Atl"] },
    bloodsplash : { rgx : /\b(Bsh|n)(Bsh)\b/, sort : ["n","Bsh"] },
    butterfly : { rgx : /\b(Bp|n)(Bp)\b/, sort : ["n","Bp"] },
    candycane : { rgx : /\b(Cnd|n)(Cnd)\b/, sort : ["n","Cnd"] },
    carved : { rgx : /\b(Crv|n)(Crv)\b/, sort : ["n","Crv"] },
    cemophora : { rgx : /\b(Cmp|n)(Cmp)\b/, sort : ["n","Cmp"] },
    checkered : { rgx : /\b(Cc|n)(Cc)\b/, sort : ["n","Cc"] },
    christmasbells : { rgx : /\b(Bls|n)(Bls)\b/, sort : ["n","Bls"] },
    christmaslights : { rgx : /\b(Lht|n)(Lht)\b/, sort : ["n","Lht"] },
    cloudedleopard : { rgx : /\b(Cd|n)(Cd)\b/, sort : ["n","Cd"] },
    eggnog : { month : [10,11,0,1], rgx : /\b(Nog|n)(Nog)\b/, sort : ["n","Nog"] },
    emblem : { rgx : /\b(Em|n)(Em)\b/, sort : ["n","Em"] },
    fawn : { rgx : /\b(Fwn|n)(Fwn)\b/, sort : ["n","Fwn"] },
    flametouched : { rgx : /\b(Flm|n)(Flm)\b/, sort : ["n","Flm"] },
    frostsplash : { rgx : /\b(Fspl|n)(Fspl)\b/, sort : ["n","Fspl"] },
    glimmer : { rgx : /\b(Glm(?:^r)?|n)(Glm(?:\^r)?)\b/, sort : ["n","Glm","Glm^r"] },
    griffinstouch : { rgx : /\b(Gft|n)(Gft)\b/, sort : ["n","Gft"] },
    henna : { rgx : /\b(Hn|n)(Hn)\b/, sort : ["n","Hn"] },
    hummingbird : { rgx : /\b(Hmg|n)(Hmg)\b/, sort : ["n","Hmg"] },
    inkspill : { rgx : /\b(Iks|n)(Iks)\b/, sort : ["n","Iks"] },
    jaguar : { rgx : /\b(Ja|n)(Ja)\b/, sort : ["n","Ja"] },
    kascel : { rgx : /\b(Kc|n)(Kc)\b/, sort : ["n","Kc"] },
    lacedtobiano : { rgx : /\b(Tl|n)(Tl)\b/, sort : ["n","Tl"] },
    mandarin : { rgx : /\b(Mnd|n)(Mnd)\b/, sort : ["n","Mnd"] },
    masquerade : { rgx : /\b(Msq|n)(Msq)\b/, sort : ["n","Msq"] },
    moulin : { rgx : /\b(M|n)(M)\b/, sort : ["n","M"] },
    panda : { rgx : /\b(Pan|n)(Pan)\b/, sort : ["n","Pan"] },
    peafowl : { rgx : /\b(Pwl|n)(Pwl)\b/, sort : ["n","Pwl"] },
    pumpkin : { month : [8,9,10], rgx : /\b(Pkn|n)(Pkn)\b/, sort : ["n","Pkn"] },
    snowdripple : { rgx : /\b(Sd|n)(Sd)\b/, sort : ["n","Sd"] },
    snowglobe : { rgx : /\b(Glb|n)(Glb)\b/, sort : ["n","Glb"] },
    stainedglass : { rgx : /\b(Sgl|n)(Sgl)\b/, sort : ["n","Sgl"] },
    tabby : { rgx : /\b(Ty|n)(Ty)\b/, sort : ["n","Ty"] },
    tiger : { rgx : /\b(Ti|n)(Ti)\b/, sort : ["n","Ti"] },
    tigerroan : { rgx : /\b(Tr|n)(Tr)\b/, sort : ["n","Tr"] },
    universe : { rgx : /\b(Unv|n)(Unv)\b/, sort : ["n","Unv"] },
    wooded : { rgx : /\b(Wd|n)(Wd)\b/, sort : ["n","Wd"] },
    zebra : { rgx : /\b(Ze|n)(Ze)\b/, sort : ["n","Ze"] },
  },

  // groups of mutations to be rolled
  mutationSets : {
    breedable : [ "pumpkin", "eggnog" ],
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

  // [pheno,rgx]
  phenoData : {
    common : [
      [ "Chestnut",      /\bee\s(?:A[t+]?|a){2}\b/ ],
      [ "Black",         /\bE[Ee]\saa\b/            ],
      [ "Bay",           /\bE[Ee]\sA[Aa]\b/        ],
      [ "Wild Bay",      /\bE[Ee]\sA\+(?:A\+?|a)\b/ ],
      [ "Seal Bay",      /\bE[Ee]\sAt(?:At?|a)\b/   ],
      [ "Wild Seal Bay", /\bE[Ee]\sA\+At\b/         ],
    ],
    normal : [
      [ "Champagne",      /\b(?:n|Ch)Ch\b/   ],
      [ "Cream",          /\b(?:n|Cr)Cr\b/   ],
      [ "Dominant White", /\b(?:n|W)W\b/     ],
      [ "Dun",            /\b(?:n|D)D\b/     ],
      [ "Flaxen",         /\b(?:n|f)f\b/     ],
      [ "Grey",           /\b(?:n|G)G\b/     ],
      [ "Overo",          /\b(?:n|O)O\b/     ],
      [ "Pangare",        /\b(?:n|P)P\b/     ],
      [ "Pearl",          /\b(?:n|prl)prl\b/ ],
      [ "Rabicano",       /\b(?:n|Rb)Rb\b/   ],
      [ "Roan",           /\b(?:n|R)R\b/     ],
      [ "Sabino",         /\b(?:n|Sb)Sb\b/   ],
      [ "Silver",         /\b(?:n|Z)Z\b/     ],
      [ "Sooty",          /\b(?:n|Sty)Sty\b/ ],
      [ "Splash",         /\b(?:n|Spl)Spl\b/ ],
      [ "Tobiano",        /\b(?:n|Tb)Tb\b/   ],
    ],
    appaloosa : [
      [ "Semi-Leopard",    /\bLpLp\s(\w{4,5})\s(?!\1)\w{4,5}\b/    ],
      [ "Fewspot",         /\bLpLp(?:\spatn1){2}\b/                ],
      [ "Snowcap",         /\bLpLp(?:\spatn2){2}\b/                ],
      [ "Varnish Roan",    /\bLpLp(?:\svarn){2}|nLp(?:\svarn)\b/   ],
      [ "Snowflake",       /\bLpLp(?:\ssnow){2}|nLp(?:\ssnow)\b/   ],
      [ "Frosted",         /\bLpLp(?:\sfrost){2}|nLp(?:\sfrost)\b/ ],
      [ "Snowfall",        /\bLpLp(?:\sfall){2}|nLp(?:\sfall)\b/   ],
      [ "Leopard",         /\bnLp\spatn1\b/                        ],
      [ "Spotted Blanket", /\bnLp\spatn2\b/                        ],
    ],
    mutations : [
      [ "Agis",                /\b(?:n|Ags)Ags\b/       ],
      [ "Angler",              /\b(?:n|Ang)Ang\b/       ],
      [ "Atlanticus",          /\b(?:n|Atl)Atl\b/       ],
      [ "Bloodsplash",         /\b(?:n|Bsh)Bsh\b/       ],
      [ "Butterfly",           /\b(?:n|Bp)Bp\b/         ],
      [ "Candy Cane",          /\b(?:n|Cnd)Cnd\b/       ],
      [ "Carved",              /\b(?:n|Crv)Crv\b/       ],
      [ "Cemophora",           /\b(?:n|Cmp)Cmp\b/       ],
      [ "Checkered",           /\b(?:n|Cc)Cc\b/         ],
      [ "Christmas Bells",     /\b(?:n|Bls)Bls\b/       ],
      [ "Christmas Lights",    /\b(?:n|Lht)Lht\b/       ],
      [ "Clouded Leopard",     /\b(?:n|Cd)Cd\b/         ],
      [ "Eggnog",              /\b(?:n|Nog)Nog\b/       ],
      [ "Emblem",              /\b(?:n|Em)Em\b/         ],
      [ "Fawn",                /\b(?:n|Fwn)Fwn\b/       ],
      [ "Flametouched",        /\b(?:n|Flm)Flm\b/       ],
      [ "Frostsplash",         /\b(?:n|Fspl)Fspl\b/     ],
      [ "Glimmer",             /\b(?:n|Glm)Glm\b/       ],
      [ "Griffin's Touch",     /\b(?:n|Gft)Gft\b/       ],
      [ "Henna",               /\b(?:n|Hn)Hn\b/         ],
      [ "Hummingbird",         /\b(?:n|Hmg)Hmg\b/       ],
      [ "Inkspill",            /\b(?:n|Iks)Iks\b/       ],
      [ "Jaguar",              /\b(?:n|Ja)Ja\b/         ],
      [ "Kascel",              /\b(?:n|Kc)Kc\b/         ],
      [ "Laced Tobiano",       /\b(?:n|Tl)Tl\b/         ],
      [ "Mandarin",            /\b(?:n|Mnd)Mnd\b/       ],
      [ "Masquerade",          /\b(?:n|Msq)Msq\b/       ],
      [ "Moulin",              /\b(?:n|M)M\b/           ],
      [ "Panda",               /\b(?:n|Pan)Pan\b/       ],
      [ "Peafowl",             /\b(?:n|Pwl)Pwl\b/       ],
      [ "Pumpkin",             /\b(?:n|Pkn)Pkn\b/       ],
      [ "Radioactive Glimmer", /\b(?:n|Glm\^r)Glm\^r\b/ ],
      [ "Snowdripple",         /\b(?:n|Sd)Sd\b/         ],
      [ "Snowglobe",           /\b(?:n|Glb)Glb\b/       ],
      [ "Stained Glass",       /\b(?:n|Sgl)Sgl\b/       ],
      [ "Tabby",               /\b(?:n|Ty)Ty\b/         ],
      [ "Tiger",               /\b(?:n|Ti)Ti\b/         ],
      [ "Tiger Roan",          /\b(?:n|Tr)Tr\b/         ],
      [ "Wooded",              /\b(?:n|Wd)Wd\b/         ],
      [ "Universe",            /\b(?:n|Unv)Unv\b/       ],
      [ "Zebra",               /\b(?:n|Ze)Ze\b/         ],
    ],
  },

  // breeding potion data
  potionData : [ "No Potion", "Atmospherica", "Cookiedanner", "Firedapple", "Glitch", "Guardian", "Houndanner", "Lava", "Pastel Dun", "Pot 'o' Gold", "Wrapping Paper" ],

  // Horse class for constructing Horse objects
  Horse : class {
    constructor(geno="",appy=[],potions=false) {
      this._geno = "", this._genes = [], this._appaloosa = [];
      this._pheno = "", this._geneticsChanged = false, this._potions = [];
      this.geno = geno;
      this.appaloosa = appy;

      if (!potions) { potions = [0,0,0,0,0]; }
      else { for (let p=0;p<5;p++) { if (!potions[p]) potions[p]=0 }}
      this._potions = potions;
    }

    static breed(sire,dam) {}

    static readPheno(horse) {
      horse._pheno = "PHENO";
      // read pheno
      const phenoData = nord.breeding.phenoData;
      let phenoStrings = [], carrier = [];

      // commons
      (function() {
        let testStr;

        // loop over phenoData groups
        for (let group in phenoData) {
          for (let item in phenoData[group]) {

            // if appaloosa we need appaloosa genes and patterns
            if (group==="appaloosa") {
              testStr = horse.geno.match(/\b((?:n|Lp)Lp)\b/);
              if (testStr==="nLp") { testStr += " "+horse.appaloosa[0] }
              else { testStr += " "+horse.appaloosa[0]+" "+horse.appaloosa[1] }
            } else { // else just geno
              testStr = horse.geno;
            }

            // search test string with provided regexp
            if (phenoData[group][item][1].test(testStr)) {
              // if match then push the pheno string
              phenoStrings.push(phenoData[group][item][0]);
              // exit loop early once found to save time
              if (["common","appaloosa"].includes(group)) { break; }
            }
          }
        }
      })();

      // handle certain combinations
      (function() {
        let name = "", index = 0;
        // common exceptions
        (function() {

          // Pangare
          if (/\b[nP]P\b/.test(horse.geno)) {
            name = "Pangare"; const rgx = /\b(?:n|Sty|Z|R|Dn|Cr|Ch){2}\b/;
            phenoStrings.splice(phenoStrings.indexOf(name),1);
            if (phenoStrings.includes("Black") && !rgx.test(horse.geno)) {
              carrier.push(name);
            } else {
              phenoStrings.unshift(name);
            }
          }

          // Flaxen
          if (/\b[nf]f\b/.test(horse.geno)) {
            name = "Flaxen";
            phenoStrings.splice(phenoStrings.indexOf(name),1);
            if (!phenoStrings.includes("Chestnut")||/\bnf\b/.test(horse.geno)) {
              carrier.push(name);
            } else {
              phenoStrings.unshift(name);
            }
          }

          // Silver
          if (/\b[nZ]Z\b/.test(horse.geno)) {
            name = "Silver";
            phenoStrings.splice(phenoStrings.indexOf(name),1);
            if (phenoStrings.includes("Chestnut")) {
              carrier.push(name);
            } else {
              phenoStrings.unshift(name);
            }
          }

          // Sooty
          if (/\b[nSty]Sty\b/.test(horse.geno)) {
            name = "Sooty"; const rgx = /\b(?:n|P|Z|R|Dn|Cr|Ch){2}\b/;
            phenoStrings.splice(phenoStrings.indexOf(name),1);
            if (phenoStrings.includes("Black") && !rgx.test(horse.geno)) {
              carrier.push(name);
            } else {
              phenoStrings.unshift(name);
            }
          }

          // Grey
          if (/\b[nG]G\b/.test(horse.geno)) {
            name = "Grey";
            phenoStrings.splice(phenoStrings.indexOf(name),1);
            phenoStrings.unshift(name + " on");
          }

          // Dominant White
          if (/\b[nW]W\b/.test(horse.geno)) {
            name = "Dominant White";
            phenoStrings.splice(phenoStrings.indexOf(name),1);
            phenoStrings.unshift(name + " on");
          }

          // Pearl
          if (/\bnprl\b/.test(horse.geno)) {
            name = "Pearl";
            phenoStrings.splice(phenoStrings.indexOf(name),1);
            carrier.push(name);
          }

        })();
        // conditional exceptions
        function baseexception() {
          const bases = {
            "Chestnut" : [
              "Cremello Champagne Dun",
              "Gold Cream Champagne Dun",
              "Gold Champagne Dun",
              "Cremello Champagne",
              "Gold Champagne",
              "Cremello Dun",
              "Dunalino",
              "Chestnut Pearl",
              "Chestnut Roan",
              "Chestnut Dun",
              "Cremello",
              "Palomino",
              "Gold Champagne",
            ],
            "Black" : [
              "Smoky Cream Champagne Dun",
              "Smoky Grullo Champagne",
              "Grullo Champagne",
              "Smoky Cream Champagne",
              "Classic Cream Champagne",
              "Smoky Cream Grullo",
              "Smoky Grullo",
              "Black Pearl",
              "Blue Roan",
              "Grullo",
              "Smoky Cream",
              "Smoky Black",
              "Classic Champagne",
            ],
            "Bay" : [
              "Perlino Champagne Dun",
              "Amber Cream Champagne Dun",
              "Amber Champagne Dun",
              "Perlino Champagne",
              "Amber Cream Champagne",
              "Perlino Dun",
              "Dunskin",
              "Bay Pearl",
              "Bay Roan",
              "Bay Dun",
              "Perlino",
              "Buckskin",
              "Amber Champagne",
            ],
            "Wild Bay" : [
              "Wild Perlino Champagne Dun",
              "Wild Amber Cream Champagne Dun",
              "Wild Amber Champagne Dun",
              "Wild Perlino Champagne",
              "Wild Amber Cream Champagne",
              "Wild Perlino Dun",
              "Wild Dunskin",
              "Wild Bay Pearl",
              "Wild Bay Roan",
              "Wild Bay Dun",
              "Wild Perlino",
              "Wild Buckskin",
              "Wild Amber Champagne",
            ],
            "Seal Bay" : [
              "Burnt Perlino Champagne Dun",
              "Sable Cream Champagne Dun",
              "Sable Champagne Dun",
              "Burnt Perlino Champagne",
              "Sable Cream Champagne",
              "Burnt Perlino Dun",
              "Burnt Dunskin",
              "Seal Bay Pearl",
              "Seal Bay Roan",
              "Seal Bay Dun",
              "Burnt Perlino",
              "Burnt Buckskin",
              "Sable Champagne",
            ],
            "Wild Seal Bay" : [
              "Wild Burnt Perlino Champagne Dun",
              "Wild Sable Cream Champagne Dun",
              "Wild Sable Champagne Dun",
              "Wild Burnt Perlino Champagne",
              "Wild Sable Cream Champagne",
              "Wild Burnt Perlino Dun",
              "Wild Burnt Dunskin",
              "Wild Seal Bay Pearl",
              "Wild Seal Bay Roan",
              "Wild Seal Bay Dun",
              "Wild Burnt Perlino",
              "Wild Burnt Buckskin",
              "Wild Sable Champagne",
            ],
          };

          for (let base in bases) {
            if (phenoStrings.includes(base)) {
              switch (true) {
                case (/(?:(?:(?:n|Dn|Ch){2}|CrCr).*){3}/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Champagne"),1);
                  phenoStrings.splice(phenoStrings.indexOf("Cream"),1);
                  phenoStrings.splice(phenoStrings.indexOf("Dun"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][0];
                break;

                case (/(?:(?:(?:n|Dn|Ch|Cr){2}).*){3}/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Champagne"),1);
                  phenoStrings.splice(phenoStrings.indexOf("Cream"),1);
                  phenoStrings.splice(phenoStrings.indexOf("Dun"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][1];
                break;

                case (/(?:(?:n|Dn|Ch){2}.*){2}/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Champagne"),1);
                  phenoStrings.splice(phenoStrings.indexOf("Dun"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][2];
                break;

                case (/(?:(?:(?:n|Ch){2}|CrCr).*){2}/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Champagne"),1);
                  phenoStrings.splice(phenoStrings.indexOf("Cream"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][3];
                break;

                case (/(?:(?:n|Ch|Cr){2}.*){2}/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Champagne"),1);
                  phenoStrings.splice(phenoStrings.indexOf("Cream"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][4];
                break;

                case (/(?:(?:(?:n|Dn){2}|CrCr).*){2}/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Cream"),1);
                  phenoStrings.splice(phenoStrings.indexOf("Dun"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][5];
                break;

                case (/(?:(?:n|Dn|Cr){2}.*){2}/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Cream"),1);
                  phenoStrings.splice(phenoStrings.indexOf("Dun"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][6];
                break;

                case (/prl{2}/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Pearl"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][7];
                break;

                case (/[nR]R/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Roan"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][8];
                break;

                case (/(?:n|Dn)Dn/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Dun"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][9];
                break;

                case (/CrCr/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Cream"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][10];
                break;

                case (/nCr/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Cream"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][11];
                break;

                case (/(?:n|Ch)Ch/.test(horse.geno)):
                  phenoStrings.splice(phenoStrings.indexOf("Champagne"),1);
                  index = phenoStrings.indexOf(base);
                  phenoStrings[index] = bases[base][12];
                break;

              }
            }
          }

        }

        function pumpkinexception() {
          (function fixpumpkinbase() {
            if (phenoStrings.includes("Chestnut")) {
              index = phenoStrings.indexOf("Chestnut")
            } else if (phenoStrings.includes("Black")) {
              index = phenoStrings.indexOf("Black")
            } else if (phenoStrings.includes("Bay")) {
              index = phenoStrings.indexOf("Bay")
            } else if (phenoStrings.includes("Bay")) {
              index = phenoStrings.indexOf("Bay")
            } else if (phenoStrings.includes("Wild Bay")) {
              index = phenoStrings.indexOf("Wild Bay")
            } else if (phenoStrings.includes("Seal Bay")) {
              index = phenoStrings.indexOf("Seal Bay")
            } else if (phenoStrings.includes("Wild Seal Bay")) {
              index = phenoStrings.indexOf("Wild Seal Bay")
            }

            phenoStrings.splice(phenoStrings.indexOf("Pumpkin"),1);
            phenoStrings[index] = "Pumpkin";
          })();

          if (phenoStrings.includes("Roan")) {
            phenoStrings.splice(phenoStrings.indexOf("Roan"),1);
            phenoStrings.splice(phenoStrings.indexOf("Pumpkin")-1,0,"Roaned");
          }

          (function fixpumpkinwhite() {
            let fix = "";
            const whites = [
              "Tobiano",
              "Rabicano",
              "Splash",
              "Overo",
              "Semi Leopard Appaloosa",
              "Leopard Appaloosa",
              "Fewspot Appaloosa",
              "Blanket Appaloosa",
              "Snowcap Appaloosa",
              "Snowflake Appaloosa",
              "Varnish Roan",
              "Frosted Appaloosa",
              "Snowfall Appaloosa",
            ];

            for (let w in whites) {
              if (phenoStrings.includes(w)) {
                phenoStrings.splice(phenoStrings.indexOf(w),1);
                fix += (fix.length === 0) ? w : w + " ";
              }
            }
            index = phenoStrings.indexOf("Pumpkin") - 1;
            phenoStrings.splice(index,0,fix);
          })();

          if (phenoStrings.includes("Silver")||phenoStrings.includes("Flaxen")){
            phenoStrings.splice(phenoStrings.indexOf("Silver"),1);
            phenoStrings.splice(phenoStrings.indexOf("Flaxen"),1);
            phenoStrings.push("with Whipped Cream");
          }

          (function() {
            if (/(?:n|Dn)Dn/.test(horse.geno)) {
              phenoStrings.splice(phenoStrings.indexOf("Dun"),1);
              phenoStrings[phenoStrings.indexOf("Pumpkin")]="Dunkin";
            }
            if (/CrCr/.test(horse.geno)) {
              index = phenoStrings.indexOf("Pumpkin");
              phenoStrings[index] = "Baby Boo " + phenoStrings[index];
              phenoStrings.splice(phenoStrings.indexOf("Cream"),1);
            }
            if (/prlprl/.test(horse.geno)) {
              index = phenoStrings.indexOf("Pumpkin");
              phenoStrings[index] = "Pearly White " + phenoStrings[index];
              phenoStrings.splice(phenoStrings.indexOf("Pearl"),1);
            }
            if (/(?:n|Ch)Ch/.test(horse.geno)) {
              index = phenoStrings.indexOf("Pumpkin");
              phenoStrings[index] = "Bubbly " + phenoStrings[index];
              phenoStrings.splice(phenoStrings.indexOf("Champagne"),1);
            }
            if (/nCr/.test(horse.geno)) {
              index = phenoStrings.indexOf("Pumpkin");
              phenoStrings[index] = phenoStrings[index] + " Pie";
              phenoStrings.splice(phenoStrings.indexOf("Cream"),1);
            }
            if (/(?:n|Sty)Sty/.test(horse.geno)) {
              index = phenoStrings.indexOf("Pumpkin");
              phenoStrings[index] = phenoStrings[index] + " Spice";
              phenoStrings.splice(phenoStrings.indexOf("Sooty"),1);
            }
          })();

        }

        if (phenoStrings.includes("Pumpkin")) { pumpkinexception() }
        else { baseexception() }

        if (carrier.length) {
          carrier.unshift("\(")
          carrier.push("carrier \)")
          phenoStrings = phenoStrings.concat(carrier);
        }


      })();

      // roll RNG phenos
      (function() {
        // chosen by horse.luck (which luck potion it was bred with)
        const chances = [
          [  460,  540,  620,  700,  780,  860 ],
          [ 1000, 2000, 3000, 4000, 5000, 5080 ],
          [ 1500, 3000, 4500, 6000, 7500, 9000 ]
        ];
        // pheno to push, index matches index of respective chance
        const results = [
          "Birdcatcher Spots",
          "Brindle",
          "Bend-or Spots",
          "Somatic",
          "Chimera"
        ];

        const chance = chances[horse.luck], rng = rzl.rng1to(10000);

        function mimicry() {

          const rgx = /A(?:gs|ng|tl)|B(?:ls|sh|p)|C(?:c|mp|n?d|rv)|Em|F(?:lm|spl|wn)|G(?:ft|l(?:b|m(?:\^r)?))|H(?:mg|n)|Iks|Ja|Kc|Lht|M(?:nd|sq)?|Nog|P(?:[ak]n|wl)|S(?:d|gl)|T[ilry]|Unv|Wd|Ze/;

          if (!rgx.test(horse.geno)) {
            phenoStrings.push("Mimicry");
            let mimic = phenoData.mutations[rzl.rng0to(phenoData.mutations.length-1)][0];
            phenoStrings.push("("+mimic+")");
          }

        }

        // loop through chance array and act accordingly
        for (let c in chance) {
          if (rng <= chance[c]) {
            if (c < chance.length) { phenoStrings.push(results[c]); break; }
            else mimicry();
          }
        }

      })();

      // roll breeding potions
      (function() {
        let potionStrings = [];

        const potionData = nord.breeding.potionData,
              potions = horse.breedingPotions;
        for (let pot in potionData) {
          let p = parseInt(pot);
          if (p === 0) continue;
          if (potions.sire.includes(p) && potions.dam.includes(p)) {
            potionStrings.push(potionData[p]);
          } else if (potions.sire.includes(p) || potions.dam.includes(p)) {
            const rng = rzl.rng1to(100);
            if (rng <= 50) { potionStrings.push(potionData[p]); }
          }
        }

        // maximum of two to be kept
        while (potionStrings.length > 2) {
          potionStrings.splice(rzl.rng1to(potionStrings.length)-1,1);
        }

        phenoStrings.push(potionStrings.join(" "));
      })();

      if (phenoStrings.length>0) horse._pheno = phenoStrings.join(" ");

      // last few fixes and lethal check
      (function() {
        horse._pheno = horse._pheno.replace(/(Pumpkin Pie Spice)/, "Spiced Pumpkin Pie");
        horse._pheno = horse._pheno.replace(/(Dunkin Pie Spice)/, "Spiced Dunkin Pie");

        const rng = rzl.rng1to(100);
        if (/\bWW\b/.test(horse.geno)) {
          horse._pheno = "LETHAL WHITE";
        } else if (/\bOO\b/.test(horse.geno) && rng <= 60) {
          horse._pheno = "LETHAL OVERO";
        }
      })();

      horse._geneticsChanged = false;
    }

    get pheno() {
      // return this._pheno;

      if (!this._pheno || this._geneticsChanged == true) {
        nord.breeding.Horse.readPheno(this); return this._pheno;
      } else {
        return this._pheno;
      }
    }
    set pheno(pheno) { return; }

    get geno() { return this._geno; }
    set geno(geno) {
      if (!geno||typeof geno !== 'string') return false;
      this._geno = geno;
      this._genes = (geno == "") ? [] : geno.split(" ");
      this._geneticsChanged = true;
      return true;
    }

    get genes() { return this._genes; }
    set genes(genes) {
      if (!genes||typeof genes !== 'object') return false;
      this._genes = genes;
      this._geno = genes.join(" ");
      this._geneticsChanged = true;
    }

    addGene(gene) {
      if (!gene||typeof gene !== "string") return false;
      let genes = this.genes;
      genes.push(gene);
      this.genes = genes;
    }

    isAppaloosa() { return this.geno.test(/\b(?:n|Lp)Lp\b/); }
    get appaloosa() { return this._appaloosa; }
    set appaloosa(appy) {
      if (!appy||typeof appy !== 'object') return false;
      this._appaloosa = appy;
      this._geneticsChanged = true;
    }

    get luck() { return this._potions[0]; }
    set luck(luck) { return; }

    get breedingPotions() {
      return {
        sire : [ this._potions[1], this._potions[2] ],
        dam :  [ this._potions[3], this._potions[4] ],
      };
    }
    set breedingPotions(potions) { return; }
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
    let luck,potions;
    const breed = nord.state.breeding.breed,
          fields = nord.state.breeding.fields,
          siregeno = fields.siregeno.value,
          sireappy = [fields.sirepatn1.value,fields.sirepatn2.value],
          damgeno = fields.damgeno.value,
          damappy = [fields.dampatn1.value,fields.dampatn2.value];
    if (fields.luck1.checked) { luck = 1 }
    else if (fields.luck2.checked) { luck = 2 }
    else { luck = 0 }
    potions = [ luck, fields.sirebp1.selectedIndex, fields.sirebp2.selectedIndex, fields.dambp1.selectedIndex, fields.dambp2.selectedIndex ];

    rzl.destroyChildren(nord.state.breeding.output);
    breed.sire = new this.Horse(siregeno,sireappy);
    breed.dam = new this.Horse(damgeno,damappy);
    breed.foals = [
      new this.Horse("",[],potions),
      new this.Horse("",[],potions)
    ];
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
      if (!sireGene||!damGene) { foal.addGene("??");return; }
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
  // roll mutations
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

      rzl.setSelOpts(this.fields.sirepatn1,nord.breeding.patterns);
      rzl.setSelOpts(this.fields.sirepatn2,nord.breeding.patterns);
      rzl.setSelOpts(this.fields.dampatn1,nord.breeding.patterns);
      rzl.setSelOpts(this.fields.dampatn2,nord.breeding.patterns);
      rzl.setSelOpts(this.fields.sirebp1,nord.breeding.potionData);
      rzl.setSelOpts(this.fields.sirebp2,nord.breeding.potionData);
      rzl.setSelOpts(this.fields.dambp1,nord.breeding.potionData);
      rzl.setSelOpts(this.fields.dambp2,nord.breeding.potionData);
      // console.log(this.fields.sirebp1.selectedIndex)

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
