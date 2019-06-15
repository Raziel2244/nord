nord = {
  tools: ['arena','cartography','breeding'],

  // initialise variables and other session details
  init: function() {
    console.log('Nordanner tools loaded');
    this.data = {};
    // this.loadToolJS();
    // rzl.loadJS("tools/arena/arena.js",true)
    this.drawUI({ui: 'tools'});
  },

  // load all of the JS files for nordanner tools
  loadToolJS: function() {
    return nord.tools.forEach(t => rzl.loadJS(`tools/${t}/${t}.js`));
  },

  // draw the UI - ui must be in this.nordui or args.ui
  drawUI: function(args) {
    if (!args && !args.nordui && !this.nordui) return;
    var ui;
    if (this.nordui) ui = this.nordui;
    else if (args && args.ui) ui = args.ui;
    else return;
    var def = nord.uiDefs[ui];
    if (typeof def === 'undefined') return;
    nord.data[ui] = new rzl.UI(def);
  },

  // ======================================================================
  // SECTION: Definitions
  uiDefs: {
    tools: {
      meta: {
        name: 'tools',
      },
      view: {
        style: {'max-width':'1080px',margin:'auto'},
        children: [
          // {
          //   tag: 'h1',
          //   class: '',
          //   style: {margin:'auto'},
          //   content: 'Choose a tool'
          // },
          {
            id: 'nordToolbar',
            style: {
              width:'100%',
              display:'flex',
              'justify-content':'center'
            },
            children: [
              {
                tag: 'button',
                class: 'rzl-btn',
                content: 'Arena',
                events: {
                  click: 'nord.drawUI'
                },
                props: {
                  nordui: 'arena'
                }
              },
              {
                tag: 'button',
                class: 'rzl-btn',
                content: 'Breeding',
                events: {
                  click: 'nord.drawUI'
                },
                props: {
                  nordui: 'breeding',
                  disabled: true
                }
              },
              {
                tag: 'button',
                class: 'rzl-btn',
                content: 'Cartography',
                events: {
                  click: 'nord.drawUI'
                },
                props: {
                  nordui: 'cartography',
                  disabled: true
                }
              },
            ]
          },
          {
            id: 'norduiBox',
            style: {width:'100%'}
          },
        ]
      }
    },
  }
};
