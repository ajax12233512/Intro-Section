import React from 'react'
import './Button.css'

const Button = ({text, height}) => {
  
  const containerStyle = {
    //   width: '50px',
  }  
  
  const style = {
    backgroundColor: 'white',
    height: height,
    color: 'black',
    borderRadius: '5px',
    border: '1px solid black',
    width: '100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
      <div style={containerStyle}>
        <button style={style} className="Button">{text}</button>
      </div>
  )
}

export default Button