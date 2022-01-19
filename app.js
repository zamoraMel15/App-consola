require('colors');

const { inquirerMenu, 
        pause, 
        readInput, 
        listHomeworkDelete,
        confirmation,
        showListingCheckList

} = require('./helpers/inquirer');

const { safeDB,readDB  } = require('./helpers/saveFile');


const Homeworks = require('./models/homeworks');

const main = async() => {
   
    let opt = '';
    
    const homeworks = new Homeworks();

    const homeworksDB = readDB();

    if( homeworksDB ) { //cargar tareaa
        //Sí existe establecer las tareas
        homeworks. loadTasksFomArray(homeworksDB)
    }

    do {
        
        //imprime el menu
        opt = await inquirerMenu();
        
        switch(opt) {
            
            case '1':
               //crear opcion
               const description = await readInput('Descripción:');
               homeworks.createHomework(description);
            
            break;

            case '2':
               
              homeworks.fullListing();
            
              break;

            case '3': // listar completadas
               
                homeworks.listPendingCompleted(true);
              
                break;

                case '4': // listar pendientes
               
                homeworks.listPendingCompleted(false);
              
                break;


                case '5': // Completado o pendiente
               
                const ids = await showListingCheckList(homeworks.listArr);
                homeworks.toggleCompleted( ids );
                break;
            
               case '6': // Borrar tareas
               
                  const id = await listHomeworkDelete( homeworks.listArr );
                     
                    if (id !== 0) {
                        
                        const confirmationDelete = await confirmation('¿Estas seguro?');
                  
                        if( confirmationDelete ) {
                            homeworks.deleteHomework ( id);
                            console.log('Tarea borrada');
                        }
                    }
                
                    break;
        
            }

        safeDB( homeworks.listArr );
 
        await pause();
   
    } while(opt !== '0' );
    
    
}




main();