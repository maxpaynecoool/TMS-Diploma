import React, {useContext} from 'react';
import Searchbar from "../components/Searchbar";
import Search from "./Search";
import {useParams} from "react-router-dom";
import {ContextPage} from "../ContextPage";
import Movies from "../components/Movies";

const Container = () => {
    const { setMovies } = useContext(ContextPage);
    const { query } = useParams()
    return (
        <section>
            <Searchbar />
            {query ? <Search query={query} /> : <Movies />}
        </section>
    )
};

export default Container;