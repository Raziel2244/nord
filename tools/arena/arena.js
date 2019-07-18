nord.arena = {
  // dragons to fight
  dragons: [
    { level: "0", title: "Beginner",  reward: 50,    chance: 95 },
    { level: "1", title: "Level 1",   reward: 100,   chance: 85 },
    { level: "2", title: "Level 2",   reward: 250,   chance: 70 },
    { level: "3", title: "Level 3",   reward: 500,   chance: 55 },
    { level: "4", title: "Level 4",   reward: 1000,  chance: 40 },
    { level: "5", title: "Level 5",   reward: 2000,  chance: 25 },
    { level: "6", title: "Level 6",   reward: 3000,  chance: 10 }
  ],

  // data for horses entering the arena
  horses: [
    { level: "0", title: "No registered level" },
    { level: "1", title: "Basic training" },
    { level: "2", title: "Quality blood" },
    { level: "3", title: "Excellent blood" },
    { level: "4", title: "Supreme blood" },
    { level: "5", title: "Heroic blood" },
    { level: "6", title: "Legendary blood" }
  ],

  // items for sneak-o-matic and cache
  items: [
    {name:"RNG trait",           group:"bazaar",  count:"5"},
    {name:"Roaning triturate",   group:"bazaar",  count:"5"},
    {name:"+1 mutation slot",    group:"bazaar",  count:"5"},
    {name:"+1 natural slot",     group:"bazaar",  count:"5"},
    {name:"Luck potion 1",       group:"bazaar",  count:"5"},
    {name:"Luck potion 2",       group:"bazaar",  count:"5"},
    {name:"Potion choice",       group:"bazaar",  count:"5"},
    {name:"Semi custom import",  group:"bazaar",  count:"2"},
    {name:"A touch of glimmer",  group:"bazaar",  count:"1"},
    {name:"Pretty plump pumpkin",group:"bazaar",  count:"100",season:{month:[9,10,11]}},
    {name:"Glass full of eggnog",group:"bazaar",  count:"100",season:{month:[1,11,12]}},
    {name:"Future glimpse",      group:"bazaar",  count:"1"},

    {name:"Sneak-O-Matic",       group:"barracks",count:"3"},
    {name:"Time travel token",   group:"barracks",count:"3"},
    {name:"Enchanted armour",    group:"barracks",count:"1"},
    {name:"Enchanted sword",     group:"barracks",count:"3"},
    {name:"Hound familiar",      group:"barracks",count:"1"},
    {name:"Battle cry buff",     group:"barracks",count:"3"},
    {name:"Live bait x30",       group:"barracks",count:"3"},
    {name:"Energy boost",        group:"barracks",count:"3"},
  ],

  // ======================================================================
  // event handlers

  // called on arena UI build
  built: function(ev) {
    // this is ui
    try {
      this.form = rzl.findChild(this.rootNode,"form","arena-form");
      this.fields = rzl.getFormFields(this.form);
      this.output = rzl.findChild(this.rootNode,"div","output");
      this.cache = {};
      this.cache.all = rzl.arrayForCountInObjectsInArray(nord.arena.items,"count");
      this.cache.bazaar = rzl.arrayForCountInObjectsInArrayFilter(
        nord.arena.items,"count",{key:"group",value:"bazaar"});
      this.cache.barracks = rzl.arrayForCountInObjectsInArrayFilter(
        nord.arena.items,"count",{key:"group",value:"barracks"});

      this.optsDragon = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.arena.dragons,"title");
      rzl.setSelOpts(this.fields.dragon,this.optsDragon);
      this.optsHorse = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.arena.horses,"title");
      rzl.setSelOpts(this.fields.horse,this.optsHorse);
    } catch (e) {
      console.error(e);return;
    }
  },

  // click handler for arena roll button
  rollClick: function(ev) {
    //"this" is button
    try {
      const items = nord.arena.items;
      const uidata = nord.data.arena;
      const fields = uidata.fields;
      const cache = uidata.cache;
      const output = uidata.output;
      const date = new Date();
      const curMonth = date.getMonth() + 1;
      let chance = 0;
      let rollVal = 0;

      // TODO: check for date in cache roll

      // clear output from previous use
      if (output.children.length) rzl.destroyChildren(output);

      // gather required variables
      const dragonid = fields.dragon.selectedIndex;
      const dragondata = nord.arena.dragons[dragonid];
      const horseid = fields.dragon.selectedIndex;
      const horsedata = nord.arena.horses[horseid];
      const bait = fields.bait.value;
      let level = horsedata.level;

      // roll for Sneak-O-Matic item
      if (fields.sneak.checked) {
        if (rzl.rng1to(100) <= 50) {
          let sneakitem = items[rzl.randomArrayItem(cache.all)];
          while (typeof sneakitem.season !== "undefined" && !sneakitem.season.month.includes(curMonth)) {
            console.log("reroll sneakitem",sneakitem.name)
            sneakitem = nord.arena.items[rzl.randomArrayItem(cache.all)];
          }
          console.log("sneak item",sneakitem);
          // rzl.addDiv(output,{content:`Sneak-O-Matic : ${sneakitem.name}`});
          rzl.addDiv(output,{content:`__ sneaks past the dragon and steals ${sneakitem.name}`});
        } else {
          console.log("no sneak item");
          // rzl.addDiv(output,{content:"No Sneak-O-Matic Item"});
          rzl.addDiv(output,{content:"__ failed to sneak past the dragon."});
        }
      }

      // calculate cache roll chance
      let cachechance = 1;
      if (fields.hound.checked) cachechance = 50;
      if (fields.trust.value >= 10) {
        let trust = 10 * (Math.floor(fields.trust.value / 10));
        cachechance += trust;
      }

      // battle cry roll
      if (fields.battlecry.checked) {
        chance = 15;
        rollVal = rzl.rng1to(100);
        if (rollVal <= chance){
          console.log("battle cry win");
          console.log(`win ${dragondata.reward}`);
          rzl.addDiv(output,{content:"Your ferocious battle cry scared off the dragon"});
          // rzl.addDiv(output,{content:`Victory : ${dragondata.reward}AG`});
          rzl.addDiv(output,{content:`__ is victorious! They bring home ${dragondata.reward}AG`});

          // cache roll
          if (rzl.rng1to(500) <= cachechance || cachechance === 500){
            let bazitem = nord.arena.items[rzl.randomArrayItem(cache.bazaar)];
            let baritem = nord.arena.items[rzl.randomArrayItem(cache.barracks)];
            while (typeof bazitem.season !== "undefined" && !bazitem.season.month.includes(curMonth)) {
              console.log("reroll bazitem",bazitem.name)
              bazitem = nord.arena.items[rzl.randomArrayItem(cache.bazaar)];
            }
            while (typeof baritem.season !== "undefined" && !baritem.season.month.includes(curMonth)) {
              console.log("reroll baritem",baritem.name)
              baritem = nord.arena.items[rzl.randomArrayItem(cache.barracks)];
            }
            console.log("cache",bazitem,baritem)
            // rzl.addDiv(output,{content:`Cache : 1500AG, ${bazitem.name} and ${baritem.name}`});
            rzl.addDiv(output,{content:`What’s this? You found a supply cache! It contained 1500AG, ${bazitem.name} and ${baritem.name}`});
          } else {
            console.log("no cache");
            rzl.addDiv(output,{content:"No cache found"});
          }
          rzl.addDiv(output,{content:`Chance: ${chance} Roll: ${rollVal}`})
          return;
        } else {
          console.log("battle cry failed");
          chance = 0;
          rollVal = 0;
        }
      }

      // add level for energy boost
      if (fields.energy.checked) level++;

      // calculate win chance applying boosts
      chance = dragondata.chance; // base chance
      if (fields.dragonDrawn.checked) chance += 10; // boost for drawing dragon
      for (let i = level; i > dragondata.level; i--) chance += 15; // boost per level
      if (fields.armour.checked) chance += 20; // armour boost
      if (fields.weapon.checked) chance += 10; // weapon boost
      if (fields.armour.checked && fields.weapon.checked) chance += 15; // armour+weapon combo
      if (bait > 0) {if (bait > 5) {bait = 5;}chance += bait * 5;} // bait bonus
      if (chance > 100) chance = 100; // limit to 100 percent to avoid possible false negatives

      // actual roll value
      rollVal = rzl.rng1to(100);

      // print correct output for victory / loss
      if (rollVal <= chance || chance === 100){
        console.log(`win ${dragondata.reward}`);
        // rzl.addDiv(output,{content:`Victory : ${dragondata.reward}AG`});
        rzl.addDiv(output,{content:`__ is victorious! They bring home ${dragondata.reward}AG`});

      } else {
        console.log("loss");
        // rzl.addDiv(output,{content:"Battle lost"});
        rzl.addDiv(output,{content:"Unfortunately, __ was unsuccessful in their hunt, better luck next time!"});
      }
      // cache roll
      if (rzl.rng1to(500) <= cachechance || cachechance === 500){
        let bazitem = items[rzl.randomArrayItem(cache.bazaar)];
        let baritem = items[rzl.randomArrayItem(cache.barracks)];
        while (typeof bazitem.season !== "undefined" && !bazitem.season.month.includes(curMonth)) {
          console.log("reroll bazitem",bazitem.name)
          bazitem = nord.arena.items[rzl.randomArrayItem(cache.bazaar)];
        }
        while (typeof baritem.season !== "undefined" && !baritem.season.month.includes(curMonth)) {
          console.log("reroll baritem",baritem.name)
          baritem = nord.arena.items[rzl.randomArrayItem(cache.barracks)];
        }
        console.log("cache",bazitem,baritem)
        // rzl.addDiv(output,{content:`Cache : 1500AG, ${bazitem.name} and ${baritem.name}`});
        rzl.addDiv(output,{content:`What’s this? You found a supply cache! It contained 1500AG, ${bazitem.name} and ${baritem.name}`});
      } else {
        console.log("no cache");
        rzl.addDiv(output,{content:"No cache found"});
      }
      rzl.addDiv(output,{content:`Chance: ${chance} Roll: ${rollVal}`})
      output.classList.remove("rzl-hidden");
    } catch (e) {
      console.error(e);return;
    }
  }
};

