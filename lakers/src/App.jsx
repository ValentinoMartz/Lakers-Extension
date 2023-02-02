import { useState } from "react";
import { games } from "./json/games.json";
import "./App.css";

function App() {
  //const [checker, setChecker] = useState(false);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const currentDate = new Date().toLocaleDateString("es-ES", options);
  const tomorrow = new Date(
    Date.now() + 24 * 60 * 60 * 1000
  ).toLocaleDateString("es-ES", options);
  console.log(tomorrow);
  const fakeDate = "2/2/2023";
  console.log(games[0].day);
  ///let checker = false;

  let match;
  let nextMatch;
  games.forEach((game) => {
    if (game.day === currentDate) match = game;
    if (game.day === fakeDate) nextMatch = game;
  });
  console.log("🚀 ~ file: App.jsx:13 ~ App ~ match", match);
  console.log("🚀 ~ file: App.jsx:13 ~ App ~ nextMatch", nextMatch);

  return (
    <div className="App flex h-screen justify-center items-center text-yellow-400">
      {match ? (
        <div className="bg-purple-900 border-4 border-yellow-600 text-3xl py-4 px-24 flex gap-5">
          <h4>Game day:</h4>
          <h4>{match.day}</h4>
          <h4>{match.time}</h4>
          <h4>{match.against}</h4>
        </div>
      ) : nextMatch ? (
        <div className="bg-purple-900 border-4 border-yellow-600 text-3xl py-4 px-24 flex gap-5">
          <h4>Tomorrow:</h4>
          <h4>{nextMatch.day}</h4>
          <h4>{nextMatch.time}</h4>
          <h4>{nextMatch.against}</h4>
        </div>
      ) : (
        <h1 className="bg-yellow-400 border border-purple-600 text-3xl font-bold">
          No games today
        </h1>
      )}
    </div>
  );
}

export default App;

/* 
 return (
          <div
            className="border border-purple-600 flex bg-yellow-400 justify-center space-x-28 mb-3"
            key={game.day}
          >
            <h2>{game.day}</h2>
            <h2>{game.time}</h2>
            <h2>{game.against}</h2>
          </div>
        );
*/
