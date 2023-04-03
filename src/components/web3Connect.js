import { nftContract } from "./config";
import NFTAbi from "./nftAbi.json";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

export async function connectWallet() {
  const web3modal = new Web3Modal();
  const connection = await web3modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const addressraw = signer.getAddress();
  const addressstr = (await addressraw).valueOf();
  let contract = new ethers.Contract(nftContract, NFTAbi, signer);
  let getIds = await contract.walletOfOwner(addressstr);
  // console.log(getIds[0])
  if (getIds[0] === undefined) {
    return 0;
  } else {
    return 1;
  }
}
