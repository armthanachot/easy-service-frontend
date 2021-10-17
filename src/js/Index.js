import GALLERY_MENU from '../assets/images/menu/photo-gallery.png'
import REVIEW_MENU from '../assets/images/menu/reviews.png'
import RESTAURANT_MENU from '../assets/images/menu/restaurant.png'

export default {
  data() {
    return {
      menu: [
        {
          name: 'Restaurant',
          path: '/restaurant',
          icon: RESTAURANT_MENU
        },
        {
          name: 'Gallery',
          path: '/gallery',
          icon: GALLERY_MENU
        },
        {
          name: 'Review',
          path: '/review',
          icon: REVIEW_MENU
        }
      ]
    }
  },
  methods: {
    async changePage(path) {
      this.$router.push(path)
    }
  }
}
