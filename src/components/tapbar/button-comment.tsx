import { useState } from 'react';

export default function ButtonComment() {
  const [comments, setComments] = useState(0);

  return (
    <button
      type="button"
      className="tapbar_item"
      onClick={() => setComments((count) => count + 1)}
    >
      <span className="hidden">Добавить комментарий</span>
      <img src="/comment.svg" alt="Иконка комментарий" />
      {comments ? <span>{comments}</span> : <></>}
    </button>
  );
}
