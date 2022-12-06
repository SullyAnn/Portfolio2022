<template>
  <header class="flex">
    <h1 class="name">Sully-Ann Sorimoutou</h1>
    <button v-responsive.sm.xs v-on:click="openMenu()" class="neumorphism-shadow button rounded  ">
        <MenuFill/>
    </button>
    <nav v-responsive.md.lg.xl class="navigation">
      <router-link to="/">A propos</router-link>
      <router-link to="Skills">Compétences</router-link>
      <router-link to="Projects">Projets</router-link>
      <router-link to="Contact">Contact</router-link>
    </nav>

    <MenuComponent v-show="isMenuOpen" @closeMenu="() => isMenuOpen=false"/>
    

  </header>
</template>

<script>
import MenuFill from '../assets/svg/MenuFill.vue'
import MenuComponent from './MenuComponent.vue'

export default {
    name: "HeaderComponent",
    components: {
        MenuFill,
        MenuComponent
    }, 
    data(){
      return{
        isMenuOpen: false
      }
    },
    methods: {
      openMenu(){
        return this.isMenuOpen = true;
      }
    }

}
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';

    .name, .navigation{
      color: $dark-blue;
      font-size: 12px;
      @media screen and (min-width: $medium-width){
        font-size: 16px;
      }
    }
    .flex{
      display: flex;
      justify-content: space-between;
      position: fixed;
      width: 100%;
      padding: 20px 40px;
      box-sizing: border-box;
    }
    .navigation{
      display: flex;
      align-items: center;
      gap: 60px;
    }
</style>