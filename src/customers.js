import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./customers.css";
import { customerSearch } from "./functions";
import Popup from 'reactjs-popup';
import { speak, begone } from "./functions";

function Customers() {
  useEffect(() => {
  const cusbutton = document.getElementById("cussearch");
    const idchoice = document.getElementById("chooseid");
    const fnamechoice = document.getElementById("choosefname");
    const lnamechoice = document.getElementById("chooselname");
    
   cusbutton.addEventListener("click", () =>{customerSearch(idchoice.value, fnamechoice.value, lnamechoice.value)});
  
   
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
      <Popup trigger=
                {<button> Add Customer Button </button>}
                modal nested>
                  {
                    close => (
                      <><div>First Name:</div><input type="text" id="first" placeholder="Ex.Fred" />
                      <div>Last Name:</div><input type="text" id="last" placeholder="Ex.Durst" />
                      <div>Email:</div><input type="text" id="mail" placeholder="fdchamp@gmail.com" />
                      <div><button onClick={() => close()}>Cancel</button></div>
                      <div><button id="sub" onClick={()=> speak(document.getElementById("first").value,document.getElementById("last").value,document.getElementById("mail").value)}>Submit</button></div></>
                    )}
      </Popup>
      <Popup trigger=
                {<button> Delete Customer Button </button>}
                modal nested>
                  {
                    close => (
                      <><div>First Name:</div><input type="text" id="first1" placeholder="Ex.Fred" />
                      <div>Last Name:</div><input type="text" id="last1" placeholder="Ex.Durst" />
                      <div>Email:</div><input type="text" id="mail1" placeholder="fdchamp@gmail.com" />
                      <div><button onClick={() => close()}>Cancel</button></div>
                      <div><button id="sub" onClick={()=> begone(document.getElementById("first1").value,document.getElementById("last1").value,document.getElementById("mail1").value)}>Submit</button></div></>
                    )}
      </Popup>
      <br></br>
  
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
