import heroes, {owners} from "../data/heroes"; //importacion por default y exportacion individual

console.log(owners);

//find
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2));

//filter
const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner("DC"));
