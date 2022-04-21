import React from "react";
import '../../css/App.css';
import cx from "classnames"
const ChatMessage = (props) => (
  <div className={cx({ "sender": props.isSelf, "receiver": !props.isSelf })}>
    <h6>{props.username}</h6>
   {props.msg}
  </div>
);


export default ChatMessage