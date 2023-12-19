<template>
  <Sheet v-model:open="open">
    <SheetTrigger class="fixed text-xl right-5 top-2"> <i class="pi pi-shopping-cart"></i>
      <span class="absolute flex justify-center w-4 h-4 text-xs text-white bg-teal-500 rounded-full -right-2 -top-0">{{
        shoppingcart.length }}</span>
    </SheetTrigger>
    <SheetContent class="px-0 overflow-y-scroll">
      <SheetHeader>
        <SheetTitle class="px-6 ">Your Cart?</SheetTitle>
        <SheetDescription class="px-6 ">
          Your Shopping Cart that Ready to Checkout
        </SheetDescription>
      </SheetHeader>
      <div class="px-6 mt-2">
        <div class="text-red-600" v-if="!shoppingcart.length">Shopping cart are empty, you need to add some items.</div>
        <div v-else class="relative flex w-full mb-2 border-b border-b-slate-300 " v-for="cart in shoppingcart"
          :key="cart">
          <img class="w-32 aspect-square" :src="`/shop-img/${cart.image}`" alt="">
          <div class="">
            <p class="font-bold">{{ cart.name }}</p>
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
      <SheetFooter v-if="shoppingcart.length" class="fixed bottom-0 w-1/4 h-20 pt-2 bg-white ">
        <div class="flex ml-6">
          <div class="">
            <p class="text-sm">Total:</p>
            <p class="text-xl font-bold">{{ totalPrice }}</p>
          </div>
          <button
            class="px-4 py-2 ml-28 text-white scale-[.8] rounded-md top-4 font-bricolage hover:bg-slate-900 bg-slate-800">Checkout</button>
        </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { Sheet, SheetTrigger, SheetFooter, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { computed, ref } from 'vue';
import { shoppingcart } from '@/store/shopingcart'

const open = ref(false)

const totalPrice = computed(() => {
  const filterPrice = shoppingcart.value.map(val => val.price * val.quantity)
  if (filterPrice.length) return filterPrice.reduce((a, b) => a + b).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })
})
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

