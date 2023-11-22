import{M as i}from"./index.esm-de4ab199.js";import"./index-e67e0a49.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-76a98cbb.js";const M={title:"Molecules/Menu Group",component:i,parameters:{layout:"centered"}},c=Array.from({length:5}).map((l,e)=>({label:`sub item ${e}`,url:"#"})),r={args:{label:"Sub menu",items:c}},p=Array.from({length:5}).map((l,e)=>({label:`sub item ${e}`,items:[{label:`children sub item ${e}`,url:"#"}]})),t={args:{label:"Sub menu",items:p}};var s,a,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Sub menu",
    items
  }
}`,...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var m,o,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Sub menu",
    items: itemsWithSubMenu
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const f=["Default","WithSubMenus"];export{r as Default,t as WithSubMenus,f as __namedExportsOrder,M as default};
//# sourceMappingURL=MenuGroup.stories-a9bfcf94.js.map
