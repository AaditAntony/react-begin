import GameCard from "./components/GameCard";

function App(){
  const games=["God of war", "Hades", "Hollow Knight"];
  return (
    <div>
      <h1> gameshelf</h1>
      <p> my favourate gametracker</p>
     {games.map((game)=><GameCard key={game} title={game} />)}
      
    </div>
  )
}
export default App;