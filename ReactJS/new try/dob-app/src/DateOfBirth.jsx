import React from 'react'
import moment from 'moment'
import { useState } from 'react';

function DateOfBirth({dob}) {
const [date, setDate] = useState(dob);
const handleChange = (event) => {
    setDate(event.target.value);
};
const convertToWords = (date) => {
    return moment(date).format("MMMM Do YYYY");
};
  return (
    <div><input type="date" name="dob" value={date} onChange={handleChange} />
    <h2>{convertToWords(date)}</h2></div>
  )
}

export default DateOfBirth