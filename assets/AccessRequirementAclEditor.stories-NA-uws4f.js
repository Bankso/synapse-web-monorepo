import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CqK7cJYB.js";import{A as c}from"./AccessRequirementAclEditor-B1NHUNhC.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-sUWwdZJg.js";import"./index-BmyMLNdf.js";import"./_baseOrderBy-BByrgZf-.js";import"./_baseIteratee-BKPySCBI.js";import"./_baseMap-HJ-tnO7L.js";import"./_baseEach-CTliWlqj.js";import"./useQueries-BICuVczQ.js";import"./useInfiniteQuery-CisozDYI.js";import"./AclEditor-iEq0Y2M4.js";import"./UserSearchBoxV2-Cz6xwPGN.js";import"./useDebouncedEffect-DkgEtTu8.js";import"./use-deep-compare-effect.esm-iyNxJVn6.js";import"./uniq-B_WbnRyJ.js";import"./without-no3r6z7f.js";import"./UserBadge-DszVeQ9P.js";import"./SkeletonTable-DR3-Ofey.js";import"./MenuItem-sLh309bQ.js";import"./Card-BPc34rtl.js";import"./Chip-Bs-SomAb.js";import"./Select-aab027f3.esm-CU8l9392.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-_t3ZeQEA.js";import"./TeamBadge-CMqL8KfV.js";import"./SkeletonButton-D5ZIjaSN.js";import"./SkeletonInlineBlock-B9Mq_BP1.js";import"./SkeletonParagraph-D0zEeYHc.js";import"./IconSvgButton-B8QLyans.js";import"./FormControlLabel-CUyG_bJd.js";import"./Checkbox-BefLVxlo.js";import"./SwitchBase-nMIyFfxW.js";import"./useUpdateAcl-Cex9zepl.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,R,u;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(u=(R=s.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};var A,_,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const ce=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ce as __namedExportsOrder,ie as default};
