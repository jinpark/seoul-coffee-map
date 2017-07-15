<template>
  <el-button v-on:click="geolocate"><i class="fa fa-lg" :class="{ 'fa-location-arrow': !searching, 'fa-spinner fa-pulse': searching }" aria-hidden="true"></i>
</el-button>
</template>

<script>
import EventBus from '../event-bus'

export default {
  name: 'geolocate',
  data () {
    return {
      searching: false
    }
  },
  methods: {
    geolocate (event) {
      this.searching = true
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            EventBus.$emit('geolocate', position.coords)
            this.searching = false
          }
        )
      } else {
        this.searching = false
        console.log('geolocation failed')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    top: 0;
    position: fixed;
    width: 100%;

}
h2 {
  text-align: center;
  font-weight: normal;
}

</style>
