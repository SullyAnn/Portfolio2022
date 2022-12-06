<template>
  <div class="projects-container">
    <h1> PROJETS </h1>
    <div class="projects">
      <CardComponent filename='linkedin.png' Domain="UI DESIGN" Link="/About"/>
      <CardComponent filename='linkedin.png' Domain="UI DESIGN" Link="/About"/>
      <CardComponent filename='linkedin.png' Domain="UI DESIGN" Link="/About"/>
      <CardComponent filename='linkedin.png' Domain="UI DESIGN" Link="/About"/>
    </div>

  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
export default {
    name: "ProjectComponent",
    components:{
        CardComponent,
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';

h1{
  @include title-1();
  text-align: center;
}
.projects{
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: $large-width) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap:40px;
  }
}
.projects-container{
  @media screen and (min-width: $large-width) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}

</style>