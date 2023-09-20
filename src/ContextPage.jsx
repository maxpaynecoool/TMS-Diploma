import {createContext, useContext, useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {APIKEY} from "./Constants";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";

// @ts-ignore
export const ContextPage = createContext()

// @ts-ignore
const MovieProvider = ({children}) => {

    const [header, setHeader] = useState("Trending")
    const [totalPage, setTotalPage] = useState(null)
    const [movies, setMovies] = useState([])
    const [searchedMovies, setSearchedMovies] = useState([])
    const [activeGenre, setActiveGenre] = useState(28)
    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [page, setPage] = useState(1)
    const [genres, setGenres] = useState([])
    const [backGenre, setBackGenre] = useState(false)
    const [user, setUser] = useAuthState(auth)
    const [loader, setLoader] = useState(true)
    const [theme, setTheme] = useState('bg-black')
    const navigate = useNavigate()


    useEffect(() => {
        if (page < 1) {
            setPage(1)
        }
    }, [page]);

    const filteredGenre = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/discover/movie?with_genres=${activeGenre}&api_key=${APIKEY}&page=${page}`
        );
        const filteredGenre = await data.json();
        setMovies(movies.concat(filteredGenre.results));
        setTotalPage(filteredGenre.total_pages);
        setLoader(false);
        setHeader("Genres");
    };

    const fetchSearch = async (query) => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        const searchmovies = await data.json();
        setSearchedMovies(searchmovies.results);
        setHeader(`Results for "${query}"`);
    }

    const fetchGenre = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}&language=en-US`
        );
        const gen = await data.json();
        setGenres(gen.genres);
    }

    const fetchTrending = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}&page=${page}`
        );
        const trend = await data.json();
        setTrending(trending.concat(trend.results));
        setTotalPage(trend.total_pages);
        setHeader("Trending Movies");
    }

    const fetchUpcoming = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=${page}`
        );
        const upc = await data.json();
        setUpcoming(upcoming.concat(upc.results));
        setTotalPage(upc.total_pages);
        setHeader("Upcoming Movies");
    }

    const GetFavorite = () => {
        setHeader("Favorite Movies");
    }

    const googleProvider = new GoogleAuthProvider();

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            navigate("/")
            toast.success("Login successfully");
        } catch (err) {
            console.log(err)
            navigate("/")
        }
    }

    return (
        <ContextPage.Provider value={{
            fetchGenre,
            fetchTrending,
            fetchUpcoming,
            fetchSearch,
            filteredGenre,
            GetFavorite,
            GoogleLogin,
            header,
            setHeader,
            movies,
            setMovies,
            genres,
            setGenres,
            page,
            setPage,
            activeGenre,
            setActiveGenre,
            trending,
            loader,
            upcoming,
            searchedMovies,
            totalPage,
            setBackGenre,
            user,
            theme,
            setTheme
        }}>
            {children}
        </ContextPage.Provider>
    )

}

export default MovieProvider