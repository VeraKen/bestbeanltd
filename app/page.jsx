const engagements = [
  {
    eyebrow: 'AI Learning Platform',
    title: 'ExamSphere',
    text: 'AI-powered assessment, practice and learning platform designed for WAEC, JAMB, NECO and school performance improvement.',
  },
  {
    eyebrow: 'Education Device Control',
    title: 'National Education Device Management Platform',
    text: 'Enterprise device enrollment, location visibility, classroom mode, remote support and analytics for large education deployments.',
  },
  {
    eyebrow: 'Smart Classrooms',
    title: 'Interactive Classroom Technologies',
    text: 'Advisory, procurement and deployment support for digital classrooms, interactive displays and teacher enablement programs.',
  },
  {
    eyebrow: 'Enterprise Advisory',
    title: 'Technology Consulting',
    text: 'Strategy, licensing, systems integration and implementation support for organizations moving from plan to operational delivery.',
  },
];

const capabilities = [
  'AI Consulting & Implementation',
  'Government Digital Services',
  'Educational Technology',
  'Enterprise Software',
  'Cloud & Infrastructure',
  'Technology Licensing',
];

const industries = ['Federal Government', 'State Governments', 'Universities', 'Schools', 'NGOs', 'Financial Services', 'Enterprise', 'International Organizations'];

export default function HomePage() {
  return (
    <main>
      <header className="nav">
        <a href="#top" className="brand" aria-label="BestBean home">
          <span className="brandMark">B</span>
          <span>BestBean Ltd</span>
        </a>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#engagements">Engagements</a>
          <a href="#licensing">Licensing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="navCta" href="#contact">Schedule Consultation</a>
      </header>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="kicker"><span /> Technology Consulting • AI • Education • Government</p>
          <h1>Accelerating Digital Transformation Across Africa</h1>
          <p className="lead">BestBean Ltd partners with governments, educational institutions and enterprises to deliver practical AI, digital transformation, enterprise software and smart learning solutions.</p>
          <div className="heroButtons">
            <a className="button primary" href="#contact">Request Consultation</a>
            <a className="button secondary" href="#engagements">View Active Engagements</a>
          </div>
          <div className="proofStrip">
            <div><strong>Enterprise</strong><span>consulting</span></div>
            <div><strong>AI</strong><span>implementation</span></div>
            <div><strong>GovTech</strong><span>ready</span></div>
          </div>
        </div>
        <div className="heroPanel" aria-label="BestBean capabilities dashboard">
          <div className="panelTop">
            <span>Strategic Delivery Map</span>
            <b>LIVE</b>
          </div>
          <div className="dashboardGrid">
            <div className="dashCard wide">
              <p>Current Focus</p>
              <h3>Digital Transformation Programs</h3>
              <div className="bar"><span style={{width:'86%'}} /></div>
            </div>
            <div className="dashCard"><p>AI</p><h3>Enabled</h3></div>
            <div className="dashCard"><p>Education</p><h3>Focused</h3></div>
            <div className="dashCard"><p>Government</p><h3>Ready</h3></div>
            <div className="dashCard"><p>Enterprise</p><h3>Scalable</h3></div>
          </div>
          <div className="signalRows">
            <span>Strategy</span><span>Licensing</span><span>Deployment</span><span>Support</span>
          </div>
        </div>
      </section>

      <section id="about" className="section introSection">
        <div className="sectionHeader">
          <p className="label">BestBean Ltd</p>
          <h2>A serious technology partner for institutions that need execution, not theory.</h2>
        </div>
        <p className="sectionLead">BestBean brings together consulting, software platforms, educational technology and implementation support for organizations modernizing learning, operations and institutional performance.</p>
      </section>

      <section id="engagements" className="section darkBand">
        <div className="sectionHeader light">
          <p className="label">Active Engagements</p>
          <h2>Currently building and deploying practical solutions.</h2>
        </div>
        <div className="engagementGrid">
          {engagements.map((item) => (
            <article className="engagementCard" key={item.title}>
              <p>{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="sectionHeader split">
          <div>
            <p className="label">Strategic Capabilities</p>
            <h2>From advisory to implementation.</h2>
          </div>
          <p>BestBean supports the full delivery cycle: needs assessment, solution design, licensing, procurement, training, deployment and long-term support.</p>
        </div>
        <div className="capabilityGrid">
          {capabilities.map((capability, index) => (
            <div className="capabilityCard" key={capability}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{capability}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="licensing" className="section licensing">
        <div>
          <p className="label">Licensing & Partnerships</p>
          <h2>Technology licensing, strategic alliances and enterprise delivery support.</h2>
          <p>We help organizations evaluate, license and deploy technologies that fit their operational reality. Our role is to connect strategy with execution through platform selection, vendor coordination, implementation management and user adoption.</p>
        </div>
        <div className="licenseList">
          <span>Software licensing advisory</span>
          <span>AI platform integration</span>
          <span>Interactive classroom solutions</span>
          <span>Systems integration</span>
          <span>Cloud and infrastructure planning</span>
          <span>Training and change management</span>
        </div>
      </section>

      <section className="section platforms">
        <div className="platformCard gold">
          <p>Flagship Platform</p>
          <h2>ExamSphere</h2>
          <span>AI-powered assessment, tutoring, weak-topic analysis and parent reporting for African exam success.</span>
        </div>
        <div className="platformCard blue">
          <p>Enterprise Platform</p>
          <h2>Education Device Management</h2>
          <span>Device oversight, classroom control, GPS visibility, analytics and ministry-level reporting for education deployments.</span>
        </div>
      </section>

      <section id="industries" className="section industries">
        <div className="sectionHeader">
          <p className="label">Industries Served</p>
          <h2>Built for public sector, education and enterprise environments.</h2>
        </div>
        <div className="industryGrid">
          {industries.map((industry) => <span key={industry}>{industry}</span>)}
        </div>
      </section>

      <section className="section leadership">
        <div className="portrait">KS</div>
        <div>
          <p className="label">Leadership</p>
          <h2>Kenneth Spann, JD, MBA</h2>
          <h3>Founder & Principal Consultant</h3>
          <p>Technology executive, educator, attorney and international business advisor with experience spanning enterprise technology, consulting, education and African market development.</p>
        </div>
      </section>

      <section className="section insights">
        <div className="sectionHeader split">
          <div>
            <p className="label">News & Engagements</p>
            <h2>Built to grow with new licensing, deployment and partnership announcements.</h2>
          </div>
          <p>This section is ready for press releases, active engagements, conferences, ministry meetings, partner announcements and product milestones.</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="label">Start a Conversation</p>
          <h2>Let’s build your next technology initiative.</h2>
          <p>Whether you are modernizing classrooms, planning AI adoption, deploying enterprise software or designing a government technology program, BestBean Ltd is ready to help.</p>
        </div>
        <form className="form">
          <input placeholder="Name" />
          <input placeholder="Organization" />
          <input placeholder="Email" />
          <textarea placeholder="Tell us about your project" rows="4" />
          <button type="button">Request Consultation</button>
        </form>
      </section>

      <footer className="footer">
        <strong>BestBean Ltd</strong>
        <span>Technology Consulting • AI Solutions • Educational Technology • Digital Transformation</span>
      </footer>
    </main>
  );
}
