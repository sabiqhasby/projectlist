<template>
  <div class="container flex flex-col p-4 mx-auto ">
    <div class="w-full my-2 ">
      <h1 class="my-2 text-xl text-center font-bricolage">Book Finder</h1>

      <div class="flex gap-3 pb-2">

        <h2 class="cursor-pointer" :class="findBookPage ? 'underline underline-offset-2' : ''"
          @click="findBookPage = true">Find Book</h2> |
        <h2 class="cursor-pointer" :class="!findBookPage ? 'underline underline-offset-2' : ''"
          @click="findBookPage = false">My favorite
        </h2>
      </div>

      <div v-if="findBookPage" class="relative">
        <div class="absolute inset-y-0 flex items-center start-2">
          <i class="pi pi-search text-slate-600"></i>
        </div>
        <input v-model="search" @keydown.enter="handleFetchBooks"
          class="w-full p-2 rounded-md shadow-sm outline-none ps-8" placeholder="Type your book to find" type="text"
          name="search" />

        <button @click="handleFetchBooks"
          class="absolute inset-y-0 flex items-center px-2 text-xs text-white bg-blue-600 rounded-r-md hover:bg-blue-700 end-0 ">
          search
        </button>
      </div>
    </div>


  </div>
  <div class="container px-4 mx-auto">

    <BooksCard v-if="findBookPage" :books="books" @handle-likes="handleLikes" empty-msg="Search book that you like." />
    <BooksCard v-if="!findBookPage" :books="bookstore.favorite" @handle-likes="handleLikes"
      empty-msg="You dont have your favorite books list yet." />
  </div>
</template>

<script setup lang="ts">
// import { useStorage } from '@vueuse/core'
import BooksCard from '@/components/BooksCard.vue';
import { bookstore } from '@/store/bookstore';
// import BookFinderFav from '@/components/BookFinderFav.vue';
import { ref } from 'vue'
const search = ref<string>("");
// const myFavBooks = ref<any[]>([])

const findBookPage = ref<boolean>(true)
// const GApi = import.meta.env.VITE_API_GAPI
let books = ref<any[]>([])
// onMounted(async () => {
//   const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=harry+potter`, { method: "GET" });
//   const data = await response.json()
//   books.value = data.items
//   console.log(data);
// })


// const checkLike = computed(()=>{
//   if()
// })

// const state = useStorage('my-fav', myFavBooks.value)
// console.log(state.value);



function handleLikes(item: any, idx: number) {
  bookstore.favorite.push({ ...item })

  // const checkIDFav = computed(() => {
  //   if (books.value.filter(val => val.id) === myFavBooks.value.filter(val => val.id)) {
  //     return true
  //   }
  //   return false
  // })

  console.log(bookstore.favorite);



  // const checkSameID = computed(() => {
  //   if (checkIDFav.includes(item.id)) {
  //     return true
  //   }
  //   return false
  // })



  const findIdx = books.value.findIndex(val => val.id === item.id)
  console.log(findIdx);

  //CARI CARA LAIN SELAIN MENNGUNAKAN INDEX, 
  // CARI MENGGUNAKAN BERDASARKAN MEMBANDINGKAN ID DARI ARRAY BOOKS DENGAN FAVORITE BOOKS

  // if (!checkSameID.value) {

  //   // books.value[findIdx].likes = !item.likes
  //   myFavBooks.value.push({ ...item, likes: true })
  // }
  // else {
  //   // books.value[findIdx].likes = !item.likes
  //   myFavBooks.value.splice(idx, 1)
  // }





}
async function handleFetchBooks() {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search.value}`, { method: "GET" });
    const data = await response.json()
    books.value = data.items
    search.value = ""

  } catch (err) {
    console.error(err);
  }


}
</script>

