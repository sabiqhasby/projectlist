<template>
  <div class="h-screen bg-gradient-to-b from-sky-400 to-purple-600 text-foreground">

    <div class="px-2 pt-20 text-2xl font-bold text-white font-bricolage">

      These are my project list
    </div>

    <div class="flex flex-wrap w-full ">

      <Card v-for="card in cardList" class="w-[500px] mt-8 mx-3" variant="blured">
        <CardHeader>
          <CardTitle>{{ card.name }}</CardTitle>
          <CardDescription class="text-gray-200">{{ card.description }}</CardDescription>
        </CardHeader>

        <CardFooter class="float-right text-sky-500">
          <RouterLink :to="card.link">go to project</RouterLink>
        </CardFooter>
      </Card>
    </div>

  </div>
  <!-- <div class="p-2">
    <RouterLink to="/todo-app">TodoApp</RouterLink>
  </div>
  <div class="p-2">
    <RouterLink to="/book-finder">Book Finder</RouterLink>
  </div>
  <div class="p-2">
    <RouterLink to="/shopify">Shopify</RouterLink>
  </div>
  <div class="p-2">
    <RouterLink to="/kocokarisan">Kocok Arisan</RouterLink>
  </div> -->
</template>

<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const cardList = [{
  name: 'Todo App',
  link: '/todo-app',
  description: 'Such a Simple To Do App with my own style'
},
{
  name: 'Book Finder',
  link: '/book-finder',
  description: "Find your favorite book or author easily"
},
{
  name: 'Shopify',
  link: '/shopify',
  description: 'A simple Shopify product page clone'
},
{
  name: 'Kocok Arisan',
  link: '/kocokarisan',
  description: 'Randomly generate arisan group members.'
},

]
</script>

