import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('<Counter />', () => {
  it('number and button', () => {
    const { getByText } = render(<Counter />);
    const number = getByText(0);
    const plusButton = getByText('+1');
    const minusButton = getByText('-1');
  });
  it('increase', () => {
    const { getByText } = render(<Counter />);
    const number = getByText(0);
    const plusButton = getByText('+1');

    fireEvent.click(plusButton);
    expect(number).toHaveTextContent(1);
  });
  it('decrease', () => {
    const { getByText } = render(<Counter />);
    const number = getByText(0);
    const minusButton = getByText('-1');

    fireEvent.click(minusButton);
    expect(number).toHaveTextContent(-1);
  });
});
