export default {
  name: 'UtilMixin',
  methods: {
    distance (currentPosition, cafePosition) {
      var lat1 = cafePosition.lat
      var lon1 = cafePosition.lng
      var lat2 = currentPosition.lat
      var lon2 = currentPosition.lng
      // console.log([lat1, lon1, lat2, lon2])
      if ([lat1, lon1, lat2, lon2].some(function (val) { return val === undefined })) {
        return '???'
      }
      var radlat1 = Math.PI * lat1 / 180
      var radlat2 = Math.PI * lat2 / 180
      var theta = lon1 - lon2
      var radtheta = Math.PI * theta / 180
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
      dist = Math.acos(dist)
      dist = dist * 180 / Math.PI
      dist = dist * 60 * 1.1515
      return (dist * 1.609344).toFixed(2)
    }
  }
}
