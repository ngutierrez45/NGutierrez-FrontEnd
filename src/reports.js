import React from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf"; 
import { customerSearch2 } from "./functions";

function Reports() {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text(10, 10, "Customer Emails who have rented a movie:");

    const customerEmails = customerSearch2("", "", ""); 

    let yPosition = 30;
    customerEmails.forEach((email) => {
      doc.text(20, yPosition, email);
      yPosition += 10;
    });

    doc.save("customer_emails.pdf");
  };

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
