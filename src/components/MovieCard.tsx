import React, { useState, useEffect ,useContext} from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
import noimage from '../assets/images/no-image.jpg'
// import { motion } from 'framer-motion'
// @ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { toast } from 'react-toastify';
import {ContextPage} from "../ContextPage";
import {IMovie} from "./Movies";
import { motion } from 'framer-motion'



const MovieCard = ({movie}: {movie: IMovie}) => {
    const { user } = useContext(ContextPage);

    const [isBookmarked, setIsBookmarked] = useState<boolean | null>(null);

    useEffect(() => {
        if (localStorage.getItem(String(movie.id))) {
            setIsBookmarked(true);
        } else {
            setIsBookmarked(false);
        }
    }, [movie.id]);

    const BookmarkMovie = () => {
        if (!user) {
            alert('To add this movie to your favorites, please log in.')
        } else {
            setIsBookmarked(!isBookmarked)
            if (isBookmarked) {
                localStorage.removeItem(String(movie.id));
            } else {
                localStorage.setItem(String(movie.id), JSON.stringify(movie));
            }
        }
    }

    return (
        <div
            className="card relative w-full md:w-60 h-[410px] md:h-[360px] my-3 mx-4 md:my-5 md:mx-0 cursor-pointer rounded-xl overflow-hidden">

            <button className="absolute bg-black text-white p-2 z-20 right-0 m-3 rounded-full text-xl"
                    onClick={BookmarkMovie}> {isBookmarked ? <AiFillStar /> : <AiOutlineStar/>}
            </button>

            <div className='absolute bottom-0 w-full flex justify-between items-end p-3 z-20'>
                <h1 className='text-white text-xl font-semibold  break-normal break-words'>{movie.title || movie.name}</h1>

                {(movie.vote_average||0) > 7 ? <h1 className='font-bold text-green-500 p-2 bg-zinc-900 rounded-full'>{(movie.vote_average||0).toFixed(1)}</h1> : (movie.vote_average||0) > 5.5 ? <h1 className='font-bold text-orange-400 p-2 bg-zinc-900 rounded-full'>{(movie.vote_average||0).toFixed(1)}</h1> : <h1 className='font-bold text-red-600 p-2 bg-zinc-900 rounded-full'>{(movie.vote_average||0).toFixed(1)}</h1>}
            </div>

            <Link to={`/moviedetail/${movie.id}`} className='h-full w-full shadow absolute z-10'></Link>

            <div>
                {movie.poster_path === null ? <img className='img object-cover' src={noimage} /> :
                    <LazyLoadImage effect='blur' className='img object-cover' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />}
            </div>
        </div>
    );
};

export default MovieCard;