import React, { useState } from "react";

const Grid = [...Array(16).keys()];

function GridTask() {
  const [matrix, setMatrix] = useState([]);
  const handleClick = (id) => {
    if (matrix.length >= 2) {
      const findCurIndex = matrix.indexOf(id);
      if (findCurIndex > -1 && matrix.length <= 2) {
        return;
      } else {
        const splicedVal = [...matrix].splice(findCurIndex, 1);
        setMatrix([...splicedVal, id]);
      }
    } else if (matrix.length < 2) {
      setMatrix([...matrix, id]);
    }
  };

  return (
    <div className="App">
      <div className="matrix">
        {Grid.map((item, key) => (
          <div
            key={item}
            style={{
              backgroundColor: matrix.indexOf(item) > -1 ? "red" : "blue",
            }}
            onClick={() => handleClick(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default GridTask;
