<template>
  <div>
    <petTable species="bunnies" :pets="bunnies" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PetTable from "@/components/PetTable.vue";

export default {
  components: {
    PetTable,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["bunnies"]),
  },
};
</script>
