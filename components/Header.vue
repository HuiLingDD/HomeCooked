<template>
  <nav
    class="bg-[#ffffff] w-full flex items-center justify-between py-[16px] px-[30px] shadow-md"
  >
    <NuxtLink to="/">
      <img src="@/assets/icons/HeaderIcon.svg" alt="" class="h-[50px]" />
    </NuxtLink>

    <!-- Mobile -->
    <div class="block sm:hidden">
      <img
        src="@/assets/icons/MobileMenu.svg"
        alt=""
        class="h-[30px]"
        @click="handleClickMenu"
      />
    </div>
    <!-- Desktop -->
    <div class="hidden sm:flex items-center gap-10">
      <NuxtLink
        v-for="item in menu"
        :key="item.label"
        class="flex items-center gap-[10px] text-[18px] text-[#7F2D08]"
        :to="item.link"
        @click="item.label === '會員登入' && openLoginModal()"
      >
        <img :src="item.img" alt="" class="h-[30px]" />
        {{ item.label }}
      </NuxtLink>
    </div>

    <!-- 會員登入彈窗 -->
    <LoginModal v-if="showLoginModal" @close="showLoginModal = false" />

    <!-- Mobile彈窗 -->
    <div
      v-if="showSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
      @click="handleClickMenu"
    >
      <div class="w-64 bg-white h-full p-6" @click.stop>
        <div
          v-for="item in menu"
          :key="item.label"
          class="flex items-center gap-4 py-4 text-[18px] text-[#7F2D08]"
          @click="handleItemClick(item)"
        >
          <img :src="item.img" alt="" class="h-[30px]" />
          {{ item.label }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import Menu from "@/assets/icons/Menu.svg";
import Cart from "@/assets/icons/Cart.svg";
import User from "@/assets/icons/User.svg";
const menu = [
  {
    label: "特色菜單",
    img: Menu,
    link: "/menus",
  },
  {
    label: "購物車",
    img: Cart,
    link: "/cart",
  },
  {
    label: "會員登入",
    img: User,
    link: "/",
  },
];
// 登入
const showLoginModal = ref(false);
const openLoginModal = () => {
  showLoginModal.value = true;
  showSidebar.value = false;
};
// Mobile點擊選單
const showSidebar = ref(false);
const handleClickMenu = () => {
  showSidebar.value = !showSidebar.value;
};
const handleItemClick = (item: any) => {
  if (item.label === "會員登入") {
    openLoginModal();
  } else {
    showSidebar.value = false;
    if (item.link) {
      navigateTo(item.link);
    }
  }
};
</script>