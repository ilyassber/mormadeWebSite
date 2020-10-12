import axios from 'axios'
import querystring from 'querystring'

export function authenticate(data, operation, csrttoken) {
    return new Promise((resolve, reject) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrttoken
            }
        }
        let content = {
            operation: operation,
            data: querystring.stringify(data)
        }
        axios.defaults.withCredentials = true
        axios.post(process.env.domain + '/api/users/', querystring.stringify(content), axiosConfig)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('_user', JSON.stringify(response.data))
                //window.open('/users')
                if (operation == 'logout') {
                    localStorage.setItem('_user', null)
                    window.location = '/'
                } else {
                    window.location = '/'
                }
                //resolve(response.data)
            })
            .catch((error) => {
                console.log(error)
                //reject(error)
            })
    })
}