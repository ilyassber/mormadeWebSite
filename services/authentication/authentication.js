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
        axios.post('http://localhost:8000/users/', querystring.stringify(content), axiosConfig)
            .then((response) => {
                console.log(response)
                //window.open('/users')
                if (operation == 'logout') {
                    window.location = '/'
                } else {
                    window.location = '/maker'
                }
                //resolve(response.data)
            })
            .catch((error) => {
                console.log(error)
                //reject(error)
            })
    })
}