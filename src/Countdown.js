import CountdownSection from './CountdownSection.js';
import { useState, useEffect } from 'react';

function Countdown() {
    const [currentTime, setCurrentTime] = useState(new Date().getTime());

    const endTime = new Date("May 18 2021 00:00:00").getTime();

    const difference = endTime - currentTime;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date().getTime()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="countdown-container">
            <CountdownSection title='days' time={days} />
            <CountdownSection title='hours' time={hours} />
            <CountdownSection title='mins' time={minutes} />
            <CountdownSection title='secs' time={seconds} />
        </div>
    )

}
export default Countdown;