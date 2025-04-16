<template>
  <div>
    <div class="flex flex-wrap  justify-center items-center py-[16px] px-[100px]">
      <p class="text-[32px] flex-grow text-center">特色菜單</p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        新增菜單
      </button>
    </div>
    <div class="flex flex-wrap justify-center">
      <div
        v-for="item in menuData"
        :key="item.title"
        class="flex items-center flex-col p-[16px] flex-[0_1_300px]"
      >
        <img
          :src="item.img"
          alt=""
          class="transition-all duration-100 ease-in border border-transparent hover:border-2 hover:opacity-75 cursor-pointer"
          @click="handleToDetail(item.id)"
        />
        <p class="mt-[10px]">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { menuData } from "@/data/menuData";
const handleToDetail = (id: number) => {
  navigateTo({ path: "/menuDetail", query: { id: id } });
};
</script>