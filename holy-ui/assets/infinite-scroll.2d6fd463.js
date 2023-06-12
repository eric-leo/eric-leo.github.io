import{p as g,R as p,ar as y,M as x,L as t,W as e,a3 as _,ag as j,U as k,B as h,V as r,a as v,I as b,Q as i,X as u,T as d,o as $}from"./vue.aa74a145.js";const O={class:"infinite-list",style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"}},S=g({setup(m){const n=p(0),s=()=>{n.value+=2};return(a,c)=>{const o=y("infinite-scroll");return x((t(),e("ul",O,[(t(!0),e(_,null,j(n.value,l=>(t(),e("li",{key:l,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},k(l),1))),128))])),[[o,s]])}}});var T=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const w=["infinite-scroll-disabled"],z={key:0},A={key:1},I=g({setup(m){const n=p(10),s=p(!1),a=h(()=>n.value>=20),c=h(()=>s.value||a.value),o=()=>{s.value=!0,setTimeout(()=>{n.value+=2,s.value=!1},2e3)};return(l,R)=>{const M=y("infinite-scroll");return t(),e("div",null,[x((t(),e("ul",{style:{overflow:"auto",height:"300px",padding:"0",margin:"0","list-style":"none"},"infinite-scroll-disabled":r(c)},[(t(!0),e(_,null,j(n.value,f=>(t(),e("li",{key:f,class:"p-md bg-primary text-inverse radius-xs m-b-sm"},k(f),1))),128))],8,w)),[[M,o]]),s.value?(t(),e("p",z,"\u52A0\u8F7D\u4E2D...")):v("",!0),r(a)?(t(),e("p",A,"\u6CA1\u6709\u66F4\u591A\u4E86")):v("",!0)])}}});var P=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const B=i("h1",null,"InfiniteScroll \u65E0\u9650\u6EDA\u52A8",-1),D=i("p",null,"\u6EDA\u52A8\u81F3\u5E95\u90E8\u65F6\uFF0C\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002",-1),E=i("h2",{id:"ji-chu-yong-fa"},[i("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),d(" \u57FA\u7840\u7528\u6CD5")],-1),F=i("p",null,[d("\u5728\u8981\u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u7684\u5217\u8868\u4E0A\u4E0A\u6DFB\u52A0"),i("code",null,"v-infinite-scroll"),d("\uFF0C\u5E76\u8D4B\u503C\u76F8\u5E94\u7684\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u53EF\u5B9E\u73B0\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u81EA\u52A8\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\u3002")],-1),L=i("h2",{id:"jin-yong-jia-zai"},[i("a",{class:"header-anchor",href:"#jin-yong-jia-zai"}),d(" \u7981\u7528\u52A0\u8F7D")],-1),Q=$('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>\u8282\u6D41\u65F6\u5EF6\uFF0C\u5355\u4F4D\u4E3A ms</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>\u89E6\u53D1\u52A0\u8F7D\u7684\u8DDD\u79BB\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A px</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>\u662F\u5426\u7ACB\u5373\u6267\u884C\u52A0\u8F7D\u65B9\u6CD5\uFF0C\u4EE5\u9632\u521D\u59CB\u72B6\u6001\u4E0B\u5185\u5BB9\u65E0\u6CD5\u6491\u6EE1\u5BB9\u5668\u3002</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>',2),W={setup(m){const n="infinite-scroll",s={"../../../examples/infinite-scroll/basic.vue":T,"../../../examples/infinite-scroll/disabled.vue":P};return(a,c)=>{const o=b("demo-block"),l=b("right-nav");return t(),e(_,null,[i("section",null,[B,D,E,F,u(o,{fs:"",demos:r(s),"component-id":n,"path-name":"infinite-scroll/basic","source-code":`<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none">
    <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const load = () => {
  count.value += 2
}
<\/script>
`},null,8,["demos"]),L,u(o,{fs:"",demos:r(s),"component-id":n,"path-name":"infinite-scroll/disabled","source-code":`<template>
  <div>
    <ul
      v-infinite-scroll="load"
      style="overflow:auto; height: 300px; padding:0; margin:0; list-style:none"
      :infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="p-md bg-primary text-inverse radius-xs m-b-sm">{{ i }}</li>
    </ul>
    <p v-if="loading">\u52A0\u8F7D\u4E2D...</p>
    <p v-if="noMore">\u6CA1\u6709\u66F4\u591A\u4E86</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const count = ref(10)
const loading = ref(false)

const noMore = computed(() => {
  return count.value >= 20
})
const disabled = computed(() => {
  return loading.value || noMore.value
})

const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
<\/script>
`},null,8,["demos"]),Q]),u(l)],64)}}};export{W as default};
