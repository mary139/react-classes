import React from "react";

class Welcome extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // componentDidMount() {
    //     console.log('componentDidMount in PureComponent')
    // }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate in PureComponent')
    // }

    render() {
        // console.log('render');
        const { name } = this.props
        return (<h1>Hello, {name}</h1>)
    }
}

export default Welcome 