<template>
  <div class="bg-[#ccfbf1] w-[200px] h-[70px]">
    <h1>User Detail</h1>
    <p>ID Users:{{ id }}</p>
    <p>ID Users:{{ $route.params.id }}</p>
    <hr />
    <router-link :to="{ name: 'userEdit', params: { id: $route.params.id } }">
      <p class="text-white">EDIT USER</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "page-UserDetail",
  props: {
    changeName: {
      type: String,
    },
  },
  data() {
    return {
      name: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    handleName() {
      this.name = this.changeName;
    },
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
    },
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
