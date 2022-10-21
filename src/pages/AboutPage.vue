<template>
  <q-page class="about-page flex flex-center column">
    <p>About</p>
    <p>{{ counterStore.counter }}</p>
  </q-page>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
</script>

<style lang="scss" scoped>
.about-page {
  font-size: 60px;
}
</style>
