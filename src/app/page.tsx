"use client";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import { Button } from "./components/Button";
import Form from "./components/Form";

export default function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    const localNotes = localStorage.getItem("notes");
    if (localNotes) {
      try {
        const parsedNotes = JSON.parse(localNotes);
        setNotes(parsedNotes);
      } catch (error) {
        console.error("Failed to parse notes from localStorage:", error);
      }
    }
  }, []);

  const addNote = () => {
    if (note != "") {
      const Notes = [...notes, note];
      if (!localStorage) {
        return;
      }
      setNotes(Notes);
      localStorage.setItem("notes", JSON.stringify(Notes));
      setNote("");
      setIsVisible(false);
    }
  };

  const deleteItem = (index: number) => {
    const result = notes.filter((note, indexNote) => indexNote != index);
    if (!localStorage) {
      return;
    }
    setNotes(result);
    localStorage.setItem("notes", JSON.stringify(result));
  };

  return (
    <div className="bg-zinc-700 w-full h-screen flex flex-col justify-between">
      <NavBar search={search} setSearch={setSearch} />
      <div className="flex-grow overflow-auto">
        {isVisible && (
          <Form
            setVisible={setIsVisible}
            note={note}
            setNote={setNote}
            addNote={addNote}
          />
        )}
        <Notes Notes={notes} deleteItem={deleteItem} search={search} />
      </div>
      <Button setVisible={setIsVisible} />
    </div>
  );
}
