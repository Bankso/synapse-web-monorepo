import{a2 as o,w as p,a3 as a}from"./iframe-YNORiRmR.js";import{A as m}from"./AclEditor-DB9W_k-z.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-B3ie3oRs.js";import"./useDebouncedEffect-Cwm1bmBX.js";import"./use-deep-compare-effect.esm-LOSg95Yn.js";import"./uniq-Bpqgcvr3.js";import"./without-BJ6yohG8.js";import"./UserBadge-BHMAE20r.js";import"./SkeletonTable-BD0sK0Ta.js";import"./MenuItem-DOC5mnQP.js";import"./Card-BuC37YY8.js";import"./Chip-DuirGYLs.js";import"./Select-aab027f3.esm-aVSe3Pz3.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CekEw-Hi.js";import"./TeamBadge-CA0JmfBQ.js";import"./SkeletonButton-CDu-p3fM.js";import"./SkeletonInlineBlock-DuGmV4aM.js";import"./SkeletonParagraph-EPv1fXrq.js";import"./IconSvgButton-CZ5v5TIw.js";import"./FormControlLabel-DRZMOQkY.js";import"./Checkbox-C9i_hBz8.js";import"./SwitchBase-0eQkQMrp.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
