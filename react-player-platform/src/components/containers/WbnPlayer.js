import React, {Fragment, useState, useEffect} from 'react';
import Video from '../Video';
import PlayList from "../containers/PlayList";
import {ThemeProvider} from 'styled-components';
import StyledWbnPlayer from '../styles/StyledWbnPlayer';

 const theme ={
     bgcolor: "#353535",
     bgcolorItem: "#414141",
     bgcolorItemActive: "#405c63",
     bgcolorPlayed: "#526d4e",
     border: "none",
     borderPlayed: "none",
     color: "#fff"
 }
const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535"
}



const WbnPlayer = ({match, history, location}) => {

    const videos = JSON.parse(document.querySelector('[name="videos"]').value);

    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode:true,
        playlistId: videos.playlistId,
        autoplay: false 
    })

    useEffect(()=>{
        const videoId= match.params.activeVideo;
        if(videoId!==undefined){
            const newActiveVideo=state.videos.findIndex(
                video=>video.id===videoId
            )
            setState(prev=>({
                ...prev,
                activeVideo: prev.videos[newActiveVideo],
                autoplay: location.autoplay
            }))
        }else{
            history.push({
              pathname: `/${state.activeVideo.id}`,
              autoplay: false
            }); 
        }
    }, [history, location.autoplay, match.params.activeVideo, state.activeVideo.id, state.videos]);

    const nightModeCallback=()=>{
        return true;

    }

    const endCallback=()=>{
        return true;
    }

    const progressCallback=()=>{
        return true;
    }

    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? (
                <StyledWbnPlayer>
                    <Video
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                        endCallback={endCallback}
                        progressCallback={progressCallback}
                    />
                    <PlayList
                        videos={state.videos}
                        active={state.activeVideo}
                        nightModeCallback={nightModeCallback}
                        nightMode={state.nightMode}
                    />
                </StyledWbnPlayer>
            ) : null}
        </ThemeProvider>
    );
}



export default WbnPlayer;