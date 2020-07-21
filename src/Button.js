import React from 'react'

const Button = (props) => {
  console.log(props.next)
  console.log(props.prev)

  let handleClick = (e) => {
    if(e.target.innerHTML === "Next") {
      console.log('this is next')
    }
    if(e.target.innerHTML === "Prev") {
      console.log('this is prev')
    }
  }

  return(
  <button onClick={handleClick} className="btn">{props.name}</button>
  )
}


export default Button