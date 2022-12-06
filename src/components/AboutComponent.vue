<template>
  <div class="about-content">
    <h1>Bienvenue !</h1>
    <div class="content mb40">
        <p class="text">Etudiante en dernière année du cycle ingénieur IMAC à l’Université Gustave Eiffel, 
            je suis à la recherche d’un stage de fin d’étude en développement web. 
            Ma formation d’ingénieur pluridisciplinaire me dote d’une grande capacité 
            d’adaptation me permettant de m’accomoder rapidement aux nouvelles technologies 
            que je suis amener à rencontrer 
        </p>
        <div class="social-button">
            <button class="button rounded social"> 
                <a href="https://github.com/SullyAnn?tab=repositories"> 
                    <img src="../assets/images/github.png" alt="github icon" class="logo"> 
                </a>
            </button>
            <button class="button rounded social"> 
                <a href="https://www.linkedin.com/in/sully-ann-sorimoutou-a75a32174/"> 
                    <img src="../assets/images/linkedin.png" alt="linkedin icon" class="logo"> 
                </a>
            </button>
        </div>
    </div>
    <button class="button cta rounded">Consulter mon CV</button>
  </div>
</template>

<script>
export default {
    name: 'AboutComponent',
}
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';

.logo{
    width: 100%;
}
.about-content{
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    box-sizing: border-box;
}
.content{
    display: flex;
    flex-direction: column;
    @media screen and (min-width: $large-width) {
        flex-direction: row-reverse;
        gap: 40px;
        justify-content: flex-end
    }
}
.social-button{
    display: flex;
    flex-direction: row;
     @media screen and (min-width: $large-width) {
        flex-direction: column;
        justify-content: space-around;
    }
}
.cta{
    background-color: #9C8986;
    color: white;
    font-size: 14px;
    font-weight: 700;
    width: fit-content;
    padding: 25px 35px;
    align-self: center;
    @media screen and (min-width: $large-width) {
        align-self: flex-start;
        margin-left: 120px;
        font-size: 24px;
        padding: 40px 50px;
    }
}
.social{
    @media screen and(min-width: $large-width) {
        height: 80px;
        width: 80px;
        padding: 20px;
    }
}
h1{
    @include title-1();
    @media screen and (min-width:$large-width) {
        margin-left: 120px;
    }
}
.text{
    @include body();
    @media screen and (min-width:$large-width) {
        width: 40%;
    }
    
}
.mb40{
    margin-bottom: 40px;
}
</style>