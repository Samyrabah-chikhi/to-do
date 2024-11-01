import React from "react";

interface NotesPromps {
  Notes: string[];
  deleteItem: (index: number) => void;
  search: string;
}

export default function Notes({
  Notes,
  deleteItem,
  search,
}: NotesPromps): JSX.Element {
  const notes = Notes.filter((note) =>
    note.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <>
      <ul className="flex items-center flex-col w-full">
        {notes.map((note, index) => {
          return (
            <li
              className="flex justify-between items-center mt-4 w-full max-w-[60%] py-[1.5%] border border-slate-600 rounded-lg bg-slate-600"
              key={index}
            >
              <span className="scrollable-container w-full ml-8 mr-2 overflow-x-auto whitespace-nowrap">
                {note}
              </span>
              <button
                className="mr-6 text-zinc-800 p-1"
                onClick={() => deleteItem(index)}
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAP5JREFUWEftmM8KAVEYxX8je48hys4D2MobeAZ2ykZhoZQlL2GvbG1tLch72FlwpyQxnHtnqEnfV3f1/Tlnzndmuk1EziLKGR/+glAJ2AJloe4RqAOnkC2EKlRwICtHqOkJsgZawMWzPnhlU6DvO/xWNwEGvj1JCo3cEw19B2SsG7v+GO8eRuhJUS+FMm4hW7t6yxpAfL4ZGzczPomhCP3C4C9rUqZ+zBshWxlgHlKfCFPIFFIKqLx5yBRSCqi8ecgUUgqofCYPdYC5QgjMd4FF2jt1BdgHAqryKnBISyjua7sfBj2gBhQV2pv8GdgBM2D5aYa6wqbET99mhJR2Vx9YPiWiuihNAAAAAElFTkSuQmCC" />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
