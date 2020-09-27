import React from 'react'

const Intro = props => {

    if (props.type == 'white') {
        return (
            <div className={props.className}>
                <div className="container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-white">
                    <span className="h-auto font-sans font-light text-xs align-middle text-gray-900 m-1">from </span>
                    <div
                        className="h-auto w-4 flex flex-wrap content-center items-center justify-center m-1">
                        <img src='icons/morocco.png' />
                    </div>
                    <span className="h-auto font-sans font-light text-xs align-middle text-gray-900 m-1"> to world wide</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className={props.className}>
                <div className="container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-gray-900">
                    <span className="h-auto font-sans font-light text-xs align-middle text-white m-1">from </span>
                    <div
                        className="h-auto w-4 flex flex-wrap content-center items-center justify-center m-1">
                        <img src='icons/morocco.png' />
                    </div>
                    <span className="h-auto font-sans font-light text-xs align-middle text-white m-1"> to world wide</span>
                </div>
            </div>
        )
    }
}

export default Intro