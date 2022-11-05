import React from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
const Resume=({ name,email,pno,add,cao,skills,we,edq,buildNew,togglevis })=>{
    const printRef=React.useRef()
    const awe=we.split(',')
    const aedq=edq.split(',')
    const downloadaspdf=async (event)=>{
        event.preventDefault()
        const element =printRef.current
        const canvas=await html2canvas(element)
        const data=canvas.toDataURL('image/png')
    
        const pdf=new jsPDF()
        const imgprop=pdf.getImageProperties(data)
        const pdfWidth=pdf.internal.pageSize.getWidth()
        const pdfHeight=(imgprop.height*pdfWidth)/imgprop.width
        pdf.addImage(data,'PNG',0,0,pdfWidth,pdfHeight)
        pdf.save('print.pdf')
      }
      const goBack=(event)=>{
        event.preventDefault()
        togglevis()
      }
    return(
    <div>
    <div ref={printRef}>
      <div>{name}</div>
      <div>{email}</div>
      <div>{pno}</div>
      <div>{add}</div>
      <div>
        <h2>Career Objective</h2>
        <p>{cao}</p>
      </div>
      <div>
        <h2>Skills and Abilities</h2>
        <p>{skills}</p>
      </div>
      <div>
        <h2>work experience</h2>
        <div>{awe.map((s,index)=><div key={index}>{s}</div>)}</div>
      </div>
      <div>
        <h2>Educational Qualifications</h2>
        <div>{aedq.map((s,index)=><div key={index}>{s}</div>)}</div>
      </div>
      </div>
      <button className="add" onClick={goBack}>go back</button>
      <button className="makeit" onClick={buildNew}>Build New</button>
      <button className="done" onClick={downloadaspdf}>Download pdf</button>
    </div>  
    )
}
export default Resume