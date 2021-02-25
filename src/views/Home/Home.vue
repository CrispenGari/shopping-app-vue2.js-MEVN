<template>
  <div class="home">
    <Barner />
    <ProductList />
  </div>
</template>

<script>
import { Barner, ProductList } from "../../components";
export default {
  name: "Home",
  components: {
    Barner,
    ProductList,
  },
};
</script>

<style scoped lang="scss">
.home {
  flex: 1;
}
</style>
