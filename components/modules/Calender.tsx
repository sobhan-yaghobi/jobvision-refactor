import React, { ReactNode } from "react"

// Date Picker
import DatePicker, { CalendarProps, DatePickerProps } from "react-multi-date-picker"
import Jalali from "react-date-object/calendars/jalali"
import persian_fa from "react-date-object/locales/persian_fa"

type CalendarPropss = Omit<CalendarProps, "onChange"> & DatePickerProps & { icon?: ReactNode }
const Calender: React.FC<CalendarPropss> = ({ icon, ...props }) => {
  return (
    <div className="flex items-center gap-3 px-3 border-2 border-muted rounded-sm">
      {icon}
      <DatePicker
        {...props}
        inputClass="w-full placeholder:text-sm outline-none group"
        calendar={Jalali}
        locale={persian_fa}
        maxDate={new Date()}
        calendarPosition="top-right"
        fixMainPosition
        fixRelativePosition
        hideOnScroll
      />
    </div>
  )
}
export default Calender
