import{p as f,R as g,I as c,L as h,H as p,P as o,X as d,T as t,a0 as B,W as T,ag as D,U as x,V as r,a3 as C,Q as l,o as y}from"./vue.aa74a145.js";import{v as N}from"./hongluan-icons.eb437c6f.js";const F=t("\u8C37\u6B4C\u6D4F\u89C8\u5668"),V=t("\u706B\u72D0\u6D4F\u89C8\u5668"),$=t("\u6B27\u670B\u6D4F\u89C8\u5668"),k=f({setup(m){const a=g("second"),b=(s,n)=>{console.log(s,n)};return(s,n)=>{const e=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=u=>a.value=u),onTabClick:b},{default:o(()=>[d(e,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[F]),_:1}),d(e,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[V]),_:1}),d(e,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[$]),_:1})]),_:1},8,["modelValue"])}}});var z=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));const j=t("\u8C37\u6B4C\u6D4F\u89C8\u5668"),P=t("\u706B\u72D0\u6D4F\u89C8\u5668"),O=t("\u6B27\u670B\u6D4F\u89C8\u5668"),S=f({setup(m){const a=g("first"),b=(s,n)=>{console.log(s,n)};return(s,n)=>{const e=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=u=>a.value=u),type:"button",onTabClick:b},{default:o(()=>[d(e,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[j]),_:1}),d(e,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[P]),_:1}),d(e,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[O]),_:1})]),_:1},8,["modelValue"])}}});var w=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const q=f({setup(m){const a=B({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),b=(s,n)=>{if(n==="add"){let e=++a.tabIndex+"";a.editableTabs.push({title:"New Tab",name:e,content:"New Tab content"}),a.editableTabsValue=e}if(n==="remove"){let e=a.editableTabs,i=a.editableTabsValue;i===s&&e.forEach((u,v)=>{if(u.name===s){let _=e[v+1]||e[v-1];_&&(i=_.name)}}),a.editableTabsValue=i,a.editableTabs=e.filter(u=>u.name!==s)}};return(s,n)=>{const e=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:r(a).editableTabsValue,"onUpdate:modelValue":n[0]||(n[0]=u=>r(a).editableTabsValue=u),editable:"",onEdit:b},{default:o(()=>[(h(!0),T(C,null,D(r(a).editableTabs,u=>(h(),p(e,{key:u.name,label:u.title,name:u.name},{default:o(()=>[t(x(u.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])}}});var E=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));const M=t("\u8C37\u6B4C\u6D4F\u89C8\u5668"),U=t("\u706B\u72D0\u6D4F\u89C8\u5668"),I=t("\u6B27\u670B\u6D4F\u89C8\u5668"),A=f({setup(m){const a=g("second"),b=(s,n)=>{console.log(s,n)};return(s,n)=>{const e=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=u=>a.value=u),gap:"var(--md)",onTabClick:b},{default:o(()=>[d(e,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[M]),_:1}),d(e,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[U]),_:1}),d(e,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[I]),_:1})]),_:1},8,["modelValue"])}}});var L=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const R=t("\u8C37\u6B4C\u6D4F\u89C8\u5668"),Q=t("\u706B\u72D0\u6D4F\u89C8\u5668"),W=t("\u6B27\u670B\u6D4F\u89C8\u5668"),X=f({setup(m){const a=g("first"),b=(s,n)=>{console.log(s,n)};return(s,n)=>{const e=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=u=>a.value=u),type:"line",onTabClick:b},{default:o(()=>[d(e,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[R]),_:1}),d(e,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[Q]),_:1}),d(e,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[W]),_:1})]),_:1},8,["modelValue"])}}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));const H=t("\u8C37\u6B4C\u6D4F\u89C8\u5668"),J=t("\u706B\u72D0\u6D4F\u89C8\u5668"),K=t("\u6B27\u670B\u6D4F\u89C8\u5668"),Y=f({setup(m){const a=g("second"),b=(s,n)=>{console.log(s,n)};return(s,n)=>{const e=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=u=>a.value=u),"nav-height":"80px",onTabClick:b},{default:o(()=>[d(e,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[H]),_:1}),d(e,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[J]),_:1}),d(e,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[K]),_:1})]),_:1},8,["modelValue"])}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));const tt=t("\u8C37\u6B4C\u6D4F\u89C8\u5668"),et=t("\u706B\u72D0\u6D4F\u89C8\u5668"),at=t("\u6B27\u670B\u6D4F\u89C8\u5668"),nt=f({setup(m){const a=g("second"),b=(s,n)=>{console.log(s,n)};return(s,n)=>{const e=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=u=>a.value=u),"nav-padding":"var(--xxl)",onTabClick:b},{default:o(()=>[d(e,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[tt]),_:1}),d(e,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[et]),_:1}),d(e,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[at]),_:1})]),_:1},8,["modelValue"])}}});var lt=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"}));const ot=t("\u8C37\u6B4C\u6D4F\u89C8\u5668"),dt=t("\u706B\u72D0\u6D4F\u89C8\u5668"),st=t("\u6B27\u670B\u6D4F\u89C8\u5668"),ut=f({setup(m){const a=g("second"),b=(s,n)=>{console.log(s,n)};return(s,n)=>{const e=c("hl-tab-pane"),i=c("hl-tabs");return h(),p(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=u=>a.value=u),"pane-height":"calc(var(--xxl) * 6)",onTabClick:b},{default:o(()=>[d(e,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668",name:"first"},{default:o(()=>[ot]),_:1}),d(e,{label:"\u706B\u72D0\u6D4F\u89C8\u5668",name:"second"},{default:o(()=>[dt]),_:1}),d(e,{label:"\u6B27\u670B\u6D4F\u89C8\u5668",name:"third"},{default:o(()=>[st]),_:1})]),_:1},8,["modelValue"])}}});var bt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));const it={style:{"margin-bottom":"20px"}},ct=t(" add tab "),rt=f({setup(m){const a=B({editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}),b=()=>{let n=++a.tabIndex+"";a.editableTabs.push({title:"New Tab",name:n,content:"New Tab content"}),a.editableTabsValue=n},s=n=>{let e=a.editableTabs,i=a.editableTabsValue;i===n&&e.forEach((u,v)=>{if(u.name===n){let _=e[v+1]||e[v-1];_&&(i=_.name)}}),a.editableTabsValue=i,a.editableTabs=e.filter(u=>u.name!==n)};return(n,e)=>{const i=c("hl-button"),u=c("hl-tab-pane"),v=c("hl-tabs");return h(),T(C,null,[l("div",it,[d(i,{size:"sm",onClick:e[0]||(e[0]=_=>b())},{default:o(()=>[ct]),_:1})]),d(v,{modelValue:r(a).editableTabsValue,"onUpdate:modelValue":e[1]||(e[1]=_=>r(a).editableTabsValue=_),type:"line",closable:"",onTabRemove:s},{default:o(()=>[(h(!0),T(C,null,D(r(a).editableTabs,_=>(h(),p(u,{key:_.name,label:_.title,name:_.name},{default:o(()=>[t(x(_.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])],64)}}});var ht=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"}));const _t=t("top"),mt=t("right"),pt=t("bottom"),ft=t("left"),vt=t("\u8C37\u6B4C\u6D4F\u89C8\u5668"),gt=t("\u706B\u72D0\u6D4F\u89C8\u5668"),Tt=t("\u6B27\u670B\u6D4F\u89C8\u5668"),Ct=f({setup(m){const a=g("top");return(b,s)=>{const n=c("hl-radio"),e=c("hl-radio-group"),i=c("hl-tab-pane"),u=c("hl-tabs");return h(),T(C,null,[d(e,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=v=>a.value=v),style:{"margin-bottom":"30px"}},{default:o(()=>[d(n,{label:"top"},{default:o(()=>[_t]),_:1}),d(n,{label:"right"},{default:o(()=>[mt]),_:1}),d(n,{label:"bottom"},{default:o(()=>[pt]),_:1}),d(n,{label:"left"},{default:o(()=>[ft]),_:1})]),_:1},8,["modelValue"]),d(u,{"tab-position":a.value,type:"button",style:{height:"200px"}},{default:o(()=>[d(i,{label:"\u8C37\u6B4C\u6D4F\u89C8\u5668"},{default:o(()=>[vt]),_:1}),d(i,{label:"\u706B\u72D0\u6D4F\u89C8\u5668"},{default:o(()=>[gt]),_:1}),d(i,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:o(()=>[Tt]),_:1})]),_:1},8,["tab-position"])],64)}}});var Bt=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"}));const Dt=t(" \u6211\u7684\u884C\u7A0B "),xt=t(" \u6211\u7684\u884C\u7A0B "),yt=t("\u6D88\u606F\u4E2D\u5FC3"),Nt=t("\u6B27\u670B\u6D4F\u89C8\u5668"),Ft=f({setup(m){return(a,b)=>{const s=c("hl-icon"),n=c("hl-tab-pane"),e=c("hl-tabs");return h(),p(e,null,{default:o(()=>[d(n,null,{label:o(()=>[d(s,{class:"sm m-r-xs"},{default:o(()=>[d(r(N))]),_:1}),Dt]),default:o(()=>[xt]),_:1}),d(n,{label:"\u6D88\u606F\u4E2D\u5FC3"},{default:o(()=>[yt]),_:1}),d(n,{label:"\u6B27\u670B\u6D4F\u89C8\u5668"},{default:o(()=>[Nt]),_:1})]),_:1})}}});var Vt=Object.freeze(Object.defineProperty({__proto__:null,default:Ft},Symbol.toStringTag,{value:"Module"}));const $t=l("h1",null,"Tabs \u6807\u7B7E\u9875",-1),kt=l("p",null,"Tabs \u7528\u4E8E\u5206\u9694\u5185\u5BB9\u4E0A\u6709\u5173\u8054\u4F46\u5C5E\u4E8E\u4E0D\u540C\u7C7B\u522B\u7684\u6570\u636E\u96C6\u5408\u3002",-1),zt=l("div",null,[l("p",null,[t("Tabs \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u6807\u7B7E\u529F\u80FD\uFF0C\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 "),l("code",null,"value"),t(" \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E\u9875\u3002")])],-1),jt=l("h2",{id:"line-yang-shi"},[l("a",{class:"header-anchor",href:"#line-yang-shi"}),t(" Line \u6837\u5F0F")],-1),Pt=l("p",null,[t("\u53EA\u9700\u8981\u8BBE\u7F6E "),l("code",null,"type"),t(" \u5C5E\u6027\u4E3A "),l("code",null,"line"),t(" \u5C31\u53EF\u4EE5\u4F7F\u6807\u7B7E\u6539\u53D8\u4E3A\u7EBF\u6761\u98CE\u683C\u3002")],-1),Ot=l("h2",{id:"button-yang-shi"},[l("a",{class:"header-anchor",href:"#button-yang-shi"}),t(" Button \u6837\u5F0F")],-1),St=l("p",null,[t("\u53EA\u9700\u8981\u8BBE\u7F6E "),l("code",null,"type"),t(" \u5C5E\u6027\u4E3A "),l("code",null,"button"),t(" \u5C31\u53EF\u4EE5\u4F7F\u6807\u7B7E\u6539\u53D8\u4E3A\u6309\u94AE\u98CE\u683C\u3002")],-1),wt=l("h2",{id:"paddingshu-xing"},[l("a",{class:"header-anchor",href:"#paddingshu-xing"}),t(" Padding\u5C5E\u6027")],-1),qt=l("p",null,[l("code",null,"nav-padding"),t(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u7684\u4E24\u4FA7\u586B\u5145\u5C3A\u5BF8\uFF0C\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),t(" \u7C7B\u578B\u3002")],-1),Et=l("h2",{id:"gapshu-xing"},[l("a",{class:"header-anchor",href:"#gapshu-xing"}),t(" Gap\u5C5E\u6027")],-1),Mt=l("p",null,[l("code",null,"gap"),t(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u7B7E\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),t(" \u7C7B\u578B\u3002")],-1),Ut=l("h2",{id:"biao-qian-gao-du-she-zhi"},[l("a",{class:"header-anchor",href:"#biao-qian-gao-du-she-zhi"}),t(" \u6807\u7B7E\u9AD8\u5EA6\u8BBE\u7F6E")],-1),It=l("p",null,[l("code",null,"nav-height"),t(" \u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u6807\u7B7E\u7684\u9AD8\u5EA6\u3002\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),t(" \u7C7B\u578B\u3002")],-1),At=l("h2",{id:"nei-rong-qu-gao-du-she-zhi"},[l("a",{class:"header-anchor",href:"#nei-rong-qu-gao-du-she-zhi"}),t(" \u5185\u5BB9\u533A\u9AD8\u5EA6\u8BBE\u7F6E")],-1),Lt=l("p",null,[l("code",null,"pane-height"),t(" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5185\u5BB9\u533A\u7684\u9AD8\u5EA6\u3002\u5B83\u53EA\u63A5\u6536"),l("code",null,"\u5B57\u7B26\u4E32"),t(" \u7C7B\u578B\u3002")],-1),Rt=l("h2",{id:"wei-zhi"},[l("a",{class:"header-anchor",href:"#wei-zhi"}),t(" \u4F4D\u7F6E")],-1),Qt=l("p",null,[t("\u53EF\u4EE5\u901A\u8FC7 "),l("code",null,"tab-position"),t(" \u8BBE\u7F6E\u6807\u7B7E\u7684\u4F4D\u7F6E")],-1),Wt=l("div",null,[l("p",null,[t("\u6807\u7B7E\u4E00\u5171\u6709\u56DB\u4E2A\u65B9\u5411\u7684\u8BBE\u7F6E "),l("code",null,'tabPosition="left|right|top|bottom"')])],-1),Xt=l("h2",{id:"zi-ding-yi-biao-qian-ye"},[l("a",{class:"header-anchor",href:"#zi-ding-yi-biao-qian-ye"}),t(" \u81EA\u5B9A\u4E49\u6807\u7B7E\u9875")],-1),Gt=l("p",null,[t("\u53EF\u4EE5\u901A\u8FC7\u5177\u540D "),l("code",null,"slot"),t(" \u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6807\u7B7E\u9875\u7684\u5185\u5BB9")],-1),Ht=l("h2",{id:"dong-tai-zeng-jian-biao-qian-ye"},[l("a",{class:"header-anchor",href:"#dong-tai-zeng-jian-biao-qian-ye"}),t(" \u52A8\u6001\u589E\u51CF\u6807\u7B7E\u9875")],-1),Jt=l("p",null,"\u589E\u51CF\u6807\u7B7E\u9875\u6309\u94AE\u53EA\u80FD\u5728\u6807\u7B7E\u6837\u5F0F\u7684\u6807\u7B7E\u9875\u4E0B\u4F7F\u7528",-1),Kt=l("h2",{id:"zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"},[l("a",{class:"header-anchor",href:"#zi-ding-yi-zeng-jia-biao-qian-ye-chu-fa-qi"}),t(" \u81EA\u5B9A\u4E49\u589E\u52A0\u6807\u7B7E\u9875\u89E6\u53D1\u5668")],-1),Yt=y('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u9009\u4E2D\u6807\u7B7E\u7684 name</td><td>string / number</td><td>\u2014</td><td>\u7B2C\u4E00\u4E2A\u6807\u7B7E\u7684 name</td></tr><tr><td>type</td><td>\u98CE\u683C\u7C7B\u578B</td><td>string</td><td>line</td><td>\u663E\u793A\u4E3A\u7EBF\u6761\u6837\u5F0F</td></tr><tr><td>nav-height</td><td>\u6807\u7B7E\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>nav-padding</td><td>\u6807\u7B7E\u7684\u586B\u5145\u5C3A\u5BF8</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u6807\u7B7E\u7684\u95F4\u9694\u5C3A\u5BF8</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>pane-height</td><td>\u5185\u5BB9\u7684\u9AD8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-pane</td><td>\u662F\u5426\u663E\u793A\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>addable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u589E\u52A0</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>editable</td><td>\u6807\u7B7E\u662F\u5426\u540C\u65F6\u53EF\u589E\u52A0\u548C\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tab-position</td><td>\u6807\u7B7E\u6240\u5728\u4F4D\u7F6E</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>\u5207\u6362\u6807\u7B7E\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u963B\u6B62\u5207\u6362\u3002</td><td>Function(activeName, oldActiveName)</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>tab-click</td><td>tab \u88AB\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u88AB\u9009\u4E2D\u7684\u6807\u7B7E tab \u5B9E\u4F8B</td></tr><tr><td>tab-change</td><td><code>activeName</code>\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(name: <code>TabPaneName</code>)</td></tr><tr><td>tab-remove</td><td>\u70B9\u51FB tab \u79FB\u9664\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u88AB\u5220\u9664\u7684\u6807\u7B7E\u7684 name</td></tr><tr><td>tab-add</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u540E\u89E6\u53D1</td><td>\u2014</td></tr><tr><td>edit</td><td>\u70B9\u51FB tabs \u7684\u65B0\u589E\u6309\u94AE\u6216 tab \u88AB\u5173\u95ED\u540E\u89E6\u53D1</td><td>(targetName, action)</td></tr></tbody></table><h2 id="tab-pane-attributes"><a class="header-anchor" href="#tab-pane-attributes"></a> Tab Pane Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6807\u7B7E\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>name</td><td>\u4E0E\u6807\u7B7E\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u6807\u7B7E\u522B\u540D</td><td>string / number</td><td>\u2014</td><td>\u8BE5\u6807\u7B7E\u5728\u6807\u7B7E\u5217\u8868\u4E2D\u7684\u987A\u5E8F\u503C\uFF0C\u5982\u7B2C\u4E00\u4E2A\u6807\u7B7E\u5219\u4E3A&#39;1&#39;</td></tr><tr><td>closable</td><td>\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lazy</td><td>\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table>',6),ee={setup(m){const a="tabs",b={"../../../examples/tabs/basic.vue":z,"../../../examples/tabs/button.vue":w,"../../../examples/tabs/editable.vue":E,"../../../examples/tabs/gap.vue":L,"../../../examples/tabs/line.vue":G,"../../../examples/tabs/nav-height.vue":Z,"../../../examples/tabs/padding.vue":lt,"../../../examples/tabs/pane-height.vue":bt,"../../../examples/tabs/pane.vue":ht,"../../../examples/tabs/position.vue":Bt,"../../../examples/tabs/slot.vue":Vt};return(s,n)=>{const e=c("demo-block"),i=c("right-nav");return h(),T(C,null,[l("section",null,[$t,kt,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/basic","source-code":`<template>
  <hl-tabs v-model="activeName" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
<\/script>
`},{default:o(()=>[zt]),_:1},8,["demos"]),jt,Pt,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/line","source-code":`<template>
  <hl-tabs v-model="activeName" type="line" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),Ot,St,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/button","source-code":`<template>
  <hl-tabs v-model="activeName" type="button" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),wt,qt,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/padding","source-code":`<template>
  <hl-tabs v-model="activeName" nav-padding="var(--xxl)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),Et,Mt,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/gap","source-code":`<template>
  <hl-tabs v-model="activeName" gap="var(--md)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),Ut,It,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/nav-height","source-code":`<template>
  <hl-tabs v-model="activeName" nav-height="80px" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),At,Lt,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/pane-height","source-code":`<template>
  <hl-tabs v-model="activeName" pane-height="calc(var(--xxl) * 6)" @tab-click="handleClick">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668" name="first">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668" name="second">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668" name="third">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('second')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

<\/script>
`},null,8,["demos"]),Rt,Qt,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/position","source-code":`<template>
  <hl-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <hl-radio label="top">top</hl-radio>
    <hl-radio label="right">right</hl-radio>
    <hl-radio label="bottom">bottom</hl-radio>
    <hl-radio label="left">left</hl-radio>
  </hl-radio-group>

  <hl-tabs :tab-position="tabPosition" type="button" style="height: 200px;">
    <hl-tab-pane label="\u8C37\u6B4C\u6D4F\u89C8\u5668">\u8C37\u6B4C\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u706B\u72D0\u6D4F\u89C8\u5668">\u706B\u72D0\u6D4F\u89C8\u5668</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabPosition = ref('top')
<\/script>
`},{default:o(()=>[Wt]),_:1},8,["demos"]),Xt,Gt,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/slot","source-code":`<template>
  <hl-tabs>
    <hl-tab-pane>
      <template #label>
        <hl-icon class="sm m-r-xs"><two-application /></hl-icon>
        \u6211\u7684\u884C\u7A0B
      </template>
      \u6211\u7684\u884C\u7A0B
    </hl-tab-pane>
    <hl-tab-pane label="\u6D88\u606F\u4E2D\u5FC3">\u6D88\u606F\u4E2D\u5FC3</hl-tab-pane>
    <hl-tab-pane label="\u6B27\u670B\u6D4F\u89C8\u5668">\u6B27\u670B\u6D4F\u89C8\u5668</hl-tab-pane>
  </hl-tabs>
</template>
<script lang="ts" setup>

import { TwoApplication } from '@hongluan-ui/icons'
<\/script>
`},null,8,["demos"]),Ht,Jt,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/editable","source-code":`<template>
  <hl-tabs v-model="state.editableTabsValue" editable @edit="handleTabsEdit">
    <hl-tab-pane
      v-for="item in state.editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  editableTabsValue: '2',
  editableTabs: [
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ],
  tabIndex: 2,
})
const handleTabsEdit = (targetName, action) => {
  if (action === 'add') {
    let newTabName = ++state.tabIndex + ''
    state.editableTabs.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    state.editableTabsValue = newTabName
  }
  if (action === 'remove') {
    let tabs = state.editableTabs
    let activeName = state.editableTabsValue
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    state.editableTabsValue = activeName
    state.editableTabs = tabs.filter(tab => tab.name !== targetName)
  }
}

<\/script>
`},null,8,["demos"]),Kt,d(e,{fs:"",demos:r(b),"component-id":a,"path-name":"tabs/pane","source-code":`<template>
  <div style="margin-bottom: 20px;">
    <hl-button size="sm" @click="addTab()">
      add tab
    </hl-button>
  </div>
  <hl-tabs
    v-model="state.editableTabsValue"
    type="line"
    closable
    @tab-remove="removeTab"
  >
    <hl-tab-pane
      v-for="item in state.editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </hl-tab-pane>
  </hl-tabs>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  editableTabsValue: '2',
  editableTabs: [
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ],
  tabIndex: 2,
})

const addTab = () => {
  let newTabName = ++state.tabIndex + ''
  state.editableTabs.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content',
  })
  state.editableTabsValue = newTabName
}

const removeTab = targetName => {
  let tabs = state.editableTabs
  let activeName = state.editableTabsValue
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        let nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  state.editableTabsValue = activeName
  state.editableTabs = tabs.filter(tab => tab.name !== targetName)
}

<\/script>
`},null,8,["demos"]),Yt]),d(i)],64)}}};export{ee as default};
