<template>
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

  <Sheet v-model:open="open">
    <SheetTrigger class="fixed text-xl right-5 top-2"> <i class="pi pi-shopping-cart"></i>
      <span class="absolute flex justify-center w-4 h-4 text-xs text-white bg-teal-500 rounded-full -right-2 -top-0">{{
        shoppingcart.length }}</span>
    </SheetTrigger>
    <SheetContent class="overflow-y-scroll">
      <SheetHeader>
        <SheetTitle>Your Cart?</SheetTitle>
        <SheetDescription>
          Your Shopping Cart that Ready to Checkout
        </SheetDescription>
      </SheetHeader>
      <div class="mt-2">
        <div class="relative flex w-full mb-2 border-b border-slate-700" v-for="cart in shoppingcart" :key="cart">
          <img class="w-32 aspect-square" :src="`/shop-img/${cart.image}`" alt="">
          <div class="">
            <p>{{ cart.name }}</p>
            <p>Price: {{ cart.price.toLocaleString('id-ID', {
              style: 'currency', currency: 'IDR', maximumFractionDigits: 0
            }) }}
            </p>
            <p>quantity: {{ cart.quantity }}</p>

            <div class="absolute right-0 flex gap-1 bottom-1 ">

              <button @click="removeQuantity(cart.id)" class="p-1 px-2 bg-white border rounded-sm shadow-sm"><i
                  class="text-xs pi pi-minus"></i></button>
              <button @click="addQuantity(cart.id)" class="p-1 px-2 bg-white border rounded-sm shadow-sm"><i
                  class="text-xs pi pi-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
      <SheetFooter class="fixed bottom-0">
        <div class="bg-white">
          <p>Total: {{ totalPrice }}</p>
        </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { Sheet, SheetTrigger, SheetFooter, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import CardHeroShopify from '@/components/CardHeroShopify.vue'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Chairs, Tables } from '@/data/furniture'
import { shoppingcart } from '@/store/shopingcart'
import { computed, ref } from 'vue';

const open = ref(true)

const totalPrice = computed(() => {
  const filterPrice = shoppingcart.value.map(val => val.price)
  if (filterPrice.length) return filterPrice.reduce((a, b) => a + b)
})

function addToCart(item: any) {
  shoppingcart.value.push({ ...item, quantity: 1 })
  console.log(shoppingcart.value);

}

function addQuantity(id: string) {
  const item = shoppingcart.value.find(i => i.id === id)
  if (item) item.quantity++

}

function removeQuantity(id: string) {
  const item = shoppingcart.value.find(i => i.id === id)
  if (item) {
    if (item.quantity <= 1) {
      shoppingcart.value = shoppingcart.value.filter(obj => id !== obj.id);
    } else {
      item.quantity--;
    }
  }
}

</script>

<style scoped>
.swiper {
  @apply w-full
}
</style>
