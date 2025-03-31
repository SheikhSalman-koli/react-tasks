import { useState } from "react"

export default function Count (){

    let [count, setCount]= useState(0)
    const inccounter=()=>{
        const counterUpdate = count + 1
        setCount(counterUpdate)
    }

    const decCount=()=>{
        const countUpdate = count - 1
        setCount(countUpdate)
    }

    const reset =()=>{
        const resetUpdate = count = 0
        setCount(resetUpdate)
    }

    return(
        <div>
            <h3>increase counter: {count}</h3>
            <button onClick={inccounter}>Increase</button>
            <button onClick={decCount}>decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}