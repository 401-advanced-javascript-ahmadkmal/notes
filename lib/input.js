'use strict';
const minimist = require('minimist');

// function Input() {
//     // console.log('this is the row argv', process.argv, process.argv.slice(2));
//     const argv = minimist(process.argv.slice(2));
//     // console.log('minimist()', argv);
//     this.action=this.actionValedator(argv[Object.keys(argv)[1]]);
//     // this.action=argv[Object.keys(argv)[1]];
//     this.payload=this.add(argv.a || argv.add)||'undefined';
//   }
//   Input.prototype.add = function (msg) {
//       if (msg){
//         // console.log('Adding Note:',msg)
//         this.action='add';
//         return msg;
//       }else{
//         // console.log('invaled Note!')
//         this.action='add';
//         return null;
//       }
//   };
//   Input.prototype.actionValedator = function (action) {
//     const vaildaction = /a|add/i;
//     if (vaildaction.test(action)) {
//     return action;
//     }
//     console.log('invalid command');
//     return null;

//   };


  class Input{
      constructor(){
        const argv = minimist(process.argv.slice(2));
        console.log('the input',argv);
        this.action=this.actionValedator(Object.keys(argv)[1]);
        this.payload=this.add(argv.a || argv.add)||'undefined';
        this.category=argv.category||'non';
        this.id=argv.delete;
      }
      add (msg) {
          
        if (this.action==='d'||this.action==='add'){
          console.log('Adding Note:',msg)
          this.action='add';
          return msg;
        }else{
          // console.log('invaled Note!')
        //   this.action='add';
          return null;
        }
    };
    actionValedator (action) {
        const vaildaction = /a|add|delete|list/i;
        console.log('this is action',action)
        if (vaildaction.test(action)) {
            console.log('this is action',action)
        return action;
        }
        console.log('invalid command');
        return null;
    
      };
  }
  module.exports = Input;