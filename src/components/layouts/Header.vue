<script setup>
import { ref } from 'vue';
  const isOpen = ref(true);

  /** @const {Array} navbar列表 */
  const menuList = ref([
    { id: 1, lable: '白頭翁的特性', router: '/' },
    { id: 2, lable: '白頭翁的故事', router: '/story' },
    { id: 3, lable: '白頭翁的美照', router: '/photo' },
    { id: 4, lable: '白頭翁的危機', router: '/crisis' },
  ]);

</script>

<template>
  <div class="row-start-1 row-end-2 drop-shadow-lg bg-white overflow-hidden md:overflow-visible md:pt-75px md:drop-shadow-none md:row-start-1 md:row-end-4 md:row-start-1 md:row-end-2"
   :class="[!isOpen ? 'h-286px duration-300' : 'h-87px duration-300']">
    <div class="h-87px flex justify-around items-center md:relative ">
      <img v-if="isOpen" class="md-hidden" @click="isOpen = !isOpen" src="/public/images/hamburgur.png" alt="logo">
      <img v-else @click="isOpen = !isOpen" class="md-hidden" src="/public/images/close.png" alt="logo">
      <p class="text-20px font-bold md:text-30px">白頭翁不吃小米</p>
      <div class="w-48px h-48px border-2px rounded-full shadow-[0px_0px_2px_#000] md:w-97px md:h-97px md:absolute md:right--50px md:bg-white">
        <img class="w-full h-full" src="/public/images/logo.svg" alt="logo">
      </div>
    </div>
    <ul class="flex flex-col justify-center items-center text-18px gap-22px md:pt-76px">
      <li v-for="menu in menuList" :key="menu.id" class="relative">
        <router-link :to="menu.router" :title="`前往${menu.lable}`"
          class=" relative hover:text-#AA6666 after-content-[''] after-absolute after-bottom--2px after-left-0 after-bg-#AA6666 after-h-2px after-w-0 hover:after-w-full after-duration-500 after-ease-[cubic-bezier(.99,.12,.15,1)]"
          :class="[menu.router === $route.path ? 'text-#AA6666 after-w-full' : 'text-black']"
          >{{menu.lable }}
        </router-link>
      </li>
    </ul>
  </div>
</template>