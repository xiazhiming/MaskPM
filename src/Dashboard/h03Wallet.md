---
title: Wallet
---


### 需求目标





## 钱包类型

- #### Ether 钱包

- #### Polkadot 钱包

- #### loopring 二层网络钱包

  
  
## 常见合约



### ERC20

ERC-20是同质化代币(Fungible token，缩写为FT)，所有的代币单位价值都是一样的且可以分割。

ERC-20 代币都能兼容以太坊钱包以及支持以太币的钱包，交易所可以很容易地整合这些代币，绝大多数ICO都使用了ERC-20代币，最大支持精度为小数点18位。

ERC20标准规范，该标准具有指定的6个函数和2个事件接口。



- #### 合约创建

  - name 代币名称
  - Symbol 代币符号
  - decimals 代币精度 最大支持18位。
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



[ERC20合约地址](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)



 - #### 事件规范

   - `Transfer(address indexed _from, address indexed _to, uint256 _value)` - 转移代币时触发
   - `Approval(address indexed _owner, address indexed _spender, uint256 _value)` - 调用批准功能时触发。
   - 

- #### 扩展功能

  - 可以扩展ERC20标准只是如何为新用例定义合同的一个示例。还有例如当下流行的功能是可增发，可销毁，可锁仓等。

### ERC721

- ERC721同样是一个代币标准，ERC721官方简要解释是Non-Fungible Tokens，简写为NFTs，多翻译为非同质代币。也就意味着每个Token都是不一样的，都有自己的唯一性和独特价值，当然这也就意味着它们是不可分割的，也同时具有了可追踪性。既是优点也是缺点，具有不可分割的性质。正是这份特性让 ERC721 代币流通收到阻碍。

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

[ERC721合约地址](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)  

  

### ERC1155

ERC-1155用了一种新的方式来定义代币，物品将被储存的一个中央智能合约，并占用极少的空间仅用来互相区分。任何物品Token都可以被合并打包成一个"Token包"，Token包也有自己独立的id（减少区块链上大量的冗余字节码）

我们类比一下暗黑中的镶钻机制，一件有两个孔的武器，和两个完美的宝石，这是三个token，当我们把这两个宝石镶嵌进武器中，就变成了一个token包——也就是新的武器。同时，这个机制下也可以使得复杂交易简单化，比如A和B想交易20个物品，如果是一个个交易需要进行20次交易，如果可以将20个物品token打包，只需进行一笔交易后在解包，效率和体验就提升了很多。

[ERC1155合约地址](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md)  

还有更多有趣的合约，可以查看譬如 ERC998 之类在不断的改进现有的流程和适合未来的发展。

[Ether 合约列表](https://github.com/ethereum/EIPs/tree/master/EIPS)

## 创建钱包

- #### 助记词

- #### 加密 JSON

- #### 私钥



## 导入钱包

- #### 助记词

- #### 加密 JSON

- #### 私钥

  

## 插件钱包

- #### MetaMask 钱包

- #### WalletConnect 钱包

- #### Polkadot js 钱包

  



## Toolbar

- #### 新增钱包

- #### 备份钱包

- #### 删除钱包

- #### 链接钱包

- #### 解除链接钱包

  

## 转账

- #### Token 转账

- #### 收藏品转账

## Swap

## 红包

## 发售功能

## 法币购买

## 转账记录

## 前台钱包

