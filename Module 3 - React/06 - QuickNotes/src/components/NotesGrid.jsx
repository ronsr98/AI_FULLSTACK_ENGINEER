import Note from './Note'

// step 1 - lay the notes out in a grid
const NotesGrid = ({ notes, onDelete, onOpen }) => {
  if (!notes.length) {
    return <p className="empty">No notes here yet.</p>
  }

  return (
    <div className="grid">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} onOpen={onOpen} />
      ))}
    </div>
  )
}

export default NotesGrid
