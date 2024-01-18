<template>
  <header class="fixed z-50 w-full p-2 bg-opacity-50 bg-slate-700 backdrop-blur-md">
    <nav>
      <div class="flex gap-2 text-white">
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