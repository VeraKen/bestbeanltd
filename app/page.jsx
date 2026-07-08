const capabilities = [
  ['AI Strategy & Implementation', 'Practical AI adoption, automation planning, workflow modernization, and intelligent systems deployment.'],
  ['Government Digital Transformation', 'Programs, platforms, and implementation support for ministries, agencies, and public institutions.'],
  ['Educational Technology', 'Smart classrooms, assessment platforms, teacher enablement, and technology-enabled learning environments.'],
  ['Enterprise Software', 'Systems planning, platform selection, integration oversight, and deployment support.'],
  ['Technology Licensing', 'Commercialization, vendor coordination, procurement support, and partner engagement.'],
  ['Infrastructure & Support', 'Deployment planning, device programs, cloud services, and long-term operational support.'],
];

const engagements = [
  ['ExamSphere', 'AI-powered assessment and learning platform for WAEC, JAMB, schools, parents, and students.'],
  ['National Education Device Management Platform', 'Device management, GPS visibility, reporting, classroom controls, and ministry-level oversight.'],
  ['BenQ Interactive Classroom Solutions', 'Interactive display deployment, smart classroom enablement, training, and institutional rollout support.'],
  ['Enterprise AI & Digital Transformation', 'Advisory, implementation, licensing, and modernization programs for enterprise and public-sector clients.'],
];

const industries = ['Federal Government', 'State Governments', 'Universities', 'Schools', 'Financial Services', 'Healthcare', 'Manufacturing', 'NGOs'];

export default function HomePage() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="BestBean Ltd home">
          <span className="mark">B</span>
          <span>BestBean Ltd</span>
        </a>
        <nav className="links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#engagements">Engagements</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="navCta" href="#contact">Schedule Consultation</a>
      </header>

      <section id="top" className="hero">
        <div className="heroInner">
          <div className="heroCopy">
            <p className="eyebrow">Technology Consulting • AI • Education • Government • Enterprise</p>
            <h1>Technology Solutions for Government, Education & Enterprise</h1>
            <p className="lead">
              BestBean Ltd helps institutions plan, license, implement and support practical technology programs across Africa.
            </p>
            <div className="actions">
              <a className="primary" href="#contact">Request Consultation</a>
              <a className="secondary" href="#engagements">View Active Engagements</a>
            </div>
            <div className="proofStats">
              <div><strong>20+</strong><span>Years Leadership</span></div>
              <div><strong>AI</strong><span>Implementation</span></div>
              <div><strong>GovTech</strong><span>Ready</span></div>
            </div>
          </div>
          <div className="heroPanel" aria-label="BestBean strategic focus">
            <div className="photoBlock photoLarge"><span>Executive Programs</span></div>
            <div className="photoGrid">
              <div className="photoBlock"><span>Smart Classrooms</span></div>
              <div className="photoBlock accent"><span>AI Programs</span></div>
              <div className="photoBlock muted"><span>Government Solutions</span></div>
            </div>
            <div className="authorityCard">
              <b>Enterprise Authority</b>
              <small>Strategy → Licensing → Deployment → Support</small>
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

      <section id="about" className="section split white">
        <div>
          <p className="sectionKicker">Who We Are</p>
          <h2>Built for serious technology programs.</h2>
        </div>
        <div className="bodyText">
          <p>
            BestBean Ltd is a technology consulting and solutions company focused on institutional transformation. We help organizations move from strategy to deployment with practical guidance, technology partnerships, implementation discipline, and long-term support.
          </p>
          <p>
            Our work spans AI adoption, educational technology, government digital services, enterprise software, device management, and technology licensing.
          </p>
        </div>
      </section>

      <section id="engagements" className="section dark">
        <p className="sectionKicker">Current Strategic Engagements</p>
        <h2>Active platforms and delivery programs.</h2>
        <div className="engagementGrid">
          {engagements.map(([title, text], index) => (
            <article className="engagementCard" key={title}>
              <span className="number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Discuss this capability →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section white">
        <p className="sectionKicker">Strategic Capabilities</p>
        <h2>Advisory, platforms and implementation under one roof.</h2>
        <div className="capabilityGrid">
          {capabilities.map(([title, text]) => (
            <article className="capabilityCard" key={title}>
              <div className="cardIcon"></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="leadership" className="section leadership">
        <div className="portrait">KS</div>
        <div>
          <p className="sectionKicker">Leadership</p>
          <h2>Kenneth Spann, JD, MBA</h2>
          <p className="leadershipText">
            Founder and Principal Consultant with experience across technology leadership, business consulting, enterprise software, education, and international market development.
          </p>
          <div className="leadershipBullets">
            <span>Technology Strategy</span>
            <span>Enterprise Consulting</span>
            <span>Education Innovation</span>
            <span>International Experience</span>
          </div>
        </div>
      </section>

      <section className="section white">
        <p className="sectionKicker">Industries Served</p>
        <h2>Built for institutions that need reliable execution.</h2>
        <div className="industryGrid">
          {industries.map((industry) => <div key={industry}>{industry}</div>)}
        </div>
      </section>

      <section className="section dark licensing">
        <p className="sectionKicker">Licensing & Partnerships</p>
        <h2>Technology licensing, partnerships and deployment support.</h2>
        <p>
          BestBean supports organizations seeking to evaluate, license, procure, deploy and sustain practical technology platforms. We work across vendor ecosystems, software platforms, AI tools, education technology, smart classrooms and enterprise programs.
        </p>
      </section>

      <section id="contact" className="section contact white">
        <div>
          <p className="sectionKicker">Executive Consultation</p>
          <h2>Let’s discuss your next technology initiative.</h2>
          <p>For consulting, partnerships, licensing, government programs, education technology, or enterprise digital transformation.</p>
        </div>
        <div className="contactCard">
          <a href="mailto:Ken.Spann@bestbeanltd.com">Ken.Spann@bestbeanltd.com</a>
          <a href="mailto:info@bestbeanltd.com">info@bestbeanltd.com</a>
          <span>Lagos, Nigeria</span>
          <span>Business Consulting • AI • Education Technology</span>
        </div>
      </section>

      <footer className="footer">
        <div className="brand"><span className="mark">B</span><span>BestBean Ltd</span></div>
        <p>Technology Consulting • AI Solutions • Educational Technology • Government Digital Transformation</p>
        <p>© {new Date().getFullYear()} BestBean Ltd. All rights reserved.</p>
      </footer>
    </main>
  );
}
