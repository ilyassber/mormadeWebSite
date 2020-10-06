import { useState , useEffect , useRef } from 'react'
import UpperNav from './upperNav/UpperNav'
import MiddleNav from './middleNav/MiddleNav'
import CategoriesBar from './categoriesBar/categoriesBar'
import WelcomeBar from '../bar/WelcomeBar'


const categoriesStyles = {
    fixed : "fixed top-0 hidden md:flex flex-col  w-full shadow-lg bg-white",
    notFixed : "absolute hidden md:flex flex-col w-full  shadow-lg bg-white",
    showBrandName : "animate-smouthAppearance flex px-4",
    hideBrandName : "hidden"
}

function NavBar({ changeMenuClicked, openSearch, openSearchClickHandler, categories, max_shown, links, home }) {

    const [style, setStyle] = useState({categoriesBarStyle : categoriesStyles.notFixed, brandNameStyle : categoriesStyles.hideBrandName})
    const upperNavRef = useRef(null)
    // const middleNavRef = useRef(null)
    // const WelcomeNavRef = useRef(null)
    // const categoriesNavRef = useRef(null)
    


    useEffect(
        () => {
            function adjustNavsPosition (event) {
                if (upperNavRef.current){
                    if (upperNavRef.current.getBoundingClientRect().y >= -(upperNavRef.current.getBoundingClientRect().height))
                        setStyle({categoriesBarStyle : categoriesStyles.notFixed, brandNameStyle : categoriesStyles.hideBrandName})
                    else 
                        setStyle({categoriesBarStyle : categoriesStyles.fixed, brandNameStyle : categoriesStyles.showBrandName})
                }
                
            }

            document.addEventListener('scroll', adjustNavsPosition)
            return () => {
                document.removeEventListener('scroll', adjustNavsPosition)
            }
        }, []
    )

    

    return (
        <nav   className="z-10 flex flex-col w-ful" >
            <div ref={upperNavRef} className="fixed md:static z-10 w-full bg-white">
                <UpperNav
                    style=" flex w-full md:w-4/5 mx-auto content-center h-12 py-5/12  pt-4 pb-2 bg-white"
                    changeMenuClicked={changeMenuClicked}
                    openSearch={openSearch}
                    openSearchClickHandler={openSearchClickHandler}
                    home={home}
                    links={links}
                />
                <MiddleNav
                    style={` hidden md:flex h-12 w-full px-2 bg-white`}
                    links={links}
                />
                <WelcomeBar  className="w-full"/>
                <CategoriesBar
                    style={style.categoriesBarStyle}
                    max_shown={max_shown}
                    categories={categories}
                    brandNameStyle={style.brandNameStyle}
                />
            </div>
        </nav>
    )
}

export default NavBar