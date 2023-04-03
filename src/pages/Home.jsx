import React from 'react'
import {connectWallet} from "../components/web3Connect"

const Home = () => {
  return (
  <>
    <h2>Market Place Home</h2>
    <button style={{background: "green", color: "white"}} onClick={connectWallet}>Connect Wallet</button>
  </>
  )
}

export default Home