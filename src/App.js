import React from 'react';
import Counter from './Counter';
import LoginForm from './LoginForm';
import NotFound from './NotFound';

const App = () => {
  const onSubmit = () => {};
  return (
    <div>
      <div>learn react</div>
      <NotFound path="/" />
      <LoginForm onSubmit={onSubmit} />
      <Counter />
    </div>
  );
};

export default App;
