import styles from './styles/sideMenu.module.css'
import { Icon } from 'react-icons-kit'
import {arrowRight2} from 'react-icons-kit/icomoon/arrowRight2'
import { useState } from 'react'

function FrameSlide({children, show}) {
    return (
        <div className={`${show ? "transform -translate-x-full transition-all ease-out duration-400" : "transform translate-x-0 transition-all ease-out duration-300"} bg-indigo-400`}>
            {children}
        </div>
    )
}

function ScrollBlocks({children, changeSwap}){
    return (
        <div className="flex-row justify-between items-center w-full h-full overflow-scroll"
            onClick={changeSwap}
        > {/* title area*/}
        {children}
        </div>
    )
}

function TitleBlock({children, color, height }){
    return (
        <div className={`flex justify-between items-center w-full ${height ? height : "h-16"} border-b ${color ? color : "border-gray-300"} bg-gray-100`}> {/* title area*/}
        {children}
        </div>
    )
}
function Block({children , changeTitle, title, changeItems}){
    return (
        <div className="flex justify-between items-center w-full h-20 p-5 border-b border-gray-300  hover:bg-blue-200 hover:text-gray-900"
            onClick={() => changeTitle(title)}
        > {/* title area*/}
        {children}
        </div>
    )
}


function SideMenu ({menuClick, changeMenuClicked, currentPage, firstRender , changeCurrentPage, categories, max_shown, links}) {
    
    const [initAppearance, setInitAppearance] = useState(false)
    const [swap , setSwap] = useState(true)
    const [title, setTitle] = useState("CATEGORIES") // nav title
    const [items, setItems] = useState(categories.reduce((acc, item) => {
                                        acc.push(item.tag)
                                        return acc},[]))
 
    const changeTitle = (newTitle) => {
            setTitle(newTitle)
            changeItems(newTitle, categories)
    }

    const changeItems = (title, categories) => {
        const listFound = categories.find( item => item.tag === title)
        if (listFound)
            setItems(listFound.sous_tags)
        else
        {
            setTitle("CATEGORIES")
            setItems(categories.reduce((acc, item) => {
                acc.push(item.tag)
                return acc},[]))
        }
    }

    const changeSwap = () =>  {
        setSwap(!swap)
    }
    return (
        <nav className={`${menuClick ? "animate-menuSlideIn left-0" :  !firstRender ? " animate-menuSlideOut -left-full": "-left-full"  } fixed flex-row w-11/12 z-30 h-full font-sans bg-white`}>
            <TitleBlock>
                <div 
                    className="flex justify-center items-center h-full p-5 cursor-pointer"
                    >
                    <h1 className="text-xl font-bold">{currentPage.page}</h1>
                </div>
                <div
                    className="flex justify-center items-center p-5 h-full cursor-pointer"
                    onClick={changeMenuClicked}
                >
                    <h1>close</h1>
                </div>
            </TitleBlock>
            <TitleBlock color="bg-white" height="h-12" >
                <div className="flex justify-center items-center h-full w-full p-5 cursor-pointer">
                    <h1 className="text-xl font-bold">{title}</h1>
                </div>
            </TitleBlock>
            {/* <FrameSlide show={swap} > */}
                <ScrollBlocks changeSwap={changeSwap}>
                {items.map((categorie, indx) =>  (
                    <Block
                        key = {indx}
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