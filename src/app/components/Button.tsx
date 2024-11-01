"use client";
import React, { useEffect, useState } from "react";

interface ButtonProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Button = ({ setVisible }: ButtonProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 850);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const plus = (
    <img
      className="invert relative"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAJdJREFUWEftllEOgCAMQ8vJ9GbqzfRmuoQPfqDD8DFClxBiSrB5G4OEYJGC+YEMsYyI0JKEdgA2LO48GIiqPqKGTgBH/sP1zfb9O2SIoRMhEVrulJVNr5Z+W7Nl8XE0xmbzZKesbHqsHr16s3lOZyhcyjxp0F3GKImQCDECTFcNMULhHvnMcJfO7rKuzUYsliFGUYSmI/QC9RUwJcvCMLAAAAAASUVORK5CYII="
      alt="Plus Icon"
    />
  );

  return (
    <div className="bg-zinc-700 flex justify-end">
      <button
        onClick={() => setVisible(true)}
        type="button"
        className="fixed bottom-4 right-8 max-w-[10%] text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-orange-900"
      >
        {isSmallScreen ? plus : "Ajouter"}
      </button>
    </div>
  );
};
