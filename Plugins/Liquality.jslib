mergeInto(LibraryManager.library, {
    GetSelectedAccount: async function () {
        let resp = await callToSdk();
    	SendMessage('Liquality', 'GetWallet', resp);
        },
    GetNfts: async function (wallet, chain) {
        let resp = await getNFTs(wallet, chain);
        SendMessage('Liquality', 'GetNFTs', resp);
    },
    Mint721: async function (contractAddress, recipient, id, amount, chainId, pk) {
        let resp = await mintERC721Nft(contractAddress, recipient, id, amount, chainId, pk);
        SendMessage('Liquality', 'MintERC721Hash', resp);
    },
    Mint1155: async function (contractAddress, recipient, id, amount, chainId, pk) {
        let resp = await mintERC1155Nft(contractAddress, recipient, id, amount, chainId, pk);
        SendMessage('Liquality', 'MintERC1155Hash', resp);
    },
    Create721: async function (uri, chain, pk) {
        let resp = await createERC721Collection(uri, chain, pk);
        SendMessage('Liquality', 'CreateERC721Hash', resp);
    },
    Create1155: async function (uri, chain, pk) {
        let resp = await createERC1155Collection(uri, chain, pk);
        SendMessage('Liquality', 'CreateERC1155Hash', resp);
    },
    TransferNFT: async function (contract, receiver, tokens, amounts, chain, pk) {
        let resp = transferNfts(contract,receiver,tokens,amounts, chain, pk);
        SendMessage('Liquality', 'TransferNFTHash', resp);
    },
    ListTokens: async function (wallet, id) {
        let resp = await listAccountTokens(wallet, id);
        SendMessage('Liquality', 'ListAllTokens', resp);
    },
    GetToken: async function (contract, wallet, chain) {
        let resp = await getBalanceForToken(contract, wallet, chain);
        SendMessage('Liquality', 'GetTokenBalance', resp);
    },
    Setup: function (alchemyKey, etherscanKey) {
        setupSDK(alchemyKey,etherscanKey);
    }
});