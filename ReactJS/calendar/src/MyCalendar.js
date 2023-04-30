import { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const MyCalendar = () => {
  const [calendarDate, changeCalendarDate] = useState(new Date());
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [resultValue, setResultValue] = useState('');

  const handleCalendarClick = (value) => {
    changeCalendarDate(value);
    setShowInput(true);
  };

  const handleSaveClick = () => {
    // Store selected date and input value
    setResultValue(`${calendarDate.toLocaleDateString('en-GB')} - ${inputValue}`);
    setShowInput(false);
    setInputValue('');
    setShowResult(true);
  };
   const placeholderDate = calendarDate.toLocaleDateString('en-GB');
  return (
    <div className="flex flex-col items-center justify-center">
      <Calendar
        value={calendarDate}
        onChange={handleCalendarClick}
      />
      {showInput && (
        <div className="mt-4 flex flex-row items-center space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`You clicked ${placeholderDate}`}
            className="border border-gray-300 p-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSaveClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      )}
      {showResult && (
        <div className="mt-4">
          <h3>{resultValue}</h3>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;