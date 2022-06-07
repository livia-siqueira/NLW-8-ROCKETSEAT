import { useEffect } from "react";
import { Widget } from "./components/Widget";
import "./global.css";

function App() {
  useEffect(() => {
    localStorage.setItem("Theme", "ligth");
  }, []);
  return (
    <div className="w-screen h-screen  dark:bg-zinc-700">
      <Widget />
    </div>
  );
}

export default App;
