import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import React from "react";

const employeePage = () => {
  return (
    <div>
      <div className="form">
        <form>
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="First name"></input>
          <input type="checkbox"></input>
        </form>
      </div>
      <Link href="/">Home</Link>
    </div>
  );
};

export default employeePage;
