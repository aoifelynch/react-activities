import { useState } from "react";

const Clicker = (props) => {
    // let count = props.startFrom

    const [count, setCount] = useState(props.startFrom);

    const handleCountUp = () => {
        console.log("clicked")
        setCount(count+1)
    }

    return(
        <>
            <p>you have clicked {count} times</p>
            <button onClick={handleCountUp}>Click me</button>
        </>
    );
};

export default Clicker;

