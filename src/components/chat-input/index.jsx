import { useState, useEffect } from "react"
import '../../css/App.css';
import ChatMessage from "../chat-message/index.jsx"

function ChatInput({socket,username,room, sendNewMessage }) {
    const [currentMessage, setCurrentMessage] = useState("")
  const [MsgList,SetMsgList] = useState([]);


  useEffect(()=>{
    socket.on("receive-msg", (data)=>{
      SetMsgList((list)=>[...list,data]);
    });
},[socket])

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPressed, true)
        return () => {
            document.removeEventListener("keydown", handleKeyPressed, true)
        }
    })

    const handleKeyPressed = (event) => {
        if (event.key === "Enter") {
            handleSendClick()
        }
    }

    const handleSendClick = async() => {
        if (currentMessage.trim()) {
          const msgdata = {
            room: room,
            user:username,
            msg:currentMessage
          }
          await socket.emit("chat-msg",msgdata)
          setCurrentMessage("")
          SetMsgList((list)=>[...list,msgdata]);
        }
    }
    return (
      <div className="chat_container">
      <div className="messages_container">
    <div className="message_list_wrapper">
      <div>
        {MsgList.map((msg)=>{
          return <ChatMessage msg={msg.msg} username={msg.user} isSelf={username===msg.user}></ChatMessage>
      })}
      </div>
    </div>
  </div>
  <div className="input_container">
 <input type="textarea"  
                className="input"
                value={currentMessage}
                placeholder="Send a message..."
                onChange={(e) => setCurrentMessage(e.target.value)}
            />
  <input type="button" value=">" className="button" onClick={handleSendClick}/>
  </div>
  </div>
    );
}


export default ChatInput