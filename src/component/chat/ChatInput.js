import React, { useState } from 'react'

const ChatInput = ({ onSubmitMessage }) => {
   const [message, setMessage] = useState('');

   return (
      <form
         action="."
         onSubmit={e => {
         e.preventDefault()
         onSubmitMessage(message)
         setMessage('')
      }}
      >

      <input
         type="text"
         placeholder="메세지 입력.."
         value={message}
         onChange={e => setMessage(e.target.value)}
      />
      <input type="submit" value="send"/>
      </form>
   )
}

export default ChatInput;