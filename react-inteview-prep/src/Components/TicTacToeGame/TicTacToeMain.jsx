import React from 'react'
import TicTacToeBox from './TicTacToeBox';

function TicTacToeMain() {
    const activeBoxCount = 7;
    const boxContainerPattern = [true, true, true, true, false, false, true, true, true];
    let clickIdSequence = []; 

    const handleClick = (e) => {
        // console.log(e.target);
        const targettingBox = document.getElementById(e.target.id);
        targettingBox.style.backgroundColor = 'green';
        const clickedId = parseInt(e.target.id.split('-')[1]);
        console.log(clickIdSequence.includes(clickedId));
        if(!clickIdSequence.includes(clickedId)){
            clickIdSequence.push(clickedId);
        }

        if(clickIdSequence.length === activeBoxCount){
            // console.log(clickIdSequence);
            handleBoxDisColouring(clickIdSequence);
        }
    }

    const handleBoxDisColouring = (boxes) => {
        boxes.map((box, index) => {
            setTimeout(() => {
                console.log('calling', `box-${box}`, (1000 * (index+1)));
                document.getElementById(`box-${box}`).style.backgroundColor = 'white';
            }, (1000 * (index+1)))    
        })

        clickIdSequence = []
    }

  return (
    <div>
        <h1>BoxColorDecolor</h1>
        <h4>Color the boxes when it clicked</h4>
        <h4>Dis-Color the boxes when all the boxes are colored.</h4>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                width: '282px'
            }}>
            {
                boxContainerPattern.map((box, index) => {
                    if(box){
                        return (
                            <TicTacToeBox key={'box-'+index} id={'box-'+index} bgColor='white' handleClick={handleClick} />
                        )
                    }else{
                        return (
                            <TicTacToeBox key={'box-'+index} id={'box-'+index} bg={false} border={false} />
                        )
                    }
                })
            }
            </div>
        </div>
    </div>
  )
}

export default TicTacToeMain