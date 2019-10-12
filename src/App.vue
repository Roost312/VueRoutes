<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <app-header></app-header>
          <hr>
          <transition name="flip" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from './components/header.vue'

export default {
  components: {
    appHeader: header
  }
}
</script>

<style>
.flip-leave-active {
  transition: opacity .5s ease;
  opacity: 0;
  animation: flip-out .5s ease-out forwards;
}

.flip-leave {
  opacity: 1;
  transform: translateX(0);
}

@keyframes flip-out {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(90deg);
  }
}
</style>
