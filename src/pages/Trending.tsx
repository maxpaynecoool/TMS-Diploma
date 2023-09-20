import Header from '../components/Header';
// import { Pagebtn } from '../components/Pagebtn';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from "../components/MovieCard";
import {useContext, useEffect} from "react";
import {ContextPage} from "../ContextPage";
import {IMovie} from "../components/Movies";

function Trending() {

    const {loader, page, setPage, fetchTrending, trending, totalPage} = useContext(ContextPage);

    // useEffect(() => {
    //     setPage(1) // Reset Page to 1 on initial render.
    // }, []);

    useEffect(() => {
        fetchTrending();
    }, [page])


    return (
        <>
            <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
                <Header/>
                <div
                    className="flex flex-wrap relative justify-evenly md:justify-around">
                    {
                        loader ? <span className="loader m-10"></span> :
                            <>
                                <InfiniteScroll
                                    className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around"
                                    dataLength={trending.length} //This is important field to render the next data
                                    next={() => setPage(page + 1)}
                                    hasMore={page < totalPage}
                                    loader={<span className="loader m-10"></span>}
                                    style={{overflow: 'hidden'}}
                                >

                                    {trending.map((trend: IMovie) => (
                                        <MovieCard key={trend.id} movie={trend}/>
                                    ))}

                                </InfiniteScroll>

                            </>
                    }
                </div>
                {/* <Pagebtn /> */}

            </div>
        </>
    )
}

export default Trending