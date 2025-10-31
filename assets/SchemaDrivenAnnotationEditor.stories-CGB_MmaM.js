import{jB as T}from"./iframe-YNORiRmR.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BcXPOUEk.js";import"./index-r8ZA1smB.js";import"./useEntity-CSu2QEQP.js";import"./pickBy-rr4lLDZz.js";import"./isString-CBX5AqAy.js";import"./_baseIteratee-BgQd_HJ1.js";import"./useQueries-BhKGWhSp.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DDQOECX-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DoscKK1e.js";import"./index-mTn7JX3J.js";import"./enums-D53qoOwY.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CjXbPjj_.js";import"./uniq-Bpqgcvr3.js";import"./forEach-B8iwwgef.js";import"./Grid-BWZWnqEH.js";import"./ListItem-BUlR9mdJ.js";import"./listItemButtonClasses-Ban1M7Nj.js";import"./ListItemIcon-tltE5vgs.js";import"./MenuItem-DOC5mnQP.js";import"./ListItemText-CxVPhSDi.js";import"./ArrowUpward-BBk4F2aS.js";import"./ContentCopy-B2SkMsza.js";import"./FormControlLabel-DRZMOQkY.js";import"./Checkbox-C9i_hBz8.js";import"./SwitchBase-0eQkQMrp.js";import"./FormGroup-XVBN8i9S.js";import"./RadioGroup-BeUyDD7B.js";import"./Radio-Big1PWr_.js";import"./Slider-9_TfOyei.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-hAi2Tj4J.js";import"./DialogBase-iLRY9fRC.js";import"./Close-Bti9lGnZ.js";import"./HelpPopover-D5YAnV4f.js";import"./MarkdownPopover-z-2DvCPX.js";import"./LightTooltip-B6SUVl9G.js";import"./MarkdownSynapse-gLVhWgk-.js";import"./SkeletonButton-CDu-p3fM.js";import"./SkeletonInlineBlock-DuGmV4aM.js";import"./SkeletonTable-BD0sK0Ta.js";import"./SkeletonParagraph-EPv1fXrq.js";import"./JsonSchemaForm-DPgn874r.js";import"./GridLegacy-BT_vFzE1.js";import"./HelpTwoTone-DH8L1TLC.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-Cgtoxkug.js";import"./_createAggregator-D4BU7kPW.js";import"./_baseMap-CFWvhC-c.js";import"./DateTimePicker-C60kaRIn.js";import"./useMobilePicker-DiCAtlBe.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CR8Rt5_4.js";import"./index-DA-sFlI6.js";import"./Chip-DuirGYLs.js";import"./Tabs-DFzhJ-CG.js";import"./KeyboardArrowRight-DYhvHPA2.js";import"./Autocomplete-qh6-F8MV.js";import"./usePreviousProps-DmC88lvM.js";import"./use-deep-compare-effect.esm-LOSg95Yn.js";import"./TextWidget-qc0tXJj-.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Vr as default};
