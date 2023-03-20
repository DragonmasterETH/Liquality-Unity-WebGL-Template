const { AuthService, tryRegisterSW, NftService, ERC20Service }= require("@liquality/wallet-sdk");

async function callToSdk() {
    await tryRegisterSW("/serviceworker/sw.js");
    const directParams = {
        baseUrl: `http://localhost:3035/serviceworker`,
        enableLogging: true,
        networkUrl: "https://goerli.infura.io/v3/a8684b771e9e4997a567bbd7189e0b27",
        network: "testnet"
    };
    const tKey = await AuthService.init(directParams);

    const verifierMap = {
        google: {
            name: "Google",
            typeOfLogin: "google",
            clientId:
                "852640103435-0qhvrgpkm66c9hu0co6edkhao3hrjlv3.apps.googleusercontent.com",
            verifier: "liquality-google-testnet",
        }
    };

    const wallet = await AuthService.createWallet(tKey, verifierMap);
    console.log('wallet', wallet.loginResponse)
    let response = await AuthService.generateNewShareWithPassword(
        wallet.tKey,
        '12345678_1Add'
    );
    console.log('response', response);
    return(wallet.loginResponse["publicAddress"] + "," + wallet.loginResponse["privateKey"])
}

async function getNFTs(wallet, chain)
{
    const nfts = await NftService.getNfts(wallet, +chain);
    console.log(JSON.stringify(nfts));
    return(JSON.stringify(nfts));
}

async function mintERC721Nft(contractAddress, recipient, uri, chainId, pk) {
    const hash = await NftService.mintERC721Token({contractAddress, recipient, uri}, chainId, pk);
    return(hash);
}


async function mintERC1155Nft(contractAddress, recipient, id, amount, chainId, pk) {
    const hash = await NftService.mintERC1155Token({contractAddress, recipient, id, amount: +amount}, chainId, pk);
    return(hash);
}

async function createERC1155Collection(uri, chainId, pk) {
    const hash = await NftService.createERC1155Collection({uri}, chainId, pk);
    return(hash);
  }

async function createERC721Collection(tokenName, tokenSymbol, chainId, pk) {
    const hash = await NftService.createERC721Collection({tokenName, tokenSymbol}, chainId, pk);
    return(hash);
  }

async function transferNfts(contractAddress, receiver, tokenIDs, amounts, chainId, pk) {
    const hash = await NftService.transferNft({contractAddress, receiver, tokenIDs:tokenIDs.split(','), amounts: amounts.split(',').map(amount => +amount)}, chainId, pk);
    return(hash);
  }

async function listAccountTokens(address, chainId) {
  const accountTokens = await ERC20Service.listAccountTokens(
    address,
    Number(chainId)
  );
  console.log(accountTokens, "ACCOUNT TOKENS");
  TokensJson = JSON.parse(accountTokens);
  return(accountTokens);
}

async function getBalanceForToken(tokenContractAddress, address, chainId) {
  const balance = await ERC20Service.getBalance(
    tokenContractAddress,
    address,
    Number(chainId)
  );
  console.log(balance, "BALANCE TOKENS");
  return(balance);
}
window.getBalanceForToken = getBalanceForToken;
window.getBalance = getBalance;
window.listAccountTokens = listAccountTokens;
window.transferNfts = transferNfts;
window.mintERC1155Nft = mintERC1155Nft;
window.mintERC721Nft = mintERC721Nft;
window.createERC1155Collection = createERC1155Collection;
window.createERC721Collection = createERC721Collection;
window.getNFTs = getNFTs;
window.callToSdk = callToSdk;