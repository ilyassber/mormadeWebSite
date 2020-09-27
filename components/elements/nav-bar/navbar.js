import UpperNav from './upperNav/UpperNav'
import MiddleNav from './middleNav/MiddleNav'
import CategoriesBar from './categoriesBar/categoriesBar'
import WelcomeBar from '../bar/WelcomeBar'


function NavBar({ changeMenuClicked, openSearch, openSearchClickHandler, categories, max_shown, links, home }) {

    return (
        <nav className="z-10 fixed flex flex-col w-full" >
            <div className="z-10 w-full bg-white">
            <UpperNav
                style="flex w-4/5 mx-auto content-center h-12 py-5/12  pt-4 pb-2 bg-white"
                changeMenuClicked={changeMenuClicked}
                openSearch={openSearch}
                openSearchClickHandler={openSearchClickHandler}
                home={home}
                links={links}
            />
            </div>
            <div className={`${openSearch ? "" : "" } flex flex-col w-full transition-all ease-out duration-500`}>
            <MiddleNav
                style={` hidden md:flex h-12 w-full px-2 bg-white`}
                links={links}
            />
            
            <WelcomeBar className="w-full"/>
            
            <CategoriesBar 
                style="hidden md:block w-full bg-white"
                max_shown={max_shown}
                categories={categories}
            />
            </div>
        </nav>
    )
}

export default NavBar