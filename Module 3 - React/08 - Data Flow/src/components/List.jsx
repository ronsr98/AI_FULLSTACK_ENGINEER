import Contact from './Contact'

// Exercise 3 + 4 - shows all the contacts.
// it gets the names + the select handler from Exercise2 and passes them down to each Contact.
const List = ({ contacts, onSelect }) => {
  return (
    <div className="list">
      {contacts.map((name) => (
        <Contact key={name} name={name} onSelect={onSelect} />
      ))}
    </div>
  )
}

export default List
