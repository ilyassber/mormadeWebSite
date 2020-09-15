import React, { useState } from 'react'
import WelcomeBar from './welcomeBar'
import CategoriesBar from './categoriesBar'
import SideMenu from '../side-menu/sideMenu'
import SousCategoriesBar from './sousCategoriesBar'
import styles from './styles/navbar.module.css'
// import './styles/main.css'
import { Icon } from 'react-icons-kit'
import {menu, search, user, heart, cart } from 'react-icons-kit/icomoon'
import {ic_menu} from 'react-icons-kit/md/ic_menu'
import {cross} from 'react-icons-kit/icomoon/cross'

import Link from 'next/link'
// import { parseBody } from 'next/dist/next-server/server/api-utils'



/*
    categories : json contains our tags
    max_shown : number of tags displayed on NavBar "for others u need to press [more ... ]"
    links : linksss on the right side
    logo : path of the main logo

*/

function NavBar({ changeMenuClicked,  categories, max_shown, links, home, logo }) {

    // const [menuClicked , setMenuClicked] = useState(false)
    const [searchIconClicked, setSearchIconClicked] = useState(false)

    // const clickMenuIcon = () => {
    //     setMenuClicked(!menuClicked)
    // }

    const clickSearchIcon = () => {
        setSearchIconClicked(!searchIconClicked) // open/close the search component for small screens
    }

    const font_style = {
        fontFamily: "Rubik, sans-serif"
    }
    const input_style = {
        textIndent: '15px',
    }
    const i_size = 15


    return (
        <nav className="z-10 fixed flex-row w-full font-sans bg-white" >
            <div className={`flex flex-col justify-between w-full pl-5 pr-5`}>
                <div className="flex w-full h-12">
                    {!searchIconClicked && <div className={`flex items-center justify-start h-full flex-1`}> {/*menu container*/}
                        <div className="m-1 md:hidden cursor-pointer text-gray-700"
                            onClick={changeMenuClicked}
                        >
                            <Icon size={25} icon={ic_menu}></Icon>
                        </div>
                    </div>}
                    {!searchIconClicked && <div className={`flex justify-center items-center flex-1 h-full`}><Link href={home} ><a className="text-lg font-bold whitespace-no-wrap text-gray-900">Mor Made</a></Link></div>}
                    <div className="flex flex-1 justify-center md:justify-end items-center  h-full w-full">
                        <form className="md:hidden flex justify-end h-8 w-full">
                            <div className={`${searchIconClicked ? "order-last" : "" } flex justify-center h-full w-8 outline-none focus:outline-none`}
                                onClick={clickSearchIcon}
                            >
                               {/* {console.log("search icon : " , searchIconClicked ? "clicked": "not clicked")} */}
                                <Icon  icon={searchIconClicked ? cross : search}></Icon>
                            </div>
                            {searchIconClicked && <button className="h-full w-8 outline-none focus:outline-none"><Icon icon={search}></Icon></button>}
                            <input className={searchIconClicked ? " h-full transform w-full transition-all ease-out duration-300  outline-none border-b border-gray-500" : "transform w-0 transition-all ease-out duration-300"} type="text" placeholder="search" style={input_style}></input>
                        </form>
                        {  <div className={`${searchIconClicked ? "hidden": ""} inline m-2 md:m-2 cursor-pointer text-gray-700`}>
                            <Icon size={i_size} icon={user}></Icon>
                        </div>}
                        <span className="hidden lg:inline m-2" >user</span>
                        <div className={`${searchIconClicked ? "hidden": ""} inline m-2 md:m-2 cursor-pointer text-gray-700`}>
                            <Icon size={i_size} icon={heart}></Icon>
                        </div>
                        <span className="hidden lg:inline m-2" >favorites</span>
                        <div className={`${searchIconClicked ? "hidden": ""}inline m-2 md:m-2 cursor-pointer text-gray-700`}>
                            <Icon size={i_size} icon={cart}></Icon>
                        </div>
                        <span className="hidden lg:inline m-2" >{`(${0})`}</span>
                    </div>
                </div>
                <div className="hidden md:flex h-12 w-full">
                    <div className="h-full flex-1"></div>
                    <ul className="flex flex-1 justify-center items-center h-full">
                        {links.map((link, indx) =>
                            <li className="m-8 cursor-pointer text-base md:text-2xl font-worksans  text-gray-900 hover:text-gray-700" key={indx}><Link href={link.path}><a>{link.page}</a></Link></li>
                        )}
                    </ul>
                    <div className="flex flex-1 justify-end items-center h-full">
                        <form className="flex justify-end h-8">
                            <button className="h-full w-8 outline-none  border-b border-gray-500 focus:outline-none"><Icon icon={search}></Icon></button>
                            <input className="h-full w-24 outline-none border-b border-gray-500  transform transition-all ease-out duration-500 lg:focus:w-56" type="text" placeholder="search" style={input_style}></input>
                        </form>
                    </div>
                </div>
            </div>
            <WelcomeBar textToDisplay="welcome" />
            <CategoriesBar  max_shown={max_shown} categories={categories} />
        </nav>
    )
}

export default NavBar