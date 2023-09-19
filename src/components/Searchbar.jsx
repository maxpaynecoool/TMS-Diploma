import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {ContextPage} from "../ContextPage";
import slugify from "react-slugify";

const Searchbar = () => {
    const { filteredGenre, fetchSearch, setBackGenre, setGenres } = useContext(ContextPage);
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const [typingTimeout, setTypingTimeout] = useState(null);

    const handleSearch = () => {
        // Clear the previous timeout to prevent premature execution
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        // Set a new timeout
        const newTimeout = setTimeout(() => {
            onKeyUp(value);
        }, 500); // Adjust the timeout duration as needed (in milliseconds)

        setTypingTimeout(newTimeout);
    };

    const onKeyUp = (query) => {
        if (query !== "") {
            query = query.trim();

            if (query === "") {
                navigate("/");
            } else {
                navigate(`/search/${slugify(query)}`)
            }
        }
    };

    return (
        <>
            <div className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-[10rem] md:h-[12rem]">
                <div className='h-full w-full bg-black/30 flex justify-center items-center'>
                    <input
                        type="search"
                        name="searchpanel"
                        id="searchpanel"
                        placeholder='Search Movie'
                        className='p-3 w-full mx-10 md:w-[40rem]  rounded-xl outline-none'
                        onKeyUp={(e) => handleSearch()}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
};

export default Searchbar;