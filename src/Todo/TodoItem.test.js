import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoForm';

describe('<TodoItem />', () => {
  const initialTodo = {
    id: 1,
    text: 'first todo item',
    done: false,
  };
  const commonTestCode = (props = {}) => {
    const initialProps = { todo: initialTodo };
    const utils = render(<TodoItem {...initialProps} {...props} />);
    const { getByText } = utils;

    const todo = props.todo || initialProps.todo;

    const todoText = getByText(todo.text);
    const completeButton = getByText('완료');
    return {
      ...utils,
      todoText,
      completeButton,
    };
  };

  it('render todoText and completeButton', () => {
    const { todoText, completeButton } = commonTestCode();

    expect(todoText).toBeTruthy();
    expect(completeButton).toBeTruthy();
  });
});
