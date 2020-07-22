import React from 'react'
import axios from 'axios'
import Planets from './Planets'
import Button from './Button'
import LoadingScreen from './LoadingScreen'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      isLoaded: false,
      next: '',
      prev: '',
      count: 1
    }
  }


pageUp = () => {
  this.setState(
    {
      count: this.state.count + 1
    }
  )
}

pageDown = () => {
  this.setState(
    {
      count: this.state.count - 1
    }
  )
}

hasNextPages = () => {
  if(!this.state.next) {
    return true
  } 
    return false
}

hasPrevPages = () => {
  if(!this.state.prev) {
    return true
  } 
    return false
}

  componentDidMount() {
    this.setState({isLoaded: true})
    axios.get('https://swapi.dev/api/planets/')
   .then( res => {
     this.setState(
      {
        data: res.data.results,
        next: res.data.next,
        prev: res.data.previous,
        isLoaded: false
      }
      
     )
    })
}


componentDidUpdate(prevProps, prevState) {
  if(prevState.count !== this.state.count) {
    this.setState({isLoaded: true})
    axios.get(`https://swapi.dev/api/planets/?page=${this.state.count}`)
    .then( res => {
      this.setState(
       {
         data: res.data.results,
         next: res.data.next,
         prev: res.data.previous,
         isLoaded: false
       }
       
      )

     })
  }
}



  render() {

    let jsxPlanets = this.state.data.map(element => (
      <Planets key={element.name} stateData={this.state} planetData={element}></Planets>
    ))

    return(
      this.state.isLoaded ? <LoadingScreen /> :
      <div className="App">
        <div className="planet-container">
          {jsxPlanets}
        </div>
        <div className="button-container">
          <Button hasPages={this.hasPrevPages()} pageDown={this.pageDown} prev={this.state.prev} name={'Prev'}/>
          <Button hasPages={this.hasNextPages()} pageUp={this.pageUp} next={this.state.next} name={'Next'}/>
        </div>
      </div>
    )
  }
}

export default App