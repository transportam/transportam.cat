<script setup lang="ts">
import type {NuxtLinkProps} from "#app";

type Type = 'outline' | 'solid'

withDefaults(
  defineProps<{
    href?: NuxtLinkProps['to']
    variant?: Type
  }>(),
  {
    href: '#',
    variant: 'outline',
  }
)

const variants: Record<Type, string> = {
  outline: 'border border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  solid: 'font-semibold bg-neutral-800 text-white hover:bg-neutral-900 active:bg-neutral-800 active:text-white/80',
}
</script>

<template>
  <NuxtLink
    :to="href"
    class="inline-flex justify-center rounded-lg text-sm transition-colors py-2.5 px-3"
    :class="variants[variant]"
  >
    <slot />
  </NuxtLink>
</template>
