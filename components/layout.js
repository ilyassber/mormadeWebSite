import React, { useState } from 'react'
import Wrapper from './widgets/utilities/wrapper'
import NavBar from './elements/nav-bar/navbar'
import SideMenu from './elements/side-menu/sideMenu'
import SearchGate from './elements/searchGate/searchGate'
import BlackFocusScreen from './elements/blackFocusScreen/BlackFocusScreen'
import { getRequest } from '../services/api/get/getRequest'
import Footer from './elements/footer/footer'

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

    const [openMenu, setOpenMenu] = useState(false)   // menu open/close state
    const [selectedPage, setSelectedPage] = useState({ page: "HOME", path: "/" }) // current selected page
    const [openSearch, setOpenSearch] = useState(false)   // search open/close state
    const [searchData, setSearchData] = useState({
        searchHistory: [],
        searchTarget: "",
        searchTrackedInputText: "",
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

    const FooterBar = () => (
        <div className={`${openSearch ? "hidden" : "" } w-full h-full`}>

        <Footer categories={categories}
            max_shown={5}
            links={links}
        />
        </div>
    )

    const Page = () => (
        <div className={`${openSearch ? "hidden" : "" } w-full h-full`}>

        {props.children}
        </div>

    )

    const Menu = () => (
        openMenu && <SideMenu menuClick={openMenu}
            changeMenuClicked={changeOpenMenu}
            currentPage={selectedPage}
            changeCurrentPage={changeSelectedPage}
            categories={categories}
            max_shown={8}
            links={links}
        />
    )

    const NavigationBar = () => (
        // <div className={`${openSearch ? "hidden" : "" } w-full h-full`}>

        <NavBar changeMenuClicked={changeOpenMenu}
            openSearch={openSearch}
            openSearchClickHandler={changeOpenSearch}
            logo="/logo.png"
            categories={props.tags}
            max_shown={8}
            links={links}
            home="/"
        />
// </div>
    )

    const SearchPage = () => (
        openSearch && <SearchGate changeOpenSearch={changeOpenSearch}
            searchData={searchData}
            setSearchData={(data) => setSearchData(data)}
        />
    )

    const BlackFocusOff = () => (
        (openMenu) && <BlackFocusScreen onClick={changeOpenMenu} />
    )

    const SpacingTop = () => (
        // <div className={`${openSearch ? "hidden" : "" } w-full h-full`}>
    <Wrapper style="w-full absolute top-0 h-48" />
    // </div>
    )


    // RENDER THAT SHIT

    return (
        <div className="flex flex-col w-full h-full overflow-scroll bg-scroll" >

            <Menu />
            <BlackFocusOff />
            {/* <div className={`${openSearch ? "hidden" : "" } w-full h-full`}> */}
            <NavigationBar />
            <SpacingTop />
            {/* </div> */}
            <SearchPage />
            {/* <div className={`${openSearch ? "hidden" : "" } w-full h-full`}> */}
                <Page />
                <FooterBar />
            {/* </div> */}

        </div>
    )
}

export default Layout