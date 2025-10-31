import{dO as c,j as e,as as v,ja as x}from"./iframe-CqK7cJYB.js";import{D as g}from"./DateTimePicker-QE9sscZA.js";import"./index-r8ZA1smB.js";import"./useMobilePicker-C8XqBh4u.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CeYj6JmE.js";import"./index-BmyMLNdf.js";import"./ListItem-B02j4yjI.js";import"./listItemButtonClasses-CeeY4FUM.js";import"./Chip-Bs-SomAb.js";import"./Tabs-BVwXZ4oU.js";import"./KeyboardArrowRight-5k506Dz8.js";import"./MenuItem-sLh309bQ.js";const _={title:"UI/DateTimePicker",component:g,tags:["autodocs"]};function d(r){const{children:u,utcTimeOverride:T}=r,l=v();return e.jsx(x,{synapseContext:{...l,utcTime:T},children:u})}const o={decorators:[r=>e.jsx(d,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:c("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(d,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:c("2023-01-01T00:00:00")}};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  decorators: [Story => <TimezoneConfigOverrideWrapper utcTimeOverride={false}>
        <Story />
      </TimezoneConfigOverrideWrapper>],
  args: {
    value: dayjs('2023-01-01T00:00:00')
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <TimezoneConfigOverrideWrapper utcTimeOverride={true}>
        <Story />
      </TimezoneConfigOverrideWrapper>],
  args: {
    value: dayjs('2023-01-01T00:00:00')
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const I=["Local","UTC"];export{o as Local,t as UTC,I as __namedExportsOrder,_ as default};
