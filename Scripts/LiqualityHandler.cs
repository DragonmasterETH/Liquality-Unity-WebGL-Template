using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
using System.Runtime.InteropServices;

public class LiqualityHandler : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void GetSelectedAccount();

    [DllImport("__Internal")]
    private static extern void GetNfts(string wallet, int chain);

    [DllImport("__Internal")]
    private static extern void Mint721(string contractAddress, string recipient, string uri, int chainId, string pk);

    [DllImport("__Internal")]
    private static extern void Mint1155(string contractAddress, string recipient, int id, int amount, int chainId, string pk);

    [DllImport("__Internal")]
    private static extern void Create721(string tokenName, string tokenSymbol, int chain, string pk);

    [DllImport("__Internal")]
    private static extern void Create1155(string uri, int chain, string pk);

    [DllImport("__Internal")]
    private static extern void TransferNFT(string contractAddress, string receiver, string tokenIDs, string amounts, int chain, string pk);

    [DllImport("__Internal")]
    private static extern void ListTokens(string wallet, int id);

    [DllImport("__Internal")]
    private static extern void GetToken(string contract, string wallet, int chain);

    [DllImport("__Internal")]
    private static extern void Setup(string alchemyKey, string etherscanKey);

    public void GetWallet(string resp)
    {
        string address = resp.Split(',')[0];
        string privatekey = resp.Split(',')[1];

        //Do something with the keys
    }


    public void GetNFTs(string nftJson)
    {
        // This returns all nfts in a json string
    }

    public void MintERC721Hash(string hash)
    {
        // this returns the hash from minting the NFT
    }

    public void MintERC1155Hash(string hash)
    {
        // this returns the hash from minting the NFT
    }

    public void CreateERC721Hash(string hash)
    {
        // this returns the hash from creating the NFT collection
    }

    public void CreateERC1155Hash(string hash)
    {
        // this returns the hash from creating the NFT collection
    }

    public void TransferNFTHash(string hash)
    {
        // this returns the hash from transferring NFTs
    }

    public void ListAllTokens(TokenInfo[] tokensJson)
    {
        // this returns an array of all tokens
    }

    public void GetTokenBalance(string bal)
    {
        // this returns the balance of the rewuested token
    }
}
