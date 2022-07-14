import React, { Component } from "react"
import Counter from "./components/Counter";


class App extends Component {
    constructor() {
        super()
        console.log('constructor')
        this.state = {
            test: 0,
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    handleClick = () => {
        this.setState(state => ({ test: ++state.test }))
    }

    render() {
        const { test } = this.state
        console.log('render', test);
        return (

            <>
                <button onClick={this.handleClick} >render test</button>
                <Counter />
                <Counter />
                <Counter />
            </>
        )
    }
}

export default App