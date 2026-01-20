<script setup>
import SearchBar from "./SearchBar.vue";
import WeatherInfo from "./WeatherInfo.vue";
</script>

<template>
  <div class="container">
    <SearchBar />
    <WeatherInfo />
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 20px;
}
</style>
