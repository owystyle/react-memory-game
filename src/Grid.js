import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import "./Grid.css";

function Grid(props) {
  const { grid, tiles, disabled, onWin, onWinAfter } = props;
  const [selected, setSelected] = useState({});
  const [matched, setMatched] = useState({});
  const [misses, setMisses] = useState(0);

  useEffect(() => {
    if (Object.keys(selected).length === 2) {
      const matchString =
        Object.values(selected)[0] === Object.values(selected)[1];

      if (matchString) {
        setMatched({
          ...matched,
          ...selected,
        });
        setSelected({});
      } else {
        setMisses(misses + 1);
      }
    }

    if (Object.keys(matched).length === tiles.length * 2) {
      onWin(misses);
      setTimeout(() => {
        onWinAfter();
      }, 800);
    }
  }, [selected, matched]);

  const setSelectedTile = (row, col) => {
    if (selected[`${row}-${col}`]) return;

    if (Object.keys(selected).length < 2) {
      setSelected({
        ...selected,
        [`${row}-${col}`]: grid[row][col],
      });
    } else {
      setSelected({
        [`${row}-${col}`]: grid[row][col],
      });
    }
  };

  const isSelected = (row, col) => {
    return selected[`${row}-${col}`];
  };

  const isMatched = (row, col) => {
    return matched[`${row}-${col}`];
  };

  return (
    <div className={`Grid ${disabled ? "isDisabled" : ""}`}>
      {grid.map((row, rowIdx) => (
        <div className="Grid-row" key={rowIdx}>
          {row.map((tile, colIdx) => (
            <Tile
              key={colIdx}
              selected={isSelected(rowIdx, colIdx)}
              matched={isMatched(rowIdx, colIdx)}
              onClick={() => setSelectedTile(rowIdx, colIdx)}
            >
              {tile}
            </Tile>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
