import React, {useContext, useEffect} from 'react';
import {ContextPage} from "../ContextPage";
import Genre from "./Genre";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard";
import Header from "./Header";

const Movies = () => {
    const {movies, loader, page, setPage, totalPage, setMovies, activeGenre, filteredGenre} = useContext(ContextPage)

    useEffect(() => {
        setPage(1)
    }, [])

    useEffect(() => {
        setMovies([])
        setPage(0)
    }, [activeGenre]);

    useEffect(() => {
        if (page > 0) {
            filteredGenre(); // Fetch filtered genre when page changes and only if page is greater than 0.
        }
    }, [page])

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
                                dataLength={movies.length} //This is important field to render the next data
                                next={() => setPage(page + 1)}
                                hasMore={page < totalPage}
                                loader={<span className="loader m-10"></span>}
                                scrollThreshol={0.9}
                                style={{overflow: 'hidden'}}
                            >

                                {movies.map((movie) => (
                                    <MovieCard key={movie.id} movie={movie}/>
                                ))}

                            </InfiniteScroll>

                        </>
                }
            </div>

        </div>
    );
};

export default Movies;