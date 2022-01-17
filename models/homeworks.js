const Homework = require("./homework");

class Homeworks {
   
     _list= {};
   
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

    createHomework(description = '') {
        
        const homework = new Homework(description)

        this._list[homework.id] = homework;
    }

}



module.exports = Homeworks;