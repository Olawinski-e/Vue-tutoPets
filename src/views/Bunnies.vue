<template>
  <div>
    <petTable species="bunnies" :pets="bunnies" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import bunnies from "@/data/bunnies";
import PetTable from "@/components/PetTable.vue";

export default {
  components: {
    PetTable,
  },
  data() {
    return { bunnies };
  },
  computed: {
    ...mapState(["bunnies"]),
  },
};
</script>
