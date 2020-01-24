import axios from 'axios'
import qs from 'qs'

export const login = (username, password) => {
  const data = qs.stringify({
    username,
    password
  })

  return axios.request({
    url: 'http://192.168.0.47:4000/api/user/login/',
    data,
    method: 'post',
    contentType: ''
  })
}

export const Register = (username, password, passwordAgain, Vcode) => {
  const data = qs.stringify({
    username,
    password,
    passwordAgain,
    Vcode
  })

  return axios.request({
    url: 'http://192.168.0.47:4000/api/user/register/',
    data,
    method: 'post',
    contentType: ''
  })
}
