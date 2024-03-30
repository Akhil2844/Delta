import "./LudoBoard.css";
<LudoBoard className="css"></LudoBoard>;
import { useState } from "react";
export default function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });
  const [arr, setArr] = useState(["no moves"]);

  function resetblue() {
    setMoves((prevmoves) => {
      return { ...prevmoves, blue: (prevmoves.blue = 0) };
    });

    setArr(["no moves"]);
  }

  function resetRed() {
    setMoves((prevmoves) => {
      return { ...prevmoves, red: (prevmoves.red = 0) };
    });
  }

  function resetgreen() {
    setMoves((prevmoves) => {
      return { ...prevmoves, green: (prevmoves.green = 0) };
    });
  }

  function resetyellow() {
    setMoves((prevmoves) => {
      return { ...prevmoves, yellow: (prevmoves.yellow = 0) };
    });
  }

  function updateBlue() {
    // console.log(moves);
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });

    // setArr([...arr,"new Moves"])

    setArr((prevMoves) => {
      return [...prevMoves, " new Moves"];
    });
    console.log(arr);
  }

  function updateRed() {
    // console.log(moves);
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  }

  function updateGreen() {
    // console.log(moves);
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  }

  function updateYellow() {
    // console.log(moves.yellow);
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  }

  return (
    <>
      <div className="akhil">
        <h2>Game Begins</h2>
        {/*  Array in state*/}
        <p>{arr}</p>
        <p>Blue Move : {moves.blue}</p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>
        &nbsp;&nbsp;
        <button onClick={resetblue}>Reset</button>
        <p>Green Move : {moves.green}</p>
        <button onClick={updateGreen} style={{ backgroundColor: "Green" }}>
          +1
        </button>
        &nbsp;&nbsp;
        <button onClick={resetgreen}>Reset</button>
        <p>Yellow Move : {moves.yellow}</p>
        <button onClick={updateYellow} style={{ backgroundColor: "Yellow" }}>
          {" "}
          +1
        </button>
        &nbsp;&nbsp;
        <button onClick={resetyellow}>Reset</button>
        <p>Red Move : {moves.red}</p>
        <button onClick={updateRed} style={{ backgroundColor: " Red" }}>
          {" "}
          +1
        </button>
        &nbsp;&nbsp;
        <button onClick={resetRed}>Reset</button>
      </div>
    </>
  );
}
