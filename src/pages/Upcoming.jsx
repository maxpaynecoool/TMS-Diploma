import React, { useEffect, useContext } from 'react'
import MovieCard from "../components/MovieCard";
// import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
// import { Pagebtn } from '../components/Pagebtn';
// import { Helmet } from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroll-component';
import {ContextPage} from "../ContextPage";

function Upcoming() {

  const { loader, setPage, page, fetchUpcoming, upcoming, totalPage } = useContext(ContextPage);

  useEffect(() => {
    setPage(1) // Reset Page to 1 on initial render.
  }, []);

  useEffect(() => {
    if (page > 0) {
      fetchUpcoming();
    }
  }, [page])


  return (
    <>

      <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
        <Header />
        <div
          className="flex flex-wrap relative justify-evenly md:justify-around">
            {
              loader ? <span className="loader m-10"></span> :
                <>
                  <InfiniteScroll
                    className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around"
                    dataLength={upcoming.length} //This is important field to render the next data
                    next={() => setPage(page + 1)}
                    hasMore={page < totalPage}
                    loader={<span className="loader m-10"></span>}
                    scrollThreshol={0.9}
                    style={{ overflow: 'hidden' }}
                  >

                    {upcoming.map((upc) => (
                      <MovieCard key={upc.id} movie={upc} />
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

export default Upcoming