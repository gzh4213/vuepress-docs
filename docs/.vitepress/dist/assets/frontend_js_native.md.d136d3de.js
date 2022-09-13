import{_ as l,c as e,o as a,a as i}from"./app.19d754c3.js";const _=JSON.parse('{"title":"\u57FA\u7840\u77E5\u8BC6\u70B9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B","link":"#\u6570\u636E\u7C7B\u578B","children":[{"level":3,"title":"\u57FA\u672C\u6570\u636E\u7C7B\u578B","slug":"\u57FA\u672C\u6570\u636E\u7C7B\u578B","link":"#\u57FA\u672C\u6570\u636E\u7C7B\u578B","children":[]},{"level":3,"title":"\u5F15\u7528\u7C7B\u578B","slug":"\u5F15\u7528\u7C7B\u578B","link":"#\u5F15\u7528\u7C7B\u578B","children":[]}]},{"level":2,"title":"\u6807\u51C6\u5185\u7F6E\u5BF9\u8C61","slug":"\u6807\u51C6\u5185\u7F6E\u5BF9\u8C61","link":"#\u6807\u51C6\u5185\u7F6E\u5BF9\u8C61","children":[{"level":3,"title":"\u539F\u59CB\u503C","slug":"\u539F\u59CB\u503C","link":"#\u539F\u59CB\u503C","children":[]},{"level":3,"title":"\u5F15\u7528\u503C","slug":"\u5F15\u7528\u503C","link":"#\u5F15\u7528\u503C","children":[]},{"level":3,"title":"\u5305\u88C5\u5BF9\u8C61","slug":"\u5305\u88C5\u5BF9\u8C61","link":"#\u5305\u88C5\u5BF9\u8C61","children":[]},{"level":3,"title":"\u6784\u9020\u51FD\u6570","slug":"\u6784\u9020\u51FD\u6570","link":"#\u6784\u9020\u51FD\u6570","children":[]}]},{"level":2,"title":"\u5168\u5C40\u5BF9\u8C61","slug":"\u5168\u5C40\u5BF9\u8C61","link":"#\u5168\u5C40\u5BF9\u8C61","children":[]},{"level":2,"title":"\u5BBF\u4E3B\u5BF9\u8C61","slug":"\u5BBF\u4E3B\u5BF9\u8C61","link":"#\u5BBF\u4E3B\u5BF9\u8C61","children":[]},{"level":2,"title":"\u95ED\u5305","slug":"\u95ED\u5305","link":"#\u95ED\u5305","children":[]}],"relativePath":"frontend/js/native.md","lastUpdated":null}'),n={name:"frontend/js/native.md"},s=i(`<h1 id="\u57FA\u7840\u77E5\u8BC6\u70B9" tabindex="-1">\u57FA\u7840\u77E5\u8BC6\u70B9 <a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6\u70B9" aria-hidden="true">#</a></h1><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><h3 id="\u57FA\u672C\u6570\u636E\u7C7B\u578B" tabindex="-1">\u57FA\u672C\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u57FA\u672C\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h3><ul><li>undefined</li><li>null</li><li>number</li><li>string</li><li>boolean</li><li>Symbol \u8868\u793A\u72EC\u4E00\u65E0\u4E8C\u7684\u503C\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u7684\u51FA\u73B0\u5E94\u8BE5\u662F\u4E3A\u4E86\u89E3\u51B3\u53EF\u80FD\u51FA\u73B0\u7684\u5168\u5C40\u53D8\u91CF\u51B2\u7A81\u7684\u95EE\u9898</li><li>BigInt \u8868\u793A\u4EFB\u610F\u7CBE\u5EA6\u683C\u5F0F\u7684\u6574\u6570\uFF0C\u4F7F\u7528BigInt\u53EF\u4EE5\u5B89\u5168\u7684\u5B58\u50A8\u548C\u64CD\u4F5C\u5927\u6574\u6570\uFF0C\u5373\u4F7F\u8FD9\u4E2A\u6570\u5DF2\u7ECF\u8D85\u51FA\u4E86Number\u80FD\u591F\u8868\u793A\u7684\u5B89\u5168\u8BC1\u4E66\u8303\u56F4</li></ul><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u83B7\u53D6Symbol\u58F0\u660E\u7684\u5C5E\u6027\u540D</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOwnPropertySymbols</span><span style="color:#A6ACCD;">(obj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Reflect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ownKeys</span><span style="color:#A6ACCD;">(obj)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p>Set \u65E0\u91CD\u590D\u503C\u7684\u6709\u5E8F\u5217\u8868</p></li><li><p>Map \u952E\u503C\u5BF9\u7684\u6709\u5E8F\u5217\u8868</p></li></ul><h3 id="\u5F15\u7528\u7C7B\u578B" tabindex="-1">\u5F15\u7528\u7C7B\u578B <a class="header-anchor" href="#\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a></h3><ul><li>array</li><li>object</li></ul><h2 id="\u6807\u51C6\u5185\u7F6E\u5BF9\u8C61" tabindex="-1">\u6807\u51C6\u5185\u7F6E\u5BF9\u8C61 <a class="header-anchor" href="#\u6807\u51C6\u5185\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a></h2><h3 id="\u539F\u59CB\u503C" tabindex="-1">\u539F\u59CB\u503C <a class="header-anchor" href="#\u539F\u59CB\u503C" aria-hidden="true">#</a></h3><ul><li>undefined</li><li>null</li><li>number</li><li>string</li><li>boolean</li></ul><h3 id="\u5F15\u7528\u503C" tabindex="-1">\u5F15\u7528\u503C <a class="header-anchor" href="#\u5F15\u7528\u503C" aria-hidden="true">#</a></h3><ul><li>object</li></ul><h3 id="\u5305\u88C5\u5BF9\u8C61" tabindex="-1">\u5305\u88C5\u5BF9\u8C61 <a class="header-anchor" href="#\u5305\u88C5\u5BF9\u8C61" aria-hidden="true">#</a></h3><ul><li>Number</li><li>String</li><li>Boolean</li></ul><h3 id="\u6784\u9020\u51FD\u6570" tabindex="-1">\u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a></h3><ul><li>Object</li><li>Function</li><li>Date</li><li>Error</li><li>RegExp</li><li>Array</li><li>Math</li><li>JSON</li><li>Arguments</li></ul><h2 id="\u5168\u5C40\u5BF9\u8C61" tabindex="-1">\u5168\u5C40\u5BF9\u8C61 <a class="header-anchor" href="#\u5168\u5C40\u5BF9\u8C61" aria-hidden="true">#</a></h2><h2 id="\u5BBF\u4E3B\u5BF9\u8C61" tabindex="-1">\u5BBF\u4E3B\u5BF9\u8C61 <a class="header-anchor" href="#\u5BBF\u4E3B\u5BF9\u8C61" aria-hidden="true">#</a></h2><ul><li>window</li><li>history</li><li>navigetor</li><li>document</li></ul><h2 id="\u95ED\u5305" tabindex="-1">\u95ED\u5305 <a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a></h2><p>\u51FD\u6570\u7684\u6267\u884C\uFF0C\u5BFC\u81F4\u51FD\u6570\u88AB\u5B9A\u4E49</p><p>\u95ED\u5305\u662F\u6307\u6709\u6743\u8BBF\u95EE\u53E6\u4E00\u4E2A \u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u53D8\u91CF\u7684\u51FD\u6570</p>`,23),r=[s];function t(d,o,c,h,p,u){return a(),e("div",null,r)}const m=l(n,[["render",t]]);export{_ as __pageData,m as default};