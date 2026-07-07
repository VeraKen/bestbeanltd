'use client';

import { useState } from 'react';

const capabilities = [
  {
    tag: '01 — CONSULTING',
    title: 'Technology Consulting',
    desc: "Independent, strategy-first advice on where technology should — and shouldn't — change how your organization operates.",
    items: ['Digital Strategy', 'Organizational Transformation', 'Technology Roadmaps', 'Project Management'],
    icon: 'consulting',
  },
  {
    tag: '02 — TRANSFORMATION',
    title: 'Digital Transformation',
    desc: 'Turning legacy processes into systems that scale — without disrupting the people who depend on them daily.',
    items: ['Process Modernization', 'Change Management', 'Legacy System Migration', 'Data Infrastructure'],
    icon: 'transform',
  },
  {
    tag: '03 — ARTIFICIAL INTELLIGENCE',
    title: 'AI Solutions',
    desc: 'Practical AI — deployed where it measurably improves outcomes for students, staff, or citizens, not as a headline feature.',
    items: ['AI Consulting', 'AI Integration', 'AI Training', 'Automation'],
    icon: 'ai',
  },
  {
    tag: '04 — PUBLIC SECTOR',
    title: 'Government Solutions',
    desc: 'Ministry-grade platforms built for procurement, compliance, and scale requirements unique to the public sector.',
    items: ['Ministry Platforms', 'Regulatory Compliance', 'Public Infrastructure', 'Data Residency & Security'],
    icon: 'gov',
  },
  {
    tag: '05 — EDUCATION',
    title: 'Educational Technology',
    desc: 'Classroom and campus technology designed around how teachers teach and students actually learn.',
    items: ['Smart Classrooms', 'Interactive Displays', 'Learning Platforms', 'Teacher Training'],
    icon: 'edu',
  },
];

const engagements = [
  { status: 'In Progress', title: 'Federal Education Technology Initiative', desc: 'A national-scale program bringing adaptive learning infrastructure to public secondary education.' },
  { status: 'Ongoing', title: 'State-Level Digital Infrastructure Program', desc: 'Rollout and support of device management and connectivity infrastructure across state institutions.' },
  { status: 'Active', title: 'Enterprise AI Advisory Engagement', desc: 'Ongoing advisory work helping a corporate client integrate AI into core operations.' },
];

const partnerships = [
  { name: 'Government Licensing Partnership', desc: 'Technology licensing discussions with a national training authority.', status: 'Under Negotiation' },
  { name: 'Regional Education Repository Initiative', desc: 'A proposed shared examination and credentialing repository for the region.', status: 'In Development' },
  { name: 'Corporate Technology Alliance', desc: 'A strategic alliance supporting joint go-to-market for enterprise AI services.', status: 'Active' },
];

const industries = ['Federal Government', 'State Governments', 'Schools', 'Universities', 'NGOs', 'Corporate Organizations', 'Financial Institutions', 'And Partners Beyond'];

const whyChoose = [
  'Proven technology expertise',
  'Educational specialization',
  'AI-driven solutions',
  'Enterprise deployment experience',
  'Government-ready platforms',
  'Long-term support',
];

const news = [
  { tag: 'Education', title: 'What adaptive testing changes for WAEC & JAMB prep', desc: 'How weak-topic detection reshapes the last three months before a national exam.' },
  { tag: 'Government', title: 'Managing 10,000 devices without losing a single classroom day', desc: 'Lessons from deploying device management infrastructure across 12 cities.' },
  { tag: 'AI Strategy', title: 'Where AI actually belongs in enterprise operations', desc: 'A practical framework for deciding what to automate first — and what not to.' },
];

function Icon({ name }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', strokeWidth: '1.6', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'icon' };
  switch (name) {
    case 'consulting':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'transform':
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 1 1-9-9" />
          <path d="M21 3v6h-6" />
          <path d="M21 3 12 12" />
        </svg>
      );
    case 'ai':
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path d="M12 7v6M12 13 6 17.5M12 13l6 4.5" />
        </svg>
      );
    case 'gov':
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V9l7-5 7 5v12" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case 'edu':
      return (
        <svg {...common}>
          <path d="M12 6.5C10.5 5 8 4 4 4v14c4 0 6.5 1 8 2.5" />
          <path d="M12 6.5C13.5 5 16 4 20 4v14c-4 0-6.5 1-8 2.5" />
        </svg>
      );
    default:
      return null;
  }
}

