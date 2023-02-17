import React from 'react'
import './iconButton.css'

const IconButton = ({ children, btnType, icon, iconStyle, ...props}) => {
  return (
    // <Button children={children} btnType={btnType} {...props}>
    //   <img src={icon} alt="iconButton" style={iconStyle}/>
    // </Button>

    <button type="button" className="iconButton" {...props}>
      <img src={icon} alt="iconButton" style={iconStyle}/>
    </button>
  )
}

export default IconButton