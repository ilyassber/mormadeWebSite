import React, { useState, useEffect } from 'react'
import Brand from '../../logo/Brand'
import { Menu } from '../../user'
import { NavMenu } from '.'

const Navbar = props => {

    const [menuDrop, setMenuDrop] = useState(false)
    const [user, setUser] = useState(null)
    
    let status = false

    useEffect(() => {
        let userData = localStorage.getItem('_user')
        console.log(userData)
        setUser(userData)
    }, [])

    const dropMenuOn = () => {
        status = true
        console.log(status)
        if (menuDrop == true) {
            setMenuDrop(false)
        } else {
            setMenuDrop(true)
        }
    }

    const dropMenuOff = () => {
        if (status) {
            status = false
        } else {
            console.log('cancel')
            setMenuDrop(false)
        }
    }

    let content = (
        <div className={props.className}>
            <div className="fixed z-50 h-12 w-full flex bg-white">
                <div className="flex flex-row">
                    <Brand className="h-full w-auto ml-6" />
                </div>
                <div className="w-full flex flex-row-reverse">
                    <Menu className="h-full w-auto mr-6" username="ilyass" onClick={dropMenuOn}/>
                </div>
            </div>
            <NavMenu className="z-50" user={user} cookies={props.cookies} drop={menuDrop} callBack={dropMenuOff}/>
        </div>
    )

    return content
}

export default Navbar