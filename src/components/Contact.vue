<template>
  <div>
    <h1>This is Contact Page</h1>
    <button @click="count++">Increase</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "page-contact",
  data() {
    return {
      count: 0,
    };
  },
  methods: {},

  destroyed() {
    console.log("Destroy");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  color: red;
}
</style>
