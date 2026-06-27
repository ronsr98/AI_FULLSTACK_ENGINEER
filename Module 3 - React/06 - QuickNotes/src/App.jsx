import { useState, useEffect } from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NotesGrid from './components/NotesGrid'
import Modal from './components/Modal'
import SearchBar from './components/SearchBar'
import { formatDate } from './date'

const STORAGE_KEY = "quicknotes"

export default function App() {
  // step 7 - start from whatever is saved in localStorage
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [openNote, setOpenNote] = useState(null) // the note currently in the modal

  // step 7 - save back to localStorage every time the notes change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  }, [notes])

  const addNote = ({ title, text, category }) => {
    const note = {
      id: Date.now(),
      title,
      text,
      category,
      createdAt: Date.now(),
      updatedAt: null,
    }
    setNotes([note, ...notes]) // newest on top
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id))
  }

  // step 5 - save the edits from the modal and stamp an update date
  const updateNote = ({ title, text, category }) => {
    setNotes(
      notes.map((n) =>
        n.id === openNote.id ? { ...n, title, text, category, updatedAt: Date.now() } : n
      )
    )
    setOpenNote(null)
  }

  // step 9 - filter by category and by the search text (title or content)
  const visibleNotes = notes.filter((n) => {
    const matchesCategory = activeCategory === "All" || n.category === activeCategory
    const q = search.toLowerCase()
    const matchesSearch =
      n.title.toLowerCase().includes(q) || n.text.toLowerCase().includes(q)
    return matchesCategory && matchesSearch
  })

  return (
    <div className="app">
      <h1>📝 QuickNotes</h1>

      <NoteForm onSubmit={addNote} />

      <SearchBar
        search={search}
        setSearch={setSearch}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <NotesGrid notes={visibleNotes} onDelete={deleteNote} onOpen={setOpenNote} />

      {openNote && (
        <Modal onClose={() => setOpenNote(null)}>
          <p className="modal-dates">
            Created {formatDate(openNote.createdAt)}
            {openNote.updatedAt && <> · Updated {formatDate(openNote.updatedAt)}</>}
          </p>
          <h2>Edit note</h2>
          {/* reuse the same form, this time prefilled, for editing */}
          <NoteForm initial={openNote} onSubmit={updateNote} submitLabel="Save changes" />
        </Modal>
      )}
    </div>
  )
}
