import React, { useState, useCallback } from 'react';

const TodoForm = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      if (value.length === 0) {
        return alert('글자를 입력해주세요.');
      }
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value]
  );
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
