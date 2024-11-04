import { useState } from "react";

function App() {
  const [color, setcolor] = useState("violet");

  return (
    <div
      className="w-full h-screen duration-200  "
      style={{ backgroundColor: color }}
    >
      <h2 className=" fixed flex flex-wrap justify-center top-64 text-3xl text-emerald-950 inset-x-96 uppercase ">
        color-changer project
      </h2>
      <div className="fixed flex flex-wrap  justify-center bottom-20 inset-x-12">
        <div className=" bg-slate-500 flex flex-wrap justify-center gap-3 px-5 py-2 shadow-lg  rounded-3xl ">
          <button
            onClick={() => setcolor("red")}
            className="rounded-full  px-4 py-3 uppercase shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setcolor("green")}
            className="rounded-full  px-4 py-3 uppercase shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="rounded-full  px-4 py-3 uppercase shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setcolor("gray")}
            className="rounded-full  px-4 py-3 uppercase shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
