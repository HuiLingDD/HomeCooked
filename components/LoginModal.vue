<template>
  <div
    class="fixed inset-0 z-50 bg-[#00000033] flex justify-center items-center opacity-100 transition-all duration-200 overflow-auto py-[100px]"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
      <div class="flex justify-end">
        <img
          src="@/assets/icons/Close.svg"
          alt=""
          class="cursor-pointer"
          @click="emits('close')"
        />
      </div>
      <div
        class="text-center text-[30px] border-b-[1px] border-b-[#E9ECEF] pb-[10px]"
      >
        會員登入
      </div>

      <div class="my-[30px]">
        <label for="username" class="text-[20px]"> 帳號 </label>
        <input
          class="border rounded w-full py-2 px-3 focus:outline-none focus:border-[#a3a2a2]"
          id="username"
          type="text"
          placeholder="請輸入帳號"
        />
      </div>
      <div class="mb-[30px]">
        <label for="password" class="text-[20px]"> 密碼 </label>
        <input
          class="border rounded w-full py-2 px-3 focus:outline-none focus:border-[#a3a2a2]"
          id="password"
          type="password"
          placeholder="請輸入密碼"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="bg-transparent hover:bg-[#7F2D08] text-[#7F2D08] hover:text-white border border-[#7F2D08] hover:border-transparent py-2 px-4 text-xl rounded"
          @click="emits('close')"
        >
          登入
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const emits = defineEmits(["close"]);
</script>