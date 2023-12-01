<template>
  <header class="w-full p-2 bg-slate-300">
    <nav>
      <div class="flex gap-2">
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/about">about</RouterLink>
      </div>
    </nav>
  </header>
</template>


<style scoped>
nav .router-link-active,
nav .router-link-exact-active {
  /* background-color: indianred; */
  @apply font-semibold
}
</style>