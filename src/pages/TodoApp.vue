<script setup lang="ts">
import { ref } from 'vue';

const taskRef = ref("")
const myTask = ref<string[]>([])
const myDoneTask = ref<string[]>([])

function handleAddTask() {
  if (!taskRef.value) {
    return
  }
  myTask.value.push(taskRef.value)
  taskRef.value = ""
}
function handleDoneTask(idx: number, item: string) {
  myTask.value.splice(idx, 1)

  //ADD to done task
  myDoneTask.value.push(item)
}
function handleDeleteDoneTask(idx: number) {
  myDoneTask.value.splice(idx, 1);
}
</script>

<template>
  <div class="flex h-screen">
    <div class="pb-2 m-auto rounded-md shadow-md w-72 bg-slate-300">

      <h1 class="p-4 pb-0 mx-auto text-xl font-bold text-center ">TODO App</h1>
      <div class="flex items-center gap-1 p-4 pt-2">

        <input v-model="taskRef" @keydown.enter="handleAddTask"
          class="p-2 focus:ring-1 focus:outline-none ring-blue-700 rounded-md border w-[80%] shadow-md" type="text"
          placeholder="add your new task" />
        <button @click="handleAddTask" class="p-2 hover:bg-blue-700 rounded-md bg-blue-600 w-[20%] shadow-md"> <i
            class="text-white pi pi-plus" style="font-size: .8rem; font-weight: bold;"></i></button>
      </div>

      <hr />
      <h3 class="px-4 mt-2 font-semibold">My Task</h3>
      <TransitionGroup name="items">
        <div v-if="myTask.length > 0" class="px-4" v-for="(item, idx) in myTask" :key="item">
          <div class="flex items-center justify-between w-full h-full m-1 rounded-md overflow-clip group bg-slate-200">
            <span class="p-2">{{ item }}</span>

            <button @click="handleDoneTask(idx, item)"
              class="p-2 transition ease-in-out translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:block hover:bg-slate-900 bg-slate-700">

              <i class="text-red-500 pi pi-check" style="font-size: .8rem; font-weight: bold;"></i>
            </button>
          </div>
        </div>

      </TransitionGroup>
      <Transition name="items-fade">
        <p v-show="!myTask.length" class="px-4 text-slate-500">You don't have any task</p>
      </Transition>


      <h3 class="px-4 my-2 font-semibold">
        <i class="pi pi-check" style="font-size: .6rem; font-weight: bold;"></i>
        Finished Task
      </h3>

      <div class="relative flex flex-wrap items-center gap-2 px-4 text-white">
        <TransitionGroup name="items">
          <div v-for="(done, idx) in myDoneTask" :key="done"
            class="p-1 px-2 text-sm rounded-sm shadow-sm group bg-slate-900 hover:bg-slate-800">

            {{
              done }}
            <button
              class="absolute z-10 w-4 h-4 text-xs transition bg-white rounded-full opacity-0 -top-2 group-hover:opacity-100"
              @click="handleDeleteDoneTask(idx)">

              <i class="text-red-500 pi pi-times" style="font-size: .6rem; font-weight: bold;"></i>
            </button>

          </div>

        </TransitionGroup>
        <Transition name="items-fade">
          <p v-show="!myDoneTask.length" class=" text-slate-500">Task doesn't finish yet</p>
        </Transition>
      </div>


    </div>
  </div>
</template>


<style scoped>
.items-enter-active,
.items-leave-active {
  transition: all 0.5s ease;
}

.items-enter-from,
.items-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.items-fade-enter-active,
.items-fade-leave-active {
  transition: opacity .4s ease;
}

.items-fade-enter-from,
.items-leave-to {
  opacity: 0;
}
</style>

