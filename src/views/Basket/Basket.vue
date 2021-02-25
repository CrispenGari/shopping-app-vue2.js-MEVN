<template>
  <div class="basket">
    <h1>Your basket Contains the following products</h1>
    <div class="basket__products">
      <BasketProduct
        v-for="(product, i) in basket"
        :key="i"
        :product="product"
      />
    </div>
    <div class="product__summary">
      <p><span> Product </span> <span>Price</span></p>
      <p v-for="(product, i) in basket" :key="i">
        <span> {{ product.name }} </span>
        <span>$ {{ product.price }}</span>
      </p>
      <p>
        <span> Total Price </span>
        <span
          ><strong> {{ backetsWeight }} product(s)</strong></span
        >
        <span>$ {{ basketPrice }} </span>
      </p>
      <div class="product__summary__controls">
        <button>Buy</button><button @click="clearBasket()">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios";
import { BasketProduct } from "../../components";
export default {
  name: "Basket",
  components: {
    BasketProduct,
  },
  data() {
    return {
      basket: [],
    };
  },
  methods: {
    clearBasket() {
      (async () => {
        axios.delete("/basket/remove/all");
      })();
    },
  },
  mounted() {
    setInterval(() => {
      (async () => {
        const res = await axios.get("/basket");
        this.basket = res?.data;
      })();
    }, 200);
  },
  computed: {
    basketPrice() {
      let price = 0;
      this.basket.forEach((product) => {
        price += product.price;
      });
      return price;
    },
    backetsWeight() {
      return this.basket.length;
    },
    productsCount() {
      return 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.basket {
  user-select: none;
  user-zoom: none;
  h1 {
    width: 100%;
    padding: 20px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .basket__products {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 10px;
    justify-content: space-around;
  }
  .product__summary {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    max-height: 50vh;
    margin: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: 5px;
    border: 1px solid lightgray;
    background-color: rgba(255, 255, 255, 0.5);
    p {
      display: flex;
      background: lightgray;
      padding: 5px;
      user-zoom: none;
      user-select: none;
      border-radius: 5px;
      justify-content: space-between;
      font-weight: bold;
      span:nth-child(2) {
        font-weight: normal !important;
      }
    }
    p:nth-child(even) {
      background: white;
    }
    p:first-child,
    p:last-child {
      font-weight: bold;
    }

    .product__summary__controls {
      display: flex;
      justify-content: space-between;
      padding: 5px;

      button {
        width: 100px;
        outline: none;
        border: none;
        color: white;
        background: lawngreen;
        border-radius: 5px;
        cursor: pointer;
        padding: 8px;
      }
      button:last-child {
        background: orange;
      }
      button:hover:active {
        background: lightseagreen;
      }
    }
  }
}
</style>
