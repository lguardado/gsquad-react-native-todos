import ACTIONS from './actions';

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...todos,
        pending: [
          ...todos.pending,
          {
            name: action.payload,
            isCompleted: false,
            // This is just for the purpose of the challenge.
            // the Id shouldn't be generated this way.
            id: Math.random().toString(),
          },
        ],
        completed: [...todos.completed],
      };
    case ACTIONS.TOGGLE_TODO:
      if (action.payload.isCompleted) {
        return {
          ...todos,
          pending: [
            ...todos.pending,
            {
              ...action.payload,
              isCompleted: false,
            },
          ],
          completed: todos.completed.filter(
            (todo) => todo.id !== action.payload.id,
          ),
        };
      }
      return {
        ...todos,
        pending: todos.pending.filter((todo) => todo.id !== action.payload.id),
        completed: [
          ...todos.completed,
          {
            ...action.payload,
            isCompleted: true,
          },
        ],
      };
    case ACTIONS.CLEAR_COMPLETED:
      return {
        ...todos,
        completed: [],
      };
  }
};

export default reducer;
