<template>
  <div id="app">
    <h1>Instagram Location</h1>
      <city></city>
      <gallery></gallery>
  </div>
</template>

<script> 
import City from './components/City.vue'
import Gallery from './components/Gallery.vue'

export default {
  components:{
    'city': City,
    'gallery': Gallery
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script:700');
  h1{
    text-align: center;
    font-family: 'Dancing Script', cursive;
    font-size: 50px;
    margin: 20px;
  }

</style>
