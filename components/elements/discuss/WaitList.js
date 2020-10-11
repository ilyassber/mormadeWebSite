import React, { useState } from 'react'
import { TxtField } from '../../graphics/textFields'
import { BtnBbw } from '../../graphics/buttons'
import { registerUser } from '../../../services/authentication/registerUser'

const WaitList = props => {

    const [emailError, setEmailError] = useState(false)
    const [welcome, setWelcome] = useState('JOIN OUR NEWSLETTER')
    const [reset, setReset] = useState(false)

    let email;

    const handleEmailChange = event => {
        email = event.target.value
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (email != null && email != '') {
            const data = {
                username: email.split('@')[0],
                email: email,
                role: 'wait_list'
            }
            registerUser(data, "wait_list", props.csrf).then((response) => {
                if (response.status === "error") {
                    setWelcome('Go Back Soon!')
                    console.log('error')
                }
                else {
                    setWelcome('THANK YOU, GO BACK SOON!')
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
            if (num == null || num == '') {
                setNumError(true)
            }
        }
    }

    let content = (
        <div className={props.className}>
            <div className="relative max-w-screen-sm h-auto overflow-hidden">
                <img className="absolute h-full w-full object-cover" src="/street-vendor-b.jpg" />
                <div className="relative w-full h-auto p-6 justify-end text-white">
                    <h3 className="h-auto w-full font-roboto font-bold text-3xl text-left align-left mb-6">
                        SOON
                    </h3>
                    <h3 className="h-auto w-full font-bold text-3xl text-right align-right mb-6">
                        {'قريبا'}
                    </h3>
                    <span className="h-auto w-full font-roboto font-light text-base text-center align-center mb-6">
                        {welcome}
                    </span>
                    <div className="w-full h-auto flex flex-wrap flex-col items-center mt-2">
                        <TxtField
                            reset={reset}
                            error={emailError}
                            color='white'
                            textColor='black'
                            bgColor='white'
                            borderColor="gray-500"
                            focusColor="gray-500"
                            height={10}
                            placeholder='ENTER YOUR EMAIL HERE'
                            className="w-full max-w-64 mt-2"
                            onChange={handleEmailChange} />
                        <div className="w-full h-full flex-1 content-end flex-wrap mt-4">
                            <BtnBbw className="w-full h-10" weight="bold" value="JOIN US" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default WaitList