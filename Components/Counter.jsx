"use client"

import { useState } from "react"

export default function counter() {


    const [increase, setIncrease] = useState(0)
    return (
        <>

            <button onClick = {() => setIncrease(num => num +5) }>
                Increment {increase } times
            </button>
        </>
    )
}