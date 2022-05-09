<template>
  <div>
    <h1>Select one route</h1>
    <ul>
      <li v-for="i in 5" :key="i">
        <router-link :to="`users/${i}`">User {{ i }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
</style>