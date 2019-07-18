nord.cartography = {
  // regions of the world
  regions: [
    {
      name: "Aleria",
      chance: 95,
      advantages: ["chkd","grfn","pfwl","stgl"],
      disadvantages: ["crvd","inks","orth","pmkn","unvs"],
      items: [
        ["bkcl","fthr","sstk","tnrk"],
        ["lstk","ebtl"],
        ["lpt1","scps"],
        ["cnps","glft"],
        ["lsdn","lcps","lsct","lshd","frfx","frsn"]
      ],
      risk: false
    },
    {
      name: "Isles of Invermay",
      chance: 85,
      advantages: ["clpd","jgur","mdrn","tbby","tigr","tgrn"],
      disadvantages: ["blsp","chkd","flmt","stgl"],
      items: [
        ["bkcl","fthr","sstk","plbk","tnrk","trsn"],
        ["ntvn","ebtl"],
        ["lstk","scps"],
        ["cnps","nthb"],
        ["lcps","tmcl","lsdn","prbd"]
      ],
      risk: {chance:5,cooldown:"1 days"}
    },
    {
      name: "Amadora: Eplana",
      chance: 70,
      advantages: ["btfl","embm","hmbd","kscl"],
      disadvantages: ["cmph","hnna","mdrn","pnda","wood"],
      items: [
        ["plft","plst"],
        ["lstk","scps"],
        ["cnps","pram"],
        ["lcps","plfr"],
        ["frwf","wfsk","frwl"]
      ],
      risk: {chance:7,cooldown:"3 days"}
    },
    {
      name: "Amadora: Estrana",
      chance: 70,
      advantages: ["agis","fawn","hnna","lctb","zbra"],
      disadvantages: ["cndy","chbl","chlt","egng","frst","sndp","snfl","sngb"],
      items: [
        ["plft","plst"],
        ["lstk","scps"],
        ["cnps","pram"],
        ["lcps","mgld"],
        ["fefx","fsvl","obsd","lgld"]
      ],
      risk: {chance:7,cooldown:"3 days"}
    },
    {
      name: "Korandyire",
      chance: 55,
      advantages: ["aglr","atln","glmr","muln","unvs"],
      disadvantages: ["clpd","jgur","tbby","tigr","tgrn"],
      items: [
        ["nthb","odgm"],
        ["sash","mggm"],
        ["astd","dngr"],
        ["arsh","vdng"],
        ["wdbc","nksk","spfm","dndl","xfth"]
      ],
      risk: {chance:25,cooldown:"5 days",pchance:10,potion:"Auralight"}
    },
    {
      name: "Kisanara",
      chance: 40,
      advantages: ["cmph","flmt","pnda","wood"],
      disadvantages: ["aglr","btfl","embm","hmbd","kscl"],
      items: [
        ["skfg","sksn"],
        ["dngr","cnps"],
        ["vdng","lcps"],
        ["bkcm","hfmp"],
        ["wdsc","rtgn","frpl"]
      ],
      risk: {chance:25,cooldown:"7 days",pchance:10,potion:"Toxicate"}
    },
    {
      name: "Quendorin",
      chance: 24,
      advantages: ["cndy","chbl","chlt","egng","frst","sndp","snfl","sngb"],
      disadvantages: ["agis","atln","fawn","lctb","zbra"],
      items: [
        ["icsh","dngr"],
        ["vdng","rpft"],
        ["nseg","aric"],
        ["mtrt","xdng"],
        ["wdgc","tcgl","fzck"]
      ],
      risk: {chance:12,cooldown:"10 days"}
    },
    {
      name: "Malgosfrom",
      chance: 10,
      advantages: ["blsp","crvd","inks","orth","pmkn"],
      disadvantages: ["glmr","grfn","muln","pfwl"],
      items: [
        ["vdng","pksd"],
        ["rtgn","astd"],
        ["mtrt","xdng"],
        ["lsdn","rdsv"],
        ["wdpc","rtgm"]
      ],
      risk: {chance:30,cooldown:"14 days",pchance:15,potion:"Blood/Nightshade"}
    }
  ],

  // data for horses
  horses: [
    { level: "0", name: "No registered level" },
    { level: "1", name: "Basic training"      },
    { level: "2", name: "Quality blood"       },
    { level: "3", name: "Excellent blood"     },
    { level: "4", name: "Supreme blood"       },
    { level: "5", name: "Heroic blood"        },
    { level: "6", name: "Legendary blood"     }
  ],

  // reward tiers
  tiers: [
    { name: "Very Common", chance: 50, binoChance: 33 },
    { name: "Common",      chance: 29, binoChance: 26 },
    { name: "Uncommon",    chance: 13, binoChance: 23 },
    { name: "Rare",        chance: 6,  binoChance: 13 },
    { name: "Very Rare",   chance: 2,  binoChance: 5  },
  ],

  // possible rewards
  items: {
    aric : { name: "Arcane Ice Shard" },
    arsh : { name: "Arcane Shard" },
    astd : { name: "Asteroid Fragment" },
    bkcl : { name: "Broken Chalice" },
    bkcm : { name: "Broken Compass" },
    obsd : { name: "Chunk of Obsidian" },
    cnps : { name: "Coin Purse" },
    dngr : { name: "Dangerous Encounter" },
    dndl : { name: "Destabilising Nodule" },
    ebtl : { name: "Empty Potion Bottle" },
    xfth : { name: "Exquisite Feather (Roaning Triturate)" },
    xdng : { name: "Extremely Dangerous Encounter" },
    fthr : { name: "Feather" },
    frpl : { name: "Fire Opal" },
    frwl : { name: "Friendly Barn Owl (Swan Familiar)" },
    fefx : { name: "Friendly Fennec Fox (Fox Familiar)" },
    frfx : { name: "Friendly Fox (Fox Familiar)" },
    fsvl : { name: "Friendly Serval (Cat Familiar)" },
    frsn : { name: "Friendly Swan (Swan Familiar)" },
    frwf : { name: "Friendly Wolf (Hound Familiar)" },
    fzck : { name: "Frozen Cookie" },
    glft : { name: "Glimpse of The Future" },
    hfmp : { name: "Half of a Pirates Map" },
    icsh : { name: "Ice Shard" },
    nksk : { name: "Ink Sack" },
    nthb : { name: "Interesting Herb" },
    ntvn : { name: "Interesting Vine" },
    lcps : { name: "Large Coin Purse" },
    lgld : { name: "Large Gold Ore" },
    lstk : { name: "Large Stick" },
    lsct : { name: "Lost Cat (Cat Familiar)" },
    lshd : { name: "Lost Hound (Hound Familiar)" },
    lsdn : { name: "Lost Nordanner" },
    lpt1 : { name: "Luck Potion #1" },
    mggm : { name: "Magnificently Odd Gemstone" },
    mgld : { name: "Medium Gold Nugget" },
    mtrt : { name: "Meteorite" },
    nseg : { name: "Nest of Eggs" },
    odgm : { name: "Odd Gemstone" },
    plbk : { name: "Peeled Bark" },
    pram : { name: "Piece of Rusty Armour" },
    plft : { name: "Pile of Feathers (3 Feathers)" },
    plfr : { name: "Pile of Furs (Closet Full of Clothes)" },
    plst : { name: "Pile of Sticks (3 Sticks)" },
    prbd : { name: "Potent Red Berry Dye" },
    pksd : { name: "Pumpkin Seeds" },
    rdsv : { name: "Radioactive Sliver" },
    rpft : { name: "Raptor Feathers" },
    rtgm : { name: "Relic of The Gods (Mutation)" },
    rtgn : { name: "Relic of The Gods (Natural)" },
    sash : { name: "Small Arcane Shard" },
    scps : { name: "Small Coin Purse" },
    sstk : { name: "Small Stick" },
    skfg : { name: "Snake Fang" },
    sksn : { name: "Snake Skin" },
    spfm : { name: "Sprite Familiar" },
    tmcl : { name: "Tameable Ocelot (Cat Familiar)" },
    tnrk : { name: "Tiny Rock" },
    tcgl : { name: "Touch of Glimmer (nGlm Foal Only)" },
    trsn : { name: "Tree Resin" },
    vdng : { name: "Very Dangerous Encounter" },
    wdbc : { name: "Weird Bronze Coin" },
    wdgc : { name: "Weird Gold Coin" },
    wdpc : { name: "Weird Platinum Coin" },
    wdsc : { name: "Weird Silver Coin" },
    wfsk : { name: "Wolf Skull" }
  },

  // nordanner mutations
  mutations: {
    agis : { name: "Agis" },
    aglr : { name: "Angler" },
    atln : { name: "Atlanticus" },
    blsp : { name: "Bloodsplash" },
    btfl : { name: "Butterfly" },
    cndy : { name: "Candy Cane" },
    crvd : { name: "Carved" },
    cmph : { name: "Cemophora" },
    chkd : { name: "Checkered" },
    chbl : { name: "Christmas Bells" },
    chlt : { name: "Christmas Lights" },
    clpd : { name: "Clouded Leopard" },
    egng : { name: "Eggnog" },
    embm : { name: "Emblem" },
    fawn : { name: "Fawn" },
    flmt : { name: "Flametouched" },
    frst : { name: "Frostsplash" },
    glmr : { name: "Glimmer" },
    grfn : { name: "Griffin’s Touch" },
    hnna : { name: "Henna" },
    hmbd : { name: "Hummingbird" },
    inks : { name: "Inkspill" },
    jgur : { name: "Jaguar" },
    kscl : { name: "Kascel" },
    lctb : { name: "Laced Tobiano" },
    mdrn : { name: "Mandarin" },
    muln : { name: "Moulin" },
    orth : { name: "Ortho" },
    pnda : { name: "Panda" },
    pfwl : { name: "Peafowl" },
    pmkn : { name: "Pumpkin" },
    sndp : { name: "Snowdripple" },
    snfl : { name: "Snowfall" },
    sngb : { name: "Snowglobe" },
    stgl : { name: "Stained Glass" },
    tbby : { name: "Tabby" },
    tigr : { name: "Tiger" },
    tgrn : { name: "Tiger Roan" },
    unvs : { name: "Universe" },
    wood : { name: "Wooded" },
    zbra : { name: "Zebra" }
  },




  // ======================================================================
  // helper functions

  // called from roll button handler
  roll: function() {
    // "this" is module - nord.cartography
    try {
      let uiData = nord.data.cartography;
      let output = uiData.output;
      console.dir(uiData);//debugger;

      // clear output from previous use
      if (output.firstChild) rzl.destroyChildren(output);
      if (stats.firstChild) rzl.destroyChildren(stats);

      if (!this.rollRegion()) {
        output.classList.remove("rzl-hidden");
        stats.classList.remove("rzl-hidden");
        return;
      }
      this.rollItems();

      output.classList.remove("rzl-hidden");
      stats.classList.remove("rzl-hidden");
    } catch (e) {
      console.error(e);
      return;
    }
  },

  // roll for region success
  rollRegion: function() {
    // "this" is module - nord.cartography
    let uiData = nord.data.cartography;
    let fields = uiData.fields;
    let rollData = uiData.rollData;

    rollData.region = {};

    // data for this stage of the roll
    let reg = rollData.region;

    // get id of region selected and level of horse selected
    reg.id = fields.region.selectedIndex;
    reg.level = fields.horse.selectedIndex;

    // check horse level is high enough
    if (reg.level < reg.regionId) return;

    // chance calculation
    reg.chance = this.regions[reg.id].chance; // set base chance from region
    for (let i = reg.level; i > reg.id; i--) reg.chance += 15; // boost per level
    if (fields.group.checked) reg.chance += 15; // group horse boost
    if (fields.compass.checked) reg.chance += 20; // compass boost

    // apply mutation advantages + disadvantages
    reg.advantages = fields.advantages.selectedOptions.length;
    reg.disadvantages = fields.disadvantages.selectedOptions.length;
    switch (true) {
      case ((reg.advantages - reg.disadvantages) > 0):
        reg.mutationEffect = 5;
      break;
      case ((reg.advantages - reg.disadvantages) < 0):
        reg.mutationEffect = -5;
      break;
      default: reg.mutationEffect = 0;
    }
    reg.chance += reg.mutationEffect;

    // limit to 100 percent to avoid possible false negatives
    if (reg.chance > 100) reg.chance = 100;

    reg.rollVal = rzl.rng1to(100);
    rzl.addDiv(stats,{content:`Region > Chance: ${reg.chance} Roll: ${reg.rollVal}`});
    if (reg.chance === 100 || reg.rollVal <= reg.chance){
      console.log("region success");
      rzl.addDiv(output,{content:"Region : Success"});
      // rzl.addDiv(output,{content:"__ is victorious!"});
    } else {
      console.log("region failure");
      rzl.addDiv(output,{content:"Region : Failure"});
      // rzl.addDiv(output,{content:"__ was unsuccessful!"});
      return false;
    }

    if (this.regions[reg.id].risk) this.rollRisk();
    return true;
  },

  // roll risk for region
  rollRisk: function() {
    // "this" is module - nord.cartography
    let uiData = nord.data.cartography;
    let fields = uiData.fields;
    let rollData = uiData.rollData;
    let output = uiData.output;
    let reg = uiData.rollData.region;

    const r = this.regions[reg.id].risk;
    let risk = rollData.risk = {};
    risk.potion = fields.potion.checked;
    risk.chance = (risk.potion) ? r.pchance : r.chance;
    risk.cooldown = r.cooldown;

    risk.rollVal = rzl.rng1to(100);
    rzl.addDiv(stats,{content:`Risk > Chance: ${risk.chance} Roll: ${risk.rollVal}`});
    if (risk.chance === 100 || risk.rollVal <= risk.chance){
      console.log("hurt by risk");
      rzl.addDiv(output,{content:"Risk : Hurt"});
      // rzl.addDiv(output,{content:"__ was hurt by risk! Cooldown: " + risk.cooldown});
    } else {
      console.log("safe from risk");
      rzl.addDiv(output,{content:"Risk : Safe"});
      // rzl.addDiv(output,{content:"__ is safe from risk!"});
      return false;
    }
  },

  // roll item rewards
  rollItems: function() {
    // "this" is module - nord.cartography
    let uiData = nord.data.cartography;
    let fields = uiData.fields;
    let rollData = uiData.rollData;
    let output = uiData.output;

    let it = rollData.items = {};
    it.count = (fields.falrap.checked) ? rzl.rng1to(3) + 1 : rzl.rng1to(3);
    it.rolled = [];it.tiers = [];
    it.binoculars = fields.binoculars.checked;
    it.chanceKey = (it.binoculars) ? "binoChance" : "chance";
    let text = "";
    for (let i = 1; i <= it.count; i++) {
      let tierArr = rzl.arrayForCountInObjectsInArray(this.tiers,it.chanceKey);
      let tierId = rzl.randomArrayItem(tierArr);
      it.tiers.push(this.tiers[tierId]);
      let itemArr = this.regions[rollData.region.id].items[tierId];
      let itemId = rzl.randomArrayItem(itemArr);
      it.rolled.push(this.items[itemId]);
      switch (true) {
        case (i === it.count && it.count > 1):
          text += " and " + this.items[itemId].name;
        break;
        case (i === it.count - 1 || it.count === 1):
          text += this.items[itemId].name;
        break;
        case (i < it.count - 1):
          text += this.items[itemId].name + ", "
        break;
      }
    }
    rzl.addDiv(output,{content:"Found : " + text});
    console.log(it)
  },

  // update the ui based on region
  applyRegion: function() {
    // "this" is module - nord.cartography
    // console.log(nord.data)
    let uiData = nord.data.cartography;
    let fields = uiData.fields;
    let rollData = uiData.rollData;

    let region = this.regions[fields.region.selectedIndex];

    // potion checkbox
    let potionBox = rzl.findChild(uiData.rootNode,"div","potionBox");
    if (region.risk && region.risk.pchance) {
      potionBox.classList.remove("rzl-hidden");
      potionBox.firstChild.innerHTML = region.risk.potion + " Potion:";
    } else {
      potionBox.classList.add("rzl-hidden");
      potionBox.firstChild.innerHTML = "";
    }

    // mutations
    let adv = {};
    let dis = {};
    region.advantages.forEach((m) => {
      adv[m] = this.mutations[m].name;
    });
    rzl.setSelOpts(fields.advantages,adv);
    region.disadvantages.forEach((m) => {
      dis[m] = this.mutations[m].name;
    });
    rzl.setSelOpts(fields.disadvantages,dis);
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
      this.stats = rzl.findChild(this.rootNode, "div", "stats");
      this.rollData = {};

      this.optsRegion = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.cartography.regions, "name");
      rzl.setSelOpts(this.fields.region, this.optsRegion);
      this.optsHorse = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.cartography.horses, "name");
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
};




