import Link from "next/link";
import React from "react";

const employerPage = () => {
  return (
    <>
    
      <div className="form">
        <form>
          <input
            className="input"
            type="text"
            placeholder="Company name"
          ></input>
          <input className="input" type="date" placeholder="Start date"></input>
          <input className="input" type="date" placeholder="End date"></input>
          
          <div className="check-boxes">
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              defaultValue="Bike"
            />
            <label htmlFor="vehicle1"> Javascript</label>
            <br />
            <input
              type="checkbox"
              id="vehicle2"
              name="vehicle2"
              defaultValue="Car"
            />
            <label htmlFor="vehicle2"> Python</label>
            <br />
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              defaultValue="Boat"
            />
            <label htmlFor="vehicle3"> Java</label>
            <br />
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              defaultValue="Boat"
            />
            <label htmlFor="vehicle3"> AWS</label>
            <br />
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              defaultValue="Boat"
            />
            <label htmlFor="vehicle3"> CSS</label>
            <br />
           
          </div>
          <button className="submit">Submit</button>
        </form>
        <Link href='/' style={{textDecoration: 'none', border: '1px solid black', padding: '5px', color: 'black'}}>Home</Link>
      </div>
      
    </>
  );
};

export default employerPage;
