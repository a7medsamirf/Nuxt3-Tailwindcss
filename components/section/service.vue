<template>

    <section class="py-12 sm:py-16 bg-gray-300" id="our-service">
      <div class="container mx-auto justify-center items-center text-center">
          <div class="title">
              <h4 class="text-bubble-gum body-font font-Montserrat text-lg font-bold">our service</h4>
              <h3 class="text-color-dark body-font font-Montserrat text-2xl font-bold space-y-80 mt-5">Determine the service you need</h3>
      </div>
      <div class="mt-5">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <div  v-for="(service, index) in services"
      class="card bg-white p-5 shadow-3xl rounded-xl cursor-pointer ">
      <img class="card-image mx-auto w-20" :src="service.image" :alt="service.title" />
      <h5 class="card-title font-bold text-lg my-4">{{ service.title }}</h5>
      <p class="card-discretion mb-4 text-base text-neutral-600 dark:text-neutral-200 text-opacity-70">{{ service.discretion }}</p>
      </div>
    </div>
      </div>
      </div>
  
  
  </section>
  </template>
  <script>
 import imgAPI from '~/public/img/imgAPI'
  export default {
    data() {
      name: 'service'
      return {
        imgAPI: imgAPI,
        services: [
        {
            image: imgAPI.serviceimg[0],
            title: 'Development',
            discretion: 'Create a platform with the best and coolest quality from us.',
          },
          {
            image: imgAPI.serviceimg[1],
            title: 'UI/UX Designer',
            discretion: 'We provide UI/UX Design services, and of course with the best quality',
          },
          {
            image: imgAPI.serviceimg[2],
            title: 'Motion Graphik',
            discretion: 'Create a platform with the best and coolest quality from us.',
          },
          {
            image: imgAPI.serviceimg[3],
            title: 'Best Award history',
            discretion: 'We provide UI/UX Design services, and of course with the best quality',
          },

    ]
      }
    }
  }
  
  </script>


  
  
  <style>
  
  </style>