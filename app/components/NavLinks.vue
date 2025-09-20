<script setup lang="ts">
import navigation from '../data/navigation.json'
</script>

<template>
  <div class="hidden lg:flex lg:gap-10">
    <NuxtLink
      v-for="item in navigation"
      class="relative -mx-3 -my-2 px-3 py-2 text-sm text-neutral-700 rounded-lg transition-colors hover:text-neutral-900 hover:bg-neutral-100"
      :to="item.href"
    >
      <span class="relative z-10">{{ item.label }}</span>
    </NuxtLink>
  </div>
</template>
