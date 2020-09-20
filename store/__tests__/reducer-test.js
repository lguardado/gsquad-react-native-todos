import reducer from '../reducer';
import ACTIONS from '../actions';

describe('Test reducer', () => {
  describe('Clear completed todos', () => {
    let INITIAL_STATE = {
      pending: [],
      completed: [
        {name: 'foo', isCompleted: true, id: 'bar'},
        {name: 'foo', isCompleted: true, id: 'baz'},
      ],
    };

    let NEW_STATE = reducer(INITIAL_STATE, {type: ACTIONS.CLEAR_COMPLETED});
    it('should have an empty completed array', () => {
      expect(NEW_STATE.completed).toHaveLength(0);
    });
  });

  describe('Toggle todos', () => {
    it('should move 1 completed todo back to pending', () => {
      let todo1 = {name: 'foo', isCompleted: true, id: 'bar'};
      let todo2 = {name: 'foo', isCompleted: true, id: 'baz'};
      const INITIAL_STATE = {
        pending: [],
        completed: [todo1, todo2],
      };
      const NEW_STATE = reducer(INITIAL_STATE, {
        type: ACTIONS.TOGGLE_TODO,
        payload: todo1,
      });
      expect(NEW_STATE.pending).toHaveLength(1);
      expect(NEW_STATE.completed).toHaveLength(1);
    });

    it('should move 1 pending todo to completed', () => {
      let todo1 = {name: 'foo', isCompleted: false, id: 'bar'};
      let todo2 = {name: 'foo', isCompleted: true, id: 'baz'};
      const INITIAL_STATE = {
        pending: [todo1],
        completed: [todo2],
      };
      const NEW_STATE = reducer(INITIAL_STATE, {
        type: ACTIONS.TOGGLE_TODO,
        payload: todo1,
      });
      expect(NEW_STATE.pending).toHaveLength(0);
      expect(NEW_STATE.completed).toHaveLength(2);
    });
  });

  describe('Add new todos', () => {
    const name = 'foo';
    const INITIAL_STATE = {
      pending: [],
      completed: [],
    };
    const NEW_STATE = reducer(INITIAL_STATE, {
      type: ACTIONS.ADD_TODO,
      payload: name,
    });

    it('should have a pending item in pending state', () => {
      expect(NEW_STATE.pending[0].isCompleted).toBeFalsy();
    });

    it('should add 1 todo with the specified name', () => {
      expect(NEW_STATE.pending[0].name).toEqual(name);
    });

    it('should have 1 pending item and 0 completed items', () => {
      expect(NEW_STATE.pending).toHaveLength(1);
      expect(NEW_STATE.completed).toHaveLength(0);
    });
  });
});
