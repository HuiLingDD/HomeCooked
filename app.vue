<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
useHead({
  title: '小賢飯食館',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ]
});
</script>