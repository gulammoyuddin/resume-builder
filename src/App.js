import { useState } from "react";
import React from "react";
import Resume from "./components/resume";
import Skills from "./components/skills";
import Workexp from "./components/workexp";
import Eduqualifications from "./components/eduqualifications";
function App() {
  const [ name,setName ]=useState("")
  const [ email,setEmail ]=useState("")
  const [ pno,setPno ]=useState("")
  const [ add,setAdd ]=useState("")
  const [ cao,setCao ]=useState("")
  const [ skills,setSkills ]=useState("")
  const [ we,setWe ]=useState("")
  const [ edq,setEdq ]=useState("")
  const [ vis,setVis ]=useState(false)
  let showwhenvis={ display:vis?'':'none'}
  let showwhennotvis={display:vis?'none':''}
  const togglevis=()=>{setVis(!vis)}
  const makeResume=(event)=>{
    event.preventDefault()
    togglevis()
  }
  const buildNew=()=>{
  /*  setAdd("")
    setCao("")
    setEdq("")
    setEmail("")
    setName("")
    setPno("")
    setSkills("")
    setWe("")
    togglevis("")*/
    window.location.reload()
  }
  const getSkills=(sk)=>{
    setSkills(sk)
  }
  const getWe=(sk)=>{
    setWe(sk)
  }
  const getEdq=(sk)=>{
    setEdq(sk)
  }
  return (
    <div >
    <h1>Resume Builder</h1>
    <div style={showwhennotvis}>
        <div>
          <h4>what is your name?</h4>
          <input className='inputs' type='text' value={name} onChange={({ target })=>{setName(target.value)}}/>
        </div>
        <div>
          <h4>what is your email-id?</h4>
          <input className="inputs" type='text' value={email} onChange={({ target })=>{setEmail(target.value)}}/>
        </div>
        <div>
          <h4>what is your phone-number?</h4>
          <input className="inputs" type='text' value={pno} onChange={({ target })=>{setPno(target.value)}}/>
        </div>
        <div>
          <h4>what is your address?</h4>
          <input className="inputs" type='text' value={add} onChange={({ target })=>{setAdd(target.value)}}/>
        </div>
        <div>
          <h4>what is your career objective?</h4>
          <textarea className="inputs" value={cao} onChange={({ target })=>{setCao(target.value)}}/>
        </div>
        <Skills getSkills={getSkills}/>
        <div>
          <Workexp getWe={getWe}/>
        </div>
        <div>
          <Eduqualifications getEdq={getEdq}/>
        </div>
      <div>
      <button className="makeit" type='submit' onClick={makeResume}>make resume</button>
      </div>
    </div>
    <div  style={showwhenvis}>
      <Resume name={name} email={email} pno={pno} add={add} cao={cao} skills={skills} we={we} edq={edq} buildNew={buildNew} togglevis={togglevis}/>
    </div>
    </div>
  )
}

export default App;
