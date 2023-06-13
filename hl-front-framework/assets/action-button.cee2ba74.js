import{Q as r,_ as B,y as x,A as t,X as m,W as o,R as a,a5 as C,bB as _,br as A}from"./vue.e91292bd.js";import{H as F}from"./hongluan-icons.70c7a857.js";import{_ as g}from"./index.68966418.js";import"./hongluan.7a8bc835.js";import"./highlight.a6f0727a.js";const k={name:"component-doc",components:{"fx-demo0":function(){const{resolveComponent:e,openBlock:d,createBlock:i}=_;function l(u,s){const c=e("fx-action-button");return d(),i(c,{label:"\u65B0\u5EFA\u6309\u94AE"})}const{defineComponent:h,ref:p}=_,n=h({setup(){return{ids:p("")}}});return{render:l,...n}}(),"fx-demo1":function(){const{resolveComponent:e,createVNode:d,withCtx:i,openBlock:l,createBlock:h}=_;function p(f,$){const E=e("TwoEdit"),b=e("fx-action-button");return l(),h(b,{label:"\u65B0\u5EFA\u6309\u94AE"},{icon:i(()=>[d(E)]),_:1})}const{defineComponent:n,ref:u}=_,{TwoEdit:s}=F,c=n({components:{TwoEdit:s},setup(){return{ids:u("")}}});return{render:p,...c}}()}},v=t("h2",{id:"mo-ren"},[t("a",{class:"header-anchor",href:"#mo-ren"}),m(" \u9ED8\u8BA4")],-1),w=t("pre",null,[t("code",{class:"html"},` <template>
  <fx-action-button label="\u65B0\u5EFA\u6309\u94AE" />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const ids = ref('')

    return {
      ids,
    }
  },
})
<\/script>
`)],-1),y=t("h2",{id:"zi-ding-yi-tu-biao"},[t("a",{class:"header-anchor",href:"#zi-ding-yi-tu-biao"}),m(" \u81EA\u5B9A\u4E49\u56FE\u6807")],-1),T=t("pre",null,[t("code",{class:"html"},` <template>
  <fx-action-button label="\u65B0\u5EFA\u6309\u94AE">
    <template #icon>
      <TwoEdit />
    </template>
  </fx-action-button>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { TwoEdit } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoEdit },
  setup() {
    const ids = ref('')

    return {
      ids,
    }
  },
})
<\/script>
`)],-1),D=A('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6587\u5B57</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u5355\u51FB\u4E8B\u4EF6</td><td></td></tr></tbody></table>',4);function V(e,d,i,l,h,p){const n=r("hl-tag"),u=r("fx-demo0"),s=r("demo-block"),c=r("fx-demo1"),f=r("right-nav");return B(),x(C,null,[t("section",null,[t("h1",null,[m("\u7E41\u661F\u4E3B\u9898\u4E0B\u7684\u52A8\u4F5C\u6309\u94AE "),o(n,{size:"sm"},{default:a(()=>[m(" >= 1.2.31 ")]),_:1})]),v,o(s,{fs:""},{source:a(()=>[o(u)]),highlight:a(()=>[w]),_:1}),y,o(s,{fs:""},{source:a(()=>[o(c)]),highlight:a(()=>[T]),_:1}),D]),o(f)],64)}var U=g(k,[["render",V]]);export{U as default};
