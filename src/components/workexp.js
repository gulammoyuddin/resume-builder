import { useState } from "react"
const Workexp=( { getWe } )=>{
    const [ exp,setExp ]=useState("")
    const [ we,setWe ]=useState([])
    const [ adn,setAdn ]=useState(false)
    const showInput={display:adn?'none':''}
    const addLabel=adn?'add more':'+ add'
    const addExp=(event)=>{
        event.preventDefault()
        if(adn){
            setAdn(false)
        }else{
        const sk=we
        sk.push(exp)
        setWe(sk)
        setExp("")
        }
    }
    const giveWe=(event)=>{
        event.preventDefault()
        setAdn(true)
        let cs=we.toString()
        getWe(cs)

    }
    return(
        <div>
            <h4>what are your work experiences?</h4>
            <div>
                <ul>
                    {we.map((d,index)=><li key={index}>{d}</li>)}
                </ul>
            </div>
            <form>
                <div style={showInput}><input className="inputs" value={exp} onChange={({ target })=>{setExp(target.value)}}/></div>
                <div>
                    <button className="add" onClick={addExp}>{addLabel}</button>
                    <button className="done" type="submit" onClick={giveWe}>Done</button>
                </div>
            </form>
        </div>
    )
}
export default Workexp