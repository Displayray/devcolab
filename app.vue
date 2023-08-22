<template>
  <NuxtPage />
</template>

<script setup>
useHead({
  title: 'DevCoLab',
  meta: [
    //{ name: 'google-signin-client_id', content: '784237138080-k1t7mcq82vddtnlnp37uegvfc6bshu3l.apps.googleusercontent.com' }
  ]
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all .7s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  /*filter: blur(1rem);*/
}

.layout-enter-active,
.layout-leave-active {
  transition: all .7s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>