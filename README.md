# upgradable-ERC721-sample

upgradable ERC721 token sample with ZeppelinOS

# env
- Truffle v5.0.4 (core: 5.0.4)
- Solidity v0.5.0 (solc-js)
- Node v11.3.0

# commands

#### initialize zos
```
$ zos init sample-pj
```

#### start ganache
```
$ ganache-cli -p 7545 -d
```

#### contract migration
```
$ truffle migrate --network local
```

#### test
```
$ truffle console --network local
truffle(local)> SampleToken.deployed().then(t => token = t)
truffle(local)> token.version()
truffle(local)> "v1"  <===== updated!!
```
