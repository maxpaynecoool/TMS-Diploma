import React, { useContext, useEffect } from 'react'
import Button from '../assets/Btn'
import { HiChevronUp } from "react-icons/hi";
import {ContextPage} from "../ContextPage";

export const Pagebtn = () => {

    const { setPage, page } = useContext(ContextPage);

    return (
        <>
            <div className='btnpanel flex justify-center items-center'>
                <a href='#' onClick={() => setPage(page - 1)}><Button item="Back" /></a>
                <div className='px-4 py-2 bg-slate-700  text-white font-semibold rounded-full'>{page}</div>
                <a href='#' onClick={() => setPage(page + 1)}><Button item="Next" /></a>
            </div>

        </>
    )
}
