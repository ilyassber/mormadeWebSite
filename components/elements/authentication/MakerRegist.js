import React, { useState } from 'react'
import { TxtField } from '../../graphics/textFields'
import { BtnBbw } from '../../graphics/buttons'
import { registerUser } from '../../../services/authentication/registerUser'

const MakerRegist = props => {

    const [emailError, setEmailError] = useState(false)
    const [numError, setNumError] = useState(false)
    const [welcome, setWelcome] = useState('صانع ؟ إنضم إلينا')
    const [reset, setReset] = useState(false)

    let email;
    let num;

    const handleEmailChange = event => {
        email = event.target.value
    }

    const handleNumChange = event => {
        num = event.target.value
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (email != null && email != '' && num != null && num != '') {
            const data = {
                username: email.split('@')[0],
                email: email,
                phone: num,
                is_maker: true
            }
            registerUser(data, "signup_maker", props.csrf).then((response) => {
                if (response.status === "error") {
                    setWelcome('لقد تعذر تسجيل هذا البريد الإلكتروني!')
                    console.log('error')
                }
                else {
                    setWelcome('شكرا، سنقوم بالتواصل معك قريبا')
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
            <div className="relative w-full h-auto overflow-hidden">
                <img className="absolute h-full w-full object-cover" src="/wheel-pot.jpg" />
                <div className="relative w-full h-auto p-6 justify-end">
                    <h3 className="h-auto w-full font-roboto font-bold text-white text-2xl text-right align-right mb-6">
                        {welcome}
                    </h3>
                    <div className="w-full h-auto flex flex-wrap flex-col md:flex-row-reverse items-end">
                        <TxtField
                            reset={reset}
                            error={numError}
                            align='right'
                            color='white'
                            className="w-full flex-2 mt-2"
                            label="رقم الهاتف"
                            placeholder='xxxxxxxxxx'
                            height={10}
                            onChange={handleNumChange} />
                        <TxtField
                            reset={reset}
                            error={emailError}
                            align='right'
                            color='white'
                            className="w-full flex-2 mt-2 md:mr-2"
                            label="البريد الإلكتروني"
                            placeholder='example@email.com'
                            height={10}
                            onChange={handleEmailChange} />
                        <div className="w-full h-full flex-1 content-end flex-wrap mt-4 md:mr-2 md:mt-0">
                            <BtnBbw className="w-full h-10" weight="bold" value="إنضم" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default MakerRegist