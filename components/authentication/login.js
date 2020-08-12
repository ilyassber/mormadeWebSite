import { authenticate } from '../../services/authentication/authentication'
import { BtnBbw, BtnBtb } from '../graphics/buttons'
import { TxtField, PwdField } from '../graphics/textFields'

const Login = props => {

    console.log('enter login')

    let email;
    let password;

    const handleEmailChange = event => {
        email = event.target.value
    }

    const handlePasswordChange = event => {
        password = event.target.value
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
        <div className="container mx-auto w-full max-w-lg bg-xw-100">
            <div className="p-12 w-full">
                <h3 className="w-full font-sans font-bold text-xl text-gray-900 text-center mb-2">Sign in</h3>
                <h4 className="w-full font-sans font-medium text-sm text-gray-800 text-center mt-3 mb-10">Welcome dear maker</h4>
                <div className="">
                    <form className="" action="">
                        <TxtField className="mb-3 mt-2" label="Email" onChange={handleEmailChange}/>
                        <PwdField className="mb-3 mt-2" label="Password" onChange={handlePasswordChange}/>
                        <BtnBbw className="w-full h-12 mt-8 mb-4" value="SIGN IN" onClick={handleSubmit}/>
                        <BtnBtb className="w-full h-12 mt-8 mb-4" value="REGISTER AS MAKER" onClick={props.switch}/>
                    </form>
                </div>
            </div>
        </div>
    )

    return content;
}

export default Login