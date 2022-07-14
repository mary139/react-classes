import React, { Component } from "react"
import Counter from "./components/Counter";


class App extends Component {
    constructor() {
        super()
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        console.log('render',);
        return (
            <>
                <Counter />
                <Counter />
                <Counter />
            </>
        )
    }
}

export default App