// ======================================================================
// SECTION: Definitions

nord.uiDefs.cartography = {
  meta: {
    name: "cartography",
    domain: "nord",
    data: "data",
    pnode: "norduiBox",
    builtCB: "nord.cartography.built",
    displayedCB: "nord.cartography.displayed",
  },
  view: {
    style: {
      margin:"auto",
      display:"flex",
      "flex-flow":"column nowrap",
      "align-items":"center",
    },
    children: [
      {tag:"h2",class:"title",content:"Cartography Roller"},
      {tag:"form",id:"arena-form",class:"rzl-form",children:[
        {class:"rzl-form-row",children:[
          {class:"rzl-form-item",children:[
            {tag:"label",content:"Region:",props:{for:"region"}},
            {tag:"select",id:"region",events:{change:"nord.cartography.regionChange"}}
          ]},
          {class:"rzl-form-item",children:[
            {tag:"label",content:"Horse:",props:{for:"horse"}},
            {tag:"select",id:"horse"}
          ]}
        ]},
        {class:"rzl-form-row",children:[
          // 15% chance boost
          {class:"rzl-form-item",children:[
            {tag:"label",content:"Group Horse:",props:{for:"group"}},
            {tag:"input",id:"group",props:{type:"checkbox"}}
          ]},
          // 20% chance boost
          {class:"rzl-form-item",children:[
            {tag:"label",content:"Compass:",props:{for:"compass"}},
            {tag:"input",id:"compass",props:{type:"checkbox"}}
          ]},
          // risk reduction
          {id:"potionBox",class:"rzl-form-item rzl-hidden",children:[
            {tag:"label",content:"Potion:",props:{for:"potion"}},
            {tag:"input",id:"potion",props:{type:"checkbox"}}
          ]},
        ]},
        {class:"rzl-form-row",children:[
          // +1 item
          {class:"rzl-form-item",children:[
            {tag:"label",content:"Falcon/Raptor:",props:{for:"falrap"}},
            {tag:"input",id:"falrap",props:{type:"checkbox"}}
          ]},
          // tier chance boost
          {class:"rzl-form-item",children:[
            {tag:"label",content:"Binoculars:",props:{for:"binoculars"}},
            {tag:"input",id:"binoculars",props:{type:"checkbox"}}
          ]},
        ]},
        {class:"rzl-form-row",children:[
          {class:"rzl-form-item",children:[
            {tag:"label",content:"Advantages:",props:{for:"advantages"}},
            {tag:"select",id:"advantages",props:{multiple:true},style:{"max-height":"32px"}}
          ]},
          {class:"rzl-form-item",children:[
            {tag:"label",content:"Disadvantages:",props:{for:"disadvantages"}},
            {tag:"select",id:"disadvantages",props:{multiple:true},style:{"max-height":"32px"}}
          ]},
        ]},
        {class:"rzl-form-row",children:[
          {tag:"button",id:"btnRoll",class:"rzl-btn",content:"Roll",
            events:{click:"nord.cartography.rollClick"},props:{type:"button"}},
        ]},
      ]},
      {id:"output",class:"rzl-hidden",style:{"text-align":"center"}},
      {id:"stats",class:"rzl-hidden",style:{"text-align":"center"}}
    ]
  }
};
