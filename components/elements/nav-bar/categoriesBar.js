import React, { useState, useRef } from 'react'
import styles from './styles/categoriesBar.module.css'
import SousCategoriesBar from './sousCategoriesBar'



export default function CategoriesBar({ max_shown, categories }) {

    const [hovredCategorie, setHovredCategorie] = useState({ hovered: false, categorie: null })
    const [moreCategorie, setmoreCategorie] = useState(true)
    const [position, setPosition] = useState({position : "absolute", top : "8.5rem"});
    const show = () => {
        setHovredCategorie((prevstate) => ({ ...prevstate, hovered: true }))
    }
    const hide = () => {
        setHovredCategorie((prevstate) => ({ ...prevstate, hovered: false }))
    }


    return (
        <div className={ styles.container }>
            <div className={ styles.bottom_container }>
                <ul className={ styles.categories_container } >
                    {categories.map((categorie, index) =>
                        (index < max_shown || moreCategorie) && <li key={ index }
                            className={[styles.categorie, "hover:text-gray-500"].join(' ')}
                            onMouseEnter={() => setHovredCategorie({ hovered: true, categorie: categorie })}
                            onMouseLeave={() => setHovredCategorie({ hovered: false, categorie: categorie })}
                        // onMouseEnter={() => show(categorie)}
                        // onMouseLeave={() => hide(categorie)}
                        >{categorie.tag}</li>
                    )}
                    {categories.length >= max_shown && <li className={ styles.categorie } key={ max_shown }
                        onMouseDown={() => setmoreCategorie(!moreCategorie)}
                    >{moreCategorie ? "less" : "more ..."}</li>}
                </ul>
            </div>
            <SousCategoriesBar
                hovredCategorie={ hovredCategorie }
                show={ show }
                hide={ hide }
            />
        </div>
    )
}