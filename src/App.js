import React from "react";
import { useState } from "react";
import "./App.css";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))

  }, []);
  
  return (
  <html>
    <head>
      <script>
      </script>
    </head>
    <body>
    <p class="check">{!data ? "Loading..." : data}</p>
    <div className="App">
      <p class="current">Home Page</p>

      <input class="m" id="movies" type="button" value="Movies" />
      <input class="c" id="customers" type="button" value="Customers" />
      <input class="r" id="reports" type="button" value="Reports" />

      <br></br>   <br></br>

      <input class="sqlm" id="5movies" type="button" value="List of Movies - Top 5 Rented Movies"/>
      <input class="sqlmd" id="moviedetails" type="button" value="Movie Details"/>

      <br></br>   <br></br>

      <input class="sqla" id="actors" type="button" value="List of Actors - Top 5 Actors by # of Films" />
      <input class="sqlad" id="actordetails" type="button" value="Actor Details"/>
      
      <br></br>   <br></br>

      <input type="text" id="results" class="results" size="100"/>
      
    </div>
    </body>
  </html>
  );
  
}

export default App;
