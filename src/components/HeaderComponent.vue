<template>
  <header>
    <h1 class="name">Sully-Ann Sorimoutou</h1>
    <button v-responsive.sm.xs class="neumorphism-shadow rounded flex">
        <MenuFill/>
    </button>
    

  </header>
</template>

<script>
import MenuFill from '../assets/svg/MenuFill.vue'
export default {
    name: "HeaderComponent",
    components: {
        MenuFill,
    }

}
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';

    .name{
      @include body();
    }
    .flex{
      display: flex;
      align-items: center;
      justify-content: center;
    }
</style>