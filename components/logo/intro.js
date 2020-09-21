import React from 'react'

const Intro = props => {

    let content = (
        <div className={props.className}>
            <div className="container h-full w-auto content-center mx-auto flex flex-wrap">
                <strong className="h-5 font-amiri font-regular italic text-base text-gray-900">FROM </strong>
                <div
                    className="h-5 w-5 flex items-center justify-center ml-1 mr-1">
                    <img src='icons/morocco.png' />
                </div>
                <strong className="h-5 font-amiri font-regular italic text-base text-gray-900"> TO WORLD WIDE</strong>
            </div>
        </div>
    )

    return content
}

export default Intro