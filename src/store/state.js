import bunnies from "../data/bunnies";
import dogs from "../data/dogs";

export default {
  bunnies,
  dogs,
  pets: [...bunnies, ...dogs],
};
