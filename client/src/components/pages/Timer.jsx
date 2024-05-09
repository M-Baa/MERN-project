import React, { useState, useEffect } from 'react'


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

        return `${day}: ${hours}: ${minutes}: ${seconds}`
    }


    return (
        <div><h1>{getFormattedTime(time)}</h1></div>
    )
}

export default Timer