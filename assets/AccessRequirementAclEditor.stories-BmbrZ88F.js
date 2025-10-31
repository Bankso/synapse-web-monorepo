import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-YNORiRmR.js";import{A as c}from"./AccessRequirementAclEditor-I0gfYAKr.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-B8deXdta.js";import"./index-DA-sFlI6.js";import"./_baseOrderBy-BIXLOcPh.js";import"./_baseIteratee-BgQd_HJ1.js";import"./_baseMap-CFWvhC-c.js";import"./_baseEach-CjXbPjj_.js";import"./useQueries-BhKGWhSp.js";import"./useInfiniteQuery-DDQOECX-.js";import"./AclEditor-DB9W_k-z.js";import"./UserSearchBoxV2-B3ie3oRs.js";import"./useDebouncedEffect-Cwm1bmBX.js";import"./use-deep-compare-effect.esm-LOSg95Yn.js";import"./uniq-Bpqgcvr3.js";import"./without-BJ6yohG8.js";import"./UserBadge-BHMAE20r.js";import"./SkeletonTable-BD0sK0Ta.js";import"./MenuItem-DOC5mnQP.js";import"./Card-BuC37YY8.js";import"./Chip-DuirGYLs.js";import"./Select-aab027f3.esm-aVSe3Pz3.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CekEw-Hi.js";import"./TeamBadge-CA0JmfBQ.js";import"./SkeletonButton-CDu-p3fM.js";import"./SkeletonInlineBlock-DuGmV4aM.js";import"./SkeletonParagraph-EPv1fXrq.js";import"./IconSvgButton-CZ5v5TIw.js";import"./FormControlLabel-DRZMOQkY.js";import"./Checkbox-C9i_hBz8.js";import"./SwitchBase-0eQkQMrp.js";import"./useUpdateAcl-CD-fgT1t.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
