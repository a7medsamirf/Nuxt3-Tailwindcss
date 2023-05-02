<template>
  
  <section class="px-2 py-32 bg-white md:px-0 " id="Hero">

<div class="items-center max-w-6xl px-8 mx-auto xl:px-5">
  
    <div class="flex flex-wrap items-center sm:-mx-3">

      <div class="w-full md:w-1/2 md:px-3">
        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl body-font font-Montserrat">
            <span class="block xl:inline">Great software is built with </span>
            <span class="block xl:inline text-bubble-gum" data-primary="red-700">amazing developers</span>
          </h1>
          <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
            We help build and manage a team of world-class developers to bring your vision to life
          </p>
          <div class="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#_" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-custom-color rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto" data-primary="indigo-600" data-rounded="rounded-md">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="w-full h-auto overflow-hidden rounded-md  sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">

       <!--      <img :src="require('@/public/img/1.jpg')" alt="My Image"> -->
            <img src="/img/1.jpg" alt="Discover Nuxt 3" />

          </div>
      </div>
    </div>
  </div>


</section>
</template>

<script>
export default {
  data() {
    name: 'Hero'
    return {
 
    }
  }
}

</script>

<style>

</style>