const ImgFreeDisp = props => {

    let content = (
        <div className={props.className}>
            <div className="relative w-full h-auto">
                <img src={props.src} alt={props.alt} />
                {(props.displayAlt)
                    ? (<p className="absolute bottom-0 right-0 font-lato font-regular text-xs text-white bg-gray-900 bg-opacity-50 px-2">
                        {props.alt}
                    </p>)
                    : null}
            </div>
        </div>
    )

    return content
}

export default ImgFreeDisp