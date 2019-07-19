nord = {
  tools: ["arena","cartography","breeding"],

  // initialise variables and other session details
  init: function() {
    console.log("Nordanner tools loaded");
    this.data = {};

    // retrieve # value from url
    const hash = document.location.hash;
    // get tool name
    const actTool = this.data.activeTool = hash.split("/")[1];

    // this.loadToolJS();
    // rzl.loadJS("tools/arena/arena.js",true)
    this.drawUI({ui: "tools"});
    // load tool if defined
    if (actTool && nord.uiDefs[actTool]) this.drawUI({ui: actTool});
  },

  // load all of the JS files for nordanner tools
  loadToolJS: function() {
    return nord.tools.forEach(t => rzl.loadJS(`tools/${t}/${t}.js`));
  },

  // draw the UI - ui must be in this.nordui or args.ui
  drawUI: function(args) {
    if (!args && !args.nordui && !this.nordui) return;
    let ui;
    if (this.nordui) ui = this.nordui;
    else if (args && args.ui) ui = args.ui;
    else return;
    const hash = (ui === "tools") ? "" : ui;
    document.location.hash = "#/" + hash;
    const def = nord.uiDefs[ui];
    if (typeof def === "undefined") return;
    new rzl.UI(def);
  },

  // ======================================================================
  // SECTION: Definitions
  uiDefs: {
    tools: {
      meta: {
        name: "tools",
        domain: "nord",
        data: "data"
      },
      view: {
        style: {
          "max-width":"90vw",
          margin:"auto"
        },
        children: [
          {
            id: "nordToolbar",
            style: {
              width:"100%",
              display:"flex",
              "justify-content":"center"
            },
            children: [
              {
                tag: "button",
                class: "rzl-btn",
                content: "Arena",
                events: {
                  click: "nord.drawUI"
                },
                props: {
                  nordui: "arena"
                }
              },
              {
                tag: "button",
                class: "rzl-btn",
                content: "Breeding",
                events: {
                  click: "nord.drawUI"
                },
                props: {
                  nordui: "breeding",
                  disabled: true
                }
              },
              {
                tag: "button",
                class: "rzl-btn",
                content: "Cartography",
                events: {
                  click: "nord.drawUI"
                },
                props: {
                  nordui: "cartography",
                  // disabled: true
                }
              },
            ]
          },
          {
            id: "norduiBox",
            style: {width:"100%"}
          },
        ]
      }
    },
  }
};
