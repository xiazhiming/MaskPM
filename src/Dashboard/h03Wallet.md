---
title: 钱包
---


### 需求目标





## 钱包类型

- #### Ether 钱包

- #### Polkadot 钱包

  - 初次创建：用户可以通过随机数或者助记词创建私钥及地址。但 Polkadot 网络上并未真实存在该账户
  - 激活账户：激活账户需要充入保活押金 (Existential Deposit)，即创建完成之后由其他账户给你充入 1 个 DOT，你的账户才能正常使用
  - 账户回收 (Reaped)：当你的账户余额低于 1 个 DOT 之后，账户会被回收，需要再次充入 1 个 DOT 才能重新激活。
  - 目前 polkadot 其他的网络也是需要抵押各自的主网币，来进行激活使用。

- #### loopring 二层网络钱包

  - 特点：可以进行 ETH 钱包二层网络预收款，是高速的便宜的网络。
  - 缺点：没有合约支撑，二层网络需要开户，开户成本比较高。整个生态群比较单一。跨网络费用相对转账更高。
  
  
  
## 常见合约



### ERC20

ERC-20 是同质化代币(Fungible token，缩写为 FT)，所有的代币单位价值都是一样的且可以分割。

ERC-20 代币都能兼容以太坊钱包以及支持以太币的钱包，交易所可以很容易地整合这些代币，绝大多数 ICO 都使用了 ERC-20 代币，最大支持精度为小数点 18 位。锚定抵押类型的稳定币通常使用 6 位 精度来进行计算。例如：USDC、USDT。数字货币抵押稳定币通常使用 18 位精度。 例如：DAI。

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

  - 验证 Mnemonic code

- #### 加密 JSON

  - 验证 JSON 信息正确性
  - 验证密码是否正确

- #### 私钥

  - 验证私钥正确性
  
  

## 插件钱包

