const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    descripcion: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea de la lista de por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}