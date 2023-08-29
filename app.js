const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar')


console.clear();


crearArchivo(argv.b, argv.l, argv.h)
  .then( nombreDelArchivo => console.log(nombreDelArchivo) )
  .catch( err => console.log(err) )
