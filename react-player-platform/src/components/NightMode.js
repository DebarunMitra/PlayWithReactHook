import React from 'react';
import StyledNightmode from './styles/StyledNightmode';


const NightMode = ({nightMode, nightModeCallback}) => (
            <StyledNightmode>
                <span>Night Mode</span>
                <label className="switch">
                    <input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
                    <span className="slider round"></span>
                </label>
            </StyledNightmode>
    );

export default NightMode;