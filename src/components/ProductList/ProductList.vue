<template>
  <div class="products">
    <h1>Featured Products</h1>
    <div class="products__list">
      <Product v-for="(product, i) of products" :key="i" :product="product" />
    </div>
  </div>
</template>

<script>
import Product from "../../components/Product/Product";
import axios from "../../axios";
export default {
  name: "ProductList",
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    (async () => {
      const res = await axios.get("/products");
      this.products = res.data;
    })();
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding: 20px 30px;
  background: white;
  user-zoom: none;
  user-select: none;
  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 25px;
  }
  .products__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
  }
}
</style>
