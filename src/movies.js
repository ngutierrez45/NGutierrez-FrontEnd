import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./movies.css";
import { movieSearch, getMovieDesc2, attemptRent } from "./functions";
function Movies() {

  useEffect(() => {
    const moviebutton = document.getElementById("search");
    const titlechoice = document.getElementById("choosetitle");
    const actorchoice = document.getElementById("chooseactor");
    const genrechoice = document.getElementById("choosegenre");
    const moviespot1 = document.getElementById("movie1");
    const moviespot2 = document.getElementById("movie2");
    const moviespot3 = document.getElementById("movie3");
    const moviespot4 = document.getElementById("movie4");
    const moviespot5 = document.getElementById("movie5");
    const moviespot6 = document.getElementById("movie6");
    const moviespot7 = document.getElementById("movie7");
    const moviespot8 = document.getElementById("movie8");
    const moviespot9 = document.getElementById("movie9");
    const moviespot10 = document.getElementById("movie10");
    const moviespot11 = document.getElementById("movie11");
    const moviespot12 = document.getElementById("movie12");
    const moviespot13 = document.getElementById("movie13");
    const moviespot14 = document.getElementById("movie14");
    const moviespot15 = document.getElementById("movie15");
    const moviespot16 = document.getElementById("movie16");
    const moviespot17 = document.getElementById("movie17");
    const moviespot18 = document.getElementById("movie18");
    const moviespot19 = document.getElementById("movie19");
    const moviespot20 = document.getElementById("movie20");
    const describe = document.getElementById("desc1");
    const rentButton = document.getElementById("rent");
    const idCheck = document.getElementById("giveid");
    
    moviespot1.addEventListener("click", ()=>{getMovieDesc2(moviespot1.innerHTML)});
    moviespot2.addEventListener("click", ()=>{getMovieDesc2(moviespot2.innerHTML)});
    moviespot3.addEventListener("click", ()=>{getMovieDesc2(moviespot3.innerHTML)});
    moviespot4.addEventListener("click", ()=>{getMovieDesc2(moviespot4.innerHTML)});
    moviespot5.addEventListener("click", ()=>{getMovieDesc2(moviespot5.innerHTML)});
    moviespot6.addEventListener("click", ()=>{getMovieDesc2(moviespot6.innerHTML)});
    moviespot7.addEventListener("click", ()=>{getMovieDesc2(moviespot7.innerHTML)});
    moviespot8.addEventListener("click", ()=>{getMovieDesc2(moviespot8.innerHTML)});
    moviespot9.addEventListener("click", ()=>{getMovieDesc2(moviespot9.innerHTML)});
    moviespot10.addEventListener("click", ()=>{getMovieDesc2(moviespot10.innerHTML)});
    moviespot11.addEventListener("click", ()=>{getMovieDesc2(moviespot11.innerHTML)});
    moviespot12.addEventListener("click", ()=>{getMovieDesc2(moviespot12.innerHTML)});
    moviespot13.addEventListener("click", ()=>{getMovieDesc2(moviespot13.innerHTML)});
    moviespot14.addEventListener("click", ()=>{getMovieDesc2(moviespot14.innerHTML)});
    moviespot15.addEventListener("click", ()=>{getMovieDesc2(moviespot15.innerHTML)});
    moviespot16.addEventListener("click", ()=>{getMovieDesc2(moviespot16.innerHTML)});
    moviespot17.addEventListener("click", ()=>{getMovieDesc2(moviespot17.innerHTML)});
    moviespot18.addEventListener("click", ()=>{getMovieDesc2(moviespot18.innerHTML)});
    moviespot19.addEventListener("click", ()=>{getMovieDesc2(moviespot19.innerHTML)});
    moviespot20.addEventListener("click", ()=>{getMovieDesc2(moviespot20.innerHTML)});
    moviebutton.addEventListener("click", ()=>{movieSearch(titlechoice.value, actorchoice.value, genrechoice.value)});
    rentButton.addEventListener("click", ()=>{attemptRent(describe.innerHTML, idCheck.value)});
  }, []); 

  return (
    <div className="App">
      <p className="current">Movies Page</p>

      <input className="m" id="movies" type="button" value="Movies" />
      <Link to="/customers">
      <input className="c" id="customers" type="button" value="Customers"  />
      </Link>
      <Link to="/reports">
      <input className="r" id="reports" type="button" value="Reports"  />
      </Link>
      <br></br> <br></br>
      <input className="search" id="search" type="button" value="Search Movies" />
      <br></br>
      <input type="text" id="choosetitle" placeholder="Title"/>
      <input type="text" id="chooseactor" placeholder="Actor"/>
      <input type="text" id="choosegenre" placeholder="Genre"/>
      <br></br> <br></br>
      <input className="ms" id="ms" type="button" value="List of Movies" />
      <input className="details" id="details" type="button" value="Movie Details Below" />
      <div id="moviesContainer">
        <table>
          <tr>
          <th>Results</th>
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
          <tr>
            <th id="movie6"></th>
          </tr>
          <tr>
            <th id="movie7"></th>
          </tr>
          <tr>
            <th id="movie8"></th>
          </tr>
          <tr>
            <th id="movie9"></th>
          </tr>
          <tr>
            <th id="movie10"></th>
          </tr>
          <tr>
            <th id="movie11"></th>
          </tr>
          <tr>
            <th id="movie12"></th>
          </tr>
          <tr>
            <th id="movie13"></th>
          </tr>
          <tr>
            <th id="movie14"></th>
          </tr>
          <tr>
            <th id="movie15"></th>
          </tr>
          <tr>
            <th id="movie16"></th>
          </tr>
          <tr>
            <th id="movie17"></th>
          </tr>
          <tr>
            <th id="movie18"></th>
          </tr>
          <tr>
            <th id="movie19"></th>
          </tr>
          <tr>
            <th id="movie20"></th>
          </tr>
        </table>
      </div>
      <table>
      <tr>
        <th>Movie Details</th>
      </tr>
        <tr>
          <th>Description:</th>
          <th id="desc1">     </th>
        </tr>
        <tr>
          <th>Release Year:</th>
          <th id="release1">     </th>
        </tr>
        <tr>
          <th>Length:</th>
          <th id="length1">     </th>
        </tr>
        <tr>
          <th>Rating:</th>
          <th id="rate1">     </th>
        </tr>
        <tr>
          <th>Category:</th>
          <th id="cat1">     </th>
        </tr>
      </table>
      <br></br>
      <input type="button" className="rent" id="rent" value="Rent This Movie"/>
      <input type="text" id="giveid" placeholder="Enter ID to rent movie"/>
     
    </div>
  );
}

export default Movies;

