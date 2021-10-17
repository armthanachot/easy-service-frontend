import { axiosPost } from '../../utils/axios'
import { API_URL } from '../../constants/app'
import { ROLES } from '../../constants/user'

export default {
  data() {
    return {
      account_info: {
        email: null,
        fullName: null,
        userName: null,
        password: null,
        confirmPassword: null,
        userRole: null
      },
      alert: {
        display: false,
        type: 'error',
        content: ''
      },
      roles: Object.values(ROLES)
    }
  },
  methods: {
    async signup() {
      if (this.account_info.password !== this.account_info.confirmPassword) {
        this.alert.display = true
        this.alert.content = 'password and confirm password not equal'
        return
      }
      const data = await axiosPost(`${API_URL}/signup`, this.account_info, null)
      if (data.code === 200) {
        alert('OK')
        this.$router.push('/login')
      } else {
        this.alert.display = true
        this.alert.content = data.message
        return
      }
    }
  }
}
