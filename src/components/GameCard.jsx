import { useState } from "react";

function GameCard({ title }) {
  const [liked, setLiked] = useState(false);

  function toggleFavorite() {
    setLiked(!liked);
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={toggleFavorite}>
        {liked ? "❤️ Favorited" : "🤍 Add to Favorites"}
      </button>
    </div>
  );
}

export default GameCard;
