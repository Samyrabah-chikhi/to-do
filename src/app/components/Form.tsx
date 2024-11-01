import React from "react";

interface FormProps {
  setVisible: (visible: boolean) => void;
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  addNote: () => void;
}

const Form: React.FC<FormProps> = ({ setVisible, note, setNote, addNote }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };
  return (
    <div className="absolute inset-0 z-10 bg-gray-800 bg-opacity-90 p-4 flex flex-col justify-center items-center">
      <h2 className="text-orange-800 mb-4 text-3xl font-bold">
        Ajouter une note
      </h2>
      <input
        value={note}
        onChange={handleChange}
        type="text"
        placeholder="Enter your note"
        className="rounded-lg p-2 w-3/4 h-[20%] mb-2 caret-black text-black"
      />
      <div className="flex justify-center flex-row w-full">
        <button
          onClick={addNote}
          className="mx-4 mt-2 bg-orange-500 p-3 rounded"
        >
          Ajouter
        </button>
        <button
          onClick={() => setVisible(false)}
          className="mx-4 mt-2 bg-red-500 p-3 rounded"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Form;
