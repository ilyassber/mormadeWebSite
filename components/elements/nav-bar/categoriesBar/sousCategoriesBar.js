import React, { useState } from 'react'
import Cover from '../../../graphics/imageCover/Cover'
import IconsContainer from '../upperNav/iconsContainer/iconsContainer'
import { Icon } from 'react-icons-kit'
import { close } from 'react-icons-kit/ikons/close'

function SousCategoriesBar({categorie, closeClickHandler}) {

    // close icon
    const CloseIcon = () => (
        <Icon className="cursor-pointer text-gray-800 "
            onClick={closeClickHandler}
            size={20} icon={close}>
        </Icon>
    )

    const SousCategoriesContent = () => (
        <div className="flex justify-center w-full">
            <div className="flex flex-col items-center justify-start flex-1 flex-shrink-0 m-5">
                <ul className=" w-6/12 flex flex-col items-start justify-start ">
                    <h2 className="my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default">Sous Categories</h2>
                    <li key={-1}></li>
                    {categorie && categorie.sous_tags.map((sous_tag, index) =>
                        <li className="ml-2 cursor-pointer whitespace-no-wrap text-md hover:underline text-justify" key={index}>{sous_tag}</li>
                    )}
                </ul>
            </div>
            <div className="flex flex-col justify-start items-center flex-1 m-5 border-gray-200">
                <h2 className="my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default">HIGH LIGHT</h2>
                <div className=" m-5  overflow-hidden shadow-2xl">
                    <p>no image to be shown</p>
                </div>
            </div>
        </div>
    )


    const BlankContent = () => (
        <div className="relative flex flex-col justify-start items-center w-11/12 max-w-7xl bg-white">
            <div className="flex flex-row justify-end items-center w-full px-2 h-12 ">
                <CloseIcon/>
            </div>
            <div className="flex flex-row justify-center items-center w-full px-2 h-12 ">
                <h1 className=" animate-smouthAppearanceS font-lato text-sm font-black tracking-widest">{categorie.name.toUpperCase()}</h1>                
            </div>
            <div className="flex flex-col justify-center items-center w-full h-120">
            <h1 className="my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default">{categorie.tag}</h1>
            <div className="flex flex-col justify-start items-center m-5 h-64 w-10/12 ">
                <p className="m-2">No content available</p>
                <h1 className="text-lg">Stay Tuned</h1>
            </div>
            </div>
        </div>
    )
    return (

        <div className=" animate-smouthAppearance absolute flex flex-col items-center w-full  py-5 border-t border-gray-500 bg-white">
            {/* <SousCategoriesContent /> */}
            <BlankContent/>
        </div>
    )
}

export default SousCategoriesBar