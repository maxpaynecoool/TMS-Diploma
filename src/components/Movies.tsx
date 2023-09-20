import React, {useContext, useEffect} from 'react';
import {ContextPage} from "../ContextPage";
import Genre from "./Genre";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard";
import Header from "./Header";

export interface ICountry {
    name: string;
}


export interface IMovie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    name: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    production_countries: [
        {name: string}
    ]
    title: string
    tagline: string
    video: boolean
    vote_average: number
    vote_count: number
}

const Movies = () => {
    const {movies, loader, page, setPage, totalPage, setMovies, activeGenre, filteredGenre} = useContext(ContextPage)

    useEffect(() => {
        setPage(1)
    }, []);

    useEffect(() => {
        setMovies([])
        setPage(0)
    }, [activeGenre]);

    useEffect(() => {
        if (page > 0) {
            filteredGenre();
        }
    }, [page])

    console.log(movies)

    return (
        <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
            <Genre/>
            <Header/>
            <div
                className="flex flex-wrap relative justify-evenly md:justify-around">
                {
                    loader ? <span className="loader m-10"></span> :
                        <>
                            {/* {console.log(movies.length)} */}
                            <InfiniteScroll
                                className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around"
                                dataLength={movies.length}
                                next={() => setPage(page + 1)}
                                hasMore={page < totalPage}
                                loader={<span className="loader m-10"></span>}
                                style={{overflow: 'hidden'}}
                            >

                                {movies.map((movie: IMovie) => {
                                    console.log(movie)
                                    return (
                                        <MovieCard key={movie.id} movie={movie}/>

                                    )})}

                            </InfiniteScroll>

                        </>
                }
            </div>

        </div>
    );
};

export default Movies;