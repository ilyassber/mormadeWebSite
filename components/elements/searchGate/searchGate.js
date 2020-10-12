import { useState, useRef } from 'react'
import AlphaDisplayer from '../alpha-displayer/AlphaDisplayer'
import SearchWidget from '../../widgets/search/searchWidget'
import { Icon } from 'react-icons-kit'
import { close } from 'react-icons-kit/ikons/close'

// history widget : used inside the history component 
function NewHistoryItem({ title, deleteOneHistory }) {
    const text = useRef(null)

    return (
        <div className="flex flex-row items-center justify-start">
            {/* <div className="cursor-pointer mx-2" onClick={() => deleteOneHistory(text.current.textContent)}>
                <Icon className="text-gray-400 hover:text-gray-600" icon={close}></Icon>
            </div> */}
            <p ref={text} className=" text-md ">{title}</p>
        </div>
    )
}


export default function SearchGate({ changeOpenSearch , searchData, setSearchData }) {

    const [data, setData] = useState({...searchData, ...{inputFocus : true}})  // searchGate data --> check searchData state in "layout.js"


// STATE CALLBACKS


    // turn search input focus OFF
    const InputFocusOff = () => {
        setData({...data, inputFocus : false })
    }

    // submit new target to search for + add to search history + turn off input focus
    const changeSearchTarget = (searchTarget) => {
        if (searchTarget !== "") {
            setData({...data, searchTarget : searchTarget})
            addSearchHistoryItem(searchTarget)
            InputFocusOff()
        }
    }

    // track text on search input  "not used for now" 
    const updateTrackInputText = (trackedInputText) => {
        if (trackedInputText !== "")
            setData({...data, searchTrackedInputText : trackedInputText})
    }

    // add item to search history
   const addSearchHistoryItem = (historyItem) => {
        if (historyItem !== "")
        {
            let newSearchHistory = data.searchHistory
            newSearchHistory.push(historyItem)
            setData({...data, searchHistory : newSearchHistory})    
        }
    }

    // delete item from search history
    const deleteSearchHistoryItem = (historyItem) => {
        let newSearchHistory = []
        data.searchHistory.forEach(item => {
            if (item !== historyItem)
                newSearchHistory.push(item)
        });
        setData({...data, searchHistory : newSearchHistory})
    }

    // clear search history
    const clearSearchHistory = () => {
        setData({...data, searchHistory : [] })
    }

    // saves search data and exit -> updates searchData state in "layout.js" 
    const UpdateAndExit = () => {
        setSearchData(data)
        changeOpenSearch()
    }


// UTILITIES

    // close icon
    const CloseIcon = () => (
        <Icon className="cursor-pointer text-gray-600 hover:text-gray-700"
            onClick={UpdateAndExit}
            size={40} icon={close}>
        </Icon>
    )

    // history search component
    const  RecentSearchCard = ( { style , maxResultNumber} ) => (
        <div className={ style }>
            <h2 className="font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap">Recent Search</h2>
            <ul className="w-full flex flex-col justify-start">
                {data.searchHistory.map((item, indx) => (
                    indx < maxResultNumber && <li key={indx} className="cursor-pointer whitespace-no-wrap text-md hover:underline">
                        <NewHistoryItem title={item}
                                        deleteOneHistory={deleteSearchHistoryItem}
                        />
                    </li>
                ))}
            </ul>
            {( data.searchHistory.length > 0 ) &&   <label  className=" text-sm text-gray-600 hover:text-gray-900 whitespace-no-wrap cursor-pointer my-2"
                                                        onClick={clearSearchHistory}
                                                >
                                                Delete History</label>
            }        </div>
    )

    const  AnnouceCard = ({ style, cardTitle, titleLinks}) => (
        <div className={style}>

            <h2 className="font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap">{cardTitle}</h2>
            
            <ul className="flex flex-col justify-start">
                {titleLinks.map((title, indx) => (
                    <li key={indx} className="cursor-pointer whitespace-no-wrap text-md hover:underline text-justify">
                        {title}
                    </li>
                ))}
            </ul>
        
        </div>
    )

    // left part
    const LeftContentCard = ( { style } ) => (
        <div className={ style }> 

            <RecentSearchCard style="w-full flex flex-col items-start cursor-default" maxResultNumber={8}/>

            <AnnouceCard    style="w-full flex flex-col items-start mt-8 cursor-default"
                            cardTitle="Products"
                            titleLinks={["Leatest products", "Best selling products", "Season products"]}
            />
            <AnnouceCard    style="w-full flex flex-col items-start mt-8 cursor-default"
                            cardTitle="Stories"
                            titleLinks={["every stitch.. stitched with love", "braid from atlas mountains", "desert music"]}
            />

        </div>
    )

    // default content displayed in case there is no word to search for  
    const DefaultContentCard = () => (
        <div className="flex flex-col md:flex-row justify-start items-start mt-16 w-full  animate-smouthAppearance">
            <LeftContentCard style="animate-smouthAppearance  flex flex-col justify-center w-4/12 px-4 " />
            <div className="flex flex-row justify-start w-full md:w-8/12 h-full ">
                <div className="flex flex-col justify-start items-start w-2/12">

                </div>
                <div className="flex flex-col justify-start items-start md:w-10/12">
                <AlphaDisplayer image="images/Articles/cover-04.jpg"
                                title="The Lovely Place"
                                description="have u ever been in a place where .. ."
                                buttonText=""
                                clickAction={() => console.log(" SHIT CLICKED ")} />

                </div>
            </div>
        </div>
    )

    // content displayed to show search result
    const ResultContentCard = () => (
        <div className="flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start mt-16 w-full h-180 ">
            {/* <SuggestionsCard/> */}
            <div className="flex justify-center w-8/12 h-full ">
                <div className="w-5/12">
                    <AlphaDisplayer title=""
                    description=""
                    buttonText=""
                    image="images/Articles/cover-5.jpg"/>
                </div>
            </div>
        </div>
    )

    // the entire default search displayed
    const DefaultBody = () => (
        <div className="flex flex-col items-center justify-start w-9/12 bg-white">
            <SearchWidget style="w-full h-12 mt-4"
                clickHandler={changeSearchTarget}
                inputFocus={data.inputFocus}
            />
            {/* <SearchFilter /> */}
            <DefaultContentCard />
            <DefaultContentCard />
            <DefaultContentCard />

        </div>
    )

    // the entire search result displayed
    const ResultBody = () => (
        <div className="flex flex-col items-center justify-start w-10/12 bg-white">
            <SearchWidget style="w-full h-12 my-0 bg-white "
                clickHandler={submitInputText}
                inputFocus={data.inputFocus}
            />
            <ResultContentCard/>
        </div>
    )


// CONPONENTS

    // upper bar : contains exit button
    const TopBar = () => (
        <div className="flex justify-end w-full p-5 ">
            <CloseIcon />
        </div>
    )

    // search body : switch between search and default mode
    const MainBody = () => (
     
        <DefaultBody />
        // <SearchResultBody/>
    )


// RENDER THAT SHIT

    return (
        <div className={`animate-menuSlideDown absolute top-0 z-50 w-full flex flex-col items-center justify-start bg-white h-full overscroll-contain overflow-scroll`}>

            <TopBar />
            <MainBody />

        </div>)
}