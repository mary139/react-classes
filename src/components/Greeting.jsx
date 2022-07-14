import React, { Component } from 'react';

class Greeting extends Component {
    constructor() {
        super()
        console.log('constructor in child')
    }

    componentDidMount() {
        console.log('componentDidMount in child')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate in child')
    }

    componentWillUnmount() {
        console.log('Unmount in child')
    }

    render() {
        console.log('render in child');
        return (
            <div>
                hello Namava
            </div>
        );
    }
}

export default Greeting;