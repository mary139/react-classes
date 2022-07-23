import React from "react";

function App() {
    const [date, setDate] = React.useState(1000);

    React.useEffect(() => {
        const timerId = setInterval(() => {
            setDate(date - 1)
        }, 1000);
        return function cleanup() {
            clearInterval(timerId)
        };
    });

    return (
        <div>
            <h1>{date}</h1>
        </div>
    );
}

export default App