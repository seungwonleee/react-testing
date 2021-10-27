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
    const { getByDisplayValue, getByPlaceholderText } = render(<TodoForm />);
    const input = getByPlaceholderText('할 일을 입력하세요.');

    fireEvent.change(input, { target: { value: 'onChange test' } });

    expect(input).toHaveAttribute('value', 'onChange test');
  });
});
