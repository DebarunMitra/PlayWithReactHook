import React, { Fragment } from "react";
import PlayListHeader from "../PlayListHeader";
import PlayListItems from "./PlayListItems";
import NightMode from "../NightMode";
import StyledPlaylist from '../styles/StyledPlaylist';

const PlayList = ({videos, active, nightModeCallback, nightMode}) => {
  return (
    <StyledPlaylist>
      <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
      <PlayListHeader active={active} total={videos.length} />
      <PlayListItems videos={videos} active={active} />
    </StyledPlaylist>
  );
  }

export default PlayList;
