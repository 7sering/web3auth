import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connectWallet } from "../components/web3Connect";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = setInterval(() => {
      verifyUser();
    }, 2000);
    return () => clearInterval(checkAuth);
  },[verifyUser]);

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
      <h2>Welcome To Marketplace</h2>
    </>
  );
};

export default Welcome;
