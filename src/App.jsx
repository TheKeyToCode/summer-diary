import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (    
        <>
            <div style={{backgroundColor: "red", height:"50px", width:"50px"}}></div>
        </>
    )
}

export default App
