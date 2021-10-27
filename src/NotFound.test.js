import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('renders header', () => {
    const { getByText } = render(<NotFound path="/" />);
    const header = getByText('Page Not Found');
    expect(header).toBeInTheDocument();
  });
  it('renders content', () => {
    const { getByText } = render(<NotFound path="/" />);
    const content = getByText(/^해당 페이지/);
    expect(content).toHaveTextContent('해당 페이지(/)를 찾을 수 없습니다.');
  });
  it('renders img', () => {
    const { getByAltText } = render(<NotFound path="/" />);
    const alt = getByAltText('404');
    expect(alt).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif'
    );
  });
});
