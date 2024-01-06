import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'
export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="h-screen w-screen bg-black text-white overflow-auto">
      <div>
        <div className="flex flex-col items-center h-full w-full">
          <div className="h-40 w-screen text-white"></div>
          <div className="flex flex-row h-72 w-screen justify-between">
            <div className="bg-white w-9/12 mx-4 rounded-3xl"></div>
            <div className="bg-black w-3/12 mr-4 rounded-3xl text-black">
                <div className="calender-container"><Calendar onChange={setDate} value={date} /> </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
