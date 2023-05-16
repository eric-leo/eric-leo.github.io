import{Q as s,_ as A,y as h,A as t,W as F,R as r,a5 as C,bB as p,X as y,br as g}from"./vue.e91292bd.js";import{_ as N}from"./index.68966418.js";import"./hongluan.7a8bc835.js";import"./highlight.a6f0727a.js";import"./hongluan-icons.70c7a857.js";const f={name:"component-doc",components:{"fx-demo0":function(){const{toDisplayString:e,createTextVNode:a,resolveComponent:B,withCtx:i,openBlock:E,createBlock:n}=p;function l(m,j){const c=B("fx-page-detail");return E(),n(c,{"detail-opt":m.data},{facilityNameList:i(({detail:u})=>[a(e(u.facilityNameList&&u.facilityNameList!=="-"&&u.facilityNameList.length?u.facilityNameList.join("\uFF1B"):"--"),1)]),equipNameList:i(({detail:u})=>[a(e(u.equipNameList&&u.equipNameList!=="--"?u.equipNameList.join("\uFF1B"):""),1)]),altitudeDatumName:i(({detail:u})=>[a(e(u.altitude)+"("+e(u.altitudeDatumName)+") ",1)]),default:i(()=>[a(" \u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F ")]),_:1},8,["detail-opt"])}const{defineComponent:d,ref:o,markRaw:w}=p,D=d({setup(){return{data:o({cols:[{label:"\u76D1\u6D4B\u70B9\u540D\u79F0",key:"unitName"},{label:"\u76D1\u6D4B\u70B9\u7F16\u7801",key:"unitCode"},{label:"\u76D1\u6D4B\u4E3B\u4F53",key:"regionName"},{label:"\u8BBE\u65BD\u7C7B\u578B",key:"facilityTypeName"},{label:"\u8BBE\u65BD\u540D\u79F0",slot:"facilityNameList"},{label:"\u70B9\u4F4D\u7C7B\u578B",key:"unitTypeName"},{label:"\u4F4D\u7F6E",key:"address"},{label:"\u76D1\u6D4B\u8BBE\u5907",slot:"equipNameList"},{label:"\u7ECF\u5EA6",key:"longitude"},{label:"\u7EAC\u5EA6",key:"latitude"},{label:"\u9AD8\u7A0B(\u9AD8\u7A0B\u57FA\u51C6)",slot:"altitudeDatumName"},{label:"\u542F\u7528\u65F6\u95F4",key:"useStateTime"},{label:"\u6700\u65B0\u66F4\u65B0\u65F6\u95F4",key:"updatedAt"},{label:"\u63CF\u8FF0",key:"description"}],imageOpt:{show:!0,title:"\u76F8\u5173\u9644\u4EF61",list:["https://www.jczhdev.etcc.group/minio/jczhdev/images/6F661A1B59E54694BF13A030928D0F55.jpg","https://www.jczhdev.etcc.group/minio/jczhdev/images/F53293A79C934C659B9469B0C84E735F.jpg"]},data:{id:"1561646198942564353",regionId:"1543780635568394242",regionName:"\u6D77\u5FB7\u516C\u56ED",unitName:"\u76D1\u6D4B\u70B9\u6D4B\u8BD5",unitCode:"1234567890",address:"\u5317\u4EAC\u5E02\u897F\u57CE\u533A\u666F\u5C71\u897F\u885744\u5357\u95E8\u666F\u5C71\u516C\u56ED\u4E07\u6625\u4EAD",longitude:"116.482457",latitude:"39.943797",useState:1,useStateName:"\u542F\u7528\u4E2D",useStateTime:"2022-08-23 17:01:19",description:"\u5B59\u6D4B\u8BD5",equipIdList:["1543782718967271426","1544964346334892033"],equipNameList:["\u9999\u82D1\u897F\u56ED\u4E1C\u5927\u95E8\u7403\u673A","\u8BBE\u5907\u540D\u79F01"],unitType:"08",unitTypeName:"\u706B\u8F66\u7AD9\u6216\u957F\u9014\u6C7D\u8F66\u7AD9",altitude:"100",altitudeDatum:"ALTITUD_EDATUM_1985",altitudeDatumName:"1985\u56FD\u5BB6\u9AD8\u7A0B",streetAreaCode:"320902050",streetAreaCodeName:"\u4F0D\u4F51\u8857\u9053",facilityType:"SZSSLX_RQ",facilityTypeName:"",facilityIdList:["0"],facilityNameList:[],updatedAt:"2022-08-24 10:23:04"}})}}});return{render:l,...D}}()}},b=t("h1",null,"PageDetail \u4E3B\u9875\u9762\u8868\u683C\u8BE6\u60C5\u7EC4\u4EF6",-1),_=t("h2",{id:"ji-ben-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-ben-yong-fa"}),y(" \u57FA\u672C\u7528\u6CD5")],-1),k=t("pre",null,[t("code",{class:"html"},` <template>
  <fx-page-detail :detail-opt="data">
    <!-- \u8BBE\u65BD\u540D\u79F0 -->
    <template #facilityNameList="{ detail }">
      {{detail.facilityNameList&&detail.facilityNameList!=='-'&&detail.facilityNameList.length?detail.facilityNameList.join('\uFF1B'):"--"}}
    </template>
    <!-- \u76D1\u6D4B\u8BBE\u5907 -->
    <template #equipNameList="{ detail }">
      {{detail.equipNameList&&detail.equipNameList!=='--'?detail.equipNameList.join('\uFF1B'):''}}
    </template>
    <!-- altitudeDatumName \u9AD8\u7A0B(\u9AD8\u7A0B\u57FA\u51C6)-->
    <template #altitudeDatumName="{ detail }">
      {{detail.altitude}}({{detail.altitudeDatumName}})
    </template>
     <template #default>
      \u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F\u6B64\u5904\u53EF\u81EA\u5B9A\u4E49\u4FE1\u606F
    </template>
  </fx-page-detail>
</template>
<script>
import { defineComponent, ref, markRaw } from 'vue'
import { TwoPage } from '@hongluan-ui/icons'

export default defineComponent({
  setup() {
    const data = ref({
      // icon: markRaw(TwoPage),
      cols: [
        {
          label: '\u76D1\u6D4B\u70B9\u540D\u79F0',
          key: 'unitName',
        },
        {
          label: '\u76D1\u6D4B\u70B9\u7F16\u7801',
          key: 'unitCode',
        },
        {
          label: '\u76D1\u6D4B\u4E3B\u4F53',
          key: 'regionName',
        },
        {
          label: '\u8BBE\u65BD\u7C7B\u578B',
          key: 'facilityTypeName',
        },
        {
          label: '\u8BBE\u65BD\u540D\u79F0',
          slot: 'facilityNameList',
        },
        {
          label: '\u70B9\u4F4D\u7C7B\u578B',
          key: 'unitTypeName',
        },
        {
          label: '\u4F4D\u7F6E',
          key: 'address',
        },
        {
          label: '\u76D1\u6D4B\u8BBE\u5907',
          slot: 'equipNameList',
        },
        {
          label: '\u7ECF\u5EA6',
          key: 'longitude',
        },
        {
          label: '\u7EAC\u5EA6',
          key: 'latitude',
        },
        {
          label: '\u9AD8\u7A0B(\u9AD8\u7A0B\u57FA\u51C6)',
          slot: 'altitudeDatumName',
        },
        {
          label: '\u542F\u7528\u65F6\u95F4',
          key: 'useStateTime',
        },
        {
          label: '\u6700\u65B0\u66F4\u65B0\u65F6\u95F4',
          key: 'updatedAt',
        },
        {
          label: '\u63CF\u8FF0',
          key: 'description',
        },
      ],
      imageOpt: {
        show: true,
        title: '\u76F8\u5173\u9644\u4EF61',
        list: ['https://www.jczhdev.etcc.group/minio/jczhdev/images/6F661A1B59E54694BF13A030928D0F55.jpg', 'https://www.jczhdev.etcc.group/minio/jczhdev/images/F53293A79C934C659B9469B0C84E735F.jpg'],
      },
      data: {
        "id":"1561646198942564353",
        "regionId":"1543780635568394242",
        "regionName":"\u6D77\u5FB7\u516C\u56ED",
        "unitName":"\u76D1\u6D4B\u70B9\u6D4B\u8BD5",
        "unitCode":"1234567890",
        "address":"\u5317\u4EAC\u5E02\u897F\u57CE\u533A\u666F\u5C71\u897F\u885744\u5357\u95E8\u666F\u5C71\u516C\u56ED\u4E07\u6625\u4EAD",
        "longitude":"116.482457",
        "latitude":"39.943797",
        "useState":1,
        "useStateName":"\u542F\u7528\u4E2D",
        "useStateTime":"2022-08-23 17:01:19",
        "description":"\u5B59\u6D4B\u8BD5",
        "equipIdList":["1543782718967271426","1544964346334892033"],"equipNameList":["\u9999\u82D1\u897F\u56ED\u4E1C\u5927\u95E8\u7403\u673A","\u8BBE\u5907\u540D\u79F01"],"unitType":"08","unitTypeName":"\u706B\u8F66\u7AD9\u6216\u957F\u9014\u6C7D\u8F66\u7AD9",
        "altitude":"100",
        "altitudeDatum":"ALTITUD_EDATUM_1985",
        "altitudeDatumName":"1985\u56FD\u5BB6\u9AD8\u7A0B",
        "streetAreaCode":"320902050",
        "streetAreaCodeName":"\u4F0D\u4F51\u8857\u9053",
        "facilityType":"SZSSLX_RQ","facilityTypeName":"","facilityIdList":["0"],"facilityNameList":[],"updatedAt":"2022-08-24 10:23:04"
        },
    })

    return {
      data,
    }
  },
})
<\/script>
`)],-1),L=g('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>detailOpt</td><td>\u8BE6\u60C5\u5361\u7247\u914D\u7F6E\u9879</td><td>PageDetailOption</td><td>PageDetailOption</td><td></td></tr></tbody></table><h2 id="detailopt-can-shu"><a class="header-anchor" href="#detailopt-can-shu"></a> detailOpt \u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u8BE6\u60C5\u5361\u7247\u6807\u9898</td><td>string</td><td>string</td><td>\u57FA\u672C\u4FE1\u606F</td></tr><tr><td>imageOpt</td><td>\u7167\u7247\u8BE6\u60C5</td><td>{show?: boolean title?: string list?: string[] }</td><td>{show?: boolean title?: string list?: string[] }</td><td></td></tr><tr><td>data</td><td>\u6570\u636E</td><td>Indexable</td><td>Indexable</td><td></td></tr><tr><td>cols</td><td>\u5217\u8868\u9879</td><td>{label?: string key?: string slot?: string}</td><td>{label?: string key?: string slot?: string}</td><td></td></tr></tbody></table>',4);function T(e,a,B,i,E,n){const l=s("fx-demo0"),d=s("demo-block"),o=s("right-nav");return A(),h(C,null,[t("section",null,[b,_,F(d,{fs:""},{source:r(()=>[F(l)]),highlight:r(()=>[k]),_:1}),L]),F(o)],64)}var z=N(f,[["render",T]]);export{z as default};
