import { useState } from "react"
const Skills=({  getSkills })=>{
    const [ skill,setSkill ]=useState("")
    const [skills,setSkills ]=useState([])
    const [ adn,setAdn ]=useState(false)
    const showInput={display:adn?'none':''}
    const addLabel=adn?'add more':'+ add'
    const addSkill=(event)=>{
        event.preventDefault()
        if(adn){
            setAdn(false)
        }else{
        const sk=skills
        sk.push(skill)
        setSkills(sk)
        setSkill("")
        }
    }
    const giveSkills=(event)=>{
        event.preventDefault()
        setAdn(true)
        let cs=skills.toString()
        getSkills(cs)

    }
    return(
        <div>
            <h4>what are your skills and abilities?</h4>
            <div>
                <ul>
                    {skills.map((d,index)=><li key={index}>{d}</li>)}
                </ul>
            </div>
            <form>
                <div style={showInput}><input className="inputs" value={skill} onChange={({ target })=>{setSkill(target.value)}}/></div>
                <div>
                    <button className="add" onClick={addSkill}>{addLabel}</button>
                    <button className="done" type="submit" onClick={giveSkills}>Done</button>
                </div>
            </form>
        </div>
    )
}
export default Skills