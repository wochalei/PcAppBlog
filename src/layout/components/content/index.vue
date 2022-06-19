<template>
    <router-view v-slot="{ Component, route }">
    <transition>
      <component :is=" Component"></component>
    </transition>
    </router-view>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>