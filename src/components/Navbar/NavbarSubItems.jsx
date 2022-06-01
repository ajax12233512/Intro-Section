import React from 'react'

const style = {
    position: 'relative',
    top: '10px',
    right: '4px',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    boxShadow: '1px 1px 5px black',
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