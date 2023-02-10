import React, { useEffect, useState } from "react";
function HookCounterTwo(){
    const initialCount=0
    const [count, setCount]=useState(initialCount)

    const incrementFive = () => {
        for(let i=0;i<5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const display =() =>{
        console.log("count value is :"+ count)
    }

    const state = count%5 === 0;
    console.log(state)

    useEffect(()=>{
        display();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[count])

    return(
        <div>
          Count: {count}
        <button onClick= {()=>setCount(initialCount)} >Reset</button>
        <button onClick = {()=>setCount(prevCount => prevCount+1)} >Increment</button>
        <button onClick = {()=> setCount(prevCount => prevCount-1)}>Decrement</button>
        <button onClick ={incrementFive}> Increment 5</button>
        {state && <span>{count}</span>}
        </div>
    )
}
export default HookCounterTwo;