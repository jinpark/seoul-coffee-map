<template>
  <div class="hello">
    <top-header></top-header>
    <google-map></google-map>
  </div>
</template>

<script>
import TopHeader from './top-header.vue'
import GoogleMap from './google-map.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    TopHeader,
    GoogleMap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
