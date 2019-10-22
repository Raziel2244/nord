nord.cartography = {
  // regions of the world
  regions: [
    {
      name: "Aleria",
      level: 0,
      chance: 95,
      advantages: ["chkd", "grfn", "pfwl", "stgl"],
      disadvantages: ["crvd", "inks", "orth", "pmkn", "unvs"],
      items: [
        ["bkcl", "fthr", "sstk", "tnrk", "tcng"],
        ["lstk", "ebtl", "smgb"],
        ["lpt1", "smcn", "atgb"],
        ["scps", "glft", "chbs"],
        ["lsdn", "bcps", "lsct", "lshd", "frfx", "frsn", "atss", "tghs"]
      ],
      risk: false
    },
    {
      name: "Isles of Invermay",
      level: 1,
      chance: 85,
      advantages: ["clpd", "jgur", "mdrn", "tbby", "tigr", "tgrn"],
      disadvantages: ["blsp", "chkd", "flmt", "stgl"],
      items: [
        ["bkcl", "fthr", "sstk", "plbk", "tnrk", "trsn", "tcng"],
        ["ntvn", "ebtl", "smgb"],
        ["lstk", "smcn", "gogb"],
        ["scps", "rahb", "edrc"],
        ["bcps", "tmcl", "lsdn", "prbd", "atss", "tmfl"]
      ],
      risk: { chance: 5, cooldown: "1 days" }
    },
    {
      name: "Amadora: Eplana",
      level: 2,
      chance: 70,
      advantages: ["btfl", "embm", "hmbd", "kscl"],
      disadvantages: ["cmph", "hnna", "mdrn", "pnda", "wood"],
      items: [
        ["plft", "plst", "tcng"],
        ["lstk", "smcn", "smgb"],
        ["scps", "pram", "brsp"],
        ["bcps", "plfr", "atss"],
        ["frwf", "wfsk", "frwl"]
      ],
      risk: { chance: 7, cooldown: "3 days" }
    },
    {
      name: "Amadora: Estrana",
      level: 2,
      chance: 70,
      advantages: ["agis", "fawn", "hnna", "lctb", "zbra"],
      disadvantages: [
        "cndy",
        "chbl",
        "chlt",
        "egng",
        "frst",
        "sndp",
        "snfl",
        "sngb"
      ],
      items: [
        ["plft", "plst", "tcng"],
        ["lstk", "smcn", "smgb"],
        ["scps", "pram", "sthr"],
        ["bcps", "mgld", "atss", "fsdh"],
        ["fefx", "fsvl", "obsd", "lgld", "sdtm"]
      ],
      risk: { chance: 7, cooldown: "3 days" }
    },
    {
      name: "Korandyire",
      level: 3,
      chance: 55,
      advantages: ["aglr", "atln", "glmr", "muln", "unvs"],
      disadvantages: ["clpd", "jgur", "tbby", "tigr", "tgrn"],
      items: [
        ["rahb", "odgm", "tcng"],
        ["sash", "mggm", "bskm"],
        ["astd", "dngr", "arwt"],
        ["arsh", "vdng", "atss"],
        ["wdbc", "nksk", "spfm", "dndl", "xfth"]
      ],
      risk: { chance: 25, cooldown: "5 days", pchance: 10, potion: "Auralight" }
    },
    {
      name: "Kisanara",
      level: 4,
      chance: 40,
      advantages: ["cmph", "flmt", "pnda", "wood"],
      disadvantages: ["aglr", "btfl", "embm", "hmbd", "kscl"],
      items: [
        ["skfg", "sksn", "tcng"],
        ["dngr", "scps", "smgb"],
        ["vdng", "bcps"],
        ["bkcm", "hfmp", "atss", "acdh"],
        ["wdsc", "rtgn", "frpl"]
      ],
      risk: { chance: 25, cooldown: "7 days", pchance: 10, potion: "Toxicate" }
    },
    {
      name: "Quendorin",
      level: 5,
      chance: 24,
      advantages: [
        "cndy",
        "chbl",
        "chlt",
        "egng",
        "frst",
        "sndp",
        "snfl",
        "sngb"
      ],
      disadvantages: ["agis", "atln", "fawn", "lctb", "zbra"],
      items: [
        ["icsh", "dngr"],
        ["vdng", "rpft"],
        ["nseg", "aric"],
        ["mtrt", "xdng", "atss", "icfl"],
        ["wdgc", "tcgl", "fzck"]
      ],
      risk: { chance: 12, cooldown: "10 days" }
    },
    {
      name: "Malgosfrom",
      level: 6,
      chance: 10,
      advantages: ["blsp", "crvd", "inks", "orth", "pmkn"],
      disadvantages: ["glmr", "grfn", "muln", "pfwl"],
      items: [
        ["vdng", "pksd"],
        ["rtgn", "astd"],
        ["mtrt", "xdng", "atss"],
        ["lsdn", "rdsv", "nchd"],
        ["wdpc", "rtgm"]
      ],
      risk: {
        chance: 30,
        cooldown: "14 days",
        pchance: 15,
        potion: "Blood/Nightshade"
      }
    }
  ],

  // data for horses
  horses: [
    { level: "0", name: "No registered level" },
    { level: "1", name: "Basic training" },
    { level: "2", name: "Quality blood" },
    { level: "3", name: "Excellent blood" },
    { level: "4", name: "Supreme blood" },
    { level: "5", name: "Heroic blood" },
    { level: "6", name: "Legendary blood" }
  ],

  // reward tiers
  tiers: [
    { name: "Very Common", chance: 50, binoChance: 33 },
    { name: "Common", chance: 29, binoChance: 26 },
    { name: "Uncommon", chance: 13, binoChance: 23 },
    { name: "Rare", chance: 6, binoChance: 13 },
    { name: "Very Rare", chance: 2, binoChance: 5 }
  ],

  // possible rewards
  items: {
    acdh: { name: "Anaconda Head" },
    atgb: { name: "Antique Gold Bridle" },
    aric: { name: "Arcane Ice Shard" },
    arsh: { name: "Arcane Shard" },
    arwt: { name: "Arcane Water" },
    astd: { name: "Asteroid Fragment" },
    atss: { name: "Attachment Stone Shard" },
    bskm: { name: "Basket of Arcane Mushrooms" },
    brsp: { name: "Bear Spine" },
    bcps: { name: "Bursting Coin Purse" },
    bkcl: { name: "Broken Chalice" },
    bkcm: { name: "Broken Compass" },
    chbs: { name: "Cherry Blossom Seeds" },
    obsd: { name: "Chunk of Obsidian" },
    dngr: { name: "Dangerous Encounter" },
    dndl: { name: "Destabilising Nodule" },
    ebtl: { name: "Empty Potion Bottle" },
    xfth: { name: "Exquisite Feather (Roaning Triturate)" },
    edrc: { name: "Extinct Dragon" },
    xdng: { name: "Extremely Dangerous Encounter" },
    fthr: { name: "Feather" },
    frpl: { name: "Fire Opal" },
    fsdh: { name: "Fossilised Dragon Horn" },
    frwl: { name: "Friendly Barn Owl (Swan Familiar)" },
    fefx: { name: "Friendly Fennec Fox (Fox Familiar)" },
    frfx: { name: "Friendly Fox (Fox Familiar)" },
    fsvl: { name: "Friendly Serval (Cat Familiar)" },
    frsn: { name: "Friendly Swan (Swan Familiar)" },
    frwf: { name: "Friendly Wolf (Hound Familiar)" },
    fzck: { name: "Frozen Cookie" },
    glft: { name: "Glimpse of The Future" },
    gogb: { name: "Golden Grub" },
    hfmp: { name: "Half of a Pirates Map" },
    icfl: { name: "Ice Flower" },
    icsh: { name: "Ice Shard" },
    nksk: { name: "Ink Sack" },
    ntvn: { name: "Interesting Vine" },
    lgld: { name: "Large Gold Ore" },
    lstk: { name: "Large Stick" },
    lsct: { name: "Lost Cat (Cat Familiar)" },
    lshd: { name: "Lost Hound (Hound Familiar)" },
    lsdn: { name: "Lost Nordanner" },
    lpt1: { name: "Luck Potion #1" },
    mggm: { name: "Magnificently Odd Gemstone" },
    mgld: { name: "Medium Gold Nugget" },
    mtrt: { name: "Meteorite" },
    nchd: { name: "Necromancer's Hand" },
    nseg: { name: "Nest of Eggs" },
    odgm: { name: "Odd Gemstone" },
    plbk: { name: "Peeled Bark" },
    pram: { name: "Piece of Rusty Armour" },
    plft: { name: "Pile of Feathers (3 Feathers)" },
    plfr: { name: "Pile of Furs (Closet Full of Clothes)" },
    plst: { name: "Pile of Sticks (3 Sticks)" },
    prbd: { name: "Potent Red Berry Dye" },
    pksd: { name: "Pumpkin Seeds" },
    rdsv: { name: "Radioactive Sliver" },
    rpft: { name: "Raptor Feathers" },
    rahb: { name: "Rare Herb" },
    rtgm: { name: "Relic of The Gods (Mutation)" },
    rtgn: { name: "Relic of The Gods (Natural)" },
    sdtm: { name: "Sands of Time" },
    sash: { name: "Small Arcane Shard" },
    scps: { name: "Small Coin Purse" },
    smgb: { name: "Small Grub" },
    smcn: { name: "Small Pile of Coins" },
    sstk: { name: "Small Stick" },
    sthr: { name: "Small Thread" },
    skfg: { name: "Snake Fang" },
    sksn: { name: "Snake Skin" },
    spfm: { name: "Sprite Familiar" },
    tmcl: { name: "Tameable Ocelot (Cat Familiar)" },
    tcng: { name: "Tiny Copper Nugget" },
    tnrk: { name: "Tiny Rock" },
    tcgl: { name: "Touch of Glimmer (nGlm Foal Only)" },
    trsn: { name: "Tree Resin" },
    tghs: { name: "Tulia's Golden Horse Shoe" },
    tmfl: { name: "Tulia's Mane Flower" },
    vdng: { name: "Very Dangerous Encounter" },
    wdbc: { name: "Weird Bronze Coin" },
    wdgc: { name: "Weird Gold Coin" },
    wdpc: { name: "Weird Platinum Coin" },
    wdsc: { name: "Weird Silver Coin" },
    wfsk: { name: "Wolf Skull" }
  },

  // nordanner mutations
  mutations: {
    agis: { name: "Agis" },
    aglr: { name: "Angler" },
    atln: { name: "Atlanticus" },
    blsp: { name: "Bloodsplash" },
    btfl: { name: "Butterfly" },
    cndy: { name: "Candy Cane" },
    crvd: { name: "Carved" },
    cmph: { name: "Cemophora" },
    chkd: { name: "Checkered" },
    chbl: { name: "Christmas Bells" },
    chlt: { name: "Christmas Lights" },
    clpd: { name: "Clouded Leopard" },
    egng: { name: "Eggnog" },
    embm: { name: "Emblem" },
    fawn: { name: "Fawn" },
    flmt: { name: "Flametouched" },
    frst: { name: "Frostsplash" },
    glmr: { name: "Glimmer" },
    grfn: { name: "Griffin’s Touch" },
    hnna: { name: "Henna" },
    hmbd: { name: "Hummingbird" },
    inks: { name: "Inkspill" },
    jgur: { name: "Jaguar" },
    kscl: { name: "Kascel" },
    lctb: { name: "Laced Tobiano" },
    mdrn: { name: "Mandarin" },
    muln: { name: "Moulin" },
    orth: { name: "Ortho" },
    pnda: { name: "Panda" },
    pfwl: { name: "Peafowl" },
    pmkn: { name: "Pumpkin" },
    sndp: { name: "Snowdripple" },
    snfl: { name: "Snowfall" },
    sngb: { name: "Snowglobe" },
    stgl: { name: "Stained Glass" },
    tbby: { name: "Tabby" },
    tigr: { name: "Tiger" },
    tgrn: { name: "Tiger Roan" },
    unvs: { name: "Universe" },
    wood: { name: "Wooded" },
    zbra: { name: "Zebra" }
  },

  // ======================================================================
  // helper functions

  // called from roll button handler
  roll: function() {
    // "this" is module - nord.cartography
    try {
      const output = nord.state.cartography.output,
        statsout = nord.state.cartography.statsout;
      // console.dir(state);//debugger;

      // clear output from previous use
      if (output.firstChild) rzl.destroyChildren(output);
      if (statsout.firstChild) rzl.destroyChildren(statsout);

      if (!this.rollRegion()) {
        output.classList.remove("rzl-hidden");
        statsout.classList.remove("rzl-hidden");
        return;
      }
      this.rollItems();

      output.classList.remove("rzl-hidden");
      statsout.classList.remove("rzl-hidden");
    } catch (e) {
      console.error(e);
      return;
    }
  },

  // roll for region success
  rollRegion: function() {
    // "this" is module - nord.cartography
    const fields = nord.state.cartography.fields,
      output = nord.state.cartography.output,
      statsout = nord.state.cartography.statsout,
      reg = nord.state.cartography.rollState.region;

    // get id of region selected and level of horse selected
    reg.id = fields.region.selectedIndex;
    reg.rlevel = this.regions[reg.id].level;
    reg.hlevel = fields.horse.selectedIndex;

    // check horse level is high enough
    if (reg.hlevel < reg.rlevel) {
      console.log("region failure");
      rzl.addDiv(output, { content: "Region : Failure" });
      return false;
    }

    // chance calculation
    reg.chance = this.regions[reg.id].chance; // set base chance from region
    console.log(reg.chance);
    for (let i = reg.hlevel; i > reg.rlevel; i--) reg.chance += 15; // boost per level
    console.log(reg.chance);
    if (fields.group.checked) reg.chance += 15; // group horse boost
    if (fields.compass.checked) reg.chance += 20; // compass boost

    // apply mutation advantages + disadvantages
    reg.advantages = fields.advantages.selectedOptions.length;
    reg.disadvantages = fields.disadvantages.selectedOptions.length;
    switch (true) {
      case reg.advantages - reg.disadvantages > 0:
        reg.mutationEffect = 5;
        break;
      case reg.advantages - reg.disadvantages < 0:
        reg.mutationEffect = -5;
        break;
      default:
        reg.mutationEffect = 0;
    }
    reg.chance += reg.mutationEffect;

    // limit to 100 percent to avoid possible false negatives
    if (reg.chance > 100) reg.chance = 100;

    reg.rng = rzl.rng1to(100);
    rzl.addDiv(statsout, {
      content: "Region > Chance: " + reg.chance + " Roll: " + reg.rng
    });
    if (reg.chance === 100 || reg.rng <= reg.chance) {
      console.log("region success");
      rzl.addDiv(output, { content: "Region : Success" });
      // rzl.addDiv(fields.output,{content:"__ is victorious!"});
    } else {
      console.log("region failure");
      rzl.addDiv(output, { content: "Region : Failure" });
      // rzl.addDiv(fields.output,{content:"__ was unsuccessful!"});
      return false;
    }

    if (this.regions[reg.id].risk) this.rollRisk();
    return true;
  },

  // roll risk for region
  rollRisk: function() {
    // "this" is module - nord.cartography
    const output = nord.state.cartography.output,
      statsout = nord.state.cartography.statsout,
      r = this.regions[nord.state.cartography.rollState.region.id].risk,
      risk = nord.state.cartography.rollState.risk;

    risk.potion = nord.state.cartography.fields.potion.checked;
    risk.chance = risk.potion ? r.pchance : r.chance;
    risk.cooldown = r.cooldown;
    risk.rng = rzl.rng1to(100);

    rzl.addDiv(statsout, {
      content: `Risk > Chance: ${risk.chance} Roll: ${risk.rng}`
    });
    if (risk.chance === 100 || risk.rng <= risk.chance) {
      console.log("hurt by risk");
      rzl.addDiv(output, { content: "Risk : Hurt" });
      // rzl.addDiv(output,{content:"__ was hurt by risk! Cooldown: " + risk.cooldown});
    } else {
      console.log("safe from risk");
      rzl.addDiv(output, { content: "Risk : Safe" });
      // rzl.addDiv(output,{content:"__ is safe from risk!"});
      return false;
    }
  },

  // roll item rewards
  rollItems: function() {
    // "this" is module - nord.cartography
    const fields = nord.state.cartography.fields,
      rollState = nord.state.cartography.rollState,
      output = nord.state.cartography.output,
      statsout = nord.state.cartography.statsout,
      item = (rollState.items = {});

    item.count = fields.falrap.checked ? rzl.rng1to(3) + 1 : rzl.rng1to(3);
    item.rolled = [];
    item.tiers = [];
    item.binoculars = fields.binoculars.checked;
    item.chanceKey = item.binoculars ? "binoChance" : "chance";

    let text = "";
    for (let i = 1; i <= item.count; i++) {
      let tierArr = rzl.arrayForCountInObjectsInArray(
        this.tiers,
        item.chanceKey
      );
      let tierId = rzl.randomArrayItem(tierArr);
      item.tiers.push(this.tiers[tierId]);
      let itemArr = this.regions[rollState.region.id].items[tierId];
      let itemId = rzl.randomArrayItem(itemArr);
      item.rolled.push(this.items[itemId]);
      switch (true) {
        case i === item.count && item.count > 1:
          text += " and " + this.items[itemId].name;
          break;
        case i === item.count - 1 || item.count === 1:
          text += this.items[itemId].name;
          break;
        case i < item.count - 1:
          text += this.items[itemId].name + ", ";
          break;
      }
    }
    rzl.addDiv(output, { content: "Found : " + text });
    console.log(item);
  },

  // update the ui based on region
  applyRegion: function() {
    // "this" is module - nord.cartography
    const fields = nord.state.cartography.fields,
      rootNode = nord.state.cartography.rootNode,
      rollState = nord.state.cartography.rollState,
      region = this.regions[fields.region.selectedIndex],
      potionBox = rzl.findChild(rootNode, "div", "potionBox"),
      size = rzl.largestOf([
        region.advantages.length,
        region.disadvantages.length
      ]);

    if (region.risk && region.risk.pchance) {
      potionBox.classList.remove("rzl-hidden");
      potionBox.firstChild.innerHTML = region.risk.potion + " Potion:";
    } else {
      potionBox.classList.add("rzl-hidden");
      potionBox.firstChild.innerHTML = "";
    }

    // mutations
    const adv = {},
      dis = {};
    region.advantages.forEach(m => {
      adv[m] = this.mutations[m].name;
    });
    rzl.setSelOpts(fields.advantages, adv);
    fields.advantages.size = size;
    region.disadvantages.forEach(m => {
      dis[m] = this.mutations[m].name;
    });
    rzl.setSelOpts(fields.disadvantages, dis);
    fields.disadvantages.size = size;
  },

  // ======================================================================
  // event handlers

  // called on UI build
  built: function(ev) {
    // this is ui
    try {
      this.form = rzl.findChild(this.rootNode, "form", "arena-form");
      this.fields = rzl.getFormFields(this.form);
      this.output = rzl.findChild(this.rootNode, "div", "output");
      this.statsout = rzl.findChild(this.rootNode, "div", "statsout");
      this.rollState = { region: {}, risk: {}, stats: {} };

      this.optsRegion = rzl.getSelectOptionsFromKeyInObjectsInArray(
        nord.cartography.regions,
        "name"
      );
      rzl.setSelOpts(this.fields.region, this.optsRegion);
      this.optsHorse = rzl.getSelectOptionsFromKeyInObjectsInArray(
        nord.cartography.horses,
        "name"
      );
      rzl.setSelOpts(this.fields.horse, this.optsHorse);

      nord.cartography.applyRegion();
    } catch (e) {
      console.error(e);
      return;
    }
  },

  // click handler for roll button
  rollClick: function(ev) {
    //this is button
    nord.cartography.roll();
  },

  // selected region in drop down
  regionChange: function(ev) {
    nord.cartography.applyRegion();
  },

  // ======================================================================
  // SECTION: Definitions

  uiDef: {
    meta: {
      name: "cartography",
      domain: "nord",
      pnode: "norduiBox",
      builtCB: "nord.cartography.built",
      displayedCB: "nord.cartography.displayed"
    },
    view: {
      style: {
        margin: "auto",
        display: "flex",
        "flex-flow": "column nowrap",
        "align-items": "center"
      },
      children: [
        { tag: "h1", class: "title", content: "Cartography Roller" },
        {
          tag: "form",
          id: "arena-form",
          class: "rzl-form",
          children: [
            {
              class: "rzl-form-row",
              children: [
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Region:",
                      props: { htmlFor: "region" }
                    },
                    {
                      tag: "select",
                      id: "region",
                      events: { change: "nord.cartography.regionChange" }
                    }
                  ]
                },
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Horse:",
                      props: { htmlFor: "horse" }
                    },
                    { tag: "select", id: "horse" }
                  ]
                }
              ]
            },
            {
              class: "rzl-form-row",
              children: [
                // 15% chance boost
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Group Horse:",
                      props: { htmlFor: "group" }
                    },
                    { tag: "input", id: "group", props: { type: "checkbox" } }
                  ]
                },
                // 20% chance boost
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Compass:",
                      props: { htmlFor: "compass" }
                    },
                    { tag: "input", id: "compass", props: { type: "checkbox" } }
                  ]
                },
                // risk reduction
                {
                  id: "potionBox",
                  class: "rzl-form-item rzl-hidden",
                  children: [
                    {
                      tag: "label",
                      content: "Potion:",
                      props: { htmlFor: "potion" }
                    },
                    { tag: "input", id: "potion", props: { type: "checkbox" } }
                  ]
                }
              ]
            },
            {
              class: "rzl-form-row",
              children: [
                // +1 item
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Falcon/Raptor:",
                      props: { htmlFor: "falrap" }
                    },
                    { tag: "input", id: "falrap", props: { type: "checkbox" } }
                  ]
                },
                // tier chance boost
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Binoculars:",
                      props: { htmlFor: "binoculars" }
                    },
                    {
                      tag: "input",
                      id: "binoculars",
                      props: { type: "checkbox" }
                    }
                  ]
                }
              ]
            },
            {
              class: "rzl-form-row",
              children: [
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Advantages:",
                      props: { htmlFor: "advantages" }
                    },
                    {
                      tag: "select",
                      id: "advantages",
                      props: { multiple: true }
                    }
                    // {tag:"select",id:"advantages",props:{multiple:true},style:{"max-height":"32px"}}
                  ]
                },
                {
                  class: "rzl-form-item",
                  children: [
                    {
                      tag: "label",
                      content: "Disadvantages:",
                      props: { htmlFor: "disadvantages" }
                    },
                    {
                      tag: "select",
                      id: "disadvantages",
                      props: { multiple: true }
                    }
                    // {tag:"select",id:"disadvantages",props:{multiple:true},style:{"max-height":"32px"}}
                  ]
                }
              ]
            },
            {
              class: "rzl-form-row",
              children: [
                {
                  tag: "button",
                  id: "btnRoll",
                  class: "rzl-btn",
                  content: "Roll",
                  events: { click: "nord.cartography.rollClick" },
                  props: { type: "button" }
                }
              ]
            }
          ]
        },
        {
          id: "output",
          class: "rzl-hidden",
          style: { "text-align": "center" }
        },
        {
          id: "statsout",
          class: "rzl-hidden",
          style: { "text-align": "center" }
        }
      ]
    }
  }
};
