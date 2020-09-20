import PropTypes from 'prop-types';

export const TodoShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  isCompleted: PropTypes.bool,
});

export const TodosShape = PropTypes.shape({
  pending: PropTypes.arrayOf(TodoShape),
  completed: PropTypes.arrayOf(TodoShape),
});
