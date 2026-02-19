<script setup>
import { RouterLink } from "vue-router";

defineProps({
  to: {
    type: [String, Object], // allows path OR named route
    required: true,
  },
  label: {
    type: String,
    default: "Back",
  },
});
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        :to="to"
        class="text-green-500 hover:text-green-600 flex items-center"
      >
        <i class="fas fa-arrow-left mr-2"></i>
        {{label}}
      </RouterLink>
    </div>
  </section>
</template>


