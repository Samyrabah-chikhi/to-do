"use client";
import React from "react";

interface NavBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ search, setSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target != null) {
      setSearch(e.target.value);
    }
  };

  return (
    <nav className="bg-zinc-800 w-full h-[18vh] shadow-xl">
      <ul className="flex flex-col items-center h-full">
        <li className="flex items-center justify-center h-[60%]">
          <h1 className="font-bold my-2 text-white text-4xl">Notes</h1>
        </li>
        <li className="mb-2 w-full h-[50%] max-w-sm rounded-lg border flex items-center justify-center">
          <input
            className="text-black w-full h-full rounded-lg border caret-black"
            onChange={handleChange}
            value={search}
            type="text"
            placeholder="recherche d'une note"
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
