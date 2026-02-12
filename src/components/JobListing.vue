<script setup>
// bring in ref and computed 
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
    job:Object
});
//  first create a var to showFullDescription and set it to a default value of false
const showFullDescription = ref(false);   

// then you can add a function to toggle (if its true it gets set to false and if its false it gets set to true)
const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
}

// use computed here... set it like this and pass a function inside it 
const truncatedDescription =  computed(() => {
  let description = props.job.description;
  if (!showFullDescription.value){
    description = description.substring(0, 90) + '...';
  }
  return description;
});
</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
              </div>

              <div class="mb-5">
                <div>
                  {{ truncatedDescription }}    
                </div>
                <button @click="toggleFullDescription" class="text-green-500 hover:text-green-600 mb-5">
                  {{ showFullDescription ? 'Less' : 'More' }}
                </button>

              </div>

              <h3 class="text-green-500 mb-2">{{ job.salary }}</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                
                <div class="text-orange-700 mb-3">
                  <i class="fa fa-location-dot text-green-600"></i>
                  {{ job.location }}
                </div>
                
                <a
                  :href="'/job/' + job.id"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </a>
                   
              </div>
            </div>
    </div>
</template>