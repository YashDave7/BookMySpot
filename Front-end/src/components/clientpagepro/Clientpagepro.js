import React from 'react'
import { Link } from 'react-router-dom'
import docimg from "../../assets/doc.png"


// import

export default function Clientpagepro(props) {
  return (
    <div>
      <div className=" clientpropage card text-center">
         <div className="d-flex justify-content-around card-header">
          <img src={docimg} alt="" width="30px" />
         {props.pro}
         </div>
         <div className=" card-body">
         {/* name="Darshil" pro="Doctor" location="Mumbai" rate="300" email="darshilm11@gmail.com" contact="9812763450" time="" */}
              <h5 className="card-title">{props.name}</h5>
              <p className="d-flex justify-content-start">Location : {props.location}</p>
              <p className="d-flex justify-content-start">Charges : Rs.{props.rate}</p>
              <p className="d-flex justify-content-start">Mail ID : {props.email}</p>
              <p className="d-flex justify-content-start">Contact : {props.contact}</p>
               {/* <Link to="/" className="btn btn-primary">Book Appointment</Link> */}
          </div>
          <div className="card-footer text-muted">
          {/* <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-warning">Warning</button> */}
          <select class="form-select" aria-label="Default select example">
           <option selected>Select Time slot</option>
           <option value="1">One</option>
           <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button type="button" class="my-3 btn btn-outline-success">Book now</button>
         </div>
        </div>
    </div>
    
  )
}
