const PwdField = props => {

    let shadow = 'border'

    if (props.shadow == true) {
        shadow = 'shadow'
    }

    let content = (
        <div className={props.className}>
            <label className="block mb-1 font-sans font-medium">{props.label}</label>
            <input
                className={'appearance-none ' + shadow + ' w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black'}
                type="password"
                onChange={props.onChange}
            />
        </div>
    )

    return content
}

export default PwdField