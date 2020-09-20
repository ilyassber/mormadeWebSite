import React, { useState } from 'react'
import Cover from '../../../graphics/imageCover/Cover'


function SousCategoriesBar({ show, hide, hovredCategorie }) {

    const SousCategoriesContent = () => (
        <div className="flex justify-between flex-shrink-0 w-full h-full pt-2">
            <div className="flex items-start  flex-1 flex-shrink-0 mr-5 ml-10">
                <ul className="flex flex-col items-start justify-start w-full p-5">
                    {hovredCategorie.categorie && hovredCategorie.categorie.sous_tags.map((sous_tag, index) =>
                        <li className="w-full mt-1 cursor-pointer text-center hover:text-gray-500" key={index}>{sous_tag}</li>
                    )}
                </ul>
            </div>
            <div className="flex  flex-col items-center flex-1 flex-shrink-0 ml-5 mr-5 border-l border-gray-200">
                <div className="flex items-end justify-center w-full h-5">
                    <h1>HIGH LIGHT</h1>
                </div>
                <div className="h-64 w-48 m-10 rounded-full overflow-hidden shadow-2xl">
                    {hovredCategorie.categorie && <img className="object-contain" src={hovredCategorie.categorie.tag_image} alt={hovredCategorie.categorie.tag} />}
                </div>
            </div>
        </div>
    )


    return (

        <div
            className={hovredCategorie.hovered ? " transform h-96 transition-all ease-out duration-100 flex flex-col items-center w-full shadow bg-white" : "shadow transform h-0 transition-all ease-out duration-100 w-full overflow-hidden bg-white"}
            onMouseEnter={show}
            onMouseLeave={hide}
        >
            <Cover
                style="flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-75"
                image="/images/Styles/style2.jpg"
                height="h-full"
                imageStyle="opacity-25"
            >
                <h1 className="text-xl font-amiri font-bold text-white">SOUS CATEGORIES</h1>
            </Cover>

            {/* <SousCategoriesContent /> */}
        
        </div>
    )
}

export default SousCategoriesBar