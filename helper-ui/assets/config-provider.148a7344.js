import{p as _,U as x,F as n,L as g,W as m,X as o,P as s,V as p,M as d,R as u,C as z,Q as t,a1 as y,o as C}from"./vue.d3316dca.js";import{H as M}from"./index.ee32a861.js";import"./vendor.a3b1f0f2.js";import"./highlight.06dca650.js";import"./helper-icons.4adfdd39.js";const P=d("open"),j=_({setup(h){const a=x({max:3}),e=()=>{M("this is a message.")};return(c,i)=>{const r=n("hl-button"),l=n("hl-config-provider");return g(),m("div",null,[o(l,{message:p(a)},{default:s(()=>[o(r,{onClick:e},{default:s(()=>[P]),_:1})]),_:1},8,["message"])])}}});var k=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const O=d("\u5207\u6362\u8BED\u8A00"),W=_({setup(h){const a=u({name:"zh-cn",hl:{pagination:{goto:"\u53BB\u5F80",pagesize:"\u5927\u5C0F",total:"\u5171 {total}",pageClassifier:"",deprecationWarning:"\u5E9F\u5F03"}}}),e=u({name:"en",hl:{pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the Pagination documentation for more details"}}}),c=()=>{const i=a.value;a.value=e.value,e.value=i};return(i,r)=>{const l=n("hl-pagination"),f=n("hl-config-provider"),v=n("hl-button"),b=n("hl-group");return g(),z(b,null,{default:s(()=>[o(f,{locale:e.value},{default:s(()=>[o(l,{layout:"prev, pager, next, total",total:50})]),_:1},8,["locale"]),o(v,{style:{"margin-left":"8px","vertical-align":"middle"},onClick:c},{default:s(()=>[O]),_:1})]),_:1})}}});var F=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const S=t("h1",null,"Config Provider \u5168\u5C40\u914D\u7F6E",-1),H=t("p",null,"Config Provider \u88AB\u7528\u6765\u63D0\u4F9B\u5168\u5C40\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u8BA9\u4F60\u7684\u914D\u7F6E\u80FD\u591F\u5728\u5168\u5C40\u90FD\u80FD\u591F\u88AB\u8BBF\u95EE\u5230\uFF0CConfig Provider \u4F7F\u7528\u4E86 Vue \u7684 provide/inject \u7279\u6027",-1),T=t("h2",{id:"guo-ji-hua-xiang-guan-pei-zhi"},[t("a",{class:"header-anchor",href:"#guo-ji-hua-xiang-guan-pei-zhi"}),d(" \u56FD\u9645\u5316 \u76F8\u5173\u914D\u7F6E")],-1),$=t("p",null,"\u901A\u8FC7 Config Provider \u6765\u914D\u7F6E\u591A\u8BED\u8A00\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u8BED\u8A00\u3002",-1),A=t("div",null,[t("p",null,"\u4F7F\u7528\u4E24\u4E2A\u5C5E\u6027\u6765\u63D0\u4F9B i18n \u76F8\u5173\u914D\u7F6E")],-1),B=t("h2",{id:"message-xiang-guan-pei-zhi"},[t("a",{class:"header-anchor",href:"#message-xiang-guan-pei-zhi"}),d(" Message \u76F8\u5173\u914D\u7F6E")],-1),D=C('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>locale</td><td>\u7FFB\u8BD1\u6587\u672C\u5BF9\u8C61</td><td>Object&lt;Language&gt;</td><td>zh-cn / zh-tw / en</td><td>Chinese</td></tr><tr><td>size</td><td>\u5168\u5C40\u7EC4\u4EF6\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>zIndex</td><td>\u5168\u5C40\u521D\u59CB\u5316zIndex</td><td>number</td><td>-</td><td>-</td></tr><tr><td>message</td><td>Message\u76F8\u5173\u914D\u7F6E, <a href="#message-attributes">\u53C2\u89C1\u4E0B\u8868</a></td><td>MessageGlobalConfig</td><td>-</td><td>\u53C2\u89C1\u4E0B\u8868</td></tr><tr><td>experimental-features</td><td>\u5B9E\u9A8C\u7279\u6027\uFF0C\u9ED8\u8BA4\u5168\u90E8\u914D\u7F6E\u4E3Afalse</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="message-attributes"><a class="header-anchor" href="#message-attributes"></a> Message Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>max</td><td>\u540C\u65F6\u663E\u793AMessage\u7684\u6700\u5927\u6570\u91CF</td><td>number</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table>',6),Q={setup(h){const a="config-provider",e={"../../../examples/config-provider/message.vue":k,"../../../examples/config-provider/usage.vue":F};return(c,i)=>{const r=n("demo-block"),l=n("right-nav");return g(),m(y,null,[t("section",null,[S,H,T,$,o(r,{fs:"",demos:p(e),"component-id":a,"path-name":"config-provider/usage","source-code":`<template>
  <hl-group>
    <hl-config-provider :locale="locale2">
      <hl-pagination layout="prev, pager, next, total" :total="50" />
    </hl-config-provider>
    <hl-button style="margin-left: 8px; vertical-align: middle" @click="toggle">\u5207\u6362\u8BED\u8A00</hl-button>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const locale1 = ref({
  name: 'zh-cn',
  hl: {
    pagination: {
      goto: '\u53BB\u5F80',
      pagesize: '\u5927\u5C0F',
      total: '\u5171 {total}',
      pageClassifier: '',
      deprecationWarning: '\u5E9F\u5F03',
    },
  },
})
const locale2 = ref({
  name: 'en',
  hl: {
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: '',
      deprecationWarning: 'Deprecated usages detected, please refer to the Pagination documentation for more details',
    },
  },
})
const toggle = () => {
  const temp = locale1.value
  locale1.value = locale2.value
  locale2.value = temp
}

<\/script>
`},{default:s(()=>[A]),_:1},8,["demos"]),B,o(r,{fs:"",demos:p(e),"component-id":a,"path-name":"config-provider/message","source-code":`<template>
  <div>
    <hl-config-provider :message="config">
      <hl-button @click="open">open</hl-button>
    </hl-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { HlMessage } from 'helper-ui'

const config = reactive({
  max: 3,
})
const open = () => {
  HlMessage('this is a message.')
}

<\/script>
`},null,8,["demos"]),D]),o(l)],64)}}};export{Q as default};
