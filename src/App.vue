<template>
  <div id="app" class="bg-[#E6F7FF] ">
  
    <users-location class="flex"/>
  </div>
</template>

<script>
import UsersLocation from './components/usersLocation.vue'

export default {
  name: 'App',
  components: {
    UsersLocation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
