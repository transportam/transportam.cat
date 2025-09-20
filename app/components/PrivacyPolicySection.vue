<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <li>
    <h3 class="text-lg/6 font-semibold text-neutral-900">{{ title }}</h3>
    <div class="mt-4 text-sm text-neutral-700">
      <slot />
    </div>
  </li>
</template>
