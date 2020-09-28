import React from 'react'
import { TxtField } from '../../graphics/textFields'
import { BtnBbw } from '../../graphics/buttons'

const MakerRegist = props => {

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
        console.log('********')
        const data = {
            email: email,
            password: password,
        }
        console.log('__________')
        authenticate(data, "login", props.csrf).then((response) => {
            if (response.status === "error") {
                console.log('error')
            }
            else {
                console.log('success')
            }
        })
            .catch((error) => {
                console.log(error)
            })
    }

    let content = (
        <div className={props.className}>
            <div className="relative w-full h-auto overflow-hidden">
                <img className="absolute h-full w-full object-cover" src="/wheel-pot.jpg" />
                <div className="relative w-full h-auto p-6 justify-end">
                    <h3 className="h-auto w-full text-white text-xl text-right align-right mb-6">صانع ؟ إنضم إلينا</h3>
                    <div className="w-full h-auto flex flex-wrap flex-col md:flex-row-reverse items-end">
                        <TxtField align='right' color='white' className="w-full flex-2 mt-2" label="رقم الهاتف" onChange={handleNumChange} />
                        <TxtField align='right' color='white' className="w-full flex-2 mt-2 md:mr-2" label="البريد الإلكتروني" onChange={handleEmailChange} />
                        <div className="w-full h-full flex-1 content-end flex-wrap mt-4 md:mr-2 md:mt-0">
                            <BtnBbw className="w-full h-12" weight="bold" value="إنضم" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default MakerRegist