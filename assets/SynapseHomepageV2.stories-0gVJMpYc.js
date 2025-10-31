import{x as p,a1 as m,jK as s,b as r,cz as n,fx as g}from"./iframe-CqK7cJYB.js";import{r as l}from"./mockHomepageQueryResultData-CU5NXDhw.js";import{b as c}from"./SynapseHomepageV2-CDlCZUYh.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-DnqDucR3.js";import"./SynapsePlans-DWRKYZSX.js";import"./index-tfRWLv6F.js";import"./Plot-CCBMdwiY.js";import"./index-Chjiymov.js";import"./SqlFunctions-BT1870sh.js";import"./Card-BPc34rtl.js";import"./Chip-Bs-SomAb.js";import"./index-BmyMLNdf.js";import"./SynapseNavDrawer-ChmyD6vI.js";import"./useDataAccessSubmission-incXCEev.js";import"./useInfiniteQuery-CisozDYI.js";import"./useDownloadList-D-oMkq9_.js";import"./CreateProjectModal-C_dzRN4G.js";import"./ConfirmationDialog-BZjDOe4h.js";import"./DialogBase-6DXYrV_C.js";import"./Close-ZjaYpzM7.js";import"./HelpPopover-CznEVNAa.js";import"./MarkdownPopover-CmRbAYXX.js";import"./LightTooltip-CHUEQZSK.js";import"./MarkdownSynapse-5ZAwBoHu.js";import"./SkeletonButton-D5ZIjaSN.js";import"./SkeletonInlineBlock-B9Mq_BP1.js";import"./SkeletonTable-DR3-Ofey.js";import"./SkeletonParagraph-D0zEeYHc.js";import"./SynapseHomepageNavBar-CRNXoOR6.js";import"./SageResourcesPopover-p_4ETMY4.js";import"./Grid-DvhlccUG.js";import"./MenuItem-sLh309bQ.js";import"./UserBadge-DszVeQ9P.js";import"./Slide-CW45yD0a.js";import"./InputAdornment-CeYj6JmE.js";import"./listItemButtonClasses-CeeY4FUM.js";import"./Badge-Bdakq6VY.js";import"./usePreviousProps-CAXjngJV.js";import"./useGetEntityHeaders-BB1iJstE.js";import"./NavigateNext-DWsIUMWa.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    gotoPlace: (href: string) => {
      window.alert(\`SynapseHomepageV2 calling back to change route to \${href}\`);
    }
  },
  loaders: [() => {
    registerSynapseHomepageMockQueries();
  }],
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0'
    },
    msw: {
      handlers: [...getFileHandlers(MOCK_REPO_ORIGIN), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), getFeatureFlagsOverride({
        portalOrigin: PRODUCTION_ENDPOINT_CONFIG.PORTAL,
        overrides: {
          [FeatureFlagEnum.HOMEPAGE_CHATBOT]: true
        }
      })]
    }
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const oe=["DemoVersion2"];export{e as DemoVersion2,oe as __namedExportsOrder,re as default};
