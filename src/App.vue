<script>
import {RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomeView from './views/HomeView.vue'
export default{
  components:{
    Header,
    Footer,
    HomeView,
  }
}
</script>

<template>
  <Header/>
  <RouterView />
  <Footer/>
</template>

<style scoped>
</style>
