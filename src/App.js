import './css/App.css';
import YTPlayer from "./components/yt-plyr/index.jsx"
import Chat from "./components/chat/index.jsx"
import io from 'socket.io-client';
import { useState } from 'react';
const { uniqueNamesGenerator, colors, animals } = require('unique-names-generator');
//const socket = io.connect("http://localhost:3001")
const socket = io.connect("https://syncwatch-app.herokuapp.com/")

const randomName = uniqueNamesGenerator({ dictionaries: [colors, animals] }); // big_red_donkey


function App() {  
  const room = "tba"
  const [check, setCheck] = useState(false);


  return (
    <div className="App">
      {check?(<div className="App">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      <YTPlayer embedId="0i1kgsmVE6Y"></YTPlayer>
      <Chat socket={socket} room={room} username={randomName} ></Chat>
        
        </div>):(<div className="Start">
          <h1> SYNCWATCH</h1>
          <button onClick={(e) => setCheck({check: !check.value})}>BEGIN</button>
          </div>)}
    </div>
    
  );
}

export default App;
