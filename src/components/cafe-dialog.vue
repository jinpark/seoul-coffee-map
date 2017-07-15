<template>
  <el-dialog
    :title="cafe.name"
    :visible.sync="dialogVisible"
    size="large">
    <img :src="cafe.photo">
    <p>{{cafe.description}}</p>
    <p>{{cafe.address}}</p>
    <a :href="cafe.website" target="_blank">Link</a>
  </el-dialog>
</template>


<script>

  export default {
    name: 'cafe-dialog',
    props: ['cafe'],
    data () {
      return {
        dialogVisible: false
      }
    },
    methods: {
      viewDialog () {
        this.dialogVisible = true
      }
    },
    components: { },
    mounted () { }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

  img {
    max-width: 100%;
    max-height: 50vh;
  }

</style>

