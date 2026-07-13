import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import AskAdeCorporate from "../components/AskAdeCorporate";
import Link from "next/link";

export const metadata={title:"Industries | BestBean Ltd",description:"BestBean AI and technology solutions for government, education, financial services, healthcare, enterprise and development organizations."};
const industries=[
 ["Government & Public Sector","Modernize services, automate workflows, improve executive visibility and deploy accountable technology at scale.","Government AI Solutions"],
 ["Education","Improve teaching, learning, exam readiness, classroom technology and oversight of digital-learning devices.","Exansphere.APP and BenQ Education"],
 ["Financial Services","Apply governed AI to service, operations, risk, reporting, customer experience and workforce productivity.","Enterprise AI Consulting"],
 ["Healthcare","Use decision support, workflow automation and information systems to improve operational performance and access.","Enterprise AI Consulting"],
 ["Large Enterprises","Build practical AI roadmaps, redesign priority workflows and establish governance for scalable adoption.","Enterprise AI Consulting"],
 ["Development Organizations","Design measurable digital programmes, monitoring platforms and institution-strengthening initiatives.","Government AI Solutions"]
];
export default function Industries(){return <main><SiteHeader/><section className="pageHero"><p className="eyebrow">Industries</p><h1>Technology shaped around institutional realities.</h1><p className="lead">BestBean combines sector context, product thinking and implementation discipline to solve high-value problems in complex operating environments.</p></section><section className="industrySection cream"><div className="sectionIntro"><div><p className="eyebrow dark">Where We Work</p><h2>Focused on sectors where outcomes matter at scale.</h2></div><p>Our portfolio is designed for institutions that need more than software: they need adoption, governance, execution and measurable results.</p></div><div className="industryGrid">{industries.map(([title,text,solution],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p><small>{solution}</small></article>)}</div></section><section className="ctaBand"><div><p className="eyebrow">Institutional Challenge</p><h2>Start with the outcome—not the technology.</h2></div><Link className="btn primary" href="/contact">Discuss Your Initiative</Link></section><SiteFooter/><AskAdeCorporate/></main>}
