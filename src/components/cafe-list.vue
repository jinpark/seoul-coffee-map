<template>
  <el-card class="box-card">
    <div slot="header" class="header clearfix" @click='openDialog(index)'>
      <span class='name'>{{cafe.name}}</span>
      <span style="float: right;">{{ cafe.distance || '???' }} Km</span>
    </div>
    <div class="text item">
      {{cafe.description}}
    </div>
  </el-card>
</template>


<script>
  import EventBus from '../event-bus'

  export default {
    name: 'cafe-list',
    props: {cafe: Object,
      currentPosition: {
        type: Object,
        default: function () {
          return {}
        }
      },
      index: Number
    },
    data () {
      return { }
    },
    methods: {
      openDialog (index) {
        EventBus.$emit('openDialog', index)
      }
    },
    computed: {
      // distance () {
      //   var lat1 = this.cafe.position.lat
      //   var lon1 = this.cafe.position.lng
      //   var lat2 = this.currentPosition.lat
      //   var lon2 = this.currentPosition.lng
      //   console.log([lat1, lon1, lat2, lon2])
      //   if ([lat1, lon1, lat2, lon2].some(function (val) { return val === undefined })) {
      //     return '???'
      //   }
      //   var radlat1 = Math.PI * lat1 / 180
      //   var radlat2 = Math.PI * lat2 / 180
      //   var theta = lon1 - lon2
      //   var radtheta = Math.PI * theta / 180
      //   var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
      //   dist = Math.acos(dist)
      //   dist = dist * 180 / Math.PI
      //   dist = dist * 60 * 1.1515
      //   return (dist * 1.609344).toFixed(2)
      // }
    },
    components: { },
    mounted () { }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

.header {
  cursor: pointer;
}

.name {
  font-size: larger;
  display: inline-block;
  max-width: 75%;
}

.text.item {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}



</style>