- #### MetaMask 钱包

  - [MetaMask.io](https://link.zhihu.com/?target=https%3A//metamask.io/) 以太坊网络开源钱包，目前有 Chrom Firefox 等网页插件和 APP 版本。是比较大众的 ETH 插件钱包，基本上网页版本的 Dapp 普遍支持。密码具有一定有效时间。

- #### WalletConnect 钱包

  - [WalletConnect](https://walletconnect.org/)是一种开源协议，可通过 QR 码扫描或深层链接将分散的应用程序连接到移动钱包。用户可以通过手机与任何 Dapp 安全地进行交互，与台式机或浏览器扩展钱包相比，WalletConnect 钱包是一个更安全的选择。
  - 目前大部分的以太坊网络主流的 DAPP 和钱包均支持。

- #### Polkadot js 钱包

  - [Polkadot Js](polkadot.js.org) 是波卡网络社区开发的钱包。每次交易需要验证密码。
  
  



## Toolbar

- #### 无钱包

  - 直接进入钱包创建页面。

  

- #### 新增钱包

  - 选择链条，显示当前支持的公链。

  - 创建钱包名称
    - 钱包名称验证长度，最高不能超过 24 位字符长度。超出后输入不显示。
    - 重命名规则同上。

- #### 备份钱包

  - 仅支持备份本地钱包。
  - 备份钱包需输入登录密码解锁。如错误显示**密码不正确**。
    - 支持 Mnemonic 、Private Key、加密 JSON file 格式。

- #### 删除钱包

  - 本地钱包密码验证正确后可删除钱包。      

  

- #### 链接钱包

  - 支持 MetaMask 插件钱包。显示 MetaMask 链接过的钱包。
  - 支持 WalletConnect 钱包。显示当前授权链接的钱包地址。
  - 后续支持 Polkadotjs 插件钱包。

- #### 解除链接钱包

  - 解除第三方钱包的连接状态。
  
  

## 转账

- 合约交互前，需要将用户的使用的资产对合约进行 Approve。ETH 资产除外。Approve 分为两类：
  - 限定量 Approve ，用户指定合约最多使用该钱包该资产使用额度。用户可以重复多次进行 Appove 来调整对于合约的授信额度。在授信额度内，合约可以不经过用户的确定使用该钱包该类资产的授信额度。
  - 过度 Approve ，即用户可以进行合约对该钱包，无限额度授予。用户可以后期重新调整 Appove 的值。
- 特例 USDT 
  
- #### Token 转账

  - 收款地址，根据当前钱包的公链的链接进行地址规则验证。
    - 以太坊钱包地址验证：如不符合现实**地址不正确**
      - 判断地址非空和是否 0x 开头。
      - 判断 0x 后是否为长度为 40 位 16 进制字符。
      - 判断 后面 40 位字符能否转化为 10 进制数。
      
    - Polkadot （及平行链）使用 SS58 地址格式。

    - 发送 Token 类型，默认显示 ETH。点击弹出搜索 Token 界面。

    - 搜索 Token 

      - 展示 Token 的图标，symbol、Token name 以及用户当前钱包的余额。以及对应的价值。

      - 在列表中可以进行 sybmol 、Token name 模糊搜索。判断地址位精确查询。
      - 搜索结果未在常用列表中展示，显示 Add 按钮。已添加未在常用列表中的 Token 显示 Remove 按钮。

    - Gas Fee 显示需要消耗的费用总量。默认取用 Gas Now 中位 gas 为基准。显示 Fee 设置按钮，点击弹出 Set Gas Fee modal。

    - Set Gas Fee 默认显示 [Gas now](https://www.gasnow.org/) 中，Standard 和 Fast gas price。以及自定义和相应的计算。

      - Gas Fee 的计算。Gas price * Gas Limit = 总共需要消耗的 ETH 数量。计算价格再*当前 ETH 的价格。
- Advanced 数据。点击显示 Memo 字段。这个是 区块中的扩展字段。可以备注或者用作验证等。
  
- #### 收藏品转账 （ERC721 及兼容 ERC721 的合约）

  - 收款地址，根据当前钱包的公链的链接进行地址规则验证。
  - Token 类型，目前支持 ERC721 合约。获取常用列表前 100。[查询地址](https://etherscan.io/tokens-nft) 点击弹出 Search Coollections Contact 弹窗。
  - Search Coollections Contact 搜索使用 Symbol、和 Token 模糊收缩。合约地址使用精确查找。
  -  非常用列表中 ERC721，在搜索出结果手显示 Add 和 Remove 功能。添加到用户的列表中。 
  - Gas Fee 同 Token 转账。
  - Advanced 数据 与 Token 一样。

## Swap

根据当前钱包的地址，进行资产的换取。目前直接支持 layer1 层的合约协议。目前市面比较多的协议为两种。

- 聚合协议 聚合 Dex Defi 类型。钱包只需要与聚合协议进行交互。好处是在于可以获得较为大的深度。获取最好的价格。例如 1Inch、0x 等。
- dex 基于 AMM 算法的一些去中心交易场所。因为 AMM 算法所带来的 Liquidity 来为任何交易者提供兑换。但是价格会由于 Pool 的深度来决定滑点的大小。例如 Uniswap SushiSwap、Balancer 等。
- 存款协议。一些具有较大比较集中深度的协议，提供的交换服务。例如 Curve 等。

- 特例，使用 ETH 进行 Swap 的时候 余额需要减少当前 Gas Price * 210000 ，来避免用户超出可使用的额度。

- #### UniSwap 

  目前最大的去中心化 AMM 协议。基于 AMM 自动做市商协议。

  - #### 流通池（liquidity ）

    项目为用户为项目提供流通深度，用户就可以再不同的代币中进行交易，用户将资产转入相应的交易 Pair 中。获得交易中的交易手续费。

  - #### 无常损失（Impermanent loss）

    用户向平台提供流动性，存在亏损风险，被称为无常损失。 由于自动化做市商 (AMM) 的设计机制，可能会导致在外部价格变化时，如果没有套利者的介入，AMM 平台不会自动变动价格。而这时候，外部套利者会借助于平台跟外部交易所之间的价差从中获得利润。而与此同时，为平台提供流动性的用户，却遭受了损失。

  - #### 流通性挖矿 

    用户将资产提供给市场。可以获得平台代币的奖励。用户承受了资产价格损失。也锁定了代币的流通性，但是获得了收益。除开分享了平台的手续费之外，他们还可以获得平台的代币。

  - #### AMM 

    - X*Y=K   其中 X Y 是代币的数量。 K 是常数。交易 liquidity 费用 1%。
    - 举例 初始状态 ETH=1，000 个，MKR=100 个。那么 k=100,000。  MKR 的价格是 10ETH。
    - 这时候使用 100 ETH 购买 MKR。 ETH=1000+100-1=1099。那么 MRK=100,000/1099=90.99  那么支出 9.01 个 MKR。那么每个 MKR 的价格为 10.98。那么此时 K=1100*90.99=100089.0
    - 由于每次手续会添加到 Liquidity 中 K 会逐渐变大。

- #### 0x API

  0x 还能够通过桥接合约访问 Kyber、Oasis、Uniswap 等去中心化交易所的链上流动性资产。开发者可以依据流动性桥接合约选择最适合的模型，并通过最少的代码修改为他们的用户找到最小的价差。例如，买方在 0x 上填写的订单既可以是 0x 原生订单也可以是 Kyber 等去中心化交易所的订单。流动性桥接合约为 DeFi 开发者可以鱼和熊掌兼得，既可以在 0x 中以更小的价差获得热门交易对的流动性，也可以通过多个链上去中心化交易获得长尾代币的流动性。

- #### 1inch

  1inch.exchange 是一款以太坊網絡上的 DEX 聚合器，它通過集成 Airswap、Uniswap、Uniswap2、Kyber、 Curve、Oasis、0x 、dForce Swap 等其他 DEX 協議的流通性，能幫用戶找到最佳的交易路徑（低滑點、低延遲）。

- Swap 流程

  - 支付 Token 种类，显示当前 Token 余额。
  - 解锁钱包 Token ，限量解锁和无上限解锁 approve 给合约。实现需要查看该地址已经 approve 数量，超出当前输入值，显示解锁按钮。当前交易按钮为 Unlock 状态。
  - 手动输入不能，超出钱包最大值。如果是支付代币是 ETH，最大可用余额需要减去 fast gas price*gas limit。避免因为 Gas 路费不足造成交易失败。
  - 搜索 Token 功能同转账。
  -  交易选择。同时向 uniswap 0x 进行询价，对比获得 Token*Price - Gas fee 的结果。选择结果大的展示。

## 红包

- #### Token 红包

  - 支持标准的 erc20 支持

- #### 收藏品红包

## 发售功能

- #### Token 发售

- #### 收藏品发售

## 法币购买

- #### Transak

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

