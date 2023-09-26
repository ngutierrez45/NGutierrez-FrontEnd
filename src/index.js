import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Movies from './movies';
import Customers from './customers'; // Import the Customers component
import Reports from './reports'; // Import the Reports component
import reportWebVitals from './reportWebVitals';

const restEndpoint = "https://ngutierrez-backend.onrender.com/api";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return JSON.stringify(jsonResponse);
}

function RenderResult() {
    const [apiResponse, setApiResponse] = React.useState("Loading");

    React.useEffect(() => {
        callRestApi().then(
            result => setApiResponse(result)
        );
    }, []);

    return (
        <div>
            <h1>React App</h1>
            <p>{apiResponse}</p>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/customers" element={<Customers />} /> {/* Add route for Customers */}
                <Route path="/reports" element={<Reports />} /> {/* Add route for Reports */}
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

