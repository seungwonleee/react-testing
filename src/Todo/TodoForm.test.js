import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
  const commonTestCode = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;

    const inputText = getByPlaceholderText('할 일을 입력하세요.'); // 입력 input 확인
    const submitButton = getByText('추가'); // 추가 button 확인
    return {
      ...utils,
      inputText,
      submitButton,
    };
  };

  it('todo form has text input and submit button', () => {
    const { inputText, submitButton } = commonTestCode();
    expect(inputText).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  it('input text changes', () => {
    const { inputText } = commonTestCode();
    fireEvent.change(inputText, { target: { value: 'onChange test' } });
    expect(inputText).toHaveAttribute('value', 'onChange test');
  });

  it('todo submit and clear input text', () => {
    const onInsert = jest.fn();
    const { inputText, submitButton } = commonTestCode({ onInsert }); //props 필요시 직접 paramter로 전달

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
