import{Q as a,_ as n,y as e,W as l,a5 as t,br as p}from"./vue.e91292bd.js";import{_ as r}from"./index.68966418.js";import"./hongluan.7a8bc835.js";import"./highlight.a6f0727a.js";import"./hongluan-icons.70c7a857.js";const c={},i=p(`<section><h1>Hooks</h1><h2 id="usemaxscreen"><a class="header-anchor" href="#usemaxscreen"></a> useMaxScreen</h2><p>\u5C4F\u5E55\u6700\u5927/\u6700\u5C0F\u5316</p><pre><code class="hljs language-ts">useMaxScreen(): {
  <span class="hljs-attr">isMaxScreen</span>: Ref&lt;<span class="hljs-built_in">boolean</span>&gt;
  changeFullScreen: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>
}
</code></pre><h2 id="userenderchart"><a class="header-anchor" href="#userenderchart"></a> useRenderChart</h2><p>\u81EA\u52A8\u5237\u65B0\u56FE\u8868\u6570\u636E</p><pre><code class="hljs language-ts">useRenderChart(
  cb: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>, <span class="hljs-comment">// \u56DE\u8C03\u51FD\u6570</span>
  <span class="hljs-attr">data</span>: Ref&lt;unknown&gt; | Indexable&lt;<span class="hljs-built_in">any</span>&gt;, <span class="hljs-comment">// watch\u7684\u6570\u636E\uFF0CRef\u6216\u8005Reactive</span>
  field = <span class="hljs-string">&#39;chartData&#39;</span> <span class="hljs-comment">// \u5982\u679Cdata\u4E3AReactive\uFF0C\u9700\u8981\u4F20\u5165\u6B64\u503C\uFF0C\u8868\u793Awatch\u54EA\u4E2A\u5B57\u6BB5</span>
): <span class="hljs-built_in">void</span>
</code></pre><h2 id="useresponsivechart"><a class="header-anchor" href="#useresponsivechart"></a> useResponsiveChart</h2><p>\u628Aechart\u76F8\u5173\u5B57\u6BB5\u6570\u503C\u6309\u7167\u5C4F\u5E55\u5927\u5C0F\u8FDB\u884C\u50CF\u7D20\u8F6C\u6362\u3002\u4F7F\u7528\u6B64\u7EC4\u4EF6\u5E93\u65F6\uFF0C\u9700\u8981\u914D\u7F6EInstallOptions\u91CC\u9762\u7684visudalizd.basisPX</p><pre><code class="hljs language-ts">useResponsiveChart(): {
  <span class="hljs-attr">updateOptionToResponsive</span>: <span class="hljs-function">(<span class="hljs-params">option: <span class="hljs-built_in">any</span>, keyArr: <span class="hljs-built_in">string</span>[] = defaultAttributes</span>) =&gt;</span> <span class="hljs-built_in">void</span>
  <span class="hljs-attr">defaultAttributes</span>: <span class="hljs-built_in">string</span>[] <span class="hljs-comment">// \u9ED8\u8BA4\u8F6C\u6362echart option\u4E2D\u7684\u5B57\u6BB5</span>
}
</code></pre><pre><code class="hljs language-ts"><span class="hljs-keyword">const</span> defaultAttributes = [<span class="hljs-string">&#39;lineHeight&#39;</span>,<span class="hljs-string">&#39;margin&#39;</span>,<span class="hljs-string">&#39;fontSize&#39;</span>,<span class="hljs-string">&#39;left&#39;</span>,<span class="hljs-string">&#39;right&#39;</span>,<span class="hljs-string">&#39;top&#39;</span>,<span class="hljs-string">&#39;bottom&#39;</span>,<span class="hljs-string">&#39;padding&#39;</span>,<span class="hljs-string">&#39;itemWidth&#39;</span>,<span class="hljs-string">&#39;itemHeight&#39;</span>,
<span class="hljs-string">&#39;itemGap&#39;</span>,<span class="hljs-string">&#39;symbolSize&#39;</span>,<span class="hljs-string">&#39;width&#39;</span>,<span class="hljs-string">&#39;height&#39;</span>,<span class="hljs-string">&#39;barMaxWidth&#39;</span>]
</code></pre><h2 id="usetexttimer"><a class="header-anchor" href="#usetexttimer"></a> useTextTimer</h2><p>\u81EA\u52A8\u5237\u65B0\u7684\u5F53\u524D\u65F6\u95F4\u5B57\u7B26\u4E32</p><pre><code class="hljs language-ts">useTextTimer(): {
  <span class="hljs-attr">dates</span>: Ref&lt;<span class="hljs-built_in">string</span>&gt; <span class="hljs-comment">// 2009\u5E7409\u670808\u65E5</span>
  day: Ref&lt;<span class="hljs-built_in">string</span>&gt; <span class="hljs-comment">// \u661F\u671F\u4E00</span>
  times: Ref&lt;<span class="hljs-built_in">string</span>&gt; <span class="hljs-comment">// 23:34:23</span>
  fullDatetime: ComputedRef&lt;<span class="hljs-built_in">string</span>&gt; <span class="hljs-comment">// 2009\u5E7409\u670808\u65E5 23:34:23 \u661F\u671F\u4E00</span>
}
</code></pre><h2 id="usepageconfig"><a class="header-anchor" href="#usepageconfig"></a> usePageConfig</h2><p>\u9875\u9762\u4E00\u4E9B\u5E38\u7528\u914D\u7F6E</p><pre><code class="hljs language-ts">useTele(): {
  <span class="hljs-attr">showTeleport</span>: Ref&lt;<span class="hljs-literal">false</span>&gt; <span class="hljs-comment">// \u9ED8\u8BA4\u4E3Afalse\uFF0C\u9875\u9762\u52A0\u8F7D\u5B8C\u8BBE\u4E3Atrue</span>
}
</code></pre><h2 id="useiframe"><a class="header-anchor" href="#useiframe"></a> useIframe</h2><p>\u5224\u65AD\u9875\u9762\u662F\u5426\u5D4C\u5165\u5230\u4E86iframe\u4E2D</p><pre><code class="hljs language-ts">useIframe(): {
  <span class="hljs-attr">isIframe</span>: Ref&lt;<span class="hljs-built_in">boolean</span>&gt; <span class="hljs-comment">// \u9ED8\u8BA4\u4E3Afalse\uFF0C\u9875\u9762\u52A0\u8F7D\u5B8C\u8BBE\u4E3Atrue</span>
}
</code></pre><h2 id="usepreviewer"><a class="header-anchor" href="#usepreviewer"></a> usePreviewer</h2><p>\u9884\u89C8\u56FE\u7247\u6216\u8005\u89C6\u9891</p><pre><code class="hljs language-ts">usePreviewer(): {
  <span class="hljs-attr">openPreviewer</span>: (item: PreviewItem, limitNum?: <span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span>, initVideoWidth = <span class="hljs-string">&#39;500px&#39;</span>) <span class="hljs-comment">//</span>
}
</code></pre><pre><code class="hljs language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> PreviewItem {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">url</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">sourceType</span>: <span class="hljs-number">1</span> | <span class="hljs-number">2</span> <span class="hljs-comment">// 1: img, 2: video,</span>
}
</code></pre></section>`,1);function h(o,u){const s=a("right-nav");return n(),e(t,null,[i,l(s)],64)}var _=r(c,[["render",h]]);export{_ as default};
