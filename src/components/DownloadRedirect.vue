<script setup>
const userAgent = navigator.userAgent || window.opera;

if (/android/i.test(userAgent)) {
  window.location.href = 'https://play.google.com/store/apps/details?id=cat.transportam.app';
} else if (/iPad|iPhone/.test(userAgent)) {
  window.location.href = 'https://apps.apple.com/es/app/transportam/id6741533340';
}
</script>

<template>
  <div class="hidden">
    Descarregar
  </div>
</template>
