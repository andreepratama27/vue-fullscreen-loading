import Vue from 'vue'
import FullscreenLoading from '../src/fullscreen-loading.vue'

describe('Vue fullscreen loading', () => {

  it('Mounted perfectly', () => {

    const Component = Vue.extend(FullscreenLoading)
    const comp = new Component({
      propsData: {
        image: 'http://placehold.it/300x300',
        show: true
      }
    }).$mount()

    expect(comp).toBeTruthy()

  })

  it('Must have props', () => {
    expect(FullscreenLoading.props).toBeTruthy()
  })

})
