import{g as I,k as S,n as t,a1 as O,am as g,b as e,kl as i,km as C,H as s,kn as l,p as m,ko as b,kp as T,k0 as A}from"./iframe-CqK7cJYB.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DLcqjPyM.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-YwzlW9qA.js";import"./useAccessRequirements-sUWwdZJg.js";import"./index-BmyMLNdf.js";import"./_baseOrderBy-BByrgZf-.js";import"./_baseIteratee-BKPySCBI.js";import"./_baseMap-HJ-tnO7L.js";import"./_baseEach-CTliWlqj.js";import"./useQueries-BICuVczQ.js";import"./useInfiniteQuery-CisozDYI.js";import"./groupBy-DLppQJ9d.js";import"./_createAggregator-D7ZVA9xA.js";import"./DialogBase-6DXYrV_C.js";import"./Close-ZjaYpzM7.js";import"./HelpPopover-CznEVNAa.js";import"./MarkdownPopover-CmRbAYXX.js";import"./LightTooltip-CHUEQZSK.js";import"./MarkdownSynapse-5ZAwBoHu.js";import"./SkeletonButton-D5ZIjaSN.js";import"./SkeletonInlineBlock-B9Mq_BP1.js";import"./SkeletonTable-DR3-Ofey.js";import"./SkeletonParagraph-D0zEeYHc.js";import"./EntityLink-DM7TNi-A.js";import"./useEntity-CkY_2h_h.js";import"./pickBy-uAAN-PRV.js";import"./isString-o3r1x2Hk.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-8xj48AmX.js";import"./useGetEntityHeaders-BB1iJstE.js";import"./EntityIcon-D5d7CgU_.js";import"./ErrorChip-CrLcZ7Nr.js";import"./Chip-Bs-SomAb.js";import"./UserOrTeamBadge-_t3ZeQEA.js";import"./UserBadge-DszVeQ9P.js";import"./MenuItem-sLh309bQ.js";import"./Card-BPc34rtl.js";import"./TeamBadge-CMqL8KfV.js";import"./UnmanagedACTAccessRequirementItem-D9zHvJYT.js";import"./RequirementItem-eKvmzE_d.js";import"./LockTwoTone-CdB1eQEg.js";import"./UserSearchBoxV2-Cz6xwPGN.js";import"./useDebouncedEffect-DkgEtTu8.js";import"./use-deep-compare-effect.esm-iyNxJVn6.js";import"./uniq-B_WbnRyJ.js";import"./without-no3r6z7f.js";import"./Select-aab027f3.esm-CU8l9392.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-XCfRieb3.js";import"./SelfSignAccessRequirementItem-B32AFqil.js";import"./DataAccessRequestAccessorsFilesForm-DanNG_nc.js";import"./enums-DZVgF9au.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-incXCEev.js";import"./RadioGroup-BvSFJeFy.js";import"./Radio-DEv0UjYA.js";import"./SwitchBase-nMIyFfxW.js";import"./FormGroup-pwfjhOjW.js";import"./FormControlLabel-CUyG_bJd.js";import"./UploadDocumentField-DzwfTdJE.js";import"./FileUpload-B5UTZVtm.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D4B3kR4u.js";import"./GridLegacy-DD7z4CqL.js";import"./ResearchProjectForm-Ddd8jD_P.js";import"./TextFieldWithWordLimit-BK_9ygIC.js";import"./AuthenticatedRequirement-BAuZ0xSc.js";import"./CertificationRequirement-BCgor5m8.js";import"./TwoFactorAuthEnabledRequirement-xncCYFLW.js";import"./ValidationRequirement-D9pQvu9L.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-w-hkLt-3.js";import"./RejectDataAccessRequestModal-DPXi4V7u.js";import"./CannedRejectionDialog-BBBDaHJ_.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BZjDOe4h.js";import"./Checkbox-BefLVxlo.js";import"./Grid-DvhlccUG.js";import"./upperFirst-Bjb1KjCu.js";import"./_stringToArray-GXgbBam8.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
