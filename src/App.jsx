import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <ColorGame />
    </div>
  );
}

function ColorGame() {
  let [colors, setColors] = useState(["crimson", "orange", "aqua"]);
  let [color, setColor] = useState("");
  // let [color, setColor] = useState("purple");
  let styles = {
    background: color,
  };
  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <button onClick={() => setColors([...colors, color])}>Add Color</button>
      {colors.map((clr) => (
        <ColorChange col={clr} />
      ))}
    </div>
  );
}

function ColorChange({ col }) {
  let styling = {
    width: "177px",
    height: "25px",
    background: col,
    marginTop: "5px",
    marginBottom: "5px",
  };
  return <div style={styling}></div>;
}
