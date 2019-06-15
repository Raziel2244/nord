nord.breeding = {
  genes: {},

  built: function(ev) {
    console.log('breeding built');
  },

  breedClick: function(ev) {},
};

nord.uiDefs.breeding = {
  meta: {
    name: 'breeding',
    pnode: 'norduiBox',
    builtCB: 'nord.breeding.built'
  },
  view: {
    style: {
      width:'800px',
      margin:'auto',
      display:'flex',
      'flex-flow':'column nowrap',
      'align-items':'center',
    },
    children: [
      {tag:'h2',class:'title',content:'Breeding Tool'},
      {tag:'form',id:'breeding-form',class:'rzl-form',children: [
        {class:'rzl-form-row',children: [
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Sire Geno:',props:{for:'siregeno'}},
            {tag:'input',id:'siregeno',props:{type:'text'}}
          ]},
          {class:'rzl-form-item',children: [
            {tag:'label',content:'Mare Geno:',props:{for:'maregeno'}},
            {tag:'input',id:'maregeno',props:{type:'text'}}
          ]},
        ]},
        {class:'rzl-form-row',children: [
          {tag:'button',id:'btnBreeding',class:'rzl-btn',content:'Breed',events: {
            click: 'nord.breeding.breedClick'
          },props:{type:'button'}},
        ]}
      ]},
      {id:'output',class:'rzl-hidden',style:{'text-align':'center'}}
    ]
  },
};