nord.uiDefs.arena = {
  meta: {
    name: "arena",
    domain: "nord",
    data: "data",
    pnode: "norduiBox",
    builtCB: "nord.arena.built"
  },
  view: {
    style: {
      // width:"80vw",
      // "max-width":"800px",
      margin:"auto",
      display:"flex",
      "flex-flow":"column nowrap",
      "align-items":"center",
    },
    children: [
      {tag:"h2",class:"title",content:"Arena Roller"},
      {tag:"form",id:"arena-form",class:"rzl-form",children: [
        {class:"rzl-form-row",children: [
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Dragon:",props:{for:"dragon"}},
            {tag:"select",class:"itemWidth",id:"dragon"}
          ]},
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Horse:",props:{for:"horse"}},
            {tag:"select",class:"itemWidth",id:"horse"}
          ]}
        ]},
        {class:"rzl-form-row",children: [



          // 15% instant win roll
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Battle cry:",props:{for:"battlecry"}},
            {tag:"input",id:"battlecry",props:{type:"checkbox"}}
          ]},
          // 10% chance boost
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Dragon drawn:",props:{for:"dragonDrawn"}},
            {tag:"input",id:"dragonDrawn",props:{type:"checkbox"}}
          ]},
          // 20% chance boost
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Enchanted Armour:",props:{for:"armour"}},
            {tag:"input",id:"armour",props:{type:"checkbox"}}
          ]},
          // 10% chance boost alone, extra 15% if with armour
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Enchanted Weapon:",props:{for:"weapon"}},
            {tag:"input",id:"weapon",props:{type:"checkbox"}}
          ]},

        ]},
        {class:"rzl-form-row",children: [
          // +1 horse level, energy boost
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Energy boost:",props:{for:"energy"}},
            {tag:"input",id:"energy",props:{type:"checkbox"}}
          ]},
          // 50% sneak item roll
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Sneak-O-Matic:",props:{for:"sneak"}},
            {tag:"input",id:"sneak",props:{type:"checkbox"}}
          ]},
          // increases chance of end roll, hound
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Hound Familiar:",props:{for:"hound"}},
            {tag:"input",id:"hound",props:{type:"checkbox"}}
          ]},
          // 10 chance per 10 trust
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Hound trust:",props:{for:"trust"}},
            {
              tag:"input",class:"itemWidth",id:"trust",
              props:{type:"number",min:"0",max:"500",value:"0",step:"1"}
            }
          ]},
          // 5% boost per live bait
          {class:"rzl-form-item",children: [
            {tag:"label",content:"Live bait:",props:{for:"bait"}},
            {
              tag:"input",class:"itemWidth",id:"bait",
              props:{type:"number",min:"0",max:"5",value:"0",step:"1"}
            }
          ]},
        ]},
        {class:"rzl-form-row",children: [
          {tag:"button",id:"btnRoll",class:"rzl-btn",content:"Roll",events: {
            click: "nord.arena.rollClick"
          },props:{type:"button"}},
        ]}
      ]},
      {id:"output",class:"rzl-hidden",style:{"text-align":"center"}}
    ]
  },
};
