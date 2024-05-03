import React from "react"

interface TimeGeneratorProps {
  date: Date
}

interface TimeType {
  date: number
  type: "Second" | "Minute" | "Hour" | "Day" | "Month" | "Year" | "NotValid"
  message: string
}

const TimeGenerator: React.FC<TimeGeneratorProps> = ({ date }) => {
  const getTime = (date: Date | string): TimeType => {
    const nowTime = new Date().getTime()
    const dateTime = typeof date === "string" ? new Date(date).getTime() : date.getTime()

    const mainTime = nowTime - dateTime
    const secondsTime = Math.floor(mainTime / 1000)
    const minutesTime = Math.floor(mainTime / 1000 / 60)
    const hourTime = Math.floor(mainTime / 1000 / 60 / 60)
    const dayTime = Math.floor(mainTime / 1000 / 60 / 60 / 24)
    const monthTime = Math.floor(mainTime / 1000 / 60 / 60 / 24 / 30)
    const yearTime = Math.floor(mainTime / 1000 / 60 / 60 / 24 / 30 / 12)

    return dateTime < nowTime && secondsTime > 0 && secondsTime <= 59
      ? { date: secondsTime, type: "Second", message: `هم اکنون` }
      : dateTime < nowTime && minutesTime > 0 && minutesTime <= 59
      ? { date: minutesTime, type: "Minute", message: `${minutesTime} دقیقه پیش` }
      : dateTime < nowTime && hourTime > 0 && hourTime <= 23
      ? { date: hourTime, type: "Hour", message: `${hourTime} ساعت پیش` }
      : dateTime < nowTime && dayTime > 0 && dayTime <= 31
      ? { date: dayTime, type: "Day", message: `${dayTime} روز پیش` }
      : dateTime < nowTime && monthTime > 0 && monthTime <= 12
      ? { date: monthTime, type: "Month", message: `${monthTime} ماه پیش` }
      : dateTime < nowTime && yearTime > 0
      ? { date: yearTime, type: "Year", message: `${yearTime} سال پیش` }
      : { date: 0, type: "NotValid", message: `غیرمعتبر` }
  }

  const dateInfo = getTime(date)
  return <>{dateInfo.message}</>
}

export default TimeGenerator
