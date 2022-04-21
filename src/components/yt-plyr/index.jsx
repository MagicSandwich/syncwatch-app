import React from "react";
import '../../css/App.css';

const YTPlayer = ({ embedId }) => (
  <div className="player_container">
  <iframe
      width="100%"
      height="100%"
      align="center"g
      src="https://voidboost.net/embed/796660"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded player"
    />
  </div>
);
export default YTPlayer
