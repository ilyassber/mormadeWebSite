import React, { useState } from 'react'
import Wrapper from './widgets/utilities/wrapper'
import NavBar from './elements/nav-bar/navbar'
import SideMenu from './elements/side-menu/sideMenu'

// fake data 
const categories = [
    {
        tag: "clothes",
        sous_tags: ["shoes", "t-shirts", "jeans", "socks"],
        tag_image: "images/tags/clothes/clothes-1.jpg"
    },
    {
        tag: "jewlery",
        sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
        tag_image: "images/tags/jewlery/jewlery-1.jpg"
    },
    {
        tag: "furniture",
        sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
        tag_image: "images/tags/furniture/furniture-1.jpg"
    },
    {
        tag: "gifts",
        sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
        tag_image: "images/tags/gifts/gifts-1.jpg"
    },
    {
        tag: "jewlery",
        sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
        tag_image: "images/tags/jewlery/jewlery-1.jpg"
    },
    {
        tag: "furniture",
        sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
        tag_image: "images/tags/furniture/furniture-1.jpg"
    },
    {
        tag: "gifts",
        sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
        tag_image: "images/tags/gifts/gifts-1.jpg"
    },
    {
        tag: "jewlery",
        sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
        tag_image: "images/tags/jewlery/jewlery-1.jpg"
    },
    {
        tag: "furniture",
        sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
        tag_image: "images/tags/furniture/furniture-1.jpg"
    },
    {
        tag: "gifts",
        sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
        tag_image: "images/tags/gifts/gifts-1.jpg"
    }
]

const links = [
    {
        page: 'MAKERS',
        path: '/makers'
    },
    {
        page: 'REGIONS',
        path: '/regions'

    },
    {
        page: 'STORIES',
        path: '/stories'
    }
]


function BlackFocusScreen({display, onClick}) {
    return (
        <div 
            className={display ? "absolute z-20 top-0 left-0 w-full h-full transition ease-out duration-500 bg-gray-900 bg-opacity-50" : "z-20 bg-opacity-0 bg-gray-900"}
            onClick={onClick}
        >
        </div>
    )
}


function Layout({ children }) {
    const [menuClicked, setMenuClicked] = useState(false)    
    const [selectedPage, setSelectedPage] = useState({page : "HOME", path : "/"})
    
    const clickMenuIcon = () => {
        setMenuClicked(!menuClicked)
    }

    const selectPage = (link) => {
        setSelectedPage(link)
    }

    return (
        <div className="flex flex-col w-full bg-xw-100" >
            {menuClicked && <SideMenu
                menuClick = {menuClicked}
                changeMenuClicked = {clickMenuIcon}
                currentPage = {selectedPage}
                changeCurrentPage = {selectPage}
                categories={categories}
                max_shown={8}
                links={links}
            />}

            
            {menuClicked && <BlackFocusScreen
                display={menuClicked}
                onClick={clickMenuIcon}
            />
            }

            <NavBar
                changeMenuClicked={clickMenuIcon}
                logo="/logo.png"
                categories={categories}
                max_shown={8}
                links={links}
                home="/"
            />
            <Wrapper style="w-full h-48"/> 
            {children}

        </div>
    )
}

export default Layout