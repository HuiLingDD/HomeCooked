<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-start"
  >
    <div
      class="bg-blue-100 border border-blue-300 px-4 py-3 rounded relative mt-[50px]"
      role="alert"
    >
      <span class="block sm:inline">{{ $props.title }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>