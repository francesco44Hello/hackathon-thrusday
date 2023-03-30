import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import React from "react";

const employeePage = () => {
  return (
    <>
      <div className="form">
        <form>
          <div className="input-label"> 
            <label for="name">Name:</label>
            <br></br>
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="Name"
            ></input>
          </div>
          <div className="input-label">
            <label for="Start date">Start date:</label>
            <br></br>
            <input
              className="input"
              type="date"
              placeholder="Start date"
              name="Start date"
            ></input>
          </div>
          <div className="input-label">
            <label for="End date">End date:</label>
            <input
              className="input"
              type="date"
              placeholder="End date"
              name="End date"
            ></input>
          </div>
          <label for="Skills:">Skills:</label>
          <div className="check-boxes">
            <input
              type="checkbox"
              id="Javascript"
              name="Javascript"
              defaultValue="Javascript"
            />
            <label htmlFor="Javascript"> Javascript</label>
            <br />
            <input
              type="checkbox"
              id="Python"
              name="Python"
              defaultValue="Python"
            />
            <label htmlFor="Python"> Python</label>
            <br />
            <input type="checkbox" id="Java" name="Java" defaultValue="Java" />
            <label htmlFor="Java"> Java</label>
            <br />
            <input type="checkbox" id="AWS" name="AWS" defaultValue="AWS" />
            <label htmlFor="AWS"> AWS</label>
            <br />
            <input type="checkbox" id="CSS" name="CSS" defaultValue="CSS" />
            <label htmlFor="CSS"> CSS</label>
            <br />
          </div>
          <button className="submit">Submit</button>
        </form>
        
      
      </div>
      <Link
          href="/"
          style={{
            textDecoration: "none",
            border: "1px solid black",
            padding: "5px",
            color: "black",
          }}
        >
          Home
        </Link>
    </>
  );
};

export default employeePage;
