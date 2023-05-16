import{Q as f,_ as x,y as B,A as t,W as o,R as F,a5 as _,bB as E,X as h,br as C}from"./vue.e91292bd.js";import{_ as A}from"./index.68966418.js";import"./hongluan.7a8bc835.js";import"./highlight.a6f0727a.js";import"./hongluan-icons.70c7a857.js";const D={name:"component-doc",components:{"fx-demo0":function(){const{resolveComponent:n,openBlock:a,createBlock:r}=E;function l(e,u){const i=n("fx-file-upload");return a(),r(i,{ids:e.ids,"onUpdate:ids":u[0]||(u[0]=d=>e.ids=d),"list-type":"card",accept:".png,.jpg,.PNG,.JPG",limit:5,"file-service":"http://swan-gateway-xixian-dev.k8s.etcc.group/demo/files"},null,8,["ids"])}const{defineComponent:c,ref:p}=E,s=c({setup(){return{ids:p("")}}});return{render:l,...s}}(),"fx-demo1":function(){const{resolveComponent:n,openBlock:a,createBlock:r}=E;function l(e,u){const i=n("fx-file-upload");return a(),r(i,{ids:e.ids,"onUpdate:ids":u[0]||(u[0]=d=>e.ids=d),"file-service":"http://swan-gateway-xixian-dev.k8s.etcc.group/demo/files",accept:".png,.jpg,.PNG,.JPG,.PDF,pdf,.xlsx,.xls,.doc,.docx",limit:5,"list-type":"text"},null,8,["ids"])}const{defineComponent:c,ref:p}=E,s=c({setup(){return{ids:p("")}}});return{render:l,...s}}(),"fx-demo2":function(){const{resolveComponent:n,openBlock:a,createBlock:r}=E;function l(e,u){const i=n("fx-file-upload");return a(),r(i,{"text-button":"\u5BFC\u5165","file-service":"http://swan-gateway-xixian-dev.k8s.etcc.group/demo/files","list-type":"text","show-file-list":!1,accept:".xls,.xlsx",onHandleSuccess:e.handleSuccess},null,8,["onHandleSuccess"])}const{defineComponent:c,ref:p}=E,s=c({setup(){return{ids:p(""),handleSuccess:()=>{alert("\u5BFC\u5165\u6210\u529F")}}}});return{render:l,...s}}(),"fx-demo3":function(){const{resolveComponent:n,createVNode:a,openBlock:r,createElementBlock:l}=E,c={style:{display:"block",width:"100%",height:"126px"}};function p(i,d){const m=n("fx-file-upload");return r(),l("div",c,[a(m,{ids:i.ids,"onUpdate:ids":d[0]||(d[0]=g=>i.ids=g),"list-type":"card","get-file-list":i.getFileList,disabled:!0},null,8,["ids","get-file-list"])])}const{defineComponent:s,ref:e}=E,u=s({setup(){return{ids:e("3D19F703997F43DA9E56C18D355423C1,B1A8EA428E714BB0A24B4C1423633E0C,EF2F47E96AB44F9A987E3B7E9CDE66D2"),getFileList:async({ids:m,setFileList:g})=>{g([{dirUrl:"/xixian_static/images/FFF1DFE5D94E4969AE245226942942C7.jpg",id:"3D19F703997F43DA9E56C18D355423C1",originalName:"1 - \u526F\u672C - \u526F\u672C.jpg",name:"1 - \u526F\u672C - \u526F\u672C.jpg",pathUrl:"http://swanfile.etcc.group",size:38020,type:"IMAGE",url:"http://swanfile.etcc.group/xixian_static/images/FFF1DFE5D94E4969AE245226942942C7.jpg"},{dirUrl:"/xixian_static/images/201D015F6E0845BF93BDF6D70B54457F.jpg",id:"B1A8EA428E714BB0A24B4C1423633E0C",originalName:"2 - \u526F\u672C.jpg",name:"2 - \u526F\u672C.jpg",pathUrl:"http://swanfile.etcc.group",size:13278,type:"IMAGE",url:"http://swanfile.etcc.group/xixian_static/images/201D015F6E0845BF93BDF6D70B54457F.jpg"},{dirUrl:"/xixian_static/images/EF2F47E96AB44F9A987E3B7E9CDE66D2.jpg",id:"EF2F47E96AB44F9A987E3B7E9CDE66D2",originalName:"3.jpg",name:"3.jpg",pathUrl:"http://swanfile.etcc.group",size:25553,type:"IMAGE",url:"http://swanfile.etcc.group/xixian_static/images/EF2F47E96AB44F9A987E3B7E9CDE66D2.jpg"}])}}}});return{render:p,...u}}()}},v=t("h1",null,"FileUpload \u4E0A\u4F20\uFF08\u56FE\u7247\u3001\u6587\u4EF6\u3001\u5BFC\u5165\uFF09",-1),y=t("h2",{id:"shang-chuan-tu-pian"},[t("a",{class:"header-anchor",href:"#shang-chuan-tu-pian"}),h(" \u4E0A\u4F20\u56FE\u7247")],-1),j=t("pre",null,[t("code",{class:"html"},` <template>
  <fx-file-upload
    v-model:ids="ids"
    list-type="card"
    accept=".png,.jpg,.PNG,.JPG"
    :limit="5"
    file-service="http://swan-gateway-xixian-dev.k8s.etcc.group/demo/files"
  />
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
`)],-1),w=t("h2",{id:"shang-chuan-wen-jian"},[t("a",{class:"header-anchor",href:"#shang-chuan-wen-jian"}),h(" \u4E0A\u4F20\u6587\u4EF6")],-1),b=t("pre",null,[t("code",{class:"html"},` <template>
  <fx-file-upload
    v-model:ids="ids"
    file-service="http://swan-gateway-xixian-dev.k8s.etcc.group/demo/files"
    accept=".png,.jpg,.PNG,.JPG,.PDF,pdf,.xlsx,.xls,.doc,.docx"
    :limit="5"
    list-type="text"
  />
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
`)],-1),k=t("h2",{id:"dao-ru-ji-yu-mo-ban-dao-ru"},[t("a",{class:"header-anchor",href:"#dao-ru-ji-yu-mo-ban-dao-ru"}),h(" \u5BFC\u5165\uFF08\u57FA\u4E8E\u6A21\u7248\u5BFC\u5165\uFF09")],-1),U=t("pre",null,[t("code",{class:"html"},` <template>
  <fx-file-upload
    text-button="\u5BFC\u5165"
    file-service="http://swan-gateway-xixian-dev.k8s.etcc.group/demo/files"
    list-type="text"
    :show-file-list="false"
    accept=".xls,.xlsx"
    @handleSuccess="handleSuccess"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const ids = ref('')
    const handleSuccess = () => {
      alert('\u5BFC\u5165\u6210\u529F')
    }

    return {
      ids,
      handleSuccess,
    }
  },
})
<\/script>
`)],-1),G=t("h2",{id:"tu-pian-hui-xian-duo-yong-yu-xiang-qing"},[t("a",{class:"header-anchor",href:"#tu-pian-hui-xian-duo-yong-yu-xiang-qing"}),h(" \u56FE\u7247\u56DE\u663E\uFF08\u591A\u7528\u4E8E\u8BE6\u60C5\uFF09")],-1),N=t("pre",null,[t("code",{class:"html"},` <template>
  <div style="display: block; width: 100%; height: 126px;">
    <fx-file-upload v-model:ids="ids" list-type="card" :get-file-list="getFileList" :disabled="true" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const ids = ref('3D19F703997F43DA9E56C18D355423C1,B1A8EA428E714BB0A24B4C1423633E0C,EF2F47E96AB44F9A987E3B7E9CDE66D2')

    const getFileList = async ({ ids, setFileList }) => {
      // \u63A5\u53E3\u8C03\u7528\u793A\u4F8B
      // if (ids && ids.length > 0) {
      //   const result = await apiFileServiceObj.listFiles(ids.split(","));
      //   if (+result.code === 0) {
      //     const list = result.data.map(item => { item.name = item.originalName; return item; });
      //     setFileList(list);
      //   }
      // }
      setFileList([
        {
          dirUrl: '/xixian_static/images/FFF1DFE5D94E4969AE245226942942C7.jpg',
          id: '3D19F703997F43DA9E56C18D355423C1',
          originalName: '1 - \u526F\u672C - \u526F\u672C.jpg',
          name: '1 - \u526F\u672C - \u526F\u672C.jpg',
          pathUrl: 'http://swanfile.etcc.group',
          size: 38020,
          type: 'IMAGE',
          url: 'http://swanfile.etcc.group/xixian_static/images/FFF1DFE5D94E4969AE245226942942C7.jpg',
        },
        {
          dirUrl: '/xixian_static/images/201D015F6E0845BF93BDF6D70B54457F.jpg',
          id: 'B1A8EA428E714BB0A24B4C1423633E0C',
          originalName: '2 - \u526F\u672C.jpg',
          name: '2 - \u526F\u672C.jpg',
          pathUrl: 'http://swanfile.etcc.group',
          size: 13278,
          type: 'IMAGE',
          url: 'http://swanfile.etcc.group/xixian_static/images/201D015F6E0845BF93BDF6D70B54457F.jpg',
        },
        {
          dirUrl: '/xixian_static/images/EF2F47E96AB44F9A987E3B7E9CDE66D2.jpg',
          id: 'EF2F47E96AB44F9A987E3B7E9CDE66D2',
          originalName: '3.jpg',
          name: '3.jpg',
          pathUrl: 'http://swanfile.etcc.group',
          size: 25553,
          type: 'IMAGE',
          url: 'http://swanfile.etcc.group/xixian_static/images/EF2F47E96AB44F9A987E3B7E9CDE66D2.jpg',
        },
      ])
    }

    return {
      ids,
      getFileList,
    }
  },
})
<\/script>
`)],-1),L=C('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:ids</td><td>\u53CC\u5411\u7ED1\u5B9A\uFF0C\u6587\u4EF6\u4E0A\u4F20\u540E\u7684\u6570\u7EC4\u5B57\u7B26\u4E32,\u8868\u5355\u7ED1\u5B9A</td><td>string</td><td>-</td><td>-</td></tr><tr><td>token</td><td>RequestHeader</td><td>string</td><td>-</td><td>-</td></tr><tr><td>file-service</td><td>\u4E0A\u4F20\u6587\u4EF6\u5730\u5740</td><td>string</td><td>-</td><td>-</td></tr><tr><td>list-type</td><td>\u6587\u4EF6\u5217\u8868\u7684\u7C7B\u578B</td><td>string</td><td>text/picture/card</td><td>text</td></tr><tr><td>accept</td><td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>limit</td><td>\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570</td><td>number</td><td>-</td><td>-</td></tr><tr><td>show-file-list</td><td>\u662F\u5426\u663E\u793A\u6587\u4EF6\u5217\u8868</td><td>boolean</td><td>true/false</td><td>true</td></tr><tr><td>multiple</td><td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>getFileList</td><td>\u7528\u4E8E\u56DE\u663E\u7684\u56DE\u8C03\u65B9\u6CD5</td><td>function({ids, setFileList(list)})</td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>true/false</td><td>false</td></tr><tr><td>text-button</td><td>\u4E0A\u4F20\u6309\u94AE\u6587\u6848</td><td>string</td><td>-</td><td>\u70B9\u51FB\u4E0A\u4F20</td></tr><tr><td>file-size-limit</td><td>\u6587\u4EF6\u5927\u5C0F\u5C3A\u5BF8,\u5355\u4F4DM</td><td>object</td><td>-</td><td>{video: 100, image: 5}</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>handle-success</td><td>\u4E0A\u4F20\u6210\u529F\u7684\u56DE\u8C03</td><td>\u4E00\u822C\u4E0A\u4F20\uFF08fileList\uFF09\uFF1B\u5BFC\u5165\u4E0A\u4F20\uFF08resonse\uFF09</td></tr></tbody></table>',4);function P(n,a,r,l,c,p){const s=f("fx-demo0"),e=f("demo-block"),u=f("fx-demo1"),i=f("fx-demo2"),d=f("fx-demo3"),m=f("right-nav");return x(),B(_,null,[t("section",null,[v,y,o(e,{fs:""},{source:F(()=>[o(s)]),highlight:F(()=>[j]),_:1}),w,o(e,{fs:""},{source:F(()=>[o(u)]),highlight:F(()=>[b]),_:1}),k,o(e,{fs:""},{source:F(()=>[o(i)]),highlight:F(()=>[U]),_:1}),G,o(e,{fs:""},{source:F(()=>[o(d)]),highlight:F(()=>[N]),_:1}),L]),o(m)],64)}var V=A(D,[["render",P]]);export{V as default};
