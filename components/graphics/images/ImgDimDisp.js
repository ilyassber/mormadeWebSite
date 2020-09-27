const ImgDimDisp = props => {

    let content = (
        <div className={props.className}>
            <div className={'relative w-full bg-gray-300 pb-' + props.dim}>
                <img className="absolute w-full h-full object-cover" src={props.src} />
            </div>
        </div>
    )

    return content
}

export default ImgDimDisp