import React, { Component } from "react"
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import EventRaising from "./components/EventRaising";
import Greeting from "./components/Greeting";


class App extends Component {
  constructor() {
    super()
    console.log('constructor')
    this.state = {
      showGreeting: true,
    }
  }



  render() {
    const { showGreeting } = this.state
    console.log('render', showGreeting);
    return (
      <>
        <Clock />
      </>
    )
  }
}

export default App