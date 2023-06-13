import{Q as V,_ as G,y as U,A as c,W as N,R,a5 as $,bB as S,X as Y,br as H}from"./vue.e91292bd.js";import{_ as O}from"./index.68966418.js";import"./hongluan.7a8bc835.js";import"./highlight.a6f0727a.js";import"./hongluan-icons.70c7a857.js";const q={name:"component-doc",components:{"fx-demo0":function(){const{createElementVNode:t,createTextVNode:n,resolveComponent:E,withCtx:e,createVNode:r,toDisplayString:i,openBlock:L,createBlock:h}=S,D=t("span",{class:"m-r-md"},"\u81EA\u5B9A\u4E49Slot\uFF1A",-1),g={style:{"margin-left":"300px"}},B={href:"javascript:"},y={href:"javascript:"},_=t("svg",{viewBox:"0 0 32 32"},[t("defs",null,[t("linearGradient",{id:"linearGradient-1",x1:"50%",y1:"0%",x2:"50%",y2:"99.889147%"},[t("stop",{"stop-color":"#FFFFFF",offset:"0%"}),t("stop",{"stop-color":"#BAE0FF",offset:"100%"})])]),t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("rect",{"fill-opacity":"0.01",fill:"#FFFFFF",x:"0",y:"0",width:"32",height:"32"}),t("path",{d:"M26,3 L26,30 L6,30 L6,3 L26,3 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z","fill-opacity":"0.5",fill:"#FFFFFF"}),t("path",{d:"M29,9 L29,28 L3,28 L3,9 L29,9 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z","fill-opacity":"0.3",fill:"#FFFFFF"}),t("path",{d:"M27,2 L27,30 L5,30 L5,11.991862 L13.0142796,2 L27,2 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z",fill:"url(#linearGradient-1)"})])],-1);function k(a,o){const b=E("hl-checkbox"),v=E("hl-checkbox-group"),x=E("hl-icon"),T=E("hl-button"),s=E("fx-page-table-v2");return L(),h(s,{ref:"tableRef",cols:a.cols,"table-data":a.tableData,"search-items":a.searchItems,"data-fetcher":a.getData,"table-props":a.tableProps,onSortChange:a.sortChange},{checkbox1:e(()=>[D,r(b,{modelValue:a.checked1,"onUpdate:modelValue":o[0]||(o[0]=u=>a.checked1=u),label:1,bold:""},{default:e(()=>[n("\u5907\u9009\u9879")]),_:1},8,["modelValue"]),r(b,{modelValue:a.checked1,"onUpdate:modelValue":o[1]||(o[1]=u=>a.checked1=u),label:2,bold:""},{default:e(()=>[n("\u5907\u9009\u9879")]),_:1},8,["modelValue"]),r(b,{modelValue:a.checked1,"onUpdate:modelValue":o[2]||(o[2]=u=>a.checked1=u),label:0},{default:e(()=>[n("\u672A\u52A0\u7C97")]),_:1},8,["modelValue"])]),customExpand:e(({row:u})=>[t("span",g,i(u.title)+" \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49",1)]),detail:e(({row:u})=>[t("a",B,i(u.title),1)]),status:e(({row:u})=>[t("a",y,i(u.status),1)]),trainType:e(({searchForm:u})=>[r(v,{modelValue:u.trainType,"onUpdate:modelValue":A=>u.trainType=A,dir:"horizontal",gap:"var(--md)",wrap:""},{default:e(()=>[r(b,{label:1},{default:e(()=>[n("\u7C7B\u578B1")]),_:1}),r(b,{label:2},{default:e(()=>[n("\u7C7B\u578B2")]),_:1}),r(b,{label:3},{default:e(()=>[n("\u7C7B\u578B3")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),"toolbar-extra-after":e(()=>[r(T,{type:"primary",class:"gradual-button","icon-position":"left",style:{"--button-height":"calc(var(--xs) * 6)","--button-padding-x":"calc(var(--xs) * 2)","--form-icon-size":"var(--xl)"}},{icon:e(()=>[r(x,null,{default:e(()=>[_]),_:1})]),default:e(()=>[n(" \u65B0\u589E\u5E72\u90E8\u4FE1\u606F ")]),_:1})]),_:1},8,["cols","table-data","search-items","data-fetcher","table-props","onSortChange"])}const{defineComponent:C,ref:l,reactive:F,watch:d}=S,f={title:"2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A",companyName:"\u67D0\u67D0\u67D0\u4F01\u4E1A",areaName:"\u91D1\u6E56\u53BF",person:"\u674E\u6653\u5FE0",status:"\u5DF2\u5B8C\u6210"},w=C({setup(){const a=l([]);a.value=new Array(10).fill("").map((m,p)=>({...f,id:p+1}));const o=l([{title:"",width:"4em",align:"center",expand:{slotName:"customExpand",hideLabel:!1}},{title:"\u5E8F\u53F7",align:"center",slotName:"tableIndex",prop:"tableIndex",width:"4em"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title",sortable:!0,width:"16em"},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName",width:"16em"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName",width:"16em"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person",width:"8em"},{title:"\u5B8C\u6210\u72B6\u6001",slotName:"status",prop:"status",width:"8em",align:"center",fixed:"right"}]),b=F([{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:["Java1","Java"],name:"industry",multiple:!0,prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"},{name:"\u8F6F\u4EF62",code:"Java1"},{name:"\u8F6F\u4EF63",code:"Java2"},{name:"\u8F6F\u4EF64",code:"Java3"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"},{type:"datetime",label:"\u57F9\u8BADtime",placeholder:"\u57F9\u8BADtime",value:"",name:"trainTime"},{type:"datetimerange",label:"\u57F9\u8BADtimeRange",placeholder:"\u57F9\u8BADtimerange",value:[],name:"trainTimeRange"},{type:"slot",slotName:"trainType",label:"\u57F9\u8BAD\u7C7B\u578B",value:"",name:"trainType",display:m=>(console.log("item:",m),"\u7C7B\u578B1\uFF0C\u7C7B\u578B2")}]),v=F([{label:"\u5220\u9664\u6240\u6709",icon:"TwoDel",noFill:!1,show:!0,onClick:()=>{alert(rowKeys.value)}}]),x=m=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+m)},T=({pageSize:m,currentPage:p,params:P,setTotal:M})=>{console.log(m,p,P),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)"),a.value=new Array(10).fill("").map((J,j)=>({...f,id:Math.random()})),M(100)},s={pageSize:10,currentPage:1,total:0},u=l(!1),A=l();d(u,()=>{A.value.searchSlotChanged({checked1:u.value})});const I=F({"row-class-name":({row:m,rowIndex:p})=>(console.log("\u884C",m),p===1?"bg-warning opacity-4":p===3?"bg-info opacity-3":"")});return{cols:o,tableData:a,searchItems:b,selectionActions:v,showDetail:x,defaultPagination:s,getData:T,checked1:u,tableRef:A,tableProps:I,tableRowClassName:({rowIndex:m})=>m===1?"warning-row":m===3?"success-row":"",sortChange:(m,p)=>{console.log(m,p)}}}});return{render:k,...w}}(),"fx-demo1":function(){const{toDisplayString:t,createElementVNode:n,resolveComponent:E,withCtx:e,openBlock:r,createBlock:i}=S,L={style:{"margin-left":"300px"}},h={href:"javascript:"};function D(l,F){const d=E("fx-page-table-v2");return r(),i(d,{ref:"tableRef",cols:l.cols,"table-data":l.tableData,"search-items":l.searchItems,"data-fetcher":l.getData,"selection-actions":l.selectionActions,"default-pagination":l.defaultPagination,"right-search-height":"400px","search-placement":"right",onSelectedRowKeys:l.selectedRowKeys,onRowClick:l.clickRow},{customExpand:e(({row:f})=>[n("span",L,t(f.id)+" \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49",1)]),detail:e(({row:f})=>[n("a",h,t(f.title),1)]),_:1},8,["cols","table-data","search-items","data-fetcher","selection-actions","default-pagination","onSelectedRowKeys","onRowClick"])}const{defineComponent:g,ref:B,reactive:y,onMounted:_}=S,k={title:"2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A",companyName:"\u67D0\u67D0\u67D0\u4F01\u4E1A",areaName:"\u91D1\u6E56\u53BF",person:"\u674E\u6653\u5FE0",status:"\u5DF2\u5B8C\u6210"},C=g({setup(){const l=B(),F=B([]);F.value=new Array(5).fill("").map((s,u)=>({...k,id:u+1+""}));const d=B([{title:"#",slotName:"tableSelection",headerSlotName:"selectionCol"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title"},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person"},{title:"\u5B8C\u6210\u72B6\u6001",prop:"status"}]),f=y([{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:"",name:"industry",prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"}]},{type:"select",label:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",placeholder:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",value:"",name:"status",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u5B8C\u6210",code:"1"},{name:"\u672A\u5B8C\u6210",code:"0"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"},{type:"input",label:"\u57F9\u8BAD\u4E3B\u9898",placeholder:"\u57F9\u8BAD\u4E3B\u9898",value:"",name:"trainTitle"},{type:"input",label:"\u57F9\u8BAD\u673A\u6784\u540D\u79F0",placeholder:"\u57F9\u8BAD\u673A\u6784\u540D\u79F0",value:"",name:"trainInstitutionName"},{type:"year",label:"\u57F9\u8BAD\u5E74\u5EA6",placeholder:"\u57F9\u8BAD\u5E74\u5EA6",value:"",name:"trainYear",format:"YYYY","value-format":"YYYY"}]),w=s=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+s)},a=({pageSize:s,currentPage:u,params:A})=>{console.log(s,u,A),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)")},o=B([]),b=s=>{console.log("keys",s),o.value=s},v=s=>{console.log("click row",s)},x=y([{label:"\u5220\u9664\u6240\u6709",icon:"TwoDel",noFill:!1,show:!0,onClick:()=>{alert(o.value)}}]),T={pageSize:10,currentPage:1,total:60};return _(()=>{l.value.setSeletedRowKeys(["2"])}),{cols:d,tableData:F,searchItems:f,showDetail:w,getData:a,selectedRowKeys:b,clickRow:v,selectionActions:x,defaultPagination:T,tableRef:l}}});return{render:D,...C}}(),"fx-demo2":function(){const{toDisplayString:t,createElementVNode:n,resolveComponent:E,withCtx:e,openBlock:r,createBlock:i}=S,L={style:{"margin-left":"300px"}},h={href:"javascript:"};function D(l,F){const d=E("fx-page-table-v2");return r(),i(d,{ref:"tableRef",cols:l.cols,"table-data":l.tableData,"search-items":l.searchItems,"data-fetcher":l.getData,"selection-actions":l.selectionActions,"default-pagination":l.defaultPagination,"right-search-height":"400px","search-placement":"right","is-multiple-select":!1,onSelectedRowKeys:l.selectedRowKeys,onRowClick:l.clickRow},{customExpand:e(({row:f})=>[n("span",L,t(f.id)+" \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49",1)]),detail:e(({row:f})=>[n("a",h,t(f.title),1)]),_:1},8,["cols","table-data","search-items","data-fetcher","selection-actions","default-pagination","onSelectedRowKeys","onRowClick"])}const{defineComponent:g,ref:B,reactive:y,onMounted:_}=S,k={title:"2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A",companyName:"\u67D0\u67D0\u67D0\u4F01\u4E1A",areaName:"\u91D1\u6E56\u53BF",person:"\u674E\u6653\u5FE0",status:"\u5DF2\u5B8C\u6210"},C=g({setup(){const l=B(),F=B([]);F.value=new Array(5).fill("").map((s,u)=>({...k,id:u+1+""}));const d=B([{title:"#",slotName:"tableSelection",headerSlotName:"selectionCol"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title"},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person"},{title:"\u5B8C\u6210\u72B6\u6001",prop:"status"}]),f=y([{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:"",name:"industry",prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"}]},{type:"select",label:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",placeholder:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",value:"",name:"status",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u5B8C\u6210",code:"1"},{name:"\u672A\u5B8C\u6210",code:"0"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"},{type:"input",label:"\u57F9\u8BAD\u4E3B\u9898",placeholder:"\u57F9\u8BAD\u4E3B\u9898",value:"",name:"trainTitle"},{type:"input",label:"\u57F9\u8BAD\u673A\u6784\u540D\u79F0",placeholder:"\u57F9\u8BAD\u673A\u6784\u540D\u79F0",value:"",name:"trainInstitutionName"},{type:"year",label:"\u57F9\u8BAD\u5E74\u5EA6",placeholder:"\u57F9\u8BAD\u5E74\u5EA6",value:"",name:"trainYear",format:"YYYY","value-format":"YYYY"}]),w=s=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+s)},a=({pageSize:s,currentPage:u,params:A})=>{console.log(s,u,A),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)")},o=B([]),b=s=>{console.log("keys",s),o.value=s},v=s=>{console.log("click row",s)},x=y([{label:"\u5220\u9664\u6240\u6709",icon:"TwoDel",noFill:!1,show:!0,onClick:()=>{alert(o.value)}}]),T={pageSize:10,currentPage:1,total:60};return _(()=>{l.value.setSeletedRowKeys(["2"])}),{cols:d,tableData:F,searchItems:f,showDetail:w,getData:a,selectedRowKeys:b,clickRow:v,selectionActions:x,defaultPagination:T,tableRef:l}}});return{render:D,...C}}(),"fx-demo3":function(){const{createElementVNode:t,createTextVNode:n,resolveComponent:E,withCtx:e,createVNode:r,toDisplayString:i,openBlock:L,createBlock:h}=S,D=t("span",{class:"m-r-md"},"\u81EA\u5B9A\u4E49Slot\uFF1A",-1),g={style:{"margin-left":"300px"}},B={href:"javascript:"},y={href:"javascript:"},_=t("svg",{viewBox:"0 0 32 32"},[t("defs",null,[t("linearGradient",{id:"linearGradient-1",x1:"50%",y1:"0%",x2:"50%",y2:"99.889147%"},[t("stop",{"stop-color":"#FFFFFF",offset:"0%"}),t("stop",{"stop-color":"#BAE0FF",offset:"100%"})])]),t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("rect",{"fill-opacity":"0.01",fill:"#FFFFFF",x:"0",y:"0",width:"32",height:"32"}),t("path",{d:"M26,3 L26,30 L6,30 L6,3 L26,3 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z","fill-opacity":"0.5",fill:"#FFFFFF"}),t("path",{d:"M29,9 L29,28 L3,28 L3,9 L29,9 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z","fill-opacity":"0.3",fill:"#FFFFFF"}),t("path",{d:"M27,2 L27,30 L5,30 L5,11.991862 L13.0142796,2 L27,2 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z",fill:"url(#linearGradient-1)"})])],-1);function k(a,o){const b=E("hl-checkbox"),v=E("hl-checkbox-group"),x=E("hl-icon"),T=E("hl-button"),s=E("fx-page-table-v2");return L(),h(s,{ref:"tableRef",tabs:a.tabs,cols:a.cols,"table-data":a.tableData,"search-items":a.searchItems,"selection-actions":a.selectionActions,"data-fetcher":a.getData,onSortChange:a.sortChange,onTabChange:a.tabChange},{checkbox1:e(()=>[D,r(b,{modelValue:a.checked1,"onUpdate:modelValue":o[0]||(o[0]=u=>a.checked1=u),label:1,bold:""},{default:e(()=>[n("\u5907\u9009\u9879")]),_:1},8,["modelValue"]),r(b,{modelValue:a.checked1,"onUpdate:modelValue":o[1]||(o[1]=u=>a.checked1=u),label:2,bold:""},{default:e(()=>[n("\u5907\u9009\u9879")]),_:1},8,["modelValue"]),r(b,{modelValue:a.checked1,"onUpdate:modelValue":o[2]||(o[2]=u=>a.checked1=u),label:0},{default:e(()=>[n("\u672A\u52A0\u7C97")]),_:1},8,["modelValue"])]),customExpand:e(({row:u})=>[t("span",g,i(u.title)+" \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49",1)]),detail:e(({row:u})=>[t("a",B,i(u.title),1)]),status:e(({row:u})=>[t("a",y,i(u.status),1)]),trainType:e(({searchForm:u})=>[r(v,{modelValue:u.trainType,"onUpdate:modelValue":A=>u.trainType=A,dir:"horizontal",gap:"var(--md)",wrap:""},{default:e(()=>[r(b,{label:1},{default:e(()=>[n("\u7C7B\u578B1")]),_:1}),r(b,{label:2},{default:e(()=>[n("\u7C7B\u578B2")]),_:1}),r(b,{label:3},{default:e(()=>[n("\u7C7B\u578B3")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),"toolbar-extra-after":e(()=>[r(T,{type:"primary",class:"gradual-button m-l-md","icon-position":"left",style:{"--button-height":"calc(var(--xs) * 6)","--button-padding-x":"calc(var(--xs) * 2)","--form-icon-size":"var(--xl)"}},{icon:e(()=>[r(x,null,{default:e(()=>[_]),_:1})]),default:e(()=>[n(" \u65B0\u589E\u5E72\u90E8\u4FE1\u606F ")]),_:1})]),_:1},8,["tabs","cols","table-data","search-items","selection-actions","data-fetcher","onSortChange","onTabChange"])}const{defineComponent:C,ref:l,reactive:F,watch:d}=S,f={title:"2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A",companyName:"\u67D0\u67D0\u67D0\u4F01\u4E1A",areaName:"\u91D1\u6E56\u53BF",person:"\u674E\u6653\u5FE0",status:"\u5DF2\u5B8C\u6210"},w=C({setup(){const a=[{name:"Tab1",label:"Tab1"},{name:"Tab2",label:"Tab2",default:!0},{name:"Tab3",label:"Tab3"}],o=l([]);o.value=new Array(10).fill("").map((m,p)=>({...f,id:p+1}));const b=l([{title:"",width:"66px",align:"center",expand:{slotName:"customExpand",hideLabel:!1}},{title:"\u5E8F\u53F7",align:"center",slotName:"tableIndex",prop:"tableIndex"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title",sortable:!0},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person"},{title:"\u5B8C\u6210\u72B6\u6001",slotName:"status",prop:"status"}]),v=[{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:["Java1","Java"],name:"industry",multiple:!0,prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"},{name:"\u8F6F\u4EF62",code:"Java1"},{name:"\u8F6F\u4EF63",code:"Java2"},{name:"\u8F6F\u4EF64",code:"Java3"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"},{type:"datetime",label:"\u57F9\u8BADtime",placeholder:"\u57F9\u8BADtime",value:"",name:"trainTime"},{type:"datetimerange",label:"\u57F9\u8BADtimeRange",placeholder:"\u57F9\u8BADtimerange",value:[],name:"trainTimeRange"},{type:"slot",slotName:"trainType",label:"\u57F9\u8BAD\u7C7B\u578B",value:"",name:"trainType",display:m=>(console.log("item....",m),"\u7C7B\u578B1\uFF0C\u7C7B\u578B2")}],x=l(v),T=F([{label:"\u5220\u9664\u6240\u6709",icon:"TwoDel",noFill:!1,show:!0,onClick:()=>{alert(rowKeys.value)}}]),s=m=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+m)},u=({pageSize:m,currentPage:p,params:P,setTotal:M})=>{console.log(m,p,P),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)"),o.value=new Array(10).fill("").map((J,j)=>({...f,id:Math.random()})),M(100)},A=l(!1),I=l();return d(A,()=>{I.value.searchSlotChanged({checked1:A.value})}),{cols:b,tabs:a,tableData:o,searchItems:x,selectionActions:T,showDetail:s,getData:u,checked1:A,tableRef:I,sortChange:(m,p)=>{console.log(m,p)},tabChange:m=>{console.log("tab",m),m==="Tab2"?x.value=[v[0],v[5]]:x.value=v}}}});return{render:k,...w}}(),"fx-demo4":function(){const{renderList:t,Fragment:n,openBlock:E,createElementBlock:e,toDisplayString:r,createElementVNode:i,createTextVNode:L,resolveComponent:h,withCtx:D,createVNode:g,createBlock:B}=S,y={class:"custom-table display-flex flex-wrap",style:{"row-gap":"10px","column-gap":"10px"}},_={class:"text-primary text-bold"},k=i("svg",{viewBox:"0 0 32 32"},[i("defs",null,[i("linearGradient",{id:"linearGradient-1",x1:"50%",y1:"0%",x2:"50%",y2:"99.889147%"},[i("stop",{"stop-color":"#FFFFFF",offset:"0%"}),i("stop",{"stop-color":"#BAE0FF",offset:"100%"})])]),i("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[i("rect",{"fill-opacity":"0.01",fill:"#FFFFFF",x:"0",y:"0",width:"32",height:"32"}),i("path",{d:"M26,3 L26,30 L6,30 L6,3 L26,3 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z","fill-opacity":"0.5",fill:"#FFFFFF"}),i("path",{d:"M29,9 L29,28 L3,28 L3,9 L29,9 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z","fill-opacity":"0.3",fill:"#FFFFFF"}),i("path",{d:"M27,2 L27,30 L5,30 L5,11.991862 L13.0142796,2 L27,2 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z",fill:"url(#linearGradient-1)"})])],-1);function C(o,b){const v=h("hl-checkbox"),x=h("hl-checkbox-group"),T=h("hl-icon"),s=h("hl-button"),u=h("fx-page-table-v2");return E(),B(u,{ref:"tableRef",cols:o.cols,"table-data":o.tableData,"search-items":o.searchItems,"data-fetcher":o.getData,"table-props":o.tableProps,onSortChange:o.sortChange},{"custom-table":D(({data:A})=>[i("div",y,[(E(!0),e(n,null,t(A,I=>(E(),e("div",{key:I.id,style:{background:"#eee",padding:"10px",height:"120px",width:"150px"}},[i("div",_,"\u6807\u9898\uFF1A "+r(I.title),1),i("div",null,"\u4F01\u4E1A\u540D\u79F0 "+r(I.companyName),1)]))),128))])]),trainType:D(({searchForm:A})=>[g(x,{modelValue:A.trainType,"onUpdate:modelValue":I=>A.trainType=I,dir:"horizontal",gap:"var(--md)",wrap:""},{default:D(()=>[g(v,{label:1},{default:D(()=>[L("\u7C7B\u578B1")]),_:1}),g(v,{label:2},{default:D(()=>[L("\u7C7B\u578B2")]),_:1}),g(v,{label:3},{default:D(()=>[L("\u7C7B\u578B3")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),"toolbar-extra-after":D(()=>[g(s,{type:"primary",class:"gradual-button","icon-position":"left",style:{"--button-height":"calc(var(--xs) * 6)","--button-padding-x":"calc(var(--xs) * 2)","--form-icon-size":"var(--xl)"}},{icon:D(()=>[g(T,null,{default:D(()=>[k]),_:1})]),default:D(()=>[L(" \u65B0\u589E\u5E72\u90E8\u4FE1\u606F ")]),_:1})]),_:1},8,["cols","table-data","search-items","data-fetcher","table-props","onSortChange"])}const{defineComponent:l,ref:F,reactive:d,watch:f}=S,w={title:"2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A",companyName:"\u67D0\u67D0\u67D0\u4F01\u4E1A",areaName:"\u91D1\u6E56\u53BF",person:"\u674E\u6653\u5FE0",status:"\u5DF2\u5B8C\u6210"},a=l({setup(){const o=F([]);o.value=new Array(10).fill("").map((p,P)=>({...w,id:P+1}));const b=F([{title:"",width:"4em",align:"center",expand:{slotName:"customExpand",hideLabel:!1}},{title:"\u5E8F\u53F7",align:"center",slotName:"tableIndex",prop:"tableIndex",width:"4em"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title",sortable:!0,width:"16em"},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName",width:"16em"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName",width:"16em"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person",width:"8em"},{title:"\u5B8C\u6210\u72B6\u6001",slotName:"status",prop:"status",width:"8em",align:"center",fixed:"right"}]),v=d([{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:["Java1","Java"],name:"industry",multiple:!0,prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"},{name:"\u8F6F\u4EF62",code:"Java1"},{name:"\u8F6F\u4EF63",code:"Java2"},{name:"\u8F6F\u4EF64",code:"Java3"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"},{type:"datetime",label:"\u57F9\u8BADtime",placeholder:"\u57F9\u8BADtime",value:"",name:"trainTime"},{type:"datetimerange",label:"\u57F9\u8BADtimeRange",placeholder:"\u57F9\u8BADtimerange",value:[],name:"trainTimeRange"},{type:"slot",slotName:"trainType",label:"\u57F9\u8BAD\u7C7B\u578B",value:"",name:"trainType",display:p=>(console.log("item:",p),"\u7C7B\u578B1\uFF0C\u7C7B\u578B2")}]),x=d([{label:"\u5220\u9664\u6240\u6709",icon:"TwoDel",noFill:!1,show:!0,onClick:()=>{alert(rowKeys.value)}}]),T=p=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+p)},s=({pageSize:p,currentPage:P,params:M,setTotal:J})=>{console.log(p,P,M),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)"),o.value=new Array(10).fill("").map((j,K)=>({...w,title:w.title+"/"+P+"/"+K,id:Math.random()})),J(100)},u={pageSize:10,currentPage:1,total:0},A=F(!1),I=F();f(A,()=>{I.value.searchSlotChanged({checked1:A.value})});const z=d({"row-class-name":({row:p,rowIndex:P})=>(console.log("\u884C",p),P===1?"bg-warning opacity-4":P===3?"bg-info opacity-3":"")});return{cols:b,tableData:o,searchItems:v,selectionActions:x,showDetail:T,defaultPagination:u,getData:s,checked1:A,tableRef:I,tableProps:z,tableRowClassName:({rowIndex:p})=>p===1?"warning-row":p===3?"success-row":"",sortChange:(p,P)=>{console.log(p,P)}}}});return{render:C,...a}}(),"fx-demo5":function(){const{toDisplayString:t,createElementVNode:n,resolveComponent:E,withCtx:e,openBlock:r,createBlock:i}=S,L={style:{"margin-left":"300px"}},h={href:"javascript:"},D={href:"javascript:"};function g(C,l){const F=E("fx-page-table-v2");return r(),i(F,{ref:"tableRef",cols:C.cols,"table-data":C.tableData,"search-items":C.searchItems,"data-fetcher":C.getData},{customExpand:e(({row:d})=>[n("span",L,t(d.title)+" \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49",1)]),detail:e(({row:d})=>[n("a",h,t(d.title),1)]),status:e(({row:d})=>[n("a",D,t(d.status),1)]),_:1},8,["cols","table-data","search-items","data-fetcher"])}const{defineComponent:B,ref:y,reactive:_}=S,k=B({setup(){const C=y([]),l=y([{title:"",width:"66px",align:"center",expand:{slotName:"customExpand",hideLabel:!1}},{title:"\u5E8F\u53F7",width:"66px",align:"center",slotName:"tableIndex"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title"},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person"},{title:"\u5B8C\u6210\u72B6\u6001",slotName:"status",prop:"status"}]),F=_([{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:"",name:"industry",prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"}]},{type:"select",label:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",placeholder:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",value:"",name:"status",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u5B8C\u6210",code:"1"},{name:"\u672A\u5B8C\u6210",code:"0"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"}]);return{cols:l,tableData:C,searchItems:F,showDetail:w=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+w)},getData:({pageSize:w,currentPage:a,params:o})=>{console.log(w,a,o),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)")}}}});return{render:g,...k}}(),"fx-demo6":function(){const{toDisplayString:t,createElementVNode:n,resolveComponent:E,withCtx:e,openBlock:r,createBlock:i}=S,L={style:{"margin-left":"300px"}},h={href:"javascript:"},D={href:"javascript:"};function g(C,l){const F=E("fx-page-table-v2");return r(),i(F,{ref:"tableRef",cols:C.cols,"table-data":C.tableData,"data-fetcher":C.getData},{customExpand:e(({row:d})=>[n("span",L,t(d.title)+" \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49",1)]),detail:e(({row:d})=>[n("a",h,t(d.title),1)]),status:e(({row:d})=>[n("a",D,t(d.status),1)]),_:1},8,["cols","table-data","data-fetcher"])}const{defineComponent:B,ref:y,reactive:_}=S,k=B({setup(){const C=y([]),l=y([{title:"",width:"66px",align:"center",expand:{slotName:"customExpand",hideLabel:!1}},{title:"\u5E8F\u53F7",width:"66px",align:"center",slotName:"tableIndex"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title"},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person"},{title:"\u5B8C\u6210\u72B6\u6001",slotName:"status",prop:"status"}]),F=_([{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:"",name:"industry",prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"}]},{type:"select",label:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",placeholder:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",value:"",name:"status",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u5B8C\u6210",code:"1"},{name:"\u672A\u5B8C\u6210",code:"0"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"}]);return{cols:l,tableData:C,searchItems:F,showDetail:w=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+w)},getData:({pageSize:w,currentPage:a,params:o})=>{console.log(w,a,o),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)")}}}});return{render:g,...k}}()}},Q=c("h1",null,"PageTableV2 \u8868\u683C\u9762\u677F",-1),W=c("h2",{id:"ji-ben-yong-fa"},[c("a",{class:"header-anchor",href:"#ji-ben-yong-fa"}),Y(" \u57FA\u672C\u7528\u6CD5")],-1),X=c("pre",null,[c("code",{class:"html"},` <template>
  <fx-page-table-v2
    ref="tableRef"
    :cols="cols"
    :table-data="tableData"
    :search-items="searchItems"
    :data-fetcher="getData"
    :table-props="tableProps"
    @sort-change="sortChange"
  >
    <template #checkbox1>
      <span class="m-r-md">\u81EA\u5B9A\u4E49Slot\uFF1A</span>
      <hl-checkbox v-model="checked1" :label="1" bold>\u5907\u9009\u9879</hl-checkbox>
      <hl-checkbox v-model="checked1" :label="2" bold>\u5907\u9009\u9879</hl-checkbox>
      <hl-checkbox v-model="checked1" :label="0">\u672A\u52A0\u7C97</hl-checkbox>
    </template>
    <template #customExpand="{ row }">
      <span style="margin-left: 300px;">{{ row.title }} \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49</span>
    </template>
    <!-- \u884C\u70B9\u51FB\u8BE6\u60C5\u63D2\u69FD -->
    <template #detail="{ row }">
      <a href="javascript:">{{ row.title }}</a>
    </template>
    <template #status="{ row }">
      <a href="javascript:">{{ row.status }}</a>
    </template>
    <template #trainType="{ searchForm }">
      <hl-checkbox-group v-model="searchForm['trainType']" dir="horizontal" gap="var(--md)" wrap>
        <hl-checkbox :label="1">\u7C7B\u578B1</hl-checkbox>
        <hl-checkbox :label="2">\u7C7B\u578B2</hl-checkbox>
        <hl-checkbox :label="3">\u7C7B\u578B3</hl-checkbox>
      </hl-checkbox-group>
    </template>
    <template #toolbar-extra-after>
      <hl-button type="primary" class="gradual-button" icon-position="left" style="--button-height: calc(var(--xs) * 6); --button-padding-x: calc(var(--xs) * 2); --form-icon-size: var(--xl);">
        \u65B0\u589E\u5E72\u90E8\u4FE1\u606F
        <template #icon>
          <hl-icon>
            <svg viewBox="0 0 32 32">
              <defs>
                <linearGradient id="linearGradient-1" x1="50%" y1="0%" x2="50%" y2="99.889147%">
                  <stop stop-color="#FFFFFF" offset="0%" />
                  <stop stop-color="#BAE0FF" offset="100%" />
                </linearGradient>
              </defs>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect
                  fill-opacity="0.01"
                  fill="#FFFFFF"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                />
                <path d="M26,3 L26,30 L6,30 L6,3 L26,3 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z" fill-opacity="0.5" fill="#FFFFFF" />
                <path d="M29,9 L29,28 L3,28 L3,9 L29,9 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z" fill-opacity="0.3" fill="#FFFFFF" />
                <path d="M27,2 L27,30 L5,30 L5,11.991862 L13.0142796,2 L27,2 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z" fill="url(#linearGradient-1)" />
              </g>
            </svg>
          </hl-icon>
        </template>
      </hl-button>
    </template>
  </fx-page-table-v2>
</template>
<script>
import { defineComponent, ref, reactive, watch } from 'vue'

const LIST_DATA = {
  title: '2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A',
  companyName: '\u67D0\u67D0\u67D0\u4F01\u4E1A',
  areaName: '\u91D1\u6E56\u53BF',
  person: '\u674E\u6653\u5FE0',
  status: '\u5DF2\u5B8C\u6210',
}

export default defineComponent({
  setup () {
    const tableData = ref([])
    tableData.value = new Array(10).fill('').map((_, i) => { return { ...LIST_DATA, id:i + 1 } })
    const cols = ref([
      {
        title: '',
        width: '4em',
        align: 'center',
        expand: { slotName: 'customExpand', hideLabel: false },
      },
      {
        title: '\u5E8F\u53F7',
        align: 'center',
        slotName: 'tableIndex',
        prop: 'tableIndex',
        width: '4em',
      },
      { title: '\u57F9\u8BAD\u4E3B\u9898', slotName: 'detail', prop: 'title', sortable: true, width: '16em' },
      { title: '\u4F01\u4E1A\u540D\u79F0', prop: 'companyName', width: '16em' },
      { title: '\u6240\u5C5E\u533A\u57DF', prop: 'areaName', width: '16em' },
      { title: '\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA', prop: 'person', width: '8em' },
      { title: '\u5B8C\u6210\u72B6\u6001', slotName: 'status', prop: 'status', width: '8em', align: 'center', fixed: 'right' },
    ])

    const searchItems = reactive([
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        value: '',
        name: 'area',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u6E05\u6C5F\u6D66\u533A', code: '10000' },
        ],
      },
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        value: ['Java1', 'Java'],
        name: 'industry',
        multiple: true,
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u8F6F\u4EF6', code: 'Java' },
          { name: '\u8F6F\u4EF62', code: 'Java1' },
          { name: '\u8F6F\u4EF63', code: 'Java2' },
          { name: '\u8F6F\u4EF64', code: 'Java3' },
        ],
      },
      {
        type: 'input',
        label: '\u4F01\u4E1A\u540D\u79F0',
        placeholder: '\u4F01\u4E1A\u540D\u79F0',
        value: '',
        name: 'companyName',
      },
      {
        type: 'datetime',
        label: '\u57F9\u8BADtime',
        placeholder: '\u57F9\u8BADtime',
        value: '',
        name: 'trainTime',
      },
      {
        type: 'datetimerange',
        label: '\u57F9\u8BADtimeRange',
        placeholder: '\u57F9\u8BADtimerange',
        value: [],
        name: 'trainTimeRange',
      },
      {
        type: 'slot',
        slotName: 'trainType',
        label: '\u57F9\u8BAD\u7C7B\u578B',
        value: '',
        name: 'trainType',
        display: item => {
          console.log('item:', item)
          return '\u7C7B\u578B1\uFF0C\u7C7B\u578B2'
        },
      },
    ])
    const selectionActions = reactive(
      [
        { label: '\u5220\u9664\u6240\u6709', icon: 'TwoDel', noFill: false, show: true, onClick: () => { alert(rowKeys.value) } },
        // { label: '\u6279\u91CF\u8F6C\u79FB', icon: 'TwoFolderIn', noFill: true, show: true },
        // { label: '\u6279\u91CF\u5BA1\u5B9A', icon: 'TwoExamine' },
        // { label: '\u6279\u91CF\u4FEE\u6539', icon: 'TwoEdit' },
        // { label: '\u6279\u91CF\u901A\u8FC7', icon: 'TwoCircleCheck' },
      ],
    )

    const showDetail = row => {
      console.log('\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875' + row)
    }

    const getData = ({ pageSize, currentPage, params, setTotal }) => {
      console.log(pageSize, currentPage, params)
      console.log('\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)')
      // example \u8FD9\u91CC\u662F\u63A5\u53E3\u6848\u4F8B
      // const result = await apiGeologicObj.postFindRiskGeologicHazardPageGeologic({
      //   pageSize,
      //   currentPage,
      //   resName: params.search,
      //   ...params
      // });
      // if (+result.code === 0) {
      //   tableData.value = result.data.list; \u6CE8\u610F\u8FD9\u91CC
      //   setTotal(+result.data.totalRow); \u6CE8\u610F\u8FD9\u91CC
      // }
      tableData.value = new Array(10).fill('').map((_, i) => { return { ...LIST_DATA, id: Math.random() } })
      setTotal(100)
    }

    const defaultPagination = { pageSize:10, currentPage:1, total: 0 }

    // \u81EA\u5B9A\u4E49\u624B\u52A8\u89E6\u53D1
    const checked1 = ref(false)
    const tableRef = ref()
    watch(checked1, () => {
      tableRef.value.searchSlotChanged({ checked1: checked1.value })
    })
    const tableProps = reactive({
      'row-class-name': ({ row, rowIndex }) => {
        console.log('\u884C', row)
        if (rowIndex === 1) {
          return 'bg-warning opacity-4'
        } else if (rowIndex === 3) {
          return 'bg-info opacity-3'
        }
        return ''
      },
    })
    const tableRowClassName = ({ rowIndex }) => {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }

    const sortChange = (prop, sort) => {
      console.log(prop, sort)
    }

    return {
      cols,
      tableData,
      searchItems,
      selectionActions,
      showDetail,
      defaultPagination,
      getData,
      checked1,
      tableRef,
      tableProps,
      tableRowClassName,

      sortChange,
    }
  },
})
<\/script>
`)],-1),ee=c("h2",{id:"duo-xuan-cao-zuo"},[c("a",{class:"header-anchor",href:"#duo-xuan-cao-zuo"}),Y(" \u591A\u9009\u64CD\u4F5C")],-1),ue=c("pre",null,[c("code",{class:"html"},` <template>
  <fx-page-table-v2
    ref="tableRef"
    :cols="cols"
    :table-data="tableData"
    :search-items="searchItems"
    :data-fetcher="getData"
    :selection-actions="selectionActions"
    :default-pagination="defaultPagination"
    right-search-height="400px"
    search-placement="right"
    @selected-row-keys="selectedRowKeys"
    @row-click="clickRow"
  >
    <template #customExpand="{ row }">
      <span style="margin-left: 300px;">{{ row.id }} \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49</span>
    </template>
    <!-- \u884C\u70B9\u51FB\u8BE6\u60C5\u63D2\u69FD -->
    <template #detail="{ row }">
      <a href="javascript:">{{ row.title }}</a>
    </template>
  </fx-page-table-v2>
</template>
<script>
import { defineComponent, ref, reactive, onMounted } from 'vue'

const LIST_DATA = {
  title: '2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A',
  companyName: '\u67D0\u67D0\u67D0\u4F01\u4E1A',
  areaName: '\u91D1\u6E56\u53BF',
  person: '\u674E\u6653\u5FE0',
  status: '\u5DF2\u5B8C\u6210',
}

export default defineComponent({
  setup () {
    const tableRef = ref();
    const tableData = ref([])
    tableData.value = new Array(5).fill('').map((_, i) => { return { ...LIST_DATA, id:i + 1 + '' } })
    const cols = ref([
      { title: '#', slotName: 'tableSelection', headerSlotName: 'selectionCol' },
      { title: '\u57F9\u8BAD\u4E3B\u9898', slotName: 'detail', prop: 'title' },
      { title: '\u4F01\u4E1A\u540D\u79F0', prop: 'companyName' },
      { title: '\u6240\u5C5E\u533A\u57DF', prop: 'areaName' },
      { title: '\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA', prop: 'person' },
      { title: '\u5B8C\u6210\u72B6\u6001', prop: 'status' },
    ])
    const searchItems = reactive([
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        value: '',
        name: 'area',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u6E05\u6C5F\u6D66\u533A', code: '10000' },
        ],
      },
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        value: '',
        name: 'industry',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u8F6F\u4EF6', code: 'Java' },
        ],
      },
      {
        type: 'select',
        label: '\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001',
        placeholder: '\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001',
        value: '',
        name: 'status',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u5DF2\u5B8C\u6210', code: '1' },
          { name: '\u672A\u5B8C\u6210', code: '0' },
        ],
      },
      {
        type: 'input',
        label: '\u4F01\u4E1A\u540D\u79F0',
        placeholder: '\u4F01\u4E1A\u540D\u79F0',
        value: '',
        name: 'companyName',
      },
      {
        type: 'input',
        label: '\u57F9\u8BAD\u4E3B\u9898',
        placeholder: '\u57F9\u8BAD\u4E3B\u9898',
        value: '',
        name: 'trainTitle',
      },
      {
        type: 'input',
        label: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0',
        placeholder: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0',
        value: '',
        name: 'trainInstitutionName',
      },
      {
        type: 'year',
        label: '\u57F9\u8BAD\u5E74\u5EA6',
        placeholder: '\u57F9\u8BAD\u5E74\u5EA6',
        value: '',
        name: 'trainYear',
        format: 'YYYY',
        'value-format': 'YYYY',
      },
    ])

    const showDetail = row => {
      console.log('\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875' + row)
    }

    const getData = ({ pageSize, currentPage, params }) => {
      console.log(pageSize, currentPage, params)
      console.log('\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)')
    }

    const rowKeys = ref([])
    const selectedRowKeys = keys => {
      console.log('keys', keys)
      rowKeys.value = keys
    }
    const clickRow = row => {
      console.log('click row', row)
    }

    const selectionActions = reactive(
      [
        { label: '\u5220\u9664\u6240\u6709', icon: 'TwoDel', noFill: false, show: true, onClick: () => { alert(rowKeys.value) } },
        // { label: '\u6279\u91CF\u8F6C\u79FB', icon: 'TwoFolderIn', noFill: true, show: true },
        // { label: '\u6279\u91CF\u5BA1\u5B9A', icon: 'TwoExamine' },
        // { label: '\u6279\u91CF\u4FEE\u6539', icon: 'TwoEdit' },
        // { label: '\u6279\u91CF\u901A\u8FC7', icon: 'TwoCircleCheck' },
      ],
    )
    const defaultPagination = { pageSize:10, currentPage:1, total: 60 }
    

    onMounted(() => {
      tableRef.value.setSeletedRowKeys(['2']);
    })

    return {
      cols,
      tableData,
      searchItems,
      showDetail,
      getData,
      selectedRowKeys,
      clickRow,
      selectionActions,
      defaultPagination,
      tableRef
    }
  },
})
<\/script>
`)],-1),te=c("h2",{id:"dan-xuan-cao-zuo"},[c("a",{class:"header-anchor",href:"#dan-xuan-cao-zuo"}),Y(" \u5355\u9009\u64CD\u4F5C")],-1),ae=c("pre",null,[c("code",{class:"html"},` <template>
  <fx-page-table-v2
    ref="tableRef"
    :cols="cols"
    :table-data="tableData"
    :search-items="searchItems"
    :data-fetcher="getData"
    :selection-actions="selectionActions"
    :default-pagination="defaultPagination"
    right-search-height="400px"
    search-placement="right"
    :is-multiple-select="false"
    @selected-row-keys="selectedRowKeys"
    @row-click="clickRow"
  >
    <template #customExpand="{ row }">
      <span style="margin-left: 300px;">{{ row.id }} \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49</span>
    </template>
    <!-- \u884C\u70B9\u51FB\u8BE6\u60C5\u63D2\u69FD -->
    <template #detail="{ row }">
      <a href="javascript:">{{ row.title }}</a>
    </template>
  </fx-page-table-v2>
</template>
<script>
import { defineComponent, ref, reactive, onMounted } from 'vue'

const LIST_DATA = {
  title: '2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A',
  companyName: '\u67D0\u67D0\u67D0\u4F01\u4E1A',
  areaName: '\u91D1\u6E56\u53BF',
  person: '\u674E\u6653\u5FE0',
  status: '\u5DF2\u5B8C\u6210',
}

export default defineComponent({
  setup () {
    const tableRef = ref();
    const tableData = ref([])
    tableData.value = new Array(5).fill('').map((_, i) => { return { ...LIST_DATA, id:i + 1 + '' } })
    const cols = ref([
      { title: '#', slotName: 'tableSelection', headerSlotName: 'selectionCol' },
      { title: '\u57F9\u8BAD\u4E3B\u9898', slotName: 'detail', prop: 'title' },
      { title: '\u4F01\u4E1A\u540D\u79F0', prop: 'companyName' },
      { title: '\u6240\u5C5E\u533A\u57DF', prop: 'areaName' },
      { title: '\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA', prop: 'person' },
      { title: '\u5B8C\u6210\u72B6\u6001', prop: 'status' },
    ])
    const searchItems = reactive([
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        value: '',
        name: 'area',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u6E05\u6C5F\u6D66\u533A', code: '10000' },
        ],
      },
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        value: '',
        name: 'industry',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u8F6F\u4EF6', code: 'Java' },
        ],
      },
      {
        type: 'select',
        label: '\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001',
        placeholder: '\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001',
        value: '',
        name: 'status',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u5DF2\u5B8C\u6210', code: '1' },
          { name: '\u672A\u5B8C\u6210', code: '0' },
        ],
      },
      {
        type: 'input',
        label: '\u4F01\u4E1A\u540D\u79F0',
        placeholder: '\u4F01\u4E1A\u540D\u79F0',
        value: '',
        name: 'companyName',
      },
      {
        type: 'input',
        label: '\u57F9\u8BAD\u4E3B\u9898',
        placeholder: '\u57F9\u8BAD\u4E3B\u9898',
        value: '',
        name: 'trainTitle',
      },
      {
        type: 'input',
        label: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0',
        placeholder: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0',
        value: '',
        name: 'trainInstitutionName',
      },
      {
        type: 'year',
        label: '\u57F9\u8BAD\u5E74\u5EA6',
        placeholder: '\u57F9\u8BAD\u5E74\u5EA6',
        value: '',
        name: 'trainYear',
        format: 'YYYY',
        'value-format': 'YYYY',
      },
    ])

    const showDetail = row => {
      console.log('\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875' + row)
    }

    const getData = ({ pageSize, currentPage, params }) => {
      console.log(pageSize, currentPage, params)
      console.log('\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)')
    }

    const rowKeys = ref([])
    const selectedRowKeys = keys => {
      console.log('keys', keys)
      rowKeys.value = keys
    }
    const clickRow = row => {
      console.log('click row', row)
    }

    const selectionActions = reactive(
      [
        { label: '\u5220\u9664\u6240\u6709', icon: 'TwoDel', noFill: false, show: true, onClick: () => { alert(rowKeys.value) } },
        // { label: '\u6279\u91CF\u8F6C\u79FB', icon: 'TwoFolderIn', noFill: true, show: true },
        // { label: '\u6279\u91CF\u5BA1\u5B9A', icon: 'TwoExamine' },
        // { label: '\u6279\u91CF\u4FEE\u6539', icon: 'TwoEdit' },
        // { label: '\u6279\u91CF\u901A\u8FC7', icon: 'TwoCircleCheck' },
      ],
    )
    const defaultPagination = { pageSize:10, currentPage:1, total: 60 }
    

    onMounted(() => {
      tableRef.value.setSeletedRowKeys(['2']);
    })

    return {
      cols,
      tableData,
      searchItems,
      showDetail,
      getData,
      selectedRowKeys,
      clickRow,
      selectionActions,
      defaultPagination,
      tableRef
    }
  },
})
<\/script>
`)],-1),le=c("h2",{id:"tabsbiao-ge"},[c("a",{class:"header-anchor",href:"#tabsbiao-ge"}),Y(" Tabs\u8868\u683C")],-1),oe=c("pre",null,[c("code",{class:"html"},` <template>
  <fx-page-table-v2
    ref="tableRef"
    :tabs="tabs"
    :cols="cols"
    :table-data="tableData"
    :search-items="searchItems"
    :selection-actions="selectionActions"
    :data-fetcher="getData"
    @sort-change="sortChange"
    @tab-change="tabChange"
  >
    <template #checkbox1>
      <span class="m-r-md">\u81EA\u5B9A\u4E49Slot\uFF1A</span>
      <hl-checkbox v-model="checked1" :label="1" bold>\u5907\u9009\u9879</hl-checkbox>
      <hl-checkbox v-model="checked1" :label="2" bold>\u5907\u9009\u9879</hl-checkbox>
      <hl-checkbox v-model="checked1" :label="0">\u672A\u52A0\u7C97</hl-checkbox>
    </template>
    <template #customExpand="{ row }">
      <span style="margin-left: 300px;">{{ row.title }} \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49</span>
    </template>
    <!-- \u884C\u70B9\u51FB\u8BE6\u60C5\u63D2\u69FD -->
    <template #detail="{ row }">
      <a href="javascript:">{{ row.title }}</a>
    </template>
    <template #status="{ row }">
      <a href="javascript:">{{ row.status }}</a>
    </template>
    <template #trainType="{ searchForm }">
      <hl-checkbox-group v-model="searchForm['trainType']" dir="horizontal" gap="var(--md)" wrap>
        <hl-checkbox :label="1">\u7C7B\u578B1</hl-checkbox>
        <hl-checkbox :label="2">\u7C7B\u578B2</hl-checkbox>
        <hl-checkbox :label="3">\u7C7B\u578B3</hl-checkbox>
      </hl-checkbox-group>
    </template>
    <template #toolbar-extra-after>
      <hl-button type="primary" class="gradual-button m-l-md" icon-position="left" style="--button-height: calc(var(--xs) * 6); --button-padding-x: calc(var(--xs) * 2); --form-icon-size: var(--xl);">
        \u65B0\u589E\u5E72\u90E8\u4FE1\u606F
        <template #icon>
          <hl-icon>
            <svg viewBox="0 0 32 32">
              <defs>
                <linearGradient id="linearGradient-1" x1="50%" y1="0%" x2="50%" y2="99.889147%">
                  <stop stop-color="#FFFFFF" offset="0%" />
                  <stop stop-color="#BAE0FF" offset="100%" />
                </linearGradient>
              </defs>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect
                  fill-opacity="0.01"
                  fill="#FFFFFF"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                />
                <path d="M26,3 L26,30 L6,30 L6,3 L26,3 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z" fill-opacity="0.5" fill="#FFFFFF" />
                <path d="M29,9 L29,28 L3,28 L3,9 L29,9 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z" fill-opacity="0.3" fill="#FFFFFF" />
                <path d="M27,2 L27,30 L5,30 L5,11.991862 L13.0142796,2 L27,2 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z" fill="url(#linearGradient-1)" />
              </g>
            </svg>
          </hl-icon>
        </template>
      </hl-button>
    </template>
  </fx-page-table-v2>
