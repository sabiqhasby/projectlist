<template>
  <button @click="swipers.slidePrev()" class="swiper-button-prev">
    <i class="pi pi-arrow-circle-left"></i>
  </button>
  <button @click="nextSlide" class="swiper-button-next">
    <i class="pi pi-arrow-circle-right"></i></button>
</template>

<script setup lang="ts">
import { useSwiper } from 'swiper/vue'

const swipers = useSwiper()
function nextSlide() {
  swipers.value.slideNext()
}
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  @apply text-teal-500 text-xl
}

.swiper-button-next::after,
.swiper-button-prev::after {
  content: "";
}
</style>
