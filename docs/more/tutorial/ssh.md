# 本地为不同的git账号配置不同的SSH-Key

1. 切换到ssh目录下
````js
cd ~/.ssh
````

2. 为不同git账号生成SSH-Key
````js
// github
ssh-keygen -t rsa -C "your_mail@example.com" -f github_rsa

// 公司git
ssh-keygen -t rsa -C "your_mail@company.com" -f company_rsa
````

生成后把SSH公钥添加到git管理系统配置中

3. 生成配置文件`config`,并添加一下内容
````
# github.com
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_rsa

# gitlab.company.com
Host gitlab.company.com
HostName gitlab.company.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/company_rsa
````

4. 测试配置是否成功
````
ssh -T git@github.com
````

输出返回如下说明配置成功
````
Hi gzh4213! You've successfully authenticated, but GitHub does not provide shell access.

````