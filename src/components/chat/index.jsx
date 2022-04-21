import React from "react";
import '../../css/App.css';
import ChatInput from "../chat-input/index.jsx"

const Chat = ({socket,username,room}) => (
  
   <ChatInput socket={socket} room={room} username={username}></ChatInput>
  
);


export default Chat