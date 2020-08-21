import React, { useState } from "react";
import Grid from "./Grid";
import useTimer from "./hooks/useTimer";
import "./App.css";

const createGrid = (cols, rows, tiles) => {
  let allTiles = [...tiles, ...tiles];
  let currentTiles = [...allTiles].sort(function () {
    return 0.5 - Math.random();
  });
  let grid = Array.from(Array(rows), () => new Array(cols));
  let currentRow = 0;
  let currentCol = 0;

  do {
    const randomTile = Math.floor(Math.random() * (currentTiles.length - 1));
    grid[currentRow][currentCol] = currentTiles[randomTile];

    currentCol++;

    if (currentCol >= cols) {
      currentRow++;
      currentCol = 0;
    }

    currentTiles.splice(randomTile, 1);
  } while (currentTiles.length > 0);

  console.log(grid);

  return grid;
};

const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const grid = createGrid(6, 6, tiles);
const pointsPerMatch = 100;
const minPoints = tiles.length;
const maxPoints = pointsPerMatch * tiles.length;

function App() {
  const { timeString, seconds, start, stop, isRunning } = useTimer();
  const [finished, setFinished] = useState(false);
  const [scores, setScores] = useState([]);

  const onWin = (misses) => {
    stop();

    const finalPoints = Math.max(minPoints, maxPoints - seconds - misses * 10);

    setScores([
      {
        time: timeString,
        points: finalPoints,
      },
      // ...scores,
    ]);
  };

  const onWinAfter = () => {
    setFinished(true);
  };

  return (
    <div className={`App ${isRunning ? "isRunning" : ""}`}>
      {finished ? (
        <div className="App-finished">
          {scores.map((score, idx) => (
            <div key={idx}>
              <p>Time</p>
              <h2>{score.time}</h2>
              <p>Points</p>
              <h2>{score.points}</h2>
            </div>
          ))}
        </div>
      ) : (
        <Grid
          grid={grid}
          tiles={tiles}
          disabled={!isRunning}
          onWin={onWin}
          onWinAfter={onWinAfter}
        />
      )}

      <div className="App-top">
        {isRunning && <div className="App-timer">{timeString}</div>}
      </div>
      <div className="App-bottom">
        {!isRunning && (
          <div className="App-start">
            <button
              onClick={() => {
                start();
                setFinished(false);
              }}
            >
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
