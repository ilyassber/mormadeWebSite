import styles from './styles/sideMenu.module.css'
import { Icon } from 'react-icons-kit'
import {arrowRight2} from 'react-icons-kit/icomoon/arrowRight2'
import { useState } from 'react'

function FrameSlide({children, show}) {
    return (
        <div className={`${show ? "transform translate-x-0 transition-all ease-out duration-300" : "transform -translate-x-full transition-all ease-out duration-300"} transform translate-x-0 transition-all ease-out duration-300 h-full w-full border-indigo-400`}>
            {children}
        </div>
    )
}

function ScrollBlocks({children}){
    return (
        <div className="flex-row justify-between items-center w-full h-full overflow-scroll"> {/* title area*/}
        {children}
        </div>
    )
}

function TitleBlock({children}){
    return (
        <div className="flex justify-between items-center w-full h-16 border-b border-gray-300 bg-gray-100"> {/* title area*/}
        {children}
        </div>
    )
}
function Block({children , changeTitle, title, changeItems }){
    return (
        <div className="flex justify-between items-center w-full h-20 p-5 border-b border-gray-300 bg-white hover:bg-blue-200 hover:text-gray-900"
            onClick={() => changeTitle(title)}
        > {/* title area*/}
        {children}
        </div>
    )
}


function SideMenu ({menuClick, changeMenuClicked, currentPage, changeCurrentPage, categories, max_shown, links}) {
    
    // const [swep]
    const [title, setTitle] = useState(currentPage.page) // nav title
    const [items, setItems] = useState(categories.reduce((acc, item) => {
                                        acc.push(item.tag)
                                        return acc},[]))
 
    const changeTitle = (newTitle) => {
        setTitle(newTitle)
        const found = categories.find( item => item.tag === newTitle)
        if (found)
            setItems(found.sous_tags)
        else
        {
            setTitle(currentPage.page)
            setItems(categories.reduce((acc, item) => {
                acc.push(item.tag)
                return acc},[]))
        }
    }

    const changeItems = (title, categories) => {
        setItems(categories.find( item => item.tag === title).sous_tags)
    }

    return (
        <nav className={`${menuClick ? "transform translate-x-0 transition-all ease-out duration-500": "transform -translate-x-full transition-all ease-out duration-500 "} fixed flex-row w-11/12 z-30 h-full font-sans bg-white`}>
            <TitleBlock>
                <div 
                    className="flex justify-center items-center h-full p-5 cursor-pointer"
                    >
                    <h1 className="text-xl font-bold">{title}</h1>
                </div>
                <div
                    className="flex justify-center items-center p-5 h-full cursor-pointer"
                    onClick={changeMenuClicked}
                >
                    <h1>close</h1>
                </div>
            </TitleBlock>
            {/* <FrameSlide show={} > */}
            <ScrollBlocks>
            {items.map((categorie, indx) =>  (
                <Block
                    key={indx}
                    changeTitle = {changeTitle}
                    title = {categorie}
                >
                    <h1>{categorie}</h1>
                    <Icon icon={arrowRight2}></Icon>
                </Block>
            ))}
            </ScrollBlocks>
            {/* </FrameSlide> */}
        </nav>
    )
}

export default SideMenu