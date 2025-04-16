<template>
  <div class="bg-white py-[16px] px-[32px]">
    <div class="text-[32px] text-center">料理理念</div>
    <!-- Desktop -->
    <div class="hidden sm:flex flex-wrap justify-center">
      <div v-for="item in themeData" :key="item.content"  class="flex items-center flex-col p-[16px] flex-[0_1_300px]">
        <img :src="item.img" alt="" class="rounded-[50%] transition-all duration-100 ease-in border border-transparent hover:border-2 hover:opacity-75"/>
        <p class="mt-[10px]">{{ item.content }}</p>
      </div>
    </div>
    <!-- Mobile -->
    <div class="sm:hidden">
      <Swiper :modules="modules" :slides-per-view="1" :pagination="{ clickable: true }" :autoplay="false" :loop="true">
        <SwiperSlide v-for="item in themeData" :key="item.content">
          <div class="flex flex-col items-center p-[16px]">
            <img :src="item.img" alt="" class="rounded-[50%] transition-all duration-100 ease-in border border-transparent hover:border-2 hover:opacity-75"/>
            <p class="mt-[10px]">{{ item.content }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CookingPhilosophy1 from "@/assets/images/CookingPhilosophy_1.jpg";
import CookingPhilosophy2 from "@/assets/images/CookingPhilosophy_2.jpg";
import CookingPhilosophy3 from "@/assets/images/CookingPhilosophy_3.jpg";
import CookingPhilosophy4 from "@/assets/images/CookingPhilosophy_4.jpg";
const modules = [Autoplay, Pagination];
const themeData = [
  {
    content: "享受動手做料理的樂趣",
    img: CookingPhilosophy1,
  },
  {
    content: "堅持使用健康、新鮮的食材",
    img: CookingPhilosophy2,
  },
  {
    content: "從各種料理中獲得靈感",
    img: CookingPhilosophy3,
  },
  {
    content: "手作料理帶來家的溫暖",
    img: CookingPhilosophy4,
  },
];
</script>