import { useState, useEffect } from 'react';

function CountdownSection({ title = "", time = 0 }) {
    const [firstNumber, setFirstNumber] = useState("0");
    const [secondNumber, setSecondNumber] = useState("0");

    useEffect(() => {
        let str = time.toString();
        let split = str.split("");
        if (split.length === 1) {
            setFirstNumber("0");
            setSecondNumber(split[0]);
        } else if (time <= 0) {
            setFirstNumber("0");
            setSecondNumber("0");
        }
        else {
            setFirstNumber(split[0]);
            setSecondNumber(split[1]);
        }
    }, [time]);

    return (
        <div className="time-value-container">
            <div className="digits">
                <div><h3>{firstNumber}</h3></div>
                <div><h3>{secondNumber}</h3></div>
            </div>
            <h2>{title}</h2>
        </div>
    )

}
export default CountdownSection;