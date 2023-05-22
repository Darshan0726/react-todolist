import { useState } from "react";
export function Counter(){
    const[count,setCount]=useState(0);
    function increment(){
       if(count < 10) setCount(count+1);
    }
    function decrement(){
        if(count > 0) setCount(count-1);
    }
    const styles={
        backgroundColor:"black",
        color:"white",
        borderRadius:"7px",
        height:"35px",
        width:"100px",
        fontSize:"18px",
        border:"0px"
    }
    const desine={
        fontSize:"30px"
    }

    return(
        <>
        <button onClick={increment} style={styles}>increment</button>
        <p style={desine}>{count}</p>
        <button onClick={decrement} style={styles}>decrement</button>
        </>
    );
}