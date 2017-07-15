<template>
  <el-input
    placeholder="Search"
    icon="search"
    v-model="input2"
    :on-icon-click="handleIconClick">
  </el-input>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      input2: ''
    }
  },
  methods: {
    handleIconClick (ev) {
      console.log(ev)
    }
  }
}
</script>
