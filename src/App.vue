<template>
  <div>
    <router-view name="header" />
    <div class="container mx-auto mt-5">
      <transition name="slide">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
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
.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}
.slide-leave {
  opacity: 1;
  transform: translateX(0);
}
@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(30px);
  }
}
</style>
