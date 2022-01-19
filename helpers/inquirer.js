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
    
    const questions = [
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

    const { description } = await inquirer.prompt(questions);
    return description;
}

const listHomeworkDelete = async( homeworks = [] ) => {
    
    const choices = homeworks.map( (homework, i ) => {
        
        const idx = `${i + 1}`.green;
        
        return {
            
            value: homework.id,
            name: `${idx} ${ homework.description }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0'.green + 'Cancelar'

    });

    const question = [
        
        {
            type: 'List',
            name: 'id',
            message: 'Borrar',
            choices

        }
  
    ]

    const { id } =  await inquirer.prompt(question);

    return id;
   
}

const confirmation = async (message) => {

    const question = [

        {
        
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);

    return ok;
}

const showListingCheckList = async( homeworks = [] ) => {
    
    const choices = homeworks.map( (homework, i ) => {
        
        const idx = `${i + 1}`.green;
        
        return {
            
            value: homework.id,
            name: `${idx} ${ homework.description }`,
            checked: ( homework.completedIn ) ? true : false
        }
    });

    const question = [
        
        {
            type: 'checkBox',
            name: 'ids',
            message: 'Selecciones',
            choices

        }
  
    ]

    const { ids } =  await inquirer.prompt(question);

    return ids;
   
}



module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listHomeworkDelete, 
    confirmation,
    showListingCheckList
}