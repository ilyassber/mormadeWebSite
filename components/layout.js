import React, { useState } from 'react'
import Wrapper from './widgets/utilities/wrapper'
import NavBar from './elements/nav-bar/navbar'
import SideMenu from './elements/side-menu/sideMenu'
import SearchGate from './elements/searchGate/searchGate'
import BlackFocusScreen from './elements/blackFocusScreen/BlackFocusScreen'
import { getRequest } from '../services/api/get/getRequest'

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







const Layout = (props) => {
    
// GLOBAL STATES
    
    const [openMenu, setOpenMenu]           = useState(false)   // menu open/close state
    const [selectedPage, setSelectedPage]   = useState({ page: "HOME", path: "/" }) // current selected page
    const [openSearch, setOpenSearch]       = useState(false)   // search open/close state
    const [searchData, setSearchData]       = useState({
                                                searchHistory : [],
                                                searchTarget : "",
                                                searchTrackedInputText : "",
                                            })  // saved search DATA 



// STATE CALLBACKS

    
    // openSearch callBacks
    
    const changeOpenSearch = () => {
        setOpenSearch(!openSearch)
    }

    // openMenu callBacks
    
    const changeOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    // selectedPage callBacks
    
    const changeSelectedPage = (link) => {
        setSelectedPage(link)
    }

    
// DISPLAYED CONTENT 

    const Page = () => (
        !openSearch && props.children
    )
    
    const Menu = () => (
        openMenu && <SideMenu   menuClick={openMenu}
                                    changeMenuClicked={changeOpenMenu}
                                    currentPage={selectedPage}
                                    changeCurrentPage={changeSelectedPage}
                                    categories={categories}
                                    max_shown={8}
                                    links={links}
                        />
    )

    const NavigationBar = () => (
        <NavBar changeMenuClicked={changeOpenMenu}
                openSearch={openSearch}
                openSearchClickHandler={changeOpenSearch}
                logo="/logo.png"
                categories={props.tags}
                max_shown={8}
                links={links}
                home="/"
        />
    )
    
    const SearchPage = () => (
        openSearch  &&  <SearchGate changeOpenSearch={ changeOpenSearch }
                                    searchData={searchData}
                                    setSearchData={(data) => setSearchData(data)}
                        />
    )

    const BlackFocusOff = () => (
        (openMenu ) &&  <BlackFocusScreen onClick={changeOpenMenu}/>
    )

    const SpacingTop = () => (
        openSearch ? <Wrapper style=" w-full bg-blue-600" /> : <Wrapper style="w-full h-48" />
    )


// RENDER THAT SHIT

    return (
        <div className="flex flex-col w-full bg-xw-100 bg-scroll" >

            <Menu />
            <BlackFocusOff/>
            <NavigationBar/>
            <SpacingTop/>
            <SearchPage/>
            <Page/>

        </div>    
    )
}

export default Layout