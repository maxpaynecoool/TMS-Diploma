import React, { useEffect, useContext } from 'react'
// import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
// import { Pagebtn } from '../components/Pagebtn';
import { Link, useParams } from 'react-router-dom'
import { HiChevronLeft } from "react-icons/hi";
import {ContextPage} from "../ContextPage";
import MovieCard from "../components/MovieCard";
import {IMovie} from "../components/Movies";


function Search({query}: {query: string}) {

    const { searchedMovies, loader, fetchSearch } = useContext(ContextPage)
    // const { query } = useParams()

    useEffect(() => {
        fetchSearch(query)
    }, [query])

    return (
        <section>
            <Link to="/" className='fixed z-10 text-4xl text-black bg-white m-3 md:m-5 rounded-full'><HiChevronLeft /></Link>
            <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
                <Header />
                <div
                    className="flex flex-wrap relative justify-evenly md:justify-around">
                        {
                            loader ? <span className="loader m-10"></span> :
                                <>
                                        {searchedMovies.map((movie: IMovie) => (
                                            <MovieCard key={movie.id} movie={movie} />
                                        ))}
                                </>
                        }
                </div>
            </div>
        </section>

    )
}

export default Search


//   `https://api.themoviedb.org/3/trending/all/day?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&page=${page}`