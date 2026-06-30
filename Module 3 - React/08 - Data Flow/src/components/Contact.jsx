// Exercise 4 - one contact row. clicking it opens that conversation.
const Contact = ({ name, onSelect }) => {
  return (
    <div className="contact" onClick={() => onSelect(name)}>
      {name}
    </div>
  )
}

export default Contact
