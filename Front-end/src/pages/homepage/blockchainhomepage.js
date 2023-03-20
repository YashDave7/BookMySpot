import React,{useEffect, useState} from "react";
import { ethers } from "ethers";
import abi from "./utils/WavePortal.json";
import './App.css';

const getEthereumObject = () => window.ethereum;

const findMetaMaskAccount = async () => {
  
  try {
    const ethereum = getEthereumObject();

    if(!ethereum) {
      console.log("Make sure you have Metamask installed");
      return null;
    }
    console.log("We have ethereum object: ", ethereum);
    const accounts = await ethereum.request({method: "eth_accounts"});

    if(accounts.length !== 0) {
      const account = accounts[0];
      console.log("Authorized account found! ",account);
      return account;
    } else {
      console.log("No authorized account found!");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }  
  
}

export default function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [message, setMessage] = useState("");
  const [totalWaves, setTotalWaves] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [allWaves, setAllWaves] = useState([]);
  
  const contractAddress = "0xA0776FB49f1Cb23925197C8B7eb57d65abc67303";

  const contractABI = abi.abi;
  
  const wave = async () => {
    try {
      const {ethereum} = window;

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
        let count = await wavePortalContract.getTotalWaves();
        console.log("Retreived total wave count is ", count.toNumber());

        const waveTxn = await wavePortalContract.wave(message, {gasLimit: 300000});
        setIsLoading(true);
        setMessage("");
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait().then(() => {setIsLoading(false);});
        console.log("Mined--", waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        setTotalWaves(count.toString());
        console.log("Retreived total wave count is ", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
    
    
  }

  const connectWallet = async () => {
    try {
      const ethereum = await getEthereumObject();

      if (!ethereum) {
        alert("Get Metamask!");
        return;
      }

      const accounts = await ethereum.request({method: "eth_requestAccounts"});

      console.log("Connected!", accounts[0]);
      setCurrentAccount(accounts[0]);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  }

  const totalWavesCounter = async () => {
    try {
      const {ethereum} = window;

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        let count = await wavePortalContract.getTotalWaves();
        return count;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const getAllWaves = async () => {
    try {
      const {ethereum} = window;
      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        const waves = await wavePortalContract.getAllWaves();

        const wavesCleaned = [];
        waves.forEach((wave) => {
          wavesCleaned.push({
            address:wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message
          })
        })

        setAllWaves(wavesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(async () => {
    let wavePortalContract;

    const onNewWave = (from , timestamp, message) => {
      console.log("new wave", from, timestamp, message);
      setAllWaves(prevState => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message: message,
        },
      ]);
    };

    if(window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
      wavePortalContract.on("NewWave", onNewWave);
    }

    return () => {
      if(wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
      }
    };
    
  }, []);

  useEffect(async () => {
    const account = await findMetaMaskAccount();
    if(account !== null) {
      setCurrentAccount(account);
      getAllWaves();
      const count = await totalWavesCounter();
      setTotalWaves(count.toString());
    }
    
  },[]);
  
  return (
    <>
      <div className="mainContainer">
        <div className="dataContainer">
          <div className="header">
          👋🏽 Hey there!
          </div>
  
          <div className="bio">
            I am Moheet a solidity developer, connect your wallet to wave👋 at me and get a chance to be a decentralized random Lottery winner.
          <div className="waveCounter">Total Waves: {totalWaves}</div>
          </div>
          <label htmlFor="textarea">Tell me something :</label>
          <textarea id="textarea" className="textArea" rows="4" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
          <button className="waveButton" onClick={wave}>
            Wave at Me {isLoading && <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="loading..." />}
          </button>
          {!currentAccount && (
            <button className="waveButton" onClick={connectWallet}>Connect Wallet</button>
          )}

          {allWaves.map((wave, index) => {
          return (
            <div key={index} style={{ backgroundColor: "OldLace", marginTop: "16px", padding: "8px" }}>
              <div>Address: {wave.address}</div>
              <div>Time: {wave.timestamp.toString()}</div>
              <div>Message: {wave.message}</div>
            </div>)
        })}
        </div>
        
      </div>
      </>
  );
}