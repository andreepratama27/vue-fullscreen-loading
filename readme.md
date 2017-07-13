[![Coverage Status](https://coveralls.io/repos/github/andreepratama27/vue-fullscreen-loading/badge.svg?branch=master)](https://coveralls.io/github/andreepratama27/vue-fullscreen-loading?branch=master)

# Vue Fullscreen Loading

A simple vue component for implements Fullscreen loading.

# Install

You can use [vue-fullscreen-loading](#) vue-fullscreen-loading.vue an insert into your html
or
You can install via npm

```
npm install vue-fullscreen-loading
```

# Usage

```javascript
<template>
    <div>
        <fullscreen-loading
            image="your_image_asset.png"
            :show="isShow">
        </fullscreen-loading
    </div>
</template>

<script>
    import FullscreenLoading from 'fullscreen-loading'
    export default {
        components: {
            FullscreenLoading
        },

        data () {
            return {
                isShow: true
            }
        }
    }
</script>
```

# Props

###### image (String)

add your image and add to this props

###### show (Boolean)

Enable this component on / off by value that pass to the props


