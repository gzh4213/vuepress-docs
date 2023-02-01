import{_ as s,c as n,o as a,a as l}from"./app.248772be.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"修改配置文件","slug":"修改配置文件","link":"#修改配置文件","children":[]}]},{"level":2,"title":"访问","slug":"访问","link":"#访问","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"本地添加私有源","slug":"本地添加私有源","link":"#本地添加私有源","children":[]},{"level":3,"title":"切换到私有源","slug":"切换到私有源","link":"#切换到私有源","children":[]},{"level":3,"title":"注册用户","slug":"注册用户","link":"#注册用户","children":[]},{"level":3,"title":"发布包","slug":"发布包","link":"#发布包","children":[]},{"level":3,"title":"安装包","slug":"安装包","link":"#安装包","children":[]}]},{"level":2,"title":"启动","slug":"启动","link":"#启动","children":[]}],"relativePath":"engineering/npm/verdaccio.md"}'),p={name:"engineering/npm/verdaccio.md"},e=l(`<p>Verdaccio 是一个 Node.js 创建的轻量的私有npm proxy registry。Verdaccio 开箱即用，拥有自己的小型数据库，能代理其他注册表（<a href="http://xn--npmjs-4d3hh90d.org" target="_blank" rel="noreferrer">例如npmjs.org</a>），缓存下载模块，且易于扩展。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p>安装前本地或服务器先安装node环境，可以使用<a href="./../../tools/nvm/">nvm安装</a></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 全局安装verdaccio</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verdaccio</span></span>
<span class="line"></span></code></pre></div><p>安装成功后，输入<code>verdaccio</code>指定可本地启动verdaccio服务</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置文件目录</span></span>
<span class="line"><span style="color:#FFCB6B;">/root/.config/verdaccio</span></span>
<span class="line"></span></code></pre></div><h3 id="修改配置文件" tabindex="-1">修改配置文件 <a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a></h3><p>是部署在服务器上的，需要将配置文件中的ip地址更改为服务器内网ip地址，或者0.0.0.0:端口号。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/xxx/.config/verdaccio/</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config.yaml</span></span>
<span class="line"></span></code></pre></div><p>配置文件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># This is the default configuration file. It allows all users to do anything,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># please read carefully the documentation and best practices to</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># improve security.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Look here for more config file examples:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://github.com/verdaccio/verdaccio/tree/5.x/conf</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Read about the best practices</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/best</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># path to a directory with all packages</span></span>
<span class="line"><span style="color:#FFCB6B;">storage:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/root/.local/share/verdaccio/storage</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># path to a directory with plugins to include</span></span>
<span class="line"><span style="color:#FFCB6B;">plugins:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./plugins</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/webui</span></span>
<span class="line"><span style="color:#FFCB6B;">web:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">title:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Verdaccio</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># comment out to disable gravatar support</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># gravatar: false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># by default packages are ordercer ascendant (asc|desc)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># sort_packages: asc</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># convert your UI to the dark side</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># darkMode: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># html_cache: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># by default all features are displayed</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># login: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># showInfo: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># showSettings: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># In combination with darkMode you can force specific theme</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># showThemeSwitch: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># showFooter: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># showSearch: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># showRaw: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># showDownloadTarball: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#  HTML tags injected after manifest &lt;scripts/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># scriptsBodyAfter:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#    - &#39;&lt;script type=&quot;text/javascript&quot; src=&quot;https://my.company.com/customJS.min.js&quot;&gt;&lt;/script&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#  HTML tags injected before ends &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#  metaScripts:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#    - &#39;&lt;script type=&quot;text/javascript&quot; src=&quot;https://code.jquery.com/jquery-3.5.1.slim.min.js&quot;&gt;&lt;/script&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#    - &#39;&lt;script type=&quot;text/javascript&quot; src=&quot;https://browser.sentry-cdn.com/5.15.5/bundle.min.js&quot;&gt;&lt;/script&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#    - &#39;&lt;meta name=&quot;robots&quot; content=&quot;noindex&quot; /&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#  HTML tags injected first child at &lt;body/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#  bodyBefore:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#    - &#39;&lt;div id=&quot;myId&quot;&gt;html before webpack scripts&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#  Public path for template manifest scripts (only manifest)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#  publicPath: http://somedomain.org/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#authentication</span></span>
<span class="line"><span style="color:#FFCB6B;">auth:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">htpasswd:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">file:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./htpasswd</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Maximum amount of users allowed to register, defaults to &quot;+inf&quot;.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># You can set this to -1 to disable registration.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># max_users: 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Hash algorithm, possible options are: &quot;bcrypt&quot;, &quot;md5&quot;, &quot;sha1&quot;, &quot;crypt&quot;.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># algorithm: bcrypt # by default is crypt, but is recommended use bcrypt for new installations</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Rounds number for &quot;bcrypt&quot;, will be ignored for other algorithms.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># rounds: 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#uplinks</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># a list of other known repositories we can talk to</span></span>
<span class="line"><span style="color:#FFCB6B;">uplinks:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">npmjs:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">url:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmjs.org/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Learn how to protect your packages</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/protect-your-dependencies/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#packages</span></span>
<span class="line"><span style="color:#FFCB6B;">packages:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&#39;@*/*&#39;</span><span style="color:#82AAFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># scoped packages</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">access:</span><span style="color:#A6ACCD;"> $all</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">publish:</span><span style="color:#A6ACCD;"> $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">unpublish:</span><span style="color:#A6ACCD;"> $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npmjs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&#39;**&#39;</span><span style="color:#82AAFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># allow all users (including non-authenticated users) to read and</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># publish all packages</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># you can specify usernames/groupnames (depending on your auth plugin)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># and three keywords: &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">access:</span><span style="color:#A6ACCD;"> $all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># allow all known users to publish/publish packages</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># (anyone can register by default, remember?)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">publish:</span><span style="color:#A6ACCD;"> $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">unpublish:</span><span style="color:#A6ACCD;"> $authenticated</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># if package is not available locally, proxy requests to &#39;npmjs&#39; registry</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npmjs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># To improve your security configuration and  avoid dependency confusion</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># consider removing the proxy property for private packages</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/best#remove-proxy-to-increase-security-at-private-packages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#server</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.</span></span>
<span class="line"><span style="color:#FFCB6B;">server:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">keepAliveTimeout:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># Allow \`req.ip\` to resolve properly when Verdaccio is behind a proxy or load-balancer</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># See: https://expressjs.com/en/guide/behind-proxies.html</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># trustProxy: &#39;127.0.0.1&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#offline-publish</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># publish:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   allow_offline: false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#url-prefix</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># url_prefix: /verdaccio/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># VERDACCIO_PUBLIC_URL=&#39;https://somedomain.org&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># url_prefix: &#39;/my_prefix&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># // url -&gt; https://somedomain.org/my_prefix/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># VERDACCIO_PUBLIC_URL=&#39;https://somedomain.org&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># url_prefix: &#39;/&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># // url -&gt; https://somedomain.org/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># VERDACCIO_PUBLIC_URL=&#39;https://somedomain.org/first_prefix&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># url_prefix: &#39;/second_prefix&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># // url -&gt; https://somedomain.org/second_prefix/&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#security</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># security:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   api:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     legacy: true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     jwt:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#       sign:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         expiresIn: 29d</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#       verify:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         someProp: [value]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#    web:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      sign:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#        expiresIn: 1h # 1 hour by default</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      verify:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#         someProp: [value]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#user-rate-limit</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># userRateLimit:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   windowMs: 50000</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   max: 1000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#max-body-size</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># max_body_size: 10mb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#listen-port</span></span>
<span class="line"><span style="color:#FFCB6B;">listen:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># - localhost:4873            # default value</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># - http://localhost:4873     # same thing</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">0.0.0.0:4873</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># listen on all addresses (INADDR_ANY)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># - https://example.org:4873  # if you want to use https</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># - &quot;[::1]:4873&quot;                # ipv6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># - unix:/tmp/verdaccio.sock    # unix socket</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># The HTTPS configuration is useful if you do not consider use a HTTP Proxy</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#https</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   key: ./path/verdaccio-key.pem</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   cert: ./path/verdaccio-cert.pem</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   ca: ./path/verdaccio-csr.pem</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#proxy</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># http_proxy: http://something.local/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https_proxy: https://something.local/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/configuration#notifications</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># notify:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   method: POST</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   headers: [{ &quot;Content-Type&quot;: &quot;application/json&quot; }]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   endpoint: https://usagge.hipchat.com/v2/room/3729485/notification?auth_token=mySecretToken</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   content: &#39;{&quot;color&quot;:&quot;green&quot;,&quot;message&quot;:&quot;New package published: * {{ name }}*&quot;,&quot;notify&quot;:true,&quot;message_format&quot;:&quot;text&quot;}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">middlewares:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">audit:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">enabled:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https://verdaccio.org/docs/logger</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># log settings</span></span>
<span class="line"><span style="color:#FFCB6B;">logs:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">type:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stdout,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">format:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pretty,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">level:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#experiments:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  # support for npm token command</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  token: false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  # disable writing body size to logs, read more on ticket 1912</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  bytesin_off: false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  # enable tarball URL redirect for hosting tarball with a different server, the tarball_url_redirect can be a template string</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  tarball_url_redirect: &#39;https://mycdn.com/verdaccio/\${packageName}/\${filename}&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  # the tarball_url_redirect can be a function, takes packageName and filename and returns the url, when working with a js configuration file</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  tarball_url_redirect(packageName, filename) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#    const signedUrl = // generate a signed url</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#    return signedUrl;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># translate your registry, api i18n not available yet</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># i18n:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># list of the available translations https://github.com/verdaccio/verdaccio/blob/master/packages/plugins/ui-theme/src/i18n/ABOUT_TRANSLATIONS.md</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   web: en-US</span></span>
<span class="line"></span></code></pre></div><h2 id="访问" tabindex="-1">访问 <a class="header-anchor" href="#访问" aria-hidden="true">#</a></h2><p>使用pm2启动verdaccio,通过IP+端口可访问服务，也可配置ng，把指定域名转发到此端口上</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 域名转发到指定端口的配置</span></span>
<span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">xxx.xxx.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:</span><span style="color:#F78C6C;">4873</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Access-Control-Allow-Origin</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><p>使用<a href="./../../tools/nrm/">nrm</a>指令，管理本地的npm源</p><h3 id="本地添加私有源" tabindex="-1">本地添加私有源 <a class="header-anchor" href="#本地添加私有源" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">registr</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ur</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># reigstry为源名，url为源的路径。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 实例：nrm add taobao https://taobao.npmjs.org/</span></span>
<span class="line"></span></code></pre></div><h3 id="切换到私有源" tabindex="-1">切换到私有源 <a class="header-anchor" href="#切换到私有源" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">taobao</span></span>
<span class="line"></span></code></pre></div><h3 id="注册用户" tabindex="-1">注册用户 <a class="header-anchor" href="#注册用户" aria-hidden="true">#</a></h3><p>执行<code>npm adduser</code>,根据提示输入用户名、密码、邮箱后，会提示用户已登录到，说明已注册成功</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">❯</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adduser</span></span>
<span class="line"><span style="color:#FFCB6B;">Username:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">guozhen</span></span>
<span class="line"><span style="color:#FFCB6B;">Password:</span></span>
<span class="line"><span style="color:#FFCB6B;">Email:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">guozhen4213@126.com</span></span>
<span class="line"><span style="color:#FFCB6B;">Logged</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">guozhen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://npm.tftest.tfzhongchukeji.com/.</span></span>
<span class="line"></span></code></pre></div><p>执行<code>npm login</code>,和<code>npm adduser</code>提示类似，进行登录操作</p><h3 id="发布包" tabindex="-1">发布包 <a class="header-anchor" href="#发布包" aria-hidden="true">#</a></h3><p>切换到当前私有源后，执行<code>npm publish</code>可发布当前npm包，要发布的npm包版本号，必须大于当前仓库中的版本号，可执行<code>npm version patch</code>对末尾版本号+1</p><p>还可执行<code>npm publish -tag beta</code>，发布npm测试版本，通过<code>npm i @tf/xxx-cli@beta</code>可安装当前tag下的最新测试版本</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 发布npm</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publish</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 发布前可使用此指令对版本号末尾+1</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">patch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 发布指定tag下的测试包</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beta</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装指定tag下的最新测试版本</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@tf/xxx-cli@beta</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="安装包" tabindex="-1">安装包 <a class="header-anchor" href="#安装包" aria-hidden="true">#</a></h3><p>先切换到指定私有源下，再执行安装指令即可</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 切换到私有源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">taobao</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装npm包</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@tf/xxx-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-hidden="true">#</a></h2><p>pm2启动Verdaccio,通过pm2守护进程启动Verdaccio。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pm2</span></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verdaccio</span></span>
<span class="line"></span></code></pre></div>`,35),o=[e];function t(c,i,r,y,C,d){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{h as __pageData,u as default};
