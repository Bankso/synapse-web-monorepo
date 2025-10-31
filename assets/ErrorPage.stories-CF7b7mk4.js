import{E as g,S as o}from"./ErrorPage-B5Wfnus6.js";import"./iframe-YNORiRmR.js";import"./index-r8ZA1smB.js";import"./useDOI-D4f_19kt.js";import"./waitForAsyncResult-DSKsBKAz.js";import"./useMessage-8A2fFmOu.js";import"./ConfirmationDialog-hAi2Tj4J.js";import"./DialogBase-iLRY9fRC.js";import"./Close-Bti9lGnZ.js";import"./HelpPopover-D5YAnV4f.js";import"./MarkdownPopover-z-2DvCPX.js";import"./LightTooltip-B6SUVl9G.js";import"./MarkdownSynapse-gLVhWgk-.js";import"./SkeletonButton-CDu-p3fM.js";import"./SkeletonInlineBlock-DuGmV4aM.js";import"./SkeletonTable-BD0sK0Ta.js";import"./SkeletonParagraph-EPv1fXrq.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,y,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...(d=(y=a.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const v=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,v as __namedExportsOrder,k as default};
