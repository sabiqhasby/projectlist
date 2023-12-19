<template>
  <Toaster />
  <button class="fixed text-xl right-5 top-2">
    <i class="pi pi-shopping-cart"></i>
    <span class="absolute flex justify-center w-4 h-4 text-xs text-white bg-teal-500 rounded-full -right-2 -top-0">{{
      shoppingcart.length }}</span>
  </button>
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
      <CardHeroShopify @add-to-cart="addToCart" :items="Chairs" />
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
      <CardHeroShopify @add-to-cart="addToCart" :items="Tables" />
    </div>

  </section>
  <ShoppingCartDrawer />
</template>

<script setup lang="ts">

import CardHeroShopify from '@/components/CardHeroShopify.vue'
import ShoppingCartDrawer from '@/components/ShoppingCartDrawer.vue';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Chairs, Tables } from '@/data/furniture'
import { shoppingcart } from '@/store/shopingcart'
import { useToast } from '@/components/ui/toast/use-toast'
import { Toaster } from '@/components/ui/toast';

const { toast } = useToast()

function addToCart(item: any) {
  // Check if the item already exists in the cart
  const existingItem = shoppingcart.value.find(cartItem => cartItem.id === item.id);

  // If the item does not exist in the cart, add it
  if (!existingItem) {
    shoppingcart.value.push({ ...item, quantity: 1 });
    toast({
      title: item.name,
      description: `Item telah ditambahkan ke keranjang`,

    });
  } else {
    // If the item already exists, increase its quantity
    existingItem.quantity += 1;
  }
}



</script>

<style scoped>
.swiper {
  @apply w-full
}
</style>
