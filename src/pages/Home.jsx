import React from "react";
import { connectWallet } from "../components/web3Connect";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  async function verifyUser() {
    const output = await connectWallet();
    console.log(output);
    if (output === 0) {
      navigate("/denied");
    } else {
      navigate("/welcome");
    }
  }
  return (
    <>
      <h2>Market Place Home</h2>
      <button
        style={{ background: "green", color: "white" }}
        onClick={verifyUser}
      >
        Connect Wallet
      </button>
    </>
  );
};

export default Home;
