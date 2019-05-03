const SampleToken = artifacts.require('SampleToken.sol');

contract('SampleToken', function(accounts) {
  const sampleTokenInstance;

  beforeEach(async function() {
    sampleTokenInstance = await SampleToken.deployed();
  });

  it("...should token version is v1.", async () => {
    let version = await sampleTokenInstance.version();
    assert.equal(version, "v1");
  });
});
