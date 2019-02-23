const { scripts, ConfigVariablesInitializer } = require('zos');
const { add, push, update } = scripts;

async function deploy(options) {

  add({ contractsData: [{ name: 'SampleToken_v1', alias: 'SampleToken' }] });

  await push(options);

  await update(Object.assign({ contractAlias: 'SampleToken' }, options));
}

module.exports = function(deployer, networkname, accounts) {
  deployer.then(async () => {
    const { network, txParams } = await ConfigVariablesInitializer.initNetworkConfiguration({ network: networkname, from: accounts[1] });
    await deploy({ network, txParams })
  })
}
