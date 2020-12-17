---
title: 钱包
---


### 需求目标





## 钱包类型

- #### Ether 钱包

- #### Polkadot 钱包

- #### loopring 二层网络钱包

  
  
## 常见合约



### ERC20

ERC-20 是同质化代币(Fungible token，缩写为 FT)，所有的代币单位价值都是一样的且可以分割。

ERC-20 代币都能兼容以太坊钱包以及支持以太币的钱包，交易所可以很容易地整合这些代币，绝大多数 ICO 都使用了 ERC-20 代币，最大支持精度为小数点 18 位。

ERC20 标准规范，该标准具有指定的 6 个函数和 2 个事件接口。



- #### 合约创建

  - name 代币名称
  - Symbol 代币符号
  - decimals 代币精度 最大支持 18 位。
  - supply 供应总量

  

- #### 标准合约函数和接口

``` solidity
pragma solidity ^0.4.24;

/**
 * @title ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/20
 */
interface IERC20 {
  function totalSupply() external view returns (uint256);

  function balanceOf(address who) external view returns (uint256);

  function allowance(address owner, address spender)
    external view returns (uint256);

  function transfer(address to, uint256 value) external returns (bool);

  function approve(address spender, uint256 value)
    external returns (bool);

  function transferFrom(address from, address to, uint256 value)
    external returns (bool);

  event Transfer(
    address indexed from,
    address indexed to,
    uint256 value
  );

  event Approval(
    address indexed owner,
    address indexed spender,
    uint256 value
  );
}
```



[ERC20 合约地址](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)



 - #### 事件规范

   - `Transfer(address indexed _from, address indexed _to, uint256 _value)` - 转移代币时触发
   - `Approval(address indexed _owner, address indexed _spender, uint256 _value)` - 调用批准功能时触发。

- #### 扩展功能

  - 可以扩展 ERC20 标准只是如何为新用例定义合同的一个示例。还有例如当下流行的功能是可增发，可销毁，可锁仓等。

### ERC721

- ERC721 同样是一个代币标准，ERC721 官方简要解释是 Non-Fungible Tokens，简写为 NFTs，多翻译为非同质代币。也就意味着每个 Token 都是不一样的，都有自己的唯一性和独特价值，当然这也就意味着它们是不可分割的，也同时具有了可追踪性。既是优点也是缺点，具有不可分割的性质。正是这份特性让 ERC721 代币流通收到阻碍。

- #### 标准接口
``` solidity
pragma solidity ^0.4.20;

interface ERC721 /* is ERC165 */ {

    event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
    event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    function balanceOf(address _owner) external view returns (uint256);
    function ownerOf(uint256 _tokenId) external view returns (address);
    
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;
    function transferFrom(address _from, address _to, uint256 _tokenId) external payable;
    
    function approve(address _approved, uint256 _tokenId) external payable;
    function setApprovalForAll(address _operator, bool _approved) external;
    function getApproved(uint256 _tokenId) external view returns (address);
    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
}
```

[ERC721 合约地址](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)  

  

### ERC1155

ERC-1155 用了一种新的方式来定义代币，物品将被储存的一个中央智能合约，并占用极少的空间仅用来互相区分。任何物品 Token 都可以被合并打包成一个"Token 包"，Token 包也有自己独立的 id（减少区块链上大量的冗余字节码）

我们类比一下暗黑中的镶钻机制，一件有两个孔的武器，和两个完美的宝石，这是三个 token，当我们把这两个宝石镶嵌进武器中，就变成了一个 token 包——也就是新的武器。同时，这个机制下也可以使得复杂交易简单化，比如 A 和 B 想交易 20 个物品，如果是一个个交易需要进行 20 次交易，如果可以将 20 个物品 token 打包，只需进行一笔交易后在解包，效率和体验就提升了很多。

[ERC1155 合约地址](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md)  

还有更多有趣的合约，可以查看譬如 ERC998 之类在不断的改进现有的流程和适合未来的发展。

