import React from "react";
import "./Tile.css";

import icon01 from "./theme/icons/food_34_t1.png";
import icon02 from "./theme/icons/food_07_t1.png";
import icon03 from "./theme/icons/food_53_t1.png";
import icon04 from "./theme/icons/36_t1.png";
import icon05 from "./theme/icons/34_t1.png";
import icon06 from "./theme/icons/16_t1.png";
import icon07 from "./theme/icons/119_t1.png";
import icon08 from "./theme/icons/food_42_t1.png";
import icon09 from "./theme/icons/food_09_t.png";
import icon10 from "./theme/icons/food_11_t.png";
import icon11 from "./theme/icons/food_17_t.png";
import icon12 from "./theme/icons/food_12_t1.png";
import icon13 from "./theme/icons/food_03_t.png";
import icon14 from "./theme/icons/food_29_t.png";
import icon15 from "./theme/icons/food_22_t.png";
import icon16 from "./theme/icons/food_24_t.png";
import icon17 from "./theme/icons/food_44_t1.png";
import icon18 from "./theme/icons/food_45_t.png";

const icons = {
  "1": icon01,
  "2": icon02,
  "3": icon03,
  "4": icon04,
  "5": icon05,
  "6": icon06,
  "7": icon07,
  "8": icon08,
  "9": icon09,
  "10": icon10,
  "11": icon11,
  "12": icon12,
  "13": icon13,
  "14": icon14,
  "15": icon15,
  "16": icon16,
  "17": icon17,
  "18": icon18,
};

function Tile(props) {
  const { selected, matched, children, onClick } = props;

  return (
    <div
      className={`Tile ${selected || matched ? "isSelected" : ""}`}
      onClick={onClick}
    >
      <div className="Tile-faces">
        <div className="Tile-face-front"></div>
        <div className="Tile-face-back">
          <img src={icons[children]} alt={children} />
        </div>
      </div>
    </div>
  );
}

export default Tile;
