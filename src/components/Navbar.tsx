import React, {useContext, useState} from 'react';
// @ts-ignore
import logo from '../assets/images/logo.png';
import {Link} from "react-router-dom";
import {ContextPage} from "../ContextPage";
import {HiMenuAlt1, HiX} from "react-icons/hi";
// @ts-ignore
import User from '../assets/images/User.jpg';
import {toast} from "react-toastify";
import {auth} from "../firebase";

const Navbar = () => {
    const [activeMobile, setActiveMobile] = useState(false);
    const {header, user, theme, setTheme} = useContext(ContextPage)

    // console.log(user)
    const navData = [
        {
            id: 1,
            headerName: "Genres",
            Name: "Genres",
            link: "/"
        },
        {
            id: 2,
            headerName: "Trending Movies",
            Name: "Trending",
            link: "/trending"
        },
        {
            id: 3,
            headerName: "Upcoming Movies",
            Name: "Upcoming",
            link: "/upcoming"
        },
        {
            id: 4,
            headerName: "Favorite Movies",
            Name: "Favorites",
            link: "/favorite"
        },
    ]

    return (
        <>
            <button
                className="z-40 text-3xl text-black fixed right-0 bottom-0 m-6 p-4 duration-150 rounded-full active:scale-90 bg-white block md:hidden"
                onClick={() => setActiveMobile(!activeMobile)}>
                {activeMobile ? <HiX /> : <HiMenuAlt1 />}
            </button>

            <nav className={`${activeMobile ? 'block' : 'hidden'} fixed bg-black md:${theme} h-full w-full md:w-[15rem] z-30 md:block`}>
                <Link
                    to="/"
                    className="logo flex flex-col justify-center items-center m-7 gap-2"
                    onClick={() => setActiveMobile(!activeMobile)}>
                    <img src={logo} alt="logo" className="w-24"/>
                </Link>

                <ul className="text-white font-semi-bold text-[16px] text-center px-5">
                    {navData.map((data) => (
                        <Link key={data.id} to={data.link}>
                            <li
                                className={`${header === data.headerName 
                                    ? 'bg-blue-500/20 border-blue-600 text-white'
                                    : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600`}
                                onClick={() => setActiveMobile(!activeMobile)}>{data.Name}</li>
                        </Link>
                    ))}
                </ul>


                <div className="absolute bottom-0 w-full p-5 md:p-2 text-white">
                    {/*<button onClick={() => setTheme('bg-white')}>theme</button>*/}
                    {user ? <>
                            <div className="w-full bg-gray-900 px-5 py-2 gap-4 rounded-xl flex items-center font-semibold border-2 border-blue-100/10">
                                <img src={user.photoURL == null ? User : user.photoURL} alt="user" className="h-10 rounded-full" />
                                <h1>{user.displayName}</h1>
                            </div>

                            <div className="cursor-pointer bg-red-500 flex justify-center items-center p-2 rounded-xl mt-2" onClick={() => auth.signOut()}>
                                <h1>Logout</h1>
                            </div>
                        </>
                        :
                        <>
                            <Link to="/login" className="w-full bg-gray-900 py-2 gap-4 rounded-xl flex items-center justify-center font-semibold border-2 border-blue-100/10" onClick={() => setActiveMobile(!activeMobile)}>
                                <h1>Log in</h1>
                            </Link>
                        </>
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;