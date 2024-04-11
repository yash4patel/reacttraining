import { useState } from "react"

const Demo1 = ()=>{
    const[color,setColor]=useState("Red") 
    return(<>
    {color}
    <button onClick={()=>setColor('Blue')}>Change</button>
    </>)
}
export default Demo1