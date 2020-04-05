import axios from 'axios'

axios.defaults.baseURL = 'http://api.tvmaze.com'

/* axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}) */

const appService = {
  getShows(category) {
    let url = `/search/shows?q=${category}`

    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => {
          let data = response.data.map(data => data.show)
          return resolve(data);
        })
        .catch(err => reject(err))
    })
  },
  login(credentials) {
    return new Promise((resolve, reject) => {
      if (credentials) {
        resolve({
          token: 'gndsjgdskjgjkdsgjkdsjko232158974fhdsgv9gfg4564g/r%',
          tokenExpiration: new Date().setDate(new Date().getDay() + 1),
          user: {
            name: 'Yeison Rodriguez',
            last_login: new Date().setDate(new Date().getDay() - 10)
          }
        })
      }

      reject({
        error: true,
        message: 'Error in authentication'
      })
    })
  },
  getProfile() {
    return new Promise(resolve => {
      resolve({
        id: 1,
        profile: {
          username: 'name user',
          lastname: 'last name user',
          image_url: null
        }
      })
    })
  }
}

export default appService
