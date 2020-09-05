import { authenticate } from '../../../services/authentication/authentication'
import { BtnBbw, BtnBtb } from '../../graphics/buttons'
import { TxtField, PwdField } from '../../graphics/textFields'

const SignUp = props => {

    console.log('enter sign up')

    let username;
    let email;
    let password;
    let rePassword;

    const handleUsernameChange = event => {
        username = event.target.value
        console.log(username)
    }

    const handleEmailChange = event => {
        email = event.target.value
    }

    const handlePasswordChange = event => {
        password = event.target.value
    }

    const handleRePasswordChange = event => {
        rePassword = event.target.value
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log('********')
        if (password === rePassword) {
            const data = {
                username: username,
                email: email,
                password: password
            }
            console.log('__________')
            authenticate(data, "signup", props.csrf).then((response) => {
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
    }

    let content = (
        <div className="container mx-auto w-full max-w-lg bg-xw-100">
            <div className="p-12 w-full">
                <h3 className="w-full font-sans font-bold text-xl text-gray-900 text-center mb-2">Sign up</h3>
                <h4 className="w-full font-sans font-medium text-sm text-gray-800 text-center mt-3 mb-10">Welcome dear maker</h4>
                <div className="">
                    <form className="" action="">
                        <TxtField className="mb-3 mt-2" label="Username" onChange={handleUsernameChange}/>
                        <TxtField className="mb-3 mt-2" label="Email" onChange={handleEmailChange}/>
                        <PwdField className="mb-3 mt-2" label="Password" onChange={handlePasswordChange}/>
                        <PwdField className="mb-3 mt-2" label="Retype password" onChange={handleRePasswordChange}/>
                        <BtnBbw className="w-full h-12 mt-8 mb-4" value="SIGN UP" onClick={handleSubmit}/>
                        <BtnBtb className="w-full h-12 mt-8 mb-4" value="BACK TO SIGN IN" onClick={props.switch}/>
                    </form>
                </div>
            </div>
        </div>
    );
    return content;
}

export default SignUp