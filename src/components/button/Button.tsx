import React from 'react'
type ButtonType = {
    title: String,
}
const Button = ({title}: ButtonType) => {
    
  return (
    <>
        <button>
            {title}
        </button>
    
    </>
  )
}

export default Button