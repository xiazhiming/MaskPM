## Dashboard

## 需求描述

- Dashboard 页面 默认显示 Personas 页面。用户的主账户进行解密和加密信息。不依赖于 Personas 账户来进行加密解密。迭代增加账户和账户找回密码功能。减少因为过往依赖 Personas 账户删除和创建，造成用户删除 Personas 账户增减同一账户造成的无法解密以往的账户 post 信息。
  - 登录用户校验是否建立 Personas 用户名，没有任何的 Personas 用户跳转至 Personas 角色名创建页面。
  - 创建过 Personas 用户角色名的用户，首次进入链接任何社交账号的用户进入社交用户绑定页面。
  - 创建过 Personas 用户角色名的用户，非首次直接进入 Personas 页面。

