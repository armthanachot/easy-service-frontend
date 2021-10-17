import axios from 'axios'

const execute = async (url, method, token, payload, contentType = 'application/json') => {
  return axios({
    url: url,
    headers: {
      'Content-Type': contentType,
      authorization: token ? `Bearer ${token}` : undefined
    },
    method: method,
    data: payload
  })
}

const axiosGet = async (url, token) => {
  try {
    const { data } = await execute(url, 'GET', token)
    return data
  } catch (error) {
    console.log(error.message)
    return error
  }
}

const axiosPost = async (url, payload, token) => {
  try {
    const { data } = await execute(url, 'POST', token, payload)
    return data
  } catch (error) {
    const { data, status } = error.response
    return data
  }
}

export { axiosGet, axiosPost }
