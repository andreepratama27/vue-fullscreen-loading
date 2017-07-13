import Vue from 'vue'
import FullscreenLoading from './fullscreen-loading.vue'

export default {

  data () {
    return {
      isShow: true
    }
  },

  components: {
    LoadingOverlay
  },

  render (h) {
    return (
      <div>
          <fullscreen-loading image="http://placehold.it/300x300" show={ this.isShow }></fullscreen-loading>
      </div>
    )
  }
}
