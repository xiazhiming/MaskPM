## SingIn

<a data-fancybox  href="imges/Register.png">![imges/Register.png](imges/Register.png)</a>





##  需求描述

- 两种用户登录，托管用户和非托管用户。托管用户和非托管用户，均验证本地账户和密码。错误提示：
  - 验证邮箱格式是否正确。如错误显示：**邮箱地址不正确**
  - 验证本地是否有该账户数据。如错误显示：**邮箱地址不存在**
  - 验证密码，如错误显示：**密码与邮箱不匹配**
- 登录成功，验证是否创建 Personas 账户名，已验证跳转至绑定社交账号页面，未验证跳转至创建 Personas 页面。
- 登录成功后，验证是否绑定 Twitter 或者 Facebook，两者均未验证跳转至绑定页面。如果已绑定其中之一社交账户。跳转至 Dashboard 中 Personas 页面。

