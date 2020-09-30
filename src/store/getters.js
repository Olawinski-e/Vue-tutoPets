export default {
  animalsCount: (state) => {
    return state.bunnies.length + state.dogs.length;
  },
  getAllBunnies: (state) => {
    return state.pets.filter((pets) => {
      return pets.species === "bunnies";
    });
  },
  getAllDogs: (state) => {
    return state.pets.filter((pets) => {
      return pets.species === "dogs";
    });
  },
};
