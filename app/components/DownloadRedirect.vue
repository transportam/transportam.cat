<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const userAgent = navigator.userAgent;
  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);

  if (isAndroid) {
    window.location.href = 'intent://play.google.com/store/apps/details?id=cat.transportam.app#Intent;scheme=https;package=com.android.vending;end';
  } else if (isIOS) {
    window.location.href = 'https://apps.apple.com/es/app/transportam/id6741533340';
  }
});
</script>

<template>
  <div class="hidden">Descarregar</div>
</template>
