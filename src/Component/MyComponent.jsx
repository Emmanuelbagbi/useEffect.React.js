import React, {useState, useEffect} from 'react';
import { BsSubtract } from 'react-icons/bs';

//useEffect() = React Hook that tells React to DO THIS CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              The state of a value

//useEffect(function, [dependencies])

// 1. useEffect(() => {})               //  Runs after every re-render
// 2. useEffect(() => {}, [])           //  Runs only on mount
// 3. useEffect(() => {}, [value])      //  Runs on mount + when value changes

//  USES
//  #1   Event Listeners
//  #2   Dom manipulation
//  #3   Subscriptions (real-time updates) 
//  #4   Fetching Data from an API
//  #5   Clean up when a component unmounts

function MyComponent() {
    const [Count, setCount] = useState(0);
    const [ color, setColor] = useState("green");

    useEffect(() => {
            document.title = 'Count: ${count} ${color}';
    }, [Count, color]);

    function addCount(){
        setCount( c => c + 1)
    }

    function subtractCount(){
        setCount( c => c - 1)
    }

    function ChangeColor() {
        setColor(c => c === "green"? "red" : "green")
    }
    return(
        <>
            <p style={{color: color}}>
                Count: {Count}
            </p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>subtract</button><br />
            <button onClick={ChangeColor}>Change Color</button>
        </>
    )
}
export default MyComponent  