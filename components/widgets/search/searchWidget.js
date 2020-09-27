import { useEffect, useRef , useState } from 'react'


export default function SearchWidget({style, clickHandler, inputFocus}) {
    
    const [data, setData] = useState("")

    // ref for input
    const formInput = useRef(null)

    // after every render apply input focus if needed 
    useEffect(
        () => {
            if (inputFocus)
                formInput.current.focus()
        },[]
    )

    // traked text
    const writeData = (event) => {
        setData(event.target.value)
    }


    // submit tracked text
    const submitdata = () => {
        setData("")
        clickHandler(data)
        event.preventDefault()
    }

    return (
        <div className={style}>
            <form className="flex justify-center items-center border-gray-800 border-b-2" onSubmit={submitdata}>
                <div className="w-8 h-8 mx-2"></div>
                <input  ref={formInput} className=" h-full w-full trasform transition-all ease-out duration-700 focus:placeholder-gray-500 placeholder-gray-600 text-3xl  text-center outline-none "
                        value={data}
                        onChange={writeData}
                        type="text"
                        placeholder="SEARCH"
                ></input>
                <button className="flex justify-center items-center h-8 w-8 mx-2 overflow-hidden focus:outline-none cursor-pointer">
                    <img className="w-full object-cover object-center" src="icons/loop.svg" />
                </button>
            </form>
        </div>

    )
}