nord.cart = {
  regions: {
    forest: {
      chance: 100,
      items:[
        { chance: 100,  name: 'Item One'   },
        { chance: 100,  name: 'Item Two'   },
        { chance: 100,  name: 'Item Three' },
        { chance: 10,  name: 'Item Four'  },
        { chance: 5,   name: 'Item Five'  }
      ]
    },
    mountains: {
      chance: 50,
      items: [
        { chance: 10,  name: 'Item One'   },
        { chance: 20,  name: 'Item Two'   },
        { chance: 10,  name: 'Item Three' },
        { chance: 10,  name: 'Item Four'  },
        { chance: 5,   name: 'Item Five'  }
      ]
    },
    ocean: {
      chance: 50,
      items: [
        { chance: 10,  name: 'Item One'   },
        { chance: 20,  name: 'Item Two'   },
        { chance: 10,  name: 'Item Three' },
        { chance: 10,  name: 'Item Four'  },
        { chance: 5,   name: 'Item Five'  }
      ]
    }
  },

  bonuses: [
    // id is arbitrary but must be unique
    {name:'Double chance',chance:2},
    {name:'One extra reward',max:1}
  ],

  // rolls for items based on given region - needs arg.max and args.region
  roll: function(args) {
    if (!args || !args.region || !args.max) return;
    var items = [];
    //check for bonuses
    args.region.items.forEach(item => {
      const val = nord.rand1tn(100);
      if (val <= item.chance || items.length == 0) {
        items.push(item);
      };
    });

    // check no more than 'max' items are returned
    items = nord.cart.reduce({ items: items, max: args.max });

    // console.log(`Rolled ${items.length} items:`);
    // items.forEach(i => {console.log(i.name)})
    return items;
  },

  // reduces number of rolled items to max
  reduce: function(args) {
    if (!args || !args.items || !args.max) return;
    // create local items array
    var items = [];
    // if length greater than max then reduce
    if (args.items.length > args.max) {
      for (i = 0; i < args.max; i++) {
        var val = Math.floor(Math.random() * items.length);
        items.push(args.items[val]);
        args.items.splice(val,1);
      }
    } else {
        // else just set items = args.items;
        items = args.items;
    }
    return items;
  },

  // get options from bonuses object
  getSelectBonuses: function(arr) {return this.getSelectOptionsFromObjectArray(arr)},
  getSelectOptionsFromObjectArray: function(arr) {
    if (!arr) return;
    var opts = {};
    arr.forEach((ob,i) => {
      if (!ob.name) return;
      opts[i] = ob.name;
    });
    return opts;
  },

  // event handlers
  built: function(ev) {
    // this is ui
    var selRegion = rzl.findChild(this.rootNode,'select','selRegion');
    var optsRegion = rzl.getSelOpts(nord.cart.regions);
    rzl.setSelOpts(selRegion,optsRegion);

    var selBonus = rzl.findChild(this.rootNode,'select','selBonus');
    var optsBonus = nord.cart.getSelectBonuses(nord.cart.bonuses);
    rzl.setOptions(selBonus,optsBonus);

    var btn = rzl.findChild(this.rootNode,'button','btnRoll');
    btn._output = rzl.findChild(this.rootNode,'div','output');
    btn._region = selRegion;
    btn._bonus = selBonus;
    console.dir(this);
  },

  rollClick: function(ev) {
    //this is button
    if (!this._region || !this._output) return false;
    var min = 1;
    var max = 3;
    var items = [];
    var output = this._output;
    var region = nord.cart.regions[this._region.value];
    var bonusid = this._bonus.value || false;
    var bonus = nord.cart.bonuses[bonusid] || {};

    // clear output from previous use
    if (output.children.length) rzl.destroyChildElements(output);

    // check region roll chance
    if (nord.rand1tn(100) <= region.chance) {
      items = nord.cart.roll({
        region: region,
        max: max,
        bonus: bonus
      });
    }

    // print correct output
    if (items.length){
      items.forEach(item => {
        var msg = `${item.name} at a chance of ${item.chance}%`;
        rzl.addDiv(output,{content:msg});
      });
    } else {
      rzl.addDiv(output,{content:'No items found'});
    }
  },
};

nord.uiDefs.cartography = {
  meta: {
    name: 'cartography',
    pnode: 'norduiBox',
    builtCB: 'nord.cart.built'
  },
  view: {
    0: {
      type: 'block',
      style: {},
      children: {
        0: {
          tag: 'h1',
          class: '',
          style: {},
          content: 'Cartography Roller'
        },
        1: {
          tag: 'select',
          id: 'selRegion'
        },
        2: {
          tag: 'select',
          id: 'selBonus'
        },
        3: {
          tag: 'button',
          id: 'btnRoll',
          content: 'Roll',
          events: {
            click: 'nord.cart.rollClick'
          }
        },
        4: {
          tag: 'div',
          id: 'output'
        }
      }
    }
  }
};
