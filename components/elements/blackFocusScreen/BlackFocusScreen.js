
export default function BlackFocusScreen( { onClick } ) {
    return (
        <div
            className="absolute z-20 top-0 left-0 w-full h-full  bg-gray-900 bg-opacity-50"
            onClick={onClick}
        >
        </div>
    )
}