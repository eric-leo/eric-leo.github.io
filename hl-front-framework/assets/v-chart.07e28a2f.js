import{Q as h,_ as A,y as R,A as a,W as i,R as c,a5 as S,bB as b,X as w,br as F}from"./vue.e91292bd.js";import{_ as V}from"./index.68966418.js";import"./hongluan.7a8bc835.js";import"./highlight.a6f0727a.js";import"./hongluan-icons.70c7a857.js";const z={name:"component-doc",components:{"fx-demo0":function(){const{resolveComponent:d,openBlock:n,createBlock:r}=b;function l(t,e){const u=d("fx-v-line-chart");return n(),r(u,{grid:t.grid,legend:t.legend,"series-data":t.seriesData,"chart-data":t.data,tooltip:t.tooltip,dataZoom:t.dataZoom},null,8,["grid","legend","series-data","chart-data","tooltip","dataZoom"])}const{defineComponent:s}=b,o=s({setup(){const t={top:"0%",right:"0%"},e={top:"40",left:"0",right:"0",bottom:"0",containLabel:!0},u={formatter:g=>{if(g===null||g.length===0)return;let p="";return p+=g[0].name+"<br/>",g.forEach((B,E)=>{p+=B.marker+B.seriesName+"\uFF1A"+(B.value===void 0?"-":B.value)+"<br/>",C[E].other&&D.forEach(f=>{f.children&&g[0].name===f.xValue&&f.children[C[E].key].forEach(v=>{p+="<div style='margin-left: 15px;'>"+v.label+"\uFF1A"+v.value+"</div>",console.log(v.label+"\uFF1A"+v.value+"<br/>")})})}),p}},m=[{show:!0,realtime:!0,start:30,end:70,xAxisIndex:[0,3]},{type:"inside",realtime:!0,start:30,end:70,xAxisIndex:[0,3]}],C=[{label:"\u91CD\u5927\u98CE\u9669",key:"greatRisk",itemStyle:{color:"#FD6161"},areaStyleColor:["rgba(255, 220, 2, 0.5)","rgba(255, 220, 2, 0)"]},{label:"\u8F83\u5927\u98CE\u9669",key:"biggerRisk",itemStyle:{color:"#FB7E00"}},{label:"\u4E00\u822C\u98CE\u9669",key:"normalRisk",itemStyle:{color:"#D6B800"}},{label:"\u4F4E\u98CE\u9669",key:"lowRisk",itemStyle:{color:"#3E7DFF"}},{label:"\u5176\u4ED6\u98CE\u9669",key:"otherRisk",itemStyle:{color:"#3E7D00"},other:!0}],D=[{xValue:"\u4E00\u6708",greatRisk:20,biggerRisk:40,normalRisk:30,lowRisk:11,otherRisk:50,children:{otherRisk:[{label:"\u5176\u4ED6\u4E00",value:30},{label:"\u5176\u4ED6\u4E8C",value:20}]}},{xValue:"\u4E8C\u6708",greatRisk:30,biggerRisk:60,normalRisk:10,lowRisk:31},{xValue:"\u4E09\u6708",greatRisk:60,biggerRisk:40,normalRisk:80,lowRisk:41},{xValue:"\u56DB\u6708",greatRisk:90,biggerRisk:40,normalRisk:10,lowRisk:11},{xValue:"\u4E94\u6708",greatRisk:40,biggerRisk:70,normalRisk:40,lowRisk:21},{xValue:"\u516D\u6708",greatRisk:90,biggerRisk:120,normalRisk:10,lowRisk:31},{xValue:"\u4E03\u6708",greatRisk:140,biggerRisk:30,normalRisk:40,lowRisk:51},{xValue:"\u516B\u6708",greatRisk:110,biggerRisk:130,normalRisk:140,lowRisk:31},{xValue:"\u4E5D\u6708",greatRisk:140,biggerRisk:110,normalRisk:50,lowRisk:91},{xValue:"\u5341\u6708",greatRisk:120,biggerRisk:30,normalRisk:70,lowRisk:31},{xValue:"\u5341\u4E00\u6708",greatRisk:20,biggerRisk:40,normalRisk:30,lowRisk:51},{xValue:"\u5341\u4E8C\u6708",greatRisk:120,biggerRisk:110,normalRisk:120,lowRisk:21}];return{grid:e,legend:t,seriesData:C,data:D,tooltip:u,dataZoom:m}}});return{render:l,...o}}(),"fx-demo1":function(){const{resolveComponent:d,createVNode:n,Fragment:r,openBlock:l,createElementBlock:s}=b;function o(u,m){const C=d("fx-v-column-chart");return l(),s(r,null,[n(C,{"chart-data":u.chartData,class:"m-b-lg"},null,8,["chart-data"]),n(C,{"chart-data":u.chartData2,"is-vertical":!1,"show-count":5,"scroll-count":4,"bar-color":["#72F5AC","rgba(114,245,172,0.16)"]},null,8,["chart-data","bar-color"])],64)}const{defineComponent:t}=b,e=t({setup(){return{chartData:[{label:"2002",value:20},{label:"2004",value:60},{label:"2006",value:40},{label:"2008",value:90},{label:"2010",value:60},{label:"2012",value:70},{label:"2014",value:10},{label:"2016",value:50},{label:"2018",value:10},{label:"2020",value:50}],chartData2:[{label:"\u5E94\u6025\u6551\u63F4",value:20},{label:"\u6D88\u9632\u961F\u4F0D",value:60},{label:"\u9632\u6C5B\u62A2\u9669",value:40},{label:"\u533B\u7597\u6551\u62A4",value:90},{label:"\u793E\u4F1A\u6551\u63F4",value:60},{label:"\u5E94\u6025\u6551\u63F41",value:70},{label:"\u6D88\u9632\u961F\u4F0D1",value:10},{label:"\u9632\u6C5B\u62A2\u96691",value:50},{label:"\u533B\u7597\u6551\u62A41",value:10},{label:"\u793E\u4F1A\u6551\u63F41",value:50}]}}});return{render:o,...e}}(),"fx-demo2":function(){const{resolveComponent:d,openBlock:n,createBlock:r}=b;function l(t,e){const u=d("fx-v-pie-chart");return n(),r(u,{"chart-data":t.chartData,height:"200px",title:"17%",fullTitle:{textStyle:{color:"#ffffff"}}},null,8,["chart-data"])}const{defineComponent:s}=b,o=s({setup(){return{chartData:[{label:"\u91CD\u5927\u98CE\u9669",value:40,color:"#FD6161"},{label:"\u8F83\u5927\u98CE\u9669",value:20,color:"#FB7E00"},{label:"\u4E00\u822C\u98CE\u9669",value:50,color:"#D6B800"},{label:"\u4F4E\u98CE\u9669",value:10,color:"#3E7DFF"}]}}});return{render:l,...o}}(),"fx-demo3":function(){const{resolveComponent:d,openBlock:n,createBlock:r}=b;function l(t,e){const u=d("fx-v-rose-pie-chart");return n(),r(u,{"chart-data":t.chartData},null,8,["chart-data"])}const{defineComponent:s}=b,o=s({setup(){return{chartData:[{label:"\u91CD\u5927\u98CE\u9669",value:30,color:"#FD6161"},{label:"\u8F83\u5927\u98CE\u9669",value:50,color:"#FB7E00"},{label:"\u4E00\u822C\u98CE\u9669",value:80,color:"#D6B800"},{label:"\u4F4E\u98CE\u9669",value:90,color:"#3E7DFF"}]}}});return{render:l,...o}}(),"fx-demo4":function(){const{resolveComponent:d,openBlock:n,createBlock:r}=b;function l(t,e){const u=d("fx-v-proportion-pie-chart");return n(),r(u,{legend:t.legend,"chart-data":t.chartData,style:{height:"400px"}},null,8,["legend","chart-data"])}const{defineComponent:s}=b,o=s({setup(){return{chartData:[{label:"\u5E94\u6025\u8F66\u8F86",value:10,color:"#CDE5F0"},{label:"\u9632\u62A4\u88C5\u5907",value:20,color:"#9084FF"},{label:"\u533B\u7597\u88C5\u5907",value:30,color:"#72F5AC"},{label:"\u62A2\u9669\u88C5\u5907",value:20,color:"#FD6161"},{label:"\u6551\u63F4\u88C5\u5907",value:10,color:"#FD892F"},{label:"\u98DF\u54C1\u7269\u8D44",value:5,color:"#DBC200"},{label:"\u5176\u4ED6\u7269\u8D44",value:5}]}}});return{render:l,...o}}(),"fx-demo5":function(){const{resolveComponent:d,openBlock:n,createBlock:r}=b;function l(t,e){const u=d("fx-v-scrolling-bar-chart");return n(),r(u,{"chart-data":t.chartData,height:"200px","bar-style":{color:"linear-gradient(90deg, rgba(114,245,172,0.16) 0%, #72F5AC 100%)",width:"1em",backgroundColor:"rgba(47,71,110,0.12)"},"label-click":t.handleClickLabel},null,8,["chart-data","bar-style","label-click"])}const{defineComponent:s}=b,o=s({setup(){return{chartData:[{value:55,label:"\u6CB3\u6D41\u6E56\u6CCA",id:"1"},{value:69,label:"\u5EFA\u7B51\u5DE5\u8D38",id:"2"},{value:50,label:"\u5DE5\u8D38\u4F01\u4E1A",id:"3"},{value:20,label:"\u52A0\u6CB9\u7AD9",id:"4"},{value:26,label:"\u5929\u6C14\u7AD9",id:"5"},{value:87,label:"\u51B6\u91D1\u5316\u5DE5",id:"6"},{value:69,label:"\u5C3E\u77FF\u7164\u70AD",id:"7"},{value:50,label:"\u6865\u6881\uFF0C\u6C7D\u8F66\uFF0C\u706B\u8F66\uFF0C\u98DE\u673A",id:"8"},{value:20,label:"\u534E\u7199LIVE",id:"9"},{value:26,label:"\u76F4\u64AD\u5E26\u8D27",id:"10"},{value:87,label:"\u51B6\u91D1\u5316\u5DE5",id:"11"}],handleClickLabel:u=>{console.log(u)}}}});return{render:l,...o}}(),"fx-demo6":function(){const{resolveComponent:d,openBlock:n,createBlock:r}=b;function l(t,e){const u=d("fx-v-scrolling-bar-chart");return n(),r(u,{"chart-data":t.chartData,height:"200px"},null,8,["chart-data"])}const{defineComponent:s}=b,o=s({setup(){return{chartData:[{value:[{value:23,label:"\u957F\u6C5F0",barStyle:{color:"rgb(13, 48, 252)"}},{value:23,label:"\u957F\u6C5F1",barStyle:{color:"rgb(113, 248, 252)"}},{value:26,label:"\u9EC4\u6CB31",barStyle:{color:"rgb(13, 148, 252)"}}],label:"\u6CB3\u6D41\u6E56\u6CCA"},{value:[{value:13,label:"\u957F\u6C5F2",barStyle:{color:"rgb(113, 248, 252)"}},{value:36,label:"\u9EC4\u6CB32",barStyle:{color:"rgb(13, 148, 252)"}}],label:"\u5EFA\u7B51\u5DE5\u8D38"},{value:[{value:33,label:"\u957F\u6C5F3",barStyle:{color:"rgb(113, 248, 252)"}},{value:46,label:"\u9EC4\u6CB33",barStyle:{color:"rgb(13, 148, 252)"}}],label:"\u5DE5\u8D38\u4F01\u4E1A"},{value:[{value:43,label:"\u957F\u6C5F4",barStyle:{color:"rgb(113, 248, 252)"}},{value:56,label:"\u9EC4\u6CB34",barStyle:{color:"rgb(13, 148, 252)"}}],label:"\u52A0\u6CB9\u7AD9"},{value:[{value:13,label:"\u957F\u6C5F5",barStyle:{color:"rgb(113, 248, 252)"}},{value:76,label:"\u9EC4\u6CB35",barStyle:{color:"rgb(13, 148, 252)"}}],label:"\u5929\u6C14\u7AD9"},{value:[{value:53,label:"\u957F\u6C5F6",barStyle:{color:"rgb(113, 248, 252)"}},{value:16,label:"\u9EC4\u6CB36",barStyle:{color:"rgb(13, 148, 252)"}}],label:"\u51B6\u91D1\u5316\u5DE5"},{value:[{value:23,label:"\u957F\u6C5F7",barStyle:{color:"rgb(113, 248, 252)"}},{value:54,label:"\u9EC4\u6CB37",barStyle:{color:"rgb(13, 148, 252)"}}],label:"\u5C3E\u77FF\u7164\u70AD"},{value:[{value:43,label:"\u957F\u6C5F8",barStyle:{color:"rgb(113, 248, 252)"}},{value:50,label:"\u9EC4\u6CB38",barStyle:{color:"rgb(13, 148, 252)"}}],label:"\u6865\u6881\uFF0C\u6C7D\u8F66\uFF0C\u706B\u8F66\uFF0C\u98DE\u673A"}]}}});return{render:l,...o}}(),"fx-demo7":function(){const{toDisplayString:d,normalizeStyle:n,createElementVNode:r,resolveComponent:l,vShow:s,createVNode:o,withDirectives:t,withCtx:e,openBlock:u,createBlock:m}=b,C={style:{width:"calc(var(--xxl) * 4.9 )"}},D={class:"label m-r-xl ellipsis",style:{width:"calc(var(--xxl) * 2.8 )"}};function g(E,f){const v=l("fill-heart"),_=l("hl-icon"),k=l("hl-group"),y=l("fx-v-scrolling-list-chart");return u(),m(y,{height:"200px","chart-data":E.chartData,"bar-style":{color:"linear-gradient(270deg, #2EF4FF 0%, rgba(44,218,249,0.17) 100%)",width:"1em",backgroundColor:"none"}},{label:e(({row:x})=>[r("div",C,[o(k,{"gap-x":"var(--md)",align:"items-middle",style:{"padding-left":"var(--md)"}},{default:e(()=>[o(_,{size:"xl",class:"symbol",type:`level${x.index+1}`,style:{position:"relative"}},{default:e(()=>[r("span",{style:n({position:"absolute",color:x.index>2?"#71F8FC":"#FFFFFF",textShadow:"0 0 6px rgba(113,248,252,0.60)"}),class:"font-md font-din"},d(x.index+1),5),t(o(v,{src:E.two-E.heart},null,8,["src"]),[[s,x.index<3]])]),_:2},1032,["type"]),r("div",D,d(x.label),1)]),_:2},1024)])]),_:1},8,["chart-data","bar-style"])}const{defineComponent:p}=b,B=p({setup(){return{chartData:[{label:"\u534E\u65B0\u71C3\u6C14\u96C6\u56E2\u7269\u4E1A",value:10,index:0},{label:"\u4E09\u5C71\u56DB\u5B63\u7269\u4E1A",value:20,index:1},{label:"2004",value:60,index:2},{label:"2006",value:40,index:3},{label:"2008",value:80,index:4},{label:"2010",value:60,index:5},{label:"2012",value:70,index:6},{label:"2014",value:10,index:7},{label:"2016",value:50,index:8},{label:"2018",value:10,index:9},{label:"2020",value:50,index:10}]}}});return{render:g,...B}}(),"fx-demo8":function(){const{resolveComponent:d,openBlock:n,createBlock:r}=b;function l(t,e){const u=d("fx-v-stacked-bar-chart");return n(),r(u,{grid:t.grid,legend:t.legend,"chart-data":t.data,legendReal:t.legendReal,dataZoom:t.dataZoom},null,8,["grid","legend","chart-data","legendReal","dataZoom"])}const{defineComponent:s}=b,o=s({setup(){return{legend:[{label:"\u5DE5\u4E1A\u5B89\u5168",key:"industrialSafety",barWidth:22,itemStyle:{color:"#FD6161"}},{label:"\u5BC6\u96C6\u573A\u6240",key:"densePlace",barWidth:22,itemStyle:{color:"#FB7E00"}},{label:"\u81EA\u7136\u707E\u5BB3",key:"naturalDisaster",barWidth:22,itemStyle:{color:"#D6B800"}},{label:"\u516C\u5171\u8BBE\u65BD",key:"utilities",barWidth:22,itemStyle:{color:"#3E7DFF"}},{label:"\u5DE5\u4E1A\u5B89\u51681",key:"industrialSafety1",barWidth:22,itemStyle:{color:"#FD6161"}},{label:"\u5BC6\u96C6\u573A\u62401",key:"densePlace1",barWidth:22,itemStyle:{color:"#FB7E00"}},{label:"\u81EA\u7136\u707E\u5BB31",key:"naturalDisaster1",barWidth:22,itemStyle:{color:"#D6B800"}},{label:"\u516C\u5171\u8BBE\u65BD1",key:"utilities1",barWidth:22,itemStyle:{color:"#3E7DFF"}}],data:[{xValue:"\u79E6\u6C49\u65B0\u57CE",industrialSafety:20,densePlace:40,naturalDisaster:30,utilities:11,industrialSafety1:20,densePlace1:40,naturalDisaster1:30,utilities1:11},{xValue:"\u6CFE\u6CB3\u65B0\u57CE",industrialSafety:30,densePlace:60,naturalDisaster:10,utilities:31,industrialSafety1:30,densePlace1:60,naturalDisaster1:10,utilities1:31},{xValue:"\u6CA3\u897F\u65B0\u57CE",industrialSafety:60,densePlace:40,naturalDisaster:80,utilities:41,industrialSafety1:60,densePlace1:40,naturalDisaster1:80,utilities1:41},{xValue:"\u6CA3\u4E1C\u65B0\u57CE",industrialSafety:90,densePlace:40,naturalDisaster:10,utilities:11,industrialSafety1:90,densePlace1:40,naturalDisaster1:10,utilities1:11},{xValue:"\u7A7A\u5DF7\u65B0\u57CE",industrialSafety:40,densePlace:70,naturalDisaster:40,utilities:21,industrialSafety1:40,densePlace1:70,naturalDisaster1:40,utilities1:21},{xValue:"\u54C8\u54C8\u65B0\u57CE",industrialSafety:90,densePlace:120,naturalDisaster:10,utilities:31,industrialSafety1:90,densePlace1:120,naturalDisaster1:10,utilities1:31},{xValue:"\u563F\u563F\u65B0\u57CE",industrialSafety:140,densePlace:30,naturalDisaster:40,utilities:51,industrialSafety1:140,densePlace1:30,naturalDisaster1:40,utilities1:51}],legendReal:{type:"scroll",pageIconColor:"#fff",pageTextStyle:{color:"#fff"},bottom:36},dataZoom:[{show:!0,realtime:!0,start:30,end:70,bottom:5,xAxisIndex:[0,3],height:20},{type:"inside",realtime:!0,start:30,end:70,xAxisIndex:[0,3]}],grid:{top:"20",left:"0",right:"0",bottom:"72",containLabel:!0}}}});return{render:l,...o}}(),"fx-demo9":function(){const{resolveComponent:d,openBlock:n,createBlock:r}=b;function l(t,e){const u=d("fx-v-spire-column-chart");return n(),r(u,{"chart-data":t.chartData},null,8,["chart-data"])}const{defineComponent:s}=b,o=s({setup(){return{chartData:[{label:"\u6CA3\u897F\u65B0\u57CE",value:20,color:["rgba(83,78,225,1)","rgba(83,78,225,0)"]},{label:"\u6CA3\u4E1C\u65B0\u57CE",value:60,color:["rgba(236,214,79,1)","rgba(236,214,79,0)"]},{label:"\u79E6\u6C49\u65B0\u57CE",value:40,color:["rgba(0,228,240,1)","rgba(0,228,240,0)"]},{label:"\u6CFE\u6CB3\u65B0\u57CE",value:90,color:["rgba(68,209,109,1)","rgba(68,209,109,0)"]},{label:"\u6CFE\u6CB3\u65B0\u57CE2",value:60,color:["rgba(18,78,145,1)","rgba(18,78,145,0)"]},{label:"\u6D4B\u8BD5\u65B0\u57CE",value:70,color:["rgba(189,196,20,1)","rgba(189,196,20,0)"]},{label:"\u6D4B\u8BD5\u65B0\u57CE2",value:80,color:["rgba(200,204,165,1)","rgba(200,204,165,0)"]}]}}});return{render:l,...o}}(),"fx-demo10":function(){const{resolveComponent:d,openBlock:n,createBlock:r}=b;function l(t,e){const u=d("fx-v-pyramid-chart");return n(),r(u,{"chart-data":t.chartData,style:{height:"300px"}},null,8,["chart-data"])}const{defineComponent:s}=b,o=s({setup(){return{chartData:[{label:"\u6CA3\u897F\u65B0\u57CE",value:2,color:["rgba(114,245,172,0.00)","rgba(114,245,172,0.56)"]},{label:"\u6CA3\u4E1C\u65B0\u57CE",value:160,color:["rgba(37,129,255,0.00)","rgba(37,129,255,0.56)"]},{label:"\u79E6\u6C49\u65B0\u57CE",value:90,color:["rgba(255,234,68,0.00)","rgba(255,234,68,0.56)"]},{label:"\u6CFE\u6CB3\u65B0\u57CE",value:190,color:["rgba(255,84,84,0.0)","rgba(255,84,84,0.56)"]},{label:"\u6CFE\u6CB3\u65B0\u57CE",value:40,color:["rgba(253,137,47,0.00)","rgba(253,137,47,0.56)"]},{label:"\u6D4B\u8BD5\u65B0\u57CE",value:40,color:["rgba(253,137,47,0.00)","rgba(253,137,47,0.56)"]},{label:"\u6D4B\u8BD5\u65B0\u57CE2",value:40,color:["rgba(253,137,47,0.00)","rgba(253,137,47,0.56)"]}]}}});return{render:l,...o}}()}},P=a("h1",null,"Chart \u5927\u5C4F\u56FE\u8868\uFF08\u67F1\u72B6\uFF0C\u7EBF\uFF0C\u997C\u7B49\uFF09",-1),j=a("h2",{id:"zhe-xian-tu"},[a("a",{class:"header-anchor",href:"#zhe-xian-tu"}),w(" \u6298\u7EBF\u56FE")],-1),I=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-line-chart :grid="grid" :legend="legend" :series-data="seriesData" :chart-data="data" :tooltip="tooltip" :dataZoom="dataZoom" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const legend = {
      top: '0%',
      right: '0%',
    }
    const grid = {
      top: '40',
      left: '0',
      right: '0',
      bottom: '0',
      containLabel: true,
    }

    const tooltip = {
      formatter: (params) => {
        if (params===null || params.length===0) return;
        let tip = "";
        tip += params[0].name + '<br/>'
        params.forEach((item, index)=> {
          tip += item.marker + item.seriesName + "\uFF1A" + (item.value===undefined?'-':item.value) + '<br/>'

          // \u8FDB\u4E00\u6B65\u904D\u5386other
          if(seriesData[index].other){
            data.forEach(dataItem => {
              if (dataItem.children&&params[0].name===dataItem.xValue) {
                dataItem.children[seriesData[index].key].forEach(otherItem => {
                  tip += "<div style='margin-left: 15px;'>"+ otherItem.label+ "\uFF1A" + otherItem.value + '</div>'
                  console.log(otherItem.label+ "\uFF1A" + otherItem.value + '<br/>');
                })
              }
            })
          }
        })
        return tip;
      }
    };

    const dataZoom = [
      {
        show: true,
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 3]
      },
      {
        type: 'inside',
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 3]
      }
    ];
    
    const seriesData = [
      {
        label: '\u91CD\u5927\u98CE\u9669',
        key: 'greatRisk',
        itemStyle: { color: '#FD6161' },
        areaStyleColor: ['rgba(255, 220, 2, 0.5)', 'rgba(255, 220, 2, 0)'],
      },
      {
        label: '\u8F83\u5927\u98CE\u9669',
        key: 'biggerRisk',
        itemStyle: {
          color: '#FB7E00',
        },
      },
      {
        label: '\u4E00\u822C\u98CE\u9669',
        key: 'normalRisk',
        itemStyle: {
          color: '#D6B800',
        },
      },
      {
        label: '\u4F4E\u98CE\u9669',
        key: 'lowRisk',
        itemStyle: {
          color: '#3E7DFF',
        },
      },
      {
        label: '\u5176\u4ED6\u98CE\u9669',
        key: 'otherRisk',
        itemStyle: {
          color: '#3E7D00',
        },
        other: true
      },
    ]
    const data = [
      {
        xValue: '\u4E00\u6708',
        greatRisk: 20,
        biggerRisk: 40,
        normalRisk: 30,
        lowRisk: 11,
        otherRisk: 50,
        children: {
          otherRisk: [
            {
              label: "\u5176\u4ED6\u4E00",
              value: 30
            },
            {
              label: "\u5176\u4ED6\u4E8C",
              value: 20
            },
          ]
        }
      },
      {
        xValue: '\u4E8C\u6708',
        greatRisk: 30,
        biggerRisk: 60,
        normalRisk: 10,
        lowRisk: 31,
      },
      {
        xValue: '\u4E09\u6708',
        greatRisk: 60,
        biggerRisk: 40,
        normalRisk: 80,
        lowRisk: 41,
      },
      {
        xValue: '\u56DB\u6708',
        greatRisk: 90,
        biggerRisk: 40,
        normalRisk: 10,
        lowRisk: 11,
      },
      {
        xValue: '\u4E94\u6708',
        greatRisk: 40,
        biggerRisk: 70,
        normalRisk: 40,
        lowRisk: 21,
      },
      {
        xValue: '\u516D\u6708',
        greatRisk: 90,
        biggerRisk: 120,
        normalRisk: 10,
        lowRisk: 31,
      },
      {
        xValue: '\u4E03\u6708',
        greatRisk: 140,
        biggerRisk: 30,
        normalRisk: 40,
        lowRisk: 51,
      },
      {
        xValue: '\u516B\u6708',
        greatRisk: 110,
        biggerRisk: 130,
        normalRisk: 140,
        lowRisk: 31,
      },
      {
        xValue: '\u4E5D\u6708',
        greatRisk: 140,
        biggerRisk: 110,
        normalRisk: 50,
        lowRisk: 91,
      },
      {
        xValue: '\u5341\u6708',
        greatRisk: 120,
        biggerRisk: 30,
        normalRisk: 70,
        lowRisk: 31,
      },
      {
        xValue: '\u5341\u4E00\u6708',
        greatRisk: 20,
        biggerRisk: 40,
        normalRisk: 30,
        lowRisk: 51,
      },
      {
        xValue: '\u5341\u4E8C\u6708',
        greatRisk: 120,
        biggerRisk: 110,
        normalRisk: 120,
        lowRisk: 21,
      },
    ]
    return {
      grid,
      legend,
      seriesData,
      data,
      tooltip,
      dataZoom
    }
  },
})
<\/script>
`)],-1),Z=F('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>seriesData</td><td>\u7C7B\u76EE\u53CAseries\u914D\u7F6E</td><td>array&lt;{label: string; key: string; itemStyle: object (\u8BE6\u60C5\u53C2\u8003echarts\u7684series-line.itemStyle) }&gt;</td><td>-</td><td>-</td></tr><tr><td>chartData</td><td>\u6570\u636E</td><td>array&lt;{xValue: string\uFF08x\u8F74\u6570\u636E\uFF09; [key: string]: string | number \uFF08y\u8F74\u6570\u636E\uFF0Ckey\u4E3Alegend\u7684key\u7684\u503C\uFF09 }&gt;</td><td>-</td><td>-</td></tr><tr><td>x-axis</td><td>x\u8F74\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr><tr><td>y-axis</td><td>y\u8F74\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr><tr><td>grid</td><td>\u76F4\u89D2\u5750\u6807\u7CFB\u5185\u7ED8\u56FE\u7F51\u683C\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>{ top: &#39;20&#39;, left: &#39;0&#39;, right: &#39;0&#39;, bottom: &#39;40&#39;, containLabel: true }</td></tr><tr><td>legend</td><td>\u56FE\u4F8B\u7EC4\u4EF6\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr><tr><td>tooltip</td><td>\u63D0\u793A\u6846\u7EC4\u4EF6\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr><tr><td>dataZoom</td><td>\u7528\u4E8E\u533A\u57DF\u7F29\u653E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="zhu-zhuang-tu"><a class="header-anchor" href="#zhu-zhuang-tu"></a> \u67F1\u72B6\u56FE</h2>',3),W=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-column-chart :chart-data="chartData" class="m-b-lg" />
  <fx-v-column-chart
    :chart-data="chartData2"
    :is-vertical="false"
    :show-count="5"
    :scroll-count="4"
    :bar-color="['#72F5AC', 'rgba(114,245,172,0.16)']"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const chartData = [
      { label: '2002', value: 20 },
      { label: '2004', value: 60 },
      { label: '2006', value: 40 },
      { label: '2008', value: 90 },
      { label: '2010', value: 60 },
      { label: '2012', value: 70 },
      { label: '2014', value: 10 },
      { label: '2016', value: 50 },
      { label: '2018', value: 10 },
      { label: '2020', value: 50 },
    ]
    const chartData2 = [
      { label: '\u5E94\u6025\u6551\u63F4', value: 20 },
      { label: '\u6D88\u9632\u961F\u4F0D', value: 60 },
      { label: '\u9632\u6C5B\u62A2\u9669', value: 40 },
      { label: '\u533B\u7597\u6551\u62A4', value: 90 },
      { label: '\u793E\u4F1A\u6551\u63F4', value: 60 },
      { label: '\u5E94\u6025\u6551\u63F41', value: 70 },
      { label: '\u6D88\u9632\u961F\u4F0D1', value: 10 },
      { label: '\u9632\u6C5B\u62A2\u96691', value: 50 },
      { label: '\u533B\u7597\u6551\u62A41', value: 10 },
      { label: '\u793E\u4F1A\u6551\u63F41', value: 50 },
    ]
    return {
      chartData,
      chartData2,
    }
  },
})
<\/script>
`)],-1),L=F('<h2 id="attributes-2"><a class="header-anchor" href="#attributes-2"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>chartData</td><td>\u6570\u636E</td><td>array&lt;{label: string; value: number}&gt;</td><td>-</td><td>-</td></tr><tr><td>bar-width</td><td>\u5BBD\u5EA6</td><td>number</td><td>-</td><td>16</td></tr><tr><td>bar-color</td><td>\u989C\u8272</td><td>string / array</td><td>-</td><td>[&#39;#2EF4FF&#39;, &#39;rgba(44,218,249,0.17)&#39;]</td></tr><tr><td>background-color</td><td>\u80CC\u666F\u8272</td><td>string</td><td>-</td><td>&#39;rgba(56,75,103,0.16)&#39;</td></tr><tr><td>scroll-count</td><td>\u6BCF\u6B21\u6EDA\u52A8\u4E2A\u6570</td><td>number</td><td>-</td><td>4</td></tr><tr><td>show-count</td><td>\u663E\u793A\u4E2A\u6570</td><td>number</td><td>-</td><td>Number.MAX_SAFE_INTEGER</td></tr><tr><td>interval</td><td>\u6EDA\u52A8\u95F4\u9694\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>number</td><td>-</td><td>5000</td></tr><tr><td>x-axis</td><td>x\u8F74\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr><tr><td>y-axis</td><td>y\u8F74\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr><tr><td>tooltip</td><td>\u63D0\u793A\u6846\u7EC4\u4EF6\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="bing-zhuang-tu"><a class="header-anchor" href="#bing-zhuang-tu"></a> \u997C\u72B6\u56FE</h2>',3),N=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-pie-chart :chart-data="chartData" height="200px" title="17%" :fullTitle="{textStyle: {color: '#ffffff'}}"/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const chartData = [
      {
        label: '\u91CD\u5927\u98CE\u9669',
        value: 40,
        color: '#FD6161',
      },
      {
        label: '\u8F83\u5927\u98CE\u9669',
        value: 20,
        color: '#FB7E00',
      },
      {
        label: '\u4E00\u822C\u98CE\u9669',
        value: 50,
        color: '#D6B800',
      },
      {
        label: '\u4F4E\u98CE\u9669',
        value: 10,
        color: '#3E7DFF',
      },
    ]
    return {
      chartData,
    }
  },
})
<\/script>
`)],-1),T=F('<h2 id="attributes-3"><a class="header-anchor" href="#attributes-3"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>chartData</td><td>\u6570\u636E</td><td>array&lt;{label: string; value: number; color: string}&gt;</td><td>-</td><td>-</td></tr><tr><td>legend</td><td>legend\u914D\u7F6E</td><td>object{gap: string}</td><td>-</td><td>{gap: &#39;var(--sm)&#39;}</td></tr><tr><td>radius</td><td>\u73AF\u5927\u5C0F</td><td>string[]</td><td>-</td><td>[&#39;20%&#39;, &#39;70%&#39;]</td></tr><tr><td>title</td><td>\u6807\u9898\uFF0C\u5728\u997C\u56FE\u4E2D\u5FC3\u663E\u793A</td><td>string</td><td>-</td><td>-</td></tr><tr><td>fullTitle</td><td>\u6807\u9898\uFF0C\u5B8C\u5168\u81EA\u5B9A\u4E49\uFF1B\u53C2\u89C1echarts\u6587\u6863 title</td><td>object</td><td>-</td><td>-</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7legend</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>tooltip</td><td>\u63D0\u793A\u6846\u7EC4\u4EF6\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="rosebing-zhuang-tu"><a class="header-anchor" href="#rosebing-zhuang-tu"></a> Rose\u997C\u72B6\u56FE</h2>',3),$=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-rose-pie-chart :chart-data="chartData" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const chartData = [
      {
        label: '\u91CD\u5927\u98CE\u9669',
        value: 30,
        color: '#FD6161',
      },
      {
        label: '\u8F83\u5927\u98CE\u9669',
        value: 50,
        color: '#FB7E00',
      },
      {
        label: '\u4E00\u822C\u98CE\u9669',
        value: 80,
        color: '#D6B800',
      },
      {
        label: '\u4F4E\u98CE\u9669',
        value: 90,
        color: '#3E7DFF',
      },
    ]
    return {
      chartData,
    }
  },
})
<\/script>
`)],-1),O=F('<h2 id="attributes-4"><a class="header-anchor" href="#attributes-4"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>chartData</td><td>\u6570\u636E</td><td>array&lt;{label: string; value: number; color: string}&gt;</td><td>-</td><td>-</td></tr><tr><td>legend</td><td>legend\u914D\u7F6E</td><td>object{gap: string}</td><td>-</td><td>{gap: &#39;var(--sm)&#39;}</td></tr><tr><td>title</td><td>\u6807\u9898\uFF0C\u5728\u997C\u56FE\u4E2D\u5FC3\u663E\u793A</td><td>string</td><td>-</td><td>-</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7legend</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>tooltip</td><td>\u63D0\u793A\u6846\u7EC4\u4EF6\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="bai-fen-bi-bing-zhuang-tu"><a class="header-anchor" href="#bai-fen-bi-bing-zhuang-tu"></a> \u767E\u5206\u6BD4\u997C\u72B6\u56FE</h2>',3),X=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-proportion-pie-chart :legend="legend" :chart-data="chartData" style="height: 400px;" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const chartData = [
      { label: '\u5E94\u6025\u8F66\u8F86', value: 10, color: '#CDE5F0' },
      { label: '\u9632\u62A4\u88C5\u5907', value: 20, color: '#9084FF' },
      { label: '\u533B\u7597\u88C5\u5907', value: 30, color: '#72F5AC' },
      { label: '\u62A2\u9669\u88C5\u5907', value: 20, color: '#FD6161' },
      { label: '\u6551\u63F4\u88C5\u5907', value: 10, color: '#FD892F' },
      { label: '\u98DF\u54C1\u7269\u8D44', value: 5, color: '#DBC200' },
      { label: '\u5176\u4ED6\u7269\u8D44', value: 5 },
    ]
    return {
      chartData,
    }
  },
})
<\/script>
`)],-1),G=F('<h2 id="attributes-5"><a class="header-anchor" href="#attributes-5"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>chartData</td><td>\u6570\u636E</td><td>array&lt;{label: string; value: number; color?: string;}&gt;</td><td>color\u9ED8\u8BA4#1D2B3E</td><td>-</td></tr><tr><td>activeColor</td><td>click\u65F6\u5706\u73AF\u989C\u8272</td><td>string</td><td>-</td><td>rgba(113, 248, 252)</td></tr><tr><td>label1</td><td>\u5916\u5708\u5B57\u4F53\u6837\u5F0F</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>label2</td><td>\u5185\u5708\u5B57\u4F53\u6837\u5F0F</td><td>Object</td><td>-</td><td>{}</td></tr></tbody></table><h2 id="heng-xiang-gun-dong-zhu-zhuang-tu"><a class="header-anchor" href="#heng-xiang-gun-dong-zhu-zhuang-tu"></a> \u6A2A\u5411\u6EDA\u52A8\u67F1\u72B6\u56FE</h2>',3),M=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-scrolling-bar-chart
    :chart-data="chartData"
    height="200px"
    :bar-style="{ color: 'linear-gradient(90deg, rgba(114,245,172,0.16) 0%, #72F5AC 100%)', width: '1em', backgroundColor: 'rgba(47,71,110,0.12)' }"
    :label-click="handleClickLabel"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const chartData = [
      { value: 55, label: '\u6CB3\u6D41\u6E56\u6CCA', id: '1' },
      { value: 69, label: '\u5EFA\u7B51\u5DE5\u8D38', id: '2' },
      { value: 50, label: '\u5DE5\u8D38\u4F01\u4E1A', id: '3' },
      { value: 20, label: '\u52A0\u6CB9\u7AD9', id: '4' },
      { value: 26, label: '\u5929\u6C14\u7AD9', id: '5' },
      { value: 87, label: '\u51B6\u91D1\u5316\u5DE5', id: '6' },
      { value: 69, label: '\u5C3E\u77FF\u7164\u70AD', id: '7' },
      { value: 50, label: '\u6865\u6881\uFF0C\u6C7D\u8F66\uFF0C\u706B\u8F66\uFF0C\u98DE\u673A', id: '8' },
      { value: 20, label: '\u534E\u7199LIVE', id: '9' },
      { value: 26, label: '\u76F4\u64AD\u5E26\u8D27', id: '10' },
      { value: 87, label: '\u51B6\u91D1\u5316\u5DE5', id: '11' },
    ]
    const handleClickLabel = (barItem) => {
      console.log(barItem);
    }
    return {
      chartData,
      handleClickLabel
    }
  },
})
<\/script>
`)],-1),Q=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-scrolling-bar-chart :chart-data="chartData" height="200px" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const chartData = [
      { value: [{ value: 23, label: '\u957F\u6C5F0', barStyle: { color: 'rgb(13, 48, 252)' } }, { value: 23, label: '\u957F\u6C5F1', barStyle: { color: 'rgb(113, 248, 252)' } }, { value: 26, label: '\u9EC4\u6CB31', barStyle: { color: 'rgb(13, 148, 252)' } }], label: '\u6CB3\u6D41\u6E56\u6CCA' },
      { value: [{ value: 13, label: '\u957F\u6C5F2', barStyle: { color: 'rgb(113, 248, 252)' } }, { value: 36, label: '\u9EC4\u6CB32', barStyle: { color: 'rgb(13, 148, 252)' } }], label: '\u5EFA\u7B51\u5DE5\u8D38' },
      { value: [{ value: 33, label: '\u957F\u6C5F3', barStyle: { color: 'rgb(113, 248, 252)' } }, { value: 46, label: '\u9EC4\u6CB33', barStyle: { color: 'rgb(13, 148, 252)' } }], label: '\u5DE5\u8D38\u4F01\u4E1A' },
      { value: [{ value: 43, label: '\u957F\u6C5F4', barStyle: { color: 'rgb(113, 248, 252)' } }, { value: 56, label: '\u9EC4\u6CB34', barStyle: { color: 'rgb(13, 148, 252)' } }], label: '\u52A0\u6CB9\u7AD9' },
      { value: [{ value: 13, label: '\u957F\u6C5F5', barStyle: { color: 'rgb(113, 248, 252)' } }, { value: 76, label: '\u9EC4\u6CB35', barStyle: { color: 'rgb(13, 148, 252)' } }], label: '\u5929\u6C14\u7AD9' },
      { value: [{ value: 53, label: '\u957F\u6C5F6', barStyle: { color: 'rgb(113, 248, 252)' } }, { value: 16, label: '\u9EC4\u6CB36', barStyle: { color: 'rgb(13, 148, 252)' } }], label: '\u51B6\u91D1\u5316\u5DE5' },
      { value: [{ value: 23, label: '\u957F\u6C5F7', barStyle: { color: 'rgb(113, 248, 252)' } }, { value: 54, label: '\u9EC4\u6CB37', barStyle: { color: 'rgb(13, 148, 252)' } }], label: '\u5C3E\u77FF\u7164\u70AD' },
      { value: [{ value: 43, label: '\u957F\u6C5F8', barStyle: { color: 'rgb(113, 248, 252)' } }, { value: 50, label: '\u9EC4\u6CB38', barStyle: { color: 'rgb(13, 148, 252)' } }], label: '\u6865\u6881\uFF0C\u6C7D\u8F66\uFF0C\u706B\u8F66\uFF0C\u98DE\u673A' },
    ]
    return {
      chartData,
    }
  },
})
<\/script>
`)],-1),U=F('<h2 id="attributes-6"><a class="header-anchor" href="#attributes-6"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>chartData</td><td>\u6570\u636E</td><td>array&lt;{label: string; value: number; color: string}&gt;</td><td>-</td><td>-</td></tr><tr><td>title</td><td>\u6807\u9898\uFF0C\u5728\u997C\u56FE\u4E2D\u5FC3\u663E\u793A</td><td>string</td><td>-</td><td>-</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7legend</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>label-formatter</td><td>\u6807\u7B7E\u81EA\u5B9A\u4E49\u51FD\u6570</td><td>(label: string) =&gt; string</td><td>-</td><td>-</td></tr><tr><td>value-formatter</td><td>\u503C\u81EA\u5B9A\u4E49\u51FD\u6570</td><td>(value: number) =&gt; string</td><td>-</td><td>-</td></tr><tr><td>label-click</td><td>label \u70B9\u51FB\u4E8B\u4EF6\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u70B9\u51FB\u7684\u6570\u636E\u5BF9\u8C61\uFF08\u5982 {value: 55, label: &#39;\u6CB3\u6D41\u6E56\u6CCA&#39;}\uFF09</td><td>(barItem: Object) =&gt; void</td><td>-</td><td>-</td></tr></tbody></table><h2 id="heng-xiang-gun-dong-zhu-zhuang-tu-zi-ding-yi-label"><a class="header-anchor" href="#heng-xiang-gun-dong-zhu-zhuang-tu-zi-ding-yi-label"></a> \u6A2A\u5411\u6EDA\u52A8\u67F1\u72B6\u56FE(\u81EA\u5B9A\u4E49label)</h2>',3),q=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-scrolling-list-chart
      height="200px"
      :chart-data="chartData"
      :bar-style="{ color: 'linear-gradient(270deg, #2EF4FF 0%, rgba(44,218,249,0.17) 100%)', width: '1em', backgroundColor: 'none' }"
    >
      <template #label="{ row }">
        <div style="width: calc(var(--xxl) * 4.9 )">
          <hl-group gap-x="var(--md)" align="items-middle" style="padding-left: var(--md)">
            <hl-icon size="xl" class="symbol" :type="\`level\${row.index + 1}\`" style="position:relative;">
              <span
                :style="{ position: 'absolute', color: row.index > 2 ? '#71F8FC' : '#FFFFFF', textShadow: '0 0 6px rgba(113,248,252,0.60)' }"
                class="font-md font-din"
              >{{ row.index + 1 }}</span>
              <fill-heart v-show="row.index < 3" :src="two-heart" />
            </hl-icon>
            <div class="label m-r-xl ellipsis" style="width: calc(var(--xxl) * 2.8 )">{{ row.label }}</div>
          </hl-group>
        </div>
      </template>
    </fx-v-scrolling-list-chart>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const chartData = [
      { label: "\u534E\u65B0\u71C3\u6C14\u96C6\u56E2\u7269\u4E1A", value: 10, index: 0 },
      { label: "\u4E09\u5C71\u56DB\u5B63\u7269\u4E1A", value: 20, index: 1 },
      { label: "2004", value: 60, index: 2 },
      { label: "2006", value: 40, index: 3 },
      { label: "2008", value: 80, index: 4 },
      { label: "2010", value: 60, index: 5 },
      { label: "2012", value: 70, index: 6 },
      { label: "2014", value: 10, index: 7 },
      { label: "2016", value: 50, index: 8 },
      { label: "2018", value: 10, index: 9 },
      { label: "2020", value: 50, index: 10 },
    ]
    return {
      chartData,
    }
  },
})
<\/script>
`)],-1),H=F('<h2 id="attributes-7"><a class="header-anchor" href="#attributes-7"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>chartData</td><td>\u6570\u636E</td><td>array&lt;{label: string; value: number; color: string}&gt;</td><td>-</td><td>-</td></tr><tr><td>title</td><td>\u6807\u9898\uFF0C\u5728\u997C\u56FE\u4E2D\u5FC3\u663E\u793A</td><td>string</td><td>-</td><td>-</td></tr><tr><td>show-label</td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7legend</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>label-formatter</td><td>\u6807\u7B7E\u81EA\u5B9A\u4E49\u51FD\u6570</td><td>(label: string) =&gt; string</td><td>-</td><td>-</td></tr><tr><td>value-formatter</td><td>\u503C\u81EA\u5B9A\u4E49\u51FD\u6570</td><td>(value: number) =&gt; string</td><td>-</td><td>-</td></tr></tbody></table><h2 id="dui-die-zhu-zhuang-tu"><a class="header-anchor" href="#dui-die-zhu-zhuang-tu"></a> \u5806\u53E0\u67F1\u72B6\u56FE</h2>',3),J=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-stacked-bar-chart :grid="grid" :legend="legend" :chart-data="data" :legendReal="legendReal" :dataZoom="dataZoom"/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const grid = {
      top: '20',
      left: '0',
      right: '0',
      bottom: '72',
      containLabel: true,
    };
    const legend = [
      {
        label: '\u5DE5\u4E1A\u5B89\u5168',
        key: 'industrialSafety',
        barWidth: 22,
        itemStyle: { color: '#FD6161' },
      },
      {
        label: '\u5BC6\u96C6\u573A\u6240',
        key: 'densePlace',
        barWidth: 22,
        itemStyle: {
          color: '#FB7E00',
        },
      },
      {
        label: '\u81EA\u7136\u707E\u5BB3',
        key: 'naturalDisaster',
        barWidth: 22,
        itemStyle: {
          color: '#D6B800',
        },
      },
      {
        label: '\u516C\u5171\u8BBE\u65BD',
        key: 'utilities',
        barWidth: 22,
        itemStyle: {
          color: '#3E7DFF',
        },
      },

      {
        label: '\u5DE5\u4E1A\u5B89\u51681',
        key: 'industrialSafety1',
        barWidth: 22,
        itemStyle: { color: '#FD6161' },
      },
      {
        label: '\u5BC6\u96C6\u573A\u62401',
        key: 'densePlace1',
        barWidth: 22,
        itemStyle: {
          color: '#FB7E00',
        },
      },
      {
        label: '\u81EA\u7136\u707E\u5BB31',
        key: 'naturalDisaster1',
        barWidth: 22,
        itemStyle: {
          color: '#D6B800',
        },
      },
      {
        label: '\u516C\u5171\u8BBE\u65BD1',
        key: 'utilities1',
        barWidth: 22,
        itemStyle: {
          color: '#3E7DFF',
        },
      },
    ]
    const data = [
      {
        xValue: '\u79E6\u6C49\u65B0\u57CE',
        industrialSafety: 20,
        densePlace: 40,
        naturalDisaster: 30,
        utilities: 11,
        industrialSafety1: 20,
        densePlace1: 40,
        naturalDisaster1: 30,
        utilities1: 11,
      },
      {
        xValue: '\u6CFE\u6CB3\u65B0\u57CE',
        industrialSafety: 30,
        densePlace: 60,
        naturalDisaster: 10,
        utilities: 31,
        industrialSafety1: 30,
        densePlace1: 60,
        naturalDisaster1: 10,
        utilities1: 31,
      },
      {
        xValue: '\u6CA3\u897F\u65B0\u57CE',
        industrialSafety: 60,
        densePlace: 40,
        naturalDisaster: 80,
        utilities: 41,
        industrialSafety1: 60,
        densePlace1: 40,
        naturalDisaster1: 80,
        utilities1: 41,
      },
      {
        xValue: '\u6CA3\u4E1C\u65B0\u57CE',
        industrialSafety: 90,
        densePlace: 40,
        naturalDisaster: 10,
        utilities: 11,
        industrialSafety1: 90,
        densePlace1: 40,
        naturalDisaster1: 10,
        utilities1: 11,
      },
      {
        xValue: '\u7A7A\u5DF7\u65B0\u57CE',
        industrialSafety: 40,
        densePlace: 70,
        naturalDisaster: 40,
        utilities: 21,
        industrialSafety1: 40,
        densePlace1: 70,
        naturalDisaster1: 40,
        utilities1: 21,
      },
      {
        xValue: '\u54C8\u54C8\u65B0\u57CE',
        industrialSafety: 90,
        densePlace: 120,
        naturalDisaster: 10,
        utilities: 31,
        industrialSafety1: 90,
        densePlace1: 120,
        naturalDisaster1: 10,
        utilities1: 31,
      },
      {
        xValue: '\u563F\u563F\u65B0\u57CE',
        industrialSafety: 140,
        densePlace: 30,
        naturalDisaster: 40,
        utilities: 51,
        industrialSafety1: 140,
        densePlace1: 30,
        naturalDisaster1: 40,
        utilities1: 51,
      },
    ]
    const legendReal = {
      type: 'scroll',
      pageIconColor: '#fff',
      pageTextStyle: {
        color: '#fff'
      },
      bottom: 36
    }
    const dataZoom = [
      {
        show: true,
        realtime: true,
        start: 30,
        end: 70,
        bottom: 5,
        xAxisIndex: [0, 3],
        height: 20
      },
      {
        type: 'inside',
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 3]
      }
    ];
    return {
      legend,
      data,
      legendReal,
      dataZoom,
      grid
    }
  },
})
<\/script>
`)],-1),K=F('<h2 id="attributes-8"><a class="header-anchor" href="#attributes-8"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>legend</td><td>\u7C7B\u76EE\u914D\u7F6E</td><td>array&lt;{label: string; key: string; barWidth: number; itemStyle: object (\u8BE6\u60C5\u53C2\u8003echarts\u7684series-line.itemStyle) }&gt;</td><td>-</td><td>-</td></tr><tr><td>chartData</td><td>\u6570\u636E</td><td>array&lt;{xValue: string\uFF08x\u8F74\u6570\u636E\uFF09; [key: string]: string | number \uFF08y\u8F74\u6570\u636E\uFF0Ckey\u4E3Alegend\u7684key\u7684\u503C\uFF09 }&gt;</td><td>-</td><td>-</td></tr><tr><td>x-axis</td><td>x\u8F74\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr><tr><td>y-axis</td><td>y\u8F74\u8BBE\u7F6E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>object</td><td>-</td><td>-</td></tr><tr><td>dataZoom</td><td>\u7528\u4E8E\u533A\u57DF\u7F29\u653E\uFF0C\u53C2\u89C1echarts\u6587\u6863</td><td>array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="jian-bian-xiang-xing-zhu-tu"><a class="header-anchor" href="#jian-bian-xiang-xing-zhu-tu"></a> \u6E10\u53D8\u8C61\u5F62\u67F1\u56FE</h2>',3),Y=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-spire-column-chart :chart-data="chartData" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const chartData = [
      { label: '\u6CA3\u897F\u65B0\u57CE', value: 20, color: ['rgba(83,78,225,1)', 'rgba(83,78,225,0)'] },
      { label: '\u6CA3\u4E1C\u65B0\u57CE', value: 60, color: ['rgba(236,214,79,1)', 'rgba(236,214,79,0)'] },
      { label: '\u79E6\u6C49\u65B0\u57CE', value: 40, color: ['rgba(0,228,240,1)', 'rgba(0,228,240,0)'] },
      { label: '\u6CFE\u6CB3\u65B0\u57CE', value: 90, color: ['rgba(68,209,109,1)', 'rgba(68,209,109,0)'] },
      { label: '\u6CFE\u6CB3\u65B0\u57CE2', value: 60, color: ['rgba(18,78,145,1)', 'rgba(18,78,145,0)'] },
      { label: '\u6D4B\u8BD5\u65B0\u57CE', value: 70, color: ['rgba(189,196,20,1)', 'rgba(189,196,20,0)'] },
      { label: '\u6D4B\u8BD5\u65B0\u57CE2', value: 80, color: ['rgba(200,204,165,1)', 'rgba(200,204,165,0)'] },
    ]
    return {
      chartData,
    }
  },
})
<\/script>
`)],-1),tt=F('<h2 id="attributes-9"><a class="header-anchor" href="#attributes-9"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>chartData</td><td>\u6570\u636E</td><td>array&lt;{label: string; value: number; color: string[]}&gt;</td><td>-</td><td>-</td></tr></tbody></table><h2 id="jin-zi-ta-tu"><a class="header-anchor" href="#jin-zi-ta-tu"></a> \u91D1\u5B57\u5854\u56FE</h2>',3),et=a("pre",null,[a("code",{class:"html"},` <template>
  <fx-v-pyramid-chart :chart-data="chartData" style="height: 300px;" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const chartData = [
      { label: '\u6CA3\u897F\u65B0\u57CE', value: 2, color: ['rgba(114,245,172,0.00)', 'rgba(114,245,172,0.56)'] },
      { label: '\u6CA3\u4E1C\u65B0\u57CE', value: 160, color: ['rgba(37,129,255,0.00)', 'rgba(37,129,255,0.56)'] },
      { label: '\u79E6\u6C49\u65B0\u57CE', value: 90, color: ['rgba(255,234,68,0.00)', 'rgba(255,234,68,0.56)'] },
      { label: '\u6CFE\u6CB3\u65B0\u57CE', value: 190, color: ['rgba(255,84,84,0.0)', 'rgba(255,84,84,0.56)'] },
      { label: '\u6CFE\u6CB3\u65B0\u57CE', value: 40, color: ['rgba(253,137,47,0.00)', 'rgba(253,137,47,0.56)'] },
      { label: '\u6D4B\u8BD5\u65B0\u57CE', value: 40, color: ['rgba(253,137,47,0.00)', 'rgba(253,137,47,0.56)'] },
      { label: '\u6D4B\u8BD5\u65B0\u57CE2', value: 40, color: ['rgba(253,137,47,0.00)', 'rgba(253,137,47,0.56)'] },
    ]
    return {
      chartData,
    }
  },
})
<\/script>
`)],-1),ut=F('<h2 id="attributes-10"><a class="header-anchor" href="#attributes-10"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>chartData</td><td>\u6570\u636E</td><td>array&lt;{label: string; value: number; color: string</td><td>string[]}&gt;</td><td>-</td></tr></tbody></table>',2);function at(d,n,r,l,s,o){const t=h("fx-demo0"),e=h("demo-block"),u=h("fx-demo1"),m=h("fx-demo2"),C=h("fx-demo3"),D=h("fx-demo4"),g=h("fx-demo5"),p=h("fx-demo6"),B=h("fx-demo7"),E=h("fx-demo8"),f=h("fx-demo9"),v=h("fx-demo10"),_=h("right-nav");return A(),R(S,null,[a("section",null,[P,j,i(e,{fs:"",dark:""},{source:c(()=>[i(t)]),highlight:c(()=>[I]),_:1}),Z,i(e,{fs:"",dark:""},{source:c(()=>[i(u)]),highlight:c(()=>[W]),_:1}),L,i(e,{fs:"",dark:""},{source:c(()=>[i(m)]),highlight:c(()=>[N]),_:1}),T,i(e,{fs:"",dark:""},{source:c(()=>[i(C)]),highlight:c(()=>[$]),_:1}),O,i(e,{fs:"",dark:""},{source:c(()=>[i(D)]),highlight:c(()=>[X]),_:1}),G,i(e,{fs:"",dark:""},{source:c(()=>[i(g)]),highlight:c(()=>[M]),_:1}),i(e,{fs:"",dark:""},{source:c(()=>[i(p)]),highlight:c(()=>[Q]),_:1}),U,i(e,{fs:"",dark:""},{source:c(()=>[i(B)]),highlight:c(()=>[q]),_:1}),H,i(e,{fs:"",dark:""},{source:c(()=>[i(E)]),highlight:c(()=>[J]),_:1}),K,i(e,{fs:"",dark:""},{source:c(()=>[i(f)]),highlight:c(()=>[Y]),_:1}),tt,i(e,{fs:"",dark:""},{source:c(()=>[i(v)]),highlight:c(()=>[et]),_:1}),ut]),i(_)],64)}var it=V(z,[["render",at]]);export{it as default};
