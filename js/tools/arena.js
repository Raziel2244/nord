nord.arena = {
  dragons: [
    { reward:50,   chance:95 },
    { reward:100,  chance:85 },
    { reward:250,  chance:70 },
    { reward:500,  chance:55 },
    { reward:1000, chance:40 },
    { reward:2000, chance:25 },
    { reward:3000, chance:10 }
  ],

  // event handlers
  built: function(ev) {
    // this is ui
    var selDragon = rzl.findChild(this.rootNode,'select','selDragon');
    var optsDragon = rzl.getSelOpts(nord.arena.dragons);
    rzl.setOptions(selDragon,optsDragon);

    var btn = rzl.findChild(this.rootNode,'button','btnRoll');
    btn._output = rzl.findChild(this.rootNode,'div','output');
    btn._inpDrawn = rzl.findChild(this.rootNode,'input','inpDrawn');
    btn._inpLevel = rzl.findChild(this.rootNode,'input','inpLevel');
    btn._selDragon = selDragon;
  },

  rollClick: function(ev) {
    //this is button
    if (!this._output || !this._inpLevel || !this._selDragon) return;
    if (this._inpLevel.value === '' || this._inpLevel.value < 0) return;

    // gather required variables
    const output = this._output;
    const isDrawn = this._inpDrawn.checked || false;
    const level = parseInt(this._inpLevel.value);
    var dragon = nord.arena.dragons[this._selDragon.value];
    dragon.level = parseInt(this._selDragon.value);

    // calculate final chance of success
    var chance = dragon.chance;
    if (isDrawn) chance += 15;
    for (var i = level; i > dragon.level; i--) chance += 15;
    if (chance > 100) chance = 100;

    console.log(output,isDrawn,level,dragon,chance)

    // clear output from previous use
    if (output.children.length) rzl.destroyChildElements(output);

    // print correct output
    if (nord.rand1tn(100) <= chance || chance === 100){
      console.log(`win ${dragon.reward}`);
      rzl.addDiv(output,'','','',`Victory! Earned ${dragon.reward}AG`);
    } else {
      console.log('loss');
      rzl.addDiv(output,'','','','Battle lost');
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
    0: {
      type: 'block',
      style: {
        width:'200px',
        margin:'auto',
        display: 'flex',
        'flex-flow': 'column nowrap'
      },
      children: {
        0: {
          tag: 'h1',
          class: '',
          style: {'text-align':'center'},
          content: 'Arena Roller'
        },
        1: {
          tag: 'div',
          style: {display:'flex','flex-flow':'row nowrap',margin:'auto'},
          children: {
            1: {
              tag: 'div',
              style: {display:'flex','flex-flow':'column nowrap',margin:'auto'},
              children: {
                0: {
                  tag: 'span',
                  content: 'Dragon level: '
                },
                1: {
                  tag: 'span',
                  content: 'Horse level: '
                },
                2: {
                  tag: 'span',
                  content: 'Dragon drawn: '
                },
              }
            },
            2: {
              tag: 'div',
              // style: {display:'flex','flex-flow':'column nowrap',width:'40px',margin:'auto'},
              style: {display:'flex','flex-flow':'column nowrap',margin:'auto'},
              children: {
                0: {
                  tag: 'select',
                  id: 'selDragon'
                },
                1: {
                  tag: 'input',
                  inputtype: 'number',
                  id: 'inpLevel',
                  props: {
                    min: 0,
                    value: 0
                  }
                },
                2: {
                  tag: 'input',
                  id: 'inpDrawn',
                  inputtype: 'checkbox'
                },
              }
            },
          }
        },
        2: {
          tag: 'button',
          id: 'btnRoll',
          style: {
            margin: '20px auto',
          },
          content: 'Roll',
          events: {
            click: 'nord.arena.rollClick'
          }
        },
        3: {
          tag: 'div',
          id: 'output',
          style: {'text-align':'center'},
        },
      }
    }
  },
};
