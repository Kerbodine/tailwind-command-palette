import React, { useState, useEffect, Fragment } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { BiSearch } from "react-icons/bi";

const CommandPalette = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredItems = query
    ? items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  useEffect(() => {
    const onKeydown = (event) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog onClose={setIsOpen} className="fixed inset-0 pt-[25vh]">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-zinc-400/50" />
        </Transition.Child>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="px-4">
            <Combobox
              onChange={(item) => {
                console.log(item.title);
                setIsOpen(false);
              }}
              as="div"
              className="relative bg-white max-w-xl mx-auto rounded-2xl shadow-lg ring-1 ring-black/5 p-2"
            >
              <div className="flex items-center px-3 gap-2 bg-gray-100 rounded-lg">
                <BiSearch className="h-6 w-6 text-gray-500" />
                <Combobox.Input
                  onChange={(event) => {
                    setQuery(event.target.value);
                  }}
                  className="w-full bg-transparent border-0 focus:outline-none text-gray-700 placeholder-gray-400 h-10"
                  placeholder="Search..."
                />
              </div>
              {filteredItems.length > 0 ? (
                <p className="text-xs uppercase font-bold tracking-tight mx-2 mt-3 mb-1 text-gray-400">
                  All lists
                </p>
              ) : (
                <p className="text-sm p-2 pb-1 text-gray-500">
                  No Results Found
                </p>
              )}
              <Combobox.Options
                static
                className="text-sm max-h-56 overflow-y-auto"
              >
                {filteredItems.map((item) => (
                  <Combobox.Option key={item.id} value={item}>
                    {({ active }) => (
                      <div
                        className={`${
                          active && "bg-gray-100"
                        } px-2 py-1.5 rounded-lg font-medium text-gray-700`}
                      >
                        {item.title}
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Combobox>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default CommandPalette;
