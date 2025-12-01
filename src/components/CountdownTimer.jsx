import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"

dayjs.extend(duration)

export default function CountdownTimer() {
  const targetDate = dayjs("2027-12-31 00:00:00")

  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = dayjs()
    const diffMs = targetDate.diff(now)

    if (diffMs <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const dur = dayjs.duration(diffMs)

    return {
      days: Math.floor(dur.asDays()),
      hours: dur.hours(),
      minutes: dur.minutes(),
      seconds: dur.seconds(),
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

//   const pad = (n) => String(n).padStart(2, "0")

  return (
    <div className="text-2xl underline">
      {(timeLeft.days)} Days : {(timeLeft.hours)} Hrs : {(timeLeft.minutes)} Min : {(timeLeft.seconds)} Secs
    </div>
  )
}
