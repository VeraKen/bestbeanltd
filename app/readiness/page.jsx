import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import AskAdeCorporate from "../components/AskAdeCorporate";
import ReadinessAssessment from "./ReadinessAssessment";
export const metadata={title:"AI Readiness Assessment | BestBean Ltd",description:"Evaluate strategic, data, process, leadership, capability and governance readiness for AI implementation."};
export default function Page(){return <main><SiteHeader/><section className="pageHero"><p className="eyebrow">BestBean Advisory</p><h1>Measure readiness before investing at scale.</h1><p>Use this six-dimension executive diagnostic to identify whether your organization is ready to move from AI interest to implementation.</p></section><section className="assessmentSection"><ReadinessAssessment/></section><SiteFooter/><AskAdeCorporate/></main>}
