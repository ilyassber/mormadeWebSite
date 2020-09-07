import React, { useRef } from 'react'
import styles from './styles/welcomeBar.module.css'

export default function WelcomeBar({textToDisplay}) {


    return (
        <div className={ styles.container }>
            <div className={ styles.welcome_container }>
                <h1>{ textToDisplay }</h1>
            </div>
        </div>
    )
}