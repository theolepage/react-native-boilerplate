export default class API {

    base_url = 'http://10.0.2.2:8000'
    client_secret = 'bNkNqvFrAf2C5z7e10OEeWsHgOaxxrTj5mlN4jti'
    token = null

    setToken(token) {
        this.token = token
    }

    async get(url = '') {
        return fetch(this.base_url + url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
          })
          .then(response => response.json())
          .then(data => {
                return data
            })
          .catch(error => {
              console.log('loooooool')
                throw error
            })
    }

    async post(url = '', body = {}) {
        return fetch(this.base_url + url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then(data => {
                return data
            })
          .catch(error => {
                throw error
            })
    }

}