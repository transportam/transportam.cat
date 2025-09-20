<script setup lang="ts">
import type {NuxtError} from "#app";
import Button from "~/components/Button.vue";
import Default from "~/layouts/default.vue";

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <Default>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32">
      <svg viewBox="0 0 1090 1090" aria-hidden="true" fill="none" preserveAspectRatio="none" class="absolute top-1/2 left-1/2 -z-10 mt-44 w-272.5 max-w-screen -translate-x-1/2 -translate-y-1/2 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/30"><circle cx="545" cy="545" r="544.5"></circle><circle cx="545" cy="545" r="480.5"></circle><circle cx="545" cy="545" r="416.5"></circle><circle cx="545" cy="545" r="352.5"></circle></svg>
      <p class="text-sm font-semibold text-gray-900">{{ error.statusCode }}</p>
      <template v-if="error.statusCode === 404">
        <h1 class="mt-2 text-3xl font-medium tracking-tight text-gray-900">Pàgina no trobada</h1>
        <p class="mt-2 text-lg text-gray-600">Ho sentim, no hem pogut trobar la pàgina que estaves buscant.</p>
      </template>
      <template v-else>
        <h1 class="mt-2 text-3xl font-medium tracking-tight text-gray-900">S'ha produït un error</h1>
        <p class="mt-2 text-lg text-gray-600">Ho sentim, s'ha produït un error inesperat. Si us plau, torna-ho a intentar més tard.</p>
      </template>
      <Button href="/" variant="outline" class="mt-8">
        Torna a l'inici
      </Button>
    </div>
  </Default>
</template>
