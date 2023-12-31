import './App.css';
import { useState, useEffect } from 'react';
import { contractAddress, contractABI } from "./constants";
import Navbar from "./Components/Navbar/Navbar"
import Homepage from './Pages/Homepage/Homepage';
import Profile from './Pages/Profile/Profile';
import SuggestionBox from './Components/SuggestionBox/SuggestionBox';
import Following from './Pages/Following/Following';
import Bookmarks from './Pages/Bookmarks/Bookmarks';
import CreateProfile from './Pages/CreateProfile/CreateProfile';
import { publicProvider } from "wagmi/providers/public";
import { ethers } from "ethers";

function App() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function loadBcData() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);
        const contractInstance = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contractInstance);
        setContract(contractInstance);
        setIsLoading(false);
        const address = await signer.getAddress();
        console.log("Metamask Connected to " + address);
        setAccount(address);
      } else {
        const provider = new ethers.providers.Web3Provider(publicProvider);
        const signer = provider.getSigner();
        setSigner(signer);
        const contractInstance = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contractInstance);
        setContract(contractInstance);
        setIsLoading(false);
        const address = await signer.getAddress();
        console.log("Public Provider Connected to " + address);
        setAccount(address);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    loadBcData();
  }, []);

  return (
    <div className="App">
      <Navbar setAccount={setAccount} setConnected={setConnected} />
      {/* <Homepage contract={contract} /> */}
      <Profile/>
      {/* <Following/> */}
      <SuggestionBox />
      {/* <CreateProfile contract={contract} /> */}
    </div>
  );
}

export default App;
