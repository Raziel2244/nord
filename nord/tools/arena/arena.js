nord.arena = {
  // dragons to fight
  dragons : [
    { level: "0", title: "Beginner",  reward: 50,    chance: 95 },
    { level: "1", title: "Level 1",   reward: 100,   chance: 85 },
    { level: "2", title: "Level 2",   reward: 250,   chance: 70 },
    { level: "3", title: "Level 3",   reward: 500,   chance: 55 },
    { level: "4", title: "Level 4",   reward: 1000,  chance: 40 },
    { level: "5", title: "Level 5",   reward: 2000,  chance: 25 },
    { level: "6", title: "Level 6",   reward: 3000,  chance: 10 }
  ],

  // data for horses entering the arena
  horses : [
    { level: "0", title: "No registered level" },
    { level: "1", title: "Basic training" },
    { level: "2", title: "Quality blood" },
    { level: "3", title: "Excellent blood" },
    { level: "4", title: "Supreme blood" },
    { level: "5", title: "Heroic blood" },
    { level: "6", title: "Legendary blood" }
  ],

  // items for sneak-o-matic and cache
  items : [
    { name:"RNG trait",            group:"bazaar", count:"5" },
    { name:"Roaning triturate",    group:"bazaar", count:"5" },
    { name:"+1 mutation slot",     group:"bazaar", count:"5" },
    { name:"+1 natural slot",      group:"bazaar", count:"5" },
    { name:"Luck potion 1",        group:"bazaar", count:"5" },
    { name:"Luck potion 2",        group:"bazaar", count:"5" },
    { name:"Potion choice",        group:"bazaar", count:"5" },
    { name:"Semi custom import",   group:"bazaar", count:"2" },
    { name:"A touch of glimmer",   group:"bazaar", count:"1" },
    { name:"Pretty plump pumpkin", group:"bazaar", count:"100", season:{ month:[9,10,11] } },
    { name:"Glass full of eggnog", group:"bazaar", count:"100", season:{ month:[1,11,12] } },
    { name:"Future glimpse",       group:"bazaar", count:"1" },

    { name:"Sneak-O-Matic",     group:"barracks", count:"3" },
    { name:"Time travel token", group:"barracks", count:"3" },
    { name:"Enchanted armour",  group:"barracks", count:"1" },
    { name:"Enchanted sword",   group:"barracks", count:"3" },
    { name:"Hound familiar",    group:"barracks", count:"1" },
    { name:"Battle cry buff",   group:"barracks", count:"3" },
    { name:"Live bait x30",     group:"barracks", count:"3" },
    { name:"Energy boost",      group:"barracks", count:"3" },
  ],

  // ======================================================================
  // event handlers

  // called on arena UI build
  built : function(ev) {
    // this is ui ()
    try {
      this.form = rzl.findChild(this.rootNode,"form","arena-form");
      this.fields = rzl.getFormFields(this.form);
      this.output = rzl.findChild(this.rootNode,"div","output");
      this.statsout = rzl.findChild(this.rootNode,"div","statsout");

      this.entry = {
        battle : {
          rng : { cap : 100, chance : 0, roll : 0 },
        },
        battlecry : {
          checked : false,
          rng : { cap : 100, chance : 15, roll : 0 },
        },
        cache : {
          items : { bazaar : false, barracks : false },
          data : {
            all : rzl.arrayForCountInObjectsInArray(nord.arena.items,"count"),
            bazaar : rzl.arrayForCountInObjectsInArrayFilter(nord.arena.items,"count",{key:"group",value:"bazaar"}),
            barracks : rzl.arrayForCountInObjectsInArrayFilter(nord.arena.items,"count",{key:"group",value:"barracks"}),
          },
          rng : { cap : 5000, chance : 1, roll : 0 },
        },
        input : {},
        sneak : {
          checked : false,
          item : false,
          rng : { cap : 100, chance : 50, roll : 0 }
        }
      };

      this.optsDragon = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.arena.dragons,"title");
      rzl.setSelOpts(this.fields.dragon,this.optsDragon);
      this.optsHorse = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.arena.horses,"title");
      rzl.setSelOpts(this.fields.horse,this.optsHorse);
    } catch (e) {
      console.error(e);return;
    }
  },

  // click handler for arena roll button
  rollClick : function(ev) {
    //"this" is button
    try {
      const items = nord.arena.items,   // items array defined above
            state = nord.state.arena,   // state object for this tool
            fields = state.fields,      // object input fields
            output = state.output,      // output element
            statsout = state.statsout,  // stats element
            entry = state.entry,        // object for this entry
            battle = entry.battle,      // battle data for this entry
            cache = entry.cache,        // cache data for this entry
            input = entry.input,        // input data for this entry
            date = entry.date = new Date(),
            curMonth = date.getMonth() + 1;

      // TODO: check for date in cache roll

      // clear output from previous use
      if (output.children.length) rzl.destroyChildren(output);
      if (statsout.children.length) rzl.destroyChildren(statsout);

      // gather required variables
      input.dragonid = fields.dragon.selectedIndex;
      input.dragondata = nord.arena.dragons[input.dragonid];
      input.horseid = fields.horse.selectedIndex;
      input.horsedata = nord.arena.horses[input.horseid];
      input.bait = fields.bait.value;
      input.effLevel = input.horsedata.level;

      if (input.horseid < input.dragonid) {
        output.classList.add("rzl-hidden");
        statsout.classList.add("rzl-hidden");
        return;
      }

      // roll for Sneak-O-Matic item
      if (fields.sneak.checked) {
        const sneak = entry.sneak;
        sneak.checked = true;
        sneak.rng.roll = rzl.rng1to(sneak.rng.cap);
        rzl.addDiv(statsout,{content:`Sneak > Chance: ${sneak.rng.chance} Roll: ${sneak.rng.roll}`});

        if (sneak.rng.roll <= sneak.rng.chance) {
          sneak.item = items[rzl.randomArrayItem(cache.data.all)];
          while (typeof sneak.item.season !== "undefined" && !sneak.item.season.month.includes(curMonth)) {
            console.log("reroll sneak.item",sneak.item.name)
            sneak.item = items[rzl.randomArrayItem(cache.data.all)];
          }
          console.log("sneak item",sneak.item);
          rzl.addDiv(output,{content:`__ sneaks past the dragon and steals ${sneak.item.name}`});
        } else {
          console.log("no sneak item");
          rzl.addDiv(output,{content:"__ failed to sneak past the dragon."});
        }
      }

      // calculate cache roll chance
      cache.rng.chance = (fields.hound.checked) ? 250 : 2;
      switch (fields.trust.value) {
        case  "30%": cache.rng.chance += 250;break;
        case  "70%": cache.rng.chance += 500;break;
        case "100%": cache.rng.chance += 750;break;
      }

      cache.rng.roll = rzl.rng1to(cache.rng.cap);

      // battle cry roll
      if (fields.battlecry.checked) {
        const cry = entry.battlecry;
        cry.checked = true; cry.rng.roll = rzl.rng1to(cry.rng.cap);
        rzl.addDiv(statsout,{content:`Cry > Chance: ${cry.rng.chance} Roll: ${cry.rng.roll}`});

        if (cry.rng.roll <= cry.rng.chance){
          console.log("battle cry win");
          console.log(`win ${input.dragondata.reward}`);
          rzl.addDiv(output,{content:"Your ferocious battle cry scared off the dragon"});
          rzl.addDiv(output,{content:`__ is victorious! They bring home ${input.dragondata.reward}AG`});

          // cache roll
          rzl.addDiv(statsout,{content:`Cache > Chance: ${cache.rng.chance} Roll: ${cache.rng.roll}`});
          if (cache.rng.roll <= cache.rng.chance || cache.rng.chance === cache.rng.cap){
            let bazitem = cache.items.bazaar = nord.arena.items[rzl.randomArrayItem(cache.data.bazaar)];
            let baritem = cache.items.barracks = nord.arena.items[rzl.randomArrayItem(cache.data.barracks)];
            while (typeof bazitem.season !== "undefined" && !bazitem.season.month.includes(curMonth)) {
              console.log("reroll bazitem",bazitem.name)
              bazitem = nord.arena.items[rzl.randomArrayItem(cache.data.bazaar)];
            }
            while (typeof baritem.season !== "undefined" && !baritem.season.month.includes(curMonth)) {
              console.log("reroll baritem",baritem.name)
              baritem = nord.arena.items[rzl.randomArrayItem(cache.data.barracks)];
            }
            console.log("cache",bazitem,baritem)
            rzl.addDiv(output,{content:`What’s this? You found a supply cache! It contained 1500AG, ${bazitem.name} and ${baritem.name}`});
          } else {
            console.log("no cache");
            rzl.addDiv(output,{content:"No cache found"});
          }
          return;
        } else {
          console.log("battle cry failed");
        }
      }

      // add level for energy boost
      if (fields.energy.checked) input.effLevel++;

      // calculate win chance applying boosts
      battle.rng.chance = input.dragondata.chance; // base chance
      if (fields.dragonDrawn.checked) battle.rng.chance += 10; // boost for drawing dragon
      for (let i = input.effLevel; i > input.dragondata.level; i--) battle.rng.chance += 15; // boost per level
      if (fields.armour.checked) battle.rng.chance += 20; // armour boost
      if (fields.weapon.checked) battle.rng.chance += 10; // weapon boost
      if (fields.armour.checked && fields.weapon.checked) battle.rng.chance += 15; // armour+weapon combo
      if (input.bait > 0) {if (input.bait > 5) {input.bait = 5;}battle.rng.chance += input.bait * 5;} // bait bonus
      if (battle.rng.chance > 100) battle.rng.chance = 100; // limit to 100 percent to avoid possible issues

      // actual roll value
      battle.rng.roll = rzl.rng1to(battle.rng.cap);
      rzl.addDiv(statsout,{content:`Battle > Chance: ${battle.rng.chance} Roll: ${battle.rng.roll}`});

      // print correct output for victory / loss
      if (battle.rng.roll <= battle.rng.chance || battle.rng.chance === battle.rng.cap){
        console.log(`win ${input.dragondata.reward}`);
        // rzl.addDiv(output,{content:`Victory : ${input.dragondata.reward}AG`});
        rzl.addDiv(output,{content:`__ is victorious! They bring home ${input.dragondata.reward}AG`});

      } else {
        console.log("loss");
        // rzl.addDiv(output,{content:"Battle lost"});
        rzl.addDiv(output,{content:"Unfortunately, __ was unsuccessful in their hunt, better luck next time!"});
      }

      // cache roll
      rzl.addDiv(statsout,{content:`Cache > Chance: ${cache.rng.chance} Roll: ${cache.rng.roll}`});
      if (cache.rng.roll <= cache.rng.chance || cache.rng.chance === cache.rng.cap){
        let bazitem = cache.items.bazaar = nord.arena.items[rzl.randomArrayItem(cache.data.bazaar)];
        let baritem = cache.items.barracks = nord.arena.items[rzl.randomArrayItem(cache.data.barracks)];
        while (typeof bazitem.season !== "undefined" && !bazitem.season.month.includes(curMonth)) {
          console.log("reroll bazitem",bazitem.name)
          bazitem = nord.arena.items[rzl.randomArrayItem(cache.data.bazaar)];
        }
        while (typeof baritem.season !== "undefined" && !baritem.season.month.includes(curMonth)) {
          console.log("reroll baritem",baritem.name)
          baritem = nord.arena.items[rzl.randomArrayItem(cache.data.barracks)];
        }
        console.log("cache",bazitem,baritem)
        // rzl.addDiv(output,{content:`Cache : 1500AG, ${bazitem.name} and ${baritem.name}`});
        rzl.addDiv(output,{content:`What’s this? You found a supply cache! It contained 1500AG, ${bazitem.name} and ${baritem.name}`});
      } else {
        console.log("no cache");
        rzl.addDiv(output,{content:"No cache found"});
      }

      output.classList.remove("rzl-hidden");
      statsout.classList.remove("rzl-hidden");
    } catch (e) {
      console.error(e);return;
    }
  },

  uiDef : {
    meta: {
      name: "arena",
      domain: "nord",
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
        {tag:"h1",class:"title",content:"Arena Roller"},
        {tag:"form",id:"arena-form",class:"rzl-form",children: [
          {class:"rzl-form-row",children: [
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Dragon:",props:{htmlFor:"dragon"}},
              {tag:"select",class:"itemWidth",id:"dragon"}
            ]},
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Horse:",props:{htmlFor:"horse"}},
              {tag:"select",class:"itemWidth",id:"horse"}
            ]}
          ]},
          {class:"rzl-form-row",children: [



            // 15% instant win roll
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Battle cry:",props:{htmlFor:"battlecry"}},
              {tag:"input",id:"battlecry",props:{type:"checkbox"}}
            ]},
            // 10% chance boost
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Dragon drawn:",props:{htmlFor:"dragonDrawn"}},
              {tag:"input",id:"dragonDrawn",props:{type:"checkbox"}}
            ]},
            // 20% chance boost
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Enchanted Armour:",props:{htmlFor:"armour"}},
              {tag:"input",id:"armour",props:{type:"checkbox"}}
            ]},
            // 10% chance boost alone, extra 15% if with armour
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Enchanted Weapon:",props:{htmlFor:"weapon"}},
              {tag:"input",id:"weapon",props:{type:"checkbox"}}
            ]},

          ]},
          {class:"rzl-form-row",children: [
            // +1 horse level, energy boost
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Energy boost:",props:{htmlFor:"energy"}},
              {tag:"input",id:"energy",props:{type:"checkbox"}}
            ]},
            // 50% sneak item roll
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Sneak-O-Matic:",props:{htmlFor:"sneak"}},
              {tag:"input",id:"sneak",props:{type:"checkbox"}}
            ]},
            // increases chance of end roll, hound
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Hound Familiar:",props:{htmlFor:"hound"}},
              {tag:"input",id:"hound",props:{type:"checkbox"}}
            ]},
            // 10 chance per 10 trust
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Hound trust:",props:{htmlFor:"trust"}},
              {tag:"select",class:"itemWidth",id:"trust",children:[
                {tag:"option",content:  "0%"},
                {tag:"option",content: "30%"},
                {tag:"option",content: "70%"},
                {tag:"option",content:"100%"},
              ]}
            ]},
            // 5% boost per live bait
            {class:"rzl-form-item",children: [
              {tag:"label",content:"Live bait:",props:{htmlFor:"bait"}},
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
        {id:"output",class:"rzl-hidden",style:{"text-align":"center"}},
        {id:"statsout",class:"rzl-hidden",style:{"text-align":"center"}}
      ]
    },
  },
};
