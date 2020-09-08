import React, { useRef } from 'react'
import styles from './styles/welcomeBar.module.css'

export default function WelcomeBar({textToDisplay}) {


    return (
        <div className="hidden lg:flex justify-center items-center w-full h-10 bg-white sm:hidden">
            <div className="h-full text-center">
                <h1>{ textToDisplay }</h1>
            </div>
        </div>
    )
}