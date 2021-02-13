import React from 'react'
import Anime from 'react-anime'
import image from './assets/loading.png'

const LoadingScreen = () => {
  let transition = {
    rotate: '360deg',
    duration: '9999',
    easing: 'linear',
    loop: true
    }
  return (
    <div className="loading-screen-container">
      <Anime {...transition}>
        <img className='loading-image' src={image} />
      </Anime>
      <h2 className="loading-text">Loadign ...</h2>
    </div>
  )
}

export default LoadingScreen