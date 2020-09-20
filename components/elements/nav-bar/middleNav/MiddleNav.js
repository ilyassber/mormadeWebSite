import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/icomoon'
import Link from 'next/link'


function SearchWidget() {
    return (
        <form className="flex justify-end h-8">
            <button className="h-full w-8 outline-none  border-b border-gray-500 focus:outline-none">
                <Icon icon={search}></Icon>
            </button>
            <input className="h-full w-24 outline-none border-b border-gray-500  transform transition-all ease-out duration-500 lg:focus:w-56" type="text" placeholder="search"></input>
        </form>
    )
}

function MiddleNav({ style, links }) {

    return (
        <div className={style}>
            <div className="h-full flex-1"></div> {/*white space container */}
            <ul className="flex flex-1 justify-center items-center h-full">
                {links.map((link, indx) =>
                    <li className="m-8 cursor-pointer text-base md:text-2xl font-worksans  text-gray-900 hover:text-gray-700" key={indx}>
                        <Link href={link.path}><a>{link.page}</a></Link>
                    </li>
                )}
            </ul>
            
            <div className="flex flex-1 justify-end items-center h-full">
                <SearchWidget />
            </div>

        </div>
    )
}

export default MiddleNav