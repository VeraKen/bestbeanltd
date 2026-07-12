import Link from "next/link";
import { notFound } from "next/navigation";
import AskAdeCorporate from "../../components/AskAdeCorporate";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { getPortfolioItem, portfolio } from "../../../lib/portfolio";

export function generateStaticParams() { return portfolio.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }) {
  const item = getPortfolioItem(params.slug);
  if (!item) return {};
  return { title: `${item.title} | BestBean Ltd`, description: item.description };
}

export default function SolutionPage({ params }) {
  const item = getPortfolioItem(params.slug);
  if (!item) notFound();
  const related = portfolio.filter((entry) => entry.slug !== item.slug).slice(0, 3);

  return <main>
    <SiteHeader />

    <section className="solutionHero">
      <div><p className="eyebrow">BestBean Portfolio • {item.number}</p><span className="solutionLabel">{item.label}</span><h1>{item.title}</h1><p className="lead">{item.description}</p><div className="actions"><a className="btn primary" href="#engage">Discuss This Solution</a>{item.external && <a className="btn secondary" href={item.external}>Visit Platform ↗</a>}</div></div>
      <aside className="outcomeCard"><small>Primary outcome</small><strong>{item.outcome}</strong><span>{item.audience}</span></aside>
    </section>

    <section className="solutionBody cream">
      <div><p className="eyebrow dark">Core Capabilities</p><h2>What the solution delivers.</h2></div>
      <div className="capabilityGrid">{item.capabilities.map((capability, index) => <article key={capability}><span>0{index + 1}</span><h3>{capability}</h3></article>)}</div>
    </section>

    <section className="engagementSection" id="engage">
      <div><p className="eyebrow">Engagement Pathways</p><h2>Start at the level that fits your institution.</h2><p>BestBean can support focused advisory, pilots, implementation programmes or scaled deployment.</p></div>
      <div className="engagementList">{item.engagement.map((entry) => <div key={entry}><span>→</span><strong>{entry}</strong></div>)}</div>
    </section>

    <section className="related cream"><div className="sectionIntro"><div><p className="eyebrow dark">Related BestBean Solutions</p><h2>One company. Connected capabilities.</h2></div><p>BestBean combines products, partnerships and consulting so institutions can move from strategy to operating results.</p></div><div className="relatedGrid">{related.map((entry) => <Link href={`/solutions/${entry.slug}`} key={entry.slug}><small>{entry.label}</small><h3>{entry.title}</h3><span>Explore solution →</span></Link>)}</div></section>

    <section className="contact cream"><div><p className="eyebrow dark">Executive Consultation</p><h2>Discuss the outcome you need to create.</h2><p>Share your institution, current challenge, scale and desired result. BestBean will structure the appropriate next step.</p></div><div className="contactCard"><span className="contactLabel">BestBean Ltd</span><a href="mailto:Ken.Spann@bestbeanltd.com">Ken.Spann@bestbeanltd.com</a><a href="mailto:info@bestbeanltd.com">info@bestbeanltd.com</a><span>Lagos, Nigeria</span><a className="contactButton" href={`mailto:Ken.Spann@bestbeanltd.com?subject=${encodeURIComponent(item.title + " Consultation")}`}>Request Consultation</a></div></section>

    <SiteFooter />
    <AskAdeCorporate />
  </main>;
}
