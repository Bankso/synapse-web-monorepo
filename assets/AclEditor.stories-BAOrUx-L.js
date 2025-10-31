import{a2 as o,w as p,a3 as a}from"./iframe-CqK7cJYB.js";import{A as m}from"./AclEditor-iEq0Y2M4.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-Cz6xwPGN.js";import"./useDebouncedEffect-DkgEtTu8.js";import"./use-deep-compare-effect.esm-iyNxJVn6.js";import"./uniq-B_WbnRyJ.js";import"./without-no3r6z7f.js";import"./UserBadge-DszVeQ9P.js";import"./SkeletonTable-DR3-Ofey.js";import"./MenuItem-sLh309bQ.js";import"./Card-BPc34rtl.js";import"./Chip-Bs-SomAb.js";import"./Select-aab027f3.esm-CU8l9392.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-_t3ZeQEA.js";import"./TeamBadge-CMqL8KfV.js";import"./SkeletonButton-D5ZIjaSN.js";import"./SkeletonInlineBlock-B9Mq_BP1.js";import"./SkeletonParagraph-D0zEeYHc.js";import"./IconSvgButton-B8QLyans.js";import"./FormControlLabel-CUyG_bJd.js";import"./Checkbox-BefLVxlo.js";import"./SwitchBase-nMIyFfxW.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    resourceAccessList: [{
      principalId: MOCK_USER_ID,
      accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS]
    }, {
      principalId: MOCK_TEAM_ID,
      accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE]
    }]
  },
  parameters: {
    stack: 'mock'
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
