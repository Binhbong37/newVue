<template>
  <div class="bg-[#ca8a04] h-[100px]">
    <h1 class="font-bold p-5">User Edit</h1>
    <p>{{ $route.params }}</p>
    <hr />
    <ul>
      <li>locate: {{ $route.query.location }}</li>
      <li>Browser: {{ $route.query.browser }}</li>
    </ul>
    <div class="bg-[#0ea5e9] h-[700px]"></div>
    <h1 id="vuejs" class="text-4xl font-bold">Learn Vue Js</h1>
    <div class="bg-[#0ea5e9] h-[500px]"></div>
  </div>
</template>

<script>
export default {
  name: "page-UserEdit",
  props: {},
  data() {
    return {
      pageEdit: "Information List User",
      products: [
        { id: 1, name: "SamSung" },
        { id: 2, name: "IPhone" },
        { id: 3, name: "Huawei" },
        { id: 4, name: "Ipad" },
        { id: 5, name: "Laptop" },
        { id: 6, name: "NotePad" },
      ],
      filterProduct: "",
    };
  },
  methods: {},
  computed: {
    filterProducts() {
      return this.products.filter((product) => {
        return product.name.match(this.filterProduct);
      });
    },
  },
  filters: {
    toLowerCase(pageEdit) {
      return pageEdit.toLowerCase();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
</style>
