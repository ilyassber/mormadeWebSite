import React, { useRef, useState, useEffect } from 'react'
import { authenticate } from '../../services/authentication/authentication'
import { onClickOutside } from '../../services/hooks/onClickOutside'

const NavMenu = props => {

    let object = (
        <div className="">
            <div className="hover:bg-xw-100 w-24 border border-gray-900 bg-white">
                <button
                    className="focus:outline-none font-sans font-medium text-gray-900 text-sm ml-2"
                    type="button"
                    onClick={() => {authenticate({}, "logout", props.cookies['csrftoken'])}}>
                    logout
                </button>
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
            <div className="fixed z-50 top-0 right-0 mr-4 mt-10">
            </div>
        </div>
    )

    let contentWithMenu = (
        <div className={props.className}>
            <div ref={focusRef} className="fixed z-50 top-0 right-0 mr-4 mt-10">
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