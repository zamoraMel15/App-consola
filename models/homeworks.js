const Homework = require("./homework");

class Homeworks {
   
     _list= {
       'abc': 123

     };
   
    get listArr() {
       
      const list = [];
      
      Object.keys(this._list).forEach( key => {
        const homework = this._list[key];
        list.push(homework);
      });
      
      return list;
    }

    constructor() {
      this._list = {};
    }

    deleteHomework(id ='') {
       
      if( this._list[id] ) {
        
        delete this._list[id]
      }
    }

    loadTasksFomArray( homeworks = [] ) {

      homeworks.forEach( homework => {

        this._list[homework.id] = homework;
      
      });
    }

    createHomework(description = '') {
        
        const homework = new Homework(description)

        this._list[homework.id] = homework;
    }

    fullListing() {
     
      console.log();
      this.listArr.forEach((homework, i) => {

          const idx = `${i + 1}`.green;
          const { description, completedIn } = homework;
          const stated = ( completedIn ) ? 'Completada'.green : 'Pendiente'.red;

          console.log(`${ idx } ${ description } :: ${ stated }`);
    
      });
    }

    listPendingCompleted( completed = true) {
       
      console.log()
       
       let counter = 0;
       
       this.listArr.forEach( homework => {

        const { description, completedIn } = homework;
        
        const stated = (completedIn) ? 'Completada'.green : 'Pendiente'.red
      
        if ( completed ) {
          //Mostrar completadas

          if ( completedIn ) {
              counter += 1;
              console.log(`${(counter + '.').green} ${ description } :: ${completedIn.green}`)
          }
      } else {
        // Mostrar Pendientes

        if (!completedIn) {
          counter +=1
          console.log(`${(counter + '.').green} ${ description } :: ${stated}`)

        }
      }
      
    })

  }

  toggleCompleted (ids = []) {
     
    ids.forEach( id => {
      
      const homework = this._list[id];

      if(!homework.completedIn) {
        
        homework.completedIn = new Date().toISOString()
      }
    
    });

    this.listArr.forEach( homework => {

      if (!ids.includes(homework.id)) {
        
        this._list[homework.id].completedIn = null;
      }
    })

  }

}



module.exports = Homeworks;