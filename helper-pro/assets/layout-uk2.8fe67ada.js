var v=Object.defineProperty;var l=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var u=(e,o,a)=>o in e?v(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,d=(e,o)=>{for(var a in o||(o={}))D.call(o,a)&&u(e,a,o[a]);if(l)for(var a of l(o))H.call(o,a)&&u(e,a,o[a]);return e};import{L as j}from"./header-dark.90456bdf.js";import{a as C,b as k}from"./main.c1528d35.js";import{L as S}from"./menu.d34b574e.js";import{L as g}from"./drawer.cb83718e.js";import{_ as F}from"./source.5701c8df.js";import{d as $,aY as V,r as x,t as B,m as r,c as N,x as t,v as s,S as O,p as R,b as U,F as z,o as c,R as E}from"./vue.11ca9014.js";import"./hl-icons.19688ff5.js";import"./echarts.3578bebe.js";const M=$({components:{LayoutHeader:j,LayoutSubHeader:C,LayoutMenu:S,LayoutFooter:k,LayoutDrawer:g},setup(){const e=V({boxed:["boxed1"],header:["fixed-header"],fullHeader:["full-header"],aside:["fixed-aside"],subHeader:["fixed-sub-header"],fullSubHeader:["full-sub-header"],footer:["fixed-footer1"],fullFooter:["full-footer1"]}),o=x(!1);return d({drawerVisible:o,openDrawer:()=>{o.value=!0},changeLayout:n=>{e.header=n.header,e.aside=n.aside,e.subHeader=n.subHeader,e.footer=n.footer,e.boxed=n.boxed,o.value=!1},closeDrawer:()=>{o.value=!1}},B(e))}});function Y(e,o,a,f,i,n){const m=r("layout-header"),p=r("layout-sub-header"),b=r("layout-menu"),h=r("hl-main"),_=r("hl-container"),y=r("layout-footer"),w=r("hl-layout"),L=r("layout-drawer");return c(),N(z,null,[t(w,{class:O([e.boxed,e.header,e.fullHeader,e.aside,e.subHeader,e.footer,e.fullFooter])},{default:s(()=>[t(m,{onOpenDrawer:e.openDrawer},null,8,["onOpenDrawer"]),t(p),t(_,null,{default:s(()=>[t(b),t(h,null,{default:s(()=>[E(e.$slots,"default")]),_:3})]),_:3}),t(y)]),_:3},8,["class"]),e.drawerVisible?(c(),R(L,{key:0,onSubmit:e.changeLayout,onCancel:e.closeDrawer},null,8,["onSubmit","onCancel"])):U("",!0)],64)}var W=F(M,[["render",Y]]);export{W as default};
