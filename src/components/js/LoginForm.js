/** @format */

import { API_URL } from '../../../constants/app'
import { axiosPost } from '../../../utils/axios'

export default {
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    async Login() {
      localStorage.setItem('token', 'ABC')
      const success = await axiosPost(`${API_URL}/login`, { email: this.username, password: this.password })
      console.log(success)
      this.$router.push('/')
    }
  }
}
