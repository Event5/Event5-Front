import React, { useRef, useState, useEffect } from "react";
/*
let actualDate = new Date();        
let utcDate = new Date("August 31, 2020 23:59:59").toUTCString();
let eventDate = utcDate.toLocaleString()
let currentDate = new Date(eventDate);
const difference = +actualDate - +currentDate;
*/
export function Countdown ({eventDate}){
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");
    const localeDate = new Date (eventDate.toString());

    let interval = useRef();

    const startTimer = () =>{
        const countdownDate = localeDate.getTime();
        interval = setInterval(()=>{
            const now= new Date().getTime();
            const difference = countdownDate - now;

            const days = Math.floor(difference /(1000 * 60 * 60 * 24));
            const hours = Math.floor((difference %(1000 * 60 * 60 * 24)/(1000 * 60 * 60)));
            const minutes = Math.floor((difference %(1000 * 60 * 60))/(1000 * 60));
            const seconds = Math.floor((difference %(1000 * 60))/1000);

            if (difference < 0){
                clearInterval(interval.current);
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        },1000)
    };

    useEffect(()=>{
        startTimer();
        return () =>{
            clearInterval(interval.current);
        }
    })
    return(
        <div className="Countdown">
            <h6>{timerDays}</h6>
            <p>:</p>
            <h6>{timerHours}</h6>
            <p>:</p>
            <h6>{timerMinutes}</h6>
            <p>:</p>
            <h6>{timerSeconds}</h6>
        </div>
    )
}