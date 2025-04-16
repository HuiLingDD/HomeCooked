<template>
  <div class="max-w-[1600px] mx-auto p-[50px]">
    <div class="text-[32px] text-center p-[16px]">購物車</div>
    <div class="border rounded-lg overflow-x-auto">
      <table class="min-w-full table-auto">
        <thead class="bg-[#dedddd]">
          <tr>
            <th class="py-2 px-4 text-left text-[20px] whitespace-nowrap">
              圖片
            </th>
            <th class="py-2 px-4 text-left text-[20px] whitespace-nowrap">
              名稱
            </th>
            <th class="py-2 px-4 text-left text-[20px] whitespace-nowrap">
              單價
            </th>
            <th class="py-2 px-4 text-left text-[20px] whitespace-nowrap">
              數量
            </th>
            <th class="py-2 px-4 text-left text-[20px] whitespace-nowrap">
              小計
            </th>
            <th class="py-2 px-4 text-left text-[20px]"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b"
            v-for="item in cartStore.getCartList"
            :key="item.id"
          >
            <td class="py-2 px-4 min-w-[160px]">
              <img
                :src="item.img"
                alt="商品圖片"
                class="object-cover rounded-md w-[80px] h-[80px] md:w-[150px] md:h-[150px]"
              />
            </td>
            <td class="py-2 px-4 text-xl font-bold whitespace-nowrap">
              {{ item.title }}
            </td>
            <td class="py-2 px-4 text-xl font-bold whitespace-nowrap">
              {{ item.price }}
            </td>
            <td class="py-2 px-4 text-xl">
              <input
                v-model="item.amount"
                class="w-[100px] border rounded py-2 px-3 focus:outline-none focus:border-[#a3a2a2]"
                type="number"
              />
            </td>
            <td class="py-2 px-4 text-xl font-bold whitespace-nowrap">
              {{ item.price * item.amount }}
            </td>
            <td class="py-2 px-4 whitespace-nowrap">
              <button
                @click="handleDelCart(item.id)"
                class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-end text-[30px] gap-[20px] px-[10px] mt-4">
      <p>總額</p>
      <p>NT$ {{ totalAmount }}</p>
    </div>
    <div class="flex justify-end pt-[20px]">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full"
      >
        結帳
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
// 計算總額
const totalAmount = computed(() => {
  return cartStore.getCartList.reduce((sum: number, item: any) => {
    return sum + item.price * item.amount;
  }, 0);
});
// 刪除購物車
const handleDelCart = (id: number) => {
  cartStore.removeCartItem(id);
};
</script>