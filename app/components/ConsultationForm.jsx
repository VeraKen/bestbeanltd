"use client";
import { useState } from "react";

export default function ConsultationForm(){
 const [sent,setSent]=useState(false);
 function submit(e){
  e.preventDefault(); const data=new FormData(e.currentTarget);
  const subject=encodeURIComponent(`BestBean consultation: ${data.get("interest")}`);
  const body=encodeURIComponent(`Name: ${data.get("name")}\nOrganization: ${data.get("organization")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nInterest: ${data.get("interest")}\n\nOutcome required:\n${data.get("message")}`);
  setSent(true); window.location.href=`mailto:Ken.Spann@bestbeanltd.com?subject=${subject}&body=${body}`;
 }
 return <form className="consultationForm" onSubmit={submit}>
  <div className="formGrid"><label>Name<input name="name" required /></label><label>Organization<input name="organization" required /></label><label>Email<input type="email" name="email" required /></label><label>Phone<input name="phone" /></label></div>
  <label>Area of interest<select name="interest" required><option value="">Select a solution</option><option>Exansphere.APP</option><option>Education Device Management Platform</option><option>Government AI Solutions</option><option>BenQ Education Solutions</option><option>Enterprise AI Consulting</option><option>Future SaaS Products</option></select></label>
  <label>What outcome do you need to create?<textarea name="message" rows="6" required /></label>
  <button className="btn primary formSubmit" type="submit">Prepare Consultation Request</button>
  {sent && <p className="formNote">Your email application has opened with the completed request.</p>}
 </form>
}
