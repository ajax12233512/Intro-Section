import React from 'react'

const style = {
    // display: 'flex',
}
function NavbarSubItems(props) {
  return (
    <div style={style} className='subitems'>
        {props.subitems.map(item => <p>{item}</p>)}
    </div>
  )
}

export default NavbarSubItems