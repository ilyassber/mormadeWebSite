import React, { useState } from 'react'
import WelcomeBar from './welcomeBar'
import CategoriesBar from './categoriesBar'
import SousCategoriesBar from './sousCategoriesBar'
import styles from './styles/navbar.module.css'
// import './styles/main.css'
import { Icon } from 'react-icons-kit'
import { search, user, heart, cart } from 'react-icons-kit/icomoon'
import Link from 'next/link'
// import { parseBody } from 'next/dist/next-server/server/api-utils'



/*
    categories : json contains our tags
    max_shown : number of tags displayed on NavBar "for others u need to press [more ... ]"
    links : linksss on the right side
    logo : path of the main logo

*/

function NavBar({ categories, max_shown, links, home, logo }) {


    const font_style = {
        fontFamily: "Rubik', sans-serif"
    }
    const input_style = {
        textIndent: '15px',
    }
    const i_size = 18
    // if (typeof window !== 'undefined') {
    // var sticky_container = document.getElementById("sticky_container")
    // console.log("hello ::::::: ", sticky_container.offsetTop)
    // }
    return (
        <nav className={styles.navbar} style={font_style}>
            <div className={styles.up_container}>
                <div className={styles.logo_icons_container}>
                    <div className={styles.logo_icons_left_space}></div>
                    <div className={styles.logo_container}><Link href={home} ><a className={styles.logo_title}>Mor Made</a></Link></div>
                    <div className={styles.icons_container}>
                        <div className={styles.icon}>
                            <Icon size={i_size} icon={user}></Icon>
                        </div>
                        <div className={styles.icon}>
                            <Icon size={i_size} icon={heart}></Icon>
                        </div>
                        <div className={styles.icon}>
                            <Icon size={i_size} icon={cart}></Icon>
                        </div>
                    </div>
                </div>
                <div className={styles.links_search_bar_container}>
                    <div className={styles.links_search_bar_left_space}></div>
                    <ul className={styles.link_container}>
                        {links.map((link, indx) =>
                            <li className={styles.link} key={indx}><Link href={link.path}><a>{link.page}</a></Link></li>
                        )}
                    </ul>
                    <div className={styles.search_container}>
                        <form className={styles.search_bar}>
                            <   button className={[styles.search_button, " focus:outline-none"].join(' ')}><Icon icon={search}></Icon></button>
                            <input className={[styles.search_input, " focus:w-56"].join(' ')} type="text" placeholder="search" style={input_style}></input>
                        </form>
                    </div>
                </div>
            </div>
            <WelcomeBar textToDisplay="welcome fockers" />
            <CategoriesBar  max_shown={max_shown} categories={categories} />
        </nav>
    )
}

export default NavBar