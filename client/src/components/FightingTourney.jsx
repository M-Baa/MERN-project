import React from 'react'
import Timer from './Timer'
import Tournament from './Tournament'
import { Link } from 'react-router-dom'

import t1 from '../static/images/sf-wp.jpeg'
import t2 from '../static/images/dragonball.jpeg'
import t3 from '../static/images/tekken.jpeg'
import '../static/css/tourney.css'
import { SimpleGrid } from '@chakra-ui/react'

const FightingTourney = () => {
    return (
        <div>
            <div className='tpage'>
                <div className='top'>
                    <h1>FIGHTING TOURNAMENT</h1>
                </div>
                <div className='section'>
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
                        <div className='cd'>
                            <div>
                                <h5>Street Fighter</h5>
                                <h5>05/10/2024</h5>
                            </div>
                            <div className='s-fighter'>
                                <img
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={t1}
                                    alt='StreetFighterPose'
                                />
                                <h5 >Deadline: <Timer className='timer' duration={2 * 24 * 60 * 60 * 1000} /></h5>
                                <div className='footer'>
                                    <div>
                                        <p>Entry</p>
                                        <p>*Cost of entry*</p>
                                    </div>
                                    <div>
                                        <p>Mode</p>
                                        <p>*who VS who*</p>
                                    </div>
                                    <div>
                                        <p>Prize</p>
                                        <p>*Prize*</p>
                                    </div>
                                </div>
                                <div>
                                    <button className='join-btn'><Link className='ft-links' to="/livestream">Watch</Link></button>
                                </div>

                            </div>
                        </div>
                        <div className='cd'>
                            <div>
                                <h5>Dragonball FighterZ</h5>
                                <h5>06/10/2024</h5>
                            </div>
                            <div className='s-fighter'>
                                <img
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={t2}
                                    alt='StreetFighterPose'
                                />
                                <h5 >Deadline: <Timer className='timer' duration={3 * 24 * 60 * 60 * 1000} /></h5>
                                <div className='footer'>
                                    <div>
                                        <p>Entry</p>
                                        <p>*Cost of entry*</p>
                                    </div>
                                    <div>
                                        <p>Mode</p>
                                        <p>*who VS who*</p>
                                    </div>
                                    <div>
                                        <p>Prize</p>
                                        <p>*Prize*</p>
                                    </div>
                                    <button className='join-btn'><Link className='ft-links' to="/livestream">Watch</Link></button>
                                </div>

                            </div>
                        </div>
                        <div className='cd'>
                            <div>
                                <h5>Tekken 8</h5>
                                <h5>07/10/2024</h5>
                            </div>
                            <div className='s-fighter'>
                                <img
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={t3}
                                    alt='StreetFighterPose'
                                />
                                <h5 >Deadline: <Timer className='timer' duration={4 * 24 * 60 * 60 * 1000} /></h5>
                                <div className='footer'>
                                    <div>
                                        <p>Entry</p>
                                        <p>*Cost of entry*</p>
                                    </div>
                                    <div>
                                        <p>Mode</p>
                                        <p>*who VS who*</p>
                                    </div>
                                    <div>
                                        <p>Prize</p>
                                        <p>*Prize*</p>
                                    </div>
                                    <button className='join-btn'><Link className='ft-links' to="/livestream">Watch</Link></button>
                                </div>

                            </div>
                        </div>
                    </SimpleGrid>
                </div>
            </div>



        </div>


    )
}

export default FightingTourney