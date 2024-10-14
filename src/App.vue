<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-image: url('back.jpeg');
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;
}

nav {
  margin-bottom: 20px;
  background-color: #333;
  padding: 10px;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-active {
  text-decoration: underline;
  color: #ffcc00;
}

nav a:hover {
  color: #ffcc00;
}
</style>
