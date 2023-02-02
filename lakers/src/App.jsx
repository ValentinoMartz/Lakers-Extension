import { useState } from "react";
import { games } from "./json/games.json";
import "./App.css";

function App() {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const currentDate = new Date().toLocaleDateString("es-ES", options);
  const tomorrow = new Date(
    Date.now() + 24 * 60 * 60 * 1000
  ).toLocaleDateString("es-ES", options);

  let match;
  let nextMatch;
  games.forEach((game) => {
    if (game.day === currentDate) match = game;
    if (game.day === tomorrow) nextMatch = game;
  });

  return (
    <div className="App flex w-[100%] m-auto  justify-center flex-wrap overflow-hidden text-[#fdbb23]">
      {match ? (
        <div className="bg-[#552085] border-4 border-[#fdbb23] text-2xl py-4 px-6 gap-5">
          <h4 className="mb-1 whitespace-nowrap">Game day:</h4>
          <h4 className="mb-1">{match.day}</h4>
          <h4 className="mb-1 whitespace-nowrap">{match.time}</h4>
          <h4 className="mb-1">{match.against}</h4>
        </div>
      ) : nextMatch ? (
        <div className="bg-[#552085] border-4 border-[#fdbb23] text-2xl py-4 px-6  gap-5">
          <h4 className="mb-1 whitespace-nowrap">Tomorrow:</h4>
          <h4 className="mb-1">{nextMatch.day}</h4>
          <h4 className="mb-1 whitespace-nowrap">{nextMatch.time}</h4>
          <h4 className="mb-1">{nextMatch.against}</h4>
        </div>
      ) : (
        <h1 className="bg-[#552085] border-4 border-[#fdbb23] text-2xl py-4 px-6  gap-5">
          No games today or tomorrow
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
