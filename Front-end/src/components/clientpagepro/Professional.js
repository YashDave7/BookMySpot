import React from 'react'
import { useState } from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions } from '@mobiscroll/react';
import moment from 'moment-timezone';
import { momentTimezone } from '@mobiscroll/react';


setOptions({
  theme: 'ios',
  themeVariant: 'light'
});


const Professional = ({profession, implementTransfer}) => {

  const [starttime,setstarttime]=useState([]);
  const [endtime,setendtime]=useState([]);

  const pickerStartChange = (ev) => {
      setstarttime(ev.value);

  }
  const pickerEndChange =(ev)=>{
      setendtime(ev.value);
  }

  momentTimezone.moment = moment;


  console.log(starttime);
console.log(endtime);

const Starttime=JSON.stringify(starttime,null,2).slice(12,20)
const Endtime=JSON.stringify(endtime,null,2).slice(12,20)




  return (
              

             <div className=" clientpropage card text-center">
         <div className="d-flex justify-content-around card-header">
          {/* <img src={docimg} alt="" width="30px" /> */}
         {profession.pro}
         </div>
         <div className=" card-body">
         {/* name="Darshil" pro="Doctor" location="Mumbai" rate="300" email="darshilm11@gmail.com" contact="9812763450" time="" */}
              <h5 className="card-title">{profession.name}</h5>
              <p className="d-flex justify-content-start">Profession : {profession.pro}</p>
              <p className="d-flex justify-content-start">Location : {profession.location}</p>
              <p className="d-flex justify-content-start">Charges : Rs.{profession.rate}</p>
              <p className="d-flex justify-content-start">Mail ID : {profession.email}</p>
              <p className="d-flex justify-content-start">Contact : {profession.contact}</p>
               {/* <Link to="/" className="btn btn-primary">Book Appointment</Link> */}
          </div>
          <div className="card-footer text-muted">
          {/* <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-warning">Warning</button> */}
          {/* <select class="form-select" aria-label="Default select example">
           <option selected>Select Time slot</option>
           <option value="1">One</option>
           <option value="2">Two</option>
            <option value="3">Three</option>
          </select> */}
    <Datepicker
                controls={['date','timegrid']}
                stepMinute={30}
                onChange={pickerStartChange}
                dataTimezone="utc"
                displayTimezone="Europe/London"
                timezonePlugin={momentTimezone} 
                inputProps={{
                    label: 'Date and Time',
                    labelStyle: 'stacked',
                    inputStyle: 'outline',
                    placeholder: 'Please Select  Start Date and Time'
                }}
            />
               <Datepicker
                controls={['date','timegrid']}
                stepMinute={30}
                onChange={pickerEndChange}
                dataTimezone="utc"
                displayTimezone="Europe/London"
                timezonePlugin={momentTimezone} 
                inputProps={{
                    label: 'Date and Time',
                    labelStyle: 'stacked',
                    inputStyle: 'outline',
                    placeholder: 'Please Select End Date and Time'
                }}
            />


          <button type="button" class="my-3 btn btn-outline-success" onClick={implementTransfer}>Book now</button>
         </div>
        </div>
       
  )
  
}



export default Professional
