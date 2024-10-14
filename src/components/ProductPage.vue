<template>
  <div>
    <ProductForm @add-product="addProduct" />
    <ProductList :products="products" @update-product="updateProduct" />
  </div>
</template>

<script>
import ProductForm from './ProductForm.vue'
import ProductList from './ProductList.vue'

export default {
  name: 'ProductPage',
  components: { ProductForm, ProductList },
  data() {
    return {
      products: [],
    }
  },
  methods: {
    addProduct(product) {
      this.products.push(product)
    },
    updateProduct({ index, updatedProduct }) {
      this.$set(this.products, index, updatedProduct)
    },
  },
}
</script>
