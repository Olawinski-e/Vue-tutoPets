<template>
  <div>
    <h1>Bunnies for Adoption</h1>
    <b-table striped hover :items="bunnies">
      <template v-slot:cell(name)="data">
        <a :href="`/pets/${data.value}`">{{ data.index }}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["bunnies"]),
  },
};
</script>