</template>
<script>
import { defineComponent, ref, reactive, watch } from 'vue'

const LIST_DATA = {
  title: '2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A',
  companyName: '\u67D0\u67D0\u67D0\u4F01\u4E1A',
  areaName: '\u91D1\u6E56\u53BF',
  person: '\u674E\u6653\u5FE0',
  status: '\u5DF2\u5B8C\u6210',
}

export default defineComponent({
  setup () {
    const tabs = [
      { name: 'Tab1', label: 'Tab1' },
      { name: 'Tab2', label: 'Tab2', default: true },
      { name: 'Tab3', label: 'Tab3' },
    ]
    const tableData = ref([])
    tableData.value = new Array(10).fill('').map((_, i) => { return { ...LIST_DATA, id:i + 1 } })
    const cols = ref([
      {
        title: '',
        width: '66px',
        align: 'center',
        expand: { slotName: 'customExpand', hideLabel: false },
      },
      {
        title: '\u5E8F\u53F7',
        align: 'center',
        slotName: 'tableIndex',
        prop: 'tableIndex',
      },
      { title: '\u57F9\u8BAD\u4E3B\u9898', slotName: 'detail', prop: 'title', sortable: true },
      { title: '\u4F01\u4E1A\u540D\u79F0', prop: 'companyName' },
      { title: '\u6240\u5C5E\u533A\u57DF', prop: 'areaName' },
      { title: '\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA', prop: 'person' },
      { title: '\u5B8C\u6210\u72B6\u6001', slotName: 'status', prop: 'status' },
    ])

    const originSearchItems = [
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        value: '',
        name: 'area',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u6E05\u6C5F\u6D66\u533A', code: '10000' },
        ],
      },
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        value: ['Java1', 'Java'],
        name: 'industry',
        multiple: true,
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u8F6F\u4EF6', code: 'Java' },
          { name: '\u8F6F\u4EF62', code: 'Java1' },
          { name: '\u8F6F\u4EF63', code: 'Java2' },
          { name: '\u8F6F\u4EF64', code: 'Java3' },
        ],
      },
      {
        type: 'input',
        label: '\u4F01\u4E1A\u540D\u79F0',
        placeholder: '\u4F01\u4E1A\u540D\u79F0',
        value: '',
        name: 'companyName',
      },
      {
        type: 'datetime',
        label: '\u57F9\u8BADtime',
        placeholder: '\u57F9\u8BADtime',
        value: '',
        name: 'trainTime',
      },
      {
        type: 'datetimerange',
        label: '\u57F9\u8BADtimeRange',
        placeholder: '\u57F9\u8BADtimerange',
        value: [],
        name: 'trainTimeRange',
      },
      {
        type: 'slot',
        slotName: 'trainType',
        label: '\u57F9\u8BAD\u7C7B\u578B',
        value: '',
        name: 'trainType',
        display: item => {
          console.log('item....', item)
          return '\u7C7B\u578B1\uFF0C\u7C7B\u578B2'
        },
      },
    ]
    const searchItems = ref(originSearchItems)
    const selectionActions = reactive(
      [
        { label: '\u5220\u9664\u6240\u6709', icon: 'TwoDel', noFill: false, show: true, onClick: () => { alert(rowKeys.value) } },
        // { label: '\u6279\u91CF\u8F6C\u79FB', icon: 'TwoFolderIn', noFill: true, show: true },
        // { label: '\u6279\u91CF\u5BA1\u5B9A', icon: 'TwoExamine' },
        // { label: '\u6279\u91CF\u4FEE\u6539', icon: 'TwoEdit' },
        // { label: '\u6279\u91CF\u901A\u8FC7', icon: 'TwoCircleCheck' },
      ],
    )

    const showDetail = row => {
      console.log('\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875' + row)
    }

    const getData = ({ pageSize, currentPage, params, setTotal }) => {
      console.log(pageSize, currentPage, params)
      console.log('\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)')
      // example \u8FD9\u91CC\u662F\u63A5\u53E3\u6848\u4F8B
      // const result = await apiGeologicObj.postFindRiskGeologicHazardPageGeologic({
      //   pageSize,
      //   currentPage,
      //   resName: params.search,
      //   ...params
      // });
      // if (+result.code === 0) {
      //   tableData.value = result.data.list; \u6CE8\u610F\u8FD9\u91CC
      //   setTotal(+result.data.totalRow); \u6CE8\u610F\u8FD9\u91CC
      // }
      tableData.value = new Array(10).fill('').map((_, i) => { return { ...LIST_DATA, id: Math.random() } })
      setTotal(100)
    }

    // \u81EA\u5B9A\u4E49\u624B\u52A8\u89E6\u53D1
    const checked1 = ref(false)
    const tableRef = ref()
    watch(checked1, () => {
      tableRef.value.searchSlotChanged({ checked1: checked1.value })
    })

    const sortChange = (prop, sort) => {
      console.log(prop, sort)
    }
    const tabChange = tab => {
      console.log('tab', tab)
      if (tab === 'Tab2') {
        searchItems.value = [
          originSearchItems[0],
          originSearchItems[5],
        ]
      } else {
        searchItems.value = originSearchItems
      }
    }

    return {
      cols,
      tabs,
      tableData,
      searchItems,
      selectionActions,
      showDetail,
      getData,
      checked1,
      tableRef,

      sortChange,
      tabChange,
    }
  },
})
<\/script>
`)],-1),ne=c("h2",{id:"zi-ding-yi-biao-ge"},[c("a",{class:"header-anchor",href:"#zi-ding-yi-biao-ge"}),Y(" \u81EA\u5B9A\u4E49\u8868\u683C")],-1),re=c("p",null,"\u4FDD\u7559\u641C\u7D22\u6761\u4EF6\u4EE5\u53CA\u5206\u9875\uFF0C\u81EA\u5B9A\u4E49\u8868\u683C\u5C55\u73B0\u5F62\u5F0F",-1),se=c("pre",null,[c("code",{class:"html"},` <template>
  <fx-page-table-v2
    ref="tableRef"
    :cols="cols"
    :table-data="tableData"
    :search-items="searchItems"
    :data-fetcher="getData"
    :table-props="tableProps"
    @sort-change="sortChange"
  >
    <template #custom-table="{ data }">
      <div class="custom-table display-flex flex-wrap" style="row-gap: 10px;column-gap: 10px;">
        <div v-for="d in data" :key="d.id" style="background: #eee;padding: 10px;height: 120px;width: 150px;">
          <div class="text-primary text-bold">\u6807\u9898\uFF1A {{ d.title }}</div>
          <div>\u4F01\u4E1A\u540D\u79F0 {{ d.companyName }}</div>
        </div>
      </div>
    </template>
    <template #trainType="{ searchForm }">
      <hl-checkbox-group v-model="searchForm['trainType']" dir="horizontal" gap="var(--md)" wrap>
        <hl-checkbox :label="1">\u7C7B\u578B1</hl-checkbox>
        <hl-checkbox :label="2">\u7C7B\u578B2</hl-checkbox>
        <hl-checkbox :label="3">\u7C7B\u578B3</hl-checkbox>
      </hl-checkbox-group>
    </template>
    <template #toolbar-extra-after>
      <hl-button type="primary" class="gradual-button" icon-position="left" style="--button-height: calc(var(--xs) * 6); --button-padding-x: calc(var(--xs) * 2); --form-icon-size: var(--xl);">
        \u65B0\u589E\u5E72\u90E8\u4FE1\u606F
        <template #icon>
          <hl-icon>
            <svg viewBox="0 0 32 32">
              <defs>
                <linearGradient id="linearGradient-1" x1="50%" y1="0%" x2="50%" y2="99.889147%">
                  <stop stop-color="#FFFFFF" offset="0%" />
                  <stop stop-color="#BAE0FF" offset="100%" />
                </linearGradient>
              </defs>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect
                  fill-opacity="0.01"
                  fill="#FFFFFF"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                />
                <path d="M26,3 L26,30 L6,30 L6,3 L26,3 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z" fill-opacity="0.5" fill="#FFFFFF" />
                <path d="M29,9 L29,28 L3,28 L3,9 L29,9 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z" fill-opacity="0.3" fill="#FFFFFF" />
                <path d="M27,2 L27,30 L5,30 L5,11.991862 L13.0142796,2 L27,2 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z" fill="url(#linearGradient-1)" />
              </g>
            </svg>
          </hl-icon>
        </template>
      </hl-button>
    </template>
  </fx-page-table-v2>
