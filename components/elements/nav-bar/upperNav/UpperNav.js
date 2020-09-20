import React, { useState } from 'react'
import IconsContainer from './iconsContainer/iconsContainer'
import { Icon } from 'react-icons-kit'
import { ic_menu } from 'react-icons-kit/md/ic_menu'
import Link from 'next/link'


function UpperNav({style, changeMenuClicked, home, logo }) {

    const [openSearch, setOpenSearch] = useState(false) // search icon for small screens -> expanded or closed

    const openSearchClickHandler = () => {
        setOpenSearch(!openSearch) // open/close the search component for small screens
    }

    const MenuContainer = ({style}) => (
    
        <div className={style}>
            <div className="m-1 md:hidden cursor-pointer text-gray-700"
                onClick={changeMenuClicked}
            >
                <Icon size={25} icon={ic_menu}></Icon>
            </div>
        </div>

    )

    const SiteNameContainer = ({style}) => (
        
        <div className={style}>
                <Link href={home}>
                    <a className="text-lg font-bold whitespace-no-wrap text-gray-900">Mor Made</a>
                </Link>
        </div>
    
    )

    return (
        <div className={style}>

            <MenuContainer
                style={`${openSearch ? "hidden" : "flex"} flex items-center justify-start h-full md:flex-1 h-full`}
            />
            <SiteNameContainer 
                style={`${openSearch ? "hidden" : "flex"} md:flex  justify-start md:justify-center items-center  w-full md:flex-1 h-full`}
            />
            <IconsContainer style="flex flex-row md:flex-1 justify-center md:justify-end items-center w-full h-full"
                openSearch={openSearch}
                openSearchClickHandler={openSearchClickHandler}
            />

        </div>
    )
}

export default UpperNav