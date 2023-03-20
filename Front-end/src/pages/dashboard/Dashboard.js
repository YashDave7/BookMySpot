import React from 'react'
import { Link } from 'react-router-dom'


export default function Dashboard() {
  return (
    <div>
      <button className="btn btn-outline-primary" type="submit">
       <Link className="nav-link" to="/history">
                {/* {props.about} */}
                To history of clients
        </Link> </button>
    </div>
  )
}
