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
      prev: ''
    }
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

  render() {

    let jsxPlanets = this.state.data.map(element => (
      <Planets key={element.name} stateData={this.state} planetData={element}></Planets>
    ))

    return(
      <div className="App">
        {jsxPlanets}
        <div className="button-container">
          <Button name={'Prev'}/>
          <Button name={'Next'}/>
        </div>
      </div>
    )
  }
}

export default App