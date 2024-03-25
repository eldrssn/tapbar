import { useState } from 'react';

export default function ButtonLike() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      type="button"
      className="tapbar_item"
      onClick={() => setLikes((count) => count + 1)}
    >
      <span className="hidden">Поставить лайк</span>
      <img src="/like.svg" alt="Иконка лайк" />
      {likes ? <span>{likes}</span> : <></>}
    </button>
  );
}
