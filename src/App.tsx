import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
function App() {
  // notes from local storage on component mount

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(storedNotes);
  }, []);

  const [notes, setNotes] = useState([]);
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
    <div className="relative h-full]">
      <input
        type="text"
        placeholder="Add note or link"
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        className="border-b border-gray-500 py-2 w-full px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 mb-1"
      />
      <Button
        onClick={addNote}
      >
        Add Note
      </Button>

      <ul className="space-y-2">
        {notes.map((note, index) => (
          <li key={index} className="relative py-2 px-6 border-l-4">
            <span
              className="block break-all]"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {note}
            </span>
            <Button
              variant="destructive"
              onClick={() => removeNote(index)}
              className="absolute top-2 right-2"
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
