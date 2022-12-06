<template>
  <div class="skills-contener mb40">
    <h1>COMPETENCES</h1>
    <AccordionComponent v-responsive.sm.xs>
        <accordion-item class="accordion-container">
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <developper-mode/>
            <h3> Développement front-end</h3>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template slot="accordion-content">
            <span>Je me sens particulièrement à l’aise avec les langages et principes du développement front-end. Ainsi, je suis en mesure de travailler avec ses différents outils : HTML 5, CSS Javascript, Typescript, en ce qui concerne les langages et Vue.js, Nuxt.js, React.js et Next.js pour les frameworks.  C’est à travers divers projets et expériences professionnelles que j’ai pu mettre en pratique mon savoir faire et développer mes compétences </span>
          </template>
        </accordion-item>

        <accordion-item class="accordion-container">
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <database-fill/>
            <h3> Développement back-end </h3>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template slot="accordion-content">
            <span>J’ai également appris au cours de mon cursus à comprendre et gérer l’aspect technique d’un site web. En effet je suis en mesure de faire usage du PHP et du SQL pour communiquer avec les serveurs et les base de données. Cependant j’ai une préférence pour les technologies plus récentes telles que Node.js et Express. Aussi je suis actuellement en train d’apprendre à utiliser Firebase et Firestore. Enfin je suis en mesure d’utiliser Docker et de gérer une architecture en conteneurs</span>
          </template>
        </accordion-item>

        <accordion-item class="accordion-container">
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <design-service/>
            <h3> UI / UX Design</h3>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template slot="accordion-content">
            <span>Issue d’une formation artistique j’ai appris à former mon oeil et à développer un regard critique quant à mes réalisations. De plus, j’ai appris à utiliser des outils me permettant de réaliser moi même les maquettes des sites web que je réalise. En effet je suis notamment à l’aise avec Figma et Adobe XD pour le web design. Par ailleurs j’utilise également Illustrator et Procreate pour réaliser les illustrations que j’utilise sur les sites web que je conçois. </span>
          </template>
        </accordion-item>
      </AccordionComponent>
 
      <div class="skills-button-container " v-responsive.xl>
        <div class="button-container round">
          <button class="button round" @click="showModal(FrontEnd)">
            <developper-mode class="icon"/>
            <h3> Front-end</h3>
          </button>
        </div>

        <div class="button-container round">
          <button class="button round" @click="showModal(BackEnd)">
            <database-fill class="icon"/>
            <h3> Back-end</h3>
          </button>
        </div>

        <div class="button-container round" @click="showModal(Design)">
          <button class="button round">
            <design-service class="icon"/>
            <h3> UI / UX Design </h3>
          </button>
        </div>

      </div>
      <modal-component v-show="isModalOpen"  @closeModal="() => isModalOpen=false" :Title="Current.title" :Text="Current.text" :Type="Current.type"/>

  </div>
</template>

<script>
  import AccordionComponent from "./AccordionComponent.vue";
  import AccordionItem from "./AccordionItem.vue";
  import DevelopperMode from "../assets/svg/DevelopperMode.vue";
  import DatabaseFill from '@/assets/svg/DatabaseFill.vue';
  import DesignService from '@/assets/svg/DesignService.vue';
import ModalComponent from './ModalComponent.vue';

  export default {
    name:'SkillsComponent',
    components: {
      AccordionComponent,
      AccordionItem,
      DevelopperMode,
      DatabaseFill,
      DesignService,
        ModalComponent,
    }, 
    data(){
      return{
        FrontEnd: {
          title: "Développement Front-End",
          text: "Je me sens particulièrement à l’aise avec les langages et principes du développement front-end. Ainsi, je suis en mesure de travailler avec ses différents outils : HTML 5, CSS Javascript, Typescript, en ce qui concerne les langages et Vue.js, Nuxt.js, React.js et Next.js pour les frameworks.  C’est à travers divers projets et expériences professionnelles que j’ai pu mettre en pratique mon savoir faire et développer mes compétences",
          type: 'Front'
        },
        BackEnd: {
          title: "Développement Back-End",
          text: "J’ai également appris au cours de mon cursus à comprendre et gérer l’aspect technique d’un site web. En effet je suis en mesure de faire usage du PHP et du SQL pour communiquer avec les serveurs et les base de données. Cependant j’ai une préférence pour les technologies plus récentes telles que Node.js et Express. Aussi je suis actuellement en train d’apprendre à utiliser Firebase et Firestore. Enfin je suis en mesure d’utiliser Docker et de gérer une architecture en conteneurs",
          type: 'Back'
        },
        Design: {
          title: "Ui / Ux Design",
          text: "Issue d’une formation artistique j’ai appris à former mon oeil et à développer un regard critique quant à mes réalisations. De plus, j’ai appris à utiliser des outils me permettant de réaliser moi même les maquettes des sites web que je réalise. En effet je suis notamment à l’aise avec Figma et Adobe XD pour le web design. Par ailleurs j’utilise également Illustrator et Procreate pour réaliser les illustrations que j’utilise sur les sites web que je conçois.",
          type: 'Design'
        }, 
        Current : {
          title: "",
          text: "",
          type:''
        },
        isModalOpen: false,
      }
    }, 
    methods: {
      showModal(argument){
        if(this.isModalOpen===false){
          this.isModalOpen = true;
          this.Current.title = argument.title;
          this.Current.text = argument.text;
          this.Current.type = argument.type;

        } else {
          this.Current.title = argument.title;
          this.Current.text = argument.text;
          this.Current.type = argument.type;

        } 
      },
    }

  }
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';

  h1{
    text-align: center;
    @include title-1();
  }
  .accordion-container{
    @include neumorphism-shadow();
    border-radius: 25px;
  }
  h3{
    font-size: 12px;
    font-weight: bold;
    color: $highlight-brown;
    @media screen and (min-width: $large-width) {
      font-size: 24px;
      margin: 0;
    }
  }
  span{
    @include body();
    hyphens: auto;
  }
  .skills-contener{
    display: flex;
    flex-direction: column;
    @media screen and (min-width:$large-width) {
      height: 100vh;
      justify-content: center;
      gap: 40px;
    }
  }
  .mb40{
    margin-bottom: 40px;
}
.skills-button-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around
}
.button-container{
  @include selected-neumorphism-shadow();
  padding: 20px;
}
.icon{
  height: 80px;
  width: 80px;
}
.button{
  height: 240px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.round{
  border-radius: 150px;
}

</style>