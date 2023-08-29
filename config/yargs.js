const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: "number",
    demandOption: true,
    describe:"tabla de multiplicar"      
  })
  .option('l',{
    alias: 'listar',
    type:'boolean',
    default: false,
    describe: "listar la tabla de mutiplicar"
  } )
  .option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'hasta que numero se multiplicara'
  })
  .check( (argv, options)=>{
     if( isNaN(argv.b) ){
      throw 'la base tiene que ser un numero'
     }
     else if( isNaN(argv.h)){
      throw 'la cantidad de veces que se multiplicara la base no es un numero'
     }
     return true
  } )
  .argv

module.exports = argv