nord = {
  // initialise variables and other session details
  init: function() {
    console.log('Nordanner tools loaded');
    this.data = {};
    this.data.ui = {};
    this.drawUI({ui: 'tools'});
  },

  // draw the UI - ui must be in this.nordui or args.ui
  drawUI: function(args) {
    // if (!args || !args.nordui || !this.nordui) return;
    var ui;
    if (this.nordui) ui = this.nordui;
    else if (args && args.ui) ui = args.ui;
    else return;
    var def = nord.uiDefs[ui];
    if (typeof def === 'undefined') return;
    nord.data.ui = new rzl.UI(def);
  },

  // generate a random number from 1 to n (inclusive)
  rand1tn: function(n) {
    return Math.floor(Math.random() * n) + 1;
  },

  // ======================================================================
  // SECTION: Definitions
  uiDefs: {
    tools: {
      meta: {
        name: 'tools',
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
              content: 'Choose a tool'
            },
            1: {
              tag: 'button',
              id: 'btnArenaTool',
              content: 'Arena',
              events: {
                click: 'nord.drawUI'
              },
              props: {
                nordui: 'arena'
              }
            },
            2: {
              tag: 'button',
              id: 'btnCartTool',
              content: 'Cartography',
              events: {
                click: 'nord.drawUI'
              },
              props: {
                nordui: 'cartography'
              }
            },
            3: {
              tag: 'div',
              id: 'norduiBox'
            },
          }
        }
      }
    },
  }
};
