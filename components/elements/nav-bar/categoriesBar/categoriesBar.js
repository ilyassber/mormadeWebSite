import React, { useState, useEffect , useRef } from 'react'
import SousCategoriesBar from './sousCategoriesBar'
import { Brand } from '../../../logo'


const SiteNameContainer = ({style}) => (
        
    <div className={style}>
        <Brand />
    </div>

)


export default function CategoriesBar({ style ,max_shown, categories, brandNameStyle, changeWelcomeBarAppearance }) {

    const [openCategorie, setOpenCategorie] = useState({open : false, categorie : null}) // open/close + the categorie to be shown in sougategories 
    const categorieRef = useRef(null) // reference on "categories list" : to track outside click 



    console.log(" Categorie RENDER")


    // load clicked categorie and set sousCategories to open  
    const clickOnCategorie = (categorie) => {
        changeWelcomeBarAppearance(false)
        setOpenCategorie({open : true, categorie : categorie})
        console.log(" openCategorie : ->  ", openCategorie) 
    }


    // add eventListener to track clicks : close souscategories bar when an outside click was detected  
    useEffect(
        () => {

            function categorieClickHandler (event) {
                if (categorieRef.current && !categorieRef.current.contains(event.target))
                    {
                        setOpenCategorie({open : false, categorie : null})
                        changeWelcomeBarAppearance(true)
                    }
            }

            document.addEventListener("mousedown", categorieClickHandler)
            
            return () => {
                document.removeEventListener("mousedown", categorieClickHandler)
            }
        
        },[]
    )


    return (
        <div ref={categorieRef}  className={style}>
            <div className="relative w-full h-auto">
            <div className="flex flex-row justify-between h-12 w-full">
                <div className="flex flex-row justify-start items-center h-full flex-1 ">
                    <SiteNameContainer style={brandNameStyle}
                    />
                </div>
                <ul className="flex flex-row justify-center items-center h-full pt-2" >
                    {categories.map((category, index) =>
                        (index < max_shown) && <li  key={ index }
                                                    className={`flex px-4 h-full justify-center items-center cursor-pointer font-lato text-sm font-black tracking-widest ${(openCategorie.categorie && openCategorie.categorie === category) ? "text-gray-900 border-b-2 border-black" : "text-gray-900 border-b-2 border-transparent" }`}
                                                    onClick={() => {
                                                        if (category.type == 'page') {
                                                            window.location = category.link
                                                        } else {
                                                            clickOnCategorie(category)
                                                        }
                                                    }}
                        >
                        {category.name.toUpperCase()}</li>
                    )}
                </ul>
                <div className="flex flex-1 h-full">
                </div>
            </div>
            {openCategorie.open && <SousCategoriesBar closeClickHandler={() => {setOpenCategorie({open : false, categorie : null} ); changeWelcomeBarAppearance(true)
 }}
                categorie={openCategorie.categorie}
            />}
            </div>
        </div>
    )
}