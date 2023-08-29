const fs = require('fs');
const color = require('colors')

const crearArchivo = async (base = 5, listar=false, limite=10) => {
  try {
    let salida = ''
    for (let i = 1; i <= limite; i++) {

      salida += (`${base} X ${i} = ${base * i}\n `);
    }

    if( listar ){
    console.log(salida)
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    return( color.green(`tabla-${base}.txt creada`) )
  }
  catch(err){
    throw err
  }


}

module.exports = {
  crearArchivo
}