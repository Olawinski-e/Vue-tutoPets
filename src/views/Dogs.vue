<template>
  <div>
    <petTable species="dogs" :pets="dogs" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import dogs from "@/data/dogs";
import PetTable from "@/components/PetTable.vue";

export default {
  components: {
    PetTable,
  },
  data() {
    return { dogs };
  },
  computed: {
    ...mapState(["dogs"]),
  },
};
</script>
