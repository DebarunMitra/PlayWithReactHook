import React, {useState, useEffect} from 'react'

function Timer({duration}) {
const [time, setTime] = useState(duration);

useEffect(() => {
    setTimeout(() => {
        setTime(prevTime => prevTime - 1000);
    }, 1000 )
}, [time]);

const formattedTime = (miliseconds) => {
    let totalSeconds = parseInt(Math.floor(miliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHours / 24));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 24);

    return `${days}: ${hours}: ${minutes}: ${seconds}`
};

  return (
    <div>{formattedTime(time)}</div>
  )
}

export default Timer