// import { func } from 'prop-types'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import Axios from "axios";

export default function Prosignup() {

  async function handleClick() {
    var newPro = {
      name: name,
      profession: profession,
      email: email,
      mobile: mobile,
      password: password,
      location: cityName,
      price: price,
    }
    try {
      const response = await Axios.post("http://localhost:4000/professional/signup",
        newPro
      );
      console.log(response);
    } catch (error) {
      console.log("Axios Error");
    }
  }

  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  // const [location,setLocation] =  useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [price, setPrice] = useState("");
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
    <div>
      <section class="register">
        <div class="container">
          <div class="title">Professional Registration</div>
          <div class="content">
            <form action="#">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Full Name</span>
                  <input type="text" placeholder="Enter your name" name="name" value={name} required onChange={(e) => { setName(e.target.value) }}/>
                </div>
              </div>
              <div class="input-box">
                <span class="details">Profession</span>
                <input type="text" placeholder="Enter your Profession" value={profession} name="profession" required onChange={(e) => { setProfession(e.target.value) }}/>
              </div>
              {/* <div class="input-box">
                  <span class="details">Profession</span>
                  <input type="text" placeholder="Enter your username" name="name" required>
                    <select id="profession" name="profession">
                      <option value="Profession">Select</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Lawyer">Lawyer</option>
                      <option value="Barber">Barber</option>
                      <option value="Dentist">Dentist</option>
                    </select>
                </div> */}
              <div class="input-box">
                <span class="details">Email</span>
                <input type="text" placeholder="Enter your email" value={email} name="email" required onChange={(e) => { setEmail(e.target.value) }}/>
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" value={mobile} name="mobile" required onChange={(e) => { setMobile(e.target.value) }}/>
              </div>

              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password " value={password} name="password" required onChange={(e) => { setPassword(e.target.value) }}/>
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" name="password" required />
              </div>

              {/* <div class="input-box-time">
                  <span class="details">Select a time slot</span>
                  <span class="details">From </span>
                  <input type="time" id="appt" name="time" min="09:00" max="18:00" required>
                    <span class="details">To </span>
                    <input type="time" id="appt" name="time" min="09:00" max="18:00" required> */}

              <div class="input-box">
                <span class="details">Average Pricing</span>
                <input type="text" placeholder="Average Price" value={price} name="price" required onChange={(e) => { setPrice(e.target.value) }}/>
              </div>

              <button id="get-location-btn" onClick={handleLocationClick} name="location"><i class="fa-solid fa-location-dot"></i>Get
                Location</button>

              <div id="location">
                <span id="city-name">City: {cityName}</span>
                <span id="coordinates"></span>
              </div>
              {/* <div class="input-box">
                      <span class="details">Average rate</span>
                      <!-- <label for="points">Points (between 500 and 5000):</label>
                      <input type="range" id="points" name="points" min="500" max="5000"> -->
                        <input id="pi_input" type="range" min="500" max="5000" step="" name="rate" />
                        <p>Rate: <output id="value" ></output></p>

                    </div> */}


              <div class="button">
                <button className="btn btn-outline-primary" type="submit" onClick={handleClick}>
                  <Link className="nav-link" to="/Prologin">
                    To Login
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}