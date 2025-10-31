import{g as I,k as S,n as t,a1 as O,am as g,b as e,kl as i,km as C,H as s,kn as l,p as m,ko as b,kp as T,k0 as A}from"./iframe-YNORiRmR.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DBkeCfOg.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-25YAS6uu.js";import"./useAccessRequirements-B8deXdta.js";import"./index-DA-sFlI6.js";import"./_baseOrderBy-BIXLOcPh.js";import"./_baseIteratee-BgQd_HJ1.js";import"./_baseMap-CFWvhC-c.js";import"./_baseEach-CjXbPjj_.js";import"./useQueries-BhKGWhSp.js";import"./useInfiniteQuery-DDQOECX-.js";import"./groupBy-Cgtoxkug.js";import"./_createAggregator-D4BU7kPW.js";import"./DialogBase-iLRY9fRC.js";import"./Close-Bti9lGnZ.js";import"./HelpPopover-D5YAnV4f.js";import"./MarkdownPopover-z-2DvCPX.js";import"./LightTooltip-B6SUVl9G.js";import"./MarkdownSynapse-gLVhWgk-.js";import"./SkeletonButton-CDu-p3fM.js";import"./SkeletonInlineBlock-DuGmV4aM.js";import"./SkeletonTable-BD0sK0Ta.js";import"./SkeletonParagraph-EPv1fXrq.js";import"./EntityLink-CSWP5Xgw.js";import"./useEntity-CSu2QEQP.js";import"./pickBy-rr4lLDZz.js";import"./isString-CBX5AqAy.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DoscKK1e.js";import"./useGetEntityHeaders-CHUs91za.js";import"./EntityIcon-BE1L0-SL.js";import"./ErrorChip-B4rksfPO.js";import"./Chip-DuirGYLs.js";import"./UserOrTeamBadge-CekEw-Hi.js";import"./UserBadge-BHMAE20r.js";import"./MenuItem-DOC5mnQP.js";import"./Card-BuC37YY8.js";import"./TeamBadge-CA0JmfBQ.js";import"./UnmanagedACTAccessRequirementItem-Z92cpcLi.js";import"./RequirementItem-ZnIesCps.js";import"./LockTwoTone-C0QnK-F0.js";import"./UserSearchBoxV2-B3ie3oRs.js";import"./useDebouncedEffect-Cwm1bmBX.js";import"./use-deep-compare-effect.esm-LOSg95Yn.js";import"./uniq-Bpqgcvr3.js";import"./without-BJ6yohG8.js";import"./Select-aab027f3.esm-aVSe3Pz3.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BPMYudyV.js";import"./SelfSignAccessRequirementItem-_G29gJpB.js";import"./DataAccessRequestAccessorsFilesForm-BRKgP-5t.js";import"./enums-D53qoOwY.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DmnRKgrK.js";import"./RadioGroup-BeUyDD7B.js";import"./Radio-Big1PWr_.js";import"./SwitchBase-0eQkQMrp.js";import"./FormGroup-XVBN8i9S.js";import"./FormControlLabel-DRZMOQkY.js";import"./UploadDocumentField-D4wZNAjp.js";import"./FileUpload-C3VsStdg.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Xqx6mAhF.js";import"./GridLegacy-BT_vFzE1.js";import"./ResearchProjectForm-BkbznGSA.js";import"./TextFieldWithWordLimit-Dpp7enSP.js";import"./AuthenticatedRequirement-BgBpR3_B.js";import"./CertificationRequirement-pygzqUzU.js";import"./TwoFactorAuthEnabledRequirement-MkHkrrf8.js";import"./ValidationRequirement-WgzlDZxg.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-D5QepRjE.js";import"./RejectDataAccessRequestModal-BX4zbevd.js";import"./CannedRejectionDialog-BS6awqqF.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-hAi2Tj4J.js";import"./Checkbox-C9i_hBz8.js";import"./Grid-BWZWnqEH.js";import"./upperFirst-D195g2ab.js";import"./_stringToArray-DP1r1LNq.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
