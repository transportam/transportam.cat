<script setup lang="ts">
import LogoVariant from "~/assets/svg/logo-variant.svg?component"
</script>

<template>
  <header>
    <nav>
      <Container class="relative z-50 flex justify-between py-8">
        <div class="relative z-10 flex items-center gap-16">
          <NuxtLink to="/" aria-label="Home">
            <LogoVariant class="h-10 w-auto"/>
          </NuxtLink>
          <div class="hidden lg:flex lg:gap-10">
            <NavLinks />
          </div>
        </div>
        <div class="flex items-center gap-6">
          <HeaderMobile />
          <div class="flex items-center gap-6 max-lg:hidden">
            <Button href="/download" variant="solid">
              Descarregar
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  </header>
</template>
