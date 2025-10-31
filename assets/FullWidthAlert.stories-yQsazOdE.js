import{ax as g,j as e,r as w}from"./iframe-CqK7cJYB.js";import{S as v}from"./SynapseNavDrawer-ChmyD6vI.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-incXCEev.js";import"./useInfiniteQuery-CisozDYI.js";import"./useDownloadList-D-oMkq9_.js";import"./CreateProjectModal-C_dzRN4G.js";import"./ConfirmationDialog-BZjDOe4h.js";import"./DialogBase-6DXYrV_C.js";import"./Close-ZjaYpzM7.js";import"./HelpPopover-CznEVNAa.js";import"./MarkdownPopover-CmRbAYXX.js";import"./LightTooltip-CHUEQZSK.js";import"./MarkdownSynapse-5ZAwBoHu.js";import"./SkeletonButton-D5ZIjaSN.js";import"./SkeletonInlineBlock-B9Mq_BP1.js";import"./SkeletonTable-DR3-Ofey.js";import"./SkeletonParagraph-D0zEeYHc.js";import"./SynapseHomepageNavBar-CRNXoOR6.js";import"./SageResourcesPopover-p_4ETMY4.js";import"./Grid-DvhlccUG.js";import"./index-BmyMLNdf.js";import"./MenuItem-sLh309bQ.js";import"./UserBadge-DszVeQ9P.js";import"./Card-BPc34rtl.js";import"./Chip-Bs-SomAb.js";import"./Slide-CW45yD0a.js";import"./InputAdornment-CeYj6JmE.js";import"./listItemButtonClasses-CeeY4FUM.js";import"./Badge-Bdakq6VY.js";import"./usePreviousProps-CAXjngJV.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,r as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
