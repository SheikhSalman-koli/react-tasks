import { useState } from "react"

export default function ShowHide(){

    let [message, setMessage] = useState("")
    const show=()=>{
        const uupp = message = "hello, react learner!"
        setMessage(uupp)
    }

    return(
        <div style={{
            marginTop: '100px'
        }}>

            <button>show message</button>
            <button>hide message</button>
        </div>
    )
}