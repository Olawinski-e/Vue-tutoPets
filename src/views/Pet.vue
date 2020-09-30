<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import dogs from "@/data/dogs";
import bunnies from "@/data/bunnies";
import { mapState } from "vuex";

export default {
  data() {
    return {
      bunnies,
      dogs,
      animal: {},
    };
  },
  computed: {
    ...mapState(["bunnies", "dogs"]),
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  },
};
</script>
