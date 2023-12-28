import { useState } from 'react'
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");

  const addNote = () => {
    if (currentNote.trim()) {
      setNotes([...notes, currentNote]);
      setCurrentNote("");
    }
  };

  const removeNote = (index: number) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="notebook relative bg-white">
<input
type="text"
value={currentNote}
onChange={(e) => setCurrentNote(e.target.value)}
className="border-b border-gray-300 py-2 w-full px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
/>
<button onClick={addNote} className="bg-blue-500 text-white py-2 px-4 rounded mt-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Add Note</button>

<ul className="space-y-2">
{notes.map((note, index) => (
<li key={index} className="relative py-4 px-6 bg-gray-100 border-l-4 border-gray-200">
<span className="block">{note}</span>
<button onClick={() => removeNote(index)} className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">Remove</button>
</li>
))}
</ul>
<div className="absolute top-0 left-0 h-full border-l-4 border-gray-200"></div>
</div>
);
}

export default App
