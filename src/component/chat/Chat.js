import React, { useState, useEffect } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const URL = 'ws://localhost:3030'

const Chat = () => {

   const [name, setName] = useState('Kim'),
         [message, setMessage] = useState([]),
         [ws, setWs] = useState(new WebSocket(URL))
         
   ws.onopen = e => console.log('connected')
   
   useEffect(() => {

      ws.onmessage = on => {
         console.log('onmessage');
         const message = JSON.parse(on.data)
         addMessage(message)
      }
      return ( () => {
         ws.onclose = () => {
            console.log('disconnected')
            setWs(new WebSocket(URL))
         }
      })
   },[])

   const addMessage = message => {
      setMessage([message])
   }
   
   const submitMessage = msg => { //여기서 객체로 보내서 그런듯?
      const message = { name: name, message: msg }
      ws.send(JSON.stringify(message))
      addMessage(message)
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

         <ChatInput
            onSubmitMessage =
               {msg => submitMessage(msg)}
         />

         {message.map((message, index) => 
            <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
            />
         )}

      </div>
   )
}

export default Chat;