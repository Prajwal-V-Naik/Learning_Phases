import { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const MyCalendar = () => {
  const [calendarDate, changeCalendarDate] = useState(new Date());
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [savedValues, setSavedValues] = useState([]);

  const handleCalendarClick = (value) => {
    changeCalendarDate(value);
    setShowInput(true);
  };

  const handleSaveClick = () => {
    const newValue = { date: calendarDate.toLocaleDateString('en-GB'), text: inputValue };
    setSavedValues([...savedValues, newValue]);
    setShowInput(false);
    setInputValue('');
  };

  const handleDeleteClick = () => {
    setSavedValues([]);
  };

  const placeholderDate = calendarDate.toLocaleDateString('en-GB');
  
  return (
    <div className="flex flex-col items-center justify-center">
      <Calendar
        value={calendarDate}
        onChange={handleCalendarClick}
        color='#4e9bff'
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
      {savedValues.length > 0 && (
        <div className="mt-4">
          <h3>Saved Values:</h3>
          <div className="grid grid-cols-2 gap-4">
            {savedValues.map((value, index) => (
              <div key={index} className="border border-gray-300 p-2 rounded-md">
                <div>{value.date}</div>
                <div>{value.text}</div>
              </div>
            ))}
          </div>
          <button
            onClick={handleDeleteClick}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
