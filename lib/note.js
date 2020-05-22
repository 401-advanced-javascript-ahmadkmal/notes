'use strict';

// function Note(object){
//     this.action=object.action;
//     this.payload=object.payload;
// }
// Note.prototype.execute=function(){
// if (this.action==='add'){
// this.add()
// }
// }
// Note.prototype.add=function(){
//     // console.log();
//     function added(payload){
//         this.id=Math.floor(Math.random()*100000000);
//         this.note=payload;
//     }
//     let msg = new added(this.payload)
//     console.log('Adding Note:',msg.note);

// }


const mongoose = require('mongoose');
const notedb = require('../models/note-schema.js');
const noteC = require('../models/notes-collection.js');
// console.log('before connect',process.env.MONGODB_URI);

// console.log('Adding Note:',msg.text);

class Note{
    constructor(object){
        // console.log('this input',object);
        // console.log('this category',object.category);


        this.action=object.action;
        this.category=object.category;
        this.text=object.payload;
        this.id=object.id;
        this.execute();
    };
    execute(){
        if (this.action==='add'){
            // console.log('insude excute');
            this.add();
        }
        if (this.action==='list'){
            // console.log('insude excute list');
            this.list();
        }
        if (this.action==='delete'){
            // console.log('insude excute delete');
            this.delete();
        }
    }
    add(){
    //   console.log(this.category);
            let added={
                // this.id=Math.floor(Math.random()*100000000);
                category:this.category,
                text:this.text,
               
            }
            // let msg = new added(this.Note)
            // console.log(added);
           
            //   console.log('after connect',process.env.MONGODB_URI);
              const mongo = async (noteItem) => {
                // console.log('inside mongo');
                // const item = new notedb(noteItem);
                const item = await noteC.create(noteItem);
                console.log('note Created', item);
                const oneNote = await noteC.get(item.id);
                // console.log('One note', oneNote);
                // const allFood = await Food.find({});
                // console.log('All Food', allFood);
                mongoose.disconnect();
              }
            mongo(added);
        }
    delete(){
        // notedb.remove({ _id:this.id}, function(err) {
        //     if (!err) {
        //         console.log('deleted Note', this.id);
        //     }
        //     else {
        //         console.log('deleted Note failed' );
        //     }
        // });
        let del=async()=>{
        await noteC.delete(this.id);
        console.log('deleted Note', this.id);
        mongoose.disconnect();
        }
        del();
    }
    list(){
        let lised=async()=>{
        const allNote = await noteC.get();
        console.log('All Note', allNote);
        mongoose.disconnect();
    }
    lised();
    }
}
module.exports = Note;