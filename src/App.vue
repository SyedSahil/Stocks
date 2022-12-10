<template>
  <div>
    <app-header></app-header>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    
  </div>


</template>


<script>
import header from './components/header.vue'
import main from './components/main.vue'

export default {
  components:{
    'appHeader':header,
    'appMain':main
  }
}

</script>

<style scoped>

.fade-enter{
  opacity: 0;
  transform: translateY(100px);
}

.fade-enter-active{
  transition: all .3s;
  
}

.fade-leave{
  opacity: 0;
  

}

.fade-leave-active{
transition: all .3s;
opacity: 1;
transform: translate(0);
}



</style>