<template>
  <q-page class="flex flex-center">
    <div class="counter">
      {{ storeCounter.counter }}
    </div>
    <hr>
    <div class="counter">
      {{ storeCounter.evenOrOdd }}
    </div>
    <div class="buttons">
      <button @click="storeCounter.decrement">-</button>
      <button @click="storeCounter.increment">+</button>
    </div>
    <div class="modifier">
      <h3>Change counter:</h3>
      <input type="number" v-model="storeCounter.counter">
    </div>
  </q-page>
</template>

<script setup>
import { QPage } from 'quasar'
import { useCounterStore } from "../stores/counter"
import { useLocalStorage } from "@vueuse/core"

const storeCounter = useCounterStore();
</script>

<style>
.counter {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 60px;
  padding: 20px;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 60px;
}

.buttons button {
  margin: 20px;
  width: 100px;
}
</style>
