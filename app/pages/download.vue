<script setup lang="ts">

</script>

<template>
  <ClientOnly>
    <DownloadRedirect />
  </ClientOnly>
  <Container class="py-20 sm:py-32">
    <div class="flex flex-col items-center">
      <div class="mb-20 border border-neutral-300 rounded-lg hidden lg:inline">
        <DownloadQrCard />
      </div>
      <div class="m-auto flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
        <a href="https://play.google.com/store/apps/details?id=cat.transportam.app" target="_blank">
          <img src="/google-play.svg" class="h-12" alt="Google Play" />
        </a>
        <a href="https://apps.apple.com/es/app/transportam/id6741533340" target="_blank">
          <img src="/app-store.svg" class="h-12" alt="Apple App Store" />
        </a>
      </div>
    </div>
  </Container>
</template>
