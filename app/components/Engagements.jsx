// FILE: components/Engagements.jsx
const currentEngagements = [
  { status: 'In Progress', title: 'Federal Education Technology Initiative', desc: 'A national-scale program bringing adaptive learning infrastructure to public secondary education.' },
  { status: 'Ongoing', title: 'State-Level Digital Infrastructure Program', desc: 'Rollout and support of device management and connectivity infrastructure across state institutions.' },
  { status: 'Active', title: 'Enterprise AI Advisory Engagement', desc: 'Ongoing advisory work helping a corporate client integrate AI into core operations.' },
];

export default function Engagements() {
  return (
    <section className="products section-pad" id="engagements">
      <div className="wrap">
        <div className="kicker mono">Active Engagements</div>
        <h2 className="section-title">Platforms and programs currently underway</h2>
        <p className="section-lede">Not slideware — systems currently in classrooms and ministries, carrying real students and real devices.</p>

        <div className="product-row">
          <div>
            <div className="product-eyebrow">PLATFORM — ADAPTIVE LEARNING</div>
            <h3>ExamSphere</h3>
            <p className="desc">An AI-powered examination and learning platform built for WAEC, JAMB, and NECO preparation — adapting to each student&apos;s weak topics and giving parents and teachers a clear view of progress.</p>
            <div className="feature-pills">
              {['Adaptive Testing', 'WAEC', 'JAMB', 'NECO', 'Weak-Topic Analysis', 'AI Tutor'].map((f) => <span key={f}>{f}</span>)}
            </div>
          </div>
          <div className="mockcard">
            <div className="mock-bar"><span /><span /><span /></div>
            <div className="mock-row"><span>Student Readiness</span><span className="mock-value">78%</span></div>
            <div className="mock-chart">
              {[35, 55, 40, 70, 60, 85, 78].map((h, idx) => <div key={idx} style={{ height: `${h}%` }} />)}
            </div>
            <div className="mock-row"><span>AI Tutor Sessions</span><span className="mock-value">1,204</span></div>
          </div>
        </div>

        <div className="product-row reverse">
          <div>
            <div className="product-eyebrow">PLATFORM — DEVICE MANAGEMENT</div>
            <h3>National Education Device Management Platform</h3>
            <p className="desc">A ministry-grade platform for enrolling, securing, and monitoring learning devices at scale — built for fleets spanning thousands of tablets across dozens of cities.</p>
            <div className="feature-pills">
              {['Device Enrollment', 'GPS Tracking', 'Remote Lock/Wipe', 'Classroom Mode', 'Ministry Dashboard'].map((f) => <span key={f}>{f}</span>)}
            </div>
          </div>
          <div className="mockcard">
            <div className="mock-bar"><span /><span /><span /></div>
            <div className="mock-row"><span>Devices Enrolled</span><span className="mock-value">10,000</span></div>
            <div className="mock-row"><span>Cities Covered</span><span className="mock-value">12</span></div>
            <div className="mock-row"><span>Fleet Status</span><span className="mock-value">Online</span></div>
          </div>
        </div>

        <div className="eng-subgrid">
          <div className="eng-mini-card">
            <div className="eng-status">In Deployment</div>
            <h4>Interactive Classroom Technologies</h4>
            <p>Interactive displays and classroom management systems rolling out across partner schools.</p>
          </div>
          <div className="eng-mini-card">
            <div className="eng-status">Ongoing</div>
            <h4>AI Initiatives</h4>
            <p>Applied AI programs spanning adaptive learning, ministry analytics, and enterprise automation.</p>
          </div>
        </div>

        <div className="eng-current">
          <div className="kicker mono">Current Consulting Engagements</div>
          <div className="eng-grid">
            {currentEngagements.map((e) => (
              <div className="eng-card" key={e.title}>
                <div className="eng-status">{e.status}</div>
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
