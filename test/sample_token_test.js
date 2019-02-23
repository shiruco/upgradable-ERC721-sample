const SampleToken = artifacts.require('SampleToken.sol');

contract('SampleToken', function(accounts) {
  it("...should token version is v1.", async () => {
    const sampleTokenInstance = await SampleToken.deployed();

    let version = await sampleTokenInstance.version();
    assert.equal(version, "v1");
  });
});
