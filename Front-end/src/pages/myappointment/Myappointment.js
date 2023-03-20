import React from 'react'

export default function Myappointment() {
  return (
    <div className='container my-2'>
      <h1>Current Appointments</h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Professional</th>
      <th scope="col">Cost</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Dr. Yash Dave</td>
      <td>Rs.300</td>
      <td>19-03-2023</td>
    </tr>
    
    <tr>
      <th scope="row">2</th>
      <td>Barber Faizal Jinnah</td>
      <td>Rs.500</td>
      <td>20-03-2023</td>
    </tr>
    
    <tr>
      <th scope="row">3</th>
      <td>Dr. Zahaan Ragaby</td>
      <td>Rs.300</td>
      <td>20-03-2023</td>
    </tr>
  
  </tbody>
</table>
    </div>
  )
}
