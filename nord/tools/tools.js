nord.tools = {
  // initialise variables and other session details
  init: function () {
    console.log("Nordanner tools loaded");
    const state = nord.state;

    // retrieve # value from url and store it
    const hash = document.location.hash;
    // get active tool name
    const hashTool = hash.split("/")[1];

    // this.loadToolJS();
    // rzl.loadJS("tools/arena/arena.js",true)
    this.drawUI({ ui: "tools" });
    // load tool if defined
    if (hashTool && nord[hashTool]) this.drawUI({ ui: hashTool });
  },

  // draw the UI - ui must be in this.nordui or args.ui
  drawUI: function (args) {
    if (!args && !args.nordui && !this.nordui) return;
    let ui = this.nordui || args.ui || false;
    if (!ui) return;
    document.location.hash = ui === "tools" ? "" : "/" + ui;
    if (ui !== "tools") nord.state.tools.activeTool = ui;
    const def = nord[ui]["uiDef"];
    if (!def) return;
    new rzl.UI(def);
  },

  // ======================================================================
  // SECTION: Definitions
  uiDef: {
    meta: { name: "tools", domain: "nord" },
    view: {
      style: {
        "max-width": "90vw",
        margin: "auto",
      },
      children: [
        {
          id: "nordToolbar",
          style: {
            width: "100%",
            display: "flex",
            "justify-content": "center",
          },
          children: [
            {
              tag: "button",
              class: "rzl-btn",
              content: "Arena",
              events: {
                click: "nord.tools.drawUI",
              },
              props: {
                nordui: "arena",
              },
            },
            {
              tag: "button",
              class: "rzl-btn",
              content: "Breeding",
              events: {
                click: "nord.tools.drawUI",
              },
              props: {
                nordui: "breeding",
                // disabled: true
              },
            },
            {
              tag: "button",
              class: "rzl-btn",
              content: "Cartography",
              events: {
                click: "nord.tools.drawUI",
              },
              props: {
                nordui: "cartography",
              },
            },
          ],
        },
        {
          id: "norduiBox",
          style: { width: "100%" },
        },
      ],
    },
  },
};
