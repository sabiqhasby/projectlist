<template>
  <Swiper :simulate-touch="false" :modules="[Navigation]" :space-between="20" :slides-per-view="4.5">
    <SwiperSlide v-for="item in items" :key="item.id">
      <button @click="addToCart(item)" class="add-to-cart">
        <i class="pi pi-shopping-cart"></i>
      </button>
      <div @click="open = !open, showProduct(item)" class="px-4 py-2 pb-4 bg-white rounded-md shadow-md">



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

  <Sheet v-model:open="open">
    <SheetContent side="center">
      <SheetHeader>
        <SheetTitle hidden>{{ product.name }}</SheetTitle>
        <SheetDescription hidden>product</SheetDescription>
      </SheetHeader>

      <div class="flex h-full bg-background">
        <div class="w-[700px] ">
          <div class="w-full h-[600px]">
            <img class="object-contain w-full h-full" src="/shop-img/Chairs/237221_1.webp" alt="1">
          </div>

          <div class="grid p-5 w-full grid-flow-col grid-cols-4 gap-6 h-[150px]">
            <div class="flex items-center justify-center text-white border">
              <img class="object-contain w-full h-full" src="/shop-img/Chairs/237221_1.webp" alt="1">
            </div>
            <div class="flex items-center justify-center text-white border "><img class="object-contain w-full h-full"
                src="/shop-img/Chairs/10108184_1.webp" alt="2"></div>
            <div class="flex items-center justify-center text-white border "><img class="object-contain w-full h-full"
                src="/shop-img/Chairs/10489647_1.webp" alt="3"></div>
            <div class="flex items-center justify-center text-white border "><img class="object-contain w-full h-full"
                src="/shop-img/Chairs/10135645_1.webp" alt="4"></div>
          </div>
        </div>
        <div class="p-5">
          <h2 class="text-2xl font-semibold font-bricolage">{{ product.name }}</h2>
          <h3 class="text-2xl text-yellow-500">{{ product.price.toLocaleString("id-ID", {
            style: "currency", currency: 'IDR',
            maximumFractionDigits: 0
          }) }}</h3>

          <div class="absolute inline-flex gap-5 bottom-32">

            <button class="w-10 bg-slate-300">
              +
            </button>
            {{ product.quantity }}
            <button class="w-10 bg-slate-300">
              -
            </button>

            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue'
import { shoppingcart } from '@/store/shopingcart';
import NavSwiper from '@/components/NavSwiper.vue';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';


defineProps<{
  items?: any[]
}>()

const emits = defineEmits(["addToCart"])

const open = ref(false)
const product = reactive({
  name: "",
  price: 0,
  image: "",
  quantity: 1,

});

function showProduct(item: any) {
  product.name = item.name;
  product.price = item.price;
  product.image = item.image;
  const existingItem = shoppingcart.value.find(cartItem => cartItem.id === item.id);
  console.log(existingItem)
  product.quantity = existingItem ? existingItem.quantity : 1
}

function addToCart(item: any) {
  emits("addToCart", item)
}

</script>


<style scoped>
.add-to-cart {
  @apply text-xl relative float-right z-30 transition-transform -translate-x-4 translate-y-2;
}

.add-to-cart:hover {
  @apply text-white
}


.add-to-cart:hover::after {
  @apply text-xs text-white absolute -left-[75px] px-1 inset-0 pr-8 flex -z-40 rounded-sm bg-teal-600 justify-center items-center float-left w-[100px] h-[25px] content-['add_to_cart']
}
</style>
