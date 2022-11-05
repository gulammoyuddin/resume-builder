import { useState } from "react"
const Eduqualifications=( { getEdq } )=>{
    const [ q,setQ ]=useState("")
    const [ edq,setEdq ]=useState([])
    const [ adn,setAdn ]=useState(false)
    const showInput={display:adn?'none':''}
    const addLabel=adn?'add more':'+ add'
    const addq=(event)=>{
        event.preventDefault()
        if(adn){
            setAdn(false)
        }else{
        const sk=edq
        sk.push(q)
        setEdq(sk)
        setQ("")
        }
    }
    const giveEdq=(event)=>{
        event.preventDefault()
        setAdn(true)
        let cs=edq.toString()
        getEdq(cs)
    }
    return(
        <div>
            <h4>What are your educational qualifications?</h4>
            <div>
                <ul>
                    {edq.map((d,index)=><li key={index}>{d}</li>)}
                </ul>
            </div>
            <form>
                <div style={showInput}><input className="inputs" value={q} onChange={({ target })=>{setQ(target.value)}}/></div>
                <div>
                    <button className="add" onClick={addq}>{addLabel}</button>
                    <button className="done" type="submit" onClick={giveEdq}>Done</button>
                </div>
            </form>
        </div>
    )
}
export default Eduqualifications