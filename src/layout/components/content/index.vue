<template>
  
    <router-view v-slot="{ Component, route }">
      <transition  mode="out-in"
      enter-active-class='animate__animated animate__zoomInDown'
      leave-active-class='animate__animated animate__backOutUp'
      >
        <component :is="Component"></component>
      </transition>
    </router-view>

</template>

<script setup>
</script>

<style lang="scss" scoped>

// .fade-enter-active,
// .fade-leave-active {
 
//   transition: all 0.3s linear;
// }

// .fade-enter-from {
// transform: translateX(100%);

// }
// .fade-leave-to {
//   transform: translateX(-100%);
 
// }
</style>