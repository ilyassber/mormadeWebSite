import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { facebook2 , twitter, instagram} from 'react-icons-kit/icomoon'

export default function Footer({categories, max_shown, links}) {


    const IconsContainer = () => (
        <div className="flex flex-row mx-2 text-gray-500 ">
            <a className="mx-4"><Icon size={25} icon={facebook2} /></a>
            <a className="mx-4"><Icon size={25} icon={instagram} /></a>
            <a className="mx-4"><Icon size={25} icon={twitter} /></a>
        </div>
    )

    const CategoriesCard = () => (
        <div className="flex flex-1  flex-col justify-start items-center md:items-start md:pl-10">
            <h2 className="tracking-widest my-4  text-lg text-white font-kumbhsans cursor-default">CATEGORIES</h2>
            <ul className="ml-2 flex flex-col justify-start items-start" >
                {categories.map((categorie, index) =>
                    (index < max_shown) && <li  key={ index }
                                                className="my-2 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400"
                    >
                    {categorie.tag.toLowerCase()}</li>
                )}
            </ul>
        </div>
    )

    const EntriesCard = () => (
        <div className="flex flex-1 flex-col justify-start items-center md:items-start pl-10 ">
            <h2 className="tracking-widest my-4 text-lg text-white font-kumbhsans cursor-default">ENTRIES</h2>
            <ul className="ml-2 flex flex-col justify-start items-start">
                {links.map((link, indx) =>
                    <li className="my-2 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400" key={indx}>
                        <Link href={link.path}><a>{link.page.toLowerCase()}</a></Link>
                    </li>
                )}
            </ul>
        </div>
    )

    return (
        <div className="flex justify-center w-full bg-black shadow-2xl">
            <div className="flex flex-col w-9/12">
                <div className="flex justify-center items-center w-full h-72">
                    <h1 className="text-white font-bold text-2xl font-kumbhsans cursor-default" >
                        <span className="whitespace-no-wrap">MORMADE |</span><br className="md:hidden"/> MOROCCO
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row justify-start md:justify-around items-center w-full h-96">
                    <div className="flex flex-1 flex-row justify-between  w-full md:w-auto">
                        <CategoriesCard />
                        <EntriesCard />
                    </div>
                    <div className="flex flex-1 flex-row justify-center items-center w-full md:w-auto text-gray-500">
                           <p>ilyass stufffs</p> 
                    </div>
                </div>
                <div className="flex flex-row justify-end items-center w-full h-16 border-t border-gray-800 text-gray-500">
                    <IconsContainer/>
                </div>
            </div>
        </div>
    )
}