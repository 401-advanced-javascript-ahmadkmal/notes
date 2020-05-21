'use strict';
require('@code-fellows/supergoose');

const Note = require('../models/notes-collection.js');
describe('Note Model', () => {
  it('create() a new Note item', () => {
    const NoteItem = { category: 'test Note', text: 'test text' };
    return Note.create(NoteItem).then((record) => {
      Object.keys(NoteItem).forEach((key) => {
        expect(record[key]).toEqual(NoteItem[key]);
      });
    });
  });
  it('read() Note items', () => {
    const NoteItem = {category: 'test Note', text: 'test text' };
    const expectedItem = { category: 'test Note', text: 'test text' };
    return Note.create(NoteItem).then((record) => {
      return Note.get(record._id).then((item) => {
        Object.keys(NoteItem).forEach((key) => {
          expect(item[key]).toEqual(expectedItem[key]);
        });
      });
    });
  });
});