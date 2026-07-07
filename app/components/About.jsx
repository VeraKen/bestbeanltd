// FILE: components/About.jsx
const values = [
  { n: '01', title: 'Innovation', desc: 'Building ahead of where institutions currently are.' },
  { n: '02', title: 'Integrity', desc: "Recommending what's right for the client, not the invoice." },
  { n: '03', title: 'Excellence', desc: 'Holding deployed systems to the same bar as the pitch.' },
  { n: '04', title: 'Partnership', desc: 'Staying engaged past go-live, not just past signature.' },
  { n: '05', title: 'Customer Success', desc: "Measuring our work by the outcomes our clients see, not the hours we bill." },
];

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="wrap">
        <div className="kicker mono">About BestBean</div>
        <h2 className="section-title">A technology firm built on implementation, not just ideas</h2>

        <div className="about-grid">
          <div className="about-copy">
            <p>BestBean was founded on a simple observation: most institutions don&apos;t fail at strategy — they fail at delivery. Governments, schools, and enterprises across Africa have no shortage of technology vendors offering ambitious roadmaps. What they lack is a partner who stays through implementation, training, and long-term support.</p>
            <p>We work at the intersection of consulting, education technology, artificial intelligence, and enterprise infrastructure — combining independent strategic advice with platforms we&apos;ve built and operate ourselves.</p>

            <div className="mv-grid">
              <div className="mv-card">
                <div className="mv-label mono">Mission</div>
                <p>Equip governments, schools, and enterprises with technology that measurably improves how they teach, operate, and serve the people who depend on them.</p>
              </div>
              <div className="mv-card">
                <div className="mv-label mono">Vision</div>
                <p>A region where public institutions have the same technology infrastructure and support as the best-run enterprises in the world.</p>
              </div>
            </div>
          </div>

          <div className="values-grid">
            {values.map((v) => (
              <div className="value-cell" key={v.n} style={v.n === '05' ? { gridColumn: 'span 2' } : undefined}>
                <span className="num mono">{v.n}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

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
  );
}
