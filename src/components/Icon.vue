<script setup lang="ts">
import MapLocation from "../vectors/map-location.svg?component";
import PhoneClock from "../vectors/phone-clock.svg?component";
import CircleExclamation from "../vectors/circle-exclamation.svg?component";

const icons = {
  "map-location": MapLocation,
  "phone-clock": PhoneClock,
  "circle-exclamation": CircleExclamation,
};

defineProps<{
  icon: string;
}>();
</script>

<template>
  <component :is="icons[icon as keyof typeof icons]" />
</template>
