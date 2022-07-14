import React, { Component } from "react"
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

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('Unmount')
    }


    handleDeleteGreeting = () => {
        this.setState({ showGreeting: false })
    }

    handleShowGreeting() {
        this.setState({ showGreeting: true })
    }

    render() {
        const { showGreeting } = this.state
        console.log('render', showGreeting);
        return (
            <>
                <button onClick={this.handleDeleteGreeting} >unmount test</button>
                {showGreeting && <Greeting />}
                <hr />
                <EventRaising handleShowGreeting={this.handleShowGreeting.bind(this)} />
                <Counter />

            </>
        )
    }
}

export default App