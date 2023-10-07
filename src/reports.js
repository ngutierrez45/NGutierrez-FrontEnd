import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { customerSearch2 } from "./functions";

function Reports() {

  useEffect(() => {
    const btn = document.getElementById("generate");

    const generatePDF = () => {
      customerSearch2("","","");
    };

    btn.addEventListener("click", generatePDF);

  }, []);

  return (
    <div className="App">
      <p className="current">Reports Page</p>

      <Link to="/movies">
        <input className="m" id="movies" type="button" value="Movies" />
      </Link>
      <Link to="/customers">
        <input className="c" id="customers" type="button" value="Customers" />
      </Link>
      <input className="r" id="reports" type="button" value="Reports" />

      <br></br>
      <br></br>

      <input type="button" id="generate" value="Create PDF of Customers"/>

    </div>
  );
}

export default Reports;
