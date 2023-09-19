import React, { useEffect, useContext, useState } from 'react'
import Header from '../components/Header';


// import { motion, AnimatePresence } from 'framer-motion';
// import { Helmet } from 'react-helmet';
import {ContextPage} from "../ContextPage";
import MovieCard from "../components/MovieCard";

function Favoritepage() {

    const { loader, GetFavorite } = useContext(ContextPage);
    const [localStorageData, setLocalStorageData] = useState([]);

    useEffect(() => {
        GetFavorite();

        const data = localStorage;
        setLocalStorageData(data);
    }, []);

    return (
        <>
            <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
                <Header />
                <div
                    layout
                    className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around">
                        {
                            loader ? <span className="loader m-10"></span> :
                                <>
                                    {
                                        Object.keys(localStorageData).filter(key => !isNaN(key)).length == 0
                                            ?
                                            <p className="text-xl text-white">No Bookmark Yet!</p>
                                            :
                                            Object.keys(localStorageData).filter(key => !isNaN(key)).map((key, index) => (<MovieCard key={index} movie={{ ...JSON.parse(localStorageData[key]) }} />))
                                    }
                                </>
                        }
                </div>
            </div>
        </>
    )
}

export default Favoritepage