<template>
  <div class="product-list">
    <h2>Product List</h2>
    <table v-if="products.length">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description }}</td>
          <td>
            <button @click="editProduct(index)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No products available.</p>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    editProduct(index) {
      this.$emit('edit-product', index)
    },
  },
}
</script>

<style scoped>
.product-list {
  background: transparent;
  backdrop-filter: blur(30px);
  margin: 20px auto;
  max-width: 800px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid #ddd;
}

th,
td {
  padding: 10px;
  text-align: center;
}

th {
  background-color: #333;
  color: white;
}

button {
  padding: 5px 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ffcc00;
}
</style>
