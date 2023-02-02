Verdaccio 是一个 Node.js 创建的轻量的私有npm proxy registry。Verdaccio 开箱即用，拥有自己的小型数据库，能代理其他注册表（例如npmjs.org），缓存下载模块，且易于扩展。

## 安装

安装前本地或服务器先安装node环境，可以使用[nvm安装](../../frontend/nvm/index.md)

```bash
# 全局安装verdaccio
npm install -g verdaccio
```

安装成功后，输入`verdaccio`指定可本地启动verdaccio服务

## 配置

```bash
# 配置文件目录
/root/.config/verdaccio
```

### 修改配置文件
是部署在服务器上的，需要将配置文件中的ip地址更改为服务器内网ip地址，或者0.0.0.0:端口号。

```bash
cd /home/xxx/.config/verdaccio/
vim config.yaml
```

配置文件
```bash
#
# This is the default configuration file. It allows all users to do anything,
# please read carefully the documentation and best practices to
# improve security.
#
# Look here for more config file examples:
# https://github.com/verdaccio/verdaccio/tree/5.x/conf
#
# Read about the best practices
# https://verdaccio.org/docs/best

# path to a directory with all packages
storage: /root/.local/share/verdaccio/storage
# path to a directory with plugins to include
plugins: ./plugins

# https://verdaccio.org/docs/webui
web:
  title: Verdaccio
  # comment out to disable gravatar support
  # gravatar: false
  # by default packages are ordercer ascendant (asc|desc)
  # sort_packages: asc
  # convert your UI to the dark side
  # darkMode: true
  # html_cache: true
  # by default all features are displayed
  # login: true
  # showInfo: true
  # showSettings: true
  # In combination with darkMode you can force specific theme
  # showThemeSwitch: true
  # showFooter: true
  # showSearch: true
  # showRaw: true
  # showDownloadTarball: true
  #  HTML tags injected after manifest <scripts/>
  # scriptsBodyAfter:
  #    - '<script type="text/javascript" src="https://my.company.com/customJS.min.js"></script>'
  #  HTML tags injected before ends </head>
  #  metaScripts:
  #    - '<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>'
  #    - '<script type="text/javascript" src="https://browser.sentry-cdn.com/5.15.5/bundle.min.js"></script>'
  #    - '<meta name="robots" content="noindex" />'
  #  HTML tags injected first child at <body/>
  #  bodyBefore:
  #    - '<div id="myId">html before webpack scripts</div>'
  #  Public path for template manifest scripts (only manifest)
  #  publicPath: http://somedomain.org/

# https://verdaccio.org/docs/configuration#authentication
auth:
  htpasswd:
    file: ./htpasswd
    # Maximum amount of users allowed to register, defaults to "+inf".
    # You can set this to -1 to disable registration.
    # max_users: 1000
    # Hash algorithm, possible options are: "bcrypt", "md5", "sha1", "crypt".
    # algorithm: bcrypt # by default is crypt, but is recommended use bcrypt for new installations
    # Rounds number for "bcrypt", will be ignored for other algorithms.
    # rounds: 10

# https://verdaccio.org/docs/configuration#uplinks
# a list of other known repositories we can talk to
uplinks:
  npmjs:
    url: https://registry.npmjs.org/

# Learn how to protect your packages
# https://verdaccio.org/docs/protect-your-dependencies/
# https://verdaccio.org/docs/configuration#packages
packages:
  '@*/*':
    # scoped packages
    access: $all
    publish: $authenticated
    unpublish: $authenticated
    proxy: npmjs

  '**':
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # you can specify usernames/groupnames (depending on your auth plugin)
    # and three keywords: "$all", "$anonymous", "$authenticated"
    access: $all

    # allow all known users to publish/publish packages
    # (anyone can register by default, remember?)
    publish: $authenticated
    unpublish: $authenticated

    # if package is not available locally, proxy requests to 'npmjs' registry
    proxy: npmjs

# To improve your security configuration and  avoid dependency confusion
# consider removing the proxy property for private packages
# https://verdaccio.org/docs/best#remove-proxy-to-increase-security-at-private-packages

# https://verdaccio.org/docs/configuration#server
# You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.
# A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.
# WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.
server:
  keepAliveTimeout: 60
  # Allow `req.ip` to resolve properly when Verdaccio is behind a proxy or load-balancer
  # See: https://expressjs.com/en/guide/behind-proxies.html
  # trustProxy: '127.0.0.1'

# https://verdaccio.org/docs/configuration#offline-publish
# publish:
#   allow_offline: false

# https://verdaccio.org/docs/configuration#url-prefix
# url_prefix: /verdaccio/
# VERDACCIO_PUBLIC_URL='https://somedomain.org';
# url_prefix: '/my_prefix'
# // url -> https://somedomain.org/my_prefix/
# VERDACCIO_PUBLIC_URL='https://somedomain.org';
# url_prefix: '/'
# // url -> https://somedomain.org/
# VERDACCIO_PUBLIC_URL='https://somedomain.org/first_prefix';
# url_prefix: '/second_prefix'
# // url -> https://somedomain.org/second_prefix/'

# https://verdaccio.org/docs/configuration#security
# security:
#   api:
#     legacy: true
#     jwt:
#       sign:
#         expiresIn: 29d
#       verify:
#         someProp: [value]
#    web:
#      sign:
#        expiresIn: 1h # 1 hour by default
#      verify:
#         someProp: [value]

# https://verdaccio.org/docs/configuration#user-rate-limit
# userRateLimit:
#   windowMs: 50000
#   max: 1000

# https://verdaccio.org/docs/configuration#max-body-size
# max_body_size: 10mb

# https://verdaccio.org/docs/configuration#listen-port
listen:
# - localhost:4873            # default value
# - http://localhost:4873     # same thing
  0.0.0.0:4873              # listen on all addresses (INADDR_ANY)
# - https://example.org:4873  # if you want to use https
# - "[::1]:4873"                # ipv6
# - unix:/tmp/verdaccio.sock    # unix socket

# The HTTPS configuration is useful if you do not consider use a HTTP Proxy
# https://verdaccio.org/docs/configuration#https
# https:
#   key: ./path/verdaccio-key.pem
#   cert: ./path/verdaccio-cert.pem
#   ca: ./path/verdaccio-csr.pem

# https://verdaccio.org/docs/configuration#proxy
# http_proxy: http://something.local/
# https_proxy: https://something.local/

# https://verdaccio.org/docs/configuration#notifications
# notify:
#   method: POST
#   headers: [{ "Content-Type": "application/json" }]
#   endpoint: https://usagge.hipchat.com/v2/room/3729485/notification?auth_token=mySecretToken
#   content: '{"color":"green","message":"New package published: * {{ name }}*","notify":true,"message_format":"text"}'

middlewares:
  audit:
    enabled: true

# https://verdaccio.org/docs/logger
# log settings
logs: { type: stdout, format: pretty, level: http }
#experiments:
#  # support for npm token command
#  token: false
#  # disable writing body size to logs, read more on ticket 1912
#  bytesin_off: false
#  # enable tarball URL redirect for hosting tarball with a different server, the tarball_url_redirect can be a template string
#  tarball_url_redirect: 'https://mycdn.com/verdaccio/${packageName}/${filename}'
#  # the tarball_url_redirect can be a function, takes packageName and filename and returns the url, when working with a js configuration file
#  tarball_url_redirect(packageName, filename) {
#    const signedUrl = // generate a signed url
#    return signedUrl;
#  }

# translate your registry, api i18n not available yet
# i18n:
# list of the available translations https://github.com/verdaccio/verdaccio/blob/master/packages/plugins/ui-theme/src/i18n/ABOUT_TRANSLATIONS.md
#   web: en-US
```

