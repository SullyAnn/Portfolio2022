<template>
    <router-link :to="Link" class="projet-card rounded">
        <img :src="require(`@/assets/images/${filename}`)">
        <div class="project-field rounded">
            <h3>{{Domain}}</h3>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            filename: {
                type: String,
                required: true
            },
            Domain:{
                type: String,
                required: true,
            },
            Link:{
                type:String,
                required: true
            }
        }

        
    }
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';
img{
    @include neumorphism-shadow();
    background-color: unset;
    width:100%;
}
.projet-card{
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 5px;
    @media screen and (min-width: $large-width) {
        width: 45%;
    }
}
.project-field{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    border: 2px solid white;
    margin-top: -60px;
    margin-left: 90px;
    width: 40%;
    @media screen and (min-width:$large-width) {
    padding: 15px 25px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-top: -90px;
    width: fit-content;
    align-self: flex-end;
    }
}
h3{
    margin: 0;
    font-size: 12px;
    color: white;
    @media screen and (min-width: $large-width) {
        font-size: 20px;
    }
}
</style>