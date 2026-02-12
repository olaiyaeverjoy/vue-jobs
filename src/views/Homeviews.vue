<script setup>
import HeroMe from '../components/HeroMe.vue';
import HomeCards from '../components/HomeCards.vue';
import JobListings from '../components/JobListings.vue';
</script>

<template>
    <HeroMe />
    <HomeCards />
    <JobListings :limit="3" :showButton="true" />
</template>