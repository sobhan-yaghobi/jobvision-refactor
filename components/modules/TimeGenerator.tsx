import { TimeType } from "@/lib/utils"

interface TimeGeneratorProps {
  dateInfo: TimeType
}

const TimeGenerator: React.FC<TimeGeneratorProps> = ({ dateInfo }) => {
  return (
    <>
      {dateInfo.type === "Second"
        ? `هم اکنون`
        : dateInfo.type === "Minute"
        ? `${dateInfo.date} دقیقه پیش`
        : dateInfo.type === "Hour"
        ? `${dateInfo.date} ساعت پیش`
        : dateInfo.type === "Day"
        ? `${dateInfo.date} روز پیش`
        : dateInfo.type === "Month"
        ? `${dateInfo.date} ماه پیش`
        : dateInfo.type === "Year"
        ? `${dateInfo.date} سال پیش`
        : null}
    </>
  )
}

export default TimeGenerator
