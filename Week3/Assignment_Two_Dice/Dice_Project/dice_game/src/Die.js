import './Die.css';
import { v4 as uuid4 } from 'uuid';

const Die = (props) => {

    const diceStyles = {
        1: "rolled_one",
        2: "rolled_two",
        3: "rolled_three",
        4: "rolled_four",
        5: "rolled_five",
        6: "rolled_six",
    };


    const createArrayToMapOver = (diceValue) => {
        let emptyList = [];
        for(let num = 0; num < diceValue; num ++)
        {
            emptyList.push(num);

        }
        return emptyList;
    };

    return(
        <div className="main-dice__wrapper">
            <div className={`main-dice__box ${diceStyles[props.diceOneValue]}`}>
                {
                    createArrayToMapOver(props.diceOneValue).map( element => {
                        return (
                            <span key={uuid4()}></span>
                        )
                    })
                }
            </div>
            <div className={`main-dice__box ${diceStyles[props.diceTwoValue]}`}>
                {
                    createArrayToMapOver(props.diceTwoValue).map( element => {
                        return (
                            <span key={uuid4()}></span>
                        )
                    })
                }
            </div>
        </div>
    )

};

export default Die;