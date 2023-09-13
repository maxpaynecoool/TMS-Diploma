import React from 'react';
import './App.css';

function App() {
    const API_KEY = '360cf074-6296-4b64-86dc-d269fc1cb1fc'
    const URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'

    async function getMovies(url) {
        const response = await fetch(url, {
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json'
            }
        })
        const respData = await response.json()
        console.log(respData)
    }

    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))

    return (
        <div className="App">
        </div>
    );
}

export default App;
