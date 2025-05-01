<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import navigation from '../data/navigation.json'
import ChevronUp from "../vectors/chevron-up.svg?component";
import MenuBars from "../vectors/menu-bars.svg?component";
</script>

<template>
  <Popover class="lg:hidden" v-slot="{ open, close }">
    <PopoverButton
      class="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-neutral-900 p-2 hover:bg-neutral-200/50 hover:stroke-neutral-600 focus:outline-none active:stroke-neutral-900"
      aria-label="Toggle site navigation"
    >
      <component :is="open ? ChevronUp : MenuBars" class="size-5" />
    </PopoverButton>
    <transition name="fade" appear>
      <div
        v-if="open"
        class="fixed inset-0 z-0 bg-neutral-300/60 backdrop-blur-sm"
      />
    </transition>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-8"
    >
      <PopoverPanel
        v-if="open"
        static
        class="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-neutral-50 px-6 pt-32 pb-6 shadow-2xl shadow-neutral-900/20"
      >
        <div class="space-y-4">
          <a
            v-for="item in navigation"
            class="block text-base/7 tracking-tight text-neutral-700"
            :href="item.href"
            @click="close"
          >
            {{ item.label }}
          </a>
        </div>
        <div class="mt-8 flex flex-col gap-4">
          <a class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-colors bg-neutral-800 text-white hover:bg-neutral-900 active:bg-neutral-800 active:text-white/80" href="/download">Descarregar</a>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
