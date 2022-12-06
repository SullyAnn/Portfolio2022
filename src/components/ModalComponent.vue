<template>
    <div class="modal-container">
  
        <p class="cross"  v-on:click="$emit('closeModal')">X</p>
        <div class="info-container">
            <div class="title-container">
                <developper-mode v-show="Type==='Front'" class="icon"/>
                <design-service v-show="Type==='Design' " class="icon"/>
                <database-fill v-show="Type==='Back'"  class="icon"/>
                <h3>{{Title}}</h3>
            </div>
            <p>{{Text}}</p>
        </div>
    </div>
</template>

<script>
import DevelopperMode from '@/assets/svg/DevelopperMode.vue'
import DesignService from '@/assets/svg/DesignService.vue'
import DatabaseFill from '@/assets/svg/DatabaseFill.vue'
    export default {
        name:"ModalComponent",
        components: { 
            DevelopperMode, 
            DesignService, 
            DatabaseFill },
        props:{
            Title:{
                type: String,
                required: true
            },
            Text: {
                type: String,
                required: true
            },
            Type: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';

.modal-container{
    position: absolute;
    z-index: 2;
    align-self: center;
    width: 600px;
    height: 400px;
    padding: 20px 40px;
    display: flex;
    justify-content: center ;
    flex-direction: column;
    background-color: rgba($color: (white), $alpha: 0.7);
    backdrop-filter: blur(10px);
    border-radius: 25px;
}
.cross{
    align-self: flex-end;
    margin: 0;
}
h3, p{
    color: $dark-blue;
}
h3{
    font-size: 24px;
}
.icon{
    fill: $dark-blue;
}
.title-container{
    display: flex;
    align-items: center;
    gap: 20px;
}

</style>