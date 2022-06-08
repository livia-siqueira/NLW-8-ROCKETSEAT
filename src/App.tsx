import { useEffect } from "react";
import { Widget } from "./components/Widget";
import "./global.css";

function App() {
  return (
    <div className="w-screen h-screen  dark:bg-zinc-700">
      <Widget />
    </div>
  );
}

export default App;
