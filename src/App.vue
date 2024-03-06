<script setup>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
</script>

<template>
  <!-- <div class="flex flex-col min-h-100vh"> -->
  <div class=" grid grid-row-[auto_1fr_auto] m-0 md:grid-cols-[345px_auto_auto] ">
    <Header/>
    <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
            <!-- <div :key="route.name" class=" flex-1 w-full bg-[url(public/images/banner.png)] bg-no-repeat bg-cover bg-center "> -->
              <component :key="route.name" :is="Component"></component>
            <!-- </div> -->
        </transition>
      </router-view>
    <Footer/>
  </div>
  
</template>

<style>
  * {
    font-family: "Noto Sans TC";
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave{
    opacity: 1;
  }

  .fade-enter-active{
    transition: all 0.3s;
  }

  .fade-leave-active{
    opacity: 0;
    transition: all 0.3s;
  }
</style>

