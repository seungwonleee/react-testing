import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  it('enables button when both email and password are entered', () => {
    const { getByText, getByLabelText } = render(
      <LoginForm onSubmit={() => null} />
    );

    const button = getByText('로그인');
    const email = getByLabelText('이메일');
    const password = getByLabelText('비밀번호');

    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: 'user@test.com' } });
    fireEvent.change(password, { target: { value: 'Test1234' } });

    expect(button).toBeEnabled();
  });
  it('submits form when buttion is clicked', () => {
    const obSubmit = jest.fn((event) => event.preventDefault());
    const { getByText, getByLabelText } = render(
      <LoginForm onSubmit={obSubmit} />
    );

    const button = getByText('로그인');
    const email = getByLabelText('이메일');
    const password = getByLabelText('비밀번호');

    fireEvent.change(email, { target: { value: 'user@test.com' } });
    fireEvent.change(password, { target: { value: 'Test1234' } });

    fireEvent.click(button);

    expect(obSubmit).toHaveBeenCalledTimes(1);
  });
});
