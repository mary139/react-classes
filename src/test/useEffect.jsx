import React, { useState, useEffect } from 'react';
import Welcome from './test/pureComponent';
const style = [
    'color:red',
    'background-color: yellow',
    'font-size: 20px'
].join(';');


function App() {
    const [count, setCount] = useState(0);
    const [greeting, setGreeting] = useState('hello');

    console.log('%cApp! watch up 🦁', style)

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    useEffect(() => {
        console.log('useEffect')
    });

    useEffect(() => {
        console.log('useEffect passing []')
    }, []);

    useEffect(() => {
        console.log('useEffect passing count')
    }, [count]);

    return (
        <div>
            <p>{greeting}</p>
            <button onClick={() => setGreeting(`${greeting}o`)}>
                update greeting
            </button>
            <hr />
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                update count
            </button>
            <Welcome name='namava' />
        </div>
    );
}

export default App