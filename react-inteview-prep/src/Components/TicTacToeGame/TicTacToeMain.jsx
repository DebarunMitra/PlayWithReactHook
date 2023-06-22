import React from 'react'
import TicTacToeBox from './TicTacToeBox';

function TicTacToeMain() {
    const startCheck = 5;
    const boxContainerPattern = [true, true, true, true, true, true, true, true, true];
    const inputType = {
        0: 'X',
        1: 'O'
    };
    let clickedStatus = 0;
    let clickIdSequence = {0: '-',1: '-',2: '-',3: '-',4: '-',5: '-',6: '-',7: '-',8: '-'};
    let clickCount=0;

    const handleClick = (e) => {
        // console.log(e.target);
        const targettingBox = document.getElementById(e.target.id);
        const clickedId = parseInt(e.target.id.split('-')[1]);

        if(clickIdSequence[clickedId] === '-'){
            targettingBox.innerText = inputType[clickedStatus];
            clickIdSequence[clickedId] = inputType[clickedStatus];
            clickCount++;
            (clickedStatus === 0) ? (clickedStatus=1) : (clickedStatus=0)
        }

        // console.log(clickIdSequence);

        if(clickCount >= startCheck){
            // console.log('process', clickIdSequence);
            handleWinnerCheck(clickIdSequence, clickCount);
            // handleBoxDisColouring(clickIdSequence);
        }
    }

    const resetTheBoxs = (winnerStatus, winner) => {
        clickIdSequence = {0: '-',1: '-',2: '-',3: '-',4: '-',5: '-',6: '-',7: '-',8: '-'};
        clickedStatus = 0;
        clickCount=0;

        setTimeout(() => {
            if(winnerStatus){
                alert('Game Winner Is Player: '+ winner);
            }else{
                alert('No Winner! Game Is Tie.');
            }

            for(let i=0;i<9;i++){
                document.getElementById(`box-${i}`).innerText = '-';
            };
        }, 500);
    }

    const handleWinnerCheck = (boxes, clicks) => {
        let foundWinner = false, winnerSign = '-';

        //row check
        if(!foundWinner){
            // console.log('row checking...');
            for(let i=0; i<9; i++){
                if(boxes[i] === 'X' && boxes[i] === boxes[i+1] && boxes[i] === boxes[i+2]){
                    foundWinner = true;
                    console.log('Winner Is Player: X');
                    winnerSign = 'X';
                    break;
                }else if(boxes[i] === 'O' && boxes[i] === boxes[i+1] && boxes[i] === boxes[i+2]){
                    foundWinner = true;
                    console.log('Winner Is Player: O');
                    winnerSign = 'O';
                    break;
                }else{
                    foundWinner = false;
                    i = i + 2;
                }
            }
        }

        //column check
        if(!foundWinner){
            // console.log('column checking...');
            for(let i=0; i<9; i++){
                if(boxes[i] === 'X' && boxes[i] === boxes[i+3] && boxes[i] === boxes[i+6]){
                    foundWinner = true;
                    console.log('Winner Is Player: X');
                    winnerSign = 'X';
                    break;
                }else if(boxes[i] === 'O' && boxes[i] === boxes[i+3] && boxes[i] === boxes[i+6]){
                    foundWinner = true;
                    console.log('Winner Is Player: O');
                    winnerSign = 'O';
                    break;
                }else{
                    foundWinner = false;
                }
            }
        }

        //diagonal check
        if(!foundWinner){
            // console.log('diagonal checking...');
                if(boxes[0] === 'X' && boxes[0] === boxes[4] && boxes[0] === boxes[8]){
                    foundWinner = true;
                    console.log('Winner Is Player: X');
                    winnerSign = 'X';
                }else if(boxes[0] === 'O' && boxes[0] === boxes[4] && boxes[0] === boxes[8]){
                    foundWinner = true;
                    console.log('Winner Is Player: O');
                    winnerSign = 'O';
                }else if(boxes[2] === 'O' && boxes[2] === boxes[4] && boxes[2] === boxes[6]){
                    foundWinner = true;
                    console.log('Winner Is Player: O');
                    winnerSign = 'O';
                }else if(boxes[2] === 'X' && boxes[2] === boxes[4] && boxes[2] === boxes[6]){
                    foundWinner = true;
                    console.log('Winner Is Player: X');
                    winnerSign = 'X';
                }else{
                    foundWinner = false;
                }
        }

        if(foundWinner){
            resetTheBoxs(foundWinner, winnerSign);
        }

        if(!foundWinner && clicks === 9){
            console.log("No Winner! Game Is Tie.");
            resetTheBoxs(foundWinner, winnerSign);
        }
    }

  return (
    <div>
        <h1>Tic Tac Toe Game</h1>
        <h4>First Clicked Player Will Be 'X'</h4>
        <h4>Second Clicked Player Will Be 'O'</h4>
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
                            <TicTacToeBox key={'box-'+index} id={'box-'+index} bgColor='white' handleClick={handleClick} value='-' />
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

// columnIncrement = position + 3
// rowIncrement = position + 1
// diagonalIncrement = position + 4

// 0,1,2
// 3,4,5
// 6,7,8