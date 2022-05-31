import React from 'react'

const style = {
    margin: '1rem',
    top: '0px',
    position: 'relative',
    backgroundColor: '#f5f5f5',
}
function NavbarSubItems(props) {
  return (
    <div style={style} className='subitems'>
        {props.subitems.map(item => <p>{item}</p>)}
    </div>
  )
}

export default NavbarSubItems