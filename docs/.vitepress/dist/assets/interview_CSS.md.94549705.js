import{_ as e,c as i,o as l,a}from"./app.19d754c3.js";const u=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76D2\u6A21\u578B","slug":"\u76D2\u6A21\u578B","link":"#\u76D2\u6A21\u578B","children":[]},{"level":2,"title":"\u9009\u62E9\u5668","slug":"\u9009\u62E9\u5668","link":"#\u9009\u62E9\u5668","children":[]},{"level":2,"title":"\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u7684\u533A\u522B","slug":"\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u7684\u533A\u522B","link":"#\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u7684\u533A\u522B","children":[]},{"level":2,"title":"BFC","slug":"bfc","link":"#bfc","children":[]},{"level":2,"title":"\u6D6E\u52A8","slug":"\u6D6E\u52A8","link":"#\u6D6E\u52A8","children":[]}],"relativePath":"interview/CSS.md","lastUpdated":null}'),t={name:"interview/CSS.md"},n=a('<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h1><h2 id="\u76D2\u6A21\u578B" tabindex="-1">\u76D2\u6A21\u578B <a class="header-anchor" href="#\u76D2\u6A21\u578B" aria-hidden="true">#</a></h2><p>\u76D2\u6A21\u578B\u7531\u56DB\u4E2A\u90E8\u5206\u7EC4\u6210\uFF0C\u5206\u522B\u662Fmargin,border,padding,content</p><p>\u6807\u51C6\u76D2\u6A21\u578B\u7684width\u548Cheight\u5C5E\u6027\u7684\u8303\u56F4\u53EA\u5305\u542B\u4E86content</p><p>IE\u76D2\u6A21\u578B\u7684width\u548Cheight\u7684\u5C5E\u6027\u7684\u8303\u56F4\u5305\u542B\u4E86border\uFF0Cpadding\u548Ccontent</p><h2 id="\u9009\u62E9\u5668" tabindex="-1">\u9009\u62E9\u5668 <a class="header-anchor" href="#\u9009\u62E9\u5668" aria-hidden="true">#</a></h2><ul><li>id\u9009\u62E9\u5668\uFF08#myid)</li><li>\u7C7B\u9009\u62E9\u5668\uFF08.myclassname)</li><li>\u6807\u7B7E\u9009\u62E9\u5668\uFF08div,h1,p\uFF09</li><li>\u540E\u4EE3\u9009\u62E9\u5668\uFF08h1 p\uFF09</li><li>\u76F8\u90BB\u540E\u4EE3\u9009\u62E9\u5668\uFF08\u5B50\uFF09\u9009\u62E9\u5668\uFF08ul&gt;li)</li><li>\u5144\u5F1F\u9009\u62E9\u5668\uFF08li\uFF5Ea\uFF09</li><li>\u76F8\u90BB\u5144\u5F1F\u9009\u62E9\u5668\uFF08li+a\uFF09</li><li>\u5C5E\u6027\u9009\u62E9\u5668\uFF08a[rel=&#39;external&#39;]\uFF09</li><li>\u4F2A\u7C7B\u9009\u62E9\u5668\uFF08a:hover, li:nth-child)</li><li>\u4F2A\u5143\u7D20\u9009\u62E9\u5668\uFF08::before, ::after)</li><li>\u901A\u914D\u7B26\u9009\u62E9\u5668\uFF08*\uFF09</li></ul><h2 id="\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u7684\u533A\u522B" tabindex="-1">\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u7684\u533A\u522B <a class="header-anchor" href="#\u4F2A\u7C7B\u548C\u4F2A\u5143\u7D20\u7684\u533A\u522B" aria-hidden="true">#</a></h2><p>\u4F2A\u7C7B\u7528\u4E8E\u5F53\u5DF2\u6709\u7684\u5143\u7D20\u5904\u4E8E\u67D0\u4E2A\u72B6\u6001\u65F6\uFF0C\u4E3A\u5176\u6DFB\u52A0\u5BF9\u5E94\u7684\u6837\u5F0F \u4F2A\u5143\u7D20\u7528\u4E8E\u521B\u5EFA\u4E00\u4E9B\u4E0D\u5728\u6587\u6863\u6811\u4E2D\u7684\u5143\u7D20\uFF0C\u5E76\u4E3A\u5176\u6DFB\u52A0\u6837\u5F0F</p><h2 id="bfc" tabindex="-1">BFC <a class="header-anchor" href="#bfc" aria-hidden="true">#</a></h2><p>\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF08Block Fromatting Context,BFC\uFF09\uFF0C\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5E03\u5C40\u73AF\u5883\uFF0C\u5185\u90E8\u548C\u5916\u90E8\u4E92\u4E0D\u5F71\u54CD</p><p>\u521B\u5EFABFC</p><ul><li>\u6839\u5143\u7D20\u6216\u5305\u542B\u6839\u5143\u7D20\u7684\u5143\u7D20</li><li>\u6D6E\u52A8\u5143\u7D20float=left|right\u6216inherit(!= none)</li><li>\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20position=absolute\u6216fixed</li><li>display=inline-block|flex|inline-flex|table-cell|tabel-caption</li><li>overflow=hidden|auto|scroll(!=visible)</li></ul><h2 id="\u6D6E\u52A8" tabindex="-1">\u6D6E\u52A8 <a class="header-anchor" href="#\u6D6E\u52A8" aria-hidden="true">#</a></h2>',14),r=[n];function d(h,c,s,o,p,_){return l(),i("div",null,r)}const b=e(t,[["render",d]]);export{u as __pageData,b as default};
