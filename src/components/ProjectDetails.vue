<template>
    <div class="project-detail-container">
        <Hooper  :itemsToShow="1" :centerMode="true" pagination="yes">
            <slide v-if="Source1" class="slide">
                <img :src="require(`@/assets/images/${Source1}`)" alt="">
            </slide>
            <slide v-if="Source2" class="slide">
                <img :src="require(`@/assets/images/${Source2}`)" alt="">
            </slide>
            <slide v-if="Source3" class="slide">
                <img :src="require(`@/assets/images/${Source3}`)" alt="">

            </slide>
            <slide v-if="Source4" class="slide">
                <img :src="require(`@/assets/images/${Source4}`)" alt="">

            </slide>
            <slide v-if="Source5" class="slide">
                <img :src="require(`@/assets/images/${Source5}`)" alt="">

            </slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </Hooper>
        <div class="project-content">
            <h1>{{Name}}</h1>
            <h2>{{Domain}}</h2>
            <p>{{Text}}</p>

            <button v-responsive.xl class="button rounded social"> 
                <a :href="GitHubLink" class="w100"> 
                    <img src="../assets/images/github.png" alt="github icon" class="logo"> 
                </a>
                <a v-if="DemoLink" :href="DemoLink" class="w100"> 
                    <img src="../assets/images/github.png" alt="Demo icon" class="logo"> 
                </a>
            </button>
        </div>
    </div>
</template>

<script>
import { Hooper, Pagination as HooperPagination, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

    export default {
        name:"ProjectDetails",
        components:{
            Hooper,
            HooperPagination,
            Slide,
        }, 
        props:{
            Name:{
                type:String,
                required: true
            },
            Domain:{
                type:String,
                required: true
            },
            Text:{
                type:String,
                required: true  
            },
            Source1:{
                type: String
            },
            Source2:{
                type: String
            },
            Source3:{
                type: String
            },
            Source4:{
                type: String,
                required: false
            },
            Source5:{
                type: String,
                required: false
            },
            DemoLink:{
                type:String
            },
            GitHubLink: {
                type:String,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';

img{
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: center;
}
.slide{
    width: 100vw;
    height: 100%;
}
.hooper{
    height: 100%;
    @media screen and (min-width: $large-width) {
        width: 500px;
        width: fit-content;
        overflow: hidden;
        height: fit-content;
    }
}
.hooper-pagination{
    transform: translate(50%, -40px);
}

.project-content{
    display: flex;
    flex-direction: column;
    background-color: $background-color;
    transform: translateY(-20px);
    border-radius: 25px 25px 0 0;
    padding: 20px;
}
.project-detail-container{
    @media screen and (min-width: $large-width) {
        display: flex;
        padding: 30px 260px;
        gap: 100px;
        transform: unset;
        background-color: unset;
        border-radius: unset;
        height: 100vh;
        align-items: center;
    }
}
.slide{
    @media screen and (min-width: $large-width) {
        width: 100%;
        height: 100%;
    }
  
}
.w100{
    width: 100%;
}
.button{
    height: 60px;
    width: 60px;
}
</style>