import { useState } from 'react'
import { CATEGORIES } from '../categories'

// one form for both jobs: adding a new note and editing an existing one.
// when `initial` is passed we're in edit mode.
const NoteForm = ({ onSubmit, initial, submitLabel = "Add note" }) => {
  const [title, setTitle] = useState(initial ? initial.title : "")
  const [text, setText] = useState(initial ? initial.text : "")
  const [category, setCategory] = useState(initial ? initial.category : CATEGORIES[0].name)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return // a note needs at least some text
    onSubmit({ title: title.trim(), text: text.trim(), category })
    if (!initial) {
      // clear the form only when adding, not when editing
      setTitle("")
      setText("")
    }
  }

  // step 3.1 - let the textarea grow with the text instead of a manual drag handle
  const autoGrow = (e) => {
    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        className="title-input"
        placeholder="Title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="text-input"
        placeholder="Write a note..."
        rows={3}
        value={text}
        onChange={(e) => { setText(e.target.value); autoGrow(e) }}
      />
      <div className="form-row">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((c) => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
        <button type="submit">{submitLabel}</button>
      </div>
    </form>
  )
}

export default NoteForm
