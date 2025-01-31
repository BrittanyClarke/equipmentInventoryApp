<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <EquipmentInventory msg="Welcome to Your Vue.js App"/>
<router-view></router-view>
</template>

<script>
import EquipmentInventory from './components/EquipmentInventory.vue'

export default {
  name: 'App',
  components: {
    EquipmentInventory
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
