import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#3498db"); // Elegant blue

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#e74c3c")} // Elegant red
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >
            Sunset
          </button>
          <button
            onClick={() => setColor("#f39c12")} // Elegant orange
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >
            Tangerine
          </button>
          <button
            onClick={() => setColor("#2ecc71")} // Elegant green
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >
            Minty Fresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;