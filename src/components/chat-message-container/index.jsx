import React, { useEffect,useState } from "react";
import '../../css/App.css';
import ChatMessage from "../chat-message/index.jsx"




const ChatMessageContainer = ({socket}) => {
  const [MsgList,SetMsgList] = useState([]);


  useEffect(()=>{
    socket.on("receive-msg", (data)=>{
      SetMsgList((list)=>[...list,data]);
    });
},[socket])
  return (
  <div className="messages_container">
    <div className="message_list_wrapper">
      <div>
        {MsgList.map((msg)=>{
          return <ChatMessage msg={msg.msg} user={username}></ChatMessage>
      })}
      </div>
    </div>
  </div>
)
  };


export default ChatMessageContainer