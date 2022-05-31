import React from 'react'
import Button from '../Button/Button'
import heroPic from '../../images/image-hero-desktop.png'
import './Hero.css'
import {ReactComponent as Databiz} from '../../images/client-databiz.svg'
import {ReactComponent as Audiophile} from '../../images/client-audiophile.svg'
import {ReactComponent as Maker} from '../../images/client-maker.svg'
import {ReactComponent as Meet} from '../../images/client-meet.svg'

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h1>Make remote work</h1>
        <p>Get you team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <Button text='Learn more' />
        <div className='hero-left-sponsers'>
          <Databiz />
          <Audiophile />
          <Maker />
          <Meet />
        </div>
      </div>
      <div className='hero-right'>
        <img src={heroPic} alt='hero' />
      </div>
    </div>
  )
}

export default Hero