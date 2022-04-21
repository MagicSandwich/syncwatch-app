import { useState, useEffect } from "react"
import '../../css/App.css';

function Begin({socket,username,room,isProceed}) {


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

    return (
        
      <div className="chat_container">
        {isProceed?(2):(1)}
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


export default Begin