## 访问
使用pm2启动verdaccio,通过IP+端口可访问服务，也可配置ng，把指定域名转发到此端口上

```bash
# 域名转发到指定端口的配置
server {
  listen 80;
  server_name  xxx.xxx.com;

  location / {
    proxy_pass http://127.0.0.1:4873;
    add_header Access-Control-Allow-Origin *;
   }
}
```

## 使用

使用[nrm](../../frontend/nrm/index.md)指令，管理本地的npm源

### 本地添加私有源
```bash
nrm add <registry> <url>

# reigstry为源名，url为源的路径。
# 实例：nrm add taobao https://taobao.npmjs.org/
```

### 切换到私有源
```bash
nrm use taobao
```

### 注册用户
执行`npm adduser`,根据提示输入用户名、密码、邮箱后，会提示用户已登录到，说明已注册成功

```bash
❯ npm adduser
Username: guozhen
Password:
Email: (this IS public) guozhen4213@126.com
Logged in as guozhen on http://npm.tftest.tfzhongchukeji.com/.
```

执行`npm login`,和`npm adduser`提示类似，进行登录操作

### 发布包
切换到当前私有源后，执行`npm publish`可发布当前npm包，要发布的npm包版本号，必须大于当前仓库中的版本号，可执行`npm version patch`对末尾版本号+1

还可执行`npm publish -tag beta`，发布npm测试版本，通过`npm i @tf/xxx-cli@beta`可安装当前tag下的最新测试版本

```bash
# 发布npm
npm publish

# 发布前可使用此指令对版本号末尾+1
npm version patch

# 发布指定tag下的测试包
npm publish -tag beta

# 安装指定tag下的最新测试版本
npm i @tf/xxx-cli@beta

```

### 安装包
先切换到指定私有源下，再执行安装指令即可

```bash
# 切换到私有源
nrm use taobao

# 安装npm包
npm i @tf/xxx-cli -S

```

## 启动
pm2启动Verdaccio,通过pm2守护进程启动Verdaccio。

```bash
npm install -g pm2
pm2 start verdaccio
```
