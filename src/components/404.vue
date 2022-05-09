<template>
  <div>
    <h1 class="text-4xl font-bold">PAGE NOT FOUND!!</h1>
    <p>Plz try another....</p>
    <button
      @click="$router.push({ name: 'homePage' })"
      class="bg-[#06b6d4] text-white p-2 rounded"
    >
      Back to home
    </button>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
</style>