<template>
  <div  class="navigation-mobile">
    <button class="button right rounded" v-on:click="$emit('closeMenu')">x</button>

    <nav class="center content">
      <div class="nav-btn" >
          <PersonFill/>
          <a href="">A propos</a>
      </div>
      <div class="nav-btn">
          <PsychologyFill/>
          <a href="">Compétences</a>
      </div>
      <div class="nav-btn">
          <DescriptionFill/>
          <a href="">Projetcs</a>
      </div>
      <div class="nav-btn">
          <SendFill class="send"/>
          <a href="">Contact</a>
      </div>
    </nav>
  </div>
</template>

<script>
import PersonFill from '../assets/svg/PersonFill.vue'
import PsychologyFill from '../assets/svg/PsychologyFill.vue'
import DescriptionFill from '../assets/svg/DescriptionFill.vue'
import SendFill from '../assets/svg/SendFill.vue'

export default {
    name: "MenuComponent",
    components: {
      PersonFill,
      PsychologyFill, 
      DescriptionFill,
      SendFill,
    }, 
}
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';
.send{
  fill: $second-brown;
}
.navigation-mobile{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 2;
  background: #EFE9EB;
  margin: 0;
  top: 0;
  left: 0;
}
.right{
  margin-right: 20px;
  margin-top: 20px;
  align-self: end;
}
.center{
  align-self: center;
}
.content{
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
}
.nav-btn{
  display: flex;
  flex-direction: column;
  align-items: center;
}
a{
  color: $second-brown
}


</style>