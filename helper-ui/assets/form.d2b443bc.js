import{p as E,U as $,F as n,L as k,C as B,P as l,X as e,V as _,Q as o,M as r,R as F,W as I,ae as N,a7 as O,a1 as C,o as M}from"./vue.d3316dca.js";import{c as T}from"./helper-icons.4adfdd39.js";import{H as L}from"./index.ee32a861.js";import"./vendor.a3b1f0f2.js";import"./highlight.06dca650.js";const W=o("p",null,'"Full Name" label is automatically attached to the input:',-1),H=o("p",null,[r(' "Your Information" serves as a label for the group of inputs. '),o("br"),r(' You must specify labels on the individal inputs. Placeholders are not replacements for using the "label" attribute. ')],-1),Y=E({setup(A){const t=$({fullName:"",firstName:"",lastName:""});return(i,m)=>{const s=n("hl-alert"),a=n("hl-input"),d=n("hl-form-item"),f=n("hl-group"),c=n("hl-form");return k(),B(c,{"labhl-position":"left","label-width":"150px",style:{"max-width":"460px"}},{default:l(()=>[e(f,{gap:"var(--md)"},{default:l(()=>[e(s,{type:"info","show-icon":"",closable:!1},{default:l(()=>[W]),_:1}),e(d,{label:"Full Name"},{default:l(()=>[e(a,{modelValue:_(t).fullName,"onUpdate:modelValue":m[0]||(m[0]=u=>_(t).fullName=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{gap:"var(--md)"},{default:l(()=>[e(s,{type:"info","show-icon":"",closable:!1},{default:l(()=>[H]),_:1}),e(d,{label:"Your Information"},{default:l(()=>[e(a,{modelValue:_(t).firstName,"onUpdate:modelValue":m[1]||(m[1]=u=>_(t).firstName=u),label:"First Name",placeholder:"First Name"},null,8,["modelValue"]),e(a,{modelValue:_(t).lastName,"onUpdate:modelValue":m[2]||(m[2]=u=>_(t).lastName=u),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}});var J=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));const X=r("\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"),G=r("\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"),Q=r("\u7ACB\u5373\u521B\u5EFA"),K=r("\u53D6\u6D88"),Z=E({setup(A){const t=$({name:"",region:"shanghai",date1:"",type:[],resource:"1",desc:""}),i=()=>{console.log("submit!")};return(m,s)=>{const a=n("hl-input"),d=n("hl-form-item"),f=n("hl-option"),c=n("hl-select"),u=n("hl-date-picker"),p=n("hl-radio"),h=n("hl-radio-group"),b=n("hl-button"),y=n("hl-form");return k(),B(y,{model:_(t),width:["col-6","col-15"],"label-position":["items-right","items-middle"],"item-gap":"var(--md)"},{default:l(()=>[e(d,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:l(()=>[e(a,{modelValue:_(t).name,"onUpdate:modelValue":s[0]||(s[0]=g=>_(t).name=g),placeholder:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(c,{modelValue:_(t).region,"onUpdate:modelValue":s[1]||(s[1]=g=>_(t).region=g),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(f,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(f,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:l(()=>[e(u,{modelValue:_(t).date1,"onUpdate:modelValue":s[2]||(s[2]=g=>_(t).date1=g),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",class:"m-r-sm"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:l(()=>[e(h,{modelValue:_(t).resource,"onUpdate:modelValue":s[3]||(s[3]=g=>_(t).resource=g),type:"primary"},{default:l(()=>[e(p,{label:"1"},{default:l(()=>[X]),_:1}),e(p,{label:"2"},{default:l(()=>[G]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:l(()=>[e(a,{modelValue:_(t).desc,"onUpdate:modelValue":s[4]||(s[4]=g=>_(t).desc=g),"native-type":"textarea",rows:3,block:""},null,8,["modelValue"])]),_:1}),e(d,{offset:"offset-6"},{default:l(()=>[e(b,{type:"primary",class:"m-r-md",onClick:i},{default:l(()=>[Q]),_:1}),e(b,null,{default:l(()=>[K]),_:1})]),_:1})]),_:1},8,["model"])}}});var ee=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));const le=r("\u63D0\u4EA4"),te=r("\u65B0\u589E\u57DF\u540D"),oe=E({setup(A){const t=F({domains:[{value:"",key:-1}],email:""}),i=F(null),m=()=>{i.value.validate(d=>{if(d)alert("submit!");else return console.log("error submit!!"),!1})},s=d=>{var f=t.value.domains.indexOf(d);f!==-1&&t.value.domains.splice(f,1)},a=()=>{t.value.domains.push({value:"",key:Date.now()})};return(d,f)=>{const c=n("hl-input"),u=n("hl-form-item"),p=n("hl-icon"),h=n("hl-button"),b=n("hl-form");return k(),B(b,{ref_key:"dynamicValidateFormRef",ref:i,model:t.value,width:["md:col-4","col"]},{default:l(()=>[e(u,{prop:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740",trigger:"blur"},{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",trigger:["blur","change"]}]},{default:l(()=>[e(c,{modelValue:t.value.email,"onUpdate:modelValue":f[0]||(f[0]=y=>t.value.email=y)},null,8,["modelValue"])]),_:1}),(k(!0),I(C,null,N(t.value.domains,(y,g)=>(k(),B(u,{key:y.key,label:"\u57DF\u540D"+g,prop:"domains."+g+".value",rules:{required:!0,message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}},{default:l(()=>[e(c,{modelValue:y.value,"onUpdate:modelValue":V=>y.value=V},null,8,["modelValue","onUpdate:modelValue"]),e(h,{type:"primary",effect:"light",class:"m-l-sm",equal:"",onClick:O(V=>s(y),["prevent"])},{icon:l(()=>[e(p,null,{default:l(()=>[e(_(T))]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["label","prop"]))),128)),e(u,{label:" "},{default:l(()=>[e(h,{type:"primary",class:"m-r-sm",onClick:f[1]||(f[1]=y=>m())},{default:l(()=>[le]),_:1}),e(h,{class:"m-r-sm",onClick:a},{default:l(()=>[te]),_:1})]),_:1})]),_:1},8,["model"])}}});var ne=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));const ae=E({setup(A){const t=F({user:"",region:""});return(i,m)=>{const s=n("hl-input"),a=n("hl-form-item"),d=n("hl-option"),f=n("hl-select"),c=n("hl-form");return k(),I(C,null,[e(c,{model:t.value,width:["col-24","col-24"],class:"hl-row grid grid-direction-vertical xl:count-3 lg:count-2",style:{"--row-gap-y":"var(--md)","--row-gap-x":"var(--md)"}},{default:l(()=>[e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:t.value.user,"onUpdate:modelValue":m[0]||(m[0]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(f,{modelValue:t.value.region,"onUpdate:modelValue":m[1]||(m[1]=u=>t.value.region=u),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:l(()=>[e(d,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(d,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:t.value.user,"onUpdate:modelValue":m[2]||(m[2]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:t.value.user,"onUpdate:modelValue":m[3]||(m[3]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:t.value.user,"onUpdate:modelValue":m[4]||(m[4]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:t.value.user,"onUpdate:modelValue":m[5]||(m[5]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),e(c,{model:t.value,width:["col-5","col-19"],gap:"var(--md)",class:"hl-row grid grid-direction-vertical xl:count-2 lg:count-2 m-t-xxl",style:{"--row-gap-y":"var(--md)","--row-gap-x":"var(--md)"}},{default:l(()=>[e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:t.value.user,"onUpdate:modelValue":m[6]||(m[6]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(a,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(f,{modelValue:t.value.region,"onUpdate:modelValue":m[7]||(m[7]=u=>t.value.region=u),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:l(()=>[e(d,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(d,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:t.value.user,"onUpdate:modelValue":m[8]||(m[8]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:t.value.user,"onUpdate:modelValue":m[9]||(m[9]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:t.value.user,"onUpdate:modelValue":m[10]||(m[10]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1}),e(a,{label:"\u8868\u5355\u540D\u79F0"},{default:l(()=>[e(s,{modelValue:t.value.user,"onUpdate:modelValue":m[11]||(m[11]=u=>t.value.user=u),placeholder:"\u8868\u5355\u540D\u79F0",block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])],64)}}});var re=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));const ue=r("\u67E5\u8BE2"),de=E({setup(A){const t=F({user:"",region:""}),i=()=>{console.log("submit!")};return(m,s)=>{const a=n("hl-input"),d=n("hl-form-item"),f=n("hl-option"),c=n("hl-select"),u=n("hl-button"),p=n("hl-form");return k(),B(p,{inline:"",model:t.value,gap:"var(--md)","item-gap":"var(--md)"},{default:l(()=>[e(d,{label:"\u5BA1\u6279\u4EBA",required:""},{default:l(()=>[e(a,{modelValue:t.value.user,"onUpdate:modelValue":s[0]||(s[0]=h=>t.value.user=h),placeholder:"\u5BA1\u6279\u4EBA"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(c,{modelValue:t.value.region,"onUpdate:modelValue":s[1]||(s[1]=h=>t.value.region=h),placeholder:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(f,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(f,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:l(()=>[e(u,{type:"primary",onClick:i},{default:l(()=>[ue]),_:1})]),_:1})]),_:1},8,["model"])}}});var me=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));const ie=r("\u63D0\u4EA4"),se=r("\u91CD\u7F6E"),ce=E({setup(A){const t=F({age:""}),i=F(null),m=()=>{i.value.validate(a=>{a&&L("submit")})},s=()=>{i.value.resetFields()};return(a,d)=>{const f=n("hl-input"),c=n("hl-form-item"),u=n("hl-button"),p=n("hl-form");return k(),B(p,{ref_key:"numberValidateFormRef",ref:i,model:t.value,inline:"",style:{"--form-padding-y":"6px"}},{default:l(()=>[e(c,{label:"\u5E74\u9F84",prop:"age",s:"",rules:[{required:!0,message:"\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"},{type:"number",message:"\u5E74\u9F84\u5FC5\u987B\u4E3A\u6570\u5B57\u503C"}]},{default:l(()=>[e(f,{modelValue:t.value.age,"onUpdate:modelValue":d[0]||(d[0]=h=>t.value.age=h),modelModifiers:{number:!0},"native-type":"age",autocomplete:"off",block:""},null,8,["modelValue"])]),_:1}),e(c,null,{default:l(()=>[e(u,{type:"primary",class:"m-r-sm",onClick:d[1]||(d[1]=h=>m())},{default:l(()=>[ie]),_:1}),e(u,{onClick:d[2]||(d[2]=h=>s())},{default:l(()=>[se]),_:1})]),_:1})]),_:1},8,["model"])}}});var pe=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));const he=E({setup(A){const t=F("items-left"),i=F("items-middle"),m=F({name:"",region:"",type:""});return(s,a)=>{const d=n("hl-option"),f=n("hl-select"),c=n("hl-group"),u=n("hl-form-item"),p=n("hl-input"),h=n("hl-form");return k(),B(h,{"label-position":[t.value,i.value],width:["md:col-6","md:col-14"],model:m.value},{default:l(()=>[e(u,{label:"Label\u5BF9\u9F50\uFF1A"},{default:l(()=>[e(c,{gap:"var(--sm)"},{default:l(()=>[e(f,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=b=>t.value=b),placeholder:"\u6C34\u5E73\u5BF9\u9F50"},{default:l(()=>[e(d,{label:"items-left",value:"items-left"}),e(d,{label:"items-center",value:"items-center"}),e(d,{label:"items-right",value:"items-right"})]),_:1},8,["modelValue"]),e(f,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=b=>i.value=b),placeholder:"\u6C34\u5E73\u5BF9\u9F50"},{default:l(()=>[e(d,{label:"items-top",value:"items-top"}),e(d,{label:"items-middle",value:"items-middle"}),e(d,{label:"items-bottom",value:"items-bottom"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(u,{label:"\u6D3B\u52A8\u533A\u57DF\uFF1A"},{default:l(()=>[e(p,{modelValue:m.value.region,"onUpdate:modelValue":a[2]||(a[2]=b=>m.value.region=b),block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u6D3B\u52A8\u5F62\u5F0F\uFF1A"},{default:l(()=>[e(p,{modelValue:m.value.type,"onUpdate:modelValue":a[3]||(a[3]=b=>m.value.type=b),block:""},null,8,["modelValue"])]),_:1}),e(u,{label:"\u6D3B\u52A8\u5F62\u5F0F\uFF1A"},{default:l(()=>[e(p,{modelValue:m.value.type,"onUpdate:modelValue":a[4]||(a[4]=b=>m.value.type=b),"native-type":"textarea",rows:3,block:""},null,8,["modelValue"])]),_:1})]),_:1},8,["label-position","model"])}}});var fe=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));const be=r("\u63D0\u4EA4"),_e=r("\u91CD\u7F6E"),ge=E({setup(A){const t=F({pass:"",checkPass:"",age:""}),i=F(null),d=F({pass:[{validator:(u,p,h)=>{p===""?h(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):(t.value.checkPass!==""&&i.value.validateField("checkPass"),h())},trigger:"blur"}],checkPass:[{validator:(u,p,h)=>{p===""?h(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")):p!==t.value.pass?h(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!")):h()},trigger:"blur"}],age:[{validator:(u,p,h)=>{if(!p)return h(new Error("\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"));setTimeout(()=>{Number.isInteger(p)?p<18?h(new Error("\u5FC5\u987B\u5E74\u6EE118\u5C81")):h():h(new Error("\u8BF7\u8F93\u5165\u6570\u5B57\u503C"))},1e3)},trigger:"blur"}]}),f=()=>{i.value.validate(u=>{if(u)alert("submit!");else return console.log("error submit!!"),!1})},c=()=>{i.value.resetFields()};return(u,p)=>{const h=n("hl-input"),b=n("hl-form-item"),y=n("hl-button"),g=n("hl-form");return k(),B(g,{ref_key:"ruleFormRef",ref:i,model:t.value,rules:d.value,width:["md:col-4","col"]},{default:l(()=>[e(b,{label:"\u5BC6\u7801",prop:"pass"},{default:l(()=>[e(h,{modelValue:t.value.pass,"onUpdate:modelValue":p[0]||(p[0]=V=>t.value.pass=V),"native-type":"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(b,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"checkPass"},{default:l(()=>[e(h,{modelValue:t.value.checkPass,"onUpdate:modelValue":p[1]||(p[1]=V=>t.value.checkPass=V),"native-type":"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(b,{label:"\u5E74\u9F84",prop:"age"},{default:l(()=>[e(h,{modelValue:t.value.age,"onUpdate:modelValue":p[2]||(p[2]=V=>t.value.age=V),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),e(b,{label:" "},{default:l(()=>[e(y,{type:"primary",class:"m-r-sm",onClick:p[3]||(p[3]=V=>f())},{default:l(()=>[be]),_:1}),e(y,{onClick:p[4]||(p[4]=V=>c())},{default:l(()=>[_e]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});var ve=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"}));const Fe=r(" \u5C3A\u5BF8\uFF1A"),ye=r("\u5C0F"),Ve=r("\u9ED8\u8BA4"),De=r("\u5927"),ke=o("br",null,null,-1),Ae=o("br",null,null,-1),Ee=r("\u7ACB\u5373\u521B\u5EFA"),Be=r("\u53D6\u6D88"),we=E({setup(A){const t=F("md"),i=F({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),m=()=>{console.log("submit!")};return(s,a)=>{const d=n("hl-radio"),f=n("hl-radio-group"),c=n("hl-input"),u=n("hl-form-item"),p=n("hl-option"),h=n("hl-select"),b=n("hl-date-picker"),y=n("hl-time-picker"),g=n("hl-group"),V=n("hl-checkbox"),w=n("hl-checkbox-group"),x=n("hl-button"),z=n("hl-form");return k(),I(C,null,[Fe,e(f,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=D=>t.value=D)},{default:l(()=>[e(d,{label:"sm"},{default:l(()=>[ye]),_:1}),e(d,{label:"md"},{default:l(()=>[Ve]),_:1}),e(d,{label:"lg"},{default:l(()=>[De]),_:1})]),_:1},8,["modelValue"]),ke,Ae,e(z,{ref:"form",model:i.value,width:["md:col-4","col"],size:t.value},{default:l(()=>[e(u,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:l(()=>[e(c,{modelValue:i.value.name,"onUpdate:modelValue":a[1]||(a[1]=D=>i.value.name=D)},null,8,["modelValue"])]),_:1}),e(u,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(h,{modelValue:i.value.region,"onUpdate:modelValue":a[2]||(a[2]=D=>i.value.region=D),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(p,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(p,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:l(()=>[e(g,{merge:"",indent:""},{default:l(()=>[e(b,{modelValue:i.value.date1,"onUpdate:modelValue":a[3]||(a[3]=D=>i.value.date1=D),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F"},null,8,["modelValue"]),e(y,{modelValue:i.value.date2,"onUpdate:modelValue":a[4]||(a[4]=D=>i.value.date2=D),placeholder:"\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:l(()=>[e(w,{modelValue:i.value.type,"onUpdate:modelValue":a[5]||(a[5]=D=>i.value.type=D)},{default:l(()=>[e(V,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(V,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(V,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:l(()=>[e(f,{modelValue:i.value.resource,"onUpdate:modelValue":a[6]||(a[6]=D=>i.value.resource=D)},{default:l(()=>[e(d,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(d,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(u,{offset:"md:offset-4"},{default:l(()=>[e(x,{type:"primary",class:"m-r-sm",onClick:m},{default:l(()=>[Ee]),_:1}),e(x,null,{default:l(()=>[Be]),_:1})]),_:1})]),_:1},8,["model","size"])],64)}}});var xe=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));const Ie=r("\u7ACB\u5373\u521B\u5EFA"),Ce=r("\u91CD\u7F6E"),ze=E({setup(A){const t=F({location:[],name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),i=F({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0",trigger:"blur"},{min:3,max:5,message:"\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26",trigger:"blur"}],location:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u5730\u70B9",trigger:"change"}],region:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",trigger:"change"}],date1:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",trigger:"change"}],date2:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65F6\u95F4",trigger:"change"}],type:[{type:"array",required:!0,message:"\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28",trigger:"change"}],resource:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90",trigger:"change"}],desc:[{required:!0,message:"\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F",trigger:"blur"}]}),m=F([{value:"BJ",label:"\u5317\u4EAC",children:[{value:"HD",label:"\u6D77\u6DC0\u533A"},{value:"XW",label:"\u5BA3\u6B66\u533A"},{value:"CW",label:"\u5D07\u6587\u533A",children:[{value:"WFJ",label:"\u738B\u5E9C\u4E95"},{value:"DD",label:"\u4E1C\u5355"}]}]}]),s=F(null),a=()=>{s.value.validate(f=>{if(f)alert("submit!");else return console.log("error submit!!"),!1})},d=()=>{s.value.resetFields()};return(f,c)=>{const u=n("hl-input"),p=n("hl-select"),h=n("hl-group"),b=n("hl-form-item"),y=n("hl-cascader"),g=n("hl-option"),V=n("hl-date-picker"),w=n("hl-col"),x=n("hl-time-picker"),z=n("hl-row"),D=n("hl-switch"),P=n("hl-checkbox"),S=n("hl-checkbox-group"),U=n("hl-radio"),R=n("hl-radio-group"),j=n("hl-button"),q=n("hl-form");return k(),B(q,{ref_key:"ruleFormRef",ref:s,model:t.value,rules:i.value,"label-position":["items-right","items-left"],gap:"var(--lg)","item-gap":"var(--md)",width:["md:col-6","md:col-18"]},{default:l(()=>[e(b,{label:"\u6D3B\u52A8\u540D\u79F0",prop:"name"},{default:l(()=>[e(h,{"deep-merge":"",indent:""},{default:l(()=>[e(u,{modelValue:t.value.name,"onUpdate:modelValue":c[0]||(c[0]=v=>t.value.name=v)},null,8,["modelValue"]),e(p,{placeholder:"\u56E2\u961F",class:"static w-sm"})]),_:1})]),_:1}),e(b,{label:"\u6D3B\u52A8\u5730\u70B9",prop:"location"},{default:l(()=>[e(y,{modelValue:t.value.location,"onUpdate:modelValue":c[1]||(c[1]=v=>t.value.location=v),options:m.value},null,8,["modelValue","options"])]),_:1}),e(b,{label:"\u6D3B\u52A8\u533A\u57DF",prop:"region"},{default:l(()=>[e(p,{modelValue:t.value.region,"onUpdate:modelValue":c[2]||(c[2]=v=>t.value.region=v),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(g,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(g,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(b,{label:"\u6D3B\u52A8\u65F6\u95F4",required:""},{default:l(()=>[e(z,null,{default:l(()=>[e(w,{span:12},{default:l(()=>[e(b,{prop:"date1"},{default:l(()=>[e(V,{modelValue:t.value.date1,"onUpdate:modelValue":c[3]||(c[3]=v=>t.value.date1=v),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",block:""},null,8,["modelValue"])]),_:1})]),_:1}),e(w,{span:12},{default:l(()=>[e(b,{prop:"date2"},{default:l(()=>[e(x,{modelValue:t.value.date2,"onUpdate:modelValue":c[4]||(c[4]=v=>t.value.date2=v),placeholder:"\u9009\u62E9\u65F6\u95F4",block:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{label:"\u5373\u65F6\u914D\u9001",prop:"delivery"},{default:l(()=>[e(D,{modelValue:t.value.delivery,"onUpdate:modelValue":c[5]||(c[5]=v=>t.value.delivery=v),type:"primary"},null,8,["modelValue"])]),_:1}),e(b,{label:"\u6D3B\u52A8\u6027\u8D28",prop:"type"},{default:l(()=>[e(S,{modelValue:t.value.type,"onUpdate:modelValue":c[6]||(c[6]=v=>t.value.type=v)},{default:l(()=>[e(P,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(P,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(b,{label:"\u7279\u6B8A\u8D44\u6E90",prop:"resource"},{default:l(()=>[e(R,{modelValue:t.value.resource,"onUpdate:modelValue":c[7]||(c[7]=v=>t.value.resource=v)},{default:l(()=>[e(U,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(U,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(b,{label:"\u6D3B\u52A8\u5F62\u5F0F",prop:"desc"},{default:l(()=>[e(u,{modelValue:t.value.desc,"onUpdate:modelValue":c[8]||(c[8]=v=>t.value.desc=v),"native-type":"textarea",block:""},null,8,["modelValue"])]),_:1}),e(b,{offset:"md:offset-6"},{default:l(()=>[e(j,{type:"primary",class:"m-r-sm",onClick:c[9]||(c[9]=v=>a())},{default:l(()=>[Ie]),_:1}),e(j,{class:"m-r-sm",onClick:c[10]||(c[10]=v=>d())},{default:l(()=>[Ce]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});var Pe=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));const Ue=r("\u67E5\u8BE2"),je=E({setup(A){const t=F({user:"",region:""}),i=()=>{console.log("submit!")};return(m,s)=>{const a=n("hl-input"),d=n("hl-form-item"),f=n("hl-option"),c=n("hl-select"),u=n("hl-button"),p=n("hl-form");return k(),B(p,{model:t.value,fill:""},{default:l(()=>[e(d,{label:"\u5BA1\u6279\u4EBA"},{default:l(()=>[e(a,{modelValue:t.value.user,"onUpdate:modelValue":s[0]||(s[0]=h=>t.value.user=h),placeholder:"\u5BA1\u6279\u4EBA",block:""},null,8,["modelValue"])]),_:1}),e(d,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(c,{modelValue:t.value.region,"onUpdate:modelValue":s[1]||(s[1]=h=>t.value.region=h),placeholder:"\u6D3B\u52A8\u533A\u57DF",block:""},{default:l(()=>[e(f,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(f,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:l(()=>[e(u,{type:"primary",block:"",onClick:i},{default:l(()=>[Ue]),_:1})]),_:1})]),_:1},8,["model"])}}});var $e=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"}));const Se=o("h1",null,"Form \u8868\u5355",-1),Re=o("p",null,"\u7531\u8F93\u5165\u6846\u3001\u9009\u62E9\u5668\u3001\u5355\u9009\u6846\u3001\u591A\u9009\u6846\u7B49\u63A7\u4EF6\u7EC4\u6210\uFF0C\u7528\u4EE5\u6536\u96C6\u3001\u6821\u9A8C\u3001\u63D0\u4EA4\u6570\u636E",-1),qe=o("div",null,[o("p",null,"\u5728 Form \u7EC4\u4EF6\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u8868\u5355\u57DF\u7531\u4E00\u4E2A FormItem \u7EC4\u4EF6\u6784\u6210\uFF0C\u8868\u5355\u57DF\u4E2D\u53EF\u4EE5\u653E\u7F6E\u5404\u79CD\u7C7B\u578B\u7684\u8868\u5355\u63A7\u4EF6\uFF0C\u5305\u62EC Input\u3001Select\u3001Checkbox\u3001Radio\u3001Switch\u3001DatePicker\u3001TimePicker")],-1),Ne=o("div",{class:"doc-tip"},[o("p",null,[r("W3C \u6807\u51C6\u4E2D\u6709\u5982\u4E0B"),o("a",{href:"https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2"},"\u89C4\u5B9A"),r("\uFF1A")]),o("p",null,[r("\u5373\uFF1A\u5F53\u4E00\u4E2A form \u5143\u7D20\u4E2D\u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u6846\u65F6\uFF0C\u5728\u8BE5\u8F93\u5165\u6846\u4E2D\u6309\u4E0B\u56DE\u8F66\u5E94\u63D0\u4EA4\u8BE5\u8868\u5355\u3002\u5982\u679C\u5E0C\u671B\u963B\u6B62\u8FD9\u4E00\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u53EF\u4EE5\u5728 From \u7EC4\u4EF6\u4E0A\u6DFB\u52A0 "),o("code",null,"@submit.native.prevent"),r("\u3002")])],-1),Oe=o("h2",{id:"chui-zhi-biao-dan"},[o("a",{class:"header-anchor",href:"#chui-zhi-biao-dan"}),r(" \u5782\u76F4\u8868\u5355")],-1),Me=o("p",null,[r("\u5F53\u4F60\u6CA1\u6709\u8BBE\u7F6E"),o("code",null,"width"),r(" \u5C5E\u6027\u65F6\uFF0Cform\u7EC4\u4EF6\u9ED8\u8BA4\u628A\u6807\u9898\u548C\u8868\u5355\u5143\u7D20\u5206\u884C\u653E\u7F6E\u3002")],-1),Te=o("div",null,[o("p",null,[r("\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),o("code",null,"width"),r(" \u5C5E\u6027\u4E3A"),o("code",null,"100%"),r(),o("code",null,"block"),r(" \u6216\u8005 "),o("code",null,"col-24"),r("\u6765\u5B9E\u73B0\u6574\u884C\u7684\u6548\u679C\u3002")])],-1),Le=o("h2",{id:"xing-nei-biao-dan"},[o("a",{class:"header-anchor",href:"#xing-nei-biao-dan"}),r(" \u884C\u5185\u8868\u5355")],-1),We=o("p",null,"\u5F53\u5782\u76F4\u65B9\u5411\u7A7A\u95F4\u53D7\u9650\u4E14\u8868\u5355\u8F83\u7B80\u5355\u65F6\uFF0C\u53EF\u4EE5\u5728\u4E00\u884C\u5185\u653E\u7F6E\u8868\u5355\u3002",-1),He=o("div",null,[o("p",null,[r("\u8BBE\u7F6E "),o("code",null,"inline"),r(" \u5C5E\u6027\u53EF\u4EE5\u8BA9\u8868\u5355\u57DF\u53D8\u4E3A\u884C\u5185\u7684\u8868\u5355\u57DF")])],-1),Ye=o("h2",{id:"dui-qi-fang-shi"},[o("a",{class:"header-anchor",href:"#dui-qi-fang-shi"}),r(" \u5BF9\u9F50\u65B9\u5F0F")],-1),Je=o("p",null,"\u6839\u636E\u5177\u4F53\u76EE\u6807\u548C\u5236\u7EA6\u56E0\u7D20\uFF0C\u9009\u62E9\u6700\u4F73\u7684\u6807\u7B7E\u5BF9\u9F50\u65B9\u5F0F\u3002",-1),Xe=o("div",null,[o("p",null,[r("\u901A\u8FC7\u8BBE\u7F6E "),o("code",null,"label-position"),r(" \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u5E76\u4E14\u5BF9\u9F50\u65B9\u5F0F\u4E5F\u652F\u6301\u54CD\u5E94\u5F0F\u6807\u7B7E\u4F8B\u5982\uFF1A"),o("code",null,"xl:items-right")])],-1),Ge=o("h2",{id:"biao-dan-yan-zheng"},[o("a",{class:"header-anchor",href:"#biao-dan-yan-zheng"}),r(" \u8868\u5355\u9A8C\u8BC1")],-1),Qe=o("p",null,"\u5728\u8868\u5355\u9A8C\u8BC1\u5C3D\u53EF\u80FD\u8BA9\u7528\u6237\u66F4\u65E9\u5730\u53D1\u73B0\u5E76\u7EA0\u6B63\u9519\u8BEF\u7684\u8F93\u5165\u3002",-1),Ke=o("div",null,[o("p",null,[r("Form \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u8868\u5355\u9A8C\u8BC1\u7684\u529F\u80FD\uFF0C\u53EA\u9700\u8981\u901A\u8FC7 "),o("code",null,"rules"),r(" \u5C5E\u6027\u4F20\u5165\u7EA6\u5B9A\u7684\u9A8C\u8BC1\u89C4\u5219\uFF0C\u5E76\u5C06 Form-Item \u7684 "),o("code",null,"prop"),r(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u9700\u6821\u9A8C\u7684\u5B57\u6BB5\u540D\u5373\u53EF\u3002\u6821\u9A8C\u89C4\u5219\u53C2\u89C1 "),o("a",{href:"https://github.com/yiminghe/async-validator"},"async-validator")])],-1),Ze=o("h2",{id:"zi-ding-yi-xiao-yan-gui-ze"},[o("a",{class:"header-anchor",href:"#zi-ding-yi-xiao-yan-gui-ze"}),r(" \u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219")],-1),el=o("p",null,"\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219\u6765\u5B8C\u6210\u5BC6\u7801\u7684\u4E8C\u6B21\u9A8C\u8BC1\u3002",-1),ll=o("div",{class:"doc-tip"},[o("p",null,[r("\u81EA\u5B9A\u4E49\u6821\u9A8C callback \u5FC5\u987B\u88AB\u8C03\u7528\u3002 \u66F4\u591A\u9AD8\u7EA7\u7528\u6CD5\u53EF\u53C2\u8003 "),o("a",{href:"https://github.com/yiminghe/async-validator"},"async-validator"),r("\u3002 "),o("em",null,[o("strong",null,[r("\u5982\u679CWebpack5\u62A5async_validator\u4E0D\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u7C7B\u4F3C\u7684\u9519\u8BEF\uFF0C\u8BF7\u5728alias\u914D\u7F6E\u4E2D\u589E\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A"),o("code",null,'"async-validator": "async-validator/dist-web/index.js",')])])])],-1),tl=o("h2",{id:"dong-tai-zeng-jian-biao-dan-xiang"},[o("a",{class:"header-anchor",href:"#dong-tai-zeng-jian-biao-dan-xiang"}),r(" \u52A8\u6001\u589E\u51CF\u8868\u5355\u9879")],-1),ol=o("div",null,[o("p",null,"\u9664\u4E86\u5728 Form \u7EC4\u4EF6\u4E0A\u4E00\u6B21\u6027\u4F20\u9012\u6240\u6709\u7684\u9A8C\u8BC1\u89C4\u5219\u5916\u8FD8\u53EF\u4EE5\u5728\u5355\u4E2A\u7684\u8868\u5355\u57DF\u4E0A\u4F20\u9012\u5C5E\u6027\u7684\u9A8C\u8BC1\u89C4\u5219")],-1),nl=o("h2",{id:"shu-zi-lei-xing-yan-zheng"},[o("a",{class:"header-anchor",href:"#shu-zi-lei-xing-yan-zheng"}),r(" \u6570\u5B57\u7C7B\u578B\u9A8C\u8BC1")],-1),al=o("div",null,[o("p",null,[r("\u6570\u5B57\u7C7B\u578B\u7684\u9A8C\u8BC1\u9700\u8981\u5728 "),o("code",null,"v-model"),r(" \u5904\u52A0\u4E0A "),o("code",null,".number"),r(" \u7684\u4FEE\u9970\u7B26\uFF0C\u8FD9\u662F "),o("code",null,"Vue"),r(" \u81EA\u8EAB\u63D0\u4F9B\u7684\u7528\u4E8E\u5C06\u7ED1\u5B9A\u503C\u8F6C\u5316\u4E3A "),o("code",null,"number"),r(" \u7C7B\u578B\u7684\u4FEE\u9970\u7B26\u3002")])],-1),rl=o("h2",{id:"biao-dan-nei-zu-jian-chi-cun-kong-zhi"},[o("a",{class:"header-anchor",href:"#biao-dan-nei-zu-jian-chi-cun-kong-zhi"}),r(" \u8868\u5355\u5185\u7EC4\u4EF6\u5C3A\u5BF8\u63A7\u5236")],-1),ul=o("p",null,[r("\u901A\u8FC7\u8BBE\u7F6E Form \u4E0A\u7684 "),o("code",null,"size"),r(" \u5C5E\u6027\u53EF\u4EE5\u4F7F\u8BE5\u8868\u5355\u5185\u6240\u6709\u53EF\u8C03\u8282\u5927\u5C0F\u7684\u7EC4\u4EF6\u7EE7\u627F\u8BE5\u5C3A\u5BF8\u3002FormItem \u4E5F\u5177\u6709\u8BE5\u5C5E\u6027\u3002")],-1),dl=o("div",null,[o("p",null,[r("\u5982\u679C\u5E0C\u671B\u67D0\u4E2A\u8868\u5355\u9879\u6216\u67D0\u4E2A\u8868\u5355\u7EC4\u4EF6\u7684\u5C3A\u5BF8\u4E0D\u540C\u4E8E Form \u4E0A\u7684"),o("code",null,"size"),r("\u5C5E\u6027\uFF0C\u76F4\u63A5\u4E3A\u8FD9\u4E2A\u8868\u5355\u9879\u6216\u8868\u5355\u7EC4\u4EF6\u8BBE\u7F6E\u81EA\u5DF1\u7684"),o("code",null,"size"),r("\u5373\u53EF\u3002")])],-1),ml=o("h2",{id:"ke-fang-wen-xing"},[o("a",{class:"header-anchor",href:"#ke-fang-wen-xing"}),r(" \u53EF\u8BBF\u95EE\u6027")],-1),il=o("p",null,[r("\u5F53\u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u6846\uFF08\u6216\u8005Select\uFF0CCheckbox\u7B49\u76F8\u5173\u63A7\u4EF6\uFF09\u5728 "),o("code",null,"FormItem"),r(" \u91CC\u65F6\uFF0C\u8868\u5355\u9879\u7684\u6807\u7B7E\u5C06\u4F1A\u81EA\u52A8\u9644\u52A0\u5230Input\u4E0A\u3002\u5F53\u6709\u591A\u4E2A\u8F93\u5165\u6846\u65F6\uFF0C\u8868\u5355\u9879\u5C06\u4F1A\u6839\u636E"),o("a",{href:"https://www.w3.org/WAI/standards-guidelines/aria/"},"WAI-ARIA"),r("\u89C4\u8303\uFF0C\u8D4B\u4E88 "),o("code",null,"role"),r(" \u5C5E\u6027\u4E3A"),o("a",{href:"https://www.w3.org/TR/wai-aria/#group"},"group"),r(" \u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u9700\u8981\u81EA\u5DF1\u9644\u52A0\u6807\u7B7E\u5230\u76F8\u5E94\u7684\u8F93\u5165\u6846\u3002")],-1),sl=o("h2",{id:"li-yong-gridzu-jian-chuang-jian-duo-lie-biao-dan"},[o("a",{class:"header-anchor",href:"#li-yong-gridzu-jian-chuang-jian-duo-lie-biao-dan"}),r(" \u5229\u7528Grid\u7EC4\u4EF6\u521B\u5EFA\u591A\u5217\u8868\u5355")],-1),cl=o("p",null,"\u4F7F\u7528\u9E3F\u9E3E\u5F3A\u5927\u7684\u6805\u683C\u7CFB\u7EDF\uFF0C\u53EF\u521B\u9020\u51FA\u66F4\u591A\u4E30\u5BCC\u4E14\u54CD\u5E94\u5F0F\u7684\u8868\u5355\u5E03\u5C40",-1),pl=o("div",null,[o("p",null,"\u672C\u793A\u4F8B\u4F7F\u7528class\u7C7B\u540D\u5C06 Form \u7EC4\u4EF6\u6784\u5EFA\u6210\u4E00\u4E2A Row\uFF0C \u5E76\u5C06\u5176\u8F85\u4E8E\u6805\u683C\u7CFB\u7EDF\u7684\u7279\u6027\u3002")],-1),hl=M('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model</td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td>Record&lt;string, any&gt;</td><td>\u2014</td><td>\u2014</td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td>FormRules</td><td>\u2014</td><td>\u2014</td></tr><tr><td>inline</td><td>\u884C\u5185\u8868\u5355\u6A21\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>label-position</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u6C34\u5E73\uFF08left,center,right\uFF09\u548C\u5782\u76F4\uFF08top,middle,bottom\uFF09\u65B9\u5411</td><td>string/array</td><td>left/center/right/top/middle/bottom</td><td>-</td></tr><tr><td>width</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u4EE5\u53CA\u8868\u5355\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 Grid \u4E2D\u63D0\u4F9B\u7684\u54CD\u5E94\u5F0F\u7C7B\uFF08col-*\uFF09</td><td>string/array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-suffix</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u540E\u7F00</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-prefix</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u524D\u7F00</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>hide-required-asterisk</td><td>\u662F\u5426\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>require-asterisk-position</td><td>\u7EA2\u8272\u661F\u53F7\u4F4D\u7F6E</td><td>string</td><td>left / right</td><td>left</td></tr><tr><td>show-message</td><td>\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>validate-on-rule-change</td><td>\u662F\u5426\u5728 <code>rules</code> \u5C5E\u6027\u6539\u53D8\u540E\u7ACB\u5373\u89E6\u53D1\u4E00\u6B21\u9A8C\u8BC1</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>\u2014</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E\u6BCF\u4E2A FormItem \u7684\u5782\u76F4\u95F4\u8DDD\u3002\u7531\u4E8EForm\u91C7\u7528Flex\u5E03\u5C40\uFF0C\u6240\u4EE5\u53EA\u6709Form\u4E0B\u7684\u76F4\u63A5\u5B50FormItem\u624D\u8D77\u4F5C\u7528</td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E / \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr><tr><td>item-gap</td><td>\u8BBE\u7F6E FormItem \u4E0B\u7684 label \u548C content \u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E<code>item-gap-x</code>\u6216<code>item-gap-y</code></td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E / \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8BE5\u8868\u5355\u5185\u7684\u6240\u6709\u7EC4\u4EF6\u3002\u82E5\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u8868\u5355\u5185\u7EC4\u4EF6\u4E0A\u7684 disabled \u5C5E\u6027\u4E0D\u518D\u751F\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>scroll-to-error</td><td>\u5F53\u9A8C\u8BC1\u5931\u8D25\u65F6\uFF0C\u662F\u5426\u6EDA\u52A8\u5230\u9519\u8BEF\u8868\u5355\u9879</td><td>boolean</td><td>false</td><td></td></tr><tr><td>scroll-into-view-options</td><td>\u5F53\u9A8C\u8BC1\u5931\u8D25\u65F6, \u6EDA\u5230\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u8868\u5355\u9879\u4E8B\u7684scrollIntoView\u914D\u7F6E. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView">scrollIntoView</a>.</td><td>object boolean</td><td>\u2014</td><td></td></tr></tbody></table><h2 id="rules"><a class="header-anchor" href="#rules"></a> Rules</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>trigger</td><td>\u9A8C\u8BC1\u89E6\u53D1\u65B9\u5F0F</td><td>string</td><td>blur / change</td><td>\u2014</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6821\u9A8C\u7ED3\u675F\u540E\u88AB\u8C03\u7528\uFF0C\u5E76\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1A\u662F\u5426\u6821\u9A8C\u6210\u529F\u548C\u672A\u901A\u8FC7\u6821\u9A8C\u7684\u5B57\u6BB5\u3002\u82E5\u4E0D\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A promise</td><td><code>(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) =&gt; void) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>validateField</td><td>\u5BF9\u90E8\u5206\u8868\u5355\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) =&gt; void) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>resetFields</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u6240\u6709\u5B57\u6BB5\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;) =&gt; void</code></td></tr><tr><td>scrollToField</td><td>\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u5B57\u6BB5</td><td><code>(prop: FormItemProp) =&gt; void</code></td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 prop \u5C5E\u6027\u6216\u8005 prop \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C</td><td><code>(props?: Arrayable&lt;FormItemProp&gt;) =&gt; void</code></td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u4EFB\u4E00\u8868\u5355\u9879\u88AB\u6821\u9A8C\u540E\u89E6\u53D1</td><td>(prop: FormItemProp, isValid: boolean, message: string) =&gt; void</td></tr></tbody></table><h2 id="form-item-attributes"><a class="header-anchor" href="#form-item-attributes"></a> Form Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u8868\u5355\u57DF model \u5B57\u6BB5\uFF0C\u5728\u4F7F\u7528 validate\u3001resetFields \u65B9\u6CD5\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684</td><td>string</td><td>\u4F20\u5165 Form \u7EC4\u4EF6\u7684 <code>model</code> \u4E2D\u7684\u5B57\u6BB5</td><td>\u2014</td></tr><tr><td>label</td><td>\u6807\u7B7E\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-position</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u6C34\u5E73\uFF08left,center,right\uFF09\u548C\u5782\u76F4\uFF08top,middle,bottom\uFF09\u65B9\u5411</td><td>string/array</td><td>right/left/top</td><td>-</td></tr><tr><td>width</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u4EE5\u53CA\u8868\u5355\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 Layout \u4E2D\u63D0\u4F9B\u4E86\u54CD\u5E94\u5F0F\u7C7B\uFF08col-*\uFF09\u3002</td><td>string/array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>required</td><td>\u662F\u5426\u5FC5\u586B\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219, \u5177\u4F53\u914D\u7F6E\u89C1\u4E0B\u8868, \u66F4\u591A\u5185\u5BB9\u53C2\u8003<a href="https://github.com/yiminghe/async-validator">async-validator</a></td><td>FormItemRule | FormItemRule[]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>error</td><td>\u8868\u5355\u57DF\u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F, \u8BBE\u7F6E\u8BE5\u503C\u4F1A\u4F7F\u8868\u5355\u9A8C\u8BC1\u72B6\u6001\u53D8\u4E3A<code>error</code>\uFF0C\u5E76\u663E\u793A\u8BE5\u9519\u8BEF\u4FE1\u606F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-message</td><td>\u662F\u5426\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>size</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u57DF\u4E0B\u7EC4\u4EF6\u7684\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>-</td></tr><tr><td>offset</td><td>\u5F53\u4F60\u672A\u8BBE\u7F6Elabel\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528offset\u63A7\u5236form-content\u7684\u504F\u79FB\uFF0C\u5177\u4F53\u53C2\u8003Grid\u7EC4\u4EF6\u7684\u4F7F\u7528\u65B9\u5F0F</td><td>string</td><td></td><td>-</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E form-item \u4E0B\u7684 form-label \u548C form-content \u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Eitem-gap</td><td>string</td><td>\u89C4\u8303\u5316\u5C3A\u5BF8\u6807\u7B7E \u2248/ \u81EA\u5B9A\u4E49\u5C3A\u5BF8</td><td>\u2014</td></tr></tbody></table><h4 id="formitemrule"><a class="header-anchor" href="#formitemrule"></a> FormItemRule</h4><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>trigger</td><td>\u9A8C\u8BC1\u89E6\u53D1\u65B9\u5F0F</td><td>blur / change</td><td>\u2014</td></tr></tbody></table><div class="doc-tip"><p>\u5982\u679C\u4E0D\u60F3\u57FA\u4E8E<code>input</code>\u4E8B\u4EF6\u89E6\u53D1\u6821\u9A8C\uFF0C\u53EF\u4EE5\u5728\u76F8\u5E94\u7684(<code>&lt;hl-input&gt;</code>, <code>&lt;hl-radio&gt;</code>, <code>&lt;hl-select&gt;</code>, ...)\u7EC4\u4EF6\u4E0A\u8BBE\u7F6E<code>validate-event</code>\u5C5E\u6027\u503C\u4E3A<code>false</code></p></div><h2 id="form-item-slots"><a class="header-anchor" href="#form-item-slots"></a> Form Item Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Form Item \u7684\u5185\u5BB9</td></tr><tr><td>label</td><td>\u81EA\u5B9A\u4E49\u6807\u7B7E\u663E\u793A. \u53C2\u6570\u4E3A { label }</td></tr><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u4FE1\u606F\u7684\u663E\u793A\u65B9\u5F0F\uFF0C\u53C2\u6570\u4E3A { error }</td></tr></tbody></table><h2 id="form-item-methods"><a class="header-anchor" href="#form-item-methods"></a> Form Item Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>resetField</td><td>\u5BF9\u8BE5\u8868\u5355\u9879\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u5176\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td>() =&gt; void</td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8BE5\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C</td><td>() =&gt; void</td></tr></tbody></table>',17),Fl={setup(A){const t="form",i={"../../../examples/form/accessibility.vue":J,"../../../examples/form/basic.vue":ee,"../../../examples/form/dynamic.vue":ne,"../../../examples/form/grid.vue":re,"../../../examples/form/inline.vue":me,"../../../examples/form/number.vue":pe,"../../../examples/form/position.vue":fe,"../../../examples/form/rule.vue":ve,"../../../examples/form/size.vue":xe,"../../../examples/form/validate.vue":Pe,"../../../examples/form/vertical.vue":$e};return(m,s)=>{const a=n("demo-block"),d=n("right-nav");return k(),I(C,null,[o("section",null,[Se,Re,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/basic","source-code":`<template>
  <hl-form :model="form" :width="['col-6','col-15']" :label-position="['items-right', 'items-middle']" item-gap="var(--md)">
    <hl-form-item label="\u6D3B\u52A8\u540D\u79F0">
      <hl-input v-model="form.name" placeholder="\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">
      <hl-select v-model="form.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u65F6\u95F4">
      <hl-date-picker v-model="form.date1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" class="m-r-sm" />
    </hl-form-item>

    <hl-form-item label="\u7279\u6B8A\u8D44\u6E90">
      <hl-radio-group v-model="form.resource" type="primary">
        <hl-radio label="1">\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9</hl-radio>
        <hl-radio label="2">\u7EBF\u4E0B\u573A\u5730\u514D\u8D39</hl-radio>
      </hl-radio-group>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F">
      <hl-input v-model="form.desc" native-type="textarea" :rows="3" block />
    </hl-form-item>
    <hl-form-item offset="offset-6">
      <hl-button type="primary" class="m-r-md" @click="onSubmit">\u7ACB\u5373\u521B\u5EFA</hl-button>
      <hl-button>\u53D6\u6D88</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  region: 'shanghai',
  date1: '',
  type: [],
  resource: '1',
  desc: '',
})
const onSubmit = () => {
  console.log('submit!')
}

<\/script>
`},{default:l(()=>[qe]),_:1},8,["demos"]),Ne,Oe,Me,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/vertical","source-code":`<template>
  <hl-form :model="formInline" fill>
    <hl-form-item label="\u5BA1\u6279\u4EBA">
      <hl-input v-model="formInline.user" placeholder="\u5BA1\u6279\u4EBA" block />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF" block>
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item>
      <hl-button type="primary" block @click="onSubmit">\u67E5\u8BE2</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formInline = ref({
  user: '',
  region: '',
})
const onSubmit = () => {
  console.log('submit!')
}
<\/script>
`},{default:l(()=>[Te]),_:1},8,["demos"]),Le,We,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/inline","source-code":`<template>
  <hl-form inline :model="formInline" gap="var(--md)" item-gap="var(--md)">
    <hl-form-item label="\u5BA1\u6279\u4EBA" required>
      <hl-input v-model="formInline.user" placeholder="\u5BA1\u6279\u4EBA" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF">
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item>
      <hl-button type="primary" @click="onSubmit">\u67E5\u8BE2</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formInline = ref({
  user: '',
  region: '',
})
const onSubmit = () => {
  console.log('submit!')
}

<\/script>
`},{default:l(()=>[He]),_:1},8,["demos"]),Ye,Je,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/position","source-code":`<template>
  <hl-form :label-position="[labelPosition, labelPosition2]" :width="['md:col-6','md:col-14']" :model="formLabelAlign">
    <hl-form-item label="Label\u5BF9\u9F50\uFF1A">
      <hl-group gap="var(--sm)">
        <hl-select v-model="labelPosition" placeholder="\u6C34\u5E73\u5BF9\u9F50">
          <hl-option label="items-left" value="items-left" />
          <hl-option label="items-center" value="items-center" />
          <hl-option label="items-right" value="items-right" />
        </hl-select>
        <hl-select v-model="labelPosition2" placeholder="\u6C34\u5E73\u5BF9\u9F50">
          <hl-option label="items-top" value="items-top" />
          <hl-option label="items-middle" value="items-middle" />
          <hl-option label="items-bottom" value="items-bottom" />
        </hl-select>
      </hl-group>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF\uFF1A">
      <hl-input v-model="formLabelAlign.region" block />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F\uFF1A">
      <hl-input v-model="formLabelAlign.type" block />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F\uFF1A">
      <hl-input v-model="formLabelAlign.type" native-type="textarea" :rows="3" block />
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const labelPosition = ref('items-left')
const labelPosition2 = ref('items-middle')
const formLabelAlign = ref({
  name: '',
  region: '',
  type: '',
})
<\/script>
`},{default:l(()=>[Xe]),_:1},8,["demos"]),Ge,Qe,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/validate","source-code":`<template>
  <hl-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    :label-position="['items-right', 'items-left']"
    gap="var(--lg)"
    item-gap="var(--md)"
    :width="['md:col-6','md:col-18']"
  >
    <hl-form-item label="\u6D3B\u52A8\u540D\u79F0" prop="name">
      <hl-group deep-merge indent>
        <hl-input v-model="ruleForm.name" />
        <hl-select placeholder="\u56E2\u961F" class="static w-sm" />
      </hl-group>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u5730\u70B9" prop="location">
      <hl-cascader v-model="ruleForm.location" :options="locations" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF" prop="region">
      <hl-select v-model="ruleForm.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u65F6\u95F4" required>
      <hl-row>
        <hl-col :span="12">
          <hl-form-item prop="date1">
            <hl-date-picker v-model="ruleForm.date1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" block />
          </hl-form-item>
        </hl-col>
        <hl-col :span="12">
          <hl-form-item prop="date2">
            <hl-time-picker v-model="ruleForm.date2" placeholder="\u9009\u62E9\u65F6\u95F4" block />
          </hl-form-item>
        </hl-col>
      </hl-row>
    </hl-form-item>
    <hl-form-item label="\u5373\u65F6\u914D\u9001" prop="delivery">
      <hl-switch v-model="ruleForm.delivery" type="primary" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u6027\u8D28" prop="type">
      <hl-checkbox-group v-model="ruleForm.type">
        <hl-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type" />
        <hl-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type" />
      </hl-checkbox-group>
    </hl-form-item>
    <hl-form-item label="\u7279\u6B8A\u8D44\u6E90" prop="resource">
      <hl-radio-group v-model="ruleForm.resource">
        <hl-radio label="\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9" />
        <hl-radio label="\u7EBF\u4E0B\u573A\u5730\u514D\u8D39" />
      </hl-radio-group>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u5F62\u5F0F" prop="desc">
      <hl-input v-model="ruleForm.desc" native-type="textarea" block />
    </hl-form-item>
    <hl-form-item offset="md:offset-6">
      <hl-button type="primary" class="m-r-sm" @click="submitForm('ruleForm')">\u7ACB\u5373\u521B\u5EFA</hl-button>
      <hl-button class="m-r-sm" @click="resetForm('ruleForm')">\u91CD\u7F6E</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const ruleForm = ref({
  location: [],
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
const rules = ref({
  name: [
    { required: true, message: '\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0', trigger: 'blur' },
    {
      min: 3,
      max: 5,
      message: '\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26',
      trigger: 'blur',
    },
  ],
  location: [{ required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u5730\u70B9', trigger: 'change' }],
  region: [{ required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF', trigger: 'change' }],
  date1: [
    {
      type: 'date',
      required: true,
      message: '\u8BF7\u9009\u62E9\u65E5\u671F',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: '\u8BF7\u9009\u62E9\u65F6\u95F4',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: '\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28',
      trigger: 'change',
    },
  ],
  resource: [{ required: true, message: '\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90', trigger: 'change' }],
  desc: [{ required: true, message: '\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F', trigger: 'blur' }],
})
const locations = ref([
  {
    value: 'BJ',
    label: '\u5317\u4EAC',
    children: [
      { value: 'HD', label: '\u6D77\u6DC0\u533A' },
      { value: 'XW', label: '\u5BA3\u6B66\u533A' },
      {
        value: 'CW',
        label: '\u5D07\u6587\u533A',
        children: [
          { value: 'WFJ', label: '\u738B\u5E9C\u4E95' },
          { value: 'DD', label: '\u4E1C\u5355' },
        ],
      },
    ],
  },
])
const ruleFormRef = ref(null)

const submitForm = () => {
  ruleFormRef.value.validate(valid => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const resetForm = () => {
  ruleFormRef.value.resetFields()
}

<\/script>
`},{default:l(()=>[Ke]),_:1},8,["demos"]),Ze,el,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/rule","source-code":`<template>
  <hl-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :width="['md:col-4','col']">
    <hl-form-item label="\u5BC6\u7801" prop="pass">
      <hl-input v-model="ruleForm.pass" native-type="password" autocomplete="off" />
    </hl-form-item>
    <hl-form-item label="\u786E\u8BA4\u5BC6\u7801" prop="checkPass">
      <hl-input v-model="ruleForm.checkPass" native-type="password" autocomplete="off" />
    </hl-form-item>
    <hl-form-item label="\u5E74\u9F84" prop="age">
      <hl-input v-model.number="ruleForm.age" />
    </hl-form-item>
    <hl-form-item label=" ">
      <hl-button type="primary" class="m-r-sm" @click="submitForm('ruleForm')">\u63D0\u4EA4</hl-button>
      <hl-button @click="resetForm('ruleForm')">\u91CD\u7F6E</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const ruleForm = ref({
  pass: '',
  checkPass: '',
  age: '',
})
const ruleFormRef = ref(null)

const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('\u8BF7\u8F93\u5165\u6570\u5B57\u503C'))
    } else {
      if (value < 18) {
        callback(new Error('\u5FC5\u987B\u5E74\u6EE118\u5C81'))
      } else {
        callback()
      }
    }
  }, 1000)
}
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('\u8BF7\u8F93\u5165\u5BC6\u7801'))
  } else {
    if (ruleForm.value.checkPass !== '') {
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801'))
  } else if (value !== ruleForm.value.pass) {
    callback(new Error('\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!'))
  } else {
    callback()
  }
}

const rules = ref({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = () => {
  ruleFormRef.value.validate(valid => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const resetForm = () => {
  ruleFormRef.value.resetFields()
}

<\/script>
`},null,8,["demos"]),ll,tl,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/dynamic","source-code":`<template>
  <hl-form ref="dynamicValidateFormRef" :model="dynamicValidateForm" :width="['md:col-4','col']">
    <hl-form-item
      prop="email"
      label="\u90AE\u7BB1"
      :rules="[
        { required: true, message: '\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740', trigger: 'blur' },
        { type: 'email', message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740', trigger: ['blur', 'change'] }
      ]"
    >
      <hl-input v-model="dynamicValidateForm.email" />
    </hl-form-item>
    <hl-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'\u57DF\u540D' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true, message: '\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A', trigger: 'blur'
      }"
    >
      <hl-input v-model="domain.value" />
      <hl-button type="primary" effect="light" class="m-l-sm" equal @click.prevent="removeDomain(domain)">
        <template #icon>
          <hl-icon><two-delete /></hl-icon>
        </template>
      </hl-button>
    </hl-form-item>
    <hl-form-item label=" ">
      <hl-button type="primary" class="m-r-sm" @click="submitForm('dynamicValidateForm')">\u63D0\u4EA4</hl-button>
      <hl-button class="m-r-sm" @click="addDomain">\u65B0\u589E\u57DF\u540D</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoDelete } from '@helper-ui/icons'

const dynamicValidateForm = ref({
  domains: [
    {
      value: '',
      key: -1,
    },
  ],
  email: '',
})
const dynamicValidateFormRef = ref(null)

const submitForm = () => {
  dynamicValidateFormRef.value.validate(valid => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const resetForm = () => {
  dynamicValidateFormRef.value.resetFields()
}
const removeDomain = item => {
  var index = dynamicValidateForm.value.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.value.domains.splice(index, 1)
  }
}
const addDomain = () => {
  dynamicValidateForm.value.domains.push({
    value: '',
    key: Date.now(),
  })
}

<\/script>
`},{default:l(()=>[ol]),_:1},8,["demos"]),nl,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/number","source-code":`<template>
  <hl-form ref="numberValidateFormRef" :model="numberValidateForm" inline style="--form-padding-y: 6px">
    <hl-form-item
      label="\u5E74\u9F84"
      prop="age"
      s
      :rules="[
        { required: true, message: '\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A'},
        { type: 'number', message: '\u5E74\u9F84\u5FC5\u987B\u4E3A\u6570\u5B57\u503C'}
      ]"
    >
      <hl-input v-model.number="numberValidateForm.age" native-type="age" autocomplete="off" block />
    </hl-form-item>
    <hl-form-item>
      <hl-button type="primary" class="m-r-sm" @click="submitForm('numberValidateForm')">\u63D0\u4EA4</hl-button>
      <hl-button @click="resetForm('numberValidateForm')">\u91CD\u7F6E</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { HlMessage } from 'helper-ui'
import { ref } from 'vue'

const numberValidateForm = ref({
  age: '',
})
const numberValidateFormRef = ref(null)

const submitForm = () => {
  numberValidateFormRef.value.validate(valid => {
    if (valid) {
      HlMessage('submit')
    }
  })
}
const resetForm = () => {
  numberValidateFormRef.value.resetFields()
}

<\/script>
`},{default:l(()=>[al]),_:1},8,["demos"]),rl,ul,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/size","source-code":`<template>
  \u5C3A\u5BF8\uFF1A<hl-radio-group v-model="size">
    <hl-radio label="sm">\u5C0F</hl-radio>
    <hl-radio label="md">\u9ED8\u8BA4</hl-radio>
    <hl-radio label="lg">\u5927</hl-radio>
  </hl-radio-group>
  <br><br>

  <hl-form ref="form" :model="sizeForm" :width="['md:col-4','col']" :size="size">
    <hl-form-item label="\u6D3B\u52A8\u540D\u79F0">
      <hl-input v-model="sizeForm.name" />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">
      <hl-select v-model="sizeForm.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u65F6\u95F4">
      <hl-group merge indent>
        <hl-date-picker v-model="sizeForm.date1" type="date" placeholder="\u9009\u62E9\u65E5\u671F" />
        <hl-time-picker v-model="sizeForm.date2" placeholder="\u9009\u62E9\u65F6\u95F4" />
      </hl-group>
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u6027\u8D28">
      <hl-checkbox-group v-model="sizeForm.type">
        <hl-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type" />
        <hl-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type" />
        <hl-checkbox label="\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8" name="type" />
      </hl-checkbox-group>
    </hl-form-item>
    <hl-form-item label="\u7279\u6B8A\u8D44\u6E90">
      <hl-radio-group v-model="sizeForm.resource">
        <hl-radio label="\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9" />
        <hl-radio label="\u7EBF\u4E0B\u573A\u5730\u514D\u8D39" />
      </hl-radio-group>
    </hl-form-item>
    <hl-form-item offset="md:offset-4">
      <hl-button type="primary" class="m-r-sm" @click="onSubmit">\u7ACB\u5373\u521B\u5EFA</hl-button>
      <hl-button>\u53D6\u6D88</hl-button>
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref('md')
const sizeForm = ref({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
const onSubmit = () => {
  console.log('submit!')
}
<\/script>
`},{default:l(()=>[dl]),_:1},8,["demos"]),ml,il,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/accessibility","source-code":`<template>
  <hl-form labhl-position="left" label-width="150px" style="max-width: 460px">
    <hl-group gap="var(--md)">
      <hl-alert type="info" show-icon :closable="false">
        <p>"Full Name" label is automatically attached to the input:</p>
      </hl-alert>
      <hl-form-item label="Full Name">
        <hl-input v-model="formAccessibility.fullName" />
      </hl-form-item>
    </hl-group>
    <hl-group gap="var(--md)">
      <hl-alert type="info" show-icon :closable="false">
        <p>
          "Your Information" serves as a label for the group of inputs. <br>
          You must specify labels on the individal inputs. Placeholders are not
          replacements for using the "label" attribute.
        </p>
      </hl-alert>
      <hl-form-item label="Your Information">
        <hl-input
          v-model="formAccessibility.firstName"
          label="First Name"
          placeholder="First Name"
        />

        <hl-input
          v-model="formAccessibility.lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </hl-form-item>
    </hl-group>
  </hl-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: '',
})

<\/script>

`},null,8,["demos"]),sl,cl,e(a,{fs:"",demos:_(i),"component-id":t,"path-name":"form/grid","source-code":`<template>
  <hl-form
    :model="formInline"
    :width="['col-24','col-24']"
    class="hl-row grid grid-direction-vertical xl:count-3 lg:count-2"
    style="--row-gap-y: var(--md); --row-gap-x:var(--md)"
  >
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF" block>
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
  </hl-form>

  <hl-form
    :model="formInline"
    :width="['col-5','col-19']"
    gap="var(--md)"
    class="hl-row grid grid-direction-vertical xl:count-2 lg:count-2 m-t-xxl"
    style="--row-gap-y: var(--md); --row-gap-x:var(--md)"
  >
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u6D3B\u52A8\u533A\u57DF">
      <hl-select v-model="formInline.region" placeholder="\u6D3B\u52A8\u533A\u57DF" block>
        <hl-option label="\u533A\u57DF\u4E00" value="shanghai" />
        <hl-option label="\u533A\u57DF\u4E8C" value="beijing" />
      </hl-select>
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
    <hl-form-item label="\u8868\u5355\u540D\u79F0">
      <hl-input v-model="formInline.user" placeholder="\u8868\u5355\u540D\u79F0" block />
    </hl-form-item>
  </hl-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formInline = ref({
  user: '',
  region: '',
})
<\/script>
`},{default:l(()=>[pl]),_:1},8,["demos"]),hl]),e(d)],64)}}};export{Fl as default};
