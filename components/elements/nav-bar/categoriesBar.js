import React, { useState, useRef } from 'react'
import styles from './styles/categoriesBar.module.css'
import SousCategoriesBar from './sousCategoriesBar'



export default function CategoriesBar({ max_shown, categories }) {

    const [hovredCategorie, setHovredCategorie] = useState({ hovered: false, categorie: null })
    const [moreCategorie, setmoreCategorie] = useState(true)
    const show = () => {
        setHovredCategorie((prevstate) => ({ ...prevstate, hovered: true }))
    }
    const hide = () => {
        setHovredCategorie((prevstate) => ({ ...prevstate, hovered: false }))
    }


    return (
        <div className="hidden lg:block z-50 w-full bg-gray-600 ">
            <div className="flex justify-center w-full border-b border-gray-300 bg-white">
                <ul className="flex justify-center items-center h-12 " >
                    {categories.map((categorie, index) =>
                        (index < max_shown || moreCategorie) && <li key={ index }
                            className="flex-shrink p-4 cursor-pointer text-md hover:text-gray-500"
                            onMouseEnter={() => setHovredCategorie({ hovered: true, categorie: categorie })}
                            onMouseLeave={() => setHovredCategorie({ hovered: false, categorie: categorie })}
                        >{categorie.tag.toUpperCase()}</li>
                    )}
                    {categories.length >= max_shown && <li className="flex-shrink p-4 cursor-pointer font-bold font-amiri" key={ max_shown }
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