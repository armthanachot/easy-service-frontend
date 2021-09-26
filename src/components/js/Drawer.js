/** @format */

export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city', route: '/' },
        { title: 'My Account', icon: 'mdi-account', route: '/about' },
        { title: 'Users', icon: 'mdi-account-group-outline', route: '/about' }
      ],
      mini: true
    }
  },
  methods: {
    changePage(route) {
      this.$router.push(route)
    }
  }
}
