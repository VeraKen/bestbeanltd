const capabilities = [
  ['Executive Consulting', 'Digital strategy, business advisory, transformation roadmaps and implementation planning.'],
  ['AI Implementation', 'Practical AI adoption, workflow automation, analytics and responsible deployment.'],
  ['GovTech Solutions', 'Systems, platforms and programs designed for public-sector readiness and accountability.'],
  ['Educational Technology', 'Smart classrooms, assessment systems, teacher enablement and learning platforms.'],
  ['Enterprise Software', 'Application modernization, cloud solutions, integrations and operational systems.'],
  ['Technology Licensing', 'Licensing, procurement, partner enablement and enterprise deployment support.'],
];

const engagements = [
  ['ExamSphere', 'AI-powered examination, learning support and weak-topic analysis platform for schools and examination preparation.'],
  ['National Education Device Management Platform', 'Device management platform supporting GPS visibility, device health, classroom mode and administrative control.'],
  ['Interactive Classroom Solutions', 'Smart learning environments using interactive displays, training, implementation and classroom technology support.'],
  ['Enterprise Transformation Advisory', 'Consulting support for organizations planning AI, software, cloud and digital modernization initiatives.'],
];

const sectors = [
  'Federal Government',
  'State Governments',
  'Universities',
  'Schools',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'NGOs',
];

