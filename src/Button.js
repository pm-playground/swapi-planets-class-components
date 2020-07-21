import React from 'react'

const Button = (props) => {
  console.log(props.next)
  console.log(props.prev)
  
  let handleClick = (e) => {
    if(e.target.innerHTML === "Next") {
      props.pageUp()
    }
    if(e.target.innerHTML === "Prev") {
      props.pageDown()
    }
  }

  return(
  <button disabled={props.hasPages} onClick={handleClick} className="btn">{props.name}</button>
  )
}


export default Button