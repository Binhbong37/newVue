<template>
  <div class="w-full px-[24px] h-[80px] bg-zinc-200 drop-shadow-lg">
    <div class="px-2 flex justify-between items-center w-full h-full">
      <div class="flex items-center">
        <h1 class="text-3xl font-bold mr-4 sm:text-4xl">
          <router-link to="/">BRAND.</router-link>
        </h1>
        <ul class="hidden md:flex">
          <li><router-link class="px-4" to="/users">Users</router-link></li>
          <li>
            <router-link class="px-4" to="/role">Role</router-link>
          </li>
          <li>
            <router-link class="px-4" to="/user-detail/10"
              >UserDetail</router-link
            >
          </li>
          <li>
            <router-link class="px-4" to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link class="px-4" to="/more">More</router-link>
          </li>
        </ul>
      </div>
      <div class="hidden md:flex pr-4">
        <button class="border-none bg-transparent text-black mr-4">
          Sign In
        </button>
        <button class="px-8 py-3">Sign Up</button>
      </div>
      <div class="md:hidden mr-4" @click="handleClick">MENU</div>
    </div>

    <ul :class="!nav ? 'hidden' : 'absolute bg-zinc-200 w-full left-0 px-5'">
      <li class="border-b-2 border-zinc-300 w-full">
        <router-link @click="handleClose" to="/"></router-link>
      </li>
      <li class="border-b-2 border-zinc-300 w-full" @click="handleClose">
        <router-link to="/users">Users</router-link>
      </li>
      <li class="border-b-2 border-zinc-300 w-full" @click="handleClose">
        <router-link to="/user-edit">UserEdit</router-link>
      </li>
      <li class="border-b-2 border-zinc-300 w-full" @click="handleClose">
        <router-link to="/user-detail/detail">UserDetail</router-link>
      </li>
      <li class="border-b-2 border-zinc-300 w-full" @click="handleClose">
        <router-link to="/contact">Contact</router-link>
      </li>

      <div class="flex flex-col my-4">
        <button class="bg-transparent text-indigo-600 mb-4">Sign In</button>
        <button class="">Sign Up</button>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LayoutPage",
  data() {
    return {
      nav: false,
    };
  },
  methods: {
    handleClose() {
      this.nav = false;
    },
    handleClick() {
      this.nav = !this.nav;
    },
  },
};
</script>

<style>
</style>