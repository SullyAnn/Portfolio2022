<template>
    <footer>
        <div class="social-button">
            <button class="button rounded"> 
                <a class="mail" href="`mailto: sori.sully@gmail.com`"> 
                    <send-fill class="send"/>
                </a>
            </button>
            <button class="button rounded"> 
                <a class="linked" href="https://www.linkedin.com/in/sully-ann-sorimoutou-a75a32174/"> 
                    <img src="../assets/images/linkedin.png" alt="linkedin icon" class="logo"> 
                </a>
            </button>
        </div>
        <h3>Sully-Ann Sorimoutou - Portfolio 2022 </h3>

    </footer>
</template>

<script>
import SendFill from '@/assets/svg/SendFill.vue';
    export default {
        name:"FooterComponent",
        components:{
            SendFill,
        }
    }
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';

footer{
    display: flex;
    flex-direction: column;
    background-color: $dark-blue;
    align-items: center;
    padding: 15px 10px;
}
button{
    background-color: $dark-blue;
    @include dark-neumorphism-shadow();
}
.logo{
    width: 100%;
}
.social-button{
    justify-content: center;
    display: flex;
    gap: 20px;
}
.send{
    fill: white
}
.mail{
    height: 80%;
}
h3{
    font-size: 12px;
    color: white;
    font-weight: 400;
}
.linked{
    height: 60%;
}
</style>