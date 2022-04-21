import './css/App.css';
import YTPlayer from "./components/yt-plyr/index.jsx"
import Chat from "./components/chat/index.jsx"
import io from 'socket.io-client';
const { uniqueNamesGenerator, colors, animals } = require('unique-names-generator');
const socket = io.connect("http://localhost:3001")
const randomName = uniqueNamesGenerator({ dictionaries: [colors, animals] }); // big_red_donkey


function App() {
  const room = "tba"
  return (
    <div className="App">
      <YTPlayer embedId="0i1kgsmVE6Y"></YTPlayer>
      <Chat socket={socket} room={room} username={randomName} ></Chat>
    </div>
    
  );
}

export default App;
