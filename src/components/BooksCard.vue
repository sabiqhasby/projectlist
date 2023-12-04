<template>
  <div class="grid grid-cols-4 gap-2 font-bricolage">
    <div v-if="!books?.length">{{ emptyMsg }}</div>
    <div v-for="(item, idx) in books" :key="item.id" class="relative rounded-md overflow-clip bg-violet-800">
      <!-- <p class="absolute z-40 text-2xl font-bold text-white">{{ item.id === bookfavid ? 'ya' :
        'tidak' }}
      </p> -->
      <div class="absolute z-10 text-white top-2 start-2">
        <i class="text-yellow-500 pi " :class="item.volumeInfo.averageRating ? 'pi-star-fill' : ''"></i> {{
          item.volumeInfo.averageRating }}
      </div>
      <div @click="handleLikes(item, idx)" class="absolute z-10 cursor-pointer top-2 end-2">
        <i class="text-2xl pi"
          :class="bookfavid.includes(item.id) ? 'pi-heart-fill text-red-500' : 'pi-heart text-white'"></i>
      </div>
      <div class="absolute top-0 w-full h-16 mix-blend-multiply bg-gradient-to-b from-black to-transparent"></div>
      <div class="h-40">
        <!-- {{ item.volumeInfo.imageLinks.thumbnail.substr(4) }} -->
        <img class="object-cover w-full h-full"
          :src="`https://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`"
          alt="cover">
      </div>
      <div class="p-4 text-white h-52">
        <p class="mx-auto font-medium line-clamp-2 ">

          {{ item.volumeInfo.title }}
        </p>
        <div class="flex gap-3 mt-2 text-sm">
          <p class="flex justify-between w-20 font-sans">authors <span>:</span> </p>
          <p v-for="author in item.volumeInfo.authors">{{ author }}</p>
        </div>
        <div class="flex gap-3 text-sm">
          <p class="flex justify-between w-20 font-sans ">published <span>:</span></p>
          <p>{{ item.volumeInfo.publishedDate }}</p>
        </div>
        <div class="flex gap-3 text-sm">
          <p class="flex justify-between w-20 font-sans ">publisher <span>:</span></p>
          <p class="">{{ item.volumeInfo.publisher }}</p>
        </div>
        <div class="absolute bottom-2">
          <p>{{ item.volumeInfo.pageCount }} pages</p>
        </div>
        <a target="_blank" :href="`https://play.google.com/store/books/details/${item.volumeInfo.title}?id=${item.id}`"
          class="absolute text-sm bottom-2 end-2">
          <p>get book >>></p>
        </a>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { bookstore } from '@/store/bookstore'
import { computed } from 'vue'

defineProps({
  books: Object, Array,
  emptyMsg: String
})
const emits = defineEmits(["handleLikes"])

//extract id, masih gagal
const bookfavid = computed(() => {
  return bookstore.value.map(val => val.id)
})




function handleLikes(item: any, idx: string) {
  emits("handleLikes", item, parseInt(idx))
}

</script>