<template>
  <section class="h-[700px] w-full container  m-auto ">
    <div class="flex w-full h-full">
      <div class="bg-teal-600 relative w-[35%] h-full">
        <img class="absolute inset-0 w-full my-auto ml-28" src="/shop-img/cuddle-chair.png" alt="cuddle-chair">
      </div>
      <div class="bg-slate-800 w-[65%] h-full text-white flex items-center">
        <div class="px-16">

          <h1 class="text-6xl font-bold uppercase font-bricolage">Decore</h1>
          <h3 class="text-6xl font-light font-bricolage">Your Room</h3>
          <hr class="w-32 my-2 border-b-4 border-teal-600" />
          <p>Lorem ipsum dolor sit amet
            consectetur adipisicing
            elit. Harum
            fugit
            laudantium
            neque,
            corrupti vero blanditiis
            fuga consequuntur, delectus amet nesciunt magnam atque quisquam explicabo officia? Fuga, quas earum. Similique
            accusantium voluptate maiores.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="container py-5 mx-auto mb-8">
    <h2 class="text-xl font-bold font-bricolage">
      Kursi Pilihan Untukmu
    </h2>
    <p class="text-sm">*Perbedaan harga mungkin terjadi, harga terbaru tertera pada halaman detail produk</p>
    <!-- <div class="absolute flex items-center justify-between w-full h-full">
        <i class="pi pi-arrow-left"></i>
        <i class="pi pi-arrow-right"></i>
      </div> -->


    <div class="w-full mt-3">
      <CardHeroShopify :items="Chairs" />
    </div>

  </section>
  <section class="container py-5 mx-auto mb-8">
    <h2 class="text-xl font-bold font-bricolage">
      Popular Furniture Untukmu
    </h2>
    <p class="text-sm">*Perbedaan harga mungkin terjadi, harga terbaru tertera pada halaman detail produk</p>
    <!-- <div class="absolute flex items-center justify-between w-full h-full">
        <i class="pi pi-arrow-left"></i>
        <i class="pi pi-arrow-right"></i>
      </div> -->


    <div class="w-full mt-3">
      <CardHeroShopify :items="Chairs" />
    </div>

  </section>
</template>

<script setup lang="ts">
import CardHeroShopify from '@/components/CardHeroShopify.vue'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Chairs } from '@/data/furniture'



</script>

<style scoped>
.swiper {
  @apply w-full
}
</style>
