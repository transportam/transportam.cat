<script setup lang="ts">
import Icon from "~/assets/svg/icon.svg?component"
</script>

<template>
  <footer class="border-t border-neutral-200">
    <Container>
      <div class="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
        <div>
          <div class="flex items-center text-neutral-900">
            <Icon class="h-12 w-12 flex-none" />
            <div class="ml-4">
              <p class="text-base font-semibold">Transporta'm</p>
              <p class="text-sm">El transport a temps real.</p>
            </div>
          </div>
          <nav class="mt-11 flex gap-8">
            <NavLinks />
          </nav>
        </div>
        <DownloadQrCard />
      </div>
      <div class="flex flex-col items-center border-t border-neutral-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
        <p class="mt-6 text-sm text-neutral-500 md:mt-0">
          &copy; Copyright {{ new Date().getFullYear() }}. Tots els drets reservats.
        </p>
      </div>
    </Container>
  </footer>
</template>
