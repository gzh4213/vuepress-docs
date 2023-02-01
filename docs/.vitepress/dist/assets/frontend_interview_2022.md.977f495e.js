import{_ as s,c as n,o as a,a as l}from"./app.248772be.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/interview/2022.md"}'),e={name:"frontend/interview/2022.md"},t=l(`<ul><li><p>flex拆分写法 flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。 flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。 flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p></li><li><p>css 选择器 伪类伪元素， 区别是什么， 为什么一个叫伪类一个叫伪元素，都有哪些， 哪个是一个冒号哪个是两个冒号 伪类是选择器的一种，它用于选择处于特定状态的元素，比如当它们是这一类型的第一个元素时，或者是当鼠标指针悬浮在元素上面的时候。它们表现得会像是你向你的文档的某个部分应用了一个类一样，帮你在你的标记文本中减少多余的类，让你的代码更灵活、更易于维护。 :active、:blank、:checked、:disabled、:enabled、:first-child、:first-of-type、:focus、:hover、:is() 、:not 、:target、:visited等都是伪类 伪元素以类似方式表现，不过表现得是像你往标记文本中加入全新的HTML元素一样，而不是向现有的元素上应用类。伪元素开头为双冒号::。 ::after、::before、::first-letter、::first-line</p></li><li><p>bfc 块格式化上下文（Block Formatting Context，BFC） 是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。</p><ul><li>形成bfc的条件： <ul><li>浮动元素：float除none以外的值</li><li>绝对定位元素，position（absolute、fixed）</li><li>display为以下其中之一的值inline-block、table-cell、table-caption、flex</li><li>overflow除了visible以外的值（hidden、scroll、auto）</li><li>html根元素</li></ul></li><li>bfc的特性 <ul><li>内部的box会在垂直方向上一个一个的放置</li><li>垂直方向的距离由margin决定</li><li>bfc的区域不会与float的元素区域重叠</li><li>计算bfc高度时，浮动元素也参与计算</li><li>bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素</li></ul></li><li>BFC的应用 1、自适应两栏布局 2、清除内部浮动 3、防止margin上下重叠</li><li>普通文档流布局规则 1.浮动的元素是不会被父级计算高度 2.非浮动元素会覆盖浮动元素的位置 3.margin会传递给父级 4.两个相邻元素上下margin会重叠</li><li>BFC布局规则 1.浮动的元素会被父级计算高度（父级触发了BFC） 2.非浮动元素不会覆盖浮动元素位置（非浮动元素触发了BFC） 3.margin不会传递给父级（父级触发了BFC） 4.两个相邻元素上下margin会重叠（给其中一个元素增加一个父级，然后让他的父级触发BFC）</li></ul></li><li><p>实现一个LazyMan，可以按照以下方式调用: LazyMan(&quot;Hank&quot;)输出: Hi! This is Hank!</p></li></ul><p>LazyMan(&quot;Hank&quot;).sleep(10).eat(&quot;dinner&quot;)输出 Hi! This is Hank! //等待10秒.. Wake up after 10 Eat dinner~</p><p>LazyMan(&quot;Hank&quot;).eat(&quot;dinner&quot;).eat(&quot;supper&quot;)输出 Hi This is Hank! Eat dinner~ Eat supper~</p><p>LazyMan(&quot;Hank&quot;).sleepFirst(5).eat(&quot;supper&quot;)输出 //等待5秒 Wake up after 5 Hi This is Hank! Eat supper</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class _LazyMan {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	  this.tasks = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">	  const task = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(\`Hi! This is \${name}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">	  }</span></span>
<span class="line"><span style="color:#A6ACCD;">	  this.tasks.push(task);</span></span>
<span class="line"><span style="color:#A6ACCD;">	  setTimeout(() =&gt; {               // 把 this.next() 放到调用栈清空之后执行</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">	  }, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">	next() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	  const task = this.tasks.shift(); // 取第一个任务执行</span></span>
<span class="line"><span style="color:#A6ACCD;">	  task &amp;&amp; task();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">	sleep(time) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	  this._sleepWrapper(time, false);</span></span>
<span class="line"><span style="color:#A6ACCD;">	  return this;                     // 链式调用</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">	sleepFirst(time) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	  this._sleepWrapper(time, true);</span></span>
<span class="line"><span style="color:#A6ACCD;">	  return this;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">	_sleepWrapper(time, first) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	  const task = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		  console.log(\`Wake up after \${time}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">		  this.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">		}, time * 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">	  }</span></span>
<span class="line"><span style="color:#A6ACCD;">	  if (first) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.tasks.unshift(task);     // 放到任务队列顶部</span></span>
<span class="line"><span style="color:#A6ACCD;">	  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.tasks.push(task);        // 放到任务队列尾部</span></span>
<span class="line"><span style="color:#A6ACCD;">	  }</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">	eat(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	  const task = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(\`Eat \${name}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">	  }</span></span>
<span class="line"><span style="color:#A6ACCD;">	  this.tasks.push(task);</span></span>
<span class="line"><span style="color:#A6ACCD;">	  return this;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  function LazyMan(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	return new _LazyMan(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>函数式组件的特点，以及应用场景 不需要实例化、无状态、无生命周期、无this，但是性能高 比如一些详情页面，列表界面等，它们有一个共同的特点是只需要将外部传入的数据进行展现，不需要有内部状态，不需要在生命周期钩子函数里面做处理，这时候你就可以考虑使用函数式组件。</p></li><li><p>时间切片 如果任务不能在50毫秒内执行完，那么为了不阻塞主线程，将一个长任务拆分成很多个不超过50ms的小任务分散在宏任务队列中执行。 分页+requestAnimation+DocumentFragment</p></li><li><p>for in 与for of 的区别 for...in ES5标准，循环只遍历可枚举属性（包括它的原型链上的可枚举属性） for...of ES6标准，只可以循环可迭代对象的可迭代属性 如（Array，Map，Set，String，TypedArray，arguments 对象等等）</p></li><li><p>原生实现JSON.stringify()</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function JSON2String(obj){</span></span>
<span class="line"><span style="color:#A6ACCD;">	var arr = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">	let type = typeof obj;</span></span>
<span class="line"><span style="color:#A6ACCD;">	if(Array.isArray(obj)){</span></span>
<span class="line"><span style="color:#A6ACCD;">		obj.forEach(item=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">			let childType = typeof item;</span></span>
<span class="line"><span style="color:#A6ACCD;">			if(childType===&#39;function&#39; || childType===&#39;undefined&#39; || childType===&#39;symbol&#39; || (childType==&#39;number&#39; &amp;&amp; ( !isFinite(item) || Number.isNaN(item) ) ) ){</span></span>
<span class="line"><span style="color:#A6ACCD;">				arr.push(&#39;null&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">			}else{</span></span>
<span class="line"><span style="color:#A6ACCD;">				arr.push( JSON2String(item) );</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		})</span></span>
<span class="line"><span style="color:#A6ACCD;">		return \`[\${arr}]\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}else if(type===&#39;object&#39; &amp;&amp; obj !==null){</span></span>
<span class="line"><span style="color:#A6ACCD;">		Object.keys(obj).forEach(key=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">			let val = obj[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">			let childType = typeof val;</span></span>
<span class="line"><span style="color:#A6ACCD;">			if(childType!==&#39;object&#39; &amp;&amp;( !isFinite(val) || Number.isNaN(val) ) ){</span></span>
<span class="line"><span style="color:#A6ACCD;">				arr.push(\`&quot;\${key}&quot;:null\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">			}else if(childType!==&#39;function&#39; &amp;&amp; childType!==&#39;undefined&#39; &amp;&amp; childType!==&#39;symbol&#39; ){</span></span>
<span class="line"><span style="color:#A6ACCD;">				let child = JSON2String(val);</span></span>
<span class="line"><span style="color:#A6ACCD;">				arr.push(\`&quot;\${key}&quot;:\${child}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">			} </span></span>
<span class="line"><span style="color:#A6ACCD;">		})</span></span>
<span class="line"><span style="color:#A6ACCD;">		return \`{\${ arr.join(&#39;,&#39;) }}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">	}else if(type===&#39;string&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">		return \`&quot;\${obj}&quot;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">	}else{</span></span>
<span class="line"><span style="color:#A6ACCD;">		return obj.toString()</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var obj={</span></span>
<span class="line"><span style="color:#A6ACCD;">	arr:[1,undefined,function(){}],</span></span>
<span class="line"><span style="color:#A6ACCD;">	bol:true,</span></span>
<span class="line"><span style="color:#A6ACCD;">	obj:{a:1,b:2,c:NaN}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>字节面试</li></ul><ul><li>common和ESModule区别</li><li>csrf及如何防范 CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。</li></ul><ul><li><p>CSRF的特点</p><ul><li>攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。</li><li>攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据。</li><li>整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。</li><li>跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。</li></ul></li><li><p>防护策略 CSRF通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对CSRF的防护能力来提升安全性。 上文中讲了CSRF的两个特点： CSRF（通常）发生在第三方域名。 CSRF攻击者不能获取到Cookie等信息，只是使用。 针对这两点，我们可以专门制定防护策略，如下：</p><ul><li>阻止不明外域的访问 同源检测:Origin Header、Referer Header Samesite Cookie</li><li>提交时要求附加本域才能获取的信息 CSRF Token 双重Cookie验证 <a href="https://segmentfault.com/a/1190000024490213" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000024490213</a></li></ul></li></ul><ul><li><p>怎样清除浮动，浮动的概念</p></li><li><p>讲下闭包 函数执行形成私有上下文，首先这里的私有变量被”保护“起来，不受外界的干扰！而且如果上下文不被释放，则里面的私有变量也会被”保存“下来，这样其下级上下文就可以操作（访问/修改）这些值了！</p></li><li><p>讲下节流及实现 高频触发，规定时间内触发一次，</p></li><li><p>讲下http2，然后问到多路复用是怎么复用的（对比http1） <a href="https://juejin.cn/post/6844903935648497678" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903935648497678</a> 多路复用、二进制分帧、头部压缩、服务端推送</p></li><li><p>react hook</p></li><li><p>普通函数和箭头函数的区别 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。 yield 关键字通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）。因此，箭头函数不能用作函数生成器。 由于 箭头函数没有自己的this指针，通过 call() 或 apply() 方法调用一个函数时，只能传递参数（不能绑定this---译者注），他们的第一个参数会被忽略。</p></li><li><p>讲下vue3:</p><ul><li>Vue2.0采用flow进行编写，而3.0源码全部采用Typescript进行开发，对Typescript支持友好</li><li>源码体积优化：移除部分api(filter等)，使用tree-shaking（vue2大量的api挂载在Vue对象的原型上，难以实现treeShaking）</li><li>数据劫持优化：Vue3采用Proxy，性能大大提升</li><li>编译优化：Vue3实现了静态模板分析，重写diff算法</li><li>CompositionAPI：整合业务代码的逻辑，提取公共逻辑(vue2采用mixin：命名冲突、数据来源不清晰)</li><li>自定义渲染器：可以用来创建自定义渲染器，改写vue底层渲染逻辑</li><li>新增fragment、Teleport、Suspense组件</li></ul></li><li><p>讲下websocket及应用场景 全双工、二进制帧 <a href="https://juejin.cn/post/7080511037320986660" target="_blank" rel="noreferrer">https://juejin.cn/post/7080511037320986660</a> 优点 较少的控制开销：数据包头部协议较小，不同于http每次请求需要携带完整的头部 更强的实时性：相对于HTTP请求需要等待客户端发起请求服务端才能响应，延迟明显更少 保持创连接状态：创建通信后，可省略状态信息，不同于HTTP每次请求需要携带身份验证 更好的二进制支持：定义了二进制帧，更好处理二进制内容 支持扩展：用户可以扩展websocket协议、实现部分自定义的子协议 更好的压缩效果：Websocket在适当的扩展支持下，可以沿用之前内容的上下文，在传递类似的数据时，可以显著地提高压缩率</p></li><li><p>vue2中template如何实现的 解析html，生成ast 标记静态节点 生成代码 new Function+with生成render</p></li><li><p>讲下进程和线程（进程、线程是什么，线程都共享什么？） 进程是系统进行资源调度和分配的的基本单位； 线程是CPU进行资源调度和分配的最小单位 一个进程可以有多个线程，多个线程可以共享进程的进程的资源 <a href="https://cloud.tencent.com/developer/article/1688297" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1688297</a></p></li></ul><p>笔试部分</p><ul><li>原型链 <a href="https://segmentfault.com/a/1190000021232132" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000021232132</a></li></ul><p>var F = function() {}; Object.prototype.a = function() { console.log(&#39;a&#39;); }; Function.prototype.b = function() { console.log(&#39;b&#39;); } var f = new F(); f.a(); //a f.b(); //不是undefined 报错了 F.a(); //a F.b(); //b</p><ul><li><p>深克隆实现 function deepClone(obj, hash = new WeakMap()){ if(obj ==null) return obj; if(obj instanceof Date) return new Date(obj); if(obj instanceof RegExp) return new RegExp(obj);</p><p>if(typeof obj != &#39;object&#39;) return obj;</p><p>if(hash.has(obj))return hash.get(obj);//防止循环引用 let cloneObj = new obj.constructor; for(let key in obj){ if(obj.hasOwnProperty(key)){ cloneObj[key] = deepClone( obj[key], hash ) } } return cloneObj;</p></li></ul><p>}</p><ul><li>instanceof实现 const instanceof = (A, B)=&gt;{ let p =A; while(p){ if(p === B.prototype){ return true; } p = p.<strong>proto</strong>; } return false; }</li></ul><ul><li>火币面试</li></ul><ul><li><p>重绘、重排</p></li><li><p>js动画有几种 css和js 怎么还多了canvas？</p></li><li><p>页面适配</p></li><li><p>继承的几种方式，原型式继承的缺点 javascript直接实现； SVG（可伸缩矢量图形）； CSS3 transition； CSS3 animation； Canvas动画； requestAnimationFrame；</p></li><li><p>vue响应式原理</p></li><li><p>父子组件生命周期执行顺序</p><ul><li>加载渲染过程 父beforeCreate-&gt;父created-&gt;父beforeMount-&gt;子beforeCreate-&gt;子created-&gt;子beforeMount-&gt;子mounted-&gt;父mounted</li><li>销毁过程 父beforeDestroy-&gt;子beforeDestroy-&gt;子destroyed-&gt;父destroyed</li></ul></li><li><p>浏览器强制缓存/协商缓存 1、强缓存和对比缓存同时存在，如果强缓存还在生效期则强制缓存覆盖对比缓存，对比缓存不生效；如果强缓存不在有效期，对比缓存生效。即：强缓存优先级 &gt; 对比缓存优先级 2、强缓存expires和cache-control同时存在时，则cache-control会覆盖expires，expires无论有没有过期，都无效。 即：cache-control优先级 &gt; expires优先级。 3、对比缓存Etag和Last-Modified同时存在时，则Etag会覆盖Last-Modified，Last-Modified不会生效。即：ETag优先级 &gt; Last-Modified优先级。</p></li><li><p>数据缓存：localstorage sessionStorage cookie</p></li><li><p>Web Workers</p></li></ul><ul><li>北京伽睿智能科技</li></ul><ul><li>bfc</li><li>浏览器输入url都发生了什么</li><li>nextTick原理</li><li>响应式原理</li><li>Vue中key的作用</li><li>工作中有没有自定义指令</li><li>自己封装过哪些组件（结合简历问的）</li><li>性能优化</li><li>webpack plugin和loader实现</li><li>原型和原型链</li><li>闭包</li><li>es6用到哪些语法</li><li>从0-1开发一个项目考虑哪些点（技术选型，脚手架、目录、部署）</li><li>git 从a分之1、2、3、4、5捡出commit3 到b分支怎么做</li><li>简单算法 判断一个字符串能否形成回文（不是判断是不是回文） 例如：abcabc 可以形成回文 说了一下思路：统计字符出现次数，字符长度为偶数，字符次数为偶数可以形成回文；字符长度为奇数，字符出现一个奇数次可以形成</li></ul><p>function Parent() {</p><p>} function Child()</p><p>// 原型链继承 优点： 简单易于实现，父类的新增的实例与属性子类都能访问 缺点： 可以在子类中增加实例属性，如果要新增加原型属性和方法需要在new 父类构造函数的后面 无法实现多继承 创建子类实例时，不能向父类构造函数中传参数 Child.prototype = new Parent;</p><p>//构造函数继承 优点： 解决了子类构造函数向父类构造函数中传递参数 可以实现多继承（call或者apply多个父类） 缺点： 方法都在构造函数中定义，无法复用 不能继承原型属性/方法，只能继承父类的实例属性和方法 function Child() { Parent.call(this) }</p><p>//组合式继承 优点： 函数可以复用 不存在引用属性问题 可以继承属性和方法，并且可以继承原型的属性和方法 缺点： 由于调用了两次父类，所以产生了两份实例 function Child() { Parent.call(this) } Child.prototype = new Parent;</p><p>//实例继承（原型式继承） 优点： 不限制调用方式 简单，易实现 缺点：不能多次继承 function create(obj) { var F = function F() { }; var clone = new F; F.prototype = obj; return clone }</p><p>//寄生式继承 缺点（同原型式继承）： 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。 无法传递参数 function inherit() { var o = create(obj); <a href="http://o.xxx" target="_blank" rel="noreferrer">o.xxx</a> = function () {</p><pre><code>}
return o;
</code></pre><p>}</p><p>//寄生组合式继承 function Parent() { } function Child() { Parent.call(this) } function create(Parent, Child) { Child.prototype = Object.create(Parent.prototype); Child.prototype.constructor = Child; } create(Parent, Child)</p>`,31),p=[t];function i(o,r,c,C,A,u){return a(),n("div",null,p)}const h=s(e,[["render",i]]);export{f as __pageData,h as default};
