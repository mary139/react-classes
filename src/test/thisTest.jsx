import React, { Component } from "react"


class App extends Component {
    constructor() {
        super()

        this.state = {
            counter: 0,
        }

        // console.log('this', this.handleClick.bind(this));

        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        // console.log('clicked', this)

        this.setState(state => ({ counter: ++state.counter }))
    }
    // handleClick = () => {
    //     console.log('clicked', this)

    //     this.setState(state => ({ counter: ++state.counter }))
    // }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}

export default App