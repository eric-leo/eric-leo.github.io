import{s as De,r as Ue,c as h,i as pe,a as Oe,m as z,n as Me,w as je,d as b,h as N,_ as $,o as d,b as p,u as c,e as g,f as J,t as P,g as _,j as he,k as L,l as fe,p as ve,q as me,v as M,x as j,y as D,F,z as K,A as k,B as x,C as H,D as Fe,E as ge,G as V,H as qe,I as A,J as ze}from"./plugin-vue_export-helper.1cbc6bb8.js";const We="modulepreload",ne={},Ve="/hongluan-hooks/",ke=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${Ve}${s}`,s in ne)return;ne[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":We,o||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),o)return new Promise((i,u)=>{a.addEventListener("load",i),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};var Ge='{"lang":"en-US","title":"Hongluan Hooks(1.1.7)","description":"Hongluan Hooks","base":"/hongluan-hooks/","head":[["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"stylesheet","href":"/theme/style.css"}]],"themeConfig":{"nav":[],"sidebar":[{"text":"useDeferred","link":"/examples/use-deferred"},{"text":"useEChart","link":"/examples/use-echart"},{"text":"useHovering","link":"/examples/use-hovering"},{"text":"useLazyPane","link":"/examples/use-lazy-pane"},{"text":"usePagination","link":"/examples/use-pagination"},{"text":"useScrollEChart","link":"/examples/use-scroll-echart"},{"text":"useTableSelection","link":"/examples/use-table-selection"}]},"locales":{},"langs":{}}';const be=/^https?:/i,S=typeof window!="undefined";function Je(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function se(e,t){const n=Je(t,Object.keys(e));return n?e[n]:void 0}function Ke(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((s,o)=>(s[o]={label:t[o].label,lang:n[o].lang},s),{}):{}}function Xe(e,t){t=Ye(e,t);const n=se(e.locales||{},t),s=se(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:Ke(e)})}function Ye(e,t){if(!S)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const $e=Symbol(),X=De(Qe(Ge));function Qe(e){return Ue(JSON.parse(e))}function Ze(e){const t=h(()=>Xe(X.value,e.path));return{site:t,theme:h(()=>t.value.themeConfig),page:h(()=>e.data),frontmatter:h(()=>e.data.frontmatter),lang:h(()=>t.value.lang),localePath:h(()=>{const{langs:n,lang:s}=t.value,o=Object.keys(n).find(r=>n[r].lang===s);return B(o||"/")}),title:h(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:h(()=>e.data.description||t.value.description)}}function E(){const e=pe($e);if(!e)throw new Error("vitepress data not properly injected in app");return e}function et(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function B(e){return be.test(e)?e:et(X.value.base,e)}function ye(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),S){const n="/hongluan-hooks/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const we=Symbol(),oe="http://a.com",tt=()=>({path:"/",component:null,data:null});function nt(e,t){const n=Oe(tt());function s(a=S?location.href:"/"){const i=new URL(a,oe);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",a=i.pathname+i.search+i.hash),S&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",a)),r(a)}let o=null;async function r(a,i=0){const u=new URL(a,oe),l=o=u.pathname;try{let f=e(l);if("then"in f&&typeof f.then=="function"&&(f=await f),o===l){o=null;const{default:v,__pageData:y}=f;if(!v)throw new Error(`Invalid route component: ${v}`);n.path=l,n.component=z(v),n.data=z(JSON.parse(y)),S&&Me(()=>{if(u.hash&&!i){const w=document.querySelector(decodeURIComponent(u.hash));if(w){ae(w,u.hash);return}}window.scrollTo(0,i)})}}catch(f){f.message.match(/fetch/)||console.error(f),o===l&&(o=null,n.path=l,n.component=t?z(t):null)}}return S&&(window.addEventListener("click",a=>{const i=a.target.closest("a");if(i){const{href:u,protocol:l,hostname:f,pathname:v,hash:y,target:w}=i,C=window.location,T=v.match(/\.\w+$/);!a.ctrlKey&&!a.shiftKey&&!a.altKey&&!a.metaKey&&w!=="_blank"&&l===C.protocol&&f===C.hostname&&!(T&&T[0]!==".html")&&(a.preventDefault(),v===C.pathname?y&&y!==C.hash&&(history.pushState(null,"",y),window.dispatchEvent(new Event("hashchange")),ae(i,y,i.classList.contains("header-anchor"))):s(u))}},{capture:!0}),window.addEventListener("popstate",a=>{r(location.href,a.state&&a.state.scrollPosition||0)}),window.addEventListener("hashchange",a=>{a.preventDefault()})),{route:n,go:s}}function st(){const e=pe(we);if(!e)throw new Error("useRouter() is called without provider.");return e}function R(){return st().route}function ae(e,t,n=!1){const s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(s){const o=s.offsetTop;!n||Math.abs(o-window.scrollY)>window.innerHeight?window.scrollTo(0,o):window.scrollTo({left:0,top:o,behavior:"smooth"})}}function ot(e,t){let n=[],s=!0;const o=r=>{if(s){s=!1;return}const a=[],i=Math.min(n.length,r.length);for(let u=0;u<i;u++){let l=n[u];const[f,v,y=""]=r[u];if(l.tagName.toLocaleLowerCase()===f){for(const w in v)l.getAttribute(w)!==v[w]&&l.setAttribute(w,v[w]);for(let w=0;w<l.attributes.length;w++){const C=l.attributes[w].name;C in v||l.removeAttribute(C)}l.innerHTML!==y&&(l.innerHTML=y)}else document.head.removeChild(l),l=re(r[u]),document.head.append(l);a.push(l)}n.slice(i).forEach(u=>document.head.removeChild(u)),r.slice(i).forEach(u=>{const l=re(u);document.head.appendChild(l),a.push(l)}),n=a};je(()=>{const r=e.data,a=t.value,i=r&&r.title,u=r&&r.description,l=r&&r.frontmatter.head;document.title=(i?i+" | ":"")+a.title,document.querySelector("meta[name=description]").setAttribute("content",u||a.description),o([...l?rt(l):[]])})}function re([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function at(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function rt(e){return e.filter(t=>!at(t))}const it=b({name:"VitePressContent",setup(){const e=R();return()=>N("div",{style:{position:"relative"}},[e.component?N(e.component):null])}});const ct=/#.*$/,lt=/(index)?\.(md|html)$/,U=/\/$/,ut=/^[a-z]+:/i;function Y(e){return Array.isArray(e)}function Q(e){return ut.test(e)}function dt(e,t){if(t===void 0)return!1;const n=ie(`/${e.data.relativePath}`),s=ie(t);return n===s}function ie(e){return decodeURI(e).replace(ct,"").replace(lt,"")}function _t(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function G(e){return/^\//.test(e)?e:`/${e}`}function xe(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function pt(e){return e===!1||e==="auto"||Y(e)}function ht(e){return e.children!==void 0}function ft(e){return Y(e)?e.length===0:!e}function Z(e,t){if(pt(e))return e;t=G(t);for(const n in e)if(t.startsWith(G(n)))return e[n];return"auto"}function Le(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:xe(n.link)}),ht(n)&&(t=[...t,...Le(n.children)]),t),[])}const vt=["href","aria-label"],mt=["src"],gt=b({__name:"NavBarTitle",setup(e){const{site:t,theme:n,localePath:s}=E();return(o,r)=>(d(),p("a",{class:"nav-bar-title",href:c(s),"aria-label":`${c(t).title}, back to home`},[c(n).logo?(d(),p("img",{key:0,class:"logo",src:c(B)(c(n).logo),alt:"Logo"},null,8,mt)):g("v-if",!0),J(" "+P(c(t).title),1)],8,vt))}});var kt=$(gt,[["__scopeId","data-v-78c39f46"]]);function bt(){const{site:e,localePath:t,theme:n}=E();return h(()=>{const s=e.value.langs,o=Object.keys(s);if(o.length<2)return null;const a=R().path.replace(t.value,""),i=o.map(l=>({text:s[l].label,link:`${l}${a}`}));return{text:n.value.selectText||"Languages",items:i}})}const $t=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function yt(){const{site:e}=E();return h(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=wt(n);return{text:xt(s,t.repoLabel),link:s}})}function wt(e){return be.test(e)?e:`https://github.com/${e}`}function xt(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=$t.find(([o,r])=>r.test(n[0]));return s&&s[0]?s[0]:"Source"}function Se(e){const t=R(),n=Q(e.value.link);return{props:h(()=>{const o=ce(`/${t.data.relativePath}`);let r=!1;if(e.value.activeMatch)r=new RegExp(e.value.activeMatch).test(o);else{const a=ce(B(e.value.link));r=a==="/"?a===o:o.startsWith(a)}return{class:{active:r,isExternal:n},href:n?e.value.link:B(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function ce(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const Lt={},St={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Et=_("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Ct=_("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Pt=[Et,Ct];function At(e,t){return d(),p("svg",St,Pt)}var ee=$(Lt,[["render",At]]);const Rt={class:"nav-link"},Tt=b({__name:"NavLink",props:{item:null},setup(e){const n=he(e),{props:s,isExternal:o}=Se(n.item);return(r,a)=>(d(),p("div",Rt,[_("a",fe({class:"item"},c(s)),[J(P(e.item.text)+" ",1),c(o)?(d(),L(ee,{key:0})):g("v-if",!0)],16)]))}});var le=$(Tt,[["__scopeId","data-v-d6fb5c16"]]);const Nt=e=>(ve("data-v-bea8689a"),e=e(),me(),e),Bt={class:"nav-dropdown-link-item"},Ht=Nt(()=>_("span",{class:"arrow"},null,-1)),It={class:"text"},Dt={class:"icon"},Ut=b({__name:"NavDropdownLinkItem",props:{item:null},setup(e){const n=he(e),{props:s,isExternal:o}=Se(n.item);return(r,a)=>(d(),p("div",Bt,[_("a",fe({class:"item"},c(s)),[Ht,_("span",It,P(e.item.text),1),_("span",Dt,[c(o)?(d(),L(ee,{key:0})):g("v-if",!0)])],16)]))}});var Ot=$(Ut,[["__scopeId","data-v-bea8689a"]]);const Mt=["aria-label"],jt={class:"button-text"},Ft={class:"dialog"},qt=b({__name:"NavDropdownLink",props:{item:null},setup(e){const t=R(),n=M(!1);j(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,r)=>(d(),p("div",{class:D(["nav-dropdown-link",{open:n.value}])},[_("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[_("span",jt,P(e.item.text),1),_("span",{class:D(["button-arrow",n.value?"down":"right"])},null,2)],8,Mt),_("ul",Ft,[(d(!0),p(F,null,K(e.item.items,a=>(d(),p("li",{key:a.text,class:"dialog-item"},[k(Ot,{item:a},null,8,["item"])]))),128))])],2))}});var ue=$(qt,[["__scopeId","data-v-04f9718c"]]);const zt={key:0,class:"nav-links"},Wt={key:1,class:"item"},Vt={key:2,class:"item"},Gt=b({__name:"NavLinks",setup(e){const{theme:t}=E(),n=bt(),s=yt(),o=h(()=>t.value.nav||s.value||n.value);return(r,a)=>c(o)?(d(),p("nav",zt,[c(t).nav?(d(!0),p(F,{key:0},K(c(t).nav,i=>(d(),p("div",{key:i.text,class:"item"},[i.items?(d(),L(ue,{key:0,item:i},null,8,["item"])):(d(),L(le,{key:1,item:i},null,8,["item"]))]))),128)):g("v-if",!0),c(n)?(d(),p("div",Wt,[k(ue,{item:c(n)},null,8,["item"])])):g("v-if",!0),c(s)?(d(),p("div",Vt,[k(le,{item:c(s)},null,8,["item"])])):g("v-if",!0)])):g("v-if",!0)}});var Ee=$(Gt,[["__scopeId","data-v-4fb4f3a6"]]);const Jt={emits:["toggle"]},Kt=_("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[_("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Xt=[Kt];function Yt(e,t,n,s,o,r){return d(),p("div",{class:"sidebar-button",onClick:t[0]||(t[0]=a=>e.$emit("toggle"))},Xt)}var Qt=$(Jt,[["render",Yt]]);const Zt=e=>(ve("data-v-540f3ad0"),e=e(),me(),e),en={class:"nav-bar"},tn=Zt(()=>_("div",{class:"flex-grow"},null,-1)),nn={class:"nav"},sn=b({__name:"NavBar",emits:["toggle"],setup(e){return(t,n)=>(d(),p("header",en,[k(Qt,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),k(kt),tn,_("div",nn,[k(Ee)]),x(t.$slots,"search",{},void 0,!0)]))}});var on=$(sn,[["__scopeId","data-v-540f3ad0"]]);function an(){let e=null,t=null;const n=dn(s,300);function s(){const a=rn(),i=cn(a);for(let u=0;u<i.length;u++){const l=i[u],f=i[u+1],[v,y]=un(u,l,f);if(v){history.replaceState(null,document.title,y||" "),o(y);return}}}function o(a){if(r(t),r(e),t=document.querySelector(`.sidebar a[href="${a}"]`),!t)return;t.classList.add("active");const i=t.closest(".sidebar-links > ul > li");i&&i!==t.parentElement?(e=i.querySelector("a"),e&&e.classList.add("active")):e=null}function r(a){a&&a.classList.remove("active")}H(()=>{s(),window.addEventListener("scroll",n)}),Fe(()=>{o(decodeURIComponent(location.hash))}),ge(()=>{window.removeEventListener("scroll",n)})}function rn(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function cn(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function ln(){return document.querySelector(".nav-bar").offsetHeight}function de(e){const t=ln();return e.parentElement.offsetTop-t-15}function un(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<de(t)?[!1,null]:!n||s<de(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function dn(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function _n(){const e=R(),{site:t}=E();return an(),h(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return _e(n,o);const r=Z(t.value.themeConfig.sidebar,e.data.relativePath);return r===!1?[]:r==="auto"?_e(n,o):r})}function _e(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:r,slug:a})=>{if(o-1>t)return;const i={text:r,link:`#${a}`};o===2?(s=i,n.push(i)):s&&(s.children||(s.children=[])).push(i)}),n}const Ce=e=>{const t=R(),{site:n,frontmatter:s}=E(),o=e.depth||1,r=s.value.sidebarDepth||1/0,a=t.data.headers,i=e.item.text,u=pn(n.value.base,e.item.link),l=e.item.children,f=dt(t,e.item.link),v=o<r?Pe(f,l,a,o+1):null;return N("li",{class:"sidebar-link"},[N(u?"a":"p",{class:{"sidebar-link-item":!0,active:f},href:u},i),v])};function pn(e,t){return t===void 0||t.startsWith("#")?t:_t(e,t)}function Pe(e,t,n,s=1){return t&&t.length>0?N("ul",{class:"sidebar-links"},t.map(o=>N(Ce,{item:o,depth:s}))):e&&n?Pe(!1,hn(n),void 0,s):null}function hn(e){return Ae(fn(e))}function fn(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Ae(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Ae(t.children):void 0}))}const vn={key:0,class:"sidebar-links"},mn=b({__name:"SideBarLinks",setup(e){const t=_n();return(n,s)=>c(t).length>0?(d(),p("ul",vn,[(d(!0),p(F,null,K(c(t),o=>(d(),L(c(Ce),{item:o},null,8,["item"]))),256))])):g("v-if",!0)}});const gn=b({__name:"SideBar",props:{open:{type:Boolean}},setup(e){return(t,n)=>(d(),p("aside",{class:D(["sidebar",{open:e.open}])},[k(Ee,{class:"nav"}),x(t.$slots,"sidebar-top",{},void 0,!0),k(mn),x(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var kn=$(gn,[["__scopeId","data-v-23587807"]]);const bn=/bitbucket.org/;function $n(){const{page:e,theme:t,frontmatter:n}=E(),s=h(()=>{const{repo:r,docsDir:a="",docsBranch:i="master",docsRepo:u=r,editLinks:l}=t.value,f=n.value.editLink!=null?n.value.editLink:l,{relativePath:v}=e.value;return!f||!v||!r?null:yn(r,u,a,i,v)}),o=h(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function yn(e,t,n,s,o){return bn.test(e)?xn(e,t,n,s,o):wn(e,t,n,s,o)}function wn(e,t,n,s,o){return(Q(t)?t:`https://github.com/${t}`).replace(U,"")+`/edit/${s}/`+(n?n.replace(U,"")+"/":"")+o}function xn(e,t,n,s,o){return(Q(t)?t:e).replace(U,"")+`/src/${s}/`+(n?n.replace(U,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const Ln={class:"edit-link"},Sn=["href"],En=b({__name:"EditLink",setup(e){const{url:t,text:n}=$n();return(s,o)=>(d(),p("div",Ln,[c(t)?(d(),p("a",{key:0,class:"link",href:c(t),target:"_blank",rel:"noopener noreferrer"},[J(P(c(n))+" ",1),k(ee,{class:"icon"})],8,Sn)):g("v-if",!0)]))}});var Cn=$(En,[["__scopeId","data-v-2e04fa90"]]);const Pn={key:0,class:"last-updated"},An={class:"prefix"},Rn={class:"datetime"},Tn=b({__name:"LastUpdated",setup(e){const{theme:t,page:n}=E(),s=h(()=>{const a=t.value.lastUpdated;return a!==void 0&&a!==!1}),o=h(()=>{const a=t.value.lastUpdated;return a===!0?"Last Updated":a}),r=M("");return H(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(a,i)=>c(s)?(d(),p("p",Pn,[_("span",An,P(c(o))+":",1),_("span",Rn,P(r.value),1)])):g("v-if",!0)}});var Nn=$(Tn,[["__scopeId","data-v-7ad9e8dc"]]);const Bn={class:"page-footer"},Hn={class:"edit"},In={class:"updated"},Dn=b({__name:"PageFooter",setup(e){return(t,n)=>(d(),p("footer",Bn,[_("div",Hn,[k(Cn)]),_("div",In,[k(Nn)])]))}});var Un=$(Dn,[["__scopeId","data-v-34bcd858"]]);function On(){const{page:e,theme:t}=E(),n=h(()=>xe(G(e.value.relativePath))),s=h(()=>{const u=Z(t.value.sidebar,n.value);return Y(u)?Le(u):[]}),o=h(()=>s.value.findIndex(u=>u.link===n.value)),r=h(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),a=h(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),i=h(()=>!!r.value||!!a.value);return{next:r,prev:a,hasLinks:i}}const Mn={},jn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Fn=_("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),qn=[Fn];function zn(e,t){return d(),p("svg",jn,qn)}var Wn=$(Mn,[["render",zn]]);const Vn={},Gn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Jn=_("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Kn=[Jn];function Xn(e,t){return d(),p("svg",Gn,Kn)}var Yn=$(Vn,[["render",Xn]]);const Qn={key:0,class:"next-and-prev-link"},Zn={class:"container"},es={class:"prev"},ts=["href"],ns={class:"text"},ss={class:"next"},os=["href"],as={class:"text"},rs=b({__name:"NextAndPrevLinks",setup(e){const{hasLinks:t,prev:n,next:s}=On();return(o,r)=>c(t)?(d(),p("div",Qn,[_("div",Zn,[_("div",es,[c(n)?(d(),p("a",{key:0,class:"link",href:c(B)(c(n).link)},[k(Wn,{class:"icon icon-prev"}),_("span",ns,P(c(n).text),1)],8,ts)):g("v-if",!0)]),_("div",ss,[c(s)?(d(),p("a",{key:0,class:"link",href:c(B)(c(s).link)},[_("span",as,P(c(s).text),1),k(Yn,{class:"icon icon-next"})],8,os)):g("v-if",!0)])])])):g("v-if",!0)}});var is=$(rs,[["__scopeId","data-v-097a4584"]]);const cs={class:"page"},ls={class:"container"},us=b({__name:"Page",setup(e){return(t,n)=>{const s=V("Content");return d(),p("main",cs,[_("div",ls,[x(t.$slots,"top",{},void 0,!0),k(s,{class:"content"}),k(Un),k(is),x(t.$slots,"bottom",{},void 0,!0)])])}}});var ds=$(us,[["__scopeId","data-v-76c159bf"]]);const _s={key:0,id:"ads-container"},ps=b({__name:"Layout",setup(e){const t=qe(()=>ke(()=>import("./Home.a0c93f18.js"),["assets/Home.a0c93f18.js","assets/plugin-vue_export-helper.1cbc6bb8.js"])),n=()=>null,s=n,o=n,r=n,a=R(),{site:i,page:u,theme:l,frontmatter:f}=E(),v=h(()=>!!f.value.customLayout),y=h(()=>!!f.value.home),w=h(()=>Object.keys(i.value.langs).length>1),C=h(()=>{const m=l.value;return f.value.navbar===!1||m.navbar===!1?!1:i.value.title||m.logo||m.repo||m.nav}),T=M(!1),Te=h(()=>f.value.home||f.value.sidebar===!1?!1:!ft(Z(l.value.sidebar,a.data.relativePath))),q=m=>{T.value=typeof m=="boolean"?m:!T.value},Ne=q.bind(null,!1);j(a,Ne);const Be=h(()=>[{"no-navbar":!C.value,"sidebar-open":T.value,"no-sidebar":!Te.value}]);return(m,te)=>{const He=V("Content"),Ie=V("Debug");return d(),p(F,null,[_("div",{class:D(["theme",c(Be)])},[c(C)?(d(),L(on,{key:0,onToggle:q},{search:A(()=>[x(m.$slots,"navbar-search",{},()=>[c(l).algolia?(d(),L(c(r),{options:c(l).algolia,multilang:c(w),key:c(i).lang},null,8,["options","multilang"])):g("v-if",!0)])]),_:3})):g("v-if",!0),k(kn,{open:T.value},{"sidebar-top":A(()=>[x(m.$slots,"sidebar-top")]),"sidebar-bottom":A(()=>[x(m.$slots,"sidebar-bottom")]),_:3},8,["open"]),g(" TODO: make this button accessible "),_("div",{class:"sidebar-mask",onClick:te[0]||(te[0]=Cs=>q(!1))}),c(v)?(d(),L(He,{key:1})):c(y)?(d(),L(c(t),{key:2},{hero:A(()=>[x(m.$slots,"home-hero")]),features:A(()=>[x(m.$slots,"home-features")]),footer:A(()=>[x(m.$slots,"home-footer")]),_:3})):(d(),L(ds,{key:3},{top:A(()=>[x(m.$slots,"page-top-ads",{},()=>[c(l).carbonAds&&c(l).carbonAds.carbon?(d(),p("div",_s,[(d(),L(c(s),{key:"carbon"+c(u).relativePath,code:c(l).carbonAds.carbon,placement:c(l).carbonAds.placement},null,8,["code","placement"]))])):g("v-if",!0)]),x(m.$slots,"page-top")]),bottom:A(()=>[x(m.$slots,"page-bottom"),x(m.$slots,"page-bottom-ads",{},()=>[c(l).carbonAds&&c(l).carbonAds.custom?(d(),L(c(o),{key:"custom"+c(u).relativePath,code:c(l).carbonAds.custom,placement:c(l).carbonAds.placement},null,8,["code","placement"])):g("v-if",!0)])]),_:3}))],2),k(Ie)],64)}}}),hs={class:"theme"},fs=_("h1",null,"404",-1),vs=["href"],ms=b({__name:"NotFound",setup(e){const{site:t}=E(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,r)=>(d(),p("div",hs,[fs,_("blockquote",null,P(s()),1),_("a",{href:c(t).base,"aria-label":"go to home"},"Take me home.",8,vs)]))}}),O={Layout:ps,NotFound:ms},W=new Set,Re=()=>document.createElement("link"),gs=e=>{const t=Re();t.rel="prefetch",t.href=e,document.head.appendChild(t)},ks=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let I;const bs=S&&(I=Re())&&I.relList&&I.relList.supports&&I.relList.supports("prefetch")?gs:ks;function $s(){if(!S||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(a=>{if(a.isIntersecting){const i=a.target;n.unobserve(i);const{pathname:u}=i;if(!W.has(u)){W.add(u);const l=ye(u);bs(l)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:a,hostname:i,pathname:u}=r,l=u.match(/\.\w+$/);l&&l[0]!==".html"||a!=="_blank"&&i===location.hostname&&(u!==location.pathname?n.observe(r):W.add(u))})})};H(s);const o=R();j(()=>o.path,s),ge(()=>{n&&n.disconnect()})}const ys=b({setup(e,{slots:t}){const n=M(!1);return H(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),ws=O.NotFound||(()=>"404 Not Found"),xs={name:"VitePressApp",setup(){const{site:e}=E();return H(()=>{j(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),$s(),()=>N(O.Layout)}};function Ls(){const e=Es(),t=Ss();t.provide(we,e);const n=Ze(e.route);return t.provide($e,n),S&&ot(e.route,n.site),t.component("Content",it),t.component("ClientOnly",ys),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),O.enhanceApp&&O.enhanceApp({app:t,router:e,siteData:X}),{app:t,router:e}}function Ss(){return ze(xs)}function Es(){let e=S,t;return nt(n=>{let s=ye(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),S?(e=!1,ke(()=>import(s),[])):require(s)},ws)}if(S){const{app:e,router:t}=Ls();t.go().then(()=>{e.mount("#app")})}export{le as N,Ls as createApp,E as u,B as w};
