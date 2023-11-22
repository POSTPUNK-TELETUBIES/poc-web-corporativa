import{S as m,j as n,B as p}from"./index.esm-b045b001.js";import"./index-e67e0a49.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-76a98cbb.js";const x={title:"Molecules/Submenu button",component:m,parameters:{layout:"centered"}},b=[{items:[{label:"C1 - Item 1",url:"#"},{label:"C1 - Item 2",items:[{label:"Sub Item 1",url:"#"}]}],label:"C1 - Group 1"},{label:"C1 - Group 2",items:[{label:"Item 1",url:"#"},{label:"Item 2",items:[{label:"Sub Item 1",url:"#"}]}]}],c=[{items:[{label:"C2 - Item 1",url:"#"},{label:" C2 - Item 2",items:[{label:"Sub Item 1",url:"#"}]}],label:"C2 - Group 1"},{label:"C2 - Group 2",items:[{label:"Item 1",url:"#"},{label:"Item 2",items:[{label:"Sub Item 1",url:"#"}]}]}],i=[{groups:b},{groups:c}],e={args:{label:"Sub menu",drawerProps:{},children:n.jsx("div",{children:"Hola"})}},r={args:{label:"Sub menu",drawerProps:{},children:n.jsx(p,{sx:{m:2,display:"flex",gap:3},columns:i})}};var l,a,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Sub menu',
    drawerProps: {},
    children: <div>Hola</div>
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var t,o,u;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Sub menu',
    drawerProps: {},
    children: <BodyMenu sx={{
      m: 2,
      display: 'flex',
      gap: 3
    }} columns={columns} />
  }
}`,...(u=(o=r.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const C=["Default","WithMenuBody"];export{e as Default,r as WithMenuBody,C as __namedExportsOrder,x as default};
//# sourceMappingURL=SubMenuButton.stories-b155a6d9.js.map
