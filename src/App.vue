<script setup>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
</script>

<template>
  <div class=" grid grid-row-[auto_1fr_auto] m-0 md:grid-cols-[345px_auto_auto] ">
    <Header/>
    <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
            <component :key="route.name" :is="Component"></component>
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

