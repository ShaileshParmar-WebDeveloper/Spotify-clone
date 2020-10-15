import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();
  console.log("discover", discover_weekly?.tracks);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src="https://i.pinimg.com/564x/14/84/8a/14848aa587958abeea0754f5e03651d3.jpg"
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item, i) => (
          <SongRow key={i} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
