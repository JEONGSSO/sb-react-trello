import React, { useState } from 'react'

const ChatInput = ({ onSubmitMessage }) => {
   const [message, setMessage] = useState('');
   
   const messageInput = document.querySelector('.message-Input')

   return (
      <form
         action="."
         onSubmit={e => {
            e.preventDefault()
            onSubmitMessage(message)
            setMessage('')
            messageInput.focus()
         }}
      >
         <input
            className="message-Input"
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