function IndustryIcon({ index }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', strokeWidth: '1.6', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'icon' };
  const paths = [
    <svg {...common} key="i0"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" /></svg>,
    <svg {...common} key="i1"><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 8h6M9 12h6M9 16h4" /></svg>,
    <svg {...common} key="i2"><path d="M12 6.5C10.5 5 8 4 4 4v14c4 0 6.5 1 8 2.5C13.5 19 16 18 20 18V4c-4 0-6.5 1-8 2.5" /></svg>,
    <svg {...common} key="i3"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></svg>,
    <svg {...common} key="i4"><circle cx="12" cy="8" r="3" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" /></svg>,
    <svg {...common} key="i5"><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>,
    <svg {...common} key="i6"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M2 10h20" /></svg>,
    <svg {...common} key="i7"><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /></svg>,
  ];
  return paths[index] || null;
}

export default function Home() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks — your message has been noted. This form needs a form-handling service (e.g. Formspree) connected before it can send live emails.');
  }

  return (
    <main>
      {/* NAV */}
      <header className="site-header">
        <div className="wrap navbar">
          <div className="brand"><span className="mark" />BestBean</div>
          <nav className="navlinks">
            <a href="#capabilities">Capabilities</a>
            <a href="#engagements">Engagements</a>
            <a href="#products">Platforms</a>
            <a href="#leadership">Leadership</a>
            <a href="#news">Insights</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="nav-cta">Schedule a Consultation</a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow mono">Technology Consulting · Digital Transformation · AI Solutions · Government &amp; Education</div>
            <h1>Transforming Education, Business &amp; Government Through Technology</h1>
            <p className="sub">BestBean designs and deploys the technology infrastructure that governments, schools, and enterprises run on — from adaptive learning platforms to AI-driven operations.</p>
            <div className="hero-stats">
              <div><div className="stat-num">10,000+</div><div className="stat-label">Devices Managed</div></div>
              <div><div className="stat-num">96</div><div className="stat-label">Schools Onboarded</div></div>
              <div><div className="stat-num">12</div><div className="stat-label">Cities Covered</div></div>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Schedule a Consultation</a>
              <a href="#capabilities" className="btn btn-outline">Explore Our Solutions</a>
            </div>
          </div>
          <div className="netbox">
            <svg viewBox="0 0 400 380">
              <path className="net-line" d="M 200 190 L 90 80" />
              <path className="net-line" d="M 200 190 L 320 70" />
              <path className="net-line" d="M 200 190 L 60 260" />
              <path className="net-line" d="M 200 190 L 330 280" />
              <path className="net-line" d="M 200 190 L 200 340" />
              <path className="net-line" style={{ animationDuration: '30s' }} d="M 90 80 L 320 70" />
              <path className="net-line" style={{ animationDuration: '26s' }} d="M 60 260 L 330 280" />
              <g><circle cx="90" cy="80" r="26" className="net-node-bg" /><circle cx="90" cy="80" r="4" className="net-node-core" /><text x="90" y="122" textAnchor="middle" className="net-label">Government</text></g>
              <g><circle cx="320" cy="70" r="26" className="net-node-bg" /><circle cx="320" cy="70" r="4" className="net-node-core" /><text x="320" y="112" textAnchor="middle" className="net-label">Schools</text></g>
              <g><circle cx="60" cy="260" r="26" className="net-node-bg" /><circle cx="60" cy="260" r="4" className="net-node-core" /><text x="60" y="302" textAnchor="middle" className="net-label">Enterprise</text></g>
              <g><circle cx="330" cy="280" r="26" className="net-node-bg" /><circle cx="330" cy="280" r="4" className="net-node-core" /><text x="330" y="322" textAnchor="middle" className="net-label">Universities</text></g>
              <g><circle cx="200" cy="340" r="26" className="net-node-bg" /><circle cx="200" cy="340" r="4" className="net-node-core" /><text x="200" y="365" textAnchor="middle" className="net-label">NGOs</text></g>
              <circle className="net-pulse" cx="200" cy="190" r="30" />
              <circle cx="200" cy="190" r="34" className="net-node-bg" style={{ stroke: 'var(--bronze-light)', strokeWidth: 1.4 }} />
              <circle cx="200" cy="190" r="6" className="net-node-core" />
              <text x="200" y="238" textAnchor="middle" className="net-label" style={{ fill: 'var(--bronze-light)', fontSize: '8px', fontWeight: 600 }}>BESTBEAN</text>
            </svg>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="capabilities section-pad" id="capabilities">
        <div className="wrap">
          <div className="kicker mono">What We Do</div>
          <h2 className="section-title">Five disciplines, one accountable team</h2>
          <p className="section-lede">Strategy, platforms, AI, and infrastructure delivered together — so nothing gets lost between the recommendation and the rollout.</p>

          {capabilities.map((cap, i) => (
            <div className={`cap-row${i % 2 === 1 ? ' tint' : ''}${i === 0 ? ' first' : ''}`} key={cap.title}>
              <div>
                <div className="cap-icon-wrap"><Icon name={cap.icon} /></div>
                <div className="cap-eyebrow">{cap.tag}</div>
                <h3>{cap.title}</h3>
                <p className="desc">{cap.desc}</p>
              </div>
              <ul className="cap-list">
                {cap.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVE ENGAGEMENTS + LICENSING */}
      <section className="engagements section-pad" id="engagements">
        <div className="wrap">
          <div className="kicker on-dark mono">Active Engagements</div>
          <h2 className="section-title on-dark">Work currently underway</h2>
          <p className="section-lede on-dark">A snapshot of programs in motion. Specific terms remain confidential while engagements are in progress.</p>

          <div className="eng-grid">
            {engagements.map((e) => (
              <div className="eng-card" key={e.title}>
                <div className="eng-status">{e.status}</div>
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="partnerships">
            <div className="kicker on-dark mono">Licensing &amp; Strategic Partnerships</div>
            <h2 className="section-title on-dark">Alliances in development</h2>
            <p className="section-lede on-dark">BestBean structures licensing and joint-venture partnerships separately from platform ownership — our technology and IP remain ours regardless of the commercial structure.</p>
            <div className="part-list">
              {partnerships.map((p) => (
                <div className="part-row" key={p.name}>
                  <div><div className="p-name">{p.name}</div><div className="p-desc">{p.desc}</div></div>
                  <div className="p-status">{p.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products section-pad" id="products">
        <div className="wrap">
          <div className="kicker mono">Featured Platforms</div>
          <h2 className="section-title">Platforms we&apos;ve built and run ourselves</h2>
          <p className="section-lede">Not slideware — systems currently in classrooms and ministries, carrying real students and real devices.</p>

          <div className="product-row">
            <div>
              <div className="product-eyebrow">PLATFORM 01 — ADAPTIVE LEARNING</div>
              <h3>ExamSphere</h3>
              <p className="desc">An AI-powered examination and learning platform built for WAEC, JAMB, and NECO preparation — adapting to each student&apos;s weak topics and giving parents and teachers a clear view of progress.</p>
              <div className="feature-pills">
                {['Adaptive Testing', 'WAEC', 'JAMB', 'NECO', 'Weak-Topic Analysis', 'Parent Reports', 'AI Tutor'].map((f) => <span key={f}>{f}</span>)}
              </div>
            </div>
            <div className="mockcard">
              <div className="mock-bar"><span /><span /><span /></div>
              <div className="mock-row"><span>Student Readiness</span><span className="mock-value">78%</span></div>
              <div className="mock-chart">
                {[35, 55, 40, 70, 60, 85, 78].map((h, idx) => <div key={idx} style={{ height: `${h}%` }} />)}
              </div>
              <div className="mock-row"><span>Weak Topic Flagged</span><span className="mock-value">Quadratics</span></div>
              <div className="mock-row"><span>AI Tutor Sessions</span><span className="mock-value">1,204</span></div>
            </div>
          </div>

          <div className="product-row reverse">
            <div>
              <div className="product-eyebrow">PLATFORM 02 — DEVICE MANAGEMENT</div>
              <h3>National Education Device Management Platform</h3>
              <p className="desc">A ministry-grade platform for enrolling, securing, and monitoring learning devices at scale — built for fleets spanning thousands of tablets across dozens of cities.</p>
              <div className="feature-pills">
                {['Device Enrollment', 'GPS Tracking', 'Remote Lock/Wipe', 'Classroom Mode', 'Device Health', 'Analytics', 'Ministry Dashboard'].map((f) => <span key={f}>{f}</span>)}
              </div>
            </div>
            <div className="mockcard">
              <div className="mock-bar"><span /><span /><span /></div>
              <div className="mock-row"><span>Devices Enrolled</span><span className="mock-value">10,000</span></div>
              <div className="mock-row"><span>Cities Covered</span><span className="mock-value">12</span></div>
              <div className="mock-row"><span>Schools Onboarded</span><span className="mock-value">96</span></div>
              <div className="mock-row"><span>Fleet Status</span><span className="mock-value">Online</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries section-pad">
        <div className="wrap">
          <div className="kicker mono">Industries Served</div>
          <h2 className="section-title">Built for institutions that can&apos;t afford downtime</h2>
          <div className="industry-strip">
            {industries.map((ind, i) => (
              <div className="industry-cell" key={ind}>
                <IndustryIcon index={i} />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why section-pad">
        <div className="wrap">
          <div className="kicker mono">Why BestBean</div>
          <h2 className="section-title">The difference is in what&apos;s already deployed</h2>
          <div className="why-grid">
            {whyChoose.map((w) => (
              <div className="why-item" key={w}><div className="why-check" /><p>{w}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership section-pad" id="leadership">
        <div className="wrap">
          <div className="kicker mono">Leadership</div>
          <h2 className="section-title">Led by operators, not just strategists</h2>
          <div className="lead-card">
            <div className="lead-avatar"><span>KS</span></div>
            <div>
              <div className="lead-name">Kenneth Spann, JD, MBA</div>
              <div className="lead-title">Founder &amp; Chief Executive Officer</div>
              <p className="bio">
                Kenneth Spann is a Chicago-born technology executive and attorney with more than a decade of experience building and scaling technology platforms across Africa. He spent eleven years at Microsoft Nigeria, including roles as Development Platform Manager and Developer Platform Evangelism Lead, before serving as MD/CEO of WaveTek Nigeria, where he led an exam-preparation technology deployment across 200 schools. He founded BestBean to bring that same infrastructure discipline to education, government, and enterprise technology across the region.
              </p>
              <div className="lead-creds">
                {['Juris Doctor (JD)', 'MBA', '11+ Years, Microsoft Nigeria', 'Former MD/CEO, WaveTek Nigeria', 'Founder, ExamSphere'].map((c) => <span key={c}>{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="news section-pad" id="news">
        <div className="wrap">
          <div className="kicker mono">News &amp; Insights</div>
          <h2 className="section-title">Perspective from the field</h2>
          <p className="section-lede">Placeholder entries — replace with real posts before launch.</p>
          <div className="news-grid">
            {news.map((n) => (
              <div className="news-card" key={n.title}>
                <div className="news-tag">{n.tag}</div>
                <h4>{n.title}</h4>
                <p>{n.desc}</p>
                <div className="news-link">Coming Soon →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section-pad" id="contact">
        <div className="wrap">
          <div className="kicker on-dark mono">Contact</div>
          <h2 className="section-title on-dark">Start with a consultation</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <p>Tell us what you&apos;re working on — a classroom rollout, a ministry deployment, or an AI strategy for your organization — and we&apos;ll come back with a clear next step, not a sales pitch.</p>
              <div className="contact-detail"><span className="mono">Email</span><div className="value">hello@bestbeanltd.com</div></div>
              <div className="contact-detail"><span className="mono">Location</span><div className="value">Victoria Garden City, Lagos, Nigeria</div></div>
              <div className="contact-detail"><span className="mono">Response Time</span><div className="value">Within 2 business days</div></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div><label htmlFor="name">Name</label><input id="name" name="name" type="text" placeholder="Your full name" required /></div>
                <div><label htmlFor="org">Organization</label><input id="org" name="org" type="text" placeholder="Company, school, or agency" /></div>
              </div>
              <div className="form-row">
                <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="you@organization.com" required /></div>
                <div><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" placeholder="+234" /></div>
              </div>
              <div><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="What are you looking to solve?" required /></div>
              <div>
                <button type="submit" className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Send Message</button>
                <p className="form-note" style={{ marginTop: '10px' }}>We respond within two business days.</p>
              </div>
              <div id="formStatus">{status}</div>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="brand"><span className="mark" />BestBean</div>
              <p>Technology infrastructure for education, government, and enterprise across Africa.</p>
            </div>
            <div className="foot-col">
              <h5>Company</h5>
              <ul><li><a href="#capabilities">Capabilities</a></li><li><a href="#leadership">Leadership</a></li><li><a href="#news">Insights</a></li><li><a href="#contact">Contact</a></li></ul>
            </div>
            <div className="foot-col">
              <h5>Solutions</h5>
              <ul><li><a href="#capabilities">Technology Consulting</a></li><li><a href="#capabilities">AI Solutions</a></li><li><a href="#capabilities">Government Solutions</a></li><li><a href="#products">ExamSphere</a></li></ul>
            </div>
            <div className="foot-col">
              <h5>Contact</h5>
              <ul><li><a href="mailto:hello@bestbeanltd.com">hello@bestbeanltd.com</a></li><li><a href="#">Victoria Garden City, Lagos</a></li></ul>
            </div>
          </div>
          <div className="foot-bottom">
            <div className="foot-copy">© 2026 BestBean Ltd. All rights reserved.</div>
            <div className="foot-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
