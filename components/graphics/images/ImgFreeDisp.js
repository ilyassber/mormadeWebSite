const ImgFreeDisp = props => {

    let content = (
        <div className={props.className}>
            <div className="w-full h-auto">
                <img src={props.src} />
            </div>
        </div>
    )

    return content
}

export default ImgFreeDisp