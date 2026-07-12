import SiteHeader from "../components/SiteHeader";import SiteFooter from "../components/SiteFooter";import AskAdeCorporate from "../components/AskAdeCorporate";
export const metadata={title:"Insights | BestBean Ltd",description:"Executive perspectives on AI, education technology, government transformation and enterprise implementation."};
const insights=[
["AI STRATEGY","From AI enthusiasm to operating value","A practical framework for selecting use cases, governing risk and tying implementation to measurable business outcomes."],
["EDUCATION","Why adaptive learning changes exam preparation","How student intelligence, weak-topic remediation and parent visibility create a stronger learning loop than static practice banks."],
["GOVERNMENT","Designing digital programs for national scale","Why governance, adoption, procurement and operational visibility must be designed alongside the technology."],
["SMART CLASSROOMS","Technology is only one part of classroom modernization","The importance of teacher enablement, rollout control, support and usage measurement in education technology programs."],
["ENTERPRISE AI","The board's role in responsible AI","How leadership teams can balance speed, value creation, accountability, security and organizational readiness."],
["SAAS","Building Africa-first software with global potential","A product thesis centered on validated institutional problems, recurring value and disciplined paths to scale."]
];
export default function Page(){return <main><SiteHeader/><section className="pageHero"><p className="eyebrow">BestBean Insights</p><h1>Practical thinking for leaders building with AI and technology.</h1><p>Executive perspectives on strategy, implementation, governance and measurable transformation across Africa.</p></section><section className="insightsGrid">{insights.map(([tag,title,desc],i)=><article key={title}><span>0{i+1}</span><small>{tag}</small><h2>{title}</h2><p>{desc}</p><a href="/contact">Request a briefing →</a></article>)}</section><SiteFooter/><AskAdeCorporate/></main>}
