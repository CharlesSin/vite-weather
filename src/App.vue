<script setup>
import { ref } from 'vue'
import WeatherFooter from '@/components/WeatherFooter.vue'
import WeatherContent from '@/components/WeatherContent.vue'
import WeatherHeader from '@/components/WeatherHeader.vue'

const title = ref('Vite + Vue Weather App');
</script>

<template>
  <div class="container">
    <WeatherHeader class="header" v-bind:title="title"></WeatherHeader>
    <WeatherContent class="content"></WeatherContent>
    <WeatherFooter class="footer">
      <template v-slot:message>Vue Weather App from TestDriven.io Blog</template>
    </WeatherFooter>
  </div>
</template>



<style>
.container {
  margin: auto;
}
</style>
