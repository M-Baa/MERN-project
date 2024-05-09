

import t1 from '../static/images/sf-pose1.png'
import t2 from '../static/images/cod.png'
import t3 from '../static/images/fifa.png'

import'../static/css/tourney.css'
import { Link } from 'react-router-dom'

import { SimpleGrid } from '@chakra-ui/react'


import FightingTourney from './FightingTourney'



const Tournament = () => {
    return (
        <div className='tpage'>
            <div className='top'>
                <h1>Available Tournaments</h1>
                <Link className='top-link' to="/fighting_tournament"> Schedule</Link>
            </div>
            <div className='section'>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
                    <div className='cd'>
                        <div>
                            <h5 > Fighting Tournament</h5>
                        </div>
                        <div className='t1'>
                            <img
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src={t1}
                                alt='StreetFighterPose'
                            />
                        </div>
                        <div className='btm-section'>
                            <button className='join-btn'>Join</button>
                        </div>
                    </div>
                    <div className='cd'>
                        <div>
                            <h5 > FPS Tournament</h5>
                        </div>
                        <div className='t1'>
                            <img
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src={t2}
                                alt='StreetFighterPose'
                            />
                        </div>
                        <div className='btm-section'>
                            <button className='join-btn'>Join</button>
                        </div>
                    </div>
                    <div className='cd'>
                        <div>
                            <h5> Fifa Tournament</h5>
                        </div>
                        <div className='t1'>
                            <img
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '100px' }}
                                src={t3}
                                alt='StreetFighterPose'
                            />
                        </div>
                        <div className='btm-section'>
                            <button className='join-btn'>Join</button>
                        </div>
                    </div>

                </SimpleGrid>
            </div>
        </div>
    )
}

export default Tournament