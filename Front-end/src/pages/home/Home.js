import React from "react";

import "./home.css";

import homeimg from "../../assets/go.png";


export default function Home() {
  return (
    <>
      <div className="d-flex justify-content-around">
        <div className="home-content">
          <div><h1 className="mx-3  my-3 text-2">Easy Scheduling <span className="bluetext">Ahead</span></h1></div>
          {/* <h1 className="mx-3  my-3 text-2">Easy Scheduling <span className="bluetext">Ahead</span></h1> */}
          <p className="mx-3 text-1 my-3">
            #bookyourtimenow <br /> <span className="homewt">Save time...save resources...be productive!</span> 
          </p>
          <form className="form-inline my-3 my-lg-0 d-flex ">
            <input
              className="form-control mr-sm-2 mx-3"
              type="search"
              placeholder="Book your appointment now!!"
              aria-label="Search"
            />
            <button
              className=" my-2 my-sm-0 btn btn-outline-info"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="homeimg">
          <img src={homeimg} id="imagebulb" alt="logo" width="600vw" />
        </div>
      </div>

      
    </>
  );
}
