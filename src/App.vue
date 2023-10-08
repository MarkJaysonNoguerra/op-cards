<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="w-full h-16 flex bg-slate-300 ">
      <img class="ml-12" src="logo.png" alt="logo" style="height: 70px; width: 150px;">
    </div>
    <!-- <ul class="w-full h-16 flex justify-end md:justify-center items-center bg-slate-300">
      <li class="mx-2 md:mx-8 px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm">
        <RouterLink to="/" class="">Home</RouterLink>
      </li>
      <li class="mx-2 md:mx-8 px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm">
        <RouterLink to="/series" class="">Series</RouterLink>
      </li>
    </ul> -->
  </header>

  <RouterView />
</template >
