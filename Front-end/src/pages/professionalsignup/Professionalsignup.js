
import { ReactDOM } from "react";
import React from "react";




const Professionalsignup = () => {
  return (
    <main>
  <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="#" style="color: #007bff; font-weight: bolder;"><img src="\images\logo.png"
                alt=""/> Appointer</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
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
                    <a className="nav-link" href="/patientLogin">User login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/DoctorLogin">Professional Login</a>
                </li>
            </ul>
        </div>
    </nav>
    <section className="register">
        <div className="container">
            <div className="title">Professional Registration</div>
            <div className="content">
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="Enter your name" name="name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Profession</span>
                            <select id="profession" name="profession">
                                <option value="Profession">Select</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Lawyer">Lawyer</option>
                                <option value="Barber">Barber</option>
                                <option value="Dentist">Dentist</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter your email" name="email" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" placeholder="Enter your number" name="contact" required/>
                        </div>

                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="text" placeholder="Enter your password" name="password" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="text" placeholder="Confirm your password" name="password" required/>
                        </div>

                        <div className="input-box-time">
                            <span className="details">Select a time slot</span>
                            <span className="details">From </span>
                            <input type="time" id="appt" name="time" min="09:00" max="18:00" required/>
                            <span className="details">To </span>
                            <input type="time" id="appt" name="time" min="09:00" max="18:00" required/>
                        </div>

                        <button id="get-location-btn" name="location"><i className="fa-solid fa-location-dot"></i>Get
                            Location</button>

                        <div id="location">
                            <span id="city-name"></span>
                            <span id="coordinates"></span>
                        </div>
                        <div className="input-box">
                            <span className="details">Average rate</span>
                            <input id="pi_input" type="range" min="500" max="5000" step=""  name="rate"/>
                            <p>Rate: <output id="value" ></output></p>

                        </div>

                    </div>

                    <div className="gender-details">
                        <input type="radio" name="gender" id="dot-1"/>
                        <input type="radio" name="gender" id="dot-2"/>
                        <input type="radio" name="gender" id="dot-3"/>
                        <span className="gender-title">Gender</span>
                        <div className="category">
                            <label for="dot-1">
                                <span className="dot one"></span>
                                <span className="gender">Male</span>
                            </label>
                            <label for="dot-2">
                                <span className="dot two"></span>
                                <span className="gender">Female</span>
                            </label>
                            <label for="dot-3">
                                <span className="dot three"></span>
                                <span className="gender">Prefer not to say</span>
                            </label>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Register"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <footer id="footer">
        <i className="fa-brands fa-twitter  contlogo"></i>
        <i className="fa-brands fa-facebook contlogo"></i>
        <i className="fa-brands fa-instagram contlogo"></i>
  
        <p>© Copyright pesudocodes</p>

    </footer>
      
    </main>
  )
}

export default Professionalsignup






// const getLocationBtn = document.getElementById('get-location-btn');
// const cityNameSpan = document.getElementById('city-name');
// const coordinatesSpan = document.getElementById('coordinates');

// getLocationBtn.addEventListener('click', () => {
//   if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(async position => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
//       const data = await response.json();
//       const cityName = data.city || 'Unknown City';
//       cityNameSpan.textContent = cityName;
//     //   coordinatesSpan.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
//     });
//   } else {
//     cityNameSpan.textContent = 'Geolocation is not supported by this browser.';
//   }
// });
// const value = document.querySelector("#value")
// const input = document.querySelector("#pi_input")
// value.textContent = input.value
// input.addEventListener("input", (event) => {
//   value.textContent = event.target.value
// })

