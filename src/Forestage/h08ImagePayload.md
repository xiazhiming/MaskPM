---
title: 图片隐写
---

### 需求目标

用户可以进行自定义的加密图片展示。前提，图片隐写在支持常见网页图片，JPG、JPEG、PNG 格式图片，且不影响用户识别。 

## 文字隐写

- 将发送的信息隐藏在链接中，前台用 css 截断显示加密内容。

## 图片隐写

- 图片大小 1200*680 

- 默认图片隐写

  - Post 默认图片-自由女神
  - 红包 Token 默认图片-
  - 红包 收藏品 默认图片-Mona Lisa 
  - 发售 Token 默认图片
  - 发售收藏品图片

- 图片自定义

  - 图片大小长宽不高于 1200px。超出大小图片按最长边裁切至 1200 存储。

## 用户查看权限

#### 自己查看

- Decrypted by Mask Network +Append recipients

- 信息内容

- +隐写图片（文字加密类不显示）

#### 好友装有 Mask 且有查看权限

- Decrypted by Mask Network 

- 信息内容

- +隐写图片（文字加密类不显示）

#### 装有 Mask 但是无查看权限

- This tweet is encrypted with #mask_io.  

- Decrypted by Mask Network 
- You are not authorized to view it, please ask the owner for authorization.
- +隐写图片（文字加密类不显示）
#### 无 Mask 用户

- This tweet is encrypted with #mask_io.  

- Install Https://Mask.io to decrypt it.
- 信息内容
- +隐写图片（文字加密类不显示）

[Figma 设计链接](https://www.figma.com/file/gVkQ67y285b4FXVV1KPThN/Twitter?node-id=2781%3A151037)

