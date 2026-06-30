import { useState } from 'react'
import List from './List'
import Conversation from './Conversation'

// Exercises 2-7 - the conversation app.
// Exercise2 holds the state and decides whether to show the contact list or one conversation.
const Exercise2 = () => {
  const [displayConversation, setDisplayConversation] = useState(null)
  const [conversations] = useState([
    {
      with: 'Laura',
      convo: [
        { text: 'Hi', sender: 'self' },
        { text: 'You there?', sender: 'self' },
        { text: "Yeah, hi, what's up?", sender: 'other' },
      ],
    },
    {
      with: 'Dad',
      convo: [
        { text: 'Have you finished your school work yet?', sender: 'other' },
        { text: 'Yes.', sender: 'self' },
        { text: 'What do you mean, yes?', sender: 'other' },
        { text: '??', sender: 'self' },
      ],
    },
    {
      with: 'Shoobert',
      convo: [
        { text: 'Shoobert!!!', sender: 'self' },
        { text: 'Dude!!!!!!!!', sender: 'other' },
        { text: 'Shooooooooo BERT!', sender: 'self' },
        { text: "You're my best friend", sender: 'other' },
        { text: "No, *you're* my best friend", sender: 'self' },
      ],
    },
  ])

  // Exercise 5 - remember which conversation is open (by contact name)
  const displayConvo = (name) => setDisplayConversation(name)
  const goBack = () => setDisplayConversation(null)

  // Exercise 3 - pull just the names out of the data, don't hard-code them
  const contacts = conversations.map((c) => c.with)
  const active = conversations.find((c) => c.with === displayConversation)

  // null -> show the list, otherwise show that conversation
  return displayConversation === null ? (
    <List contacts={contacts} onSelect={displayConvo} />
  ) : (
    <Conversation convo={active.convo} sender={displayConversation} onBack={goBack} />
  )
}

export default Exercise2
