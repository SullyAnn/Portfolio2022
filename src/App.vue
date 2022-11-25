<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import './styles/style.scss';

html, body{
  font-family: 'Poppins';
}
button{
  border: none;
  background: none;
  @include neumorphism-shadow();
}

</style>
