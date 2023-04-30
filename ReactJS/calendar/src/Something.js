import { Calendar } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file

function Something(){
const [calendarDate, changeCalendarDate] = useState(new Date())
return(
    <>
    <h3 className="font-semibold text-md text-black mt-2"> Calendar </h3>
          <div className="w-full h-[40vh] border mt-2 rounded-xl flex flex-row justify-center items-center">
            <Calendar
              date={calendarDate}
              onChange={(date) => changeCalendarDate(date)}
            />
          </div>
    </>
)

}

export default Something