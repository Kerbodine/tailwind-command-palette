import React, { useEffect, useState } from "react";
import CommandPalette from "./components/CommandPalette";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const generateList = async () => {
      const results = await fetch("https://randomuser.me/api/?results=48");
      const data = await results.json();
      const formattedData = data.results.map((result, index) => {
        return {
          id: index,
          title: `${result.name.first} ${result.name.last}`,
        };
      });
      setItems(formattedData);
    };
    generateList();
  }, []);

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
