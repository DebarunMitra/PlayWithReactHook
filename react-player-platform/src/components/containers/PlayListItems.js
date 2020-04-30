import React, {Fragment} from 'react';
import PlayListItem from '../PlayListItem';
import StyledPlayListItems from '../styles/StyledPlaylistitems';


const PlayListItems=({videos, active})=>
    <StyledPlayListItems>
        {videos.map(video=>(
            <PlayListItem
                key={video.id}
                video={video}
                active={video.id===active.id?true:false}
                played={video.played}
            />
        ))}
    </StyledPlayListItems>

export default PlayListItems;