import React from 'react'
import { ImgRound } from '../graphics/images'

const Menu = props => {

    let content = (
        <div className={props.className}>
            <div className="h-full w-auto container content-center mx-auto flex flex-wrap">
                <ImgRound className="w-5 h-5" src="/profile.png" />
                <button className="focus:outline-none" type="button" onClick={props.onClick}>
                    <p className="font-sans font-medium text-sm text-gray-900 text-center ml-2">
                        {props.username}
                    </p>
                </button>
            </div>
        </div>
    )

    return content
}

export default Menu