import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const restEndpoint = "https://ngutierrez-backend.onrender.com/api";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return JSON.stringify(jsonResponse);
}

function RenderResult(){
  const[apiResponse, setApiResponse] = useState("Loading");

  useEffect(() => {
    callRestApi().then(
      result => setApiResponse(result)
    );
  },[]);

  return(
    <div>
      <h1>React App</h1>
      <p>{apiResponse}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
