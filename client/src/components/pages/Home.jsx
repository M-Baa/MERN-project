import React from 'react'
import Timer from './Timer'
import style  from '../../static/css/landingPage.module.css'
import { Link } from 'react-router-dom'



const LandingPage = () => {


    return (
        <div className={style.land}>
            <div className={style.leftb}>
                <h1 className={style.slogan1}>CLOUD NINE</h1>
                <h3>PLAY BEYOND THE SKY</h3>
            </div>
            <div className={style.rightb}>
                <Timer duration={2 * 24 * 60 * 60 * 1000} />
                <h1>UPCOMING TOURNAMENT</h1>
                <Link className={style.reg} href="">REGISTER TODAY</Link>
            </div>
        </div>
    )
}

export default LandingPage 