<script setup lang="ts">
import QrCodeBorder from "~/assets/svg/qr-code-border.svg?component"
import Qr from "~/assets/svg/qr.svg?component"
</script>

<template>
  <div class="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-neutral-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
    <div class="relative flex h-24 w-24 flex-none items-center justify-center">
      <QrCodeBorder class="absolute inset-0 h-full w-full stroke-neutral-300 transition-colors group-hover:stroke-primary" />
      <Qr class="m-2 h-22 w-22" />
    </div>
    <div class="ml-8 lg:w-64">
      <p class="text-base font-semibold text-neutral-900">
        <NuxtLink to="/download">
          <span class="absolute inset-0 sm:rounded-2xl" />
          Descarrega l'app
        </NuxtLink>
      </p>
      <p class="mt-1 text-sm text-neutral-700">
        Escaneja el codi QR per descarregar l'app des de l'App Store.
      </p>
    </div>
  </div>
</template>
