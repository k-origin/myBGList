import "../styles/main.scss"

function GameList() {

  const games = [
    {id: 1, name: "아그리콜라", genre: "전략" },
    {id: 2, name: "할리갈리", genre: "파티" }
  ]

  return (
    <ul className="game-list">
      {games.map((game) => (
        <li key={game.id}>
          {game.name}<br/>
          {game.genre}
        </li>
      ))}
    </ul>
  )
}

export default GameList