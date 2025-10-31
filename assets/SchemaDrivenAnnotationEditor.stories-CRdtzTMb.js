import{jB as T}from"./iframe-CqK7cJYB.js";import{S as C}from"./SchemaDrivenAnnotationEditor-D1qMRYKV.js";import"./index-r8ZA1smB.js";import"./useEntity-CkY_2h_h.js";import"./pickBy-uAAN-PRV.js";import"./isString-o3r1x2Hk.js";import"./_baseIteratee-BKPySCBI.js";import"./useQueries-BICuVczQ.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CisozDYI.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-8xj48AmX.js";import"./index-BDbSwJxc.js";import"./enums-DZVgF9au.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CTliWlqj.js";import"./uniq-B_WbnRyJ.js";import"./forEach-B8iwwgef.js";import"./Grid-DvhlccUG.js";import"./ListItem-B02j4yjI.js";import"./listItemButtonClasses-CeeY4FUM.js";import"./ListItemIcon-B7Tw3TC0.js";import"./MenuItem-sLh309bQ.js";import"./ListItemText-DmspoSzD.js";import"./ArrowUpward-gLf7Dnt5.js";import"./ContentCopy-BgEApgBT.js";import"./FormControlLabel-CUyG_bJd.js";import"./Checkbox-BefLVxlo.js";import"./SwitchBase-nMIyFfxW.js";import"./FormGroup-pwfjhOjW.js";import"./RadioGroup-BvSFJeFy.js";import"./Radio-DEv0UjYA.js";import"./Slider-9PI79ySO.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BZjDOe4h.js";import"./DialogBase-6DXYrV_C.js";import"./Close-ZjaYpzM7.js";import"./HelpPopover-CznEVNAa.js";import"./MarkdownPopover-CmRbAYXX.js";import"./LightTooltip-CHUEQZSK.js";import"./MarkdownSynapse-5ZAwBoHu.js";import"./SkeletonButton-D5ZIjaSN.js";import"./SkeletonInlineBlock-B9Mq_BP1.js";import"./SkeletonTable-DR3-Ofey.js";import"./SkeletonParagraph-D0zEeYHc.js";import"./JsonSchemaForm-rQSCKepz.js";import"./GridLegacy-DD7z4CqL.js";import"./HelpTwoTone-FB061iVA.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-DLppQJ9d.js";import"./_createAggregator-D7ZVA9xA.js";import"./_baseMap-HJ-tnO7L.js";import"./DateTimePicker-QE9sscZA.js";import"./useMobilePicker-C8XqBh4u.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CeYj6JmE.js";import"./index-BmyMLNdf.js";import"./Chip-Bs-SomAb.js";import"./Tabs-BVwXZ4oU.js";import"./KeyboardArrowRight-5k506Dz8.js";import"./Autocomplete-DqntPDcF.js";import"./usePreviousProps-CAXjngJV.js";import"./use-deep-compare-effect.esm-iyNxJVn6.js";import"./TextWidget-DOF8j-LB.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
