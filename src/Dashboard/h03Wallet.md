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



## 3. 公共模块

- #### 余额显示

  - ERC20 余额显示该钱包所有余额
  - ETH 余额显示。显示问题符号。划过显示：**Transaction costs were subtracted from your ETH balance. This is not your full wallet ETH balance.**  算法规则: ETH 的总额-

- #### 转账 Gas fee

  - Set Gas Fee 默认显示 [Gas now](https://www.gasnow.org/) 中，Standard 和 Fast gas price。以及自定义和相应的计算。

  - Gas Fee 的计算。Gas price * Gas Limit = 总共需要消耗的 ETH 数量。计算价格再*当前 ETH 的价格。

- #### Advanced Date

  - 点击显示 Memo 字段。这个是 区块中的扩展字段。可以备注或者用作验证等。

- #### Unlock 解锁余额

- 合约交互前，需要将用户的使用的资产对合约进行 Approve。ETH 资产除外。Approve 分为两类：

  - 限定量 Approve ，用户指定合约最多使用该钱包该资产使用额度。用户可以重复多次进行 Appove 来调整对于合约的授信额度。在授信额度内，合约可以不经过用户的确定使用该钱包该类资产的授信额度。
  - 过度 Approve ，即用户可以进行合约对该钱包，无限额度授予。用户可以后期重新调整 Appove 的值。

  - 限定解锁，
  - 无限量解锁

- #### 搜索/添加 ERC20 Token

  - 展示 Token 的图标，symbol、Token name 以及用户当前钱包的余额。以及对应的价值。

  - 在列表中可以进行 sybmol 、Token name 模糊搜索。判断地址位精确查询。

  - 搜索结果未在常用列表中展示，显示 Add 按钮。已添加未在常用列表中的 Token 显示 Remove 按钮

- #### 搜索/添加 ERC721 Token

  - 目前支持 ERC721 合约。获取常用列表前 100。[查询地址](https://etherscan.io/tokens-nft) 点击弹出 Search Coollections Contact 弹窗。
- Search Coollections Contact 搜索使用 Symbol、和 Token 模糊收缩。合约地址使用精确查找。
  
  - 非常用列表中 ERC721，在搜索出结果手显示 Add 和 Remove 功能。添加到用户的列表中。 


## 3.1 创建钱包
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
  



## 3.2 Toolbar

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
  
- #### 最近交易

  - 显示当前钱包最近的交易情况。最多显示 20 笔，超出隐藏最早记录。
  - 可以清除交易记录
  - 在当前钱包发起交易的时候，显示，无交易时候不显示。

- #### 网络支持提示

  - 测试版本可以提供测试人员非主网测试功能。
  - 发布的正式版本不支持非主网之外的网络。
  - 后续需要判定其他公链网络是否有该功能。
  - ETH 网络仅提示，如果是 Dot 点击提供网络切换服务。
  
- #### 网络不可用提示

  - 该钱包在该网络中当前页面无法实现当前功能。

## 3.3 资产

- #### 便捷操作栏

  - 钱包 ICO 显示账户总值，目前仅统计用户的钱包资产。后续可以参考 [debank.com ]() ，或者直接能调取他们的 API 查询钱包中其他 Lp 的资产信息。在 Tab 中新增一项 Mortgage assets。
  - Send 直接跳转至 Transfer 页面。
  - Buy 直接跳转至法币购买页面。
  - Swap 直接跳转至兑换页面。
  - Receive 点击弹出收款二维码。
  
- ####  Token 资产

  - 显示资产 Symbol icon。资产数量默认 6 位。
  - Price 价格高于 1 美金小数点后显示 2 位。小于 1 美金。按 6 位精度显示。
  - Value 精度为 2。
  - 操作显示为 Send 和 Swap 。点击 Send 预填该信息至 Transfer 页面。 点击 Swap 预填该信息至 Swap 页面。
  - 页面展示为 50，超出分页。资产按 Value 从大到小排列。

- #### Collections 资产

  - 显示账户所有的 Collections 资产，排序为单个合约数量多到少排列。默认显示 20 个，超出分页。
  - 支持搜索合约地址和 ID 和名称。

## 3.4 转账

- #### Token 转账

  - 收款地址，根据当前钱包的公链的链接进行地址规则验证。
    - 以太坊钱包地址验证：如不符合现实**地址不正确**
      - 判断地址非空和是否 0x 开头。
      - 判断 0x 后是否为长度为 40 位 16 进制字符。
      - 判断 后面 40 位字符能否转化为 10 进制数。
      
    - Polkadot （及平行链）使用 SS58 地址格式。

    - 发送 Token 类型，默认显示 ETH。点击弹出搜索 Token 界面。

    - 搜索 ERC20 Token。

    - Gas Fee 显示需要消耗的费用总量。默认取用 Gas Now 中位 gas 为基准。显示 Fee 设置按钮，点击弹出 Set Gas Fee modal。

      

- Advanced 数据。见公共模块
  
- #### 收藏品转账 （ERC721 及兼容 ERC721 的合约）

  - 收款地址，根据当前钱包的公链的链接进行地址规则验证。
  
  - Token 类型，见公共模块中 ERC721 Token。
  
  - Gas Fee 见公共模块。
  
  - Advanced 见公共模块。
  
    

## 3.5 Swap

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

- ### Swap 流程

  - 支付 Token 种类，显示当前 Token 余额。
  - 解锁钱包 Token ，限量解锁和无上限解锁 approve 给合约。实现需要查看该地址已经 approve 数量，超出当前输入值，显示解锁按钮。当前交易按钮为 Unlock 状态。
  - 手动输入不能，超出钱包最大值。如果是支付代币是 ETH，最大可用余额需要减去 fast gas price*gas limit。避免因为 Gas 路费不足造成交易失败。
  - 搜索 Token 功能同转账。
  -  交易选择。同时向 uniswap 0x 进行询价，对比获得 Token*Price - Gas fee 的结果。选择结果大的展示。





## 3.6 红包

- #### Token 红包

  - Arrached Message 祝福语长度不超过 64 个字符。超出字符不显示且后续输入无效。
  - Split Mode  分为随机和均等两种类型。
  - Share 前台输入限制为 1000，超出显示 1000。
  - Amount Per Share  Share*Amount Per Share 应该小于用户钱包余额。ETH 作为红包时候，钱包的余额需要那总金额-红包合约 Gas Limit * Gas now 中 Gas Price 中 Rapid 档位。并显示
  - 支持标准的 erc20 合约和 ETH。后续支出其他公链和对应合约资产。Search Token 弹出同转账规则。
  - Transaction fee 同转账规则。
  - UnlockToken 查询当前钱包该 Token 的数量与输入的 Total。或者进行无限制 Unlcock。 本地钱包在有效期内直接进行 Unlock。安装状态为 Unlocking。插件钱包显示合约交互弹窗。提醒用户在插件钱包中进行操作。插件钱包取消操作。弹窗饭庄解锁界面，提示插件钱包已取消解锁操作。解锁成功后，按钮进入 Send 状态。
  - Send Token ，点击后显示二次确认信息。继续进行 Send 操作。本地钱包在密码有效期内直接进行操作。密码有效期过后，弹出密码弹窗。插件钱包执行取消操作，loading 弹窗退回只二次确认页面。并提示插件钱包已取消 Send 操作。发送成功，显示成功消息后并关闭 loading 弹窗。进入到分享状态。

- #### 收藏品红包

  - Arrached Message 祝福语长度不超过 64 个字符。超出字符不显示且后续输入无效。
  - Contract address  要求 ERC721 合约公共模块。
  - 显示列表为 12 个，超出后显示滑动条。NFT 卡片显示名称，划过显示删除按钮。最后一个卡片为添加按钮。最多选择 50 NFT。
    - 添加按钮显示当前合约的所有 NFT Token。计算数量不能超出 20 超出后 选择框禁用。
  - Unlock 当前 ERC721 合约。内置钱包直接 approve 。按钮显示 Unlocking 和 loading 动画。 第三方钱包，显示 Contract interaction ，收到结果后关闭弹窗。 结果为 1.解锁成功，2.解锁失败。
  - gas 设置同公共模块。
  - Send 需要进行二次确认。内置本地钱包有效期内直接在二次确认后进行发送。Send 按钮进入 loading 状态。插件钱包。显示 loading 弹窗。外置钱包取消交易退回确认状态，并显示插件钱包取消提示。可以继续二次 Send 。失败后关闭 loading 弹窗。退回确认并显示发送失败，请重试。发送成功后进入分享状态。

- #### 分享

  - Twitter 分享，点击后新开窗口并打开前台 Maskbook:Compose 并默认选中当前红包。

  - Facebook 分享，点击后新开窗口并打开前台 Maskbook:Compose 并默认选中当前红包。

  - 单独分享。生成短链接地址供用户转发。其他用户可以进行点击查看。

    - 查看用户没有安装 Mask，领取按钮修改为下载 Mask 按钮。
    - 查看用户安装了 Mask，没有安装钱包，显示连接钱包按钮状态。前台[点击链接钱包流程](https://www.figma.com/file/gVkQ67y285b4FXVV1KPThN/Twitter?node-id=2235%3A0)。
    - 查看用户安装了 Mask，且安装了钱包。
      - 判断用户钱包网络是否正确。正确，显示提取按钮。不正确，显示仅支持 $$ 网络。

  - 用户领取

    - 钱包余额不够该次交易，显示交易费用不够。

    - 本地钱包 显示 loading 直接领取。

    - 插件钱包。显示 loading ，并提示请在钱包允许，并等待。

      - 插件钱包取消，显示插件钱包已取消。

      - 插件钱包确认，等待回传消息
      
        





## 3.7 市场发售

- #### Token 发售

  - 发售标题长度不超过 64 个字符。超出字符不显示且后续输入无效。

  - Amount 最多显示 6 位小数。点击 Balance 余额数字，填充至 Amount 中。

  - Input  默认选择 Select token ，默认加载 ERC20 Token。搜索同钱包公共模块。

  - To 用户想要兑换的 Token，默认显示 ETH。可以添加和减少支持的兑换列表。

  - 兑换列表优先显示，ETH、USDT、USDC、DAI。可以进行 ERC20 Token 搜索支持。最多支持兑换 6 种 Token。搜索 ERC20 参考钱包公共模块。

  - 点击 Unlock 进行合约解锁资产。显示解锁方式。详情见钱包公共模块。

  - 钱包发生合约交互，Toolbar 显示当前钱包 Pending 状态。

  - Swap Ration 显示 To 中选择的资产。输入框精度。该 Token 精度大于等于 12，最高输入 12 位。该 Token 精度小于 12 位，显示输入精度等于该 Token 合约精度。超出输入不显示且超出部分无效。

  - 交易费用计算，兑换的的 Token 种类越多 Gas limit 越多。取 Gas 中中位 Gas Prise。来进行计算价格。

  - Send 点击后显示交易清单。点击清单中 Send 进行发送。

    - 本地钱包关闭确认清单。 页面 Send 按钮进入 loading 状态。Toolbar 中 显示最近合约交易状态。

    - 插件钱包进行确认，显示合约交互弹窗。插件钱包取消交易，弹窗回退至交易发送发送清单页面，并显示插件取消信息。

- #### 收藏品发售

  - 发售标题长度不超过 64 个字符。超出字符不显示且后续输入无效。
  - Contract Address 点击弹出搜索，规则同钱包公共模块搜索 ERC721 合约。
  - Price unit 下拉选择 ETH、USDT、USDC、DAI。可以进行 ERC20 Token 搜索支持。最多支持兑换 6 种 Token。搜索 ERC20 参考钱包公共模块。
  - Token 列表显示添加按钮，显示弹出当前选择的合约中的 Collections 。价格不能为空，输入精度，默认不高于 12 位。价格 Token 精度低于 12 位，最高按价格 Token 合约单位精度。
  - 显示 4 行，超出显示滑动条。
  - 售出价格不能为空。在 Send 按钮上报错，并禁用按钮。
  - 交易费用计算，查看钱包公共模块 转账 Gas fee。
  - Collections 最高单次发售 50 个。  
  - 点击 Send 显示发送清单，点击 Send 后发送。
    - 本地钱包在密码有效期内，进行交易发送，toolbar 显示交易状态。
    - 插件钱包，显示弹窗。提示用户进行允许操作。插件钱包取消，弹窗回退至确认清单页面。并显示插件取消操作提示。

- #### 分享发售

  - 同红包分享规则




## 3.8 法币购买

- #### Transak





## 3.9 历史记录

- #### Back 

  - 从其他页面的 History 按钮点击而来。显示 Back 按钮。
  - 从 History 点击而来，不显示 Back 按钮。 

- #### ALL 转账记录

  - 当前地址所有的交易行为。每页 50 条。超出后分页。
  - 没有记录显示为空
  - 合约交互类型
    - Stake, Unstake, Deposit, Withdraw, Send, Swap, Approve, Add liquidity , Remove Liquidity, Vote, Remove vote...
    - Mask 发行的合约，Red Packet，ITO（Markets）合约。
  - Value 显示发生交易的数量，和发送 Token Symbol。小于 1，显示 6 位精度，大于 1，显示 2 位精度。
  - 时间精确到分即可。
  - 钱包为 ETH 接收方 点击跳转至 etherscan.io 相应交易记录。
  - out 类型显示为黄色图标。in 类型显示为绿色图标。out 和 in 都存在的合约显示黄色图标。

- #### Buy 记录

  - 当前地址所有的交易行为。每页 50 条。超出后分页。
  - 没有记录显示为空
  - 购买 Types 为购买的 Token symbol。并显示 icon。
  - Amount 大于 1，显示精度为 2，小于 1，显示为 6 位精度。
  - Total value 取 etherscan 上的价值，因为涉及到一个快照价格的问题。显示精度为 2。
  - Time 显示到分。
  - Tx 显示购买记录的交易记录。点击后新开跳转。

- #### Swap 记录

  - Input 显示支出 Token。 Get 显示获得 Token。大于 1 显示 2 位精度，小于 1 显示 6 位精度。
  - Total value 显示当时交易的价值。
  - Time 显示交易时间
  - Tx 显示交易 Hash 链接，点击跳转 etherscan。

- #### 红包记录

  - Token 红包
    - 显示图标，显示祝福语。超出一行显示... 。显示 Token 总额，显示结束时间。
    - 未结束显示 share 按钮。分享同红包分享步骤。
    - 已结束显示 withdarw 按钮，点击显示提现清单和 Gas 调节。
    - Gas fee 见钱包公共模块
  - 收藏品红包
    - 显示图标，显示祝福语。超出一行显示... 。显示 Token 总额，显示结束时间。
    - 未结束显示 share 按钮。分享同红包分享步骤。
    - 已结束显示 withdarw 按钮，点击显示提现清单和 Gas 调节。
    - Gas fee 见钱包公共模块

- #### Markets 记录

  - 默认显示 20 条。超出分页。
  
- Token 发售
    - 显示发售 Token 图标，显示发售标题。超出一行显示... 。显示 Token 总额，显示开始结束时间。
    - 显示售出情况，
    - 未结束显示 share 按钮。分享同 Maekets 分享步骤。
    - 已结束显示 withdarw 按钮，点击显示提现清单和 Gas 调节。
    - Gas fee 见钱包公共模块
  - 收藏品 发售
    - 显示发售 Collectible 图标，显示发售标题。超出一行显示... 。显示 Token 总额，显示开始结束时间。
    - 显示售出情况，
    - 未结束显示 share 按钮。分享同 Maekets 分享步骤。
    - 已结束显示 withdarw 按钮，点击显示提现清单和 Gas 调节。
    - Gas fee 见钱包公共模块
  
  
