<template>
  <div>
    <h1>This is About Page</h1>
    <input type="checkbox" v-model="todos" value="launha" /> Lau nha
    <input v-model="todos" type="checkbox" value="quetnha" /> Quet nha
    <input type="checkbox" v-model="todos" value="dicho" /> Di cho
    <input type="checkbox" v-model="todos" value="dingu" /> Di ngu
    <p v-for="item in todos" :key="item">{{ item }}</p>
  </div>
</template>

<script>
export default {
  name: "page-about",
  data() {
    return {
      todos: [],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
</style>
