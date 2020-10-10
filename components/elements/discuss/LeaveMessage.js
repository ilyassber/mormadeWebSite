import react, { useState } from 'react'
import { Btn } from '../../graphics/buttons'
import { TxtArea, TxtField } from '../../graphics/textFields'
import Cookies from 'js-cookie'
import { postRequest } from '../../../services/api/post/postRequest'
import querystring from 'querystring'

const LeaveMessage = props => {

    const [emailError, setEmailError] = useState(false)
    const [welcome, setWelcome] = useState('LEAVE US A MESSAGE')
    const [reset, setReset] = useState(false)

    let email;
    let message;

    const handleEmailChange = event => {
        email = event.target.value
    }

    const handleMessageChange = event => {
        message = event.target.value
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (email != null && email != '') {
            let data = {
                email: email,
                text: message
            }
            let content = {
                operation: 'register',
                data: querystring.stringify(data)
            }
            postRequest(querystring.stringify(content), Cookies.get('csrftoken'), process.env.domain + '/api/messages/')
            .then((response) => {
                console.log(response)
                if (response.status === "error") {
                    setWelcome('Something Wrong!')
                    console.log('error')
                }
                else {
                    setWelcome('THANK YOU!')
                    setReset(true)
                    console.log('success')
                }
            })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            if (email == null || email == '') {
                setEmailError(true)
            }
        }
    }

    let content = (
        <div className={props.className} >
            <div className="w-full h-full flex flex-col items-left">
                <strong className=" md:whitespace-no-wrap font-roboto font-black text-3xl text-white mb-4">
                    {welcome}
                </strong>
                <div>
                    <TxtField
                        reset={reset}
                        disabled={reset}
                        error={emailError}
                        borderColor='white'
                        textColor='white'
                        focusColor='white'
                        bgColor='transparent'
                        disableColor='gray-900'
                        height={10}
                        placeholder='EMAIL'
                        placeholderColor='white'
                        className="w-full max-w-64 mt-2"
                        onChange={handleEmailChange}
                    />
                    <TxtArea
                        reset={reset}
                        disabled={reset}
                        borderColor='white'
                        textColor='white'
                        focusColor='white'
                        bgColor='transparent'
                        disableColor='gray-900'
                        height='full'
                        placeholder='Message...'
                        placeholderColor='white'
                        onChange={handleMessageChange}
                        className="w-full max-w-64 mt-2"
                    />
                    <div className="w-full h-auto flex flex-row-reverse">
                        <Btn
                            disabled={reset}
                            className='w-full h-auto'
                            borderColor='white'
                            bgColor='transparent'
                            textColor='white'
                            textSize='sm'
                            textWeight='medium'
                            hoverColor='gray-900'
                            disableColor='gray-900'
                            height={10}
                            value='Send'
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default LeaveMessage