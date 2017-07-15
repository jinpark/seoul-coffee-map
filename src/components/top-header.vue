<template>
  <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1" class="geolocate"><geolocate></geolocate></el-menu-item>
    <el-menu-item index="2" class="logo">Coffee Map</el-menu-item>
    <el-menu-item index="3" class="search"><search></search></el-menu-item>
  </el-menu>
</template>


<script>
  import geolocate from './geolocate.vue'
  import search from './search.vue'

  export default {
    name: 'topheader',
    data () {
      return {}
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    components: {
      geolocate,
      search
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

.search {
  float: right;
  max-width: 190px;
  display: none;
}

.logo {
  font-weight: bold;
}

</style>
