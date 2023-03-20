const { setup } = require("@liquality/wallet-sdk");

function setupSDK(alch, etherscan) {
  setup({
    alchemyApiKey: alch,
    etherscanApiKey: etherscan,
    infuraProjectId: "-",
    pocketNetworkApplicationID: "-",
    quorum: 1,
    slowGasPriceMultiplier: 1,
    averageGasPriceMultiplier: 1.5,
    fastGasPriceMultiplier: 2,
    gasLimitMargin: 2000,
  });
}

window.setupSDK = setupSDK;