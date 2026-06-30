// Exercise 6 + 7 - shows a single conversation.
// `sender` here is the other person's name (comes from displayConversation).
const Conversation = ({ convo, sender, onBack }) => {
  return (
    <div className="conversation">
      <button className="back" onClick={onBack}>Back</button>
      {convo.map((message, i) => (
        <div key={i} className="message">
          {/* "Me" for my own messages, otherwise the contact's name */}
          <span className="sender">{message.sender === 'self' ? 'Me' : sender}</span>: {message.text}
        </div>
      ))}
    </div>
  )
}

export default Conversation
