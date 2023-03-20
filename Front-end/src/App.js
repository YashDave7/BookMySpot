import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Prologin from './pages/login/Prologin';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Homepage from './pages/homepage/Homepage';
import Prohomepage from './pages/homepage/Prohomepage';
import History from './pages/history/History';
import Myappointment from './pages/myappointment/Myappointment';
import Clienthistory from './pages/history/Clienthistory';
import Footer from './components/footer/Footer';
import Professionalsignup from './pages/professionalsignup/Professionalsignup';
import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prosignup from './pages/signup/Prosignup';

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


function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const contractAddress = "0xA0776FB49f1Cb23925197C8B7eb57d65abc67303";
  // const contractABI = abi.abi;

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

  // useEffect(async () => {
  //   const account = await findMetaMaskAccount();
  //   if(account !== null) {
  //     setCurrentAccount(account);
  //   }
    
  // },[]);

  return (
    <>

    
    <Router>
      <Navbar/>
      {/* <Professionalsignup/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element = {<>ABOUT</>} />

        <Route exact path="/login" element = {
          <Login/>
        }/>

        <Route exact path="/dashboard" element = {
          <Dashboard/>
        }/>
        <Route exact path="/prosignup" element = {
          <Prosignup/>
        }/>
        <Route exact path="/prologin" element = {
          <Prologin />
        }/>

<Route exact path="/history" element = {
          <History/>
        }/>

        <Route exact path="/homepage" element = {
          <Homepage/>
        }/>

        <Route exact path="/Prohomepage" element = {
          <Prohomepage />
        }/>

        <Route exact path="/signup" element = {
          <SignUp/>
        }/>

        <Route exact path="/myappointment" element = {
          <Myappointment/>
        }/>

<Route exact path="/clienthistory" element = {
          
          <Clienthistory/>
        }/>
        
      </Routes>
  </Router>


  <Footer/>
    </>
  );
}

export default App;
