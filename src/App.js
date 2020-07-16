import React from 'react'
import axios from 'axios'
import Planets from './Planets'

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
    console.log(this.state.prev)
    console.log(this.state.next)

    return(
      <div className="App">
        <Planets planetData={this.state.data}/>
      </div>
    )
  }
}

export default App