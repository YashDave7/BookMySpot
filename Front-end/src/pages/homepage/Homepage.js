import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios";
import Feed from '../../components/clientpagepro/Feed';
import detectEthereumProvider from '@metamask/detect-provider';
import { ExternalProvider } from "@ethersproject/providers";
import Professional from '../../components/clientpagepro/Professional';
import abi from "./abi.json";
// import Navbar from '../../components/navbar/Navbar'
// import homeimg from '../../assets/go.png'
// import Clientpagepro from '../../components/clientpagepro/Clientpagepro'
 
import './homepage.css'
const ethers = require("ethers");

const getEthereumObject = () => window.ethereum;

// const findMetaMaskAccount = async () => {
  
//   try {
//     const ethereum = getEthereumObject();

//     if(!ethereum) {
//       console.log("Make sure you have Metamask installed");
//       return null;
//     }
//     console.log("We have ethereum object: ", ethereum);
//     const accounts = await ethereum.request({method: "eth_accounts"});

//     if(accounts.length !== 0) {
//       const account = accounts[0];
//       console.log("Authorized account found! ",account);
//       return account;
//     } else {
//       console.log("No authorized account found!");
//       return null;
//     }
//   } catch (error) {
//     console.log(error);
//     return null;
//   } 
// }

export default function Homepage() {
  const [pros, setPros] = useState([]);
  const [currentAccount, setCurrentAccount] = useState("");
  const [search,setsearch]=useState('');
  const [isLoading, setIsLoading] = useState(false);
  const contractAddress = "0x429b205029eF6CE376b30a179a49054233Dae6ea";
  const contractABI = abi.abi;

  const connectWallet = async (e) => {
    // e.preventDefault();
    try {
      const ethereum = await getEthereumObject();

      if (!ethereum) {
        alert("Get Metamask!");
        return;
      } else {
        console.log("You have metamask");
      }

      const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
      console.log(accounts);
      console.log("Connected!", accounts[0]);
      setCurrentAccount(accounts[0]);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };


  const implementTransfer = async () => {
    try {
      const {ethereum} = window;

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const eppo = new ethers.Contract(contractAddress, contractABI, signer);
        const amount = await ethers.utils.parseEther("0.0001");
        const waveTxn = await eppo.transfer("0xAaD4e106f05AADf25f8e1C4B321896d445FCdbA8", {value: amount});
        setIsLoading(true);
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait().then(() => {setIsLoading(false);});
        console.log("Mined--", waveTxn.hash);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   const findMeta = async () => {
  //     const account = await findMetaMaskAccount();
  //     if(account !== null) {
  //       setCurrentAccount(account);
  //     }
  //   }
  //   findMeta();
  // },[]);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      // let fetchRes = await fetch(
      //   "http://localhost:4000/professionals");
      //   // fetchRes is the promise to resolve
      //   // it by using.then() method
      //   fetchRes.then(res =>
      //     res.json()).then(d => {
      //       console.log(d)
      //   })
      const response = await Axios.get("http://localhost:4000/professionals");
      console.log(response.data);
      setPros(response.data);
    } catch (err) {
      // if (err.response) {
      //   // Not in the 200 response range 
      //   console.log(err.response.data);
      //   console.log(err.response.status);
      //   console.log(err.response.headers);
      // } else {
      //   console.log(`Error: ${err.message}`);
      // }
      console.log(err);
    }
  }

  fetchPosts();

},[])

  return (
    <>
    <div>
      <button className="btn btn-outline-primary" type="submit">
       <Link className="nav-link" to="/myappointment">
                {/* {props.about} */}
                To Clients appointment
        </Link> </button>

        <button className="btn btn-outline-primary" type="submit">
       <Link className="nav-link" to="/clienthistory">
                {/* {props.about} */}
                To Client's History
        </Link> </button>
        {/* <img src={homeimg} id="imagebulb" alt="logo" width="200vw" 
                /> */}
                <button onClick={connectWallet}>connect Wallet</button>
      <button onClick={implementTransfer}>Transfer</button>
    
    
    </div>
    

    <form className="my-3  d-flex homepage_form" onSubmit={(e)=>e.preventDefault}>
            <input
              className="form-control mr-sm-2 mx-3"
              type="text"
              placeholder="Book your appointment now!!"
              aria-label="Search"
              id='search'
              role='searchbox'
              onChange={(e)=>setsearch(e.target.value)}

            />
            <button
              className=" my-2 my-sm-0 btn btn-outline-info"
              type="submit"

            >
              Search
            </button>
          </form>
      


{/* 2nd Form */}
<form className="container d-flex">
<div className="form-group mx-2">
    <label htmlFor="exampleFormControlInput1">Profession</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Doctor/Lawyer/Barber"/>
  </div>
  <div className="form-group mx-2">
    <label htmlFor="exampleFormControlInput1"> Rating</label>
    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Out of 5"/>
  </div>
  <div className="form-group mx-2">
    <label htmlFor="exampleFormControlInput1"> Location </label>
    <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="eg. Mumbai"/>
  </div>
  <div className="form-group mx-2">
    <label htmlFor="exampleFormControlInput1"> Charges</label>
    <input type="email" className="form-control" id="exampleFormControlInput4" placeholder="300(in Rupees)"/>
  </div>

</form>

    <div>
      <div className='d-flex flex-wrap'><Feed  
      
      pros={pros.filter(pro=>((pro.name).toLowerCase()).includes(search.toLowerCase()))}
      // pros={pros}  
      implementTransfer={implementTransfer}
      
      
      /></div>
      
    </div>
    
    </>
    
//     <>
//       <div className='my-3 d-flex justify-content-around'>
//       <button className="btn btn-outline-primary" type="submit">
//        <Link className="nav-link" to="/myappointment">
//                 {/* {props.about} */}
//                 Current Appointment 
//         </Link> </button>

//         <button className="btn btn-outline-primary" type="submit">
//        <Link className="nav-link" to="/clienthistory">
//                 {/* {props.about} */}
//                 Past Appointments
//         </Link> </button>
//         {/* <img src={homeimg} id="imagebulb" alt="logo" width="200vw" 
//                 /> */}
//     </div>
    

//     <form className="my-3  d-flex homepage_form">
//             <input
//               className="form-control mr-sm-2 mx-3"
//               type="search"
//               placeholder="Book your appointment now!!"
//               aria-label="Search"
//             />
//             <button
//               className=" my-2 my-sm-0 btn btn-outline-info"
//               type="submit"
//             >
//               Search
//             </button>
//           </form>
      


// {/* 2nd Form */}
// <form className="container d-flex">
// <div className="form-group mx-2">
//     <label htmlFor="exampleFormControlSelect1"> Profession</label>
//     <select className="form-control" id="exampleFormControlSelect1">
//       <option>Doctor</option>
//       <option>Lawyer</option>
//       <option>Barber</option>
//     </select>
//   </div>
//   <div className="form-group mx-2">
//     <label htmlFor="exampleFormControlInput1">Charges in INR</label>
//     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="200/300"/>
//   </div>
//   <div className="form-group mx-2">
//     <label htmlFor="exampleFormControlInput1">Location</label>
//     <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Mumbai,etc"/>
//   </div>

//   <div className="form-group mx-2">
//     <label htmlFor="exampleFormControlInput1">Ratings</label>
//     <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="Out of 5"/>
//   </div>
// </form>


// <div className="homepage_3card d-flex justify-content-around">
// <Clientpagepro name="Darshil" pro="Doctor" location="Mumbai" rate="300" email="darshilm11@gmail.com" contact="9812763450" time=""/>
// <Clientpagepro/>
// <Clientpagepro/>
// </div>
// {/* <div className="homepage_3card d-flex justify-content-around">
// <Clientpagepro/>
// <Clientpagepro/>
// <Clientpagepro/>
// </div>
// <div className="homepage_3card d-flex justify-content-around">
// <Clientpagepro/>
// <Clientpagepro/>
// <Clientpagepro/>
// </div>
// <div className="homepage_3card d-flex justify-content-around">
// <Clientpagepro/>
// <Clientpagepro/>
// <Clientpagepro/>
// </div> */}
//     </>
    
  )
}
