<template>
  <div class="barner">
    <h1>{{ moto }}</h1>
    <div class="barner__button">Shop Now</div>
  </div>
</template>

<script>
export default {
  name: "Barner",
  data() {
    return {
      state: this.$store.state,
      motoIndex: 0,
    };
  },
  computed: {
    moto() {
      return this.state.motos[this.motoIndex];
    },
  },
  mounted() {
    setInterval(() => {
      if (this.motoIndex === this.state.motos.length - 1) {
        this.motoIndex = 0;
      } else {
        this.motoIndex++;
      }
    }, 3000);
  },
};
</script>
<style lang="scss" scoped>
.barner {
  width: 100%;
  height: 80vh;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  user-select: none;
  user-zoom: none;
  h1 {
    font-size: 45px;
    text-transform: capitalize;
    text-align: center;
  }
  .barner__button {
    background-color: lightseagreen;
    padding: 15px;
    border-radius: 5px;
    color: white;
    display: grid;
    place-items: center;
    width: 150px;
    margin-top: 20px;
    cursor: pointer;
    font-size: bold;
  }
}
</style>
