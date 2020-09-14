import Cover from '../../graphics/imageCover/Cover'
import Text from '../../graphics/textDisplayer/Text'

const images = {
    cover1: "images/Articles/cover-1.jpg",
    cover2: "images/Articles/cover-2.jpg",
    cover3: "images/Articles/cover-3.jpg",
    cover4: "images/Articles/cover-4.jpg",
    cover5: "images/Articles/cover-5.jpg",
    cover6: "images/Articles/cover-6.jpg",
    cover7: "images/Articles/cover-7.jpg",
    cover8: "images/Articles/cover-8.jpg",
    cover9: "images/Articles/cover-9.jpg",
}

function StorieCard({height, width, style}) {
    return (
        <div className={`${style} flex flex-row justify-center ${width} ${height} bg-red-100`}>
            <Cover image={images.cover7} height={height} style={`flex justify-center items-center w-full ${height} rounded-sm overflow-hidden shadow-xl `} imageStyle="transform hover:scale-105 translate-all ease-out duration-700">
                <div className="absolute flex justify-center items-start right-8 w-96 h-108 shadow-inner bg-white bg-opacity-100 transform hover:scale-105 transition ease-out duration-700">
                    <Text text="stories" style="h-24 w-64 font-abrilfatface text-bold text-7xl text-gray-900 opacity-75" />
                    <Text> </Text>
                </div>
            </Cover>
        </div>
    )
}

export default function StoriesEntry() {


    return (
        <div className="relative flex justify-center items-center w-full h-192 ">
            {/* <div className="absolute top-0"> */}
                <StorieCard height="h-144" width="w-10/12" style="absolute z-40 shadow-xl" />

            {/* </div> */}
            {/* <StorieCard height="h-120" width="w-7/12" /> */}

        </div>
        // <div className="flex flex-row justify-center w-full h-144 bg-red-100">
        //     <Cover image={images.cover7} height="h-144" style="flex justify-center items-center w-9/12 h-144 rounded-sm overflow-hidden shadow-xl">
        //         <div className="absolute flex justify-center items-start right-8 w-96 h-108  shadow-inner bg-white bg-opacity-100 transform hover:scale-110 transition ease-out duration-500">
        //             <Text text="stories" style="h-24 w-64 font-abrilfatface text-bold text-7xl text-gray-900 opacity-75" />
        //             <Text> </Text>
        //         </div>
        //     </Cover>
        // </div>
    )
}