const { scripts, ConfigVariablesInitializer } = require('zos');
const { add, push, create } = scripts;

async function deploy(options) {

  add({ contractsData: [{ name: 'SampleToken', alias: 'SampleToken' }] });

  await push(options);

  await create(Object.assign({ contractAlias: 'SampleToken', initMethod: 'initialize', initArgs: [
    "SampleToken",
    "STKN"
  ] }, options));
}

module.exports = function(deployer, networkname, accounts) {
  deployer.then(async () => {
    const { network, txParams } = await ConfigVariablesInitializer.initNetworkConfiguration({ network: networkname, from: accounts[1] });
    await deploy({ network, txParams })
  })
}
