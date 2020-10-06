import React, { useRef } from 'react'

export default function WelcomeBar( { style, textToDisplay } ) {


    return (
        <div className={style} >
            <div className="w-full h-full  overflow-hidden bg-gray-900">
                <img className="w-full object-contain object-center opacity-25" src="/images/Styles/style2.jpg"/>
            </div>
            <div className=" absolute flex justify-center items-center h-full w-full text-center font-bold text-white ">
                <h1>{ textToDisplay }</h1>
            </div>
        </div>
    )
}