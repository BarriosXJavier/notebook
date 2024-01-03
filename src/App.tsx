import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
function App() {
  // notes from local storage on component mount

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(storedNotes);
  }, []);

  const [notes, setNotes] = useState<string[]>([]);
  const [currentNote, setCurrentNote] = useState("");

  const addNote = () => {
    if (currentNote.trim()) {
      const newNotes = [...notes, currentNote];
      setNotes(newNotes);
      localStorage.setItem("notes", JSON.stringify(newNotes));
      setCurrentNote("");
    }
  };

  const removeNote = (index: number) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <div
      className="relative bg-scroll cursor-text inline-block font-normal mb-2 outline-none pb-2 pl-2 pr-2 resize-none text-start text-wrap text-[16px]"
      style={{
        backgroundImage: "url(./notepad.png)",
        backgroundSize: 'auto',
        backgroundRepeat:'repeat',
        width:'100%', 
      }}
    >
      <input
        type="text"
        placeholder="Add note"
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        className="border-b border-black py-5 text-wrap w-full text-gray-900 placeholder-gray-600 placeholder:font-medium placeholder:md focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
      <Button onClick={addNote} className="px-4 py-2 my-1 rounded-md text-[14px]">
        Add Note
      </Button>

      <ul className="space-y-1">
        {notes.map((note, index) => (
          <li
            key={index}
            className="relative p-4 border-b border-b-gray-700"
          >
            <span
              className="block break-all]"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {note}
            </span>
            <Button
              variant="destructive"
              onClick={() => removeNote(index)}
              className="rounded-md absolute right-2 top-1 bottom-1 text-sm py-1 px-4"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
