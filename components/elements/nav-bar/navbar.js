import UpperNav from './upperNav/UpperNav'
import MiddleNav from './middleNav/MiddleNav'
import WelcomeBar from './welcomeBar/welcomeBar'
import CategoriesBar from './categoriesBar/categoriesBar'


function NavBar({ changeMenuClicked, categories, max_shown, links, home }) {

    return (
        <nav className="z-10 fixed flex flex-col w-full bg-white" >
            
            <UpperNav
                style="flex w-full h-12 px-2"
                changeMenuClicked={changeMenuClicked}
                home={home}
                links={links}
            />
            
            <MiddleNav
                style="hidden md:flex h-12 w-full px-2"
                links={links}
            />
            
            <WelcomeBar
                style="hidden lg:relative lg:flex justify-center items-center w-full h-10 bg-gray-900 sm:hidden "
                textToDisplay="welcome"
            />
            
            <CategoriesBar 
                max_shown={max_shown}
                categories={categories}
            />
        </nav>
    )
}

export default NavBar