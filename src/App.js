import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { top5, movied, actors, actord, getMovieDesc, getActorTop5 } from "./functions";

function App() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

      
    const button4 = document.getElementById("5movies");
    const button5 = document.getElementById("moviedetails");
    const button6 = document.getElementById("actors");
    const button7 = document.getElementById("actordetails");
    const movie1Button = document.getElementById("row1");
    const movie2Button = document.getElementById("row2");
    const movie3Button = document.getElementById("row3");
    const movie4Button = document.getElementById("row4");
    const movie5Button = document.getElementById("row5");
    const actor1Button = document.getElementById("row1-1");
    const actor2Button = document.getElementById("row2-2");
    const actor3Button = document.getElementById("row3-3");
    const actor4Button = document.getElementById("row4-4");
    const actor5Button = document.getElementById("row5-5");

    button4.addEventListener("click", top5);
    button5.addEventListener("click", movied);
    button6.addEventListener("click", actors);
    button7.addEventListener("click", actord);
    movie1Button.addEventListener("click", () =>{getMovieDesc(movie1Button.innerHTML)});
    movie2Button.addEventListener("click", () =>{getMovieDesc(movie2Button.innerHTML)});
    movie3Button.addEventListener("click", () =>{getMovieDesc(movie3Button.innerHTML)});
    movie4Button.addEventListener("click", () =>{getMovieDesc(movie4Button.innerHTML)});
    movie5Button.addEventListener("click", () =>{getMovieDesc(movie5Button.innerHTML)});
    actor1Button.addEventListener("click", () =>{getActorTop5(actor1Button.innerHTML)});
    actor2Button.addEventListener("click", () =>{getActorTop5(actor2Button.innerHTML)});
    actor3Button.addEventListener("click", () =>{getActorTop5(actor3Button.innerHTML)});
    actor4Button.addEventListener("click", () =>{getActorTop5(actor4Button.innerHTML)});
    actor5Button.addEventListener("click", () =>{getActorTop5(actor5Button.innerHTML)});

   
  }, []); // Empty dependency array means this effect runs once after the initial render.

  return (
    <html>
      <head>
        <script></script>
      </head>
      <body>
       
        <div className="App">
          <p className="current">Home Page</p>

          <Link to="/movies">
            <input className="m" id="movies" type="button" value="Movies" />
          </Link>
          <Link to="/customers">
          <input className="c" id="customers" type="button" value="Customers"  />
          </Link>
          <Link to="/reports">
          <input className="r" id="reports" type="button" value="Reports" />
          </Link>
          <br></br> <br></br>

          <input className="sqlm" id="5movies" type="button" value="List of Movies - Top 5 Rented Movies" />
          <input className="sqlmd" id="moviedetails" type="button" value="Movie Details" />

          <br></br> <br></br>

          <input className="sqla" id="actors" type="button" value="List of Actors - Top 5 Actors by # of Films" />
          <input className="sqlad" id="actordetails" type="button" value="Actor Details" />

          <br></br> <br></br>

      <div className="column">
          <table id="results" className="results">
          <tr>
              <th> </th>
              <th>Movie Name</th>
            </tr>
            <tr>
              <th>1</th>
              <th id="row1"></th>
            </tr>
            <tr>
              <th>2</th>
              <th id="row2"></th>
            </tr>
            <tr>
              <th>3</th>
              <th id="row3"></th>
            </tr>
            <tr>
              <th>4</th>
              <th id="row4"></th>
            </tr>
            <tr>
              <th>5</th>
              <th id="row5"></th>
            </tr>
          </table>
    </div>
    <div className="column">
          <table id="results2" className="results2">
            <tr>
              <th> </th>
              <th>Actor First Name</th>
              <th>Actor Last Name</th>
            </tr>
            <tr>
              <th>1</th>
              <th id="row1-1"></th>
              <th id="row1-12"></th>
            </tr>
            <tr>
              <th>2</th>
              <th id="row2-2"></th>
              <th id="row1-22"></th>
            </tr>
            <tr>
              <th>3</th>
              <th id="row3-3"></th>
              <th id="row1-32"></th>
            </tr>
            <tr>
              <th>4</th>
              <th id="row4-4"></th>
              <th id="row1-42"></th>
            </tr>
            <tr>
              <th>5</th>
              <th id="row5-5"></th>
              <th id="row1-52"></th>
            </tr>
          </table>
    </div>
  
    <p className="moviestuf" id="moviestuf">  
      <table>
      <tr>
        <th>Movie Details</th>
      </tr>
        <tr>
          <th>Description:</th>
          <th id="desc">     </th>
        </tr>
        <tr>
          <th>Release Year:</th>
          <th id="release">     </th>
        </tr>
        <tr>
          <th>Length:</th>
          <th id="length">     </th>
        </tr>
        <tr>
          <th>Rating:</th>
          <th id="rate">     </th>
        </tr>
        <tr>
          <th>Category:</th>
          <th id="cat">     </th>
        </tr>
      </table>
    </p>
    
    <br></br>
    <br></br>
    <br></br>
    <p className="actorstuf" id="actorstuf">
    <table>
      <tr>
        <th>Actor Details</th>
      </tr>
      <tr>
        <th>Top 5 Movies</th>
      </tr>
        <tr>
          <th id="movie1"></th>       
        </tr>
        <tr>
          <th id="movie2"></th>
        </tr>
        <tr>
          <th id="movie3"></th>
        </tr>
        <tr>
          <th id="movie4"></th>
        </tr>
        <tr>
          <th id="movie5"></th>
        </tr>
      </table></p>

        </div>
      </body>
    </html>
  );
}

export default App;
