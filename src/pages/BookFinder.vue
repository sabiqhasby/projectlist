<template>
  <div class="container flex flex-col p-4 mx-auto ">
    <div class="w-full my-2 ">
      <h1 class="my-2 text-xl text-center font-bricolage">Book Finder</h1>

      <div class="flex gap-3 pb-2">

        <h2 class="cursor-pointer hover:text-indigo-600"
          :class="activePage === 'search' ? 'underline underline-offset-2 font-bold' : ''" @click="activePage = 'search'">
          Find Book
        </h2> |
        <h2 class="relative cursor-pointer hover:text-indigo-600 "
          :class="activePage === 'favorite' ? 'underline underline-offset-2 font-bold' : ''"
          @click="activePage = 'favorite'">My
          favorite <span
            class="absolute w-4 h-4 text-xs text-center text-white bg-red-500 rounded-full -z-10 -top-0 -end-3">{{
              bookstore.length
            }}</span>
        </h2>
      </div>

      <div v-if="activePage === 'search'" class="relative">
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


    <div class="container mx-auto">

      <BooksCard v-if="activePage === 'search'" :books="books" @handle-likes="handleLikes"
        empty-msg="Search book that you like." />
      <BooksCard v-if="activePage === 'favorite'" :books="bookstore" @handle-likes="handleLikes"
        empty-msg="You dont have your favorite books list yet." />
    </div>
  </div>
</template>

<script setup lang="ts">
import BooksCard from '@/components/BooksCard.vue';
import { bookstore, activePage } from '@/store/bookstore';
import { computed, ref } from 'vue'
const search = ref<string>("");

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





function handleLikes(item: any) {

  const bookfavid = computed(() => {
    return bookstore.value.map(val => val.id)
  })

  if (bookfavid.value.includes(item.id)) {

    // // CARA SATU, Gunakan FOR LOOP
    // for (let i = 0; i < bookstore.favorite.length; i++) {
    //   if (bookstore.favorite[i].id === item.id) {
    //     bookstore.favorite.splice(i, 1);
    //     i--;
    //   }
    // }

    // // Cara DUA, Gunakan Filter
    return bookstore.value = bookstore.value.filter((book) => {
      return book.id !== item.id;
    });

  }

  bookstore.value.push({ ...item })


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

