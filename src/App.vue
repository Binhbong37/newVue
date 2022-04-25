<template>
  <div class="container">
    <div class="">
      <router-link class="btn btn-outline-danger" to="/">Cart</router-link>
      <router-link class="btn btn-outline-danger" to="/about"
        >About</router-link
      >
      <router-link class="btn btn-outline-danger" to="/contact"
        >Contact</router-link
      >
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scope>
</style>
