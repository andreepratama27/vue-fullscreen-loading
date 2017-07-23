import Vue from 'vue'
import FullscreenLoading from './fullscreen-loading.vue'

export default {

  mounted () {
    setTimeout(() => {
      this.isShow = false
    }, 3000)
  },

  data () {
    return {
      isShow: true
    }
  },

  components: {
    FullscreenLoading
  },

  render (h) {
    return (
      <div>
          <fullscreen-loading image="http://placehold.it/300x300" show={ this.isShow }></fullscreen-loading>
      </div>
    )
  }
}
