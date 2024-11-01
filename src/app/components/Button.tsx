import React from "react";

interface ButtonProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const Button = ({ setVisible }: ButtonProps) => {
  return (
    <div className="bg-zinc-700 flex justify-end">
        <button
          onClick={() => setVisible(true)}
          type="button"
          className="fixed bottom-4 right-8 max-w-[10%] text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-orange-900"
        >
          Ajouter
        </button>
    </div>
  );
};
