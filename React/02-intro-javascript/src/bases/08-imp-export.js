// import heroes, {owners} from "../data/heroes"; //importacion por default y exportacion individual
import heroes from "../data/heroes";

// console.log(owners);

//find
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2));

//filter
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner("DC"));