</template>
<script>
import { defineComponent, ref, reactive, watch } from 'vue'

const LIST_DATA = {
  title: '2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A',
  companyName: '\u67D0\u67D0\u67D0\u4F01\u4E1A',
  areaName: '\u91D1\u6E56\u53BF',
  person: '\u674E\u6653\u5FE0',
  status: '\u5DF2\u5B8C\u6210',
}

export default defineComponent({
  setup () {
    const tableData = ref([])
    tableData.value = new Array(10).fill('').map((_, i) => { return { ...LIST_DATA, id:i + 1 } })
    const cols = ref([
      {
        title: '',
        width: '4em',
        align: 'center',
        expand: { slotName: 'customExpand', hideLabel: false },
      },
      {
        title: '\u5E8F\u53F7',
        align: 'center',
        slotName: 'tableIndex',
        prop: 'tableIndex',
        width: '4em',
      },
      { title: '\u57F9\u8BAD\u4E3B\u9898', slotName: 'detail', prop: 'title', sortable: true, width: '16em' },
      { title: '\u4F01\u4E1A\u540D\u79F0', prop: 'companyName', width: '16em' },
      { title: '\u6240\u5C5E\u533A\u57DF', prop: 'areaName', width: '16em' },
      { title: '\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA', prop: 'person', width: '8em' },
      { title: '\u5B8C\u6210\u72B6\u6001', slotName: 'status', prop: 'status', width: '8em', align: 'center', fixed: 'right' },
    ])

    const searchItems = reactive([
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        value: '',
        name: 'area',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u6E05\u6C5F\u6D66\u533A', code: '10000' },
        ],
      },
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        value: ['Java1', 'Java'],
        name: 'industry',
        multiple: true,
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u8F6F\u4EF6', code: 'Java' },
          { name: '\u8F6F\u4EF62', code: 'Java1' },
          { name: '\u8F6F\u4EF63', code: 'Java2' },
          { name: '\u8F6F\u4EF64', code: 'Java3' },
        ],
      },
      {
        type: 'input',
        label: '\u4F01\u4E1A\u540D\u79F0',
        placeholder: '\u4F01\u4E1A\u540D\u79F0',
        value: '',
        name: 'companyName',
      },
      {
        type: 'datetime',
        label: '\u57F9\u8BADtime',
        placeholder: '\u57F9\u8BADtime',
        value: '',
        name: 'trainTime',
      },
      {
        type: 'datetimerange',
        label: '\u57F9\u8BADtimeRange',
        placeholder: '\u57F9\u8BADtimerange',
        value: [],
        name: 'trainTimeRange',
      },
      {
        type: 'slot',
        slotName: 'trainType',
        label: '\u57F9\u8BAD\u7C7B\u578B',
        value: '',
        name: 'trainType',
        display: item => {
          console.log('item:', item)
          return '\u7C7B\u578B1\uFF0C\u7C7B\u578B2'
        },
      },
    ])
    const selectionActions = reactive(
      [
        { label: '\u5220\u9664\u6240\u6709', icon: 'TwoDel', noFill: false, show: true, onClick: () => { alert(rowKeys.value) } },
        // { label: '\u6279\u91CF\u8F6C\u79FB', icon: 'TwoFolderIn', noFill: true, show: true },
        // { label: '\u6279\u91CF\u5BA1\u5B9A', icon: 'TwoExamine' },
        // { label: '\u6279\u91CF\u4FEE\u6539', icon: 'TwoEdit' },
        // { label: '\u6279\u91CF\u901A\u8FC7', icon: 'TwoCircleCheck' },
      ],
    )

    const showDetail = row => {
      console.log('\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875' + row)
    }

    const getData = ({ pageSize, currentPage, params, setTotal }) => {
      console.log(pageSize, currentPage, params)
      console.log('\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)')
      // example \u8FD9\u91CC\u662F\u63A5\u53E3\u6848\u4F8B
      // const result = await apiGeologicObj.postFindRiskGeologicHazardPageGeologic({
      //   pageSize,
      //   currentPage,
      //   resName: params.search,
      //   ...params
      // });
      // if (+result.code === 0) {
      //   tableData.value = result.data.list; \u6CE8\u610F\u8FD9\u91CC
      //   setTotal(+result.data.totalRow); \u6CE8\u610F\u8FD9\u91CC
      // }
      tableData.value = new Array(10).fill('').map((_, i) => { return {
        ...LIST_DATA,
        title: LIST_DATA.title + '/' + currentPage + '/' + i,
        id: Math.random(),
      }})
      setTotal(100)
    }

    const defaultPagination = { pageSize:10, currentPage:1, total: 0 }

    // \u81EA\u5B9A\u4E49\u624B\u52A8\u89E6\u53D1
    const checked1 = ref(false)
    const tableRef = ref()
    watch(checked1, () => {
      tableRef.value.searchSlotChanged({ checked1: checked1.value })
    })
    const tableProps = reactive({
      'row-class-name': ({ row, rowIndex }) => {
        console.log('\u884C', row)
        if (rowIndex === 1) {
          return 'bg-warning opacity-4'
        } else if (rowIndex === 3) {
          return 'bg-info opacity-3'
        }
        return ''
      },
    })
    const tableRowClassName = ({ rowIndex }) => {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }

    const sortChange = (prop, sort) => {
      console.log(prop, sort)
    }

    return {
      cols,
      tableData,
      searchItems,
      selectionActions,
      showDetail,
      defaultPagination,
      getData,
      checked1,
      tableRef,
      tableProps,
      tableRowClassName,

      sortChange,
    }
  },
})
<\/script>
`)],-1),ce=c("h2",{id:"wu-shu-ju"},[c("a",{class:"header-anchor",href:"#wu-shu-ju"}),Y(" \u65E0\u6570\u636E")],-1),ie=c("pre",null,[c("code",{class:"html"},` <template>
  <fx-page-table-v2
    ref="tableRef"
    :cols="cols"
    :table-data="tableData"
    :search-items="searchItems"
    :data-fetcher="getData"
  >
    <template #customExpand="{ row }">
      <span style="margin-left: 300px;">{{ row.title }} \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49</span>
    </template>
    <!-- \u884C\u70B9\u51FB\u8BE6\u60C5\u63D2\u69FD -->
    <template #detail="{ row }">
      <a href="javascript:">{{ row.title }}</a>
    </template>
    <template #status="{ row }">
      <a href="javascript:">{{ row.status }}</a>
    </template>
  </fx-page-table-v2>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup () {
    const tableData = ref([])
    // tableData.value = new Array(10).fill("").map((_, i) => {return {...LIST_DATA, id:i+1}})
    const cols = ref([
      {
        title: '',
        width: '66px',
        align: 'center',
        expand: { slotName: 'customExpand', hideLabel: false },
      },
      {
        title: '\u5E8F\u53F7',
        width: '66px',
        align: 'center',
        slotName: 'tableIndex',
      },
      { title: '\u57F9\u8BAD\u4E3B\u9898', slotName: 'detail', prop: 'title' },
      { title: '\u4F01\u4E1A\u540D\u79F0', prop: 'companyName' },
      { title: '\u6240\u5C5E\u533A\u57DF', prop: 'areaName' },
      { title: '\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA', prop: 'person' },
      { title: '\u5B8C\u6210\u72B6\u6001', slotName: 'status', prop: 'status' },
    ])
    const searchItems = reactive([
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        value: '',
        name: 'area',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u6E05\u6C5F\u6D66\u533A', code: '10000' },
        ],
      },
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        value: '',
        name: 'industry',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u8F6F\u4EF6', code: 'Java' },
        ],
      },
      {
        type: 'select',
        label: '\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001',
        placeholder: '\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001',
        value: '',
        name: 'status',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u5DF2\u5B8C\u6210', code: '1' },
          { name: '\u672A\u5B8C\u6210', code: '0' },
        ],
      },
      {
        type: 'input',
        label: '\u4F01\u4E1A\u540D\u79F0',
        placeholder: '\u4F01\u4E1A\u540D\u79F0',
        value: '',
        name: 'companyName',
      },
      // {
      //   type: 'input',
      //   label: '\u57F9\u8BAD\u4E3B\u9898',
      //   placeholder: '\u57F9\u8BAD\u4E3B\u9898',
      //   value: '',
      //   name: 'trainTitle',
      // },
      // {
      //   type: 'input',
      //   label: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0',
      //   placeholder: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0',
      //   value: '',
      //   name: 'trainInstitutionName',
      // },
      // {
      //   type: 'year',
      //   label: '\u57F9\u8BAD\u5E74\u5EA6',
      //   placeholder: '\u57F9\u8BAD\u5E74\u5EA6',
      //   value: '',
      //   name: 'trainYear',
      //   format: 'YYYY',
      //   'value-format': 'YYYY',
      // },
    ])

    const showDetail = row => {
      console.log('\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875' + row)
    }

    const getData = ({ pageSize, currentPage, params }) => {
      console.log(pageSize, currentPage, params)
      console.log('\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)')
    }

    return {
      cols,
      tableData,
      searchItems,
      showDetail,
      getData,
    }
  },
})
<\/script>
`)],-1),de=c("h2",{id:"wu-sou-suo-gong-ju"},[c("a",{class:"header-anchor",href:"#wu-sou-suo-gong-ju"}),Y(" \u65E0\u641C\u7D22\u5DE5\u5177")],-1),pe=c("pre",null,[c("code",{class:"html"},` <template>
  <fx-page-table-v2
    ref="tableRef"
    :cols="cols"
    :table-data="tableData"
    :data-fetcher="getData"
  >
    <template #customExpand="{ row }">
      <span style="margin-left: 300px;">{{ row.title }} \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49</span>
    </template>
    <!-- \u884C\u70B9\u51FB\u8BE6\u60C5\u63D2\u69FD -->
    <template #detail="{ row }">
      <a href="javascript:">{{ row.title }}</a>
    </template>
    <template #status="{ row }">
      <a href="javascript:">{{ row.status }}</a>
    </template>
  </fx-page-table-v2>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup () {
    const tableData = ref([])
    // tableData.value = new Array(10).fill("").map((_, i) => {return {...LIST_DATA, id:i+1}})
    const cols = ref([
      {
        title: '',
        width: '66px',
        align: 'center',
        expand: { slotName: 'customExpand', hideLabel: false },
      },
      {
        title: '\u5E8F\u53F7',
        width: '66px',
        align: 'center',
        slotName: 'tableIndex',
      },
      { title: '\u57F9\u8BAD\u4E3B\u9898', slotName: 'detail', prop: 'title' },
      { title: '\u4F01\u4E1A\u540D\u79F0', prop: 'companyName' },
      { title: '\u6240\u5C5E\u533A\u57DF', prop: 'areaName' },
      { title: '\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA', prop: 'person' },
      { title: '\u5B8C\u6210\u72B6\u6001', slotName: 'status', prop: 'status' },
    ])
    const searchItems = reactive([
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF',
        value: '',
        name: 'area',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u6E05\u6C5F\u6D66\u533A', code: '10000' },
        ],
      },
      {
        type: 'select',
        label: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        placeholder: '\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A',
        value: '',
        name: 'industry',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u8F6F\u4EF6', code: 'Java' },
        ],
      },
      {
        type: 'select',
        label: '\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001',
        placeholder: '\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001',
        value: '',
        name: 'status',
        prop: {
          label: 'name',
          value: 'code',
        },
        options: [
          { name: '\u5DF2\u5B8C\u6210', code: '1' },
          { name: '\u672A\u5B8C\u6210', code: '0' },
        ],
      },
      {
        type: 'input',
        label: '\u4F01\u4E1A\u540D\u79F0',
        placeholder: '\u4F01\u4E1A\u540D\u79F0',
        value: '',
        name: 'companyName',
      },
      // {
      //   type: 'input',
      //   label: '\u57F9\u8BAD\u4E3B\u9898',
      //   placeholder: '\u57F9\u8BAD\u4E3B\u9898',
      //   value: '',
      //   name: 'trainTitle',
      // },
      // {
      //   type: 'input',
      //   label: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0',
      //   placeholder: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0',
      //   value: '',
      //   name: 'trainInstitutionName',
      // },
      // {
      //   type: 'year',
      //   label: '\u57F9\u8BAD\u5E74\u5EA6',
      //   placeholder: '\u57F9\u8BAD\u5E74\u5EA6',
      //   value: '',
      //   name: 'trainYear',
      //   format: 'YYYY',
      //   'value-format': 'YYYY',
      // },
    ])

    const showDetail = row => {
      console.log('\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875' + row)
    }

    const getData = ({ pageSize, currentPage, params }) => {
      console.log(pageSize, currentPage, params)
      console.log('\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)')
    }

    return {
      cols,
      tableData,
      searchItems,
      showDetail,
      getData,
    }
  },
})
<\/script>
`)],-1),Fe=H('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>table-props</td><td>\u7ED1\u5B9A\u5230\u5185\u90E8SimpleTable\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u53C2\u8003SimpleTable\u7EC4\u4EF6</td><td>object</td><td>-</td><td>-</td></tr><tr><td>cols</td><td>\u5217\u914D\u7F6E\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>array</td><td>-</td><td>-</td></tr><tr><td>table-data</td><td>\u8868\u683C\u6570\u636E</td><td>object</td><td>-</td><td>-</td></tr><tr><td>data-fetcher</td><td>\u8868\u683C\u67E5\u8BE2\u65B9\u6CD5</td><td>function({ pageSize, currentPage, params, setTotal }) / string</td><td>-</td><td>-</td></tr><tr><td>search-items</td><td>\u641C\u7D22\u5217\u8868,\u53C2\u7167hongluan-business-ui/data-filter</td><td>table-searchbar \u6570\u636E\u8FC7\u6EE4\u5668</td><td>object</td><td>-</td></tr><tr><td>selection-actions</td><td>\u591A\u9009\u64CD\u4F5C\uFF0C\u53C2\u7167hongluan-business-ui/simple-table-list/toolbar/action/actions \u7B80\u5355\u8868\u683C</td><td>array</td><td>-</td><td>-</td></tr><tr><td>default-pagination</td><td>\u9ED8\u8BA4\u5206\u9875\uFF08\u5047\u6570\u636E\u5E0C\u671B\u6709\u5206\u9875\u6570\u636E\uFF0C\u53EF\u4EE5\u8BBE\u7F6Etotal\uFF09</td><td>object</td><td>-</td><td>{ pageSize:10, currentPage:1, total: 0 }</td></tr><tr><td>no-data-image</td><td>\u65E0\u6570\u636E\u7684\u9ED8\u8BA4\u56FE\u7247</td><td>string</td><td>-</td><td>-</td></tr><tr><td>show-tool-bar</td><td>\u662F\u5426\u663E\u793A\u5DE5\u5177\u680F</td><td>boolean</td><td>true/false</td><td>true</td></tr><tr><td>tabs</td><td>\u591A\u4E2A\u8868\u683CTab</td><td>{ label: string; name: string; default: boolean; }[]</td><td>-</td><td>[]</td></tr><tr><td>show-adv-search</td><td>\u663E\u793A\u9AD8\u7EA7\u641C\u7D22</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>is-multiple-select</td><td>\u662F\u5426\u591A\u9009\u6A21\u5F0F</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table><h2 id="cols"><a class="header-anchor" href="#cols"></a> cols</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u8868\u683C\u5217\u5C5E\u6027\u540D\u79F0</td><td>string</td><td></td><td></td></tr><tr><td>showTooltip</td><td>\u662F\u5426\u663E\u793A tooltip\uFF0C\u9700\u8981\u914D\u5408\u5217 width \u503C\u4F7F\u7528</td><td>boolean</td><td></td><td>false</td></tr><tr><td>tooltipProps</td><td>tooltip \u5C5E\u6027\uFF0C\u53C2\u8003 Popover \u7EC4\u4EF6</td><td>object</td><td></td><td></td></tr><tr><td>align</td><td>\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217</td><td>string</td><td>left/right</td><td>-</td></tr><tr><td>slotName</td><td>\u5217 slot \u540D\u79F0\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>string</td><td>-</td><td>-</td></tr><tr><td>headerSlotName</td><td>\u5217\u5934 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A col\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>string</td><td>-</td><td>-</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u5217\u8BBE\u7F6E,\u76EE\u524D\u56FA\u5B9AslotName: &quot;customExpand&quot;</td><td>object{ slotName: string }</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slotname"><a class="header-anchor" href="#slotname"></a> slotName</h2><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tableIndex</td><td>\u5E8F\u53F7</td></tr><tr><td>tableSelection</td><td>\u591A\u9009\u63D2\u69FD</td></tr><tr><td>action</td><td>\u64CD\u4F5C\u5217</td></tr><tr><td>&lt;\u81EA\u5B9A\u4E49&gt;</td><td>\u9664\u5DF2\u7528\u7684&#39;toolbar-extra-before&#39;,&#39;toolbar-extra-after&#39;,&#39;selectionCol&#39;, &#39;tableSelection&#39;, &#39;customExpand&#39;, &#39;tableIndex&#39;, &#39;action&#39;\u8FD9\u4E9B\uFF0C\u5176\u4ED6\u4EFB\u610F\u547D\u540D</td></tr></tbody></table><h2 id="headerslotname"><a class="header-anchor" href="#headerslotname"></a> headerSlotName</h2><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selectionCol</td><td>\u591A\u9009\u64CD\u4F5C</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>selected-row-keys</td><td>\u8868\u683C\u591A\u9009\u64CD\u4F5C\u56DE\u8C03, \u8FD4\u56DE\u7684\u662Fid\u6570\u7EC4</td><td>keys</td></tr><tr><td>sort-change</td><td>\u5B57\u6BB5\u6392\u5E8F\u53D1\u751F\u53D8\u66F4\u4E8B\u4EF6</td><td>prop, sort</td></tr><tr><td>tab-change</td><td>Tab\u5207\u6362\u4E8B\u4EF6</td><td>\u5F53\u524DTab name</td></tr><tr><td>clear-tags</td><td>Tag\u6807\u7B7E\u7684\u6E05\u9664\u4E8B\u4EF6</td><td>\u8FD4\u56DE\u503C\u4E3ATagItem[]</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>refresh</td><td>\u7528\u4E8E\u5217\u8868\u64CD\u4F5C\u540E\u91CD\u65B0\u5237\u65B0\u5217\u8868\uFF0C\u5206\u9875\u548C\u53C2\u6570\u4FDD\u7559</td><td>-</td></tr><tr><td>reset</td><td>\u7528\u4E8E\u91CD\u7F6E\u5F53\u524D\u5217\u8868\uFF0C\u53C2\u6570\u4FDD\u7559\uFF0CcurrenPage\u91CD\u7F6E\u4E3A1</td><td>-</td></tr><tr><td>setSeletedRowKeys</td><td>\u7528\u4E8E\u624B\u52A8\u8BBE\u7F6E\u300C\u884C\u300D\u7684\u9009\u4E2D\u72B6\u6001\uFF1B\u7528\u4E8E\u628A\u8868\u683C\u4F5C\u4E3A\u9009\u62E9\u5DE5\u5177\u65F6\uFF0C\u56DE\u663E\u5DF2\u9009\u7684\u6570\u636E</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>customExpand</td><td>\u5C55\u5F00\u63D2\u69FD\uFF0C\u6839\u636Ecols\u4E2DslotName\u914D\u5408\u4F7F\u7528</td><td>row</td></tr><tr><td>toolbar-extra-before</td><td>\u64CD\u4F5C\u5DE6\u8FB9\u63D2\u69FD\uFF0C\u53EF\u53C2\u7167simple-table-list\u4F7F\u7528</td><td>-</td></tr><tr><td>toolbar-extra-after</td><td>\u64CD\u4F5C\u53F3\u8FB9\u63D2\u69FD\uFF0C\u53EF\u53C2\u7167simple-table-list\u4F7F\u7528</td><td>-</td></tr><tr><td>header-top</td><td>\u8868\u683C\u5DE5\u5177\u680F\u4E0A\u65B9\u63D2\u69FD</td><td>-</td></tr></tbody></table>',14);function me(t,n,E,e,r,i){const L=V("fx-demo0"),h=V("demo-block"),D=V("fx-demo1"),g=V("fx-demo2"),B=V("fx-demo3"),y=V("fx-demo4"),_=V("fx-demo5"),k=V("fx-demo6"),C=V("right-nav");return G(),U($,null,[c("section",null,[Q,W,N(h,{fs:""},{source:R(()=>[N(L)]),highlight:R(()=>[X]),_:1}),ee,N(h,{fs:""},{source:R(()=>[N(D)]),highlight:R(()=>[ue]),_:1}),te,N(h,{fs:""},{source:R(()=>[N(g)]),highlight:R(()=>[ae]),_:1}),le,N(h,{fs:""},{source:R(()=>[N(B)]),highlight:R(()=>[oe]),_:1}),ne,re,N(h,{fs:""},{source:R(()=>[N(y)]),highlight:R(()=>[se]),_:1}),ce,N(h,{fs:""},{source:R(()=>[N(_)]),highlight:R(()=>[ie]),_:1}),de,N(h,{fs:""},{source:R(()=>[N(k)]),highlight:R(()=>[pe]),_:1}),Fe]),N(C)],64)}var Ae=O(q,[["render",me]]);export{Ae as default};
