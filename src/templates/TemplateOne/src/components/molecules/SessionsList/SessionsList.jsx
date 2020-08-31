import React from "react";
import { SessionCard } from "../../atoms/SessionCard";

const schedule = [
    {
        id: 1,
        title: "Angular",
        description: "Session to learn Angular like a professional",
        date_time: "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
        event_id: 1
    },
    {
        id: 2,
        title: "Angular",
        description: "Session to learn Angular like a professional",
        date_time: "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
        event_id: 2
    },
    {
        id: 3,
        title: "Angular",
        description: "Session to learn Angular like a professional",
        date_time: "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
        event_id: 3
    },
    {
        id: 4,
        title: "Angular",
        description: "Session to learn Angular like a professional",
        date_time: "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
        event_id: 4
    },

]

export function SessionsList() {
  return (
    <div className="SessionsList">
        {
            schedule.map((item, index)=>{
                if(index%2===0){
                    return(<SessionCard key={index} sessionDate={item.date_time.toLocaleString()} sessionDescription={item.description} sessionName={item.title} type="First"/>);
                }else{
                    return(<SessionCard key={index} sessionDate={item.date_time.toLocaleString()} sessionDescription={item.description} sessionName={item.title} type="Second"/>);
                }
            })
        }
    </div>
  );
}