
// const saludar = function (nombre) {
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

//console.log(saludar("Nadia"));

console.log(saludar2('Nadia'));
console.log(saludar3('Yasuo'));
console.log(saludar4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'nadia12'
});

const user = getUser();
console.log(user);

// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABC234',
//         username: nombre
//     }
// };

//tarea
//funcion flecha, + objeto implicito
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC234',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
