import React from 'react'
import './Button.css'

const Button = ({text, height}) => {

  const style = {
    backgroundColor: 'black',
    height: height,
    color: 'white'
  }

  return (
        <button style={style} className="Button">{text}</button>
  )
}

export default Button