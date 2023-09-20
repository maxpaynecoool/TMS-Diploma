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
