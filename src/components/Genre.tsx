import React, {useContext, useEffect} from 'react';
import {ContextPage} from "../ContextPage";

const Genre = () => {
    const {
        fetchGenre,
        activeGenre,
        setActiveGenre,
        genres,
    } = useContext(ContextPage);

    useEffect(() => {
        fetchGenre()
    }, [])

    return (
        <>
            <div className='flex flex-wrap justify-center px-2'>
                {
                    genres.map((genre: {id: number, name: string}) => (
                        <button
                            onClick={() => {
                                setActiveGenre(genre.id)
                            }}
                            className={activeGenre === genre.id ? 'active px-4 py-2 m-2 text-[15px] text-white font-semibold rounded-3xl' : 'px-4 py-2 m-2 text-[15px] bg-slate-800 text-white font-semibold rounded-3xl'}
                            key={genre.id}>
                            {genre.name}
                        </button>

                    ))
                }
            </div>
        </>
    );
};

export default Genre;