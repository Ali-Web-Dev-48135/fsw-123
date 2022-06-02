import {useState} from 'react';
import './RollDice.css';
import Die from './Die';


const RollDice = (props) => {
    // set the value for each dice.
    const [diceOneValue, setDiceOneValue] = useState("");
    const [diceTwoValue, setDiceTwoValue] = useState("");

    // generate two different random numbers.
    const twoRandomNumber = () => {
        setDiceOneValue(Math.floor(Math.random() * 6) + 1);
        setDiceTwoValue(Math.floor(Math.random() * 6) + 1);
        
    };
    return(
        <div className='roll-dice__wrapper'>
            {/* <div className='die-one' diceOne={diceOneValue} diceTwo={diceTwoValue}/>
            <div className='die-two' ></div> */}
            <Die 
            diceOneValue={diceOneValue} 
            diceTwoValue={diceTwoValue} 
            // diceOneDotValue={diceOneDotValue}
            // diceTwoDotValue={diceTwoDotValue}
            />
            <button onClick={twoRandomNumber}>Roll Dice</button>
        </div>
    )
};

export default RollDice;
