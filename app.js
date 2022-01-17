require('colors');

const { inquirerMenu, 
        pause, 
        readInput  
} = require('./helpers/inquirer');

const Homeworks = require('./models/homeworks');

const main = async() => {
   
    let opt = '';
    
    const homeworks = new Homeworks();
    
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
                console.log(homeworks.listArr)
             break;
        }
 
        await pause();
   
    } while(opt !== '0' );
    
    
}




main();