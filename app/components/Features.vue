<template>
  <section
    id="features"
    class="bg-neutral-900 py-20 sm:py-32"
  >
    <Container>
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
        <h2 class="text-3xl font-medium tracking-tight text-white">
          Fes el teu dia a dia més fàcil amb Transporta'm.
        </h2>
        <p class="mt-2 text-lg text-neutral-400">
          Una app pensada i feta per usuaris, que dia a dia fem servir el transport públic
          i que busquem una millora de la informació per poder fer els nostres trajectes de manera àgil.
        </p>
      </div>
    </Container>
    <div class="mt-16 md:hidden">
      <FeaturesMobile />
    </div>
    <Container class="hidden md:mt-20 md:block">
      <FeaturesDesktop />
    </Container>
  </section>
</template>
