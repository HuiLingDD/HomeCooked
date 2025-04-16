<template>
  <div v-if="menuItem" class="flex flex-wrap px-[80px] py-[50px] gap-10">
    <img :src="menuItem.img" alt="" class="w-[600px]" />
    <div class="flex-grow">
      <h2
        class="text-[30px] font-bold border-b-[1px] border-b-[#7F2D08] pb-[10px]"
      >
        {{ menuItem.title }}
      </h2>
      <p class="text-[20px] pt-[20px] pb-[100px]">{{ menuItem.content }}</p>
      <button
        @click="handleAddCart(menuItem)"
        class="bg-[#7F2D08] hover:opacity-75 text-white py-2 px-4 text-xl rounded-full"
      >
        加入購物車
      </button>
    </div>
    <Alert v-if="showAlert" title="已成功加入至購物車！" />
  </div>
</template>
<script lang="ts" setup>
import { menuData } from "@/data/menuData";
import { useCartStore } from "@/stores/cart";
const showAlert = ref(false);
const route = useRoute();
const menuId = Number(route.query.id);
const menuItem = menuData.find((item) => item.id === menuId);
const cartStore = useCartStore();
// 加入購物車
const handleAddCart = (menuData: any) => {
  cartStore.createCartData(menuData);
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
};
</script>