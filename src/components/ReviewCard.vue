<script setup lang="ts">
import StarRating from "./StarRating.vue";

defineProps<{
  review: {
    title: string
    body: string
    author: string
    rating: number
  };
}>()
</script>

<template>
  <figure class="rounded-3xl bg-white p-6 shadow-md shadow-neutral-900/5 mb-4 w-full">
    <blockquote class="text-neutral-900">
      <StarRating :rating="review.rating" />
      <p class="mt-4 text-lg/6 font-semibold before:content-['“'] after:content-['”']">{{ review.title }}</p>
      <p class="mt-3 text-base/7">{{ review.body }}</p>
    </blockquote>
    <figcaption class="mt-3 text-sm text-neutral-600 before:content-['–_']">
      {{ review.author }}
    </figcaption>
  </figure>
</template>
