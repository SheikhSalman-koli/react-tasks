import { useState } from "react"

export default function Decrease(){

    const [count, setCount] = useState(0)
    const decCount=()=>{
        const countUpdate = count - 1
        setCount(countUpdate)
    }
    return(
        <div>
            <h3>decrease counter: {count}</h3>
            <button onClick={decCount}>decrease</button>
        </div>
    )
}