import{_ as n,c as s,o as a,a as p}from"./app.dd59ba8d.js";const m='{"title":"API","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"}],"relativePath":"utils/index.md"}',e={},t=p(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CommonUtils <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hl-front-utils&#39;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token function">handleFileBuffer</span><span class="token punctuation">(</span>response<span class="token operator">:</span> <span class="token punctuation">{</span> headers<span class="token operator">:</span> Indexable<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> defaultFileName <span class="token operator">=</span> <span class="token string">&#39;file.dat&#39;</span><span class="token punctuation">)</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token function">handleDownloadFile</span><span class="token punctuation">(</span>fileName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> url<span class="token operator">:</span> stirng<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token function">downloadFile</span><span class="token punctuation">(</span>fileName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> url<span class="token operator">:</span> stirng<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token function">flattenTree</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> keys<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> level <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> pid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> childrenKey <span class="token operator">=</span> <span class="token string">&#39;child&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token function">findTreeNode</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> children<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token string">&#39;children&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token function">splitPromises</span><span class="token punctuation">(</span>promises<span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> groupNum<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token function">echartsFontSize</span><span class="token punctuation">(</span>res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> basisHeight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token function">toQuery</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token function">seqID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-ts line-numbers-mode"><pre><code><span class="token comment">// \u65E5\u671F\u63A7\u4EF6\uFF0C\u5927\u4E8E\u5F53\u524D\u65E5\u671F\u4E0D\u80FD\u9009\u62E9</span>
<span class="token function">disableFutureDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,13),o=[t];function c(l,i,r,u,k,d){return a(),s("div",null,o)}var v=n(e,[["render",c]]);export{m as __pageData,v as default};