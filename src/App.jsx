import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import MovieProvider from "./ContextPage";
import {Route, Routes} from "react-router-dom";
import Searchbar from "./components/Searchbar";
import Container from "./pages/Container";
import Trending from "./pages/Trending";
import Upcoming from "./pages/Upcoming";
import {Detail} from "./components/Detail";
import Favoritepage from "./pages/Favoritepage";
// import Player from "./pages/Player";
import Login from "./auth/Login";

function App() {
    // const API_KEY = '360cf074-6296-4b64-86dc-d269fc1cb1fc'
    // const URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'
    //
    // async function getMovies(url) {
    //     const response = await fetch(url, {
    //         headers: {
    //             'X-API-KEY': API_KEY,
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const respData = await response.json()
    //     console.log(respData)
    //}

    // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', {
    //     headers: {
    //         'X-API-KEY': API_KEY,
    //         'Content-Type': 'application/json'
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json))

    return (
        <MovieProvider>
            <Navbar/>
            <div className="md:ml-[15rem]">
                <Routes>
                    <Route path="/" element={<Container/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/trending' element={<Trending/>}/>
                    <Route path='/upcoming' element={<Upcoming/>}/>
                    <Route path='/moviedetail/:id' element={<Detail/>}/>
                    <Route path="/favorite" element={<Favoritepage/>}/>
                    <Route path="/search/:query" element={<Container/>}/>
                    <Route path="/search/" element={<Container/>}/>
                </Routes>
            </div>
        </MovieProvider>
    );
}

export default App;
