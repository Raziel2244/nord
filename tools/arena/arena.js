rzl.loadCSS('tools/arena/arena.css');
nord.arena = {
  // dragons to fight
  dragons: [
    { level: '0', title: 'Beginner',  reward: 50,    chance: 95 },
    { level: '1', title: 'Level 1',   reward: 100,   chance: 85 },
    { level: '2', title: 'Level 2',   reward: 250,   chance: 70 },
    { level: '3', title: 'Level 3',   reward: 500,   chance: 55 },
    { level: '4', title: 'Level 4',   reward: 1000,  chance: 40 },
    { level: '5', title: 'Level 5',   reward: 2000,  chance: 25 },
    { level: '6', title: 'Level 6',   reward: 3000,  chance: 10 }
  ],

  // data for horses entering the arena
  horses: [
    { level: '0', title: 'No registered level' },
    { level: '1', title: 'Basic training' },
    { level: '2', title: 'Quality blood' },
    { level: '3', title: 'Excellent blood' },
    { level: '4', title: 'Supreme blood' },
    { level: '5', title: 'Heroic blood' },
    { level: '6', title: 'Legendary blood' }
  ],

  // items for sneak-o-matic and cache
  items: [
    {name:'RNG trait',           group:'bazaar',  count:'3'},
    {name:'Roaning triturate',   group:'bazaar',  count:'3'},
    {name:'+1 mutation slot',    group:'bazaar',  count:'3'},
    {name:'+1 natural slot',     group:'bazaar',  count:'3'},
    {name:'Luck potion 1',       group:'bazaar',  count:'3'},
    {name:'Luck potion 2',       group:'bazaar',  count:'3'},
    {name:'Potion choice',       group:'bazaar',  count:'3'},
    {name:'Semi custom import',  group:'bazaar',  count:'2'},
    {name:'A touch of glimmer',  group:'bazaar',  count:'1'},
    {name:'Pretty plump pumpkin',group:'bazaar',  count:'1',season:{month:[10]}},
    {name:'Glass full of eggnog',group:'bazaar',  count:'1',season:{month:[12]}},
    {name:'Future glimpse',      group:'bazaar',  count:'1'},
    {name:'Sneak-O-Matic',       group:'barracks',count:'1'},
    {name:'Time travel token',   group:'barracks',count:'1'},
    {name:'Enchanted armour',    group:'barracks',count:'1'},
    {name:'Enchanted sword',     group:'barracks',count:'1'},
    {name:'Hound familiar',      group:'barracks',count:'1'},
    {name:'Battle cry buff',     group:'barracks',count:'1'},
    {name:'Live bait x10',       group:'barracks',count:'1'},
    {name:'Energy boost',        group:'barracks',count:'1'},
  ],

  // ======================================================================
  // helper functions
  cacheRoll: function(cachechance) {
    // cache roll
    if (rzl.rand1tn(500) <= cachechance || cachechance === 500){
      var bazitem = nord.arena.items[rzl.randomArrayItem(cache.bazaar)];
      var baritem = nord.arena.items[rzl.randomArrayItem(cache.barracks)];
      console.log('cache',bazitem,baritem)
      rzl.addDiv(output,{content:`Cache : 1500AG, ${bazitem.name} and ${baritem.name}`});
    } else {
      console.log('no cache');
      rzl.addDiv(output,{content:'No cache found'});
    }
  },

  // ======================================================================
  // event handlers

  // called on arena UI build
  built: function(ev) {
    // this is ui
    try {
      this.form = rzl.findChild(this.rootNode,'form','arena-form');
      this.fields = rzl.getFormFields(this.form);
      this.cache = {};
      this.cache.all = rzl.arrayForCountInObjectsInArray(nord.arena.items,'count');
      this.cache.bazaar = rzl.arrayForCountInObjectsInArrayFilter(
        nord.arena.items,'count',{key:'group',value:'bazaar'});
      this.cache.barracks = rzl.arrayForCountInObjectsInArrayFilter(
        nord.arena.items,'count',{key:'group',value:'barracks'});

      this.optsDragon = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.arena.dragons,'title');
      rzl.setSelOpts(this.fields.dragon,this.optsDragon);
      this.optsHorse = rzl.getSelectOptionsFromKeyInObjectsInArray(nord.arena.horses,'title');
      rzl.setSelOpts(this.fields.horse,this.optsHorse);
    } catch (e) {
      console.error(e);return;
    }
  },

  // click handler for arena roll button
  rollClick: function(ev) {
    //'this' is button
    try {
      var items = nord.arena.items;
      var uidata = nord.data.arena;
      var fields = uidata.fields;
      var cache = uidata.cache;
      var output = rzl.findChild(uidata.rootNode,'div','output');
      var victory = false;
      var chance = 0;

      // clear output from previous use
      if (output.children.length) rzl.destroyChildren(output);

      // gather required variables
      var dragonid = fields.dragon.selectedIndex;
      var dragondata = nord.arena.dragons[dragonid];
      var horseid = fields.dragon.selectedIndex;
      var horsedata = nord.arena.horses[horseid];
      var level = horsedata.level;
      var bait = fields.bait.value;

      // roll for Sneak-O-Matic item
      if (fields.sneak.checked) {
        if (rzl.rand1tn(100) <= 50) {
          var sneakitem = items[rzl.randomArrayItem(cache.all)];
          console.log('sneak item',sneakitem);
          rzl.addDiv(output,{content:`Sneak-O-Matic : ${sneakitem.name}`});
        } else {
          console.log('no sneak item');
          rzl.addDiv(output,{content:'No Sneak-O-Matic Item'});
        }
      }

      // calculate cache roll chance
      var cachechance = 1;
      if (fields.hound.checked) cachechance = 50;
      if (fields.trust.value >= 10) {
        var trust = 10 * (Math.floor(fields.trust.value / 10));
        cachechance += trust;
      }

      // battle cry roll
      if (fields.battlecry.checked) {
        chance = 15;
        if (rzl.rand1tn(100) <= chance){
          console.log('battle cry win');
          console.log(`win ${dragondata.reward}`);
          rzl.addDiv(output,{content:`Victory! Earned ${dragondata.reward}AG`});

          nord.arena.cacheRoll();
          return;
        } else {
          console.log('battle cry failed');
          chance = 0;
        }
      }

      // add level for energy boost
      if (fields.energy.checked) level++;

      // calculate win chance applying boosts
      chance = dragondata.chance; // base chance
      if (fields.dragonDrawn.checked) chance += 10; // boost for drawing dragon
      for (var i = level; i > dragondata.level; i--) chance += 15; // boost per level
      if (fields.armour.checked) chance += 20; // armour boost
      if (fields.weapon.checked) chance += 10; // weapon boost
      if (fields.armour.checked && fields.weapon.checked) chance += 15; // armour+weapon combo
      if (bait > 0) {if (bait > 5) {bait = 5;}chance += bait * 5;} // bait bonus
      if (chance > 100) chance = 100; // limit to 100 percent to avoid possible false negatives

      // print correct output for victory / loss
      if (rzl.rand1tn(100) <= chance || chance === 100){
        console.log(`win ${dragondata.reward}`);
        rzl.addDiv(output,{content:`Victory : ${dragondata.reward}AG`});

        // cache roll
        if (rzl.rand1tn(500) <= cachechance || cachechance === 500){
          var bazitem = items[rzl.randomArrayItem(cache.bazaar)];
          var baritem = items[rzl.randomArrayItem(cache.barracks)];
          console.log('cache',bazitem,baritem)
          rzl.addDiv(output,{content:`Cache : 1500AG, ${bazitem.name} and ${baritem.name}`});
        } else {
          console.log('no cache');
          rzl.addDiv(output,{content:'No cache found'});
        }
      } else {
        console.log('loss');
        rzl.addDiv(output,{content:'Battle lost'});
      }
      output.classList.remove('rzl-hidden');
    } catch (e) {
      console.error(e);return;
    }
  }
};

