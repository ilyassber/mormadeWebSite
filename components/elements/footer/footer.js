import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { facebook2 , twitter, instagram} from 'react-icons-kit/icomoon'
import { LeaveMessage } from '../discuss'

export default function Footer({categories, max_shown, links}) {


    const IconsContainer = () => (
        <div className="flex flex-row mx-2 text-gray-300 ">
            <a className="mx-4"><Icon size={20} icon={facebook2} /></a> 
            <a className="mx-4"><Icon size={20} icon={instagram} /></a>
            <a className="mx-4"><Icon size={20} icon={twitter} /></a>
        </div>
    )

    const CategoriesCard = () => (
        <div className="my-2 sm:mx-8 md:mx-10 lg:mx-5 flex lg:flex-1  flex-col justify-start items-start sm:items-center ">
            <h2 className="tracking-widest my-4  text-lg text-white font-kumbhsans cursor-default">CATEGORIES</h2>
            <ul className="flex flex-col justify-start items-start" >
                {categories.map((categorie, index) =>
                    (index < max_shown) && <li  key={ index }
                                                className="my-1 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400"
                    >
                    {categorie.tag.toLowerCase()}</li>
                )}
            </ul>
        </div>
    )

    const EntriesCard = () => (
        <div className="my-2 sm:mx-8 md:mx-10 lg:mx-5 flex lg:flex-1 flex-col justify-start items-start sm:items-center">
            <h2 className="tracking-widest my-4 text-lg text-white font-kumbhsans cursor-default">ENTRIES</h2>
            <ul className="flex flex-col justify-start items-start">
                {links.map((link, indx) =>
                    <li className="my-1 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400" key={indx}>
                        <Link href={link.path}><a>{link.page.toLowerCase()}</a></Link>
                    </li>
                )}
            </ul>
        </div>
    )

    return (
        <div className="flex justify-center w-full bg-black shadow-2xl">
            <div className="flex flex-col w-10/12">
                <div className="flex justify-center items-center w-full h-auto mt-24 mb-16">
                    <h1 className="text-white font-bold text-2xl font-kumbhsans cursor-default" >
                        <span className="whitespace-no-wrap">MORMADE |</span><br className="md:hidden"/> MOROCCO
                    </h1>
                </div>
                <div className="my-10 flex flex-col lg:flex-row justify-start lg:justify-around items-center w-full h-auto">
                    <div className="mb-5 sm:mb-10 flex flex-1 flex-col sm:flex-row items-start sm:justify-center lg:justify-between  w-full  ">
                        <CategoriesCard />
                        <EntriesCard />
                    </div>
                    <div className="mx-5 mt-5 w-full flex flex-1 sm:justify-center items-center md:w-auto text-gray-500">
                           <LeaveMessage/> 
                    </div>
                </div>
                <div className="flex flex-row justify-end items-center w-full h-16 border-t border-gray-800 text-gray-500">
                    <IconsContainer/>
                </div>
            </div>
        </div>
    )
}