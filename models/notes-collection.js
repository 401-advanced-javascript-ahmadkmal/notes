'use strict';

const noteModel = require('./note-schema.js');

class Note {
    constructor() {}
    create(obj) {
        console.log(obj)
      const newRecord = new noteModel(obj);
      return newRecord.save();
    }
    get(_id) {
        if (_id) {
          return noteModel.findOne({ _id });
        } else {
          return noteModel.find({});
        }
      }
    update(_id, obj) {
      return noteModel.findByIdAndUpdate(_id, obj, { new: true });
    }
    delete(_id) {
      return noteModel.findByIdAndDelete(_id); // return the record
      // return noteModel.findByIdAndRemove(_id); // return something?
    }
}
module.exports = new Note();