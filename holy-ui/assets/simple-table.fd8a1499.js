import{p as D,R as s,I as i,L as m,H as x,P as l,X as a,T as t,U as F,Q as e,W as v,a3 as B,ag as I,V as _,$ as T,B as j,ah as O,a as $,o as S}from"./vue.aa74a145.js";import{g as N}from"./index.908f7c94.js";import"./hongluan.f6433a83.js";import"./highlight.171c852c.js";import"./hongluan-icons.eb437c6f.js";const z=t(F("")),P=e("a",null,"\u4FEE\u6539",-1),U=D({setup(g){const o=s(!1),n=s([]),c=s(!1),p=s([{id:1,name:"\u8303\u67CF\u5E90",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1"},{id:2,name:"\u59DC\u519B\u7ED3",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u949E\u6D0B",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),u=s([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol",width:"3em"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org",align:"center"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),d=()=>{o.value?(n.value.splice(0,n.value.length),n.value.push(...p.value.map(b=>b.id)),c.value=!1):n.value.splice(0,n.value.length)},r=()=>{o.value=n.value.length===p.value.length,n.value.length>0&&o.value==!1?c.value=!0:c.value=!1},h=(b,C,E)=>{console.log("rowClicked",b,C,E)},f=(b,C,E,y,w)=>{console.log("cellClicked",b,C,E,y,w)};return(b,C)=>{const E=i("hl-checkbox"),y=i("hl-simple-table");return m(),x(y,{cols:u.value,data:p.value,onRowClick:h,onCellClick:f},{firstCol:l(()=>[a(E,{modelValue:o.value,"onUpdate:modelValue":C[0]||(C[0]=w=>o.value=w),indeterminate:c.value,onChange:d},null,8,["modelValue","indeterminate"])]),tableIndex:l(({row:w})=>[a(E,{modelValue:n.value,"onUpdate:modelValue":C[1]||(C[1]=A=>n.value=A),label:w.id,onChange:A=>r(w.id)},{default:l(()=>[z]),_:2},1032,["modelValue","label","onChange"])]),handle:l(()=>[P]),_:1},8,["cols","data"])}}});var M=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));const R=e("a",null,"\u4FEE\u6539",-1),L=D({setup(g){const o=s([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=s([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=s([{value:"borderless",label:"borderless"},{value:"border-x",label:"border-x"},{value:"border-y",label:"border-y"},{value:"bordered",label:"bordered"}]),p=s("borderless");return(u,d)=>{const r=i("hl-option"),h=i("hl-select"),f=i("hl-simple-table");return m(),v(B,null,[a(h,{modelValue:p.value,"onUpdate:modelValue":d[0]||(d[0]=b=>p.value=b),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:l(()=>[(m(!0),v(B,null,I(c.value,b=>(m(),v(B,null,[b.divider?(m(),x(r,{key:b.value,divider:""})):(m(),x(r,{key:b.value,label:b.label,value:b.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(f,{cols:n.value,data:o.value,border:p.value,padding:"0"},{tableIndex:l(({rowIndex:b})=>[e("span",null,F(b+1),1)]),handle:l(()=>[R]),_:1},8,["cols","data","border"])],64)}}});var V=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const W=D({setup(g){const o=s([]),n=s([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return(c,p)=>{const u=i("hl-simple-table");return m(),x(u,{cols:n.value,border:"border-x",data:o.value},null,8,["cols","data"])}}});var J=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const G=["onClick"],H=e("p",null,"\u624B\u5DE5\u5C55\u5F00\u6570\u636E",-1),K=D({setup(g){const o=s(),n=s([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),c=s([{title:"#",prop:"id",expand:{slotName:"index",hideLabel:!0}},{title:"\u7528\u6237\u540D",prop:"name",slotName:"name",expand:{slotName:"nameExpand"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",expand:{slotName:"des"},tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),p=u=>{o.value.toggleExpand(u.id,"nameExpand")};return(u,d)=>{const r=i("hl-simple-table");return m(),x(r,{ref_key:"tableRef",ref:o,cols:c.value,data:n.value,"expand-row-keys":["1index","2nameExpand"]},{index:l(({row:h})=>[e("p",null,F(h.org)+" / "+F(h.des),1)]),name:l(({row:h})=>[e("a",{href:"javascript:;",onClick:f=>p(h)},"\u70B9\u6211\u5C55\u5F00",8,G),t(" / "+F(h.name),1)]),nameExpand:l(()=>[H]),des:l(({row:h})=>[e("p",null,F(h.sex)+" / "+F(h.des),1)]),_:1},8,["cols","data"])}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));const X=t("\u6761\u4EF61"),q=t("\u6761\u4EF62"),Y=t("\u6761\u4EF63"),Z=t("\u786E\u5B9A"),ee=t(" \u81EA\u5B9A\u4E49\u5217 "),te=t("\u6761\u4EF61"),ne=t("\u6761\u4EF62"),le=t("\u6761\u4EF63"),oe=t("\u786E\u5B9A"),ue=D({setup(g){const o=s([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),n=s([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=s([]);return(p,u)=>{const d=i("hl-checkbox"),r=i("hl-checkbox-group"),h=i("hl-button");return m(),x(_(N),{cols:n.value,data:o.value},{filterSlot:l(({close:f})=>[a(r,{modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=b=>c.value=b),dir:"vertical",gap:"var(--md)",block:""},{default:l(()=>[a(d,{label:"1"},{default:l(()=>[X]),_:1}),a(d,{label:"2"},{default:l(()=>[q]),_:1}),a(d,{label:"3"},{default:l(()=>[Y]),_:1})]),_:1},8,["modelValue"]),a(h,{type:"primary",size:"sm",class:"m-t-md",onClick:f},{default:l(()=>[Z]),_:2},1032,["onClick"])]),index:l(()=>[ee,a(_(N).FilterIcon,{placement:"right"},{default:l(({close:f})=>[a(r,{modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=b=>c.value=b),dir:"vertical",gap:"var(--md)",block:""},{default:l(()=>[a(d,{label:"1"},{default:l(()=>[te]),_:1}),a(d,{label:"2"},{default:l(()=>[ne]),_:1}),a(d,{label:"3"},{default:l(()=>[le]),_:1})]),_:1},8,["modelValue"]),a(h,{type:"primary",size:"sm",class:"m-t-md",onClick:f},{default:l(()=>[oe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["cols","data"])}}});var ae=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));const se=t("\u4FEE\u6539"),de=D({setup(g){const o=s([{id:1,name:"\u8D39\u6587\u8F69",sex:"\u7537",org:"18933867329",des:"\u5B89\u5FBD\u7701\u516D\u5B89\u5E02\u4E1C\u6E2F\u9547\u6E2F\u4E0B\u9521\u6E2F\u4E1C\u8DEF8\u680B1204\u5BA4"},{id:2,name:"\u5218\u6797",sex:"\u7537",org:"18981484641",des:"\u5185\u8499\u9521\u6797\u6D69\u7279\u5E02\u5317\u516D\u95E8\u6751\u5357\u6CB3\u88578\u680B1204\u5BA4"},{id:3,name:"\u91D1\u73A5\u50B2",sex:"\u7537",org:"13000688905",des:"\u9ED1\u9F99\u6C5F\u7701\u5317\u5B89\u5E02\u4E09\u5C94\u8DEF\u6D66\u6C85\u5BBF\u820D131\u53F7"},{id:4,name:"\u738B\u6B66",sex:"\u7537",org:"13102220035",des:"\u6E56\u5317\u7701\u6D2A\u6E56\u5E02\u4E1C\u4E94\u6761\u8DEF\u6797\u673A\u5C0F\u533A948\u53F7"},{id:5,name:"\u535E\u5609\u6021",sex:"\u5973",org:"17022218210",des:"\u5C71\u4E1C\u7701\u62DB\u8FDC\u5E02\u5E76\u5DDE\u5317\u8DEF2\u67618\u53F7"},{id:6,name:"\u548C\u6587\u6770",sex:"\u7537",org:"13548097666",des:"\u9655\u897F\u7701\u5B89\u5EB7\u5E02\u91D1\u56FD\u91CC506\u53F7517\u623F"},{id:7,name:"\u6F58\u745E\u5802",sex:"\u7537",org:"13065726257",des:"\u5B89\u5FBD\u7701\u5929\u957F\u5E02\u91D1\u971E\u8857\u9053\u56FD\u9645\u5546\u4E1A\u4E2D\u5FC3121\u53F7"},{id:8,name:"\u5173\u723D",sex:"\u5973",org:"13570593023",des:"\u56DB\u5DDD\u7701\u7B80\u9633\u5E02\u524D\u8FDB\u8DEF506\u53F7517\u623F"}]),n=s([{title:"#",prop:"",slotName:"tableIndex",minWidth:"4em"},{title:"\u59D3\u540D",prop:"name",minWidth:"7em",fixed:"left"},{title:"\u6027\u522B",prop:"sex",minWidth:"6em"},{title:"\u624B\u673A\u53F7",prop:"org",minWidth:"10em"},{title:"\u4F4F\u5740",prop:"des",minWidth:"26em"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return(c,p)=>{const u=i("hl-button"),d=i("hl-simple-table"),r=i("hl-scrollbar");return m(),x(r,{height:"200px"},{default:l(()=>[a(d,{cols:n.value,data:o.value,border:"border-x","fixed-header":""},{tableIndex:l(({rowIndex:h})=>[e("span",null,F(h+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[se]),_:1})]),_:1},8,["cols","data"])]),_:1})}}});var re=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));const ie={class:"table-scroll scroll-column"},pe=t("\u4FEE\u6539"),ce=D({setup(g){const o=s([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",no:"478343",level:"P8",years:10},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",no:"238343",level:"P6",years:3},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",no:"178343",level:"P7",years:5}]),n=s([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex",fixed:"left",minWidth:"50px"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,minWidth:"150px"},{title:"\u6027\u522B",prop:"sex",width:"50px"},{title:"\u5DE5\u53F7",prop:"no",showTooltip:!0,minWidth:"120px",fixed:{position:"left",distance:"50px"}},{title:"\u804C\u7EA7",prop:"level",showTooltip:!0},{title:"\u53F8\u9F84",prop:"years",showTooltip:!0},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,minWidth:"400px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,minWidth:"150px",fixed:{position:"right",distance:"70px"}},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center",fixed:"right"}]);return(c,p)=>{const u=i("hl-button"),d=i("hl-simple-table");return m(),v("div",ie,[a(d,{cols:n.value,data:o.value,border:"border-x"},{tableIndex:l(({rowIndex:r})=>[e("span",null,F(r+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[pe]),_:1})]),_:1},8,["cols","data"])])}}});var me=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));const he={class:"table-scroll",style:{height:"200px"}},be=t("\u4FEE\u6539"),_e=D({setup(g){const o=s([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=s([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,p)=>{const u=i("hl-button"),d=i("hl-simple-table");return m(),v("div",he,[a(d,{cols:n.value,data:o.value,border:"bordered","fixed-header":""},{tableIndex:l(({rowIndex:r})=>[e("span",null,F(r+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[be]),_:1})]),_:1},8,["cols","data"])])}}});var Ee=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"}));const ge={class:"table-scroll",style:{height:"200px"}},xe=t("\u4FEE\u6539"),De=D({setup(g){let o=0;const n={name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},c=s(new Array(22).fill(0).map(d=>Object.assign(JSON.parse(JSON.stringify(n)),{id:o++}))),p=s([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name",showTooltip:!0,width:"100px"},{title:"\u6027\u522B",prop:"sex",width:"50px"},{title:"\u5355\u4F4D",prop:"org",showTooltip:!0,width:"150px"},{title:"\u63CF\u8FF0",prop:"des",showTooltip:!0,width:"400px"},{title:"\u64CD\u4F5C",prop:"",slotName:"handle",align:"center"}]),u=({rowIndex:d})=>d%5===0?{backgroundColor:"var(--bg-light)",zIndex:10,position:"sticky",top:"48px"}:{};return(d,r)=>{const h=i("hl-button"),f=i("hl-simple-table");return m(),v("div",ge,[a(f,{cols:p.value,data:c.value,border:"border-x","fixed-header":"","cell-style":u},{tableIndex:l(({rowIndex:b})=>[e("span",null,F(b),1)]),handle:l(()=>[a(h,{type:"link"},{default:l(()=>[xe]),_:1})]),_:1},8,["cols","data"])])}}});var fe=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));const Fe=e("tr",null,[e("td",{colspan:"2"},[e("strong",null,"\u5408\u8BA1")]),e("td",null,"\uFFE53232"),e("td",null,"\uFFE51212.22"),e("td",null,"\uFFE590.22")],-1),ve=D({setup(g){const o=s([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),n=s([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]);return(c,p)=>{const u=i("hl-simple-table");return m(),x(u,{cols:n.value,data:o.value,border:"bordered"},{foot:l(()=>[Fe]),_:1},8,["cols","data"])}}});var Be=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));const Ce=t("\u4FEE\u6539"),we=D({setup(g){const o=s([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=s([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,p)=>{const u=i("hl-button"),d=i("hl-simple-table");return m(),x(d,{cols:n.value,data:o.value,hover:"","show-header":!1},{tableIndex:l(({rowIndex:r})=>[e("span",null,F(r+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[Ce]),_:1})]),_:1},8,["cols","data"])}}});var ye=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));const Ae=e("a",null,"\u4FEE\u6539",-1),Ie=e("br",null,null,-1),Ne=e("br",null,null,-1),Se=t("\u9690\u85CF/\u663E\u793A\u7B2C3\u5217"),ke=D({setup(g){const o=s(),n=s([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),c=s([{title:"#",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org",align:"center"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),p=()=>{o.value.toggleColumn(2)};return(u,d)=>{const r=i("hl-simple-table"),h=i("hl-button");return m(),v(B,null,[a(r,{ref_key:"simpleTableRef",ref:o,cols:c.value,data:n.value},{handle:l(()=>[Ae]),_:1},8,["cols","data"]),Ie,Ne,a(h,{type:"primary",onClick:p},{default:l(()=>[Se]),_:1})],64)}}});var Te=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));const je=e("br",null,null,-1),Oe=t("\u9009\u4E2D\u7B2C\u4E00\u884C"),$e=t("\u53D6\u6D88\u9009\u62E9"),ze=D({setup(g){const o=s(),n=s([{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),c=s([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0,filter:{slotName:"filterSlot",placement:"top",popperClass:"test-filter-slot"}},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},filter:{slotName:"filterSlot"}},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),p=(r,h)=>{console.log(r,h)},u=()=>{console.log("row-click")},d=r=>{o.value.setCurrentRow(r)};return(r,h)=>{const f=i("hl-simple-table"),b=i("hl-button");return m(),v(B,null,[a(f,{ref_key:"tableRef",ref:o,cols:c.value,data:n.value,"highlight-current-row":"",onCurrentChange:p,onRowClick:u},null,8,["cols","data"]),je,a(b,{class:"m-r-md",onClick:h[0]||(h[0]=C=>d(n.value[0]))},{default:l(()=>[Oe]),_:1}),a(b,{onClick:h[1]||(h[1]=C=>d())},{default:l(()=>[$e]),_:1})],64)}}});var Pe=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));const Ue=t("\u4FEE\u6539"),Me=D({setup(g){const o=s([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=s([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,p)=>{const u=i("hl-button"),d=i("hl-simple-table");return m(),x(d,{cols:n.value,data:o.value,hover:""},{tableIndex:l(({rowIndex:r})=>[e("span",null,F(r+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[Ue]),_:1})]),_:1},8,["cols","data"])}}});var Re=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"}));const Le=e("a",null,"\u4FEE\u6539",-1),Ve=D({setup(g){const o=s([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",icon:"Briefcase"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",icon:"ChartPie"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01",icon:"Archive"}]),n=s([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,p)=>{const u=i("hl-icon"),d=i("hl-simple-table");return m(),x(d,{cols:n.value,data:o.value,list:"","gap-y":"var(--xs)"},{tableIndex:l(({row:r})=>[a(u,{type:"danger",fill:"",radius:""},{default:l(()=>[(m(),x(T("Two"+r.icon)))]),_:2},1024)]),handle:l(()=>[Le]),_:1},8,["cols","data"])}}});var We=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));const Je=t("\u4FEE\u6539"),Ge=e("span",null,"\u6B63\u5728\u52A0\u8F7D...",-1),He=D({setup(g){let o=1;function n(){return o++}const c=[{id:n(),name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:n(),name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:n(),name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}],p=s(!1),u=s(JSON.parse(JSON.stringify(c))),d=s([{title:"#",slotName:"tableIndex",width:"8%"},{title:"\u7528\u6237\u540D",prop:"name",width:"15%"},{title:"\u6027\u522B",prop:"sex",width:"8%"},{title:"\u5355\u4F4D",prop:"org",width:"20%"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center",width:"10%"}]),r=j(()=>u.value.length<12),h=()=>{p.value||!r.value||(p.value=!0,window.setTimeout(()=>{const f=JSON.parse(JSON.stringify(c));f.forEach(b=>{b.id=n(),b.name=b.name+b.id}),u.value.push(...f),p.value=!1},300))};return(f,b)=>{const C=i("hl-button"),E=i("hl-spinner"),y=i("hl-group"),w=i("hl-simple-table"),A=i("hl-scrollbar");return m(),x(A,{style:{height:"200px"},onAtEnd:h},{default:l(()=>[a(w,{cols:d.value,data:u.value,border:"border-x","fixed-header":""},O({tableIndex:l(({rowIndex:k})=>[e("span",null,F(k+1),1)]),handle:l(()=>[a(C,{type:"link"},{default:l(()=>[Je]),_:1})]),_:2},[_(r)?{name:"more",fn:l(()=>[p.value?(m(),x(y,{key:0,align:"items-middle",gap:"var(--xs)"},{default:l(()=>[a(E,{size:"sm"}),Ge]),_:1})):$("",!0)])}:void 0]),1032,["cols","data"])]),_:1})}}});var Ke=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"}));const Qe=e("a",null,"\u4FEE\u6539",-1),Xe=D({setup(g){const o=s([{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),n=s([{title:"\u65E5\u671F",prop:"date"},{title:"\u914D\u9001\u4FE1\u606F",prop:"delivery",children:[{title:"\u59D3\u540D",prop:"name"},{title:"\u5730\u5740\u4FE1\u606F",prop:"address",children:[{title:"\u7701/\u5E02",prop:"state"},{title:"\u57CE\u5E02",prop:"city"},{title:"\u5730\u5740",prop:"address"},{title:"\u64CD\u4F5C",prop:"zip",slotName:"handle"}]}]}]);return(c,p)=>{const u=i("hl-simple-table");return m(),x(u,{cols:n.value,data:o.value,border:"bordered"},{handle:l(()=>[Qe]),_:1},8,["cols","data"])}}});var qe=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"}));const Ye=t("\u4FEE\u6539"),Ze=D({setup(g){const o=s([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=s([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=s([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),p=s("0"),u=s("0");return(d,r)=>{const h=i("hl-option"),f=i("hl-select"),b=i("hl-button"),C=i("hl-simple-table");return m(),v(B,null,[a(f,{modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=E=>p.value=E),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u8868\u683C\u586B\u5145",class:"m-b-md"},{default:l(()=>[(m(!0),v(B,null,I(c.value,E=>(m(),v(B,null,[E.divider?(m(),x(h,{key:E.value,divider:""})):(m(),x(h,{key:E.value,label:E.label,value:E.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(f,{modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=E=>u.value=E),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5355\u5143\u683C\u586B\u5145",class:"m-l-md m-b-md"},{default:l(()=>[(m(!0),v(B,null,I(c.value,E=>(m(),v(B,null,[E.divider?(m(),x(h,{key:E.value,divider:""})):(m(),x(h,{key:E.value,label:E.label,value:E.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(C,{cols:n.value,data:o.value,border:"border-x",padding:p.value,"cell-padding":u.value},{tableIndex:l(({rowIndex:E})=>[e("span",null,F(E+1),1)]),handle:l(()=>[a(b,{type:"link"},{default:l(()=>[Ye]),_:1})]),_:1},8,["cols","data","padding","cell-padding"])],64)}}});var et=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"}));const tt=e("a",null,"\u4FEE\u6539",-1),nt=D({setup(g){const o=s([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=s([{title:"#",slotName:"tableIndex",width:"4em"},{title:"\u7528\u6237\u540D",prop:"name",width:"8em"},{title:"\u6027\u522B",prop:"sex",width:"4em"},{title:"\u5355\u4F4D",prop:"org",width:""},{title:"\u7B80\u4ECB",prop:"des",width:""},{title:"\u64CD\u4F5C",slotName:"handle",align:"center",width:"6em"}]);return(c,p)=>{const u=i("hl-simple-table");return m(),x(u,{cols:n.value,data:o.value,border:"bordered",resize:""},{tableIndex:l(({rowIndex:d})=>[e("span",null,F(d+1),1)]),handle:l(()=>[tt]),_:1},8,["cols","data"])}}});var lt=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"}));const ot=e("a",null,"\u4FEE\u6539",-1),ut=D({setup(g){const o=s([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=s([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),c=s([{value:"sm",label:"sm"},{value:"md",label:"md"},{value:"lg",label:"lg"}]),p=s("md");return(u,d)=>{const r=i("hl-option"),h=i("hl-select"),f=i("hl-simple-table");return m(),v(B,null,[a(h,{modelValue:p.value,"onUpdate:modelValue":d[0]||(d[0]=b=>p.value=b),clearable:"",placeholder:"\u8BF7\u9009\u62E9",class:"m-b-md"},{default:l(()=>[(m(!0),v(B,null,I(c.value,b=>(m(),v(B,null,[b.divider?(m(),x(r,{key:b.value,divider:""})):(m(),x(r,{key:b.value,label:b.label,value:b.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),a(f,{cols:n.value,data:o.value,size:p.value,class:"borderless-last"},{tableIndex:l(({rowIndex:b})=>[e("span",null,F(b+1),1)]),handle:l(()=>[ot]),_:1},8,["cols","data","size"])],64)}}});var at=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));const st=t(" \u81EA\u5B9A\u4E49\u5217 "),dt=D({setup(g){const o=[{id:1,name:"\u8303\u767D\u9732",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1"},{id:2,name:"xxx",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u738B\u671D\u9633",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}],n=s(JSON.parse(JSON.stringify(o))),c=s([{title:"\u5E8F\u53F7",prop:"id",headerSlotName:"index"},{title:"\u7528\u6237\u540D",prop:"name",sortable:!0},{title:"\u6027\u522B",prop:"sex",sortable:!1},{title:"\u5355\u4F4D",prop:"org",sortable:"descending"},{title:"\u7B80\u4ECB",prop:"des",showTooltip:!0,width:"40%",tooltipProps:{width:"200px",popperClass:"test-tip"},sortable:"ascending"}]),p=(u,d)=>{console.log("soring...",u,d),d?n.value.sort((r,h)=>{const f=String(r[u]).localeCompare(String(h[u]));return d==="ascending"?f:f*-1}):n.value=JSON.parse(JSON.stringify(o))};return(u,d)=>(m(),x(_(N),{cols:c.value,data:n.value,onSortChange:p},{index:l(()=>[st,a(_(N).SortableIcon,{sortable:"",onSortChange:d[0]||(d[0]=r=>p("id",r))})]),_:1},8,["cols","data"]))}});var rt=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"}));const it=D({setup(g){const o=s([{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}]),n=s([{title:"id",prop:"id"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"Amount1",prop:"amount1"},{title:"Amount2",prop:"amount2"},{title:"Amount3",prop:"amount3"}]),c=({rowIndex:u,columnIndex:d})=>{if(u%2===0){if(d===0)return[1,2];if(d===1)return[0,0]}},p=({rowIndex:u,columnIndex:d})=>{if(d===0)return u%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}};return(u,d)=>{const r=i("hl-simple-table");return m(),v(B,null,[a(r,{cols:n.value,data:o.value,border:"bordered","span-method":c},null,8,["cols","data"]),a(r,{cols:n.value,data:o.value,border:"bordered",class:"m-t-md","span-method":p},null,8,["cols","data"])],64)}}});var pt=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"}));const ct=t("\u4FEE\u6539"),mt=D({setup(g){const o=s([{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD"},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]),n=s([{title:"#",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]);return(c,p)=>{const u=i("hl-button"),d=i("hl-simple-table");return m(),x(d,{cols:n.value,data:o.value,stripe:""},{tableIndex:l(({rowIndex:r})=>[e("span",null,F(r+1),1)]),handle:l(()=>[a(u,{type:"link"},{default:l(()=>[ct]),_:1})]),_:1},8,["cols","data"])}}});var ht=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"}));const bt=e("a",null,"\u4FEE\u6539",-1),_t=e("br",null,null,-1),Et=e("br",null,null,-1),gt=e("a",null,"\u4FEE\u6539",-1),xt=D({setup(g){let o=1e4;const n=s(),c=s([{title:"ID",slotName:"tableIndex"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",width:"220px",showTooltip:!0},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),p=(u,d,r)=>{window.setTimeout(()=>{r([{id:o++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",hasChildren:!0},{id:o++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:o++,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"}]}])},3e3)};return window.setTimeout(()=>{n.value=[{id:1,name:"\u738B\u4E8C\u9EBB\u5B50",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:11,name:"\u738B\u4E8C\u9EBB\u5B5011",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[{id:111,name:"\u738B\u4E8C\u9EBB\u5B50111",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"},{id:112,name:"\u738B\u4E8C\u9EBB\u5B50112",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01"}]},{id:12,name:"\u738B\u4E8C\u9EBB\u5B5012",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01",children:[]}]},{id:2,name:"\u674E\u56DB",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD",hasChildren:!0},{id:3,name:"\u5F20\u4E09",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01"}]},100),(u,d)=>{const r=i("hl-simple-table");return m(),v(B,null,[a(r,{cols:c.value,data:n.value,load:p,"expand-row-keys":["1"]},{tableIndex:l(({row:h})=>[e("span",null,F(h.id),1)]),handle:l(()=>[bt]),_:1},8,["cols","data"]),_t,Et,a(r,{cols:c.value,data:n.value,load:p,"expand-row-keys":["1"],"first-column-index":1},{tableIndex:l(({row:h})=>[e("span",null,F(h.id),1)]),handle:l(()=>[gt]),_:1},8,["cols","data"])],64)}}});var Dt=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"}));const ft=e("p",{style:{"text-align":"center"}},"\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~",-1),Ft=D({setup(g){const o=s(null),n=s([{title:"\u5E8F\u53F7",prop:"",slotName:"tableIndex"},{title:"\u59D3\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u64CD\u4F5C",prop:"",align:"center"}]);return(c,p)=>{const u=i("hl-simple-table");return m(),x(u,{cols:n.value,border:"border-x",data:o.value},{unknown:l(()=>[ft]),_:1},8,["cols","data"])}}});var vt=Object.freeze(Object.defineProperty({__proto__:null,default:Ft},Symbol.toStringTag,{value:"Module"}));const Bt=e("h1",null,"SimpleTable \u7B80\u5355\u8868\u683C",-1),Ct=e("p",null,"SimpleTable \u662F\u4E00\u6B3E\u975E\u5E38\u8F7B\u91CF\u7684\u8868\u683C\u7EC4\u4EF6\u3002",-1),wt=e("div",{class:"doc-tip"},[e("p",null,[t("\u7EC4\u4EF6\u9700\u8981\u5305\u88F9 "),e("code",null,"<client-only></client-only>"),t(" \u6807\u7B7E\uFF0C\u5F53\u7528\u5728 SSR (eg: "),e("a",{href:"https://nuxt.com/v3"},"Nuxt"),t(") \u548C SSG (eg: "),e("a",{href:"https://vitepress.vuejs.org/"},"VitePress"),t(")\u3002")])],-1),yt=e("h2",{id:"bian-kuang-yang-shi"},[e("a",{class:"header-anchor",href:"#bian-kuang-yang-shi"}),t(" \u8FB9\u6846\u6837\u5F0F")],-1),At=e("p",null,[e("code",null,"border"),t(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F")],-1),It=e("h2",{id:"jian-ju-she-zhi"},[e("a",{class:"header-anchor",href:"#jian-ju-she-zhi"}),t(" \u95F4\u8DDD\u8BBE\u7F6E")],-1),Nt=e("p",null,[e("code",null,"padding"),t(" \u5C5E\u6027\u53EF\u4E3A\u8868\u683C\u52A0\u4E0A\u8BBE\u7F6E\u4E0D\u540C\u7684\u95F4\u8DDD\u5C3A\u5BF8\uFF0C \u540C\u65F6"),e("code",null,"cell-padding"),t(" \u53EF\u8BBE\u7F6ETD\u7684\u95F4\u8DDD\u5C3A\u5BF8")],-1),St=e("h2",{id:"xuan-ting-yang-shi-hover"},[e("a",{class:"header-anchor",href:"#xuan-ting-yang-shi-hover"}),t(" \u60AC\u505C\u6837\u5F0F Hover")],-1),kt=e("p",null,[e("code",null,"hover"),t(" \u5C5E\u6027\u53EF\u4EE5\u5728\u60AC\u505C\u5728\u67D0\u4E00\u884C\u65F6\uFF0C\u5448\u73B0\u80CC\u666F\u8272\u3002")],-1),Tt=e("h2",{id:"tiao-wen-yang-shi"},[e("a",{class:"header-anchor",href:"#tiao-wen-yang-shi"}),t(" \u6761\u7EB9\u6837\u5F0F")],-1),jt=e("p",null,[e("code",null,"stripe"),t("\u5C5E\u6027\u53EF\u4EE5\u521B\u5EFA\u6761\u7EB9\u7684\u8868\u683C\uFF0C\u4EE5\u4FBF\u533A\u5206\u51FA\u4E0D\u540C\u884C\u7684\u6570\u636E\u3002")],-1),Ot=e("div",null,[e("p",null,[t("stripe \u8FD8\u63A5\u6536 "),e("code",null,"even"),t(" \u6216\u8005 "),e("code",null,"odd"),t(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6761\u7EB9\u663E\u793A\u7684\u987A\u5E8F\u3002\u9ED8\u8BA4\u4E3A "),e("code",null,"odd"),t(" \u5947\u6570")])],-1),$t=e("h2",{id:"chi-cun-xiu-shi"},[e("a",{class:"header-anchor",href:"#chi-cun-xiu-shi"}),t(" \u5C3A\u5BF8\u4FEE\u9970")],-1),zt=e("p",null,[e("code",null,"size"),t(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8868\u683C\u7684\u5C3A\u5BF8\u3002")],-1),Pt=e("h2",{id:"tuo-zhuai-gai-bian-lie-kuan"},[e("a",{class:"header-anchor",href:"#tuo-zhuai-gai-bian-lie-kuan"}),t(" \u62D6\u62FD\u6539\u53D8\u5217\u5BBD")],-1),Ut=e("p",null,[e("code",null,"resize"),t(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A "),e("code",null,"true"),t("\uFF0C\u53EF\u4EE5\u62D6\u62FD\u8868\u683C\u5934\u7684\u5217\uFF0C\u4ECE\u800C\u6539\u53D8\u5217\u5BBD\u3002")],-1),Mt=e("h2",{id:"lie-biao-yang-shi"},[e("a",{class:"header-anchor",href:"#lie-biao-yang-shi"}),t(" \u5217\u8868\u6837\u5F0F")],-1),Rt=e("p",null,[e("code",null,"list"),t(" \u53EF\u4EE5\u5C06\u4F20\u7EDF\u7684\u8868\u683C\u5448\u73B0\u6210\u5217\u8868\u7684\u72B6\u6001\u3002")],-1),Lt=e("div",null,[e("p",null,[t("\u5217\u8868\u6837\u5F0F\u4F1A\u4E3A\u6BCF\u4E00\u884C\u8868\u683C\u52A0\u4E0A\u5706\u89D2\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u95F4\u8DDD\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,'gap="var(--xs)"')])],-1),Vt=e("h2",{id:"gu-ding-biao-tou"},[e("a",{class:"header-anchor",href:"#gu-ding-biao-tou"}),t(" \u56FA\u5B9A\u8868\u5934")],-1),Wt=e("p",null,[t("\u4E3A SimpleTable \u7EC4\u4EF6\u52A0\u4E0A "),e("code",null,"fixed-header"),t(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8868\u5934\u56FA\u5B9A\u5728\u9876\u7AEF\u3002")],-1),Jt=S('<h2 id="gu-ding-lie"><a class="header-anchor" href="#gu-ding-lie"></a> \u56FA\u5B9A\u5217</h2><p>\u4E3A\u67D0\u4E00\u5217\u589E\u52A0 <code>fixed</code> \u5C5E\u6027\u53EF\u4EE5\u4F7F\u5B83\u56FA\u5B9A\uFF0C\u540C\u65F6\u4F60\u53EF\u4EE5\u4F20\u9012 <code>left</code> <code>right</code> \u6765\u63A7\u5236\u5B83\u56FA\u5B9A\u5728\u4EC0\u4E48\u5730\u65B9\u3002\u4F8B\u5982 <code>fixed: &#39;left&#39;</code>\u3002<code>fixed</code> \u5C5E\u6027\u8FD8\u53EF\u4EE5\u4E3A <code>object</code> \u7C7B\u578B\uFF0C\u8BE6\u7EC6\u63A7\u5236 <code>fixed</code> \u7684\u8DDD\u79BB\u3002</p>',2),Gt=e("h2",{id:"gu-ding-xing"},[e("a",{class:"header-anchor",href:"#gu-ding-xing"}),t(" \u56FA\u5B9A\u884C")],-1),Ht=e("p",null,[t("\u901A\u8FC7 "),e("code",null,"cellStyle"),t(" \u5C5E\u6027\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u56FA\u5B9A\u884C\u6548\u679C\u3002")],-1),Kt=e("h2",{id:"gu-ding-tou-he-lie"},[e("a",{class:"header-anchor",href:"#gu-ding-tou-he-lie"}),t(" \u56FA\u5B9A\u5934\u548C\u5217")],-1),Qt=e("p",null,"\u8868\u5934\u548C\u5217\u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\u56FA\u5B9A\u3002",-1),Xt=e("h2",{id:"xia-la-jia-zai-geng-duo"},[e("a",{class:"header-anchor",href:"#xia-la-jia-zai-geng-duo"}),t(" \u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A")],-1),qt=e("p",null,"\u914D\u5408 Scrollbar \u7EC4\u4EF6\u53EF\u5B9E\u73B0\u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A\u3002",-1),Yt=e("h2",{id:"yi-chu-biao-tou"},[e("a",{class:"header-anchor",href:"#yi-chu-biao-tou"}),t(" \u79FB\u9664\u8868\u5934")],-1),Zt=e("p",null,[e("code",null,"show-header"),t(" \u5C5E\u6027\u53EF\u4EE5\u79FB\u9664\u8868\u5934\uFF0C\u8BA9\u5176\u5C55\u793A\u4E3A\u4E00\u4E2A\u7EAF\u5217\u8868\u6837\u5F0F\u3002")],-1),en=e("h2",{id:"pai-xu"},[e("a",{class:"header-anchor",href:"#pai-xu"}),t(" \u6392\u5E8F")],-1),tn=e("p",null,"\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u70B9\u51FB\u76F8\u540C\u7684\u6392\u5E8F\u56FE\u6807\u6062\u590D\u9ED8\u8BA4\u6392\u5E8F\u3002\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u5728\u975Esetup\u8BED\u6CD5\u4E0B\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA SortableIcon \u7EC4\u4EF6\uFF1Bsetup\u8BED\u6CD5\u8BF7\u53C2\u8003\u5982\u4E0B\u6E90\u7801\u3002",-1),nn=e("div",null,[e("p",null,[t("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6Esortable\u5C5E\u6027\uFF0C\u503C\u4E3A\uFF1A"),e("code",null,"true / false / 'descending' / 'ascending'"),t(" \uFF0C\u5E76\u901A\u8FC7\u76D1\u542Csort-change\u4E8B\u4EF6\u5904\u7406\u6570\u636E\u6392\u5E8F")])],-1),ln=e("h2",{id:"shai-xuan"},[e("a",{class:"header-anchor",href:"#shai-xuan"}),t(" \u7B5B\u9009")],-1),on=e("p",null,"\u5982\u679C\u60F3\u81EA\u5B9A\u4E49\u5217\u5934\uFF0C\u4F46\u4ECD\u7136\u4F7F\u7528\u9ED8\u8BA4\u6392\u5E8F\u56FE\u6807\uFF0C\u5728\u975Esetup\u8BED\u6CD5\u4E0B\u4ECE SimpleTable \u7EC4\u4EF6\u4E2D\u89E3\u6784\u51FA FilterIcon \u7EC4\u4EF6\uFF1Bsetup\u8BED\u6CD5\u8BF7\u53C2\u8003\u5982\u4E0B\u6E90\u7801\u3002",-1),un=e("div",null,[e("p",null,[t("\u5217\u4E2D\u53EF\u4EE5\u8BBE\u7F6E "),e("code",null,"filter"),t(" \u5BF9\u8C61\uFF0C\u63D0\u4F9B "),e("code",null,"slotName"),t("\uFF08\u5FC5\u9009\uFF09\u3001"),e("code",null,"placement"),t("\uFF08\u53C2\u8003Popover\u6587\u6863\uFF09\u3001"),e("code",null,"popperClass"),t(" \u5C5E\u6027\u3002slot\u4E2D\u63D0\u4F9B "),e("code",null,"close"),t(" \u65B9\u6CD5\u7528\u6765\u624B\u5DE5\u5173\u95ED\u5F39\u51FA\u6846\u3002")])],-1),an=e("h2",{id:"gao-liang-xing"},[e("a",{class:"header-anchor",href:"#gao-liang-xing"}),t(" \u9AD8\u4EAE\u884C")],-1),sn=e("p",null,"\u9009\u62E9\u5355\u884C\u6570\u636E\u65F6\u4F7F\u7528\u8272\u5757\u8868\u793A\u3002",-1),dn=e("div",null,[e("p",null,[t("SimpleTable \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5355\u9009\u7684\u652F\u6301\uFF0C \u53EA\u9700\u8981\u914D\u7F6E"),e("code",null,"highlight-current-row"),t("\u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u5355\u9009\u3002 \u4E4B\u540E\u7531"),e("code",null,"current-change"),t("\u4E8B\u4EF6\u6765\u7BA1\u7406\u9009\u4E2D\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u5B83\u4F1A\u4F20\u5165 currentRow\uFF0ColdCurrentRow\u3002")])],-1),rn=e("h2",{id:"zhan-kai-xing"},[e("a",{class:"header-anchor",href:"#zhan-kai-xing"}),t(" \u5C55\u5F00\u884C")],-1),pn=e("p",null,"\u5F53\u884C\u5185\u5BB9\u8FC7\u591A\u5E76\u4E14\u4E0D\u60F3\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 SimpleTable \u5C55\u5F00\u884C\u529F\u80FD\u3002\u53EF\u4EE5\u5B9A\u4E49\u591A\u5217\u540C\u65F6\u5C55\u5F00\u3002",-1),cn=e("div",null,[e("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E expand \u5BF9\u8C61 \u548C slot \u53EF\u4EE5\u5F00\u542F\u5C55\u5F00\u884C\u529F\u80FD\u3002expand\u6709\u4E24\u4E2A\u5C5E\u6027\uFF1A"),e("code",null,"slotName"),t("\uFF0C"),e("code",null,"hideLabel"),t("\uFF0ChideLabel\u9ED8\u8BA4\u4E3Afalse")])],-1),mn=e("h2",{id:"shu-xing-shu-ju-yu-lan-jia-zai"},[e("a",{class:"header-anchor",href:"#shu-xing-shu-ju-yu-lan-jia-zai"}),t(" \u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D")],-1),hn=e("p",null,[t("\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u7684\u663E\u793A\u3002 \u5F53 row \u4E2D\u5305\u542B children \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\u3002 \u6E32\u67D3\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u5FC5\u987B\u8981\u6307\u5B9A row-key\u3002\u652F\u6301\u5B50\u8282\u70B9\u6570\u636E\u5F02\u6B65\u52A0\u8F7D\u3002 \u8BBE\u7F6E Table \u7684\u52A0\u8F7D\u51FD\u6570 load \u3002 \u901A\u8FC7\u6307\u5B9A row \u4E2D\u7684hasChildren\u5B57\u6BB5\u6765\u6307\u5B9A\u54EA\u4E9B\u884C\u662F\u5305\u542B\u5B50\u8282\u70B9\u3002 children\u4E0EhasChildren\u90FD\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"tree-props"),t(" \u914D\u7F6E\u3002"),e("code",null,"first-column-index"),t(" \u5C5E\u6027\u7528\u6765\u8BBE\u7F6E\u5C55\u5F00\u884C\u4E3A\u6240\u4F5C\u7528\u7684\u5217\u3002")],-1),bn=e("div",null,[e("p",null,[t("\u5F53children\u5B57\u6BB5\u6709\u6570\u7EC4\u503C\u65F6\uFF0C\u5C06\u4F1A\u5FFD\u7565hasChildren\u5B57\u6BB5\u3002"),e("em",null,[e("strong",null,[t("\u9700\u8981\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u65F6\uFF0C\u4E00\u5B9A\u8981\u8C28\u614E\u8BBE\u7F6E"),e("code",null,"default-expand-all"),t("\u5C5E\u6027\u4E3Atrue\u503C")])])])],-1),_n=e("h2",{id:"he-bing-xing-huo-lie"},[e("a",{class:"header-anchor",href:"#he-bing-xing-huo-lie"}),t(" \u5408\u5E76\u884C\u6216\u5217")],-1),En=e("p",null,"\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002",-1),gn=e("div",null,[e("p",null,"\u901A\u8FC7\u7ED9 table \u4F20\u5165span-method\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C \u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u5F53\u524D\u884C row\u3001\u5F53\u524D\u5217 column\u3001\u5F53\u524D\u884C\u53F7 rowIndex\u3001\u5F53\u524D\u5217\u53F7 columnIndex \u56DB\u4E2A\u5C5E\u6027\u3002 \u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u4EE3\u8868 rowspan\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4EE3\u8868 colspan\u3002 \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u4E3A rowspan \u548C colspan \u7684\u5BF9\u8C61\u3002")],-1),xn=e("h2",{id:"duo-ji-biao-tou"},[e("a",{class:"header-anchor",href:"#duo-ji-biao-tou"}),t(" \u591A\u7EA7\u8868\u5934")],-1),Dn=e("p",null,"\u6570\u636E\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\u7684\u65F6\u5019\uFF0C\u53EF\u4F7F\u7528\u591A\u7EA7\u8868\u5934\u6765\u5C55\u73B0\u6570\u636E\u7684\u5C42\u6B21\u5173\u7CFB\u3002",-1),fn=e("div",null,[e("p",null,[t("\u901A\u8FC7"),e("code",null,"cols"),t(" \u7684 "),e("code",null,"children"),t(" \u5C5E\u6027\u5D4C\u5957\u5B9E\u73B0\u591A\u7EA7\u8868\u5934")])],-1),Fn=e("h2",{id:"biao-wei-he-ji-xing"},[e("a",{class:"header-anchor",href:"#biao-wei-he-ji-xing"}),t(" \u8868\u5C3E\u5408\u8BA1\u884C")],-1),vn=e("p",null,"\u82E5\u8868\u683C\u5C55\u793A\u7684\u662F\u5404\u7C7B\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u8868\u5C3E\u663E\u793A\u5404\u5217\u7684\u5408\u8BA1\u3002",-1),Bn=e("div",null,[e("p",null,[t("\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 "),e("code",null,"foot"),t(" slot\u5B9E\u73B0")])],-1),Cn=e("h2",{id:"yin-cang-lie"},[e("a",{class:"header-anchor",href:"#yin-cang-lie"}),t(" \u9690\u85CF\u5217")],-1),wn=e("p",null,[e("code",null,"toggleColumn"),t(" \u65B9\u6CD5\u652F\u6301\u5BF9\u5217\u7684\u9690\u85CF\u6216\u8005\u663E\u793A\u64CD\u4F5C\u3002")],-1),yn=e("div",null,[e("p",null,"\u6682\u4E0D\u652F\u6301\u5BF9\u591A\u7EA7\u8868\u5934\u4EE5\u53CA\u5B58\u5728\u5408\u5E76\u5355\u5143\u683C\u7684\u8868\u683C\u8FDB\u884C\u64CD\u4F5C")],-1),An=e("h2",{id:"kong-shu-ju"},[e("a",{class:"header-anchor",href:"#kong-shu-ju"}),t(" \u7A7A\u6570\u636E")],-1),In=e("h2",{id:"wei-zhi-shu-ju"},[e("a",{class:"header-anchor",href:"#wei-zhi-shu-ju"}),t(" \u672A\u77E5\u6570\u636E")],-1),Nn=e("div",null,[e("p",null,[t("\u5728\u4F20\u9012\u7684\u6570\u636E\u4E3A "),e("code",null,"null"),t(" \u6216\u8005 "),e("code",null,"undefined"),t(" \u65F6\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49 "),e("code",null,"unknown"),t(" slot")])],-1),Sn=S('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>row-key</td><td>\u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 SimpleTable \u7684\u6E32\u67D3\u3002<em><strong>\u5982\u679C\u8868\u683C\u6570\u636E\u6807\u8BC6\u7B26\u4E0D\u662Fid\u5B57\u6BB5\uFF0C\u8BF7\u4E00\u5B9A\u8981\u8BBE\u7F6E\u6B64\u503C</strong></em></td><td>string / function(row): string</td><td>-</td><td>id</td></tr><tr><td>border</td><td>\u4E3A\u8868\u683C\u8BBE\u7F6E\u8FB9\u6846\u6837\u5F0F</td><td>string</td><td>borderless/bordered/border-x/border-y</td><td></td></tr><tr><td>padding</td><td>\u8BBE\u7F6E\u8868\u683C\u4E24\u7AEF\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>cell-padding</td><td>\u8BBE\u7F6ETd\u7684 padding \u5C3A\u5BF8</td><td>string</td><td>\u901A\u7528\u5C3A\u5BF8\u6807\u7B7E/\u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td></td></tr><tr><td>gap</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-x</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u6A2A\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>gap-y</td><td>list\u6A21\u5F0F\u4E0B\uFF0C\u8BBE\u7F6E\u8868\u683C\u884C\u7EB5\u5411\u95F4\u8DDD</td><td>string</td><td>css\u5C3A\u5BF8</td><td></td></tr><tr><td>hover</td><td>\u8868\u683C\u60AC\u505C\u6548\u679C</td><td>boolean</td><td></td><td></td></tr><tr><td>stripe</td><td>\u8868\u683C\u6761\u7EB9\u6548\u679C</td><td>boolean / string</td><td>true / false / odd / even</td><td>false</td></tr><tr><td>list</td><td>\u5217\u8868\u6837\u5F0F</td><td>boolean</td><td></td><td>false</td></tr><tr><td>auto-height</td><td>\u4F7FTh\u548CTd\u7684\u9AD8\u5EA6\u53D8\u4E3Aauto</td><td>boolean</td><td></td><td>false</td></tr><tr><td>fixed-header</td><td>\u56FA\u5B9A\u8868\u5934</td><td>boolean</td><td></td><td>-</td></tr><tr><td>fixed-footer</td><td>\u56FA\u5B9A\u8868\u5C3E</td><td>boolean</td><td></td><td>-</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>size</td><td>\u8868\u683C\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>resize</td><td>\u662F\u5426\u53EF\u4EE5\u62D6\u62FD\u8868\u5934\u6539\u53D8\u5217\u5BBD</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>scroll-container</td><td>\u8BBE\u7F6E\u56FA\u5B9A\u5217\u65F6\uFF0C\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u4E0D\u662F\u8868\u683C\u7684\u76F4\u63A5\u7236\u5143\u7D20\u6216\u8005Scrollbar\u7EC4\u4EF6\uFF0C\u9700\u8981\u8BBE\u7F6E\u6B64\u5C5E\u6027\uFF0C\u7528\u4EE5\u652F\u6301\u6EDA\u52A8\u65F6\u56FA\u5B9A\u5217\u9634\u5F71\u6548\u679C</td><td>string / HTMLElement</td><td>-</td><td>-</td></tr><tr><td>highlight-current-row</td><td>\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>expand-row-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\uFF0C\u540C\u65F6\u9002\u7528\u884C\u5C55\u5F00\u4E0E\u6811\u5C55\u5F00\u3002\u884C\u5C55\u5F00\u65F6\u7528\u884CrowKey+slotName\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7B26\uFF1B\u6811\u5C55\u5F00\u65F6\u4F7F\u7528rowKey\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7B26\u3002<em><strong>\u6570\u7EC4\u503C\u4E00\u5B9A\u662F\u5B57\u7B26\u4E32\u3002</strong></em></td><td>array</td><td>-</td><td>-</td></tr><tr><td>default-expand-all</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u884C\uFF0C\u5F53 SimpleTable \u5305\u542B\u5C55\u5F00\u884C\u5B58\u5728\u6216\u8005\u4E3A\u6811\u5F62\u8868\u683C\u65F6\u6709\u6548</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>row-class-name</td><td>\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>row-style</td><td>\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>cell-class-name</td><td>\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>cell-style</td><td>\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-row-class-name</td><td>\u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, rowIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-row-style</td><td>\u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, rowIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>header-cell-class-name</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / string</td><td>-</td><td>-</td></tr><tr><td>header-cell-style</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({ row, column, rowIndex, columnIndex }) / object</td><td>-</td><td>-</td></tr><tr><td>span-method</td><td>\u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ row, column, rowIndex, columnIndex })</td><td>-</td><td>-</td></tr><tr><td>first-column-index</td><td>\u6811\u5F62\u5C55\u5F00\u64CD\u4F5C\u4F5C\u7528\u7684\u5217</td><td>number</td><td>-</td><td>0</td></tr><tr><td>tree-props</td><td>\u6E32\u67D3\u5D4C\u5957\u6570\u636E\u7684\u914D\u7F6E\u9009\u9879</td><td>object</td><td>-</td><td><code>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>load</td><td>\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E\u7684\u51FD\u6570\uFF0C\u51FD\u6570\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5305\u542B\u4E86\u8282\u70B9\u7684\u5C42\u7EA7\u4FE1\u606F</td><td>function(row, treeNode, resolve)</td><td>-</td><td>-</td></tr><tr><td>cols</td><td>\u5217\u914D\u7F6E\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="cols"><a class="header-anchor" href="#cols"></a> cols</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>columnKey</td><td>\u5217key\uFF0C\u5982\u679C\u52A8\u6001\u5207\u6362\u8868\u683C\u5217\uFF0C\u9700\u8981\u8BBE\u7F6E\u6B64\u503C\u3002\u5426\u5219\u5217\u5BBD\u4F1A\u8BA1\u7B97\u9519\u8BEF</td><td>string</td><td></td><td></td></tr><tr><td>title</td><td>\u8868\u683C\u6807\u9898</td><td>string</td><td></td><td></td></tr><tr><td>prop</td><td>\u8868\u683C\u5217\u5C5E\u6027\u540D\u79F0</td><td>string</td><td></td><td></td></tr><tr><td>showTooltip</td><td>\u662F\u5426\u663E\u793A tooltip\uFF0C\u9700\u8981\u914D\u5408\u5217 width \u503C\u4F7F\u7528</td><td>boolean</td><td></td><td>false</td></tr><tr><td>tooltipProps</td><td>tooltip \u5C5E\u6027\uFF0C\u53C2\u8003 Popover \u7EC4\u4EF6</td><td>object</td><td></td><td></td></tr><tr><td>align</td><td>\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>min-width</td><td>\u6700\u5C0F\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>max-width</td><td>\u6700\u5927\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217</td><td>string / object</td><td>left / right / { position: string; distance: string; }</td><td>-</td></tr><tr><td>headerSlotName</td><td>\u5217\u5934 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A col\uFF0C\u8BF7\u53C2\u8003\u793A\u4F8B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>sortable</td><td>\u662F\u5426\u4E3A\u6392\u5E8F\u5217</td><td>boolean / string</td><td>true / false / &#39;ascending&#39; / &#39;descending&#39;</td><td>-</td></tr><tr><td>filter</td><td>\u5217\u7B5B\u9009\u8BBE\u7F6E</td><td>object{ slotName: string, placement: string, popperClass: string }</td><td>-</td><td>-</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u5217\u8BBE\u7F6E</td><td>object{ slotName: string, hideLabel: boolean }</td><td>-</td><td>-</td></tr><tr><td>children</td><td>\u5B50\u5217\u4FE1\u606F</td><td>array</td><td>-</td><td>-</td></tr><tr><td>formatter</td><td>\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9</td><td>function(row, column, cellValue, rowIndex, columnIndex)</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>row-click</td><td>\u884C\u5355\u51FB\u4E8B\u4EF6</td><td>row, rowIndex, event</td></tr><tr><td>cell-click</td><td>\u5355\u5143\u683C\u5355\u51FB\u4E8B\u4EF6</td><td>row, col, rowIndex, colIndex, event</td></tr><tr><td>sort-change</td><td>\u6392\u5E8F\u4E8B\u4EF6</td><td>prop, sort</td></tr><tr><td>current-change</td><td>\u5F53\u8868\u683C\u7684\u5F53\u524D\u884C\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u5982\u679C\u8981\u9AD8\u4EAE\u5F53\u524D\u884C\uFF0C\u8BF7\u6253\u5F00\u8868\u683C\u7684 highlight-current-row \u5C5E\u6027</td><td>currentRow, oldCurrentRow</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, rowkey, slotName</td></tr><tr><td>tree-expand</td><td>\u6811\u5C55\u5F00\u4E8B\u4EF6</td><td>expanded, row</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toggleExpand</td><td>\u5C55\u5F00/\u6298\u53E0\u884C\u3002\u7531\u4E8E\u6BCF\u884C\u53EF\u80FD\u6709\u591A\u4E2A\u5C55\u5F00\uFF0C\u6240\u4EE5\u9700\u8981\u4F20\u9012\u9700\u8981\u5C55\u5F00\u7684slotName</td><td>rowKey, slotName</td></tr><tr><td>toggleExpandTree</td><td>\u5C55\u5F00\u6811</td><td>row</td></tr><tr><td>toggleColumn</td><td>\u663E\u793A/\u9690\u85CF\u5217</td><td>index, show\uFF08show\u53EF\u9009\uFF09</td></tr><tr><td>setCurrentRow</td><td>\u7528\u4E8E\u5355\u9009\u8868\u683C\uFF0C\u8BBE\u5B9A\u67D0\u4E00\u884C\u4E3A\u9009\u4E2D\u884C\uFF0C \u5982\u679C\u8C03\u7528\u65F6\u4E0D\u52A0\u53C2\u6570\uFF0C\u5219\u4F1A\u53D6\u6D88\u76EE\u524D\u9AD8\u4EAE\u884C\u7684\u9009\u4E2D\u72B6\u6001</td><td>row</td></tr><tr><td>clearTooltip</td><td>\u9690\u85CFtooltip</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>empty</td><td>\u65E0\u6570\u636E\u65F6\u7684\u63D0\u793A</td></tr><tr><td>unknown</td><td>\u8868\u683C\u6570\u636E\u4E3Anull\u6216\u8005undefined\u65F6\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>more</td><td>\u4E0B\u62C9\u52A0\u8F7D\u65F6\uFF0C\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>foot</td><td>\u8868\u5C3E</td></tr></tbody></table>',10),zn={setup(g){const o="simple-table",n={"../../../examples/simple-table/basic.vue":M,"../../../examples/simple-table/border.vue":V,"../../../examples/simple-table/empty.vue":J,"../../../examples/simple-table/expand.vue":Q,"../../../examples/simple-table/filter.vue":ae,"../../../examples/simple-table/fixed-all.vue":re,"../../../examples/simple-table/fixed-column.vue":me,"../../../examples/simple-table/fixed-header.vue":Ee,"../../../examples/simple-table/fixed-row.vue":fe,"../../../examples/simple-table/foot.vue":Be,"../../../examples/simple-table/header.vue":ye,"../../../examples/simple-table/hide-column.vue":Te,"../../../examples/simple-table/highlight.vue":Pe,"../../../examples/simple-table/hover.vue":Re,"../../../examples/simple-table/list.vue":We,"../../../examples/simple-table/load-more.vue":Ke,"../../../examples/simple-table/multi-header.vue":qe,"../../../examples/simple-table/padding.vue":et,"../../../examples/simple-table/resize.vue":lt,"../../../examples/simple-table/size.vue":at,"../../../examples/simple-table/sortable.vue":rt,"../../../examples/simple-table/span-method.vue":pt,"../../../examples/simple-table/stripe.vue":ht,"../../../examples/simple-table/tree.vue":Dt,"../../../examples/simple-table/unknown.vue":vt};return(c,p)=>{const u=i("demo-block"),d=i("right-nav");return m(),v(B,null,[e("section",null,[Bt,Ct,wt,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/basic","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    @row-click="rowClicked"
    @cell-click="cellClicked"
  >
    <template #firstCol>
      <hl-checkbox v-model="selectedAll" :indeterminate="isIndeterminate" @change="selectAll" />
    </template>
    <template #tableIndex="{ row }">
      <hl-checkbox v-model="selectedRows" :label="row.id" @change="selectRow(row.id)">{{ '' }}</hl-checkbox>
    </template>

    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const selectedAll = ref(false)
const selectedRows = ref([])
const isIndeterminate = ref(false)

const tableData = ref([
  {
    id: 1,
    name: '\u8303\u67CF\u5E90',
    sex: '\u5973',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EAUED\u7684\u8BBE\u8BA1',
  },
  {
    id: 2,
    name: '\u59DC\u519B\u7ED3',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u949E\u6D0B',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol', width: '3em' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org', align: 'center' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const selectAll = () => {
  if (selectedAll.value) {
    selectedRows.value.splice(0, selectedRows.value.length)
    selectedRows.value.push(...tableData.value.map(d => d.id))
    isIndeterminate.value = false
  } else {
    selectedRows.value.splice(0, selectedRows.value.length)
  }
}
const selectRow = () => {
  selectedAll.value = selectedRows.value.length === tableData.value.length
  if (selectedRows.value.length > 0 && selectedAll.value == false) {
    isIndeterminate.value = true
  } else {
    isIndeterminate.value = false
  }
}
const rowClicked = (row, rowIndex, event) => {
  console.log('rowClicked', row, rowIndex, event)
}
const cellClicked = (row, col, rowIndex, colIndex, event) => {
  console.log('cellClicked', row, col, rowIndex, colIndex, event)
}

<\/script>
`},null,8,["demos"]),yt,At,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/border","source-code":`<template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-simple-table :cols="cols" :data="tableData" :border="value" padding="0">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])
const options = ref([
  {
    value: 'borderless',
    label: 'borderless',
  },
  {
    value: 'border-x',
    label: 'border-x',
  },
  {
    value: 'border-y',
    label: 'border-y',
  },
  {
    value: 'bordered',
    label: 'bordered',
  },
])
const value = ref('borderless')

<\/script>
`},null,8,["demos"]),It,Nt,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/padding","source-code":`<template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9\u8868\u683C\u586B\u5145" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-select v-model="value2" clearable placeholder="\u8BF7\u9009\u62E9\u5355\u5143\u683C\u586B\u5145" class="m-l-md m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="border-x"
    :padding="value"
    :cell-padding="value2"
  >
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])
const options = ref([
  {
    value: '0',
    label: 'none',
  },
  {
    divider: true,
  },
  {
    value: 'var(--sm)',
    label: 'sm',
  },
  {
    value: 'var(--md)',
    label: 'md',
  },
  {
    value: 'var(--lg)',
    label: 'lg',
  },
  {
    value: 'var(--xl)',
    label: 'xl',
  },
  {
    value: 'var(--xxl)',
    label: 'xxl',
  },
])
const value = ref('0')
const value2 = ref('0')

<\/script>
`},null,8,["demos"]),St,kt,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/hover","source-code":`<template>
  <hl-simple-table :cols="cols" :data="tableData" hover>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

<\/script>
`},null,8,["demos"]),Tt,jt,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/stripe","source-code":`<template>
  <hl-simple-table :cols="cols" :data="tableData" stripe>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

<\/script>
`},{default:l(()=>[Ot]),_:1},8,["demos"]),$t,zt,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/size","source-code":`<template>
  <hl-select v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" class="m-b-md">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
  </hl-select>

  <hl-simple-table
    :cols="cols"
    :data="tableData"
    :size="value"
    class="borderless-last"
  >
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])
const options = ref([
  {
    value: 'sm',
    label: 'sm',
  },
  {
    value: 'md',
    label: 'md',
  },
  {
    value: 'lg',
    label: 'lg',
  },
])
const value = ref('md')

<\/script>
`},null,8,["demos"]),Pt,Ut,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/resize","source-code":`<template>
  <hl-simple-table :cols="cols" :data="tableData" border="bordered" resize>
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex', width:'4em' },
  { title: '\u7528\u6237\u540D', prop: 'name', width:'8em' },
  { title: '\u6027\u522B', prop: 'sex', width:'4em' },
  { title: '\u5355\u4F4D', prop: 'org', width:'' },
  { title: '\u7B80\u4ECB', prop: 'des', width:'' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center', width:'6em' },
])

<\/script>
`},null,8,["demos"]),Mt,Rt,a(u,{fs:"",dark:"",demos:_(n),"component-id":o,"path-name":"simple-table/list","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    list
    gap-y="var(--xs)"
  >
    <template #tableIndex="{ row }">
      <hl-icon
        type="danger"
        fill
        radius
      >
        <component
          :is="'Two' + row.icon"
        />
      </hl-icon>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
    icon: 'Briefcase',
  },
  {
    id: 2,
    name: '\u674E\u56DB',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD',
    icon: 'ChartPie',
  },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
    icon: 'Archive',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

<\/script>
`},{default:l(()=>[Lt]),_:1},8,["demos"]),Vt,Wt,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/fixed-header","source-code":`<template>
  <div class="table-scroll" style="height: 200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="bordered"
      fixed-header
    >
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

<\/script>
`},null,8,["demos"]),Jt,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/fixed-column","source-code":`<template>
  <div class="table-scroll scroll-column">
    <hl-simple-table :cols="cols" :data="tableData" border="border-x">
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
    no: '478343',
    level: 'P8',
    years: 10,
  },
  {
    id: 2,
    name: '\u674E\u56DB',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD',
    no: '238343',
    level: 'P6',
    years: 3,
  },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
    no: '178343',
    level: 'P7',
    years: 5,
  },
])
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex', fixed: 'left', minWidth: '50px' },
  { title: '\u59D3\u540D', prop: 'name', showTooltip: true, minWidth: '150px' },
  { title: '\u6027\u522B', prop: 'sex', width: '50px' },
  { title: '\u5DE5\u53F7', prop: 'no', showTooltip: true, minWidth: '120px', fixed: { position: 'left', distance: '50px' } },
  { title: '\u804C\u7EA7', prop: 'level', showTooltip: true },
  { title: '\u53F8\u9F84', prop: 'years', showTooltip: true },
  { title: '\u63CF\u8FF0', prop: 'des', showTooltip: true, minWidth: '400px' },
  { title: '\u5355\u4F4D', prop: 'org', showTooltip: true, minWidth: '150px', fixed: { position: 'right', distance: '70px' } },
  {
    title: '\u64CD\u4F5C',
    prop: '',
    slotName: 'handle',
    align: 'center',
    fixed: 'right',
  },
])

<\/script>
`},null,8,["demos"]),Gt,Ht,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/fixed-row","source-code":`<template>
  <div class="table-scroll" style="height: 200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="border-x"
      fixed-header
      :cell-style="cellStyle"
    >
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

let idx = 0
const row = {
  name: '\u738B\u4E8C\u9EBB\u5B50',
  sex: '\u7537',
  org: '\u4E2D\u56FD\u7CFB\u7EDF',
  des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
}
const tableData = ref(new Array(22).fill(0).map(_ => Object.assign(JSON.parse(JSON.stringify(row)), { id: idx++ })))
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
  { title: '\u59D3\u540D', prop: 'name', showTooltip: true, width: '100px' },
  { title: '\u6027\u522B', prop: 'sex', width: '50px' },
  { title: '\u5355\u4F4D', prop: 'org', showTooltip: true, width: '150px' },
  { title: '\u63CF\u8FF0', prop: 'des', showTooltip: true, width: '400px' },
  { title: '\u64CD\u4F5C', prop: '', slotName: 'handle', align: 'center' },
])

// \u56FA\u5B9A5\u500D\u6570\u7684\u884C
const cellStyle = ({ rowIndex }) => {
  return rowIndex % 5 === 0 ? {
    backgroundColor: 'var(--bg-light)',
    zIndex: 10,
    position: 'sticky',
    top: \`48px\`, // 48\u4E3A\u8868\u683C\u5934\u7684\u9AD8\u5EA6
  } : {}
}
<\/script>
`},null,8,["demos"]),Kt,Qt,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/fixed-all","source-code":`<template>
  <hl-scrollbar height="200px">
    <hl-simple-table
      :cols="cols"
      :data="tableData"
      border="border-x"
      fixed-header
    >
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
    </hl-simple-table>
  </hl-scrollbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  { id: 1, name: '\u8D39\u6587\u8F69', sex: '\u7537', org: '18933867329', des: '\u5B89\u5FBD\u7701\u516D\u5B89\u5E02\u4E1C\u6E2F\u9547\u6E2F\u4E0B\u9521\u6E2F\u4E1C\u8DEF8\u680B1204\u5BA4' },
  { id: 2, name: '\u5218\u6797', sex: '\u7537', org: '18981484641', des: '\u5185\u8499\u9521\u6797\u6D69\u7279\u5E02\u5317\u516D\u95E8\u6751\u5357\u6CB3\u88578\u680B1204\u5BA4' },
  { id: 3, name: '\u91D1\u73A5\u50B2', sex: '\u7537', org: '13000688905', des: '\u9ED1\u9F99\u6C5F\u7701\u5317\u5B89\u5E02\u4E09\u5C94\u8DEF\u6D66\u6C85\u5BBF\u820D131\u53F7' },
  { id: 4, name: '\u738B\u6B66', sex: '\u7537', org: '13102220035', des: '\u6E56\u5317\u7701\u6D2A\u6E56\u5E02\u4E1C\u4E94\u6761\u8DEF\u6797\u673A\u5C0F\u533A948\u53F7' },
  { id: 5, name: '\u535E\u5609\u6021', sex: '\u5973', org: '17022218210', des: '\u5C71\u4E1C\u7701\u62DB\u8FDC\u5E02\u5E76\u5DDE\u5317\u8DEF2\u67618\u53F7' },
  { id: 6, name: '\u548C\u6587\u6770', sex: '\u7537', org: '13548097666', des: '\u9655\u897F\u7701\u5B89\u5EB7\u5E02\u91D1\u56FD\u91CC506\u53F7517\u623F' },
  { id: 7, name: '\u6F58\u745E\u5802', sex: '\u7537', org: '13065726257', des: '\u5B89\u5FBD\u7701\u5929\u957F\u5E02\u91D1\u971E\u8857\u9053\u56FD\u9645\u5546\u4E1A\u4E2D\u5FC3121\u53F7' },
  { id: 8, name: '\u5173\u723D', sex: '\u5973', org: '13570593023', des: '\u56DB\u5DDD\u7701\u7B80\u9633\u5E02\u524D\u8FDB\u8DEF506\u53F7517\u623F' },
])
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '#', prop: '', slotName: 'tableIndex', minWidth: '4em' },
  { title: '\u59D3\u540D', prop: 'name', minWidth: '7em', fixed: 'left' },
  { title: '\u6027\u522B', prop: 'sex', minWidth: '6em' },
  { title: '\u624B\u673A\u53F7', prop: 'org', minWidth: '10em' },
  { title: '\u4F4F\u5740', prop: 'des', minWidth: '26em' },
  {
    title: '\u64CD\u4F5C',
    prop: '',
    slotName: 'handle',
    align: 'center',
    fixed: 'right',
  },
])

<\/script>
`},null,8,["demos"]),Xt,qt,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/load-more","source-code":`<template>
  <hl-scrollbar style="height: 200px" @at-end="loadMore">
    <hl-simple-table :cols="cols" :data="tableData" border="border-x" fixed-header>
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <hl-button type="link">\u4FEE\u6539</hl-button>
      </template>
      <template v-if="hadMoreData" #more>
        <template v-if="loading">
          <hl-group align="items-middle" gap="var(--xs)">
            <hl-spinner size="sm" />
            <span>\u6B63\u5728\u52A0\u8F7D...</span>
          </hl-group>
        </template>
      </template>
    </hl-simple-table>
  </hl-scrollbar>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

let count = 1
function id() {
  return count++
}
const data = [
  {
    id: id(),
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: id(), name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: id(),
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
]

const loading = ref(false)
const tableData = ref(JSON.parse(JSON.stringify(data)))
const cols = ref([
  { title: '#', slotName: 'tableIndex', width: '8%' },
  { title: '\u7528\u6237\u540D', prop: 'name', width: '15%' },
  { title: '\u6027\u522B', prop: 'sex', width: '8%' },
  { title: '\u5355\u4F4D', prop: 'org', width: '20%' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center', width: '10%' },
])

const hadMoreData = computed(() => tableData.value.length < 12)
const loadMore = () => {
  if (loading.value || !hadMoreData.value) return
  loading.value = true
  window.setTimeout(() => {
    const moreData = JSON.parse(JSON.stringify(data))
    moreData.forEach(d => {
      d.id = id()
      d.name = d.name + d.id
    })
    tableData.value.push(...moreData)
    loading.value = false
  }, 300)
}

<\/script>
`},null,8,["demos"]),Yt,Zt,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/header","source-code":`<template>
  <hl-simple-table :cols="cols" :data="tableData" hover :show-header="false">
    <template #tableIndex="{ rowIndex }">
      <span>{{ rowIndex + 1 }}</span>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: 1,
    name: '\u738B\u4E8C\u9EBB\u5B50',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
  },
  { id: 2, name: '\u674E\u56DB', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EA\u4E2D\u56FD' },
  {
    id: 3,
    name: '\u5F20\u4E09',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
  },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])
<\/script>
`},null,8,["demos"]),en,tn,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/sortable","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    @sort-change="sortChange"
  >
    <template #index>
      \u81EA\u5B9A\u4E49\u5217
      <HlSimpleTable.SortableIcon sortable @sort-change="val => sortChange('id', val)" />
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { HlSimpleTable } from 'hongluan-ui'

const defaultData = [
  {
    id: 1,
    name: '\u8303\u767D\u9732',
    sex: '\u5973',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u671D\u9633',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
]
const tableData = ref(JSON.parse(JSON.stringify(defaultData)))
const cols = ref([
  { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },
  { title: '\u7528\u6237\u540D', prop: 'name', sortable: true },
  { title: '\u6027\u522B', prop: 'sex', sortable: false },
  { title: '\u5355\u4F4D', prop: 'org', sortable: 'descending' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    sortable: 'ascending',
  },
])

const sortChange = (prop, sort) => { // \u4EC5\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u5B9E\u9645\u9879\u76EE\u9700\u8981\u901A\u8FC7\u8C03\u53D6\u540E\u53F0API\u5B9E\u73B0
  console.log('soring...', prop, sort)
  if (sort) {
    tableData.value.sort((d1, d2) => {
      const result = String(d1[prop]).localeCompare(String(d2[prop]))
      return sort === 'ascending' ? result : result * -1
    })
  } else {
    tableData.value = JSON.parse(JSON.stringify(defaultData))
  }
}

<\/script>
`},{default:l(()=>[nn]),_:1},8,["demos"]),ln,on,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/filter","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
  >
    <template #filterSlot="{ close }">
      <hl-checkbox-group v-model="selectedItems" dir="vertical" gap="var(--md)" block>
        <hl-checkbox label="1">\u6761\u4EF61</hl-checkbox>
        <hl-checkbox label="2">\u6761\u4EF62</hl-checkbox>
        <hl-checkbox label="3">\u6761\u4EF63</hl-checkbox>
      </hl-checkbox-group>
      <hl-button type="primary" size="sm" class="m-t-md" @click="close">\u786E\u5B9A</hl-button>
    </template>
    <template #index>
      \u81EA\u5B9A\u4E49\u5217
      <HlSimpleTable.FilterIcon placement="right">
        <template #default="{ close }">
          <hl-checkbox-group v-model="selectedItems" dir="vertical" gap="var(--md)" block>
            <hl-checkbox label="1">\u6761\u4EF61</hl-checkbox>
            <hl-checkbox label="2">\u6761\u4EF62</hl-checkbox>
            <hl-checkbox label="3">\u6761\u4EF63</hl-checkbox>
          </hl-checkbox-group>
          <hl-button type="primary" size="sm" class="m-t-md" @click="close">\u786E\u5B9A</hl-button>
        </template>
      </HlSimpleTable.FilterIcon>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { HlSimpleTable } from 'hongluan-ui'

const tableData = ref([
  {
    id: 1,
    name: '\u8303\u767D\u9732',
    sex: '\u5973',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u671D\u9633',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
])
const cols = ref([
  { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },
  {
    title: '\u7528\u6237\u540D',
    prop: 'name',
    sortable: true,
    filter: {
      slotName: 'filterSlot',
      placement: 'top',
      popperClass: 'test-filter-slot',
    },
  },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    filter: { slotName: 'filterSlot' },
  },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const selectedItems = ref([])

<\/script>
`},{default:l(()=>[un]),_:1},8,["demos"]),an,sn,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/highlight","source-code":`<template>
  <hl-simple-table
    ref="tableRef"
    :cols="cols"
    :data="tableData"
    highlight-current-row
    @current-change="currentChange"
    @row-click="rowClick"
  />
  <br>
  <hl-button class="m-r-md" @click="setCurrent(tableData[0])">\u9009\u4E2D\u7B2C\u4E00\u884C</hl-button>
  <hl-button @click="setCurrent()">\u53D6\u6D88\u9009\u62E9</hl-button>
</template>
<script setup lang="ts">
import { ref } from 'vue'


const tableRef = ref()
const tableData = ref([
  {
    id: 1,
    name: '\u8303\u767D\u9732',
    sex: '\u5973',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u671D\u9633',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
])
const cols = ref([
  { title: '\u5E8F\u53F7', prop: 'id', headerSlotName: 'index' },
  {
    title: '\u7528\u6237\u540D',
    prop: 'name',
    sortable: true,
    filter: {
      slotName: 'filterSlot',
      placement: 'top',
      popperClass: 'test-filter-slot',
    },
  },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
    filter: { slotName: 'filterSlot' },
  },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const currentChange = (now, old) => {
  console.log(now, old)
}
const rowClick = () => {
  console.log('row-click')
}
const setCurrent = row => {
  tableRef.value.setCurrentRow(row)
}

<\/script>
`},{default:l(()=>[dn]),_:1},8,["demos"]),rn,pn,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/expand","source-code":`<template>
  <hl-simple-table
    ref="tableRef"
    :cols="cols"
    :data="tableData"
    :expand-row-keys="['1index', '2nameExpand']"
  >
    <template #index="{ row }">
      <p>{{ row.org }} / {{ row.des }}</p>
    </template>
    <template #name="{ row }">
      <a href="javascript:;" @click="expand(row)">\u70B9\u6211\u5C55\u5F00</a> / {{ row.name }}
    </template>
    <template #nameExpand>
      <p>\u624B\u5DE5\u5C55\u5F00\u6570\u636E</p>
    </template>
    <template #des="{ row }">
      <p>{{ row.sex }} / {{ row.des }}</p>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableRef = ref()
const tableData = ref([
  {
    id: 1,
    name: '\u8303\u767D\u9732',
    sex: '\u5973',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u671D\u9633',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
])
const cols = ref([
  { title: '#', prop: 'id', expand: { slotName: 'index', hideLabel: true } },
  { title: '\u7528\u6237\u540D', prop: 'name', slotName: 'name', expand: { slotName: 'nameExpand' } },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    expand: { slotName: 'des' },
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const expand = row => {
  tableRef.value.toggleExpand(row.id, 'nameExpand')
}

<\/script>
`},{default:l(()=>[cn]),_:1},8,["demos"]),mn,hn,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/tree","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    :load="load"
    :expand-row-keys="['1']"
  >
    <template #tableIndex="{ row }">
      <span>{{ row.id }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
  <br><br>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    :load="load"
    :expand-row-keys="['1']"
    :first-column-index="1"
  >
    <template #tableIndex="{ row }">
      <span>{{ row.id }}</span>
    </template>
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

let count = 10000
const tableData = ref()
const cols = ref([
  { title: 'ID', slotName: 'tableIndex' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des', width: '220px', showTooltip: true },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const load = (row, node, resolve) => {
  window.setTimeout(() => {
    resolve([
      {
        id: count++,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
        hasChildren: true,
      },
      {
        id: count++,
        name: '\u738B\u4E8C\u9EBB\u5B50',
        sex: '\u7537',
        org: '\u4E2D\u56FD\u7CFB\u7EDF',
        des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
        children: [
          {
            id: count++,
            name: '\u738B\u4E8C\u9EBB\u5B50',
            sex: '\u7537',
            org: '\u4E2D\u56FD\u7CFB\u7EDF',
            des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
          },
        ],
      },
    ])
  }, 3000)
}

window.setTimeout(() => {
  tableData.value = [
    {
      id: 1,
      name: '\u738B\u4E8C\u9EBB\u5B50',
      sex: '\u7537',
      org: '\u4E2D\u56FD\u7CFB\u7EDF',
      des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
      children: [
        {
          id: 11,
          name: '\u738B\u4E8C\u9EBB\u5B5011',
          sex: '\u7537',
          org: '\u4E2D\u56FD\u7CFB\u7EDF',
          des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
          children: [
            {
              id: 111,
              name: '\u738B\u4E8C\u9EBB\u5B50111',
              sex: '\u7537',
              org: '\u4E2D\u56FD\u7CFB\u7EDF',
              des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
            },
            {
              id: 112,
              name: '\u738B\u4E8C\u9EBB\u5B50112',
              sex: '\u7537',
              org: '\u4E2D\u56FD\u7CFB\u7EDF',
              des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
            },
          ],
        },
        {
          id: 12,
          name: '\u738B\u4E8C\u9EBB\u5B5012',
          sex: '\u7537',
          org: '\u4E2D\u56FD\u7CFB\u7EDF',
          des: '\u6765\u81EA\u4E2D\u56FD\u5357\u65B9\u7684\u6E29\u6696\u57CE\u5E02\uFF01',
          children: [],
        },
      ],
    },
    {
      id: 2,
      name: '\u674E\u56DB',
      sex: '\u7537',
      org: '\u4E2D\u56FD\u7CFB\u7EDF',
      des: '\u6765\u81EA\u4E2D\u56FD',
      hasChildren: true,
    },
    {
      id: 3,
      name: '\u5F20\u4E09',
      sex: '\u7537',
      org: '\u4E2D\u56FD\u7CFB\u7EDF',
      des: '\u6765\u81EA\u4E2D\u56FD\u5317\u65B9\u7684\u5BD2\u51B7\u7684\u57CE\u5E02\uFF01',
    },
  ]
}, 100)

<\/script>
`},{default:l(()=>[bn]),_:1},8,["demos"]),_n,En,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/span-method","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
    :span-method="arraySpanMethod"
  />
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
    class="m-t-md"
    :span-method="objectSpanMethod"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
])
const cols = ref([
  { title: 'id', prop: 'id' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: 'Amount1', prop: 'amount1' },
  { title: 'Amount2', prop: 'amount2' },
  { title: 'Amount3', prop: 'amount3' },
])

const arraySpanMethod = ({ rowIndex, columnIndex }) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

const objectSpanMethod = ({ rowIndex, columnIndex }) => {
  if (columnIndex === 0) {
    if (rowIndex % 2 === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      }
    }
  }
}

<\/script>
`},{default:l(()=>[gn]),_:1},8,["demos"]),xn,Dn,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/multi-header","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
  >
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])
const cols = ref([
  { title: '\u65E5\u671F', prop: 'date' },
  {
    title: '\u914D\u9001\u4FE1\u606F',
    prop: 'delivery',
    children: [
      { title: '\u59D3\u540D', prop: 'name' },
      {
        title: '\u5730\u5740\u4FE1\u606F',
        prop: 'address',
        children: [
          { title: '\u7701/\u5E02', prop: 'state' },
          { title: '\u57CE\u5E02', prop: 'city' },
          { title: '\u5730\u5740', prop: 'address' },
          { title: '\u64CD\u4F5C', prop: 'zip', slotName: 'handle' },
        ],
      },
    ],
  },
])

<\/script>
`},{default:l(()=>[fn]),_:1},8,["demos"]),Fn,vn,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/foot","source-code":`<template>
  <hl-simple-table
    :cols="cols"
    :data="tableData"
    border="bordered"
  >
    <template #foot>
      <tr>
        <td colspan="2"><strong>\u5408\u8BA1</strong></td>
        <td>\uFFE53232</td>
        <td>\uFFE51212.22</td>
        <td>\uFFE590.22</td>
      </tr>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
])
const cols = ref([
  { title: 'id', prop: 'id' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: 'Amount1', prop: 'amount1' },
  { title: 'Amount2', prop: 'amount2' },
  { title: 'Amount3', prop: 'amount3' },
])
<\/script>
`},{default:l(()=>[Bn]),_:1},8,["demos"]),Cn,wn,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/hide-column","source-code":`<template>
  <hl-simple-table
    ref="simpleTableRef"
    :cols="cols"
    :data="tableData"
  >
    <template #handle>
      <a>\u4FEE\u6539</a>
    </template>
  </hl-simple-table>
  <br><br>
  <hl-button type="primary" @click="toggleColumn">\u9690\u85CF/\u663E\u793A\u7B2C3\u5217</hl-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const simpleTableRef = ref()
const tableData = ref([
  {
    id: 1,
    name: '\u8303\u767D\u9732',
    sex: '\u5973',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1\u5E08\u6765\u81EA\u5B89\u5168\u5E94\u6025UED\u7684\u8BBE\u8BA1',
  },
  {
    id: 2,
    name: 'xxx',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08',
  },
  {
    id: 3,
    name: '\u738B\u671D\u9633',
    sex: '\u7537',
    org: '\u4E2D\u56FD\u7CFB\u7EDF',
    des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08',
  },
])
const cols = ref([
  { title: '#', prop: 'id' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org', align: 'center' },
  {
    title: '\u7B80\u4ECB',
    prop: 'des',
    showTooltip: true,
    width: '40%',
    tooltipProps: { width: '200px', popperClass: 'test-tip' },
  },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
])

const toggleColumn = () => {
  simpleTableRef.value.toggleColumn(2)
}

<\/script>
`},{default:l(()=>[yn]),_:1},8,["demos"]),An,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/empty","source-code":`<template>
  <hl-simple-table :cols="cols" border="border-x" :data="tableData" />
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([])
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
  { title: '\u59D3\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u64CD\u4F5C', prop: '', align: 'center' },
])

<\/script>
`},null,8,["demos"]),In,a(u,{fs:"",demos:_(n),"component-id":o,"path-name":"simple-table/unknown","source-code":`<template>
  <hl-simple-table :cols="cols" border="border-x" :data="tableData">
    <template #unknown>
      <p style="text-align: center;">\u53EF\u80FD\u6570\u636E\u62A5\u9519\u4E86\u54E6~</p>
    </template>
  </hl-simple-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref(null)
// \u5E8F\u53F7 slot\u540D\u79F0\u552F\u4E00 tableIndex\u3002 width: \u8BBE\u7F6E\u5BBD\u5EA6\u3002align: \u5BF9\u9F50\u65B9\u5F0F\u3002showTooltip: td\u662F\u5426\u4E00\u884C\u663E\u793A,\u8D85\u51FAtooptip
const cols = ref([
  { title: '\u5E8F\u53F7', prop: '', slotName: 'tableIndex' },
  { title: '\u59D3\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u64CD\u4F5C', prop: '', align: 'center' },
])

<\/script>
`},{default:l(()=>[Nn]),_:1},8,["demos"]),Sn]),a(d)],64)}}};export{zn as default};
