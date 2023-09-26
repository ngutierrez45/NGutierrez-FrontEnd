
export function top5(){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", sent);
    xhr.responseType = "json";
    let name = "name=" + encodeURIComponent("top5");
    xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN.php?" + name);

    xhr.send();
  }
  
  export function movied(){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", sent);
    xhr.responseType = "json";
    let name = "name=" + encodeURIComponent("md");
    xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN.php?" + name);
    xhr.send();
  }
  
  export function actors(){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", sent);
    xhr.responseType = "json";
    let name = "name=" + encodeURIComponent("act");
    xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN.php?" + name);
    xhr.send();
  }
  
  export function actord(){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", sent);
    xhr.responseType = "json";
    let name = "name=" + encodeURIComponent("actd");
    xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN.php?" + name);
    xhr.send();
    }

    export function getMovieDesc(location){
   if(location !== ""){
      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", sent);
      xhr.responseType = "json";
      let name = "name=" + encodeURIComponent("getmoviedesc");
      let movie = "movie=" + encodeURIComponent(location);
      xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN.php?" + name + "&" + movie);
      xhr.send();
   }else{
    alert("Load the movies first!")
   }
      }
  
 export function getActorTop5(location){
    if(location !== ""){
           let xhr = new XMLHttpRequest();
           xhr.addEventListener("load", sent2);
           xhr.responseType = "json";
           let name = "name=" + encodeURIComponent("getactortop5");
           let actor = "actor=" + encodeURIComponent(location);
           xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN.php?" + name + "&" + actor);
           xhr.send();
        }else{
         alert("Load the actors first!")
        }
           }

    
  export function sent(){
  if (this.status === 200) {
    let response = this.response;
    if(response[0]){   
      if(response[2]==="top5"){

           document.getElementById("row1").innerHTML=response[1][0];
           document.getElementById("row2").innerHTML=response[1][1];
           document.getElementById("row3").innerHTML=response[1][2];
           document.getElementById("row4").innerHTML=response[1][3];
           document.getElementById("row5").innerHTML=response[1][4];

      }else if(response[2]==="act"){

           document.getElementById("row1-1").innerHTML=response[1][0].first_name;
           document.getElementById("row1-12").innerHTML=response[1][0].last_name;

           document.getElementById("row2-2").innerHTML=response[1][1].first_name;
           document.getElementById("row1-22").innerHTML=response[1][1].last_name;

           document.getElementById("row3-3").innerHTML=response[1][2].first_name;
           document.getElementById("row1-32").innerHTML=response[1][2].last_name;

           document.getElementById("row4-4").innerHTML=response[1][3].first_name;
           document.getElementById("row1-42").innerHTML=response[1][3].last_name;

           document.getElementById("row5-5").innerHTML=response[1][4].first_name;
           document.getElementById("row1-52").innerHTML=response[1][4].last_name;

      }else if(response[2]==="md"){
        alert("To get movie details, click a movie from the top5");
      }else if(response[2]==="actd"){
        alert("To get actor details, click an actors first name from the top5");

      }else if(response[2]==="moviedesc"){
        document.getElementById("desc").innerHTML=response[1][0].description;
        document.getElementById("release").innerHTML=response[1][0].year;
        document.getElementById("length").innerHTML=response[1][0].length;
        document.getElementById("rate").innerHTML=response[1][0].rating;
        document.getElementById("cat").innerHTML=response[1][0].category;
      }
  }else{
  
  }
  } else {
    alert("Error reaching server");
  }
  }

  export function sent2(){
    if (this.status === 200) {
      let response = this.response;
      if(response[0]){   
       if(response[2]==="actortop5"){
          document.getElementById("movie1").innerHTML=response[1][0];
          document.getElementById("movie2").innerHTML=response[1][1];
          document.getElementById("movie3").innerHTML=response[1][2];
          document.getElementById("movie4").innerHTML=response[1][3];
          document.getElementById("movie5").innerHTML=response[1][4];
              }
    }
    } else {
      alert("Error reaching server");
    }
  }
  
  export function movieSearch(title, actor, genre) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", moviesent);
    xhr.responseType = "json";
  
    // Construct the query string based on non-empty input fields
    let params = [];
    if (title.trim() !== "") {
      params.push("title=" + encodeURIComponent(title));
    }
    if (actor.trim() !== "") {
      params.push("actor=" + encodeURIComponent(actor));
    }
    if (genre.trim() !== "") {
      params.push("genre=" + encodeURIComponent(genre));
    }
  
    // Join the parameters with "&" to create the final query string
    let queryString = params.join("&");
    xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN2.php?" + queryString);
    xhr.send();
  }

  export function moviesent(){
    if(this.status === 200){
      let response = this.response;
      if(response[0]){
     
        // Loop through the response array and display the movie titles
        for (let i = 0; i < 20; i++) {
          let movieTitle = response[1][i];
          let number = i+1;
          let spot = "movie" + number;
          // Create a new <p> element to display the movie title
          document.getElementById(spot).innerHTML = "";

        }
        for (let i = 0; i < response[1].length; i++) {
          let movieTitle = response[1][i];
          let number = i+1;
          let spot = "movie" + number;
          // Create a new <p> element to display the movie title
          let movieElement = document.getElementById(spot);
          movieElement.innerHTML = movieTitle;

        }
      }else{
        for (let i = 0; i < 20; i++) {
          let movieTitle = response[1][i];
          let number = i+1;
          let spot = "movie" + number;
          // Create a new <p> element to display the movie title
          document.getElementById(spot).innerHTML = "";

        }
      }
    }else{
      alert("Error reaching server");
    }
  }

  export function getMovieDesc2(location){
    if(location !== ""){
       let xhr = new XMLHttpRequest();
       xhr.addEventListener("load", moviedets);
       xhr.responseType = "json";
       let name = "name=" + encodeURIComponent("getmoviedesc");
       let movie = "movie=" + encodeURIComponent(location);
       xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN3.php?" + name + "&" + movie);
       xhr.send();
    }else{
     alert("Load the movies first!")
    }
       }

       export function moviedets(){
        if(this.status === 200){
          let response = this.response;
          if(response[0]){
            document.getElementById("desc1").innerHTML=response[1][0].description;
            document.getElementById("release1").innerHTML=response[1][0].year;
            document.getElementById("length1").innerHTML=response[1][0].length;
            document.getElementById("rate1").innerHTML=response[1][0].rating;
            document.getElementById("cat1").innerHTML=response[1][0].category;
          }
        }else{
          alert("Error reaching server");
        }
      }

      export function customerSearch(id, fname, lname) {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", customersent);
        xhr.responseType = "json";
       
        // Construct the query string based on non-empty input fields
        let params = [];
        if (id.trim() !== "") {
          params.push("ID=" + encodeURIComponent(id));
        }
        if (fname.trim() !== "") {
          params.push("fname=" + encodeURIComponent(fname));
        }
        if (lname.trim() !== "") {
          params.push("lname=" + encodeURIComponent(lname));
        }
      
        // Join the parameters with "&" to create the final query string
        let queryString = params.join("&");
        xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN4.php?" + queryString);
        xhr.send();
      }

      export function customersent(){
        if(this.status === 200){
          let response = this.response;
          if(response[0]){
           // alert([response[2]]);//changing sql statement not working
            // Loop through the response array and display the movie titles
            for (let i = 0; i < 20; i++) {
              let number = i+1;
              let spot = "cus" + number;
              // Create a new <p> element to display the movie title
             document.getElementById(spot).innerHTML="";    
            }
            
           
            for (let i = 0; i < response[1].length; i++) {
              let email = response[1][i];
              let number = i+1;
              let spot = "cus" + number;
              // Create a new <p> element to display the movie title
              let emailElement = document.getElementById(spot);
              emailElement.innerHTML = email;
    
            }
          }else{
            for (let i = 0; i < 20; i++) {
              let number = i+1;
              let spot = "cus" + number;
              // Create a new <p> element to display the movie title
             document.getElementById(spot).innerHTML="";    
            }
          }
        }else{
          alert("Error reaching server");
        }
      } 
    
      export function speak(name1, name2, mail1){
        if(name1 !== "" && name2 !== "" && mail1 !== ""){
          let xhr = new XMLHttpRequest();
          xhr.addEventListener("load", speakDone);
          xhr.responseType = "json";
          let name = "name=" + encodeURIComponent("create");
          let namef = "fname=" + encodeURIComponent(name1);
          let namel = "lname=" + encodeURIComponent(name2);
          let maile = "email=" + encodeURIComponent(mail1);
          xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN5.php?" + name + "&" + namef + "&" + namel + "&" + maile);
          xhr.send();
        }else{  
          alert("Make sure all credentials are filled");
        }
      }

      export function speakDone(){
        if(this.status === 200){
          let response = this.response;
          if(response[0]){
            alert("Customer successfully created! You can close the popup now.");
          }else{
            alert("Customer creation failed because user already exists.");
          }
        }else{
          alert("Error Reaching Server");
      }
    }

    export function begone(name1, name2, mail1){
      if(name1 !== "" && name2 !== "" && mail1 !== ""){
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", begoneDone);
        xhr.responseType = "json";
        let name = "name=" + encodeURIComponent("delete");
        let namef = "fname=" + encodeURIComponent(name1);
        let namel = "lname=" + encodeURIComponent(name2);
        let maile = "email=" + encodeURIComponent(mail1);
        xhr.open("GET", "https://web.njit.edu/~nag45/SQLRUN5.php?" + name + "&" + namef + "&" + namel + "&" + maile);
        xhr.send();
      }else{  
        alert("Make sure all credentials are filled");
      }
    }

    export function begoneDone(){
      if(this.status === 200){
        let response = this.response;
        if(response[0]){
          alert("Customer successfully deleted! You can close the popup now.");
        }else{
          alert("Customer deletion failed because user was not found.");
        }
      }else{
        alert("Error Reaching Server");
    }
  }
      
