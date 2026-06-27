import { formatDate } from '../date'
import { categoryColor } from '../categories'

// a single note card. clicking it opens the modal; the delete button asks first.
const Note = ({ note, onDelete, onOpen }) => {
  const handleDelete = (e) => {
    e.stopPropagation() // don't open the modal when deleting
    if (confirm("Are you sure you want to delete your note?")) {
      onDelete(note.id)
    }
  }

  return (
    <div
      className="note"
      style={{ backgroundColor: categoryColor(note.category) }}
      onClick={() => onOpen(note)}
    >
      {note.title && <h3 className="note-title">{note.title}</h3>}
      <p className="note-text">{note.text}</p>

      <div className="note-meta">
        <span className="note-cat">{note.category}</span>
        <span>Created {formatDate(note.createdAt)}</span>
        {note.updatedAt && <span>Updated {formatDate(note.updatedAt)}</span>}
      </div>

      <button className="delete-btn" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Note
