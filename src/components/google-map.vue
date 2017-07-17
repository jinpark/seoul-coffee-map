<template>
  <div class='map-container'>
    <gmap-map
      :center='center'
      :zoom='12'
    >
      <gmap-marker
        :key='index'
        v-for='(marker, index) in markers'
        :position='marker.position'
        :clickable='true'
        icon='./static/cafe-icon3.png'
        @click='openDialog(index)'
      ></gmap-marker>
      <gmap-marker
        v-if='Object.keys(currentPosition).length !== 0'
        :position='currentPosition'
        icon='./static/currentlocation.png'
      ></gmap-marker>
    </gmap-map>
    <cafe-dialog 
      :key='index'
      v-for='(cafe, index) in markers' 
      :cafe=cafe
      ref='dialog-index'
      >
    </cafe-dialog>
    <cafe-list 
      :key='index'
      :currentPosition='currentPosition'
      v-for='(cafe, index) in markers' 
      :cafe=cafe
      :index=index
      ref='cafe-list-index'
      class="cafe-list"
      >
    </cafe-list>
  </div>
</template>


<script>

  import backand from '@backand/vanilla-sdk'
  import CafeDialog from './cafe-dialog.vue'
  import CafeList from './cafe-list.vue'
  import UtilMixin from './util-mixin'
  import EventBus from '../event-bus'

  export default {
    name: 'GoogleMap',
    data () {
      return {
        // center is gangnam
        center: {lat: 37.506293, lng: 127.019357},
        markers: [],
        currentPosition: {}
      }
    },
    mixins: [UtilMixin],
    beforeRouteEnter (to, from, next) {
      backand.object.getList('Cafe', {
        'pageSize': 50,
        'pageNumber': 1,
        'filter': [],
        'sort': []
      })
      .then(data => {
        this.markers = data.data.map(function (cafe) {
          return {position: { lat: cafe.geo[0], lng: cafe.geo[1] },
            name: cafe.name,
            address: cafe.address,
            description: cafe.description,
            website: cafe.website,
            photo: cafe.photo
          }
        })
        next()
      })
    },
    beforeRouteUpdate (to, from, next) {
      this.marker = this.markers.find((marker) => {
        return marker.name === to.params.cafeName
      })
      this.openDialog(this.markers.indexOf(this.marker))
    },
    methods: {
      fetchCafes () {
        if (this.markers.length === 0) {
          backand.object.getList('Cafe', {
            'pageSize': 50,
            'pageNumber': 1,
            'filter': [],
            'sort': []
          })
          .then(data => {
            this.markers = data.data.map(function (cafe) {
              return {position: { lat: cafe.geo[0], lng: cafe.geo[1] },
                name: cafe.name,
                address: cafe.address,
                description: cafe.description,
                website: cafe.website,
                photo: cafe.photo,
                distance: null
              }
            })
          })
          .catch(error => { console.log([error, 'error']) })
        }
      },
      openDialog (index) {
        this.center = this.markers[index].position
        this.$refs['dialog-index'][index].viewDialog()
      }
    },
    components: { CafeDialog, CafeList },
    mounted () {
      this.fetchCafes()
    },
    created () {
      EventBus.$on('geolocate', (coords) => {
        this.currentPosition = {lat: coords.latitude, lng: coords.longitude}
        this.center = {lat: coords.latitude, lng: coords.longitude}
        console.log(this.markers)
        this.markers = this.markers.map((marker) => {
          marker.distance = this.distance(this.currentPosition, marker.position)
          return marker
        })
        this.markers = this.markers.sort((marker1, marker2) => { return Number(marker1.distance) > Number(marker2.distance) })
      })
      EventBus.$on('openDialog', (index) => {
        this.center = this.markers[index].position
        this.$refs['dialog-index'][index].viewDialog()
      })
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .vue-map-container {
    width: 100vw;
    height: calc(50vh - 60px);
  }
  
  .cafe-list {

  }

  .cafe-list:nth-child(2n) {
    background-color: #8492A6;
    color: white;
  }

</style>

