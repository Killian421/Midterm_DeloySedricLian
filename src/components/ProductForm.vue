<template>
  <div class="product-form">
    <h2>Add New Product</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Product Name:</label>
        <input type="text" v-model="productName" required />
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" v-model="productPrice" required />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea v-model="productDescription" required></textarea>
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      productName: '',
      productPrice: '',
      productDescription: '',
    }
  },
  methods: {
    submitForm() {
      const newProduct = {
        name: this.productName,
        price: this.productPrice,
        description: this.productDescription,
      }
      this.$emit('add-product', newProduct)
      this.productName = ''
      this.productPrice = ''
      this.productDescription = ''
    },
  },
}
</script>

<style scoped>
.product-form {
  background: transparent;
  backdrop-filter: blur(30px);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #ffcc00;
}
</style>
