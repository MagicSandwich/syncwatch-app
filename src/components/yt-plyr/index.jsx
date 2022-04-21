import React from "react";
import '../../css/App.css';

const YTPlayer = ({ embedId }) => (
  <div className="player_container">
   {/* <div id="target-div"></div>
  {$('#target-div').load('https://rezka.ag/series/fiction/1824-do-smerti-krasiva-2009.html #player')}     */}
  <iframe
      width="100%"
      height="100%"
      align="center"
      //src={`https://www.youtube.com/embed/${embedId}`}
      src="https://voidboost.net/embed/796660"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
export default YTPlayer

// YTPlayer.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

// function YTPlayer() {
//     const videoId="RBtlPT23PTM";
//    return (
//         <div className="w-full h-full "> BEBRA
//             {videoId ? <Youtube
//                 videoId={videoId}
//                 containerClassName="h-full"
//                 opts={{
//                     height: "100%",
//                     width: "100%",
//                     playerVars: {
//                         origin: "https://you-sync.herokuapp.com/",
//                         rel: 0,
//                         showinfo: 0,
//                         ecver: 2,
//                         controls: 1,
//                         disablekb: 1,
//                         iv_load_policy: 3,
//                         autoplay: 1,
//                         start: 0
//                     }
//                 }}

//             />: <div className="w-full h-full flex justify-center items-center font-mono"><span className="text-white text-4xl">NO VIDEO</span></div>}
//         </div>
//     )
// }




// // js
// import React from 'react';
// import YouTube from 'react-youtube';

// class YTPlayer extends React.Component {
//   render() {
//     const opts={
        
//         playerVars: {
//             origin: "https://you-sync.herokuapp.com/",
//             rel: 0,
//             showinfo: 0,
//             ecver: 2,
//             controls: 1,
//             disablekb: 1,
//             iv_load_policy: 3,
//             autoplay: 1,
//             start: 0
//         }
//     };

//     return <YouTube videoId="qFLhGq0060w" opts={opts} onReady={this._onReady} />;
//   }

//   _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
// }
// export default YTPlayer