[Ether 合约列表](https://github.com/ethereum/EIPs/tree/master/EIPS)

## 创建钱包
<a data-fancybox  href="http://assets.processon.com/chart_image/5fdae1db07912906da5db88d.png">![imges/issue.png](http://assets.processon.com/chart_image/5fdae1db07912906da5db88d.png)


- #### 私钥（Private Key）

  - 私钥由 64 位长度的十六进制的字符组成，比如：`0xA4356E49C88C8B7AB370AF7D5C0C54F0261AAA006F6BDE09CD4745CF54E0115A`，**一个账户只有一个私钥且不能修改**，。通常一个钱包中私钥和公钥是成对出现的，有了私钥，我们就可以通过一定的算法生成公钥，再通过公钥经过一定的算法生成地址，这一过程都是不可逆的。私钥一定要妥善保管，若被泄漏别人可以通过私钥解锁账号转出你的该账号的数字货币。

- #### Keystore+密码（JSON+Password）

  - Keystore 常见于以太坊钱包，它是将私钥以加密的方式保存为一份 JSON 文件，这份 JSON 文件就是 keystore，所以它就是加密后的私钥。Keystore 必须配合钱包密码才能使用该账号。

- #### 助记词（Mnemonic code）

  - 私钥是 64 位长度的十六进制的字符，不利于记录且容易记错，所以用算法将一串随机数转化为了一串 12 ~ 24 个容易记住的单词，方便保存记录。注意：

    1. 助记词是私钥的另一种表现形式
    2. 助记词可以获取相关联的多个私钥，反过来私钥没法获取助记词。

    要弄清楚助记词与私钥的关系，得清楚 BIP 协议，是`Bitcoin Improvement Proposals`的缩写，意思是 Bitcoin 的改进建议，用于提出 Bitcoin 的新功能或改进措施。BIP 协议衍生了很多的版本，主要有 BIP32、BIP39、BIP44。

  


## 导入钱包

- #### 助记词 

  - 验证Mnemonic code

- #### 加密 JSON

  - 验证 JSON 信息正确性
  - 验证密码是否正确

- #### 私钥

  - 验证私钥正确性
  
  

## 插件钱包

- #### MetaMask 钱包

  - [MetaMask.io](https://link.zhihu.com/?target=https%3A//metamask.io/) 以太坊网络开源钱包，目前有 Chrom Firefox 等网页插件和APP版本。
  - 

- #### WalletConnect 钱包

  - [WalletConnect](https://walletconnect.org/)是一种开源协议，可通过QR码扫描或深层链接将分散的应用程序连接到移动钱包。用户可以通过手机与任何Dapp安全地进行交互，与台式机或浏览器扩展钱包相比，WalletConnect钱包是一个更安全的选择。
  - 目前大部分的以太坊网络主流的DAPP和钱包均支持。

- #### Polkadot js 钱包

  - [Polkadot Js](polkadot.js.org) 是波卡网络社区开发的钱包。
  
  



## Toolbar

- #### 新增钱包

  - 创建钱包名称
    - 钱包名称验证长度，最高不能超过 24 位。超出后，错误显示：**钱包名超出最大长度24**

- #### 备份钱包

  - 仅支持备份本地钱包。
  - 备份钱包需输入登录密码解锁。
    - 支持 Mnemonic 、Private Key、加密 JSON file 格式。

- #### 删除钱包

  - 需要输入登录密码后，方可删除钱包。

- #### 链接钱包

  - 支持 MetaMask 插件钱包。
  - 支持 WalletConnect 钱包。
  - 后续支持 Polkadotjs 插件钱包。

- #### 解除链接钱包

  - 解除第三方钱包的连接状态。
  
  

## 转账

- #### Token 转账

  - 收款地址，跟谁当前的钱包状态进行验证地址有效性。
    - 以太坊钱包地址验证：如不符合现实**ETH钱包地址不正确**
      - 判断地址非空和是否 0x 开头。
      - 判断 0x 后是否为长度为 40 位 16 进制字符。
      - 判断 后面 40 位字符能否转化为10进制数。
    - Polkadot （和 Substrate）使用 SS58 地址格式。

- #### 收藏品转账

## Swap

## 红包

- Token 红包
- 收藏品红包

## 发售功能

- #### Token 发售

- #### 收藏品发售

## 法币购买

- Transak

## 历史记录

- #### 转账记录

- #### Swap 记录

- #### 红包记录

  - Token 红包
  - 收藏品红包

- #### 发售记录

  - Token 发售
  - 收藏品 发售

  

## 前台钱包

