import React, { useRef, useState, useEffect } from 'react'
import { authenticate } from '../../../services/authentication/authentication'
import { onClickOutside } from '../../../services/hooks/onClickOutside'
import { BtnBbw } from '../../graphics/buttons'
import Cookies from 'js-cookie'

const NavMenu = props => {

    let user = (props.user) ? JSON.parse(props.user) : null
    //let user = null

    let object = (
        <div className="">
            <div className="w-auto flex flex-col bg-white shadow">
                <div className="w-32 flex flex-col m-4">
                    {(user != null) ? (
                        <button
                            className="focus:outline-none font-sans font-semibold text-gray-900 text-sm text-left hover:underline my-2"
                            type="button"
                            onClick={() => { }}>
                            {user.username}
                        </button>
                    ) : <BtnBbw className="w-auto h-12 mt-2 mb-2" value="SIGN IN" onClick={() => {window.location = '/auth'}} />} 
                    {(user != null) ? (
                        <button
                            className="focus:outline-none font-sans font-semibold text-gray-700 text-xs text-left hover:underline my-2"
                            type="button"
                            onClick={() => { authenticate({}, "logout", Cookies.get('csrftoken')) }}>
                            Sign out
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    )

    const focusRef = useRef(null)

    const onBlurHandler = (event) => {
        if (event.type != 'keydown') {
            props.callBack()
        } else if (event.keyCode == 27) {
            props.callBack()
        }
    }

    onClickOutside(focusRef, onBlurHandler)

    let contentWithoutMenu = (
        <div className={props.className}>
            <div className="">
            </div>
        </div>
    )

    let contentWithMenu = (
        <div className={props.className}>
            <div ref={focusRef} className="">
                {object}
            </div>
        </div>
    )

    if (props.drop == true) {
        return contentWithMenu
    } else {
        return contentWithoutMenu
    }
}

export default NavMenu