const proof = [
  ['Leadership', 'Decades of combined experience in technology, consulting, education and international business.'],
  ['Implementation', 'From strategy to deployment, training, adoption and long-term support.'],
  ['Education Focus', 'Deep understanding of schools, learning systems, assessment and classroom technology.'],
  ['Government Ready', 'Solutions structured for ministries, institutions and large-scale public programs.'],
];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="BestBean Ltd home">
          <span className="brandMark">B</span>
          <span>BestBean Ltd</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#engagements">Engagements</a>
          <a href="#licensing">Licensing</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="navCta" href="#contact">Schedule Consultation</a>
      </header>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="eyebrow">Technology Consulting • AI • Education • Government • Enterprise</p>
          <h1>Delivering Technology Solutions That Transform Institutions</h1>
          <p className="heroLead">
            BestBean Ltd partners with governments, educational institutions and enterprises to plan, license,
            implement and support practical technology programs across Africa.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#contact">Request Consultation</a>
            <a className="secondaryBtn" href="#engagements">View Active Engagements</a>
          </div>
          <div className="trustStrip" aria-label="core strengths">
            <div><strong>AI</strong><span>Implementation</span></div>
            <div><strong>GovTech</strong><span>Ready</span></div>
            <div><strong>Education</strong><span>Specialists</span></div>
          </div>
        </div>

        <div className="heroProof" aria-label="BestBean delivery proof panel">
          <div className="photoGrid">
            <div className="photoCard large">
              <span>Executive Briefings</span>
            </div>
            <div className="photoCard classroom">
              <span>Smart Classrooms</span>
            </div>
            <div className="photoCard ai">
              <span>AI Programs</span>
            </div>
            <div className="photoCard gov">
              <span>Government Solutions</span>
            </div>
          </div>
          <div className="proofBadge">
            <strong>Enterprise Authority</strong>
            <span>Strategy → Licensing → Deployment → Support</span>
          </div>
        </div>
      </section>

      <section className="credibility">
        <span>Trusted Technology Partner</span>
        <strong>AI Solutions</strong>
        <strong>Digital Transformation</strong>
        <strong>Educational Technology</strong>
        <strong>Enterprise Infrastructure</strong>
        <strong>Implementation Support</strong>
      </section>

      <section id="about" className="section split white">
        <div>
          <p className="sectionKicker">About BestBean</p>
          <h2>Built for serious technology programs.</h2>
        </div>
        <div className="sectionCopy">
          <p>
            BestBean Ltd is a technology consulting and solutions firm focused on institutional transformation.
            We help decision-makers move from strategy to execution through advisory services, software platforms,
            AI implementation, educational technology and deployment support.
          </p>
          <p>
            Our work is designed for organizations that require credibility, practical execution and long-term
            value—not abstract innovation theater.
          </p>
        </div>
      </section>

      <section id="engagements" className="section darkSection">
        <div className="sectionHeader">
          <p className="sectionKicker">Current Strategic Engagements</p>
          <h2>Active platforms and delivery programs.</h2>
          <p>
            BestBean presents solutions as part of a broader consulting and implementation practice, not isolated software demos.
          </p>
        </div>
        <div className="engagementGrid">
          {engagements.map(([title, text], index) => (
            <article className="engagementCard" key={title}>
              <span className="cardNumber">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Discuss this engagement</a>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section white">
        <div className="sectionHeader compact">
          <p className="sectionKicker">Strategic Capabilities</p>
          <h2>Advisory, platforms and implementation under one roof.</h2>
        </div>
        <div className="capabilityGrid">
          {capabilities.map(([title, text]) => (
            <article className="capabilityCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="licensing" className="section licensing">
        <div className="licensingPanel">
          <p className="sectionKicker">Licensing & Partnerships</p>
          <h2>Technology licensing, procurement and deployment support.</h2>
          <p>
            BestBean supports organizations with technology selection, licensing strategy, partner coordination,
            procurement support, implementation planning, user training and ongoing adoption.
          </p>
          <div className="licenseList">
            <span>Enterprise Software</span>
            <span>Interactive Displays</span>
            <span>AI Technologies</span>
            <span>Cloud Platforms</span>
            <span>Device Management</span>
            <span>Systems Integration</span>
          </div>
        </div>
      </section>

      <section className="section proofSection white">
        <div className="sectionHeader compact">
          <p className="sectionKicker">Proof & Experience</p>
          <h2>What buyers need to see before they trust a technology partner.</h2>
        </div>
        <div className="proofGrid">
          {proof.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section industries">
        <div className="sectionHeader compact">
          <p className="sectionKicker">Industries Served</p>
          <h2>Designed for institutions that need reliable execution.</h2>
        </div>
        <div className="sectorGrid">
          {sectors.map((sector) => (
            <span key={sector}>{sector}</span>
          ))}
        </div>
      </section>

      <section id="leadership" className="section leadership white">
        <div className="portrait" aria-hidden="true">KS</div>
        <div>
          <p className="sectionKicker">Leadership</p>
          <h2>Kenneth Spann, JD, MBA</h2>
          <h3>Founder & Principal Consultant</h3>
          <p>
            BestBean is led with a blend of technology leadership, business strategy, legal training, education
            experience and international market understanding. The firm is positioned to support complex programs
            requiring both executive judgment and practical implementation capability.
          </p>
          <a className="secondaryLight" href="#contact">Request Executive Briefing</a>
        </div>
      </section>

      <section className="section insights">
        <div className="sectionHeader compact">
          <p className="sectionKicker">News & Engagements</p>
          <h2>A place for current announcements, licensing updates and project milestones.</h2>
        </div>
        <div className="insightGrid">
          <article><span>Announcement</span><h3>ExamSphere commercial rollout preparation</h3></article>
          <article><span>Program</span><h3>Education device management platform development</h3></article>
          <article><span>Solutions</span><h3>Smart classroom and AI-enabled learning initiatives</h3></article>
        </div>
      </section>

      <section id="contact" className="section contact white">
        <div>
          <p className="sectionKicker">Contact</p>
          <h2>Let’s discuss your next technology initiative.</h2>
          <p>
            Whether you are modernizing classrooms, deploying enterprise software, implementing AI or planning a
            government technology program, BestBean can help structure the path from concept to execution.
          </p>
          <div className="contactInfo">
            <span>Email: info@bestbeanltd.com</span>
            <span>Website: bestbeanltd.com</span>
            <span>Location: Lagos, Nigeria</span>
          </div>
        </div>
        <form className="contactForm">
          <label>Name<input placeholder="Your name" /></label>
          <label>Organization<input placeholder="Organization" /></label>
          <label>Email<input placeholder="Email address" /></label>
          <label>Project Need<textarea placeholder="Tell us about the initiative" /></label>
          <button type="button">Submit Inquiry</button>
        </form>
      </section>

      <footer className="footer">
        <strong>BestBean Ltd</strong>
        <span>Technology Consulting • AI Solutions • Educational Technology • Government Transformation</span>
      </footer>
    </main>
  );
}
