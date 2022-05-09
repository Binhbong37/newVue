<template>
  <div>
    <Header />
    <div class="container mx-auto mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
export default {
  components: { Header },
  name: "App",
  data() {
    return {
      title: "Hello word",
      click: true,
    };
  },
};
</script>

<style scope>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
