<template>
  <div class="basketproduct">
    <img :src="product.img" alt="basketproduct" />
    <div class="basketproduct__info">
      <p>{{ product.name }}</p>
      <p>$ {{ product.price }}</p>
      <button class="basketproduct__add" @click="removeProduct(product._id)">
        Remove from Cart
      </button>
    </div>
  </div>
</template>

<script>
import axios from "../../axios";
export default {
  name: "BasketProduct",
  data() {
    return {};
  },
  props: {
    product: Object,
  },
  methods: {
    removeProduct(product_id) {
      (async () => {
        await axios.delete(`/basket/remove/${product_id}`);
      })();
    },
  },
};
</script>

<style lang="scss" scoped>
.basketproduct {
  width: 300px;
  border: 1px solid lightgray;
  margin: 5px;
  border-radius: 5px;
  user-zoom: none;
  user-select: none;
  background: rgba(255, 255, 255, 0.3);
  img {
    width: 300px;
    object-fit: contain;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .basketproduct__info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  button.basketproduct__add {
    width: 150px;
    outline: none;
    color: white;
    border: none;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    background-color: lightseagreen;
  }
  button.basketproduct__add:hover {
    background: orange;
  }
  .basketproduct__info > p {
    font-size: 20px !important;
  }
  .basketproduct__info > p:first-child {
    text-transform: capitalize;
    font-weight: bold;
  }
}
@media only screen and (max-width: 768px) {
  .basketproduct {
    width: 350px;
    img {
      width: 350px;
    }
  }
}
</style>
