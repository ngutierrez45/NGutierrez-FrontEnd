import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./customers.css";
import { customerSearch } from "./functions";

function Customers() {
  useEffect(() => {
  const cusbutton = document.getElementById("cussearch");
    const idchoice = document.getElementById("chooseid");
    const fnamechoice = document.getElementById("choosefname");
    const lnamechoice = document.getElementById("chooselname");
 
   cusbutton.addEventListener("click", () =>{customerSearch(idchoice.innerHTML, fnamechoice.innerHTML, lnamechoice.innerHTML)});
  }, []);

   return (
    <div className="App">
      <p class="current">Customers Page</p>
      <Link to="/movies">
      <input class="m" id="movies" type="button" value="Movies"/>
      </Link>
      <input class="c" id="customers" type="button" value="Customers" />
      <Link to="/reports">
      <input class="r" id="reports" type="button" value="Reports"  />
      </Link>

      <br></br>   <br></br>

      <input class="search1" id="cussearch" type="button" value="Search Customer"/>
    
      <br></br>   
      <input type="text" id="chooseid" placeholder="Customer ID"/>
      <input type="text" id="choosefname" placeholder="First name"/>
      <input type="text" id="chooselname" placeholder="Last name"/>
      <br></br> <br></br>
      <input class="list" id="list" type="button" value="Customer Seach Result"/>
      <input class="details" id="details" type="button" value="Customer Details"/>
      
      <br></br>   <br></br>

      <div id="cusContainer">
        <table>
          <tr>
          <th>Results</th>
          </tr>
          <tr>
            <th id="cus1"></th>
          </tr>
          <tr>
            <th id="cus2"></th>
          </tr>
          <tr>
            <th id="cus3"></th>
          </tr>
          <tr>
            <th id="cus4"></th>
          </tr>
          <tr>
            <th id="cus5"></th>
          </tr>
          <tr>
            <th id="cus6"></th>
          </tr>
          <tr>
            <th id="cus7"></th>
          </tr>
          <tr>
            <th id="cus8"></th>
          </tr>
          <tr>
            <th id="cus9"></th>
          </tr>
          <tr>
            <th id="cus10"></th>
          </tr>
          <tr>
            <th id="cus11"></th>
          </tr>
          <tr>
            <th id="cus12"></th>
          </tr>
          <tr>
            <th id="cus13"></th>
          </tr>
          <tr>
            <th id="cus14"></th>
          </tr>
          <tr>
            <th id="cus15"></th>
          </tr>
          <tr>
            <th id="cus16"></th>
          </tr>
          <tr>
            <th id="cus17"></th>
          </tr>
          <tr>
            <th id="cus18"></th>
          </tr>
          <tr>
            <th id="cus19"></th>
          </tr>
          <tr>
            <th id="cus20"></th>
          </tr>
        </table>
      </div>
    </div>
  
  );
}

export default Customers;