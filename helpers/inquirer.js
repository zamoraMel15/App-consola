const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            
            {
                value: '1',
                name: `${ '1'.green }. Crear tarea`
            },
            {
                value: '2',
                name: `${ '2'.green }. Listar tareas`
            },
            {
                value: '3',
                name: `${ '3'.green }. Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4'.green }. Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5'.green }. Completar tarea`
            },
            {
                value: '6',
                name: `${ '6'.green }. Borrar una tarea`
            },
            {
                value: '0',
                name: `${ '0'.green }. Salir`
            },
        ]
    }
];

const inquirerMenu = async() => {
   
   console.clear();
   console.log('======================='.green);
   console.log(' Seleccione una Opción'.white)
   console.log('=======================\n'.green);

 const { option } =  await inquirer.prompt(questions);

 return option;
}

const pause = async() => {
   
    const question = [
        {
           type: 'input',
           name: 'enter',
           message: `presiones ${'enter'.blue} para continuar` 
        }
    ];

    console.log('\n');

    await inquirer.prompt(question);
}

const readInput = async( message ) => {
    
    const questionss = [
        {
           type: 'input',
           name:  'description',
           message,
           validate( value ) {
               if(value.length === 0) {
                   
                   return 'Por favor ingrese un valor';
                } 
               
               return true;
           }
        }
    ];

    const { description } = await inquirer.prompt(questionss);
    return description;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput 
}