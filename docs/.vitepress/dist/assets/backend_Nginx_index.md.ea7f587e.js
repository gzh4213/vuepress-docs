import{_ as s,c as n,o as a,a as l}from"./app.248772be.js";const h=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[{"level":3,"title":"正向代理 反向代理","slug":"正向代理-反向代理","link":"#正向代理-反向代理","children":[]},{"level":3,"title":"负载均衡（upstream）","slug":"负载均衡-upstream","link":"#负载均衡-upstream","children":[]},{"level":3,"title":"动静分离","slug":"动静分离","link":"#动静分离","children":[]}]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[{"level":3,"title":"全局块","slug":"全局块","link":"#全局块","children":[]},{"level":3,"title":"events块","slug":"events块","link":"#events块","children":[]},{"level":3,"title":"http块","slug":"http块","link":"#http块","children":[]},{"level":3,"title":"serve块","slug":"serve块","link":"#serve块","children":[]},{"level":3,"title":"location块","slug":"location块","link":"#location块","children":[]},{"level":3,"title":"配置文件注解","slug":"配置文件注解","link":"#配置文件注解","children":[]}]},{"level":2,"title":"yum install nginx","slug":"yum-install-nginx","link":"#yum-install-nginx","children":[]}],"relativePath":"backend/Nginx/index.md"}'),p={name:"backend/Nginx/index.md"},e=l(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><p>Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日。2011年6月1日，nginx 1.0.4发布。</p><p>高并发，大流量：需要面对高并发用户，大流量访问。举个例子，去往迪拜的飞机有200张票，但是有100w人都挤进系统买票，如何让这100w人能够看到票务的实时更新，以及顺利的买到一张票，都是一个网站架构师应该考虑的问题。这也许对于淘宝的“双十一”1000w的一分钟独立访问用户量来说，是个微不足道的数字，但是对于用户的体验以及网站的口碑来说，都是一项不小的挑战</p><p>Nginx 是一个安装非常的简单、配置文件非常简洁（还能够支持perl语法）、Bug非常少的服务。Nginx 启动特别容易，并且几乎可以做到7*24不间断运行，即使运行数个月也不需要重新启动。你还能够不间断服务的情况下进行软件版本的升级。</p><p>Nginx代码完全用C语言从头写成。官方数据测试表明能够支持高达 50,000 个并发连接数的响应。</p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-hidden="true">#</a></h2><h3 id="正向代理-反向代理" tabindex="-1">正向代理 反向代理 <a class="header-anchor" href="#正向代理-反向代理" aria-hidden="true">#</a></h3><p>nginx不仅可以做反向代理，还能用作正向代理来进行上网等功能。如果把局域网外的Internet想象成一个巨大的资源库，则局域网中的客户端要访问Internet，则需要通过代理服务器来访问，这种代理服务就称为正向代理（也就是大家常说的，通过正向代理进行上网功能）</p><p>反向代理实际运行方式是代理服务器接受网络上的连接请求。它将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给网络上请求连接的客户端，此时代理服务器对外就表现为一个服务器。</p><h3 id="负载均衡-upstream" tabindex="-1">负载均衡（upstream） <a class="header-anchor" href="#负载均衡-upstream" aria-hidden="true">#</a></h3><ul><li>轮询</li></ul><p>轮询方式是Nginx负载默认的方式，顾名思义，所有请求都按照时间顺序分配到不同的服务上，如果服务Down掉，可以自动剔除</p><ul><li>权重</li></ul><p>指定每个服务的权重比例，weight和访问比率成正比，通常用于后端服务机器性能不统一，将性能好的分配权重高来发挥服务器最大性能</p><h3 id="动静分离" tabindex="-1">动静分离 <a class="header-anchor" href="#动静分离" aria-hidden="true">#</a></h3><p>在Web开发中，通常来说，动态资源其实就是指那些后台资源，而静态资源就是指HTML，JavaScript，CSS，img等文件。</p><p>一般来说，都需要将动态资源和静态资源分开，将静态资源部署在Nginx上，当一个请求来的时候，如果是静态资源的请求，就直接到nginx配置的静态资源目录下面获取资源，如果是动态资源的请求，nginx利用反向代理的原理，把请求转发给后台应用去处理，从而实现动静分离。</p><p>在使用前后端分离之后，可以很大程度的提升静态资源的访问速度，同时在开发过程中也可以让前后端开发并行可以有效的提高开发时间，也可以有效的减少联调时间 。</p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检查配置文件是否有语法错误,可打印出配置文件路径</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># nginx 启动目录</span></span>
<span class="line"><span style="color:#FFCB6B;">whereis</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动nginx 直接执行 \`nginx\` 即可</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># stop 是立即停止</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># quit 是一个优雅的关闭方式，Nginx在退出前完成已经接受的请求处理</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重载nginx配置文件</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看nginx进程 \`ps -ef\` 输出标准格式的linux进程命令 \`grep nginx\` \`grep\`命令 是查找， 是一种强大的文本搜索工具 我们这儿是查找nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span></code></pre></div><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-hidden="true">#</a></h2><p>Nginx的主配置文件是nginx.conf，这个配置文件一共由三部分组成，分别为全局块、events块和http块。</p><p>在http块中，又包含http全局块、多个server块。</p><p>每个server块中，可以包含server全局块和多个location块。在同一配置块中嵌套的配置块，各个之间不存在次序关系</p><h3 id="全局块" tabindex="-1">全局块 <a class="header-anchor" href="#全局块" aria-hidden="true">#</a></h3><p>全局块是默认配置文件从开始到events块之间的一部分内容，主要设置一些影响Nginx服务器整体运行的配置指令，因此，这些指令的作用域是Nginx服务器全局。</p><ul><li>user [user] [group] 指定可以运行nginx服务的用户和用户组，只能在全局块配置 user指令在Windows上不生效，如果你制定具体用户和用户组会报警告</li><li>worker_processes nginx进程数量worker_processes 比如设置为2 nginx将会开启一个master进程和2两个worker进程</li><li>pid logs/nginx.pid 存放pid文件</li><li>error_log logs/error.log; 全局错误日志类型 debug info warn error 存放地址</li></ul><h3 id="events块" tabindex="-1">events块 <a class="header-anchor" href="#events块" aria-hidden="true">#</a></h3><p>events块涉及的指令主要影响Nginx服务器与用户的网络连接。常用到的设置包括是否开启对多worker process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型处理连接请求，每个worker process可以同时支持的最大连接数等</p><ul><li><p>accept_mutex 默认开启-开启之后nginx 的多个worker将会以串行的方式来处理，只会有一个worker将会被唤起，其他的worker继续睡眠，如果不开启将会造成惊群效应多个worker全部唤起不过只有一个Worker能获取新连接，其它的Worker会重新进入休眠状态</p></li><li><p>worker_connections 单个进程最大连接数（最大连接数=连接数+进程数）</p></li></ul><h3 id="http块" tabindex="-1">http块 <a class="header-anchor" href="#http块" aria-hidden="true">#</a></h3><p>http块是Nginx服务器配置中的重要部分，代理、缓存和日志定义等绝大多数的功能和第三方模块的配置都可以放在这个模块中。</p><ul><li>include指令，用于引入其他的配置文件</li><li>default_type 如果Web程序没设置，Nginx也没对应文件的扩展名，就用Nginx 里默认的 default_type定义的处理方式。default_type application/octet-stream; #nginx默认文件类型</li><li>log_format指令，用于定义日志格式，此指令只能在http块中进行配置</li><li>sendfile 简单来说就是启用sendfile()系统调用来替换read()和write()调用，减少系统上下文切换从而提高性能，当 nginx 是静态文件服务器时，能极大提高nginx的性能表现</li><li>keepalive_timeout HTTP 有一个 KeepAlive 模式，它告诉 webserver 在处理完一个请求后保持这个 TCP 连接的打开状态。若接收到来自客户端的其它请求，服务端会利用这个未被关闭的连接，而不需要再建立一个连接。</li><li>gzip 开启Gzip压缩功能， 可以使网站的css、js 、xml、html 文件在传输时进行压缩，提高访问速度, 进而优化Nginx性能</li></ul><h3 id="serve块" tabindex="-1">serve块 <a class="header-anchor" href="#serve块" aria-hidden="true">#</a></h3><p>每一个http块都可以包含多个server块，而每个server块就相当于一台虚拟主机，它内部可有多台主机联合提供服务，一起对外提供在逻辑上关系密切的一组服务</p><ul><li>listen指令的配置非常灵活，可以单独制定ip，单独指定端口或者同时指定ip和端口</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">listen 127.0.0.1:8000;  #只监听来自127.0.0.1这个IP，请求8000端口的请求</span></span>
<span class="line"><span style="color:#A6ACCD;">listen 127.0.0.1; #只监听来自127.0.0.1这个IP，请求80端口的请求（不指定端口，默认80）</span></span>
<span class="line"><span style="color:#A6ACCD;">listen 9999; #监听来自所有IP，请求9999端口的请求</span></span>
<span class="line"><span style="color:#A6ACCD;">listen *:9999; #和上面效果一样</span></span>
<span class="line"><span style="color:#A6ACCD;">listen localhost:8000; #和第一种效果一致</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>server_name nginx 允许一个虚拟主机有一个或多个名字，也可以使用通配符&quot;*&quot;来设置虚拟主机的名字 支持 ip 域名 通配符 正则等</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server_name  localhost</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="location块" tabindex="-1">location块 <a class="header-anchor" href="#location块" aria-hidden="true">#</a></h3><p>每个server块中可以包含多个location块。在整个Nginx配置文档中起着重要的作用，而且Nginx服务器在许多功能上的灵活性往往在location指令的配置中体现出来</p><p>location 指令可以分为以下 3 类：</p><ul><li>前缀字符串匹配</li><li>正则表达式匹配</li><li>用于内部跳转的命名location</li></ul><p><strong>前缀字符串匹配</strong></p><ul><li>精确匹配 =</li><li>前缀匹配 ^~（立刻停止后续的正则搜索）</li><li>按文件中顺序的正则匹配 ~或~*</li><li>匹配不带任何修饰的前缀匹配。</li></ul><p><strong>location root</strong> root 指定目录的上级目录，并且该上级目录要含有locatoin指定名称的同名目录。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location /img/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">	root /var/www/image;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>若按照这种配置的话，则访问/img/目录下的文件时，nginx会去/var/www/image/img/目录下找文件</p><h3 id="配置文件注解" tabindex="-1">配置文件注解 <a class="header-anchor" href="#配置文件注解" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#user  nginx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 根据cpu核数配置进程</span></span>
<span class="line"><span style="color:#FFCB6B;">worker_processes</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">events</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 后台允许的并发数</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">worker_connections</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 映射表</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">default_type</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 访问日期</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#access_log  logs/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 开启高速传输模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sendfile</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 减少网络报文</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">keepalive_timeout</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 是否开启文件压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 导入其他文件中的ng配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># include /self/nginx/conf/*.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 监听服务</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 端口</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 服务域名</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/www/wwwroot/demo/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">deny</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">114.115.24.34/</span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 拒绝某个IP访问 all：拒绝所有</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">allow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">114.115.24.34/</span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 允许某个IP访问</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">error_page</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">502</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">503</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">504</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/50x.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/50x.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    root           html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    deny  all;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 设置多个虚拟主机服务</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8001</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 监听某个端口</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.gzh4213.com</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 监听域名</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">proxy_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm.gzh4213.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    listen       8000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    listen       somename:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    server_name  somename  alias  another.alias;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#        root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># HTTPS server</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_session_timeout  5m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#        root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="yum-install-nginx" tabindex="-1">yum install nginx <a class="header-anchor" href="#yum-install-nginx" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># yum 包安装源配置目录</span></span>
<span class="line"><span style="color:#FFCB6B;">/etc/yum.repos.d/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看本地nginx安装情况</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span></code></pre></div><p><a href="https://nginx.org/en/linux_packages.html#RHEL" target="_blank" rel="noreferrer">配置nginx的yum源</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[nginx-stable]</span></span>
<span class="line"><span style="color:#A6ACCD;">name=nginx stable repo</span></span>
<span class="line"><span style="color:#A6ACCD;">baseurl=http://nginx.org/packages/centos/$releasever/$basearch/</span></span>
<span class="line"><span style="color:#A6ACCD;">gpgcheck=1</span></span>
<span class="line"><span style="color:#A6ACCD;">enabled=1</span></span>
<span class="line"><span style="color:#A6ACCD;">gpgkey=https://nginx.org/keys/nginx_signing.key</span></span>
<span class="line"><span style="color:#A6ACCD;">module_hotfixes=true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[nginx-mainline]</span></span>
<span class="line"><span style="color:#A6ACCD;">name=nginx mainline repo</span></span>
<span class="line"><span style="color:#A6ACCD;">baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/</span></span>
<span class="line"><span style="color:#A6ACCD;">gpgcheck=1</span></span>
<span class="line"><span style="color:#A6ACCD;">enabled=0</span></span>
<span class="line"><span style="color:#A6ACCD;">gpgkey=https://nginx.org/keys/nginx_signing.key</span></span>
<span class="line"><span style="color:#A6ACCD;">module_hotfixes=true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,54),o=[e];function t(c,i,r,y,C,A){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
