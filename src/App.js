import React from 'react'
import axios from 'axios'
import Planets from './Planets'
import Button from './Button'

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

  componentDidMount() {
    console.log('loading ....')
    axios.get('https://swapi.dev/api/planets/')
   .then( res => {
     this.setState(
      {
        data: res.data.results,
        next: res.data.next,
        prev: res.data.previous
      }
      
     )
      this.setState({
        isLoaded: true
      })
    })
}


componentDidUpdate(prevProps, prevState) {
  console.log('loading ....')
  if(prevState.count !== this.state.count) {
    axios.get(`https://swapi.dev/api/planets/?page=${this.state.count}`)
    .then( res => {
      this.setState(
       {
         data: res.data.results,
         next: res.data.next,
         prev: res.data.previous
       }
       
      )
       this.setState({
         isLoaded: true
       })
     })
  }
}

  render() {

    let jsxPlanets = this.state.data.map(element => (
      <Planets key={element.name} stateData={this.state} planetData={element}></Planets>
    ))

    return(
      
      <div className="App">
        {jsxPlanets}
        <div className="button-container">
          <Button pageDown={this.pageDown} prev={this.state.prev} name={'Prev'}/>
          <Button pageUp={this.pageUp} next={this.state.next} name={'Next'}/>
        </div>
      </div>
    )
  }
}

export default App