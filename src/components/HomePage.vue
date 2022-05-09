<template>
  <div>
    <h1>New Home Page!!!</h1>
    <button @click="gotoUserPage" class="bg-black text-white p-2 rounded">
      GO
    </button>
    <button
      @click="gotoUserDetail"
      class="bg-[#16a34a] text-white p-2 rounded ml-5"
    >
      GO TO DETAIL
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    gotoUserPage() {
      this.$router.push("/users");
    },
    gotoUserDetail() {
      this.$router.push("/users/50");
    },
  },
};
</script>

<style>
</style>