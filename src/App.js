import React from "react";
import CommandPalette from "./components/CommandPalette";

const App = () => {
  const items = [
    {
      id: 1,
      title: "Test",
    },
    {
      id: 2,
      title: "Test 2",
    },
    {
      id: 3,
      title: "Test 3",
    },
    {
      id: 4,
      title: "Test 4",
    },
    {
      id: 5,
      title: "Test 5",
    },
  ];

  return (
    <div className="grid place-items-center w-screen h-screen">
      <CommandPalette items={items} />
      <div className="flex gap-1">
        <div className="w-8 h-8 grid place-items-center text-gray-500 font-bold border-2 border-gray-200 rounded-md">
          ⌘
        </div>
        <div className="w-8 h-8 grid place-items-center text-gray-500 font-bold border-2 border-gray-200 rounded-md">
          K
        </div>
      </div>
    </div>
  );
};

export default App;
