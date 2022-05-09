<template>
  <div class="w-[500px] h-[300px] bg-[#10b981] mx-auto p-5">
    <h1>Users Page</h1>
    <hr />
    <div class="mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "user-page",
  data() {
    return {
      name: "Before Change",
    };
  },
  methods: {
    changeName() {
      this.name = "After Change";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
</style>
