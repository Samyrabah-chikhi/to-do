import React from "react";

interface NotesPromps {
  Notes: string[];
  deleteItem: (index: number) => void;
  search: string;
}

export default function Notes({ Notes , deleteItem, search }: NotesPromps): JSX.Element {
    const notes = Notes.filter(note => note.toLowerCase().includes(search.toLowerCase().trim()))

  return (
    <>
      <ul className="flex items-center flex-col w-full">
        {notes.map((note, index) => {
          return (
            <li
              className="flex justify-between items-center mt-4 w-full max-w-[60%] py-[1.5%] border border-slate-600 rounded-lg bg-slate-600"
              key={index}
            >
            <span className="scrollable-container w-full ml-8 mr-2 overflow-x-auto whitespace-nowrap">{note}</span>
            <button className="mr-6 text-zinc-800 p-1 bg-red-600" onClick={() => deleteItem(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
