import React, { useState } from 'react'
import IconsContainer from './iconsContainer/iconsContainer'
import { Icon } from 'react-icons-kit'
import { ic_menu } from 'react-icons-kit/md/ic_menu'
import Link from 'next/link'
import { Brand } from '../../../logo'


function UpperNav({style, changeMenuClicked, openSearch, openSearchClickHandler, home, logo }) {

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
            <Brand />
        </div>
    
    )

    return (
        <div className={style}>

            <MenuContainer
                style={`flex items-center justify-start h-full md:flex-1 h-full`}
            />
            <SiteNameContainer 
                style={`flex md:flex  justify-start md:justify-center items-center  w-full md:flex-1 h-full`}
            />
            <IconsContainer style="flex flex-row md:flex-1 justify-center md:justify-end items-center w-full h-full"
                openSearch={openSearch}
                openSearchClickHandler={openSearchClickHandler}
            />

        </div>
    )
}

export default UpperNav