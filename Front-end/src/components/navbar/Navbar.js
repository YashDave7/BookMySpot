// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'

// import logo from "../../assets/AdaniElectricity.svg"

// import './navbar.css'


// export default function Navbar() {
//   const [isNavExpanded, setIsNavExpanded] = useState(false)
//   return (
//     <>
  
//   {/* <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
       
//         PseudoCoders
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
            
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/login">
         
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/signup">
               
//                 SignUp
//               </Link>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-primary" type="submit">
//                 Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav> */}

//     {/* <header>
//       <div className="logo-container">
       
//         <h1>EPPO</h1>
//       </div>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>My Appointment</li>
//           <li>History</li>
//         </ul>
//       </nav>
//     </header> */}
//     {/* <header>
//       <img className="logo" src={logo} alt="logo" />
//       <nav>
//         <ul className="nav_links">
//           <li className="nav_li"><Link to="#">Services</Link></li>
//           <li className="nav_li"><Link to="#">Projects</Link></li>
//           <li className="nav_li"><Link to="#">About</Link></li>
//         </ul>
//       </nav>
//       <Link className="cta" to="#"><button>Contact</button></Link>
      
//     </header> */}

//     <header className=''>
//     <Link className="navbar-brand" to="/">
//     <img className="logo" src={logo} alt="logo" />
//         </Link>
      
//       <nav>
//         <ul className="nav_links">
//           <li className="nav_li"><Link className="nav-link" to="/about">
//                 {/* {props.about} */}
//                 About
//               </Link></li>
//           <li className="nav_li"><Link className="nav-link" to="/login">
//                 {/* {props.about} */}
//                 Login
//               </Link></li>
//           <li className="nav_li">
//             <Link className="nav-link" to="/signup">
//                 {/* {props.about} */}
//                 SignUp
//               </Link></li>
//         </ul>
//       </nav>
//       <Link className="cta" to="#"><button>Contact</button></Link>
      
//     </header>

//     {/* <div className="d-flex justify-content-between">...</div> */}

// </>
    
//   )
// }


import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import logo from "../../assets/AdaniElectricity.svg"

import './navbar.css'


export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <>



 
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="#" style={{color: '#007bff', fontWeight: 'bolder' ,paddingLeft:'5px'}}><i class="fa-solid fa-calendar-check w-0" style={{paddingRight:'50px',paddingLeft:'10px',width:'0'}}></i>BookMySpot</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto" style={{position: 'absolute',
    right: '5px'}}>
            <li className="nav-item active">
              <Link className="nav-link active" aria-current="page" to="/">
                 Home
               </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footerss">Contact Us</a>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">
            Login
            </Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">SignUp</Link>
            </li>
          </ul>
          &nbsp;&nbsp;</div>
      </nav>
 



  
    {/* <header classNameName=''>
    <Link className="navbar-brand" to="/">
    <img className="logo" src={logo} alt="logo" />
        </Link>
      
      <nav>
        <ul className="nav_links">
          <li className="nav_li"><Link className="nav-link" to="/about">
                About
              </Link></li>
          <li className="nav_li"><Link className="nav-link" to="/login">
                
                Login
              </Link></li>
          <li className="nav_li">
            <Link className="nav-link" to="/signup">
               
                SignUp
              </Link></li>
        </ul>
      </nav>
      <Link className="cta" to="#"><button>Contact</button></Link>
      
    </header> */}

    {/* <div className="d-flex justify-content-between">...</div> */}

</>
    
  )
}
