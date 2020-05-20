'use strict';
const Note = require('../lib/note.js');

jest.spyOn(global.console, 'log');

describe('note Module', () => {
  it('does nothing when note() is called with invalid options', () => {
    const note = new Note();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('logs options when fetch() with options', () => {
    const note = new Note({
        action:'add',
        payload:'add this note please'
    });

    expect(console.log).toHaveBeenCalled();
  });
});