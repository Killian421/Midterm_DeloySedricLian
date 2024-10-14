<template>
  <div class="home">
    <h1>Welcome, Lian!</h1>
    <p>Program: Product Management Application</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  background-position: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  text-align: center;
  font-size: 24px;
}

h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

p {
  font-size: 20px;
  font-weight: 300;
}
</style>
