"use client";

import { useEffect, useRef, useState } from "react";

const QUICK_PROMPTS = [
  "Show me the BestBean portfolio",
  "Tell me about Exansphere.APP",
  "Government AI solutions",
  "Device management platform",
  "Schedule a consultation",
];

const RESPONSES = [
  {
    keywords: ["portfolio", "business lines", "products", "what does", "bestbean", "company"],
    answer:
      "BestBean Ltd is the parent technology company for six strategic business lines: Exansphere.APP, the Education Device Management Platform, Government AI Solutions, BenQ Education Solutions, Enterprise AI Consulting and a pipeline of Future SaaS Products.",
  },
  {
    keywords: ["examsphere", "waec", "jamb", "learning platform", "student", "parent"],
    answer:
      "Exansphere.APP is BestBean's flagship AI learning platform. It combines adaptive exam preparation, unique practice questions, weak-topic analysis, student success reporting, parent visibility and Ask Ade AI tutoring. It is being built to support WAEC, JAMB, NECO, IGCSE, SAT and Common Entrance over time.",
  },
  {
    keywords: ["device", "mdm", "gps", "tablet", "ministry platform", "management platform"],
    answer:
      "The Education Device Management Platform is a ministry-scale solution for device enrollment, GPS visibility, remote policy control, device health, classroom oversight, lost-device response and centralized reporting across large education deployments.",
  },
  {
    keywords: ["government", "ministry", "public sector", "agency", "govtech"],
    answer:
      "BestBean's Government AI Solutions cover digital-transformation roadmaps, workflow automation, executive dashboards, citizen-service modernization, responsible-AI governance, procurement support, capacity building and implementation oversight.",
  },
  {
    keywords: ["benq", "interactive display", "smart board", "smart classroom", "education solutions"],
    answer:
      "BestBean delivers BenQ Education Solutions for smart classrooms, including interactive displays, deployment planning, supply coordination, installation, teacher enablement and institutional rollout support.",
  },
  {
    keywords: ["enterprise", "consulting", "ai strategy", "automation", "digital transformation"],
    answer:
      "Enterprise AI Consulting helps boards and leadership teams move from AI interest to measurable implementation through readiness assessment, operating-model redesign, workflow automation, technology selection, governance and long-term transformation support.",
  },
  {
    keywords: ["saas", "future product", "future products", "innovation", "pipeline"],
    answer:
      "Future SaaS Products represents BestBean's product-development pipeline: Africa-first software built around validated institutional problems, recurring revenue, strong user outcomes and the potential to scale globally.",
  },
  {
    keywords: ["price", "cost", "proposal", "quote", "budget"],
    answer:
      "BestBean scopes each engagement around the required outcome, institution size, deployment complexity, technology requirements and support model. An executive consultation is the first step toward a formal solution and proposal.",
  },
  {
    keywords: ["consultation", "contact", "meeting", "schedule", "speak", "email", "partner"],
    answer:
      "You can request an executive consultation or partnership discussion by emailing Ken.Spann@bestbeanltd.com or info@bestbeanltd.com. Include your organization, the outcome you need and your preferred meeting date.",
    action: true,
  },
];

function findResponse(input) {
  const normalized = input.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;
  for (const response of RESPONSES) {
    const score = response.keywords.reduce((total, keyword) => total + (normalized.includes(keyword) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; bestMatch = response; }
  }
  return bestMatch || {
    answer:
      "I can explain BestBean's six business lines: Exansphere.APP, Education Device Management, Government AI, BenQ Education, Enterprise AI Consulting and Future SaaS Products. Ask about any one of them or request a consultation.",
  };
}

export default function AskAdeCorporate() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "assistant", text: "Welcome to BestBean Ltd. I'm Ask Ade Corporate. Which part of the BestBean portfolio would you like to explore?" }]);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, open]);

  function submitMessage(value) {
    const trimmed = value.trim();
    if (!trimmed) return;
    const response = findResponse(trimmed);
    setMessages((current) => [...current, { role: "user", text: trimmed }, { role: "assistant", text: response.answer, action: response.action }]);
    setInput("");
  }

  return (
    <div className="adeWidget">
      {open && (
        <section className="adePanel" aria-label="Ask Ade Corporate assistant">
          <header className="adeHeader">
            <div className="adeIdentity"><span className="adeAvatar">A</span><div><strong>Ask Ade Corporate</strong><small><i /> BestBean portfolio assistant</small></div></div>
            <button className="adeClose" onClick={() => setOpen(false)} aria-label="Close Ask Ade">×</button>
          </header>
          <div className="adeMessages" ref={messagesRef} aria-live="polite">
            {messages.map((message, index) => (
              <div className={`adeMessage ${message.role}`} key={`${message.role}-${index}`}><p>{message.text}</p>{message.action && <a className="adeEmail" href="mailto:Ken.Spann@bestbeanltd.com?subject=BestBean%20Executive%20Consultation%20Request">Request consultation</a>}</div>
            ))}
          </div>
          <div className="adePrompts" aria-label="Suggested questions">{QUICK_PROMPTS.map((prompt) => <button key={prompt} onClick={() => submitMessage(prompt)}>{prompt}</button>)}</div>
          <form className="adeForm" onSubmit={(event) => { event.preventDefault(); submitMessage(input); }}>
            <label className="srOnly" htmlFor="ade-input">Ask a question</label>
            <input id="ade-input" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about the portfolio..." autoComplete="off" />
            <button type="submit" aria-label="Send question">→</button>
          </form>
          <p className="adeDisclaimer">Corporate information assistant • No confidential data</p>
        </section>
      )}
      <button className="adeLauncher" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? "Close Ask Ade Corporate" : "Open Ask Ade Corporate"}>
        <span className="adeLauncherIcon">A</span><span><strong>Ask Ade</strong><small>Corporate assistant</small></span>
      </button>
    </div>
  );
}
