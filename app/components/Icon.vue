<script setup lang="ts">
import MapLocation from "../assets/svg/map-location.svg?component";
import PhoneClock from "../assets/svg/phone-clock.svg?component";
import CircleExclamation from "../assets/svg/circle-exclamation.svg?component";

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
