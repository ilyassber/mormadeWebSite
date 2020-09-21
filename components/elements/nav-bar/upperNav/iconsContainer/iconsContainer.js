import { Icon } from 'react-icons-kit'
import { search, user, heart, cart } from 'react-icons-kit/icomoon'
import { cross } from 'react-icons-kit/icomoon/cross'


function IconsContainer({ openSearch, openSearchClickHandler, style }) {

    const searchIconStyle = {
        openStyle: "order-last flex justify-center h-full w-8 outline-none focus:outline-none",
        closeStyle: "flex justify-center h-full w-8 outline-none focus:outline-none",
    }

    const inputStyle = {
        openStyle: "h-full transform w-full transition-all ease-out duration-300  outline-none border-b border-gray-500",
        closeStyle: "transform w-0 transition-all ease-out duration-300",
    }

    const SearchIcon = () => (
        <form className="md:hidden flex justify-end h-8 w-full">
            <div
                className={openSearch ? searchIconStyle.openStyle : searchIconStyle.closeStyle}
                onClick={openSearchClickHandler}
            >
                <Icon icon={openSearch ? cross : search}></Icon>
            </div>

            {openSearch && <button className="h-full w-8 outline-none focus:outline-none"><Icon icon={search}></Icon></button>}

            <input className={openSearch ? inputStyle.openStyle : inputStyle.closeStyle} type="text" placeholder="search" ></input>
        </form>
    )

    const NewIcon = ({ className, src }) => (
        <div className={`inline m-2 md:m-2 flex flex-wrap content-center cursor-pointer text-gray-700`}>
            <div className={className}>
                <div
                    className="h-full w-full flex items-center justify-center">
                    <img src={src} />
                </div>
            </div>
        </div>
    )

    return (
        <div className={style}>
            <SearchIcon />
            <div className={`${!openSearch ? "flex" : "hidden"} flex-row h-full`}>
                <NewIcon className="h-5 w-5" src='icons/loop.svg' />
                <NewIcon className="h-5 w-5" src='icons/avatar.svg' />
                <NewIcon className="h-5 w-5" src='icons/heart.svg' />
                <NewIcon className="h-5 w-5" src='icons/cart.svg' />
            </div>
        </div>
    )
}

export default IconsContainer