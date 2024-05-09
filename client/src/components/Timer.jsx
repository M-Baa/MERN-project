import React, { useState, useEffect } from 'react'
import '../static/css/landingPage.module.css'

const Timer = ({ duration }) => {

    const [time, setTime] = useState(duration)



    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])

    const getFormattedTime = (milliseconds) => {
        let total_sec = parseInt(Math.floor(milliseconds / 1000))
        let total_min = parseInt(Math.floor(total_sec / 60))
        let total_hour = parseInt(Math.floor(total_min / 60))
        let day = parseInt(Math.floor(total_hour / 24))

        //loop in there place
        let seconds = parseInt(total_sec % 60)
        let minutes = parseInt(total_min % 60)
        let hours = parseInt(total_hour % 24)

        const formattedTime = `${String(day).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;


        return formattedTime
    }


    return (
        <div><h5 className=''>{getFormattedTime(time)}</h5></div>
    )
}

export default Timer