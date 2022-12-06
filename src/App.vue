<template>
  <div id="app">
    <header-component/>

    <div id="content">
        <asbtract-form-small v-responsive.sm.xs class="about-form"/>
        <asbtract-form-small v-responsive.sm.xs class="project-form"/>
        <asbtract-form-small v-responsive.sm.xs class="project-form2"/>

        <abstract-form-contrasted v-responsive.xl class="about-form"/>
        <abstract-form-volume v-responsive.xl class="about-form-volum"/>
      <router-view></router-view>
      <skills-component/>
      <projet-component/>
    </div>
    <project-details 
      Source1="linkedin.png" 
      Source2="linkedin.png" 
      Source3="linkedin.png"
      Name="Projet truc"
      Domain="fullstack devlopment"
      Text="rjreljkrejerjerjkekjke sbfdkleskf zjdlmkspezolrjfs ;djbgrthujkizhqroiajlpmlDKZKEOITHJKSFBHSVT4RD BFKLSKLEDFJNK"
      GitHubLink="link"
      />

    <footer-component/>
  </div>
</template>

<script>
//import AboutComponent from './components/AboutComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SkillsComponent from './components/SkillsComponent.vue'
import AsbtractFormSmall from './assets/svg/Background/AbstractFormSmall.vue'
import ProjetComponent from './components/ProjetComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ProjectDetails from './components/ProjectDetails.vue'
import AbstractFormContrasted from './assets/svg/Background/AbstractFormContrasted.vue'
import AbstractFormVolume from './assets/svg/Background/AbstractFormVolume.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    AsbtractFormSmall,
    SkillsComponent,
    ProjetComponent,
    FooterComponent,
    ProjectDetails,
    AbstractFormContrasted,
    AbstractFormVolume,
  }

}
</script>

<style lang="scss">
@import './styles/style.scss';

html, body{
  font-family: 'Poppins';
  margin: 0;
}
html{
  background-color: #EFE9EB;
}
html,body{
  overflow-x: hidden;
}
#content{
  padding: 20px 30px;
  @media screen and (min-width: $large-width){
    padding: 40px 260px;
  }
}
a{
  text-decoration: none;
}
button{
  border: none;
  background: none;
  @include neumorphism-shadow();
}
#app{
  position: relative;
}
.about-form{
  position: absolute;
  z-index: -1;
  transform: rotate(125deg);
  top: -35px;
  left: -185px;
  @media screen and(min-width:$large-width) {
    transform: rotate(0deg);
    top: 364px;
    right: -304px;
    left: unset;
    transform: rotate(0deg);
  }
}
.about-form-volum{
  position: absolute;
  z-index: -1;
  top: -272px;
  right: -312px;
}

.project-form{
  position: absolute;
  z-index: -1;
  bottom: 650px;
  left: -175px;
}

.project-form2{
  position: absolute;
  z-index: -1;
  bottom: 150px;
  right: -195px;
  transform: rotate(245deg);
}
.hooper-indicator{
  width: 10px;
    height: 10px;
    border-radius: 25px;
    box-shadow: none;
}

</style>
