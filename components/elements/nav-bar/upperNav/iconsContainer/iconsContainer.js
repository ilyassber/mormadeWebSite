import { Icon } from 'react-icons-kit'
import {search, user, heart, cart } from 'react-icons-kit/icomoon'
import { cross } from 'react-icons-kit/icomoon/cross'


function IconsContainer({ openSearch, openSearchClickHandler, style}) {

    const searchIconStyle = {
        openStyle : "order-last flex justify-center h-full w-8 outline-none focus:outline-none",
        closeStyle : "flex justify-center h-full w-8 outline-none focus:outline-none",
    }

    const inputStyle = {
        openStyle : "h-full transform w-full transition-all ease-out duration-300  outline-none border-b border-gray-500",
        closeStyle : "transform w-0 transition-all ease-out duration-300",
    }

    const SearchIcon = () => (
        <form className="md:hidden flex justify-end h-8 w-full">
            <div
                className={ openSearch ? searchIconStyle.openStyle : searchIconStyle.closeStyle }
                onClick={ openSearchClickHandler }
            >
                <Icon icon={ openSearch ? cross : search }></Icon>
            </div>
            
            {openSearch && <button className="h-full w-8 outline-none focus:outline-none"><Icon icon={search}></Icon></button>}
            
            <input className={ openSearch ? inputStyle.openStyle : inputStyle.closeStyle } type="text" placeholder="search" ></input>
        </form>
    )

    const NewIcon = ({ size, icon }) => (
        <div className={`inline m-2 md:m-2 cursor-pointer text-gray-700`}>
            <Icon size={size} icon={icon}></Icon>
        </div>
    )

    return (
        <div className={style}>
                <SearchIcon />
            <div className={`${!openSearch ? "flex" : "hidden" } flex-row h-full`}>
                <NewIcon size={15} icon={user} />
                <span className="hidden lg:inline my-2" >user</span>

                <NewIcon size={15} icon={heart} />
                <span className="hidden lg:inline my-2" >favorites</span>
                <NewIcon size={15} icon={cart} />
                <span className="hidden lg:inline my-2" >{`(${0})`}</span>
            </div>
        </div>
    )
}

export default IconsContainer