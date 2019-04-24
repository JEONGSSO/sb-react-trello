import React, { useState, useEffect } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const URL = 'ws://localhost:3030'

const Chat = () => {

   const [name, setName] = useState('Kim'),
         [messages, setMessages] = useState([]),
         [ws, setWs] = useState(new WebSocket(URL))
         
   ws.onopen = () => console.log('connected')
   
   useEffect(() => {

      ws.onmessage = on => {
         console.log('on Message');
         const message = JSON.parse(on.data)
         setMessages([message])
      }

      return (() => {
         ws.onclose = () => {
            console.log('disconnected')
            setWs(new WebSocket(URL))
         }
      })
   },[])

   
   const submitMessage = msg => {
      const message = { name: name, message: msg }
      ws.send(JSON.stringify(message))
      setMessages([message])
   }
   
   return (
      <div>
         <label htmlFor="name">
            Name:&nbsp;
            <input
               type="text"
               id="name"
               placeholder="이름입력"
               value={name}
               onChange={e => setName(e.target.value)}/>
         </label>

         <ChatInput onSubmitMessage = {msg => submitMessage(msg)} />

         {messages.map((value, index) => 
            <ChatMessage
               key={index}
               name={value.name}
               message={value.message}
            />
         )}

      </div>
   )
}

export default Chat;