nord.uiDefs.arena = {
  meta: {
    name: 'arena',
    pnode: 'norduiBox',
    builtCB: 'nord.arena.built'
  },
  view: {
    // type: 'block',
    style: {
      width:'800px',
      margin:'auto',
      display:'flex',
      'flex-flow':'column nowrap',
      'align-items':'center',
    },
    children: [
      {tag:'h2',class:'title',content:'Arena Roller'},
      {tag:'form',id:'arena-form',class:'rzl-form',children: [
        {class:'rzl-form-row',children: [
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Dragon:',props:{for:'dragon'}},
            {tag:'select',class:'itemWidth',id:'dragon'}
          ]},
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Horse:',props:{for:'horse'}},
            {tag:'select',class:'itemWidth',id:'horse'}
          ]}
        ]},
        {class:'rzl-form-row',children: [
          // 10% chance boost
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Dragon drawn:',props:{for:'dragonDrawn'}},
            {tag:'input',id:'dragonDrawn',props:{type:'checkbox'}}
          ]},
          // 20% chance boost
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Enchanted Armour:',props:{for:'armour'}},
            {tag:'input',id:'armour',props:{type:'checkbox'}}
          ]},
          // 10% chance boost alone, extra 15% if with armour
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Enchanted Weapon:',props:{for:'weapon'}},
            {tag:'input',id:'weapon',props:{type:'checkbox'}}
          ]},
          // 15% instant win roll
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Battle cry:',props:{for:'battlecry'}},
            {tag:'input',id:'battlecry',props:{type:'checkbox'}}
          ]},
        ]},
        {class:'rzl-form-row',children: [
          // 5% boost per live bait
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Live bait:',props:{for:'bait'}},
            {
              tag:'input',class:'itemWidth',id:'bait',
              props:{type:'number',min:'0',max:'5',value:'0',step:'1'}
            }
          ]},
          // +1 horse level, energy boost
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Energy boost:',props:{for:'energy'}},
            {tag:'input',id:'energy',props:{type:'checkbox'}}
          ]},
          // 50% sneak item roll
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Sneak-O-Matic:',props:{for:'sneak'}},
            {tag:'input',id:'sneak',props:{type:'checkbox'}}
          ]},
          // increases chance of end roll, hound
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Hound Familiar:',props:{for:'hound'}},
            {tag:'input',id:'hound',props:{type:'checkbox'}}
          ]},
          // 5% boost per live bait
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Hound trust:',props:{for:'trust'}},
            {
              tag:'input',class:'itemWidth',id:'trust',
              props:{type:'number',min:'0',max:'500',value:'0',step:'1'}
            }
          ]},
        ]},
        {class:'rzl-form-row',children: [
          {tag:'button',id:'btnRoll',class:'rzl-btn',content:'Roll',events: {
            click: 'nord.arena.rollClick'
          },props:{type:'button'}},
        ]}
      ]},
      {id:'output',class:'rzl-hidden',style:{'text-align':'center'}}
    ]
  },
};
