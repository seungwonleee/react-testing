import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
  it('todo form has text input and submit button', () => {
    const { getByText, getByPlaceholderText } = render(<TodoForm />);
    getByPlaceholderText('할 일을 입력하세요.'); // todo 입력 input 확인
    getByText('추가'); // 추가 button 확인
  });

  it('input text changes', () => {
    const { getByPlaceholderText } = render(<TodoForm />);
    const input = getByPlaceholderText('할 일을 입력하세요.');

    fireEvent.change(input, { target: { value: 'onChange test' } });

    expect(input).toHaveAttribute('value', 'onChange test');
  });

  it('todo submit and clear input text', () => {
    const onInsert = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <TodoForm onInsert={onInsert} />
    );

    const inputText = getByPlaceholderText('할 일을 입력하세요.');
    const submitButton = getByText('추가');

    fireEvent.change(inputText, {
      target: {
        value: 'onChange test',
      },
    });

    fireEvent.click(submitButton);
    expect(onInsert).toBeCalledWith('onChange test'); //onInsert 가 'onChange test' 파라미터를 호출했어야한다.
    expect(inputText).toHaveAttribute('value', ''); // input의 text가 비어져있어야 한다.
  });
});
