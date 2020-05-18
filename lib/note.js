'use strict';

function Note(object){
    this.action=object.action;
    this.payload=object.payload;
}
Note.prototype.execute=function(){
if (this.action==='add'){
this.add()
}
}
Note.prototype.add=function(){
    // console.log();
    function added(payload){
        this.id=Math.floor(Math.random()*100000000);
        this.note=payload;
    }
    let msg = new added(this.payload)
    console.log('Adding Note:',msg.note);

}
module.exports = Note;