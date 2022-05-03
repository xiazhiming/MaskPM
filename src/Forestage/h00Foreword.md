# 区块链入门知识

## 公链

1. ### BTC 的诞生

   - 起源：08 年全球爆发金融危机，同年 11 月 1 日，一个自称中本聪（ Satoshi Nakamoto）的人在 P2P foundation 网站上发表了比特币的白皮书，《比特币：一种点对点的电子现金系统》2009 年 1 月 3 日，比特币创世区块诞生。点对点传输意味着一个去中心化的支付系统。

2. 比特币的含义：与所有的货币不同，比特币不依靠任何货币机构进行发行，根据初始的设定和算法，通过大量的计算。比特币的经济流转体系使用整个 P2P 网络中众多节点构成的分布式链式数据库来进行记录所有的交易行为。并使用密码学确保货币流通的各个环节的安全。基于密码学之上能够真实的被转移和支付。

3. 总量有限约为 2100 万枚，其中不少一部分早期挖矿者因为各种问题丢失私钥和硬盘，无法找回。2009 年，比特币诞生的时候，每个区块的奖励是 50 比特币奖励。当出块奖励达到当前总量的一半后减产 50%，下一次减产在产生上一次产量的一半后减产。

4. 链上账户的生成无需成本，一定情况下保证了较强的隐匿性。

5. Hash 指针，除了第一个 Block 外，每一个区块的 Prev_hash 都是前一个 BLock 的 Hash，如果某一个节点需要修改住主链上的 Block 的交易，势必改变当前区块的 Hash，那么他的下一 block 将无法通过 Prev_hash 来找到前面一个 block。

6. 比特币采用的算法为 SHA-256，任意长度的消息，SHA256 都会产生一个 256 位的哈希值，这个摘要相当于是个长度为 32 字节的数组。通常有一个长度 64 的十六进制自字符表示。其中 1 个字节等于 8 位。一个十六进制的字符的长度为 4 位。

7. Merkle Tree 另一个字段 `merkleroot` 其实就是一个 [Merkle 树](https://en.wikipedia.org/wiki/Merkle_tree) 的根节点，它其实是一种使用哈希指针连接的数据结构；虽然 Merkle 树有叶节点和非叶节点，但是它只有叶节点会存储数据，所有的非叶结点都是用于验证数据完整性的哈希。

8. UTXO 模型 作为最早出现的加密货币，Bitcoin 就采用了 UTXO 模型作为其底层存储的数据结构，其全称为 *Unspent Transaction output*，也就是未被使用的交易输出。

   在 Bitcoin 以及其他使用 UTXO 模型的加密货币中，某一个『账户』中的余额并不是由一个数字表示的，而是由当前区块链网络中所有跟当前『账户』有关的 UTXO 组成的。

9. 类比特币，比如 LTC、BCH、BSV、BCD... 直接硬分叉或者在比特币的源码上进行修改，重建一条新的链条。

10. 比特币的的速度非常的慢，10 分钟出块，每一个最基本的比特币交易为 250b，1M=1024kb=1024000/250/600=6.6 TPS。闪电网络是去中心化网络，闪电网络是去中心化网络，基于多签钱包，来进行小额快速转账。

11. btc 转账模型，转账根据币龄，转账大小。小于 0.01btc，需要支付 0.00001btc，币龄大，且转账小于 10000 字节可以免费转账。





1. ### Etherum

   前言：ETH 最初的代币是 ETC 经典， The Dao 通过 ICO 私募当时 ETC，由于出现合约问题漏洞，转移了 3600 万枚 ETC，后来 V 神提出硬分叉，并且得到了 90%的算力支持。从而建立的新的 ETH。

   

   - Etherum 在 BTC 的基础上引入了账户余额模型，创建使用 solidity 语言的 EVM 虚拟机。EVM 虚拟机 是一个完全隔离外部通讯的沙盒。在以以太坊中运行的智能合约不允许访问外部网络。外部文件系统，在其进行。智能合约之间的访问也是受到限制的。但是虚拟机的引入了无限的可能。包括后面的 erc20、erc721、erc1155 等。
   - 以太坊智能合约和提案 https://github.com/ethereum/EIPs/tree/master/EIPS
   - 合约地址是由合约中的方法控制的，合约设定有管理员地址，那么管理员就有管理这个合约的能力。合约的常用调用中，使用 eth 原生资产是不需要 approve 的。使用合约中的资产和其他合约进行交互的时候需要进行 approve 操作的。例如你在 uniswap 上进行 eth、dai 交换 usdc。使用 eth 可以直接进行购买。使用 dai 购买的话需要进行 approve uniswap 的合约对你账户中的 Dai 进行授权使用。
   - 通常授权分为两种，限定量授权和无限授权。在交易的时候，我需要使用 100 个 dai 交互哪

   

   - 外部账户、也就是用户生成的由公私钥来控制的账户。

   - Etherum account 每一个账户都包含四个字段， nonce，ether_balance,contact_code.storage.

   - Nonce Account 每使用 nonce 签发并发送一笔交易。都会将其+1，交易的结果是 Account 中的 ether_balance 的变动，没有 UTXO 模型，所以引入了 nonce 来解决重放攻击。

   - contract_code 中的代码，所有的合约在网络中都能够相应其他账户的请求和消息并提供一些服务。

     

   - 合约账户 ，目前最多的合约账户也就是 ERC20 合约，我们平常所说的 Token 就是 Ethereum 上的合约，这些合约其实也是 Ethereum 上的账户。合约账户是由合约中的代码控制的。

   - 新的 Account 模型，鄙弃了原先的 UTXT 记账模型，优化了存储结构，利用 nonce 来避免重放攻击。新的交易模型，来维护整个网络的安全。

   - Gas price 与 Gas limit 

     - Gas price 单位换算，wei 为最小单位 ，通常我们在转账中使用的是 Gwei。当前的进行交易实际上是矿工挑选高的的交易费的交易进行广播打包。具体的 gas 其实可以参考 gas.now。来进行参考。Gas Pirce 给得太低，矿工不会打包，最后这笔交易会堵塞你的 nonce。让你后面的交易无法发出。gas price 给得高，那么矿工会优先打包你的交易。
     - ![img](https://decenter.org/storage/posts/images/hq3e09q3rXWco1edsiH4Gimd5H4lwg2KtCONatly.jpeg)

   - Gas limit 用户愿意为某个操作付出的最大的 Gas 的量，最少是 21000。例如某个用户需要进行合约操作，需要使用 50000 gas limit ，当前的 Gas price 是 20 Gwei，那么用户需要付出 20000000000 wei*50000=1000000000000000wei=0.001ETH。Gas limit 设置过低，当前交易会因为 gas 不足的错误而被取消。gas limit 应当比当前消耗的 gas 高才行，消耗剩余的 gas 会被退回。

   

- #### EOS

  - EOS 是 Block.One 公司正在研发的一个区块链底层公链系统，目的是解决现有的区块链应用性能低、安全性差、开发难度高以及过度依赖手续费的问题，实现分布式应用的性能扩展。EOS 提供帐户，身份验证，数据库，异步通信以及在数以万计的 CPU 或群集上的程序调度。该技术的最终形式是一个区块链体系架构，该区块链每秒可以支持数百万个交易，同时普通用户无需支付使用费用。

  - Dpos （股份授权证明）可扩展性、安全性、只能合约开发，并极大的改善了开发着的体验。使用的是 WASM—LLVM 的架构。

  - 整个系统在与当时 Etherum Gas 高昂的情况下，的确是一个非常好的解决方案。但是使用新的思路来解决当时的问题。但是没有 gas，但是引入了 CPU、NET 和 RAM。最后在鲸鱼的游戏中，占领 RAM、CPU 使得项目方在 EOS 中非常的难用。最后沦落成为菠菜的乐园。作为整个区块链融资非常多的一个天王级的明星项目。有较强的中心化 jiedian

    

- XRP

- ### 交易所支撑的链条

  - #### 火币的 HECO

    - 采用 HPoS 共识机制，具有交易成本低、交易延时低、交易并发高等特点； 支持最大的验证人节点数量是 21 个。
    - TPS：500+  出块时间：3s

  - #### 币安的 BSC

    - 基于 Tendermint 共识机制，兼容 EVM。[Binance Smart Contract whitepaper](https://github.com/binance-chain/whitepaper/blob/eed03955318ed75e01de78423e6ed5836713f2d1/%E5%B8%81%E5%AE%89%E6%99%BA%E8%83%BD%E9%93%BE.md)

  - #### OK 的 OKchain

    - 由OKex 交易所支持的去中心化网络

  - #### Avalanche Network
  
  - ####  Near
  
  - #### Solana


- #### 跨链

  - Polkadot

    Polkadot 是另一个由强大的技术团队领衔，并致力于解决区块链间交互性的项目。Polkadot 由 Parity 开发，后者是 Web3 基金会的成员。他们因以太坊客户端 Parity （由 Rust 语言编写）而闻名遐迩。

    

    ### 共识

    正如 Cosmos 所做的那样，Polkadot 将共识架构与状态程序分离开来。据其白皮书所述，Polkadot 的共识引擎实际上受到了 Tendermint 和 HoneyBadgerBFT 的启发。

    然而，在最近的 Youtube 视频中，Polkadot 团队提到他们计划使用 Aurand 和 Tendermint for PBFT 的混合共识机制。Aurand 允许随机选择验证人出块，而不需要 2/3 成员的共识。混合共识引擎的设计使得共识形成更快，但是，如果验证人存在恶意行为，区块也有可能被回收。

    ## Polkadot 的互操作性

    Cosmos 和 Polkadot 实现交互的策略也十分相似。Polkadot 网络有个「Relay Chain」，是一个功能类似于 Cosmos Hub 的中心连接器。它也有连接到「Relay Chain」的区块链，这些区块链被称为 Parachain。Cosmos Zone 和 Parachain 的用途相同。Polkadot 还将配备连接实时区块链的 Bridge，其也跟 Cosmos Peg Zone 的作用类似。

    ### Parachain

    Parachain 和 Cosmos Zone 都使用链中继来实现区块链间的交互。但在具体实现上两者有所不同。最大的区别在于如何与链相连及实现安全共享。在 Polkadot 中，网络安全可以汇集和共享。这就意味着，单一的链可以利用集体安全性来增强自身的吸引力和信任度，而不需要从零开始。

    这个方案是通过绑定 Dots 以创建新的 Parachain，或者取消 Dots 绑定以移除无用的 Parachain 来实现的。而 Cosmos 不要求绑定 Atom 来创建一条新链，他们用治理的方法决定中央的 Cosmos Hub 是否应该连接到 Cosmos Zone。

    ### Bridges

    Bridge 和 Peg Zone 在各自网络中的作用相同。它们都可以来连接到实时的区块链网络，例如以太坊主网。Cosmos 和 Polkadot 都希望在启动时能够快速地连接到以太坊主网。

    ### 实现两条链之间的互操作

    如前所述，第一条与 Cosmos Hub 交互的链是 Ethermint。很有可能，Polkadot 也会创建一条类似 Ethermint 的链。对此，Polkadot 团队应该能够轻松应对，毕竟他们在以太坊 Parity 客户端上积累了相当多的经验。

    ### Polkadot 网络

    Polkadot 网络是 PoS 证明的区块链，其原生代币是「Dots」。Dots 可以提供治理，以及在理论规则上激励代币持有人诚实行事。网络的中心部分是「Relay Chain」，其作用类似于 Cosmos Hub 在 Cosmos 网络中的功能。Polkadot 网络拥有四种主要股权利益人：验证人，提名人，校对人和渔夫。Polkadot 也会通过「slashing」来惩罚作恶行为。

    Polkadot 上的验证人和 Cosmos 中的验证人作用相同，提名人和 Cosmos 中的委托人类似。下面的图表来自 Polkadot 白皮书，显示了每个股权利益人之间如何相互关联。

    ![全面解析 Cosmos、Polkadot 两大天王级跨链项目](https://img.chainnews.com/material/images/eefb43a1ab13505e1316fc1225a05e09.jpg-article)

    验证人并不会维护所有 Parachain 上完全同步的数据库，因为存储的数据量过于庞大。因此，验证人把存储和验证新的 Parachain 区块的任务交给第三方，我们称之为「校对人」。校对人的主要任务是生成有效的 Parachain 区块。他们必须维护一个完整节点。校对人还需对未封装的块进行零知识证明，并将其提供给一个或多个负责向 Relay Chain 提交 Parachain 区块的验证人。校对人和验证人会从这些任务中收取一定的费用。

    渔夫会像自由赏金猎人一样，寻求大笔的奖励。可以预料的是，仅仅他们的存在就能使作恶行为极少发生。因为验证人和校对人都知道，一旦他们作恶就会被渔夫抓到并接受惩罚。渔夫会在 Polkadot 网络上发送验证人或校对人的任何非法活动证据。

    治理分为几个层次，主要是在网络上通过 Dots 投票。Polkadot 团队还计划设立一个 12-24 个账户组成的理事会，对没有得到股权利益人重视的提案进行投票。这是一个对低选民投票率提案的备用解决方案。他们还承诺加入自适应仲裁偏差，并为选票赋予不同的投票权重指标，例如为长期持有人或验证人，甚至是长期为网络做出贡献的 dApp 开发团队赋予更多的投票权重。但是，目前这些想法只停留在概念阶段。

    ### 主网启动的当前状态

    Polkadot 团队的第一个概念证明（proof of concept）已经能够验证区块，并实现状态转换。他们已经实现通过测试网络发送 Dots 代币。概念证明是用 Rust 写成的，之后将支持 WebAssembly。他们计划将在 2019 年 Q3 发布主网，并一直表示他们正在努力实现这一目标。

    ## Polkadot 上的开发构建

    ### Substrate

    Substrate 是一个用于构建区块链的技术堆栈。它与 Cosmos 中 Cosmos SDK 的作用十分相似。Polkadot 网络建立在 Substrate 之上，就像 Cosmos 网络建立在 Cosmos SDK 之上。你并不用担心共识或网络性，而只需要专注于区块链应用本身。

    Substrate 是用 Rust 写成的，但是状态机的核心功能将会被编译成 WebAssembly。它可以直接使用编译的 Rust 代码，或者通过 WebAssembly 翻译器运行。详见下图。

    ![全面解析 Cosmos、Polkadot 两大天王级跨链项目](https://img.chainnews.com/material/images/ac615d9c076ab5fd3573b7eb00fb63be.jpg-article)

    ### 在 Polkadot 上创建 dApp

    你可以在支持智能合约的 Parachain 上构建 dApp。这一点也类似于 Cosmos，因为 Polkadot 的 Relay Chain 和 Cosmos Hub 都不支持智能合约，但它们都可以连接到支持智能合约的链。

  - Cosmos

    自 2014 年 Tendermint 发布以来，Cosmos 团队一直致力于实现区块链互操作性。Tendermint 是一个拜占庭容错的共识引擎，并配备了点对点的 Gossip 协议。

    Cosmos 团队正在构建基于 Tendermint 的 Cosmos 网络。Tendermint 和 Cosmos 都隶属于 InterChain 基金会。下面两张图将简单解释他们是如何设计网络的。

    ![全面解析 Cosmos、Polkadot 两大天王级跨链项目](https://img.chainnews.com/material/images/14f69ecc7a5f5706ca8b686fb7317e44.jpg-article)

    ![全面解析 Cosmos、Polkadot 两大天王级跨链项目](https://img.chainnews.com/material/images/d4b3494506b310ce599823e82de9ada6.jpg-article)

    ## 技术设计和协议

    ### Tendermint （共识和网络）

    Tendermint 是一种实用拜占庭容错（PBFT）状态机。它需要一组已知的验证人达成共识而出块。在 Cosmos 网络中，至少需要 2/3 的验证人达成共识。假设不到 1/3 的验证人是作恶者，则网络永远不会分叉，因为验证人不能在相同高度提交冲突块。这种策略正是根源于 Tendermint 中安全性优先于活跃度的原则。

    ### 应用区块链接口（ABCI）

    ABCI 是定义了复制引擎（Tendermint）和状态机（区块链）两者边界的接口。ABCI 是区块链状态更新的唯一通道，而只有 Tendermint 才具有区块链状态更改功能。这种设计是一种非常棒的安全策略，因为改变状态只有一个接入通道。

    下图解释了 Tendermint 的堆栈设计，展现了在点对点网络中节点的连接方式，以及每个节点的组件。

    ![全面解析 Cosmos、Polkadot 两大天王级跨链项目](https://img.chainnews.com/material/images/7d24585b1349ce8c14276bde1fd17f38.jpg-article)

    ## Cosmos 的交互性

    ### 链间通信（IBC）

    Cosmos 网络可以基于 IBC 协议实现链链交互功能。以 Cosmos 网络为中心枢纽，网络中的链通过 IBC 进行通信。区块链以分支的形式连接到 Cosmos Hub，网络中的分支又被成为「Zone」，如下图所示。

    ![全面解析 Cosmos、Polkadot 两大天王级跨链项目](https://img.chainnews.com/material/images/32161769e9f0a9b7f5b183f79f528aa9.jpg-article)

    IBC 的技术性术语又叫「Chain Relay」。Chain Relay 允许区块链读取和验证其他链上的事件。例如，A 链上的智能合约想知道 B 链上发生的事件，则 B 链上的智能合约需要采用 A 链的块头，并验证其是否达成共识以及最终性。

    本质地说，Cosmos 正在构建一个网络体系，其中新区块链可以轻易创建，并从创立之初就可以通过 Chain Relay 进行交互。每条链都将在 Tendermint 上运行，如下图所示。

    ![全面解析 Cosmos、Polkadot 两大天王级跨链项目](https://img.chainnews.com/material/images/3f5be1efb25e04ab606e6f3f25078556.jpg-article)

    只要新链遵循 IBC 协议，就可以加入该网络，包括公链和私有链。

    ### Peg Zones

    Peg Zone 允许实时的区块链网络（如以太坊主网）连接到 Cosmos 网络中。能够连接到实时区块链是区块链可交互网络的主要要求。Peg Zone 很复杂，但我们可以试着用简单的术语来解释它的工作原理。

    你必须有一个共享的安全模型，并且 Cosmos Peg Zone 的验证人也在运行以太坊主网节点。特殊验证人会批准两条链之间的交互。这是个复杂繁琐的基础架构，你还必须信任运行 Peg Zone 的团队。

    实际的资产交易需要以太坊主网上的智能合约锁定相应的 ETH，同时在 Peg Zone 中创建代表「Cosmos-Ether」的新代币，，其可以通过 IBC 在 Cosmos 网络中发送。从 Cosmos 方面来看，验证人会锁定 Atom，同时在以太坊主网中创建可发送的 ERC-20 的 Atom 代币。这样一来，就实现了 Cosmos 和以太坊主网之间资产的完全交互性。

    ### 实现两条链之间的互操作

    任何可交互的网络需要至少两条可以交换信息和产生交易的区块链。Ethermint 是 Cosmos 提出的第一个能与 Cosmos Hub 交互的解决方案。

    Ethermint 是 Cosmos 团队计划在 Cosmos Hub 主网上线后推出的区块链。它预计将于 2018 年的 Q4 发布。一句话描述 Ethermint 就是：它是用 Tendermint 共识引擎代替了 PoW 证明的以太坊。这也就使得基于以太坊虚拟机的区块链可以轻松地通过 IBC 与 Cosmos 网络进行交互。

    Ethermint 设计的天才之处在于团队计划实现的「hard spoon」。他们将在某个时间点对所有以太坊账户进行快照，并用该状态创建新的 Ethermint 分区。这将帮助他们引导现有的以太坊开发者网络，同时为每个人发放新的代币，并提供更快的交易速度。

    选择 Ethermint 而不是 Peg Zone 来「映射」以太坊主网，是因为它在技术上更加容易实现。但是，对于区块链来说，Peg Zone 的存在至关重要。无论对于 Cosmos 还是 Pokaldot，比特币和以太坊背后有太多的动量，忽视它们都是极其冒险的。

    ### Cosmos Hub

    在 Cosmos 网络中，Cosmos Hub 是主链，充当其他所有区块链的中央连接点。它是 Tendermint 驱动的多资产证明的 PoS 区块链。Cosmos Hub 的主要代币是 Atom，其主要用于抵押和链的治理。Cosmos Hub 启动之初有 100 个验证人，并将逐年增加。

    Atom 持有者既可以是验证人也可以是委托人。验证人需要设置一个完全节点，用于维护网络安全和处理交易。委托人则可以根据他们对验证人的信赖度和节点运行能力的判断，将代币委托给验证人。验证人会代理 Atom 资产，并从每个出块中获得 Atom 奖励。这些奖励会惠及委托人，只是其中一小部分将被扣留，以用于验证节点的日常运行。

    为了保证验证人的诚实性，向区块链发布不正确数据的恶意验证人会失去他们的 Atom 代币作为经济处罚。这种机制称为「slashing」。这些游戏理论规则都是为了在 PoS 证明的区块链中激励良好行为。

    代币也可用于治理。一个 Atom 就可以作为网络任何提案的一票，例如软件升级。Cosmos 的治理协议相当简单。委托人可以自己投票，也可以将他们的投票权转让给他们所委托的验证人。验证人必须给每个提案投票，否则他们会受到惩罚。

    ### 主网启动的当前状态

    Cosmos 团队目前正在使用部分功能对测试网进行测试，但他们已经非常接近于功能完备的软件版本测试。团队将在 2019 年 Q3 的某个时间点发布实时主网。但是，在主网稳定运行前，Cosmos 团队会冻结交易。一旦主网上线并稳定运行，Cosmos 团队将执行 IBC，并为 Ethermint 进行 Ethereum 的「hard spoon」。想要对 Cosmos 路线图更深入了解，请点击这里。

    ## Cosmos 上的开发构建

    开发者有两种方法进行基于 Cosmos 网络的开发工程：构建 IBC 交互的新区块链和在 Cosmos Zone 中创建智能合约。Cosmos 团队创建了 Cosmos SDK 以便开发人员可以轻松地在 Cosmos 网络上发布新的区块链。

    ### Cosmos SDK

    Cosmos 团队发布了「Cosmos SDK」，其允许开发人员使用简单的模块化方案在 Cosmos 网络上设计自己的区块链。SDK 正用于构建 Cosmos Hub，因此当主网启动时，SDK 也可供开发者构建自己的区块链。Cosmos Hub 可以构建运行于 Cosmos 网络的基础应用程序，之后将为股权代理，治理和 IBC 添加相应的模块。

    这将允许开发者自己使用 SDK，选择基础区块链应用程序，添加治理或股权代理等模块，甚至创建属于自己的模块，并发布可交互的区块链。这是个激动人心的机会，因为它将为开发人员创建一个全新的去中心化平台，而不仅仅是以太坊风靡全球的代币模式。

    SDK 是用 Golang 语言编写的， 并将支持未来语言。但在第一年前后，网络中的区块链必须用 Go 编写。

    ### 在 Cosmos 上构建 dApp

    Ethermint 将是你在 Cosmos 网络上构建 dApp 的第一个工具。由于它是基于 EVM 的区块链，其智能合约可以用 Solidity 编写。Cosmos 网络的交易速度也会提高，因为 Tendermint 共识每秒能够处理比以太坊（基于 PoW 共识机制）多得多的交易。

- #### Oracle

  解决现实世界中和区块链之间的数据问题。

  - Chainklink
  - Band
  - UMA
  - REP

- #### 存储类型

  - Filecoin

  - Mass

  - Arweave

  - Storj

    


1. ## 共识机制

   - 分布式一致性

   - 拜占庭将军问题

     - 拜占庭将军问题是 Leslie Lamport 在 [The Byzantine Generals Problem](https://web.archive.org/web/20170205142845/http://lamport.azurewebsites.net/pubs/byz.pdf) 论文中提出的分布式领域的容错问题，它是分布式领域中最复杂、最严格的容错模型。

       在该模型下，系统不会对集群中的节点做任何的限制，它们可以向其他节点发送随机数据、错误数据，也可以选择不响应其他节点的请求，这些无法预测的行为使得容错这一问题变得更加复杂。

       拜占庭将军问题描述了一个如下的场景，有一组将军分别指挥一部分军队，每一个将军都不知道其它将军是否是可靠的，也不知道其他将军传递的信息是否可靠，但是它们需要通过投票选择是否要进攻或者撤退：

       ![byzantine-generals-problem](https://img.draveness.me/2017-12-18-byzantine-generals-problem.png)

       > 在这一节中，黄色代表状态未知，绿色代表进攻，蓝色代表撤退，最后红色代表当前将军的信息不可靠。

       在这时，无论将军是否可靠，只要所有的将军达成了统一的方案，选择进攻或者撤退其实就是没有任何问题的：

       ![byzantine-generals-problem-with-plans](https://img.draveness.me/2017-12-18-byzantine-generals-problem-with-plans.png)

       上述的情况不会对当前的战局有太多的影响，也不会造成损失，但是如果其中的一个将军告诉其中一部分将军选择进攻、另一部分选择撤退，就会出现非常严重的问题了。

       ![byzantine-generals-problem-split-votes](https://img.draveness.me/2017-12-18-byzantine-generals-problem-split-votes.png)	由于将军的队伍中出了一个叛徒或者信息在传递的过程中被拦截，会导致一部分将军会选择进攻，剩下的一部分会选择撤退，它们都认为自己的选择是大多数人的选择，这时就出现了严重的不一致问题。

       拜占庭将军问题是对分布式系统容错的最高要求，然而这不是日常工作中使用的大多数分布式系统中会面对的问题，我们遇到更多的还是节点故障宕机或者不响应等情况，这就大大简化了系统对容错的要求；不过类似 Bitcoin、Ethereum 等分布式系统确实需要考虑拜占庭容错的问题，我们会在下面介绍它们是如何解决的。

   - #### POW(Proof-of-Work)

     - 上一节介绍的共识算法，无论是 Paxos 还是 Raft 其实都只能解决非拜占庭将军容错的一致性问题，不能够应对分布式网络中出现的极端情况，但是这在传统的分布式系统都不是什么问题，无论是分布式数据库还是消息队列集群，它们内部的节点并不会故意的发送错误信息，在类似系统中，最常见的问题就是节点失去响应或者失效，所以它们在这种前提下是有效可行的，也是充分的。

       这一节介绍的 [工作量证明](https://en.wikipedia.org/wiki/Proof-of-work_system)（POW，Proof-of-Work）是一个用于阻止拒绝服务攻击和类似垃圾邮件等服务错误问题的协议，它在 1993 年被 Cynthia Dwork 和 Moni Naor 提出，它能够帮助分布式系统达到拜占庭容错。

       ![proof-of-work-puzzle](https://img.draveness.me/2017-12-18-proof-of-work-puzzle.png)工作量证明的关键特点就是，分布式系统中的请求服务的节点必须解决一个**一般难度但是可行（feasible）的问题**，但是验证问题答案的过程对于服务提供者来说却非常容易，也就是一个不容易解答但是容易验证的问题。

       这种问题通常需要消耗一定的 CPU 时间来计算某个问题的答案，目前最大的区块链网络 - 比特币（Bitcoin）就使用了工作量证明的分布式一致性算法，网络中的所有节点计算通过以下的谜题来获得当前区块的记账权：

       ![bitcoin-puzzle](https://img.draveness.me/2017-12-18-bitcoin-puzzle.png)SHA-256 作为一个哈希函数，想要通过 SHA-256 函数的输出推断出输入在目前来看可能性是**可以忽略不计的**，比特币网络就需要每一个节点不断改变 `NONCE` 来得到不同的结果 `HASH`，如果得到的 HASH 结果在小于某个范围，目前（2017.12.17）的难度是：

       ```c
       0x0000000000000000000000000000000000000000000000000000017268d8a21a
       ```

       也就是如果只计算一次 SHA-256 的值能够小于上述结果的可能性是

       1.37∗10−651.37∗10−65

       ，当前的全网算力也达到了 13,919 PH/s，这是一个非常恐怖的数字，随着网络算力的不断改变比特币也会不断改变当前问题的难度，保证每个区块被发现的时间在 10min 左右；在整个比特币网络中，谁先得到当前问题的答案就能够获得这个区块的记账权并将当前区块通过 Gossip 协议发送给尽可能多的比特币节点。

       

       工作量证明的原理其实非常简单，比特币网络选择的谜题非常好的适应了工作量证明定义中的问题，比较难以寻找同时又易于证明，我们可以简单理解为工作量证明防止错误或者无效请求的原理就是增加客户端请求服务的工作量，而适合难度的谜题又能够保证合法的请求不会受到影响。plain

       由于工作量证明需要消耗大量的算力，同时比特币大约 10min 才会产生一个区块，区块的大小也只有 1MB，仅仅能够包含 3、4000 笔交易，平均下来每秒只能够处理 5~7（个位数）笔交易，所以比特币网络的拥堵状况非常严重。

   - ### POS(Proof-of-Stake)

     - 权益证明是区块链网络中的使用的另一种共识算法，在基于权益证明的密码货币中，下一个区块的选择是根据不同节点的股份和时间进行随机选择的。

       由于创造新的区块并不会消耗大量的 CPU，如果它不诚实也不会失去什么，这也就给了很多节点作弊的理由，每一个节点为了最大化利益会在多条链上同时挖矿。

       ![pos-problem](https://img.draveness.me/2017-12-18-pos-problem.png)在早期的所有权证明算法中，整个网络只会奖励创建区块的节点，不存在任何惩罚，在这时每个节点在创造的多条链上同时投票才能够最大化利益，在这种情况下网络中的节点很难对一条链达成共识。

       有两种办法能够解决缺乏利害关系（nothing-at-stake）造成的问题，一种是使用 [Slasher](https://blog.ethereum.org/2014/01/15/slasher-a-punitive-proof-of-stake-algorithm/) 协议，惩罚同时在多条链上投票的节点，第二种方法时直接惩罚在错误的链上创建块的节点，总而言之就是通过算法之外的事情解决这个问题，引入激励和惩罚。

       与工作量证明相比，权益证明不需要消耗大量的电力就能够保证区块链网络的安全性，同时也不需要在每个区块中创建新的货币来激励矿工参与当前网络的运行，这也就在一定程度上缩短了达成共识所需要的时间，基于权益证明的 Ethereum 每秒大概能处理 30 笔交易左右。

   - ### DPOS(Delegated Proof-of-Stake)

     - 前面介绍的权益证明算法可以将整个区块链网络理解为一家公司，出资最多、占比最大的人有更多的机会得到话语权（记账权）；对于小股东来说，千分之几甚至万分之几的股份很难有什么作为，只能得到股份带来的分红和收益。

       但是在这里介绍的委托权益证明（DPOS，Delegated Proof-of-Stake）能够让每一个人选出可以代表自己利益的人参与到记账权的争夺中，这样多个小股东就能够通过投票选出自己的代理人，保障自己的利益。整个网络中选举出的多个节点能够在 1s 中之内对 99.9% 的交易进行确认，使用委托权益证明的 EOS 能够每秒处理几十万笔交易，同时也能够比较监管的干预。

       ![delegated-proof-of-stake-witnesses](https://img.draveness.me/2017-12-18-delegated-proof-of-stake-witnesses.png)在委托权益证明中，每一个参与者都能够选举任意数量的节点生成下一个区块，得票最多的前 N 个节点会被选择成为区块的创建者，下一个区块的创建者就会从这样一组当选者中随机选取，除此之外，N 的数量也是由整个网络投票决定的，所以可以尽可能地保证网络的去中心化。

       投票授权，某些节点进行持币挖矿来记账。高效、快速。

       中心化严重。eos、lisk、Ark

       

   - #### POA（权威证明）

     - 投票指定认可的账户作为账户。
     - VeChain、erhereum Kovan test

   - #### PBFT（实用拜占庭容错算法）

     - N>3f+1 作恶节点不能超过 f。
     - Stellar、Ripple



## 交易模型

- gas 系统
  - 主链币为支付单位
  - 费用计算
- 无 gas 系统
  - EOS 抵押 EOS 获取 RAM 、CPU、Network
- 双币 系统
  - VeChain 交易费用和矿工收益不会因为币价波动而剧烈波动
- gas 和 无 gas 混合 
  - TRON



## Wallet

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



- #### Single chain wallet

  - Metamask
    - 目前有浏览器插件版本和 APP 版本，支持一键同步。支持 HD 钱包推算子钱包。
    - 使用教程 https://www.jianshu.com/p/b5b2c05e9090
    - 请下载 APP 版本 Metamask APP 版本的钱包进行体验。 
  - Myetherwallet
    - Myetherwallet 网页版钱包。
    - 使用教程

- #### Multi-chain Wallet

  - [Imtoken](https://token.im/wallet)
    - 国内比较久的钱包团队，支持多链的钱包生成。
  - [Math Wallet](https://mathwallet.org/zh-cn/)
    - 麦子团队支持更多的钱包公链，还有更多的 app 应用。

- #### Hardware Wallet

  硬件钱包的优势，支持多链，物理多重备份。避免网页或者其他软件生成的 Mnemonic 或者 Private key 泄漏。直连官方节点，避免被病毒泄漏。离线交易签名处理。

  - ladger
  - trezor
  - keepkey

- 钱包技术

  - 单签钱包

    - 只需要验证一个私钥的进行交易的钱包。普通的用户钱包。

  - 多签钱包 Multisig Wallet

    - 多重签名地址可设定其所需的密钥组合：最常见的就是三分之二（2/3），此类地址表示只需提供 2 个起签名就可以访问 3 签名地址中的资金。其实，还存在许多其他类型，如 2/2（二分之二）、3/3（三分之三）、3/4（四分之三）等等。
    - ![img](https://oss02.bihu.com/image/20190706/a9fdf5a3b263def833d81cfb059831aa_GU2TKKRRGU3A.JPG)

  - 门限签名

    - **各子签名之间具备一定的代数结构，因而最终可以合成一个主签名，只需验证主签名即可。多次子签名在链下完成，一次合成签名在链上完成，一次验签在链上完成。** 

    ![img](https://oss02.bihu.com/image/20190706/443d0b61b3f816cfacde2a47eea848a2_GU2DCKRSGM3Q.JPG)

    



## Protocols

- ### Stable Coin

  - 中心化法币锚定稳定币
    - USDC、USDT、TUSD、在现实社会中，抵押资产，在去区块链中生成等量美金，
    - 缺点：中心化抵押无法实施清算/或者清算已经 mint 的不匹配。
    - 过于中心化。需要有较强的监管。抵押的资产本来具有较大的波动。
    
  - 去中心化抵押稳定币
    - DAI、sUSD，由数字货币用多倍抵押的方式抵押在合约中生成稳定货币。
    - 缺点：完全由虚拟数字货币来生成，在抵押品的资产收到黑客，或者其他剧烈波动的时候，因为循环抵押借贷，容易造成黑天鹅事件。
    
  - 算法稳定币
    - Rebase 稳定币
      - AMPL 智能弹性稳定币，AMPL 通过供应扩大和收缩来影响价格是否是 1 美元。根据现有货币价格与 1 美金的偏差，每 24 小时进行一次数量修正。高于 1 美金，所有用户的钱包的代币等比增加，增加的数量是当前价格与 1 美金之间的差的 1/10.如果当前货币的价格低于 1 美金，那么每 24 小时进行一次通缩，减少的数量是当前价格与 1 美金之间差的 1/10.这样来控制所有货币的数量来调节价格。
      
      - ### Ampleforth (AMPL)
      
        AMPL 稳定币设计机制采用弹性机制，AMPL 有一个目标价格，假如其目标价格为 1 美元，那么其名义汇率高于一定的阀值，协议就会同比增加所有用户的代币数量；如果 AMPL 价格低于目标价格一定的阀值，那么协议就会减少用户持有的代币数量。
      
        [AMPL 官网](https://www.ampleforth.org/dashboard/) 将会根据目前 AMPL 的目标价格以及预言机价格进行 rebase （律动注：可理解为代币供应量再平衡），rebase 将于每日的北京时间 10:00 进行。
      
        ![算法稳定币引热议，一览 Ampleforth、ESD 与 Basis Cash 等运行机制](https://img.chainnews.com/material/images/8f2cec21d232541e8aa173f8d0895428_tyAjDRa.png-article)
      
        通过 AMPL 的机制，其实可以发现 AMPL 并非传统意义上的稳定币而是一种通过博弈使其价格趋向于稳定。其代币总量没有上限，如果价格一直高于目标价格，那么代币数量便会一直增加。这表明，AMPL 的市值能够更好反映 AMPL 代币的价值，用户购买的并非恒定的 AMPL 代币而是 AMPL 市值的份额（百分比）。
      
        AMPL 这种特殊的设定决定了，一旦陷入群体性价格 fomo 情绪，AMPL 急涨急跌将会频繁发生。通过 AMPL 的市值也可发现，就现阶段而言，AMPL 更像一种投机代币而非稳定币。
      
        ![算法稳定币引热议，一览 Ampleforth、ESD 与 Basis Cash 等运行机制](https://img.chainnews.com/material/images/f11ed524ea405fd0a24bdaa2d17a83c5_phKCstD.png-article)
      
      - YAM 在 AMPL 上加入的 DAO 的机制来进行治理，由于治理机制的太过呆板，让某些用户能在其中投机取巧。最后治理变得非常失败。
    - Base Cash
      
      - ### Base Protocol(BASE)
      
        BASE 是 Base Protocol 的代币，但是不是美元稳定币，而是加密货币市值稳定币。BASE 通过 1:1000000000000 （1:1 万亿）的比例锚定加密货币市值。假如加密货币的市值为 5000 亿美元，那么 BASE 的价值便为 0.5 美元。
      
        BASE 的目标价格是所有加密货币的总市值的万亿分之一：（加密货币总市值） x 0.1 ^ 12。BASE=（cmc x 0.1 ^ 12）时，基准处于均衡状态。当这种平衡被破坏时，代币供应将被调整。
      
        当 BASE >（加密货币总市值 x 0.1 ^ 12）时，通胀，使得 BASE 价格下降；
      
        当 BASE <（加密货币总市值 x 0.1 ^ 12）时，通缩，使得 BASE 价格上升。
      
        BASE 的机制和 AMPL 类似，两者的不同点在于锚定资产的不同，但是从市场来看，通缩通胀的机制并不能在 BASE 得到一个很好的反馈。就目前而言，BASE 的炒作大于其实质的价值。
      
        ### Basis Share(BAS)、Basis Cash(BAC)、Basis Bond
      
        Basis Cash 的前身为 Basis，Basis 的最初设想是创建一个适合所有人的公平的经济体系，而后由于法律限制而放弃了该项目。在 Basis 放弃后，匿名团队接手了该项目并更名为 Basis Cash。
      
        Basis Cash 包含三种代币：
      
        - Basis Share(BAS)
        - Basis Cash(BAC)
        - Basis Bond
      
        Basis Cash 于 11 月 30 日启动。与大多数稳定货币一样，BAC 与美元 1:1 锚定，其价格将由另外两种加密资产管理：Basis Bond 和 BAS。从 11 月底开始，50000 个 BAC 将在 5 天内（每天 10000 个）分发给将五种稳定币（DAI、yCRV、USDT、SUSD 和 USDC）存入其智能合约的用户。每日奖励将按比例分配，用户可以随时取回资产。
      
        当 BAC 价格低于 1 美元时，用户可以以一定的折扣购买 Basis Bond，通过折扣购买 Basis Bond 的用户在未来赎回代币时能获得一定利润。
      
        当 BAC 价格高于 1 美元时，智能合约会允许 Bond 赎回人直接赎回 Basis Bond。如果在赎回 Basis Bond 之后 BAC 的交易价格高于 1 美元，此时会导致 BAC 需求增加，那么就需要铸造新的 BAC 代币，这些代币也会分配给 BAS 持有人。
      
        ![算法稳定币引热议，一览 Ampleforth、ESD 与 Basis Cash 等运行机制](https://img.chainnews.com/material/images/52ced04044ca5cb5a32ac435c2632faf_vxWqDso.png-article)
      
        虽然 BAC 与美元 1:1 锚定，但是从价格来看，似乎市场并未认为其为稳定币。MakerDAO 中国区负责人潘超曾撰文表示，Basis 是一个比 Bitconnect 还危险的骗局。Basis Bond 并非债券，而是 Basis 的做多期货，一旦 Basis 资金断裂，信心失去，Basis 便会进入死亡循环，由于没有资产或任何信用背书，没有人相信 Basis 进而没有人去购买债券，Basis 很容易发生挤兑归零。
    
  - 黄金稳定币
    
    - [Goldx](https://www.hgfoundation.io/?ref=cypherhunter)
    
    - HelloGold 是一个基于区块链技术的黄金金融服务平台，依靠以太坊的智能合约实现黄金现货的交易、储蓄、抵押贷款和其他形式流转。HelloGold 项目将会发行两种资产 GBT 和 HGT，其中 GBT 是黄金锚定资产，主要用于实现黄金现货的流转；HGT 对应 HelloGold 平台交易手续费、保管费的分配权益，不代表任何资产。
    
      HelloGold 从功能上看是 Digix Global 升级版，目前其提供了黄金交易和储蓄之外的金融功能：黄金抵押贷款。HelloGold 与 Digix Global 相近，都是通过购买代币获取黄金交易/存储的手续费。但 HelloGold 的市场定位更为精准和有效，HelloGold 倡导的是普惠金融，为马来西亚这样的新兴市场人群提供他们能够负担的金融产品，同时 HelloGold 也是世界上第一个通过了伊斯兰教法认证的数字黄金计划，并完全符合 AAOIFI 标准以进行储蓄和融资。

- #### 借贷协议

  - #### MakerDAO

  - 基于以太坊的去中心化稳定币项目。被称为以太坊上边的央行。最近这个项目随着开放金融和稳定币概念越来越被关注。又由于 usdt 暴雷不断，基于 MakerDAO 的稳定币 Dai 被行业寄予厚望。本文尝试说明一下这个项目的价值。通过这个项目，我们能看到一些以太坊最前沿的探索。当然，更直接的是投资机会的判断。

    ------

    **第一部分，先要问为什么需要去中心化稳定币。**

    1 行业发展需要一种可信赖的全球交易货币。整个加密货币交易领域目前高度依赖中心化的 usdt。然而 usdt 不管是信誉问题，还是资产冻结问题，都给行业蒙上一层阴影。行业需要一个去中心化的，透明可查的，不受银行系统威胁的“更好的 usdt”。“更好的 usdt”不但可以更通畅的承担起币币交易的定价功能。还可以更好的储存价值，对抗下跌期间的市值流失。

    2 在 1 的基础之上，通过智能合约可以把稳定币的发行、流转等动作订制成功能模块。与其他智能合约组合，基于技术的稳定币能成为更多全球化金融服务和衍生品的“积木”。

    3 用去中心化方式达成可信的稳定币，有可能会成为加密货币走向无国界消费现金的突破口。

    

    **第二部分，MakerDAO究竟是什么？**

    MakerDAO是以太坊上的去中心化自治组织和智能合约系统，采用双币（MKR和Dai两个币）模式运行，MKR负责承载权益，Dai是稳定币。**用户可以在系统中抵押以太坊而折价获得稳定币Dai。**Dai与美元保持1:1锚定。

    

    使用场景举例说明：

    如果用户需要100美元等值的流动资金而又不希望卖出自己的以太坊。那么他可以将150美元的以太锁入智能合约以获得抵押贷款。根据系统规定的2/3折扣可生成100个 Dai，币值锚定100 美元 。

    当用户需要取回以太坊时，偿还 100 个Dai 和以MKR支付的利息，可足额赎回以太坊。

    当以太坊价格下跌到不足以偿还贷款时，以太坊将被打折出售以回购市场中的Dai。（未来，MakerDAO还会推出多资产抵押模式，来丰富自身的价值网络并且提高抵押价值的稳定性。）

    Dai依靠利率来调节供给，已达到币值稳定。

    

    **MKR是MakerDAO系统的权益代币。MKR的持有人是整个系统中的最后买家。当系统出现巨大问题时，MKR持有人可以投票决定是否进行全局结算。**MKR还可以用来投票决定偿还Dai时候的利息水平。通过支付借Dai的稳定费用以及参与管理系统而凝聚了这个系统的价值。MKR的价值和整个系统的表现息息相关。

    Dai是以太坊上第一个去中心稳定币。MakerDAO系统今年4月锁仓以太坊价值达到 3.8 亿美元，借出 9200 万美元 DAI 稳定币。MakerDAO 采取跌破清算价格即自动清算的方式来解绑高风险资产，ETH 价格越高，抵押资产风险率越低，ETH 价格下跌，抵押资产风险率就越高，用户抵押的资产被清算的可能性就越高。系统中的抵押率会适时调整。在刚刚过去的2018年，MakerDAO的稳定性经受住了熊市的考验。它还具有以下特征：

    1 MakerDAO是一个透明并且不受任何中心化组织控制的以太坊智能合约托管的系统。

    2 Dai 的偿付能力来源于系统中抵押的以太坊（未来抵押品会更加丰富）的价值而不是项目方。

    3 Dai 是一种完全基于区块链的公开、透明货币。币值稳定性不受第三方影响。

    

    **第三部分，MakerDAO发展中的困难。**

    首先是由于整个行业对稳定币市场都有着巨大的野心和期待。由此导致头部交易所并不是很愿意上线Dai交易对，而是更希望有自己的稳定币。这在未来一定会切分usdt和Dai的市场份额。

    其次，MakerDAO 有一个以为系统募集资金为目的的基金会。基金会本意是确保MakerDAO能够作为一个完全去中心化的组织生存下去。有九名匿名董事会成员负责监督该网络的发展资金——这笔钱占到了目前全部 MakerDAO 治理代币数量的 27%。匿名符合密码朋克精神，同时也是一种发展风险。

    第三，超额抵押模式是一种效率不高的资金使用办法。并且由于加密货币高波动性，1：1.5这种高比率方式有可能将来会被其他模式用更高效的抵押率打败。

    

    **第三部分，MakerDAO的投资思考。**

    1 现阶段MakerDAO占有以太坊去中心化稳定币市场的88%以上份额。是绝对的行业领袖项目。从以太坊抵押量上看，MakerDAO并没有受到熊市影响，一路高歌猛进，目前已经锁定的以太坊达到200万以上。

    2 MakerDAO已经在行业内部获得不小的共识。各类行业聚会上被v神频频提起。前段时间大火的《百万亿美元的加密货币主题》同样把 MakerDAO视作代表开放金融的标志项目之一。MakerDAO已经建立起自己的先行者品牌优势。

    3 MakerDAO的权益代币MKR目前还没有登陆三大交易所中的火币和币安。

    4 MKR从春节期间的最低点到现在涨幅还没有超过一倍。远远落后于大盘平均涨幅。

    5 Dai和MKR在Wanchain上已成功实现与比特币价值交换。作为广受讨论和赞誉的项目，MakerDAO网络价值提升是非常可期的。

    

  - #### [Compound](https://medium.com/steaker-com/defi-%E7%9A%84%E4%B8%96%E7%95%8C-compound-%E5%AE%8C%E5%85%A8%E8%A7%A3%E6%9E%90-%E5%88%A9%E7%8E%87%E6%A8%A1%E5%9E%8B%E7%AF%87-95e9b303c284)

  - [AAVE](https://www.jianshu.com/p/fb4818d3381a)

- #### 保险协议

  - #### Cover Protocol

  - #### Nexus Mutual

- #### 合成资产

  - #### Mirror
  - #### Injective
  - #### UMA

- #### 混淆协议

  - #### Tornado
  - #### Incognito



## 交易所

- 中心化交易所

  - Coinbase
  - Binance
  - Huobi
  - bitfinex
  - Okex-期货
  - Bitmex-期货

- DEX 交易所

  - Layer1

    - AMM

      - Uniswap
      - Sushiswap
      - Balancer
      - Matcha

    - PMM

      - dodo

    - 聚合交易

      - 1inch
      - Keyber
      - 0x

    - 去中心化代币拍卖平台

      - Bounce

    - NFT Markets

      - Opensea
      - Nifty Gateway
      - MakersPlace
      - Rarible
      - SuperRare
      - VIV3
  - Flow
      
    ![深度解析：六大 NFT 交易平台，谁最有潜力？](https://img.chainnews.com/material/images/23eb54860457e1ac42ce240c8917b046.jpg-article)
  
- Layer2
  
    - Optimism
    - Arbitrum
  - zkSync
  
  

## 交易行情

- 非小号
- Coingecko
- CoinMarktcap

### 资产查询

- debank
