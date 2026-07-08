const engagements = [
  {
    title: 'ExamSphere AI Learning Platform',
    text: 'Adaptive WAEC and JAMB preparation with unique questions, Ask Ade AI Tutor, weak-topic analysis, student reports and parent visibility.',
    meta: 'AI Assessment • Parent Reports • Student Success'
  },
  {
    title: 'National Education Device Management Platform',
    text: 'Device enrollment, GPS visibility, policy controls, device health, classroom oversight and ministry-level reporting for large education deployments.',
    meta: 'MDM • GPS • Ministry Dashboard'
  },
  {
    title: 'BenQ Interactive Classroom Solutions',
    text: 'Smart classroom deployment with EDLA interactive displays, teacher enablement, training, installation and institutional rollout support.',
    meta: 'Interactive Displays • Training • Rollout'
  },
  {
    title: 'Enterprise AI & Digital Transformation',
    text: 'Executive advisory, AI readiness, workflow modernization, technology licensing, implementation governance and long-term support.',
    meta: 'AI Strategy • Licensing • Implementation'
  }
];

const capabilities = [
  ['AI Strategy & Implementation', 'Practical AI adoption, automation planning, workflow modernization and intelligent systems deployment.'],
  ['Government Digital Transformation', 'Programs, platforms and implementation support for ministries, agencies and public institutions.'],
  ['Educational Technology', 'Smart classrooms, assessment platforms, teacher enablement and technology-enabled learning environments.'],
  ['Enterprise Software', 'Systems planning, platform selection, integration oversight and deployment support.'],
  ['Technology Licensing', 'Commercialization, vendor coordination, procurement support and partner engagement.'],
  ['Infrastructure & Support', 'Deployment planning, device programs, cloud services and long-term operational support.']
];

const industries = ['Federal Government','State Governments','Universities','Schools','Financial Services','Healthcare','Manufacturing','NGOs'];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top"><span>B</span>BestBean Ltd</a>
        <div className="links">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#engagements">Engagements</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navCta" href="#contact">Schedule Consultation</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroText">
          <p className="eyebrow">Technology Consulting • AI • Education • Government • Enterprise</p>
          <h1>Technology Solutions for Government, Education & Enterprise</h1>
          <p className="lead">BestBean Ltd helps institutions plan, license, implement and support mission-critical technology programs across Africa.</p>
          <div className="actions">
            <a className="btn primary" href="#contact">Request Consultation</a>
            <a className="btn secondary" href="#engagements">View Active Engagements</a>
          </div>
          <div className="stats">
            <div><strong>20+</strong><span>Years Leadership</span></div>
            <div><strong>AI</strong><span>Implementation</span></div>
            <div><strong>GovTech</strong><span>Ready</span></div>
          </div>
        </div>

        <div className="dashboard" aria-label="BestBean delivery dashboard">
          <div className="dashTop">
            <div>
              <span className="dashLabel">BestBean Delivery Dashboard</span>
              <h2>Strategy → Licensing → Deployment → Support</h2>
            </div>
            <span className="live">LIVE</span>
          </div>
          <div className="dashGrid">
            <div className="dashCard wide">
              <span>Executive Programs</span>
              <b>Digital Transformation Roadmaps</b>
              <p>Board-level advisory for ministries, universities and enterprise leadership teams.</p>
            </div>
            <div className="dashCard">
              <span>Education</span>
              <b>Smart Classrooms</b>
              <p>Interactive displays, teacher training and school rollout support.</p>
            </div>
            <div className="dashCard accent">
              <span>AI</span>
              <b>AI Programs</b>
              <p>Automation, governance and practical adoption.</p>
            </div>
            <div className="dashCard">
              <span>Government</span>
              <b>Public Sector Delivery</b>
              <p>MDM, dashboards, procurement and implementation support.</p>
            </div>
            <div className="dashCard whiteCard">
              <span>Enterprise Authority</span>
              <b>Plan. License. Implement. Support.</b>
              <p>End-to-end execution for serious institutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trustStrip">
        <span>Trusted Technology Partner</span>
        <b>AI Solutions</b>
        <b>Digital Transformation</b>
        <b>Educational Technology</b>
        <b>Enterprise Infrastructure</b>
        <b>Implementation Support</b>
      </section>

      <section className="split cream" id="about">
        <div><p className="eyebrow dark">Who We Are</p><h2>Built for serious technology programs.</h2></div>
        <div><p>BestBean Ltd is a technology consulting and solutions company focused on institutional transformation. We help organizations move from strategy to deployment with practical guidance, technology partnerships, implementation discipline and long-term support.</p><p>Our work spans AI adoption, educational technology, government digital services, enterprise software, device management and technology licensing.</p></div>
      </section>

      <section className="darkSection" id="engagements">
        <p className="eyebrow">Current Strategic Engagements</p>
        <h2>Active platforms and delivery programs.</h2>
        <div className="cards four">
          {engagements.map((item, index) => <article className="engageCard" key={item.title}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.text}</p><small>{item.meta}</small></article>)}
        </div>
      </section>

      <section className="cream" id="capabilities">
        <p className="eyebrow dark">Strategic Capabilities</p>
        <h2>Advisory, platforms and implementation under one roof.</h2>
        <div className="cards three">
          {capabilities.map(([title, text]) => <article className="capCard" key={title}><div className="icon"/><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="method">
        <p className="eyebrow dark">Delivery Methodology</p>
        <h2>From strategy to measurable execution.</h2>
        <div className="steps">
          {['Discover','Design','License','Implement','Train','Support','Measure'].map((s) => <div key={s}>{s}</div>)}
        </div>
      </section>

      <section className="leadership" id="leadership">
        <div className="portrait">KS</div>
        <div><p className="eyebrow dark">Leadership</p><h2>Kenneth Spann, JD, MBA</h2><p>Founder and Principal Consultant with experience across technology leadership, business consulting, enterprise software, education and international market development.</p><div className="pills"><span>Technology Strategy</span><span>Enterprise Consulting</span><span>Education Innovation</span><span>International Experience</span></div></div>
      </section>

      <section className="cream industries">
        <p className="eyebrow dark">Industries Served</p>
        <h2>Built for institutions that need reliable execution.</h2>
        <div>{industries.map((i) => <span key={i}>{i}</span>)}</div>
      </section>

      <section className="darkSection">
        <p className="eyebrow">Why Governments Choose BestBean</p>
        <h2>Strategy before technology. Execution after strategy.</h2>
        <div className="proofGrid">
          <p>Vendor-neutral advisory</p><p>Technology licensing support</p><p>Implementation governance</p><p>Capacity building and training</p><p>Local execution with international standards</p><p>Long-term operational support</p>
        </div>
      </section>

      <section className="contact cream" id="contact">
        <div><p className="eyebrow dark">Executive Consultation</p><h2>Let's discuss your next technology initiative.</h2><p>For consulting, partnerships, licensing, government programs, education technology or enterprise digital transformation.</p></div>
        <div className="contactCard"><strong>Ken.Spann@bestbeanltd.com</strong><strong>info@bestbeanltd.com</strong><span>Lagos, Nigeria</span><span>Business Consulting • AI • Educational Technology</span></div>
      </section>

      <footer><div className="brand"><span>B</span>BestBean Ltd</div><p>Technology Consulting • AI Solutions • Educational Technology • Government Digital Transformation</p></footer>
    </main>
  );
}
