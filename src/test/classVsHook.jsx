import React from "react";

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     // duplicate the code
//     componentDidMount() {
//     const { count } = this.state
//         document.title = `You clicked ${count} times`;
//     }
//     componentDidUpdate() {
//     const { count } = this.state
//         document.title = `You clicked ${count} times`;
//     }

//     render() {
//      const { count } = this.state
//         return (
//             <div>
//                 <p>You clicked {count} times</p>
//                 <button onClick={() => this.setState({ count: count + 1 })}>
//                     Click me
//                 </button>
//             </div>
//         );
//     }
// }


function App() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        // reading count inside {{{the effect}}} because it’s in the scope of our function. 
        // closure
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                update count
            </button>
        </div>
    );
}


export default App