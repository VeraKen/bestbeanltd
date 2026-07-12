"use client";
import { useState } from "react";
const questions=[
["Strategy","Does your organization have a clearly defined AI or digital-transformation outcome?"],
["Data","Are the required data sources accessible, reliable and governed?"],
["Processes","Have you identified high-value workflows suitable for automation or augmentation?"],
["Leadership","Is there an executive sponsor with authority to remove barriers?"],
["Capability","Do internal teams have the skills and operating capacity to adopt the solution?"],
["Governance","Are privacy, security, ethics and accountability requirements defined?"]];
export default function ReadinessAssessment(){
 const [answers,setAnswers]=useState(Array(questions.length).fill(null));
 const answered=answers.filter(v=>v!==null).length;
 const score=Math.round((answers.reduce((a,v)=>a+(v||0),0)/(questions.length*3))*100);
 const band=score>=75?"Scale Ready":score>=50?"Implementation Ready":score>=30?"Foundation Required":"Early Stage";
 return <div className="assessmentCard">
  <div className="assessmentTop"><div><p className="eyebrow dark">Executive Diagnostic</p><h2>AI Readiness Assessment</h2></div><div className="scoreDial"><strong>{answered===questions.length?score:"—"}%</strong><span>{answered===questions.length?band:`${answered}/${questions.length} answered`}</span></div></div>
  <div className="assessmentQuestions">{questions.map(([title,text],i)=><article key={title}><div><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div><div className="answerScale" aria-label={`${title} score`}>{[[1,"No"],[2,"Partly"],[3,"Yes"]].map(([v,l])=><button key={v} className={answers[i]===v?"selected":""} onClick={()=>setAnswers(a=>a.map((x,j)=>j===i?v:x))}>{l}</button>)}</div></article>)}</div>
  {answered===questions.length&&<div className="assessmentResult"><div><strong>{band}</strong><p>Your score is an initial directional indicator. BestBean can validate priorities, risks, economics and the implementation roadmap.</p></div><a className="btn primary" href={`/contact?subject=AI%20Readiness%20Assessment%20-%20${score}%25`}>Discuss your result</a></div>}
 </div>
}
