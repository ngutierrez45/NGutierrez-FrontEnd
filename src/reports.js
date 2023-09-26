import React from "react";
import { Link } from "react-router-dom";

function Reports() {

  return (
    <div className="App">
      <p class="current">Reports Page</p>

      <Link to="/movies">
      <input class="m" id="movies" type="button" value="Movies"/>
      </Link>
      <Link to="/customers">
      <input class="c" id="customers" type="button" value="Customers" />
      </Link>
      <input class="r" id="reports" type="button" value="Reports" />

      <br></br>   <br></br>

     <input type="button" id="generate" value="Create PDF of Customers"/>
      
    </div>
  
  );
}

export default Reports;
