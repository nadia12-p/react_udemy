// Desestructuración

const persona = {
  nombre: "Tony",
  edad: "45",
  clave: "Ironman"
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const retornaPersona = ({clave, nombre, edad, rango = 'Capitán'}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.2322
        }
    }
};

const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona(persona);

console.log(nombreClave, anios);
console.log(lat, lng);