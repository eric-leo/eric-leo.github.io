import{Q as S,_ as K,y as J,A as r,W as _,R as N,a5 as q,bB as k,X as P,br as U}from"./vue.e91292bd.js";import{_ as $}from"./index.68966418.js";import"./hongluan.7a8bc835.js";import"./highlight.a6f0727a.js";import"./hongluan-icons.70c7a857.js";const G={name:"component-doc",components:{"fx-demo0":function(){const{createTextVNode:s,resolveComponent:o,withCtx:t,createVNode:u,createElementVNode:m,toDisplayString:C,openBlock:f,createBlock:p}=k,g=m("span",{class:"m-r-md"},"\u81EA\u5B9A\u4E49Slot\uFF1A",-1),y={style:{"margin-left":"300px"}},v={href:"javascript:"},h={href:"javascript:"};function A(e,l){const i=o("hl-button"),D=o("hl-checkbox"),R=o("two-table"),F=o("hl-icon"),w=o("hl-radio"),T=o("two-chart-pie"),Y=o("hl-group"),V=o("fx-page-table"),j=o("hl-panel");return f(),p(j,{borderless:"",padding:"var(--xl)","body-padding":"0","body-class":"m-t-lg"},{default:t(()=>[u(V,{ref:"tableRef",cols:e.cols,"table-data":e.tableData,"search-items":e.searchItems,"data-fetcher":e.getData,"selector-col-count":"count-xl-2 count-lg-1 count-md-1","search-placement":"top","table-props":e.tableProps,onSortChange:e.sortChange},{"searchbar-prefix":t(()=>[u(i,{effect:"light",onClick:e.resetFields},{default:t(()=>[s("\u6E05\u7A7A")]),_:1},8,["onClick"])]),checkbox1:t(()=>[g,u(D,{modelValue:e.checked1,"onUpdate:modelValue":l[0]||(l[0]=n=>e.checked1=n),label:1,bold:""},{default:t(()=>[s("\u5907\u9009\u9879")]),_:1},8,["modelValue"]),u(D,{modelValue:e.checked1,"onUpdate:modelValue":l[1]||(l[1]=n=>e.checked1=n),label:2,bold:""},{default:t(()=>[s("\u5907\u9009\u9879")]),_:1},8,["modelValue"]),u(D,{modelValue:e.checked1,"onUpdate:modelValue":l[2]||(l[2]=n=>e.checked1=n),label:0},{default:t(()=>[s("\u672A\u52A0\u7C97")]),_:1},8,["modelValue"])]),customExpand:t(({row:n})=>[m("span",y,C(n.title)+" \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49",1)]),detail:t(({row:n})=>[m("a",v,C(n.title),1)]),status:t(({row:n})=>[m("a",h,C(n.status),1)]),"toolbar-extra-before":t(()=>[u(Y,{merge:"",indent:""},{default:t(()=>[u(w,{modelValue:e.displayType,"onUpdate:modelValue":l[3]||(l[3]=n=>e.displayType=n),label:"list",custom:"",title:"\u8868\u683C\u5C55\u793A"},{default:t(()=>[u(i,{effect:"light",type:"primary",equal:""},{default:t(()=>[u(F,null,{default:t(()=>[u(R)]),_:1})]),_:1})]),_:1},8,["modelValue"]),u(w,{modelValue:e.displayType,"onUpdate:modelValue":l[4]||(l[4]=n=>e.displayType=n),label:"chart",custom:"",title:"\u56FE\u5F62\u5C55\u793A"},{default:t(()=>[u(i,{effect:"light",type:"primary",equal:""},{default:t(()=>[u(F,null,{default:t(()=>[u(T)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["cols","table-data","search-items","data-fetcher","table-props","onSortChange"])]),_:1})}const{defineComponent:I,ref:b,reactive:a,watch:B}=k,d={title:"2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A",companyName:"\u67D0\u67D0\u67D0\u4F01\u4E1A",areaName:"\u91D1\u6E56\u53BF",person:"\u674E\u6653\u5FE0",status:"\u5DF2\u5B8C\u6210"},E=I({setup(){const e=b([]);e.value=new Array(10).fill("").map((c,x)=>({...d,id:x+1}));const l=b([{title:"",width:"66px",align:"center",expand:{slotName:"customExpand",hideLabel:!1}},{title:"\u5E8F\u53F7",align:"center",slotName:"tableIndex",prop:"tableIndex"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title",sortable:!0},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person"},{title:"\u5B8C\u6210\u72B6\u6001",slotName:"status",prop:"status"}]),i=a([{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:"",name:"industry",prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"}]},{type:"select",label:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",placeholder:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",value:"",name:"status",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u5B8C\u6210",code:"1"},{name:"\u672A\u5B8C\u6210",code:"0"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"},{span:"grid-col-span-xl-2",type:"slot",slotName:"checkbox1",value:""}]),D=()=>{var c;(c=Y.value)==null||c.resetFields()};i.splice(1,0,{type:"input",label:"\u57F9\u8BAD\u673A\u6784\u540D\u79F0",placeholder:"\u57F9\u8BAD\u673A\u6784\u540D\u79F0",value:"",name:"trainInstitutionName"});const R=c=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+c)},F=({pageSize:c,currentPage:x,params:z,setTotal:L})=>{console.log(c,x,z),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)"),e.value=new Array(10).fill("").map((le,oe)=>({...d,id:Math.random()})),L(100)},w={pageSize:10,currentPage:1,total:0},T=b(!1),Y=b();B(T,()=>{Y.value.searchSlotChanged({checked1:T.value})});const V=a({"row-class-name":({row:c,rowIndex:x})=>(console.log("\u884C",c),x===1?"bg-warning opacity-4":x===3?"bg-info opacity-3":"")});return{cols:l,tableData:e,searchItems:i,showDetail:R,defaultPagination:w,getData:F,checked1:T,tableRef:Y,tableProps:V,tableRowClassName:({rowIndex:c})=>c===1?"warning-row":c===3?"success-row":"",resetFields:D,sortChange:(c,x)=>{console.log(c,x)}}}});return{render:A,...E}}(),"fx-demo1":function(){const{toDisplayString:s,createElementVNode:o,resolveComponent:t,withCtx:u,createVNode:m,openBlock:C,createBlock:f}=k,p={style:{"margin-left":"300px"}},g={href:"javascript:"};function y(a,B){const d=t("fx-page-table"),E=t("hl-panel");return C(),f(E,{borderless:"",padding:"var(--xl)","body-padding":"0","body-class":"m-t-lg"},{default:u(()=>[m(d,{ref:"tableRef",cols:a.cols,"table-data":a.tableData,"search-items":a.searchItems,"data-fetcher":a.getData,"selection-actions":a.selectionActions,"default-pagination":a.defaultPagination,"right-search-height":"400px","search-placement":"right",onSelectedRowKeys:a.selectedRowKeys},{customExpand:u(({row:e})=>[o("span",p,s(e.id)+" \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49",1)]),detail:u(({row:e})=>[o("a",g,s(e.title),1)]),_:1},8,["cols","table-data","search-items","data-fetcher","selection-actions","default-pagination","onSelectedRowKeys"])]),_:1})}const{defineComponent:v,ref:h,reactive:A}=k,I={title:"2021\u5E74xx\u7535\u5DE5\u4F5C\u4E1A",companyName:"\u67D0\u67D0\u67D0\u4F01\u4E1A",areaName:"\u91D1\u6E56\u53BF",person:"\u674E\u6653\u5FE0",status:"\u5DF2\u5B8C\u6210"},b=v({setup(){const a=h([]);a.value=new Array(5).fill("").map((F,w)=>({...I,id:w+1+""}));const B=h([{title:"#",slotName:"tableSelection",headerSlotName:"selectionCol"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title"},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person"},{title:"\u5B8C\u6210\u72B6\u6001",prop:"status"}]),d=A([{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:"",name:"industry",prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"}]},{type:"select",label:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",placeholder:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",value:"",name:"status",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u5B8C\u6210",code:"1"},{name:"\u672A\u5B8C\u6210",code:"0"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"},{type:"input",label:"\u57F9\u8BAD\u4E3B\u9898",placeholder:"\u57F9\u8BAD\u4E3B\u9898",value:"",name:"trainTitle"},{type:"input",label:"\u57F9\u8BAD\u673A\u6784\u540D\u79F0",placeholder:"\u57F9\u8BAD\u673A\u6784\u540D\u79F0",value:"",name:"trainInstitutionName"},{type:"year",label:"\u57F9\u8BAD\u5E74\u5EA6",placeholder:"\u57F9\u8BAD\u5E74\u5EA6",value:"",name:"trainYear",format:"YYYY","value-format":"YYYY"}]),E=F=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+F)},e=({pageSize:F,currentPage:w,params:T})=>{console.log(F,w,T),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)")},l=h([]),i=F=>{console.log("keys",F),l.value=F},D=A([{label:"\u5220\u9664\u6240\u6709",icon:"TwoDel",noFill:!1,show:!0,onClick:()=>{alert(l.value)}}]);return{cols:B,tableData:a,searchItems:d,showDetail:E,getData:e,selectedRowKeys:i,selectionActions:D,defaultPagination:{pageSize:10,currentPage:1,total:60}}}});return{render:y,...b}}(),"fx-demo2":function(){const{toDisplayString:s,createElementVNode:o,resolveComponent:t,withCtx:u,createVNode:m,openBlock:C,createBlock:f}=k,p={style:{"margin-left":"300px"}},g={href:"javascript:"},y={href:"javascript:"};function v(a,B){const d=t("fx-page-table"),E=t("hl-panel");return C(),f(E,{borderless:"",padding:"var(--xl)","body-padding":"0","body-class":"m-t-lg"},{default:u(()=>[m(d,{ref:"tableRef",cols:a.cols,"table-data":a.tableData,"search-items":a.searchItems,"data-fetcher":a.getData},{customExpand:u(({row:e})=>[o("span",p,s(e.title)+" \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49",1)]),detail:u(({row:e})=>[o("a",g,s(e.title),1)]),status:u(({row:e})=>[o("a",y,s(e.status),1)]),_:1},8,["cols","table-data","search-items","data-fetcher"])]),_:1})}const{defineComponent:h,ref:A,reactive:I}=k,b=h({setup(){const a=A([]),B=A([{title:"",width:"66px",align:"center",expand:{slotName:"customExpand",hideLabel:!1}},{title:"\u5E8F\u53F7",width:"66px",align:"center",slotName:"tableIndex"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title"},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person"},{title:"\u5B8C\u6210\u72B6\u6001",slotName:"status",prop:"status"}]),d=I([{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:"",name:"industry",prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"}]},{type:"select",label:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",placeholder:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",value:"",name:"status",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u5B8C\u6210",code:"1"},{name:"\u672A\u5B8C\u6210",code:"0"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"}]);return{cols:B,tableData:a,searchItems:d,showDetail:l=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+l)},getData:({pageSize:l,currentPage:i,params:D})=>{console.log(l,i,D),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)")}}}});return{render:v,...b}}(),"fx-demo3":function(){const{toDisplayString:s,createElementVNode:o,resolveComponent:t,withCtx:u,createVNode:m,openBlock:C,createBlock:f}=k,p={style:{"margin-left":"300px"}},g={href:"javascript:"},y={href:"javascript:"};function v(a,B){const d=t("fx-page-table"),E=t("hl-panel");return C(),f(E,{borderless:"",padding:"var(--xl)","body-padding":"0","body-class":"m-t-lg"},{default:u(()=>[m(d,{ref:"tableRef",cols:a.cols,"table-data":a.tableData,"search-items":a.searchItems,"data-fetcher":a.getData,"show-search-bar":!1},{customExpand:u(({row:e})=>[o("span",p,s(e.title)+" \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49",1)]),detail:u(({row:e})=>[o("a",g,s(e.title),1)]),status:u(({row:e})=>[o("a",y,s(e.status),1)]),_:1},8,["cols","table-data","search-items","data-fetcher"])]),_:1})}const{defineComponent:h,ref:A,reactive:I}=k,b=h({setup(){const a=A([]),B=A([{title:"",width:"66px",align:"center",expand:{slotName:"customExpand",hideLabel:!1}},{title:"\u5E8F\u53F7",width:"66px",align:"center",slotName:"tableIndex"},{title:"\u57F9\u8BAD\u4E3B\u9898",slotName:"detail",prop:"title"},{title:"\u4F01\u4E1A\u540D\u79F0",prop:"companyName"},{title:"\u6240\u5C5E\u533A\u57DF",prop:"areaName"},{title:"\u4F01\u4E1A\u57F9\u8BAD\u8D1F\u8D23\u4EBA",prop:"person"},{title:"\u5B8C\u6210\u72B6\u6001",slotName:"status",prop:"status"}]),d=I([{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u533A\u57DF",value:"",name:"area",prop:{label:"name",value:"code"},options:[{name:"\u6E05\u6C5F\u6D66\u533A",code:"10000"}]},{type:"select",label:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",placeholder:"\u4F01\u4E1A\u6240\u5C5E\u884C\u4E1A",value:"",name:"industry",prop:{label:"name",value:"code"},options:[{name:"\u8F6F\u4EF6",code:"Java"}]},{type:"select",label:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",placeholder:"\u57F9\u8BAD\u5B8C\u6210\u72B6\u6001",value:"",name:"status",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u5B8C\u6210",code:"1"},{name:"\u672A\u5B8C\u6210",code:"0"}]},{type:"input",label:"\u4F01\u4E1A\u540D\u79F0",placeholder:"\u4F01\u4E1A\u540D\u79F0",value:"",name:"companyName"}]);return{cols:B,tableData:a,searchItems:d,showDetail:l=>{console.log("\u6DFB\u52A0\u8DEF\u7531\u53BB\u8BE6\u60C5\u9875"+l)},getData:({pageSize:l,currentPage:i,params:D})=>{console.log(l,i,D),console.log("\u8FD9\u91CC\u8C03\u7528\u63A5\u53E3\uFF0C\u8FD4\u56DE\u7684\u5217\u8868\u603B\u6570\u9700\u8981\u56DE\u8C03\u8C03\u7528setTotal(totalRow)")}}}});return{render:v,...b}}()}},M=r("h1",null,"PageTable \u8868\u683C\u9762\u677F",-1),H=r("h2",{id:"ji-ben-yong-fa"},[r("a",{class:"header-anchor",href:"#ji-ben-yong-fa"}),P(" \u57FA\u672C\u7528\u6CD5")],-1),O=r("pre",null,[r("code",{class:"html"},` <template>
  <hl-panel
    borderless
    padding="var(--xl)"
    body-padding="0"
    body-class="m-t-lg"
  >
    <fx-page-table
      ref="tableRef"
      :cols="cols"
      :table-data="tableData"
      :search-items="searchItems"
      :data-fetcher="getData"
      selector-col-count="count-xl-2 count-lg-1 count-md-1"
      search-placement="top"
      :table-props="tableProps"
      @sort-change="sortChange"
    >
      <template #searchbar-prefix>
        <hl-button effect="light" @click="resetFields">\u6E05\u7A7A</hl-button>
      </template>
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
      <template #toolbar-extra-before>
        <hl-group merge indent>
          <hl-radio v-model="displayType" label="list" custom title="\u8868\u683C\u5C55\u793A">
            <hl-button effect="light" type="primary" equal>
              <hl-icon><two-table /></hl-icon>
            </hl-button>
          </hl-radio>
          <hl-radio v-model="displayType" label="chart" custom title="\u56FE\u5F62\u5C55\u793A">
            <hl-button effect="light" type="primary" equal>
              <hl-icon><two-chart-pie /></hl-icon>
            </hl-button>
          </hl-radio>
        </hl-group>
      </template>
    </fx-page-table>
  </hl-panel>
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
        span: 'grid-col-span-xl-2',
        type: 'slot',
        slotName: 'checkbox1',
        value: '',
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

    const resetFields = () => {
      tableRef.value?.resetFields()
    }

    // \u8FD9\u91CC\u793A\u4F8B\u518D\u589E\u52A0\u4E00\u9879\uFF0C\u4E3B\u8981\u7528\u4E8E\u52A8\u6001\u6E32\u67D3\u641C\u7D22\u6761\u4EF6
    searchItems.splice(1, 0, {
      type: 'input',
      label: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0',
      placeholder: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0',
      value: '',
      name: 'trainInstitutionName',
    })

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
      showDetail,
      defaultPagination,
      getData,
      checked1,
      tableRef,
      tableProps,
      tableRowClassName,

      resetFields,
      sortChange,
    }
  },
})
<\/script>
`)],-1),Q=r("h2",{id:"duo-xuan-cao-zuo"},[r("a",{class:"header-anchor",href:"#duo-xuan-cao-zuo"}),P(" \u591A\u9009\u64CD\u4F5C")],-1),W=r("pre",null,[r("code",{class:"html"},` <template>
  <hl-panel
    borderless
    padding="var(--xl)"
    body-padding="0"
    body-class="m-t-lg"
  >
    <fx-page-table
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
    >
      <template #customExpand="{ row }">
        <span style="margin-left: 300px;">{{ row.id }} \u6211\u662F\u5C55\u5F00\u81EA\u5B9A\u4E49</span>
      </template>
      <!-- \u884C\u70B9\u51FB\u8BE6\u60C5\u63D2\u69FD -->
      <template #detail="{ row }">
        <a href="javascript:">{{ row.title }}</a>
      </template>
    </fx-page-table>
  </hl-panel>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'

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

    return {
      cols,
      tableData,
      searchItems,
      showDetail,
      getData,
      selectedRowKeys,
      selectionActions,
      defaultPagination,
    }
  },
})
<\/script>
`)],-1),X=r("h2",{id:"wu-shu-ju"},[r("a",{class:"header-anchor",href:"#wu-shu-ju"}),P(" \u65E0\u6570\u636E")],-1),Z=r("pre",null,[r("code",{class:"html"},` <template>
  <hl-panel
    borderless
    padding="var(--xl)"
    body-padding="0"
    body-class="m-t-lg"
  >
    <fx-page-table
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
    </fx-page-table>
  </hl-panel>
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
`)],-1),ee=r("h2",{id:"wu-sou-suo-gong-ju"},[r("a",{class:"header-anchor",href:"#wu-sou-suo-gong-ju"}),P(" \u65E0\u641C\u7D22\u5DE5\u5177")],-1),ue=r("pre",null,[r("code",{class:"html"},` <template>
  <hl-panel
    borderless
    padding="var(--xl)"
    body-padding="0"
    body-class="m-t-lg"
  >
    <fx-page-table
      ref="tableRef"
      :cols="cols"
      :table-data="tableData"
      :search-items="searchItems"
      :data-fetcher="getData"
      :show-search-bar="false"
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
    </fx-page-table>
  </hl-panel>
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
`)],-1),te=U('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>table-props</td><td>\u7ED1\u5B9A\u5230\u5185\u90E8SimpleTable\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u53C2\u8003SimpleTable\u7EC4\u4EF6</td><td>object</td><td>-</td><td>-</td></tr><tr><td>scrollbar-props</td><td>\u7ED1\u5B9A\u5230\u5185\u90E8Scrollbar\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u53C2\u8003Scrollbar\u7EC4\u4EF6</td><td>object</td><td>--</td><td>--</td></tr><tr><td>cols</td><td>\u5217\u914D\u7F6E\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>array</td><td>-</td><td>-</td></tr><tr><td>table-data</td><td>\u8868\u683C\u6570\u636E</td><td>object</td><td>-</td><td>-</td></tr><tr><td>data-fetcher</td><td>\u8868\u683C\u67E5\u8BE2\u65B9\u6CD5</td><td>function({ pageSize, currentPage, params, setTotal }) / string</td><td>-</td><td>-</td></tr><tr><td>search-items</td><td>\u641C\u7D22\u5217\u8868,\u53C2\u7167hongluan-business-ui/data-filter</td><td>table-searchbar \u6570\u636E\u8FC7\u6EE4\u5668</td><td>object</td><td>-</td></tr><tr><td>searcher</td><td>\u53F3\u4FA7input\u641C\u7D22\u8F93\u5165\u6846\u5C5E\u6027\uFF0C\u53EF\u81EA\u5B9A\u4E49name/placeholder</td><td>object</td><td>-</td><td>{name: &#39;searchName&#39;,placeholder: &#39;\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6&#39;}</td></tr><tr><td>search-placement</td><td>\u641C\u7D22\u5217\u8868\u4F4D\u7F6E\uFF0C\u4E0D\u4F20\u7684\u8BDD\u6839\u636E\u641C\u7D22\u6761\u4EF6searchItems\u4E2A\u6570\uFF0C\u4E0D\u8D85\u8FC74\u4E2A\u5728\u9876\u90E8\uFF0C\u8D85\u8FC74\u4E2A\u5728\u53F3\u4FA7</td><td>string</td><td>top/right</td><td>-</td></tr><tr><td>selector-col-count</td><td>\u914D\u5408searchPlacement: top \u4F7F\u7528\uFF0C\u8BBE\u7F6E\u5E03\u5C40</td><td>string</td><td>-</td><td>&#39;count-xl-2 count-lg-2 count-md-1&#39;</td></tr><tr><td>right-search-height</td><td>\u53F3\u8FB9\u9AD8\u7EA7\u641C\u7D22\u7684\u6700\u5927\u9AD8\u5EA6</td><td>string</td><td>-</td><td>500px</td></tr><tr><td>selection-actions</td><td>\u591A\u9009\u64CD\u4F5C\uFF0C\u53C2\u7167hongluan-business-ui/simple-table-list/toolbar/action/actions \u7B80\u5355\u8868\u683C</td><td>array</td><td>-</td><td>-</td></tr><tr><td>default-pagination</td><td>\u9ED8\u8BA4\u5206\u9875\uFF08\u5047\u6570\u636E\u5E0C\u671B\u6709\u5206\u9875\u6570\u636E\uFF0C\u53EF\u4EE5\u8BBE\u7F6Etotal\uFF09</td><td>object</td><td>-</td><td>{ pageSize:10, currentPage:1, total: 0 }</td></tr><tr><td>no-data-image</td><td>\u65E0\u6570\u636E\u7684\u9ED8\u8BA4\u56FE\u7247</td><td>string</td><td>-</td><td>-</td></tr><tr><td>show-col-config</td><td>\u662F\u5426\u663E\u793A\u5217\u52A8\u6001\u663E\u793A\u6309\u94AE</td><td>boolean</td><td>true/false</td><td>true</td></tr><tr><td>show-search-bar</td><td>\u662F\u5426\u663E\u793A\u641C\u7D22\u5DE5\u5177</td><td>boolean</td><td>true/false</td><td>true</td></tr></tbody></table><h2 id="cols"><a class="header-anchor" href="#cols"></a> cols</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u8868\u683C\u5217\u5C5E\u6027\u540D\u79F0</td><td>string</td><td></td><td></td></tr><tr><td>showTooltip</td><td>\u662F\u5426\u663E\u793A tooltip\uFF0C\u9700\u8981\u914D\u5408\u5217 width \u503C\u4F7F\u7528</td><td>boolean</td><td></td><td>false</td></tr><tr><td>tooltipProps</td><td>tooltip \u5C5E\u6027\uFF0C\u53C2\u8003 Popover \u7EC4\u4EF6</td><td>object</td><td></td><td></td></tr><tr><td>align</td><td>\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>width</td><td>\u5217\u5BBD</td><td>string</td><td></td><td>-</td></tr><tr><td>fixed</td><td>\u56FA\u5B9A\u5217</td><td>string</td><td>left/right</td><td>-</td></tr><tr><td>slotName</td><td>\u5217 slot \u540D\u79F0\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>string</td><td>-</td><td>-</td></tr><tr><td>headerSlotName</td><td>\u5217\u5934 slot \u540D\u79F0\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A col\uFF0C\u53C2\u89C1\u4E0B\u8868</td><td>string</td><td>-</td><td>-</td></tr><tr><td>expand</td><td>\u5C55\u5F00\u5217\u8BBE\u7F6E,\u76EE\u524D\u56FA\u5B9AslotName: &quot;customExpand&quot;</td><td>object{ slotName: string }</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slotname"><a class="header-anchor" href="#slotname"></a> slotName</h2><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tableIndex</td><td>\u5E8F\u53F7</td></tr><tr><td>tableSelection</td><td>\u591A\u9009\u63D2\u69FD</td></tr><tr><td>action</td><td>\u64CD\u4F5C\u5217</td></tr><tr><td>&lt;\u81EA\u5B9A\u4E49&gt;</td><td>\u9664\u5DF2\u7528\u7684&#39;searchbar-suffix&#39;,&#39;searchbar-prefix&#39;, &#39;toolbar-extra-before&#39;,&#39;toolbar-extra-after&#39;,&#39;selectionCol&#39;, &#39;tableSelection&#39;, &#39;customExpand&#39;, &#39;tableIndex&#39;, &#39;action&#39;\u8FD9\u4E9B\uFF0C\u5176\u4ED6\u4EFB\u610F\u547D\u540D</td></tr></tbody></table><h2 id="headerslotname"><a class="header-anchor" href="#headerslotname"></a> headerSlotName</h2><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>selectionCol</td><td>\u591A\u9009\u64CD\u4F5C</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>selected-row-keys</td><td>\u8868\u683C\u591A\u9009\u64CD\u4F5C\u56DE\u8C03, \u8FD4\u56DE\u7684\u662Fid\u6570\u7EC4</td><td>keys</td></tr><tr><td>sort-change</td><td>\u5B57\u6BB5\u6392\u5E8F\u53D1\u751F\u53D8\u66F4\u4E8B\u4EF6</td><td>prop, sort</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>refresh</td><td>\u7528\u4E8E\u5217\u8868\u64CD\u4F5C\u540E\u91CD\u65B0\u5237\u65B0\u5217\u8868\uFF0C\u5206\u9875\u548C\u53C2\u6570\u4FDD\u7559</td><td>-</td></tr><tr><td>reset</td><td>\u7528\u4E8E\u91CD\u7F6E\u5F53\u524D\u5217\u8868\uFF0C\u53C2\u6570\u4FDD\u7559\uFF0CcurrenPage\u91CD\u7F6E\u4E3A1</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>customExpand</td><td>\u5C55\u5F00\u63D2\u69FD\uFF0C\u6839\u636Ecols\u4E2DslotName\u914D\u5408\u4F7F\u7528</td><td>row</td></tr><tr><td>searchbar-prefix</td><td>\u641C\u7D22\u6846\u5DE6\u8FB9\u63D2\u69FD\uFF0C\u53EF\u53C2\u7167simple-table-list\u4F7F\u7528</td><td>-</td></tr><tr><td>toolbar-extra-before</td><td>\u64CD\u4F5C\u5DE6\u8FB9\u63D2\u69FD\uFF0C\u53EF\u53C2\u7167simple-table-list\u4F7F\u7528</td><td>-</td></tr><tr><td>toolbar-extra-after</td><td>\u64CD\u4F5C\u53F3\u8FB9\u63D2\u69FD\uFF0C\u53EF\u53C2\u7167simple-table-list\u4F7F\u7528</td><td>-</td></tr></tbody></table>',14);function ae(s,o,t,u,m,C){const f=S("fx-demo0"),p=S("demo-block"),g=S("fx-demo1"),y=S("fx-demo2"),v=S("fx-demo3"),h=S("right-nav");return K(),J(q,null,[r("section",null,[M,H,_(p,{fs:""},{source:N(()=>[_(f)]),highlight:N(()=>[O]),_:1}),Q,_(p,{fs:""},{source:N(()=>[_(g)]),highlight:N(()=>[W]),_:1}),X,_(p,{fs:""},{source:N(()=>[_(y)]),highlight:N(()=>[Z]),_:1}),ee,_(p,{fs:""},{source:N(()=>[_(v)]),highlight:N(()=>[ue]),_:1}),te]),_(h)],64)}var pe=$(G,[["render",ae]]);export{pe as default};
