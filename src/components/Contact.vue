<template>
  <div id="header">
    <header class="header mx-auto">
      <nav class="header__navbar text-xl text-center">
        <ul class="header__navbar-list">
          <img
            src="https://anilist.co/img/icons/icon.svg"
            alt="Ailist"
            class="w-12"
          />
        </ul>
        <ul class="header__navbar-list">
          <li class="header__navbar-item">Home</li>
          <li class="header__navbar-item line-center">Contact</li>
          <li class="header__navbar-item">Address</li>
        </ul>
        <ul class="header__navbar-list">
          <li class="header__navbar-item line-center">Login</li>
          <li class="header__navbar-item">SignUp</li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "PageContact",
};
</script>

<style scope>
.header {
  height: 80px;
  background: linear-gradient(0, #0005f8, #00f48e);
  color: white;
}

.header__navbar {
  display: flex;
  justify-content: space-between;
}

.header__navbar-list {
  margin-top: 20px;
}

.header__navbar-item {
  display: inline-block;
  margin: 0 12px;
}

.line-center {
  position: relative;
}
.line-center::after {
  content: "";
  display: block;
  width: 1px;
  height: 16px;
  background: white;
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
}
</style>