import React, { useState, useEffect} from 'react'
import './App.css';
import Message from './Message'
import {Button, FormControl, Input, InputLabel, IconButton} from '@material-ui/core'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState('')

  const sendMessage = () => {

    db.collection('messages').add({
      message : input,
      userName : userName,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  useEffect(()=>{
    
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc=>({id : doc.id, message : doc.data()})))
    });
  },[])
  useEffect(()=>{
      setUserName(prompt('please enter your userName'))
  },[])
  return (
    <div className="app">
      <img src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100'/>
      <h1>Welcome {userName}</h1>
      
      <form className='app_form'>
        <FormControl className='app_formControl'>
          <Input className='app_input' placeholder='Enter a message' value={input} onChange={(e)=>setInput(e.target.value)} />
          <IconButton className='app_iconButton' disabled={!input} variant='contained' color='primary'  onClick={()=>sendMessage()}><SendIcon/></IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({message, id}) => (
            <Message key={id} message={message} userName={userName}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
