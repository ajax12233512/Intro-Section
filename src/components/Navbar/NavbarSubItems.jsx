import React from 'react'

const style = {
    margin: '1rem',
    top: '0px',
    right: '20px',
    position: 'relative',
    backgroundColor: '#f5f5f5',
    width: '100px',
    zIndex: '1'
}
function NavbarSubItems(props) {
  return (
    <div style={style} className='subitems'>
        {props.subitems.map(item => <p>{item}</p>)}
    </div>
  )
}

export default NavbarSubItems