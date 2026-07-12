import AskAdeCorporate from "./components/AskAdeCorporate";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { portfolio } from "../lib/portfolio";

const operatingModel = [
  ["Discover", "Define the problem, users, economics and measurable outcome."],
  ["Design", "Shape the strategy, architecture, commercial model and implementation plan."],
  ["Build", "Develop, configure or integrate the right technology ecosystem."],
  ["Deploy", "Manage rollout, training, governance and operational readiness."],
  ["Scale", "Measure results, strengthen performance and expand adoption."],
];

const proof = [
  ["6", "Strategic business lines"],
  ["AI", "Embedded across the portfolio"],
  ["360°", "Strategy through implementation"],
  ["Africa", "Designed for local scale"],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero rc6Hero" id="top">
        <div className="heroText">
          <p className="eyebrow">BestBean Ltd • African Technology Group</p>
          <h1>AI platforms and digital solutions built to deliver results.</h1>
          <p className="lead">
            We conceive, build, deploy and operate technology for education,
            government and enterprise—combining owned platforms, strategic
            partnerships and implementation discipline under one accountable company.
          </p>
          <div className="actions">
            <a className="btn primary" href="#portfolio">Explore the Portfolio</a>
            <a className="btn secondary" href="/contact">Discuss an Initiative</a>
          </div>
          <div className="proofBar">
            {proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>

        <div className="executiveConsole" aria-label="BestBean portfolio overview">
          <div className="consoleHeader"><span>BESTBEAN PORTFOLIO</span><b>LIVE</b></div>
          <div className="consoleParent"><span>B</span><div><small>PARENT TECHNOLOGY COMPANY</small><strong>BestBean Ltd</strong></div></div>
          <div className="consoleGrid">
            {portfolio.map((item) => (
              <a className={item.featured ? "consoleItem consoleFeatured" : "consoleItem"} href={`/solutions/${item.slug}`} key={item.slug}>
                <span>{item.number}</span><div><strong>{item.title}</strong><small>{item.label}</small></div><b>→</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="credibilityBand">
        <span>Built for institutional outcomes</span>
        <b>Owned Platforms</b><b>Government Programs</b><b>Education Technology</b><b>Enterprise Transformation</b><b>SaaS Innovation</b>
      </section>

      <section className="portfolioSection cream" id="portfolio">
        <div className="sectionIntro">
          <div><p className="eyebrow dark">The BestBean Portfolio</p><h2>Six focused growth engines. One trusted technology partner.</h2></div>
          <p>Each business line has a defined customer, commercial role and path to scale. Together they form a diversified technology group anchored in measurable outcomes.</p>
        </div>
        <div className="rc6PortfolioGrid">
          {portfolio.map((item) => (
            <a className={item.featured ? "rc6PortfolioCard flagship" : "rc6PortfolioCard"} href={`/solutions/${item.slug}`} key={item.slug}>
              <div className="cardHead"><span>{item.number}</span><small>{item.featured ? "FLAGSHIP PLATFORM" : item.label}</small></div>
              <h3>{item.title}</h3><p>{item.description}</p>
              <div className="cardFoot"><small>{item.audience}</small><b>Explore solution →</b></div>
            </a>
          ))}
        </div>
      </section>

      <section className="productShowcase">
        <div className="productCopy">
          <p className="eyebrow">Flagship Product</p>
          <h2>ExamSphere makes exam preparation measurable.</h2>
          <p>Adaptive practice, unique question generation, weak-topic analysis, student intelligence, parent reporting and Ask Ade AI tutoring—built for WAEC, JAMB and the broader examination market.</p>
          <div className="pills darkPills"><span>Adaptive Practice</span><span>Ask Ade AI Tutor</span><span>Parent Reports</span><span>Student Intelligence</span></div>
          <a className="btn primary" href="/solutions/examsphere">View ExamSphere</a>
        </div>
        <div className="deviceStage" aria-label="ExamSphere product preview">
          <div className="laptopMockup"><div className="mockTop"><span>ExamSphere</span><small>Student Success Center</small></div><div className="mockStats"><div><b>78%</b><small>Readiness</small></div><div><b>12</b><small>Topics mastered</small></div><div><b>4</b><small>Focus areas</small></div></div><div className="mockChart"><i/><i/><i/><i/><i/><i/></div><div className="mockRows"><span/><span/><span/></div></div>
          <div className="phoneMockup"><small>Ask Ade</small><strong>How can I help you improve today?</strong><span>Practice Algebra</span><span>Review weak topics</span></div>
        </div>
      </section>

      <section className="method cream" id="model">
        <div className="sectionIntro"><div><p className="eyebrow dark">BestBean Operating Model</p><h2>From strategic intent to scaled operating results.</h2></div><p>We remain accountable beyond the recommendation—through architecture, implementation, adoption, measurement and scale.</p></div>
        <div className="timelineGrid">{operatingModel.map(([title,text],index)=><article key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="institutionalSection">
        <div><p className="eyebrow">Government, Education & Enterprise</p><h2>Designed for complexity, accountability and national scale.</h2><p>BestBean combines executive advisory, product ownership, sector expertise and implementation discipline to solve high-value institutional problems.</p></div>
        <div className="institutionalCards"><article><span>01</span><h3>Government-grade delivery</h3><p>Governance, procurement awareness, stakeholder alignment and deployment control.</p></article><article><span>02</span><h3>Education specialization</h3><p>Platforms, classrooms, devices, analytics and capacity building in one ecosystem.</p></article><article><span>03</span><h3>Outcome-led AI</h3><p>Automation and intelligence tied to operating metrics—not technology theatre.</p></article></div>
      </section>

      <section className="leadership rc6Leadership" id="leadership">
        <div className="portrait executivePortrait">KS</div>
        <div><p className="eyebrow dark">Executive Leadership</p><h2>Kenneth Spann, JD, MBA</h2><p>Founder and Principal Consultant with experience spanning technology leadership, enterprise consulting, education, commercial strategy and international market development.</p><div className="pills"><span>Technology Strategy</span><span>Enterprise Consulting</span><span>Education Innovation</span><span>Market Development</span></div><a className="textLink" href="/leadership">View leadership profile →</a></div>
      </section>

      <section className="contact cream" id="contact">
        <div><p className="eyebrow dark">Executive Consultation</p><h2>Bring us the outcome you need to create.</h2><p>Discuss AI transformation, government programs, ExamSphere partnerships, BenQ deployments, device management or a new SaaS opportunity.</p></div>
        <div className="contactCard"><span className="contactLabel">BestBean Ltd</span><a href="mailto:Ken.Spann@bestbeanltd.com">Ken.Spann@bestbeanltd.com</a><a href="mailto:info@bestbeanltd.com">info@bestbeanltd.com</a><span>Lagos, Nigeria</span><a className="contactButton" href="/contact">Request Consultation</a></div>
      </section>

      <SiteFooter /><AskAdeCorporate />
    </main>
  );
}
