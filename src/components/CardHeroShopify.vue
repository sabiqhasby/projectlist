<template>
  <Swiper :simulate-touch="false" :modules="[Navigation]" :space-between="20" :slides-per-view="4.5">
    <SwiperSlide v-for="item in items" :key="item.id">
      <div class="px-4 py-2 pb-4 bg-white rounded-md shadow-md">

        <img class="object-contain w-full h-40" :src="`/shop-img/${item.image}`" :alt="item.image">
        <h3 class="h-12 font-medium font-bricolage">{{ item.name }}</h3>
        <p class="font-bold">{{ item.price.toLocaleString("id-ID", {
          style: "currency", currency: 'IDR',
          maximumFractionDigits: 0
        }) }}</p>
        <div class="flex gap-1 mt-2 text-xs">
          <i class="text-yellow-500 pi pi-star-fill"></i>
          {{ item.star }} | {{ `${item.testimoni} Ulasan` }}
        </div>
      </div>
    </SwiperSlide>
    <NavSwiper />
  </Swiper>
</template>


<script setup lang="ts">
import NavSwiper from '@/components/NavSwiper.vue';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps<{
  items?: any[]
}>()

</script>

<style scoped></style>