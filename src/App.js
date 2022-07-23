import React, { useEffect } from "react";

function App() {
  const [date, setDate] = React.useState(1000);

  useEffect(() => {
    console.log('[useEffect] setup');

    // A message signals to reload one of the `list` items
    document.getElementById('header').addEventListener("click", e => {
      console.log('[useEffect] websocket message!')
      setDate(date - 1)
    });

    // Before next effect runs, close this websocket
    return () => {
      document.getElementById('header').removeEventListener('click', () => {
        console.log('[useEffect] removeEventListener');
      })
      console.log('[useEffect] cleanup');
    }
  }, [date]);

  return (
    <div>
      <h1 id='header'>{date}</h1>
    </div>
  );
}

export default App