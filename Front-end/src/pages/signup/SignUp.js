import { func } from 'prop-types'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import Axios from "axios";

export default function SignUp() {

  async function handleClick () {
    var newUser =  {
      name: name,
      location: cityName,
      email: email,
      mobile: mobile,
      password: password
    }
    try {
      const response = await Axios.post("http://localhost:4000/user/signup",
        newUser
      );
      console.log(response);
    } catch (error) {
      console.log("Axios Error");
    }
  }

  const [name,setName] =  useState("");
  // const [location,setLocation] =  useState("");
  const [email,setEmail] =  useState("");
  const [mobile,setMobile] =  useState("");
  const [password,setPassword] =  useState("");
  const [cityName, setCityName] = useState('Unknown City');
  
  const handleLocationClick = async (e) => {
    e.preventDefault();

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
        const data = await response.json();
        const cityName = data.city || 'Unknown City';
        setCityName(cityName);
        console.log(cityName);
      });
    } else {
      setCityName('Geolocation is not supported by this browser.');
    } 
  }

  return (
        <section className="register">
            <div className="container">
                <div className="title">Registration</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" placeholder="Enter your name" name='name' value={name} required onChange={(e) => {setName(e.target.value)}} />
                            </div>
                            {/* <div className="input-box">
                                <span className="details">Username</span>
                                <input type="text" placeholder="Enter your username" required/>
                            </div> */}
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" value={email} name='email' required onChange={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" name='mobile' value={mobile} required onChange={(e) => {setMobile(e.target.value)}} />
                            </div>

                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="text" placeholder="Enter your password" name='password' value={password} required onChange={(e) => {setPassword(e.target.value)}} />
                            </div>
                            {/* <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="text" placeholder="Confirm your password" required/>
                            </div> */}


                            {/* <button id="get-location-btn"><i className="fa-solid fa-location-dot" onClick={handleLocationClick} ></i>Get
                                    Location</button>
                            <div id="location">
                                <span id='city-name'>City: {cityName}</span>
                                <span id="coordinates"></span>
                            </div> */}

<button id="get-location-btn" onClick={handleLocationClick} ><i className="fa-solid fa-location-dot"></i>Get
                                    Location</button>
                            <div id="location">
                                <span id='city-name'>City: {cityName}</span>
                                <span id="coordinates"></span>
</div>
                        </div>
                        <div className="button">
                            <button className="btn btn-outline-primary" type="submit" onClick={handleClick}>
                <Link className="nav-link" to="/homepage">
                  Signup                 
              </Link>
            </button>
            </div>
            <div className="button">
                            <button className="btn btn-outline-primary" type="submit">
                <Link className="nav-link" to="/Prosignup">
                  Are you a professional? -- click here --                
              </Link>
            </button>
            </div>


            {/* <div className="button">
                            <button className="btn btn-outline-primary" type="submit" onClick={handleClick}>
                              Signup
                            </button>
                    </div> */}
                    </form>
                </div> 
            </div>
        </section>

  )
}


