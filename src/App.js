import Vue from 'vue'
import LoadingOverlay from './loading-overlay.vue'

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
          <loading-overlay image="http://placehold.it/300x300" show={ this.isShow }></loading-overlay>
      </div>
    )
  }
}
