<template>
  <div>
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000 }"
      :loop="true"
    >
      <SwiperSlide v-for="slide in slides" :key="slide">
        <img :src="slide" class="w-full h-[200px] sm:h-[300px] md:h-[400px]"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Banner1 from "@/assets/images/Banner1.jpg";
import Banner2 from "@/assets/images/Banner2.jpg";
import Banner3 from "@/assets/images/Banner3.jpg";

const modules = [Autoplay, Pagination];
const slides = [Banner1, Banner2, Banner3];
</script>