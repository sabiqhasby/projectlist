
<template>
  <div class="absolute w-full h-full -z-40">
    <div
      class="absolute z-10 w-full h-full backdrop-blur-sm bg-gradient-to-t from-sky-800 to-purple-800 mix-blend-multiply">
    </div>
    <img class="z-0 object-cover w-full h-full "
      src="https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="">
  </div>
  <div class="flex w-full h-full ">
    <div v-if="!result"
      class="relative w-1/2 max-w-xl p-5 mx-auto my-auto border rounded-md shadow-md bg-opacity-80 bg-gradient-to-tr from-indigo-700 backdrop-blur-md ">
      <h1 class="flex justify-center mb-5 text-3xl font-bold text-white font-bricolage">Yuk kocok arisan</h1>

      <label class="text-white " for="name">Masukkan Nama:</label>
      <div class="flex gap-1">

        <Input v-model:model-value="name" id="name" type="text" placeholder="Input a name" />
        <Button @click="addToList">
          Add
        </Button>
      </div>

      <p class="flex justify-center mt-5 text-2xl text-red-500">

        {{ alertMassage }}
      </p>
      <div class="mt-2">

        <p v-show="listName.length" class="text-white">Nama yang di input:</p>
        <ul class="flex flex-wrap gap-2 text-white">
          <li class="p-2 rounded-md bg-slate-800" v-for="name in listName" :key="name">{{ name }}</li>

        </ul>
      </div>

      <Button @click="kocokArisan" v-if="listName.length" class="absolute text-white bg-transparent bottom-4 right-4"
        type="button" variant="outline">
        Kocok Sekarang
      </Button>
    </div>




    <div v-else
      class="relative max-w-xl w-1/2 p-5 mx-auto my-auto rounded-md bg-opacity-80 shadow-md bg-gradient-to-tr from-indigo-700 backdrop-blur-md  border h-[500px]">

      <div class="mt-10">

        <h2 class="flex justify-center mb-2 text-3xl text-white font-bricolage">Selamat Kepada</h2>
        <hr />
        <div class="flex items-center justify-center mt-24 mb-24 text-5xl font-bold text-white font-bricolage">
          <span class="text-xl">⭐</span>
          {{ result }}
          <span class="text-xl">⭐</span>
        </div>
        <div class="flex justify-center w-full gap-2 mx-auto right-5 bottom-5">

          <Button @click="acakKembali" class="text-2xl text-white bg-transparent py-7" variant="outline" size="lg">Acak
            Kembali</Button>
          <Button @click="reset" class="text-2xl text-white bg-red-600 py-7" variant="outline" size="lg">Reset
          </Button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ref } from 'vue';



const name = ref('')
const listName = ref<string[]>([])

const result = ref('')
const alertMassage = ref('')

function showAlert(msg: string) {
  alertMassage.value = msg;
  setTimeout(() => {
    alertMassage.value = ""

  }, 4000)
}

function addToList() {
  if (!name.value) return;
  if (listName.value.includes(name.value)) {
    // alertMassage.value = `Nama "${name.value}" sudah ada`
    showAlert(`Nama "${name.value}" sudah ada`)
    return
  };
  listName.value.push(name.value)
  name.value = ''
}

function kocokArisan() {

  if (listName.value.length < 2) {
    showAlert("Masukan nama minimal 2 orang")

    return
  }
  const randomIndex = Math.floor(Math.random() * listName.value.length)
  result.value = listName.value[randomIndex]
  console.log(result.value);

}

function reset() {
  listName.value = []
  result.value = ''
}

function acakKembali() {
  kocokArisan()
}
</script>
