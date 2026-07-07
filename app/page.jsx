const services = [
  {
    title: 'Business Consulting',
    text: 'Strategic advisory, technology roadmaps, operating model improvement, and project execution support for organizations seeking measurable transformation.',
  },
  {
    title: 'Educational Technology',
    text: 'Smart classrooms, digital learning platforms, teacher enablement, assessment systems, and implementation support for schools and ministries.',
  },
  {
    title: 'AI & Digital Transformation',
    text: 'Practical AI adoption, workflow automation, data-driven decision support, and enterprise modernization for public and private institutions.',
  },
  {
    title: 'IT Infrastructure',
    text: 'Cloud deployment, network modernization, device management, cybersecurity planning, and managed technology operations.',
  },
];

const products = [
  {
    title: 'ExamSphere',
    text: 'An AI-powered examination and learning platform for WAEC, JAMB, NECO, school assessments, adaptive practice, weak-topic analysis, parent reports, and student success tracking.',
  },
  {
    title: 'National Education Device Management Platform',
    text: 'A government-ready MDM platform for device enrollment, GPS tracking, classroom mode, remote lock, device health monitoring, and ministry-level analytics.',
  },
];

const sectors = ['Federal Government', 'State Governments', 'Schools', 'Universities', 'NGOs', 'Corporate Organizations', 'Financial Institutions'];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">BestBean Ltd</div>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Business Consulting • AI Solutions • Educational Technology</p>
          <h1>Transforming Education, Business & Government Through Technology</h1>
          <p className="lead">
            BestBean Ltd helps governments, schools, universities, and enterprises deploy practical technology solutions that improve learning outcomes, operational performance, and institutional capability.
          </p>
          <div className="actions">
            <a className="primary" href="#contact">Schedule a Consultation</a>
            <a className="secondary" href="#products">Explore Our Solutions</a>
          </div>
        </div>
        <div className="heroCard">
          <h3>Enterprise-ready delivery</h3>
          <p>Strategy, platforms, implementation, training, and long-term support for mission-critical education and business programs.</p>
          <div className="stats">
            <span><strong>AI</strong> Enabled</span>
            <span><strong>Gov</strong> Ready</span>
            <span><strong>Edu</strong> Focused</span>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <p className="eyebrow">About BestBean</p>
        <h2>Technology strategy with real implementation discipline.</h2>
        <p>
          BestBean Ltd is positioned at the intersection of consulting, education technology, artificial intelligence, and enterprise transformation. We work with institutions that need more than software: they need practical deployment, stakeholder alignment, training, governance, and measurable outcomes.
        </p>
      </section>

      <section className="section" id="services">
        <p className="eyebrow">Our Services</p>
        <h2>Integrated services for transformation programs.</h2>
        <div className="grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark" id="products">
        <p className="eyebrow">Flagship Products</p>
        <h2>Platforms built for education, accountability, and scale.</h2>
        <div className="grid two">
          {products.map((product) => (
            <article className="product" key={product.title}>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Industries Served</p>
        <h2>Built for public-sector and enterprise environments.</h2>
        <div className="pillGrid">
          {sectors.map((sector) => <span className="pill" key={sector}>{sector}</span>)}
        </div>
      </section>

      <section className="section why">
        <p className="eyebrow">Why Choose BestBean</p>
        <h2>Focused on outcomes, not technology for its own sake.</h2>
        <div className="checkGrid">
          <span>✓ Proven technology expertise</span>
          <span>✓ Educational specialization</span>
          <span>✓ AI-driven solutions</span>
          <span>✓ Government-ready platforms</span>
          <span>✓ Enterprise deployment experience</span>
          <span>✓ Long-term support orientation</span>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Request a consultation.</h2>
          <p>
            Speak with BestBean Ltd about business consulting, educational technology, AI transformation, ExamSphere, or device management solutions.
          </p>
        </div>
        <form className="form">
          <input placeholder="Name" />
          <input placeholder="Organization" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <textarea placeholder="How can BestBean help?" rows="5" />
          <button type="button">Submit Inquiry</button>
        </form>
      </section>

      <footer>
        <strong>BestBean Ltd</strong>
        <span>Business Consulting • AI Solutions • Educational Technology • Digital Transformation</span>
      </footer>
    </main>
  );
}
