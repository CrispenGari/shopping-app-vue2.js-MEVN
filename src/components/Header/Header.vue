<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/basket">
      <v-badge :content="basketSize">
        <v-icon class="header__cart">mdi-cart-variant </v-icon>
      </v-badge>
    </router-link>
  </div>
</template>

<script>
import axios from "../../axios";
export default {
  name: "Header",
  data() {
    return {
      basketSize: 0,
    };
  },
  mounted() {
    setInterval(() => {
      (async () => {
        const res = await axios.get("/basket");
        this.basketSize = res.data.length;
      })();
    }, 200);
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 35px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 100;
  position: sticky;
  top: 0;
  .header__cart {
    color: #333 !important;
    font-size: 30px;
  }
  a {
    color: #333;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
  }
}
@media only screen and (max-width: 768px) {
  .header {
    padding: 20px 20px;
  }
}
</style>
