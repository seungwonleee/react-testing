import React, { useState, useCallback } from 'react';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button>추가</button>
    </form>
  );
};

export default TodoForm;
