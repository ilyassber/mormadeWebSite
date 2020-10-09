import React, { useState, useEffect , useRef } from 'react'
import SousCategoriesBar from './sousCategoriesBar'
import { Brand } from '../../../logo'


const SiteNameContainer = ({style}) => (
        
    <div className={style}>
        <Brand />
    </div>

)


export default function CategoriesBar({ style ,max_shown, categories, brandNameStyle }) {

    const [openCategorie, setOpenCategorie] = useState({open : false, categorie : null}) // open/close + the categorie to be shown in sougategories 
    const categorieRef = useRef(null) // reference on "categories list" : to track outside click 



    console.log(" Categorie RENDER")


    // load clicked categorie and set sousCategories to open  
    const clickOnCategorie = (categorie) => {
        setOpenCategorie({open : true, categorie : categorie})
        console.log(" openCategorie : ->  ", openCategorie) 
    }


    // add eventListener to track clicks : close souscategories bar when an outside click was detected  
    useEffect(
        () => {

            function categorieClickHandler (event) {
                if (categorieRef.current && !categorieRef.current.contains(event.target))
                    setOpenCategorie({open : false, categorie : null})
            }

            document.addEventListener("mousedown", categorieClickHandler)
            
            return () => {
                document.removeEventListener("mousedown", categorieClickHandler)
            }
        
        },[]
    )


    return (
        <div ref={categorieRef}  className={style}>
            <div className="flex flex-row justify-between h-12 w-full">
                <div className="flex flex-row justify-start items-center h-full flex-1 ">
                    <SiteNameContainer style={brandNameStyle}
                    />
                </div>
                <ul className="animate-smouthAppearance flex flex-row justify-center items-center h-full" >
                    {categories.map((categorie, index) =>
                        (index < max_shown) && <li  key={ index }
                                                    className={`flex px-4 h-full justify-center items-center cursor-pointer font-lato text-base font-black ${(openCategorie.categorie && openCategorie.categorie === categorie) ? "text-yellow-600" : "text-gray-900 hover:text-gray-700" }`}
                                                    onClick={() => clickOnCategorie(categorie)}
                        >
                        {categorie.name.toUpperCase()}</li>
                    )}
                </ul>
                <div className="flex flex-1 h-full">
                </div>
            </div>
            {openCategorie.open && <SousCategoriesBar closeClickHandler={() => setOpenCategorie({open : false, categorie : null})}
                categorie={openCategorie.categorie}
            />}
        </div>
    )
}