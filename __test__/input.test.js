'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
      _:'',
    add: 'note to be added',
    category : "bye"
  };
});
describe('INPUT MODULE', () => {
  describe('validateor()', () => {
    // it('retern the same value if input equal d ', () => {
    //   const input = new Input("--d hi");
    //   expect(input.actionValedator('d')).toEqual('d');
    // });
    it('retern the same value if input equal add', () => {
        const input = new Input();
        expect(input.actionValedator('add')).toEqual('add');
    });
    it('should return correct action and payload', () => {
      const input = new Input();
      expect(input.action).toEqual('add');
      expect(input.payload).toEqual('note to be added');
    });
    it('should return (invalid command) if the action is invaled', () => {
        const input = new Input();
        expect(input.actionValedator('hi')).toEqual(null);
      });
  });
 

});