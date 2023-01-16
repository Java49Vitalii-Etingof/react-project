import React from "react";
import timeZones from "../time-zones";
export const Timer: React.FC = () => {
    const timeZone = timeZones[10].name;
    const[time, setTime] = React.useState(new Date())
    function tick() {
        console.log("tick");
        setTime(new Date()); 
    }
    setInterval(tick, 1000);
    return <div>
        <h3>Time in time zone {timeZone}</h3>
        <label>Time {time.toLocaleTimeString(undefined,{timeZone})}</label>
    </div>
}