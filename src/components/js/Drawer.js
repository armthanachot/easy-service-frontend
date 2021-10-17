/** @format */

export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city', route: '/' },
        { title: 'My Account', icon: 'mdi-account', route: '/about-us' },
        { title: 'Users', icon: 'mdi-account-group-outline', route: '/about-us' },
        { title: 'Logout', icon: 'mdi-login-variant', route: '/logout' }
      ],
      mini: true
    }
  },
  methods: {
    changePage(route) {
      if (route === '/logout') {
        localStorage.removeItem('token')
        this.$router.push('/login')
        return
      }
      this.$router.push(route)
    }
  }
}
