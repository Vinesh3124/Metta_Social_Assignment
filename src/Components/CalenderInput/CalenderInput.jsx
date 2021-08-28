import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import styles from "./CalenderInput.module.css"
import './style.css';

export default function App() {
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);

  return (
    <>
      <div>
        <DatePicker
          selected={startDate}
          placeholderText="Departure Date"
          calendarClassName="red-border"
          dateFormat="dd/MM/yyyy"
          selectsStart
          startDate={startDate}
          minDate={new Date()}
          endDate={endDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          selected={endDate}
          placeholderText="Return Date"
          calendarClassName="red-border"
          dateFormat="dd/MM/yyyy"
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={(date) => setEndDate(date)}
        />
      </div>
    </>
  );
}
