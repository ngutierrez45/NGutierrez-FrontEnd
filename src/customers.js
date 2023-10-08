import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./customers.css";
import { customerSearch } from "./functions";
import Popup from 'reactjs-popup';
import { speak, begone, cussDetails, changeCus } from "./functions";

function Customers() {
  useEffect(() => {
  const cusbutton = document.getElementById("cussearch");
    const idchoice = document.getElementById("chooseid");
    const fnamechoice = document.getElementById("choosefname");
    const lnamechoice = document.getElementById("chooselname");
    const customer1 = document.getElementById("cus1");
    const customer2 = document.getElementById("cus2");
    const customer3 = document.getElementById("cus3");
    const customer4 = document.getElementById("cus4");
    const customer5 = document.getElementById("cus5");
    const customer6 = document.getElementById("cus6");
    const customer7 = document.getElementById("cus7");
    const customer8 = document.getElementById("cus8");
    const customer9 = document.getElementById("cus9");
    const customer10 = document.getElementById("cus10");
    const customer11 = document.getElementById("cus11");
    const customer12 = document.getElementById("cus12");
    const customer13 = document.getElementById("cus13");
    const customer14 = document.getElementById("cus14");
    const customer15 = document.getElementById("cus15");
    const customer16 = document.getElementById("cus16");
    const customer17 = document.getElementById("cus17");
    const customer18 = document.getElementById("cus18");
    const customer19 = document.getElementById("cus19");
    const customer20 = document.getElementById("cus20");
    
   cusbutton.addEventListener("click", () =>{customerSearch(idchoice.value, fnamechoice.value, lnamechoice.value)});
  
   customer1.addEventListener("click",()=>{cussDetails(customer1.innerHTML)});
   customer2.addEventListener("click",()=>{cussDetails(customer2.innerHTML)});
   customer3.addEventListener("click",()=>{cussDetails(customer3.innerHTML)});
   customer4.addEventListener("click",()=>{cussDetails(customer4.innerHTML)});
   customer5.addEventListener("click",()=>{cussDetails(customer5.innerHTML)});
   customer6.addEventListener("click",()=>{cussDetails(customer6.innerHTML)});
   customer7.addEventListener("click",()=>{cussDetails(customer7.innerHTML)});
   customer8.addEventListener("click",()=>{cussDetails(customer8.innerHTML)});
   customer9.addEventListener("click",()=>{cussDetails(customer9.innerHTML)});
   customer10.addEventListener("click",()=>{cussDetails(customer10.innerHTML)});
   customer11.addEventListener("click",()=>{cussDetails(customer11.innerHTML)});
   customer12.addEventListener("click",()=>{cussDetails(customer12.innerHTML)});
   customer13.addEventListener("click",()=>{cussDetails(customer13.innerHTML)});
   customer14.addEventListener("click",()=>{cussDetails(customer14.innerHTML)});
   customer15.addEventListener("click",()=>{cussDetails(customer15.innerHTML)});
   customer16.addEventListener("click",()=>{cussDetails(customer16.innerHTML)});
   customer17.addEventListener("click",()=>{cussDetails(customer17.innerHTML)});
   customer18.addEventListener("click",()=>{cussDetails(customer18.innerHTML)});
   customer19.addEventListener("click",()=>{cussDetails(customer19.innerHTML)});
   customer20.addEventListener("click",()=>{cussDetails(customer20.innerHTML)});
   
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
                {<button> Add Customer </button>}
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
                {<button> Delete Customer </button>}
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
      <Popup trigger=
                {<button> Update Customer Details </button>}
                modal nested>
                  {
                    close => (
                      <><div>Select Customer By ID:</div><input type="text" id="ident" placeholder="4" />
                      <div>Change First Name:</div><input type="text" id="first2" placeholder="Ex.Fred" />
                      <div>Change Last Name:</div><input type="text" id="last2" placeholder="Ex.Durst" />
                      <div>Change Email:</div><input type="text" id="mail2" placeholder="fdchamp@gmail.com" />
                      <div><button onClick={() => close()}>Cancel</button></div>
                      <div><button id="sub" onClick={()=> changeCus(document.getElementById("ident").value,document.getElementById("first2").value,document.getElementById("last2").value,document.getElementById("mail2").value)}>Submit</button></div></>
                    )}
      </Popup>
      <br></br>
  
      <input class="list" id="list" type="button" value="Customer Seach Result"/>
      <input class="details" id="details" type="button" value="Customer Details Below"/>
      
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
      <div className="info">
      <table>
      <tr>
        <th>Customer Details</th>
      </tr>
        <tr>
          <th>ID:</th>
          <th id="identify">     </th>
        </tr>
        <tr>
          <th>First Name:</th>
          <th id="namefirst">     </th>
        </tr>
        <tr>
          <th>Last Name:</th>
          <th id="namelast">     </th>
        </tr>
        <tr>
          <th>Address ID:</th>
          <th id="address">     </th>
        </tr>
        <tr>
          <th>Creation Date:</th>
          <th id="cre-date">     </th>
        </tr>
        <tr>
          <th>Last Update:</th>
          <th id="up-date">     </th>
        </tr>
      </table>
      <table className="rents">
      <tr>
        <th>Rented Movies</th>
      </tr>
        <tr>
          <th id="rent1">     </th>
        </tr>
        <tr>
          <th id="rent2">     </th>
        </tr>
        <tr>
          <th id="rent3">     </th>
        </tr>
        <tr>
          <th id="rent4">     </th>
        </tr>
        <tr>
          <th id="rent5">     </th>
        </tr>
        <tr>
          <th id="rent6">     </th>
        </tr>
        <tr>
          <th id="rent7">     </th>
        </tr>
        <tr>
          <th id="rent8">     </th>
        </tr>
        <tr>
          <th id="rent9">     </th>
        </tr>
        <tr>
          <th id="rent10">     </th>
        </tr>
        <tr>
          <th id="rent11">     </th>
        </tr>
        <tr>
          <th id="rent12">     </th>
        </tr>
        <tr>
          <th id="rent13">     </th>
        </tr>
        <tr>
          <th id="rent14">     </th>
        </tr>
        <tr>
          <th id="rent15">     </th>
        </tr>
        <tr>
          <th id="rent16">     </th>
        </tr>
        <tr>
          <th id="rent17">     </th>
        </tr>
        <tr>
          <th id="rent18">     </th>
        </tr>
        <tr>
          <th id="rent19">     </th>
        </tr>
        <tr>
          <th id="rent20">     </th>
        </tr>
        <tr>
          <th id="rent21">     </th>
        </tr>
        <tr>
          <th id="rent22">     </th>
        </tr>
        <tr>
          <th id="rent23">     </th>
        </tr>
        <tr>
          <th id="rent24">     </th>
        </tr>
        <tr>
          <th id="rent25">     </th>
        </tr>
      </table>
      </div>
    </div>
  
  );
}

export default Customers;
