// FILE: components/Partnerships.jsx
const categories = [
  { title: 'Technology Licensing', desc: 'Licensing BestBean-built platforms to government and institutional partners.' },
  { title: 'Strategic Alliances', desc: 'Joint go-to-market partnerships with complementary technology and consulting firms.' },
  { title: 'Platform Integrations', desc: 'Technical integration partnerships connecting BestBean platforms with partner systems.' },
  { title: 'Implementation Partnerships', desc: 'Delivery partnerships for large-scale rollouts requiring additional on-the-ground capacity.' },
];

const active = [
  { name: 'Government Licensing Partnership', desc: 'Technology licensing discussions with a national training authority.', status: 'Under Negotiation' },
  { name: 'Regional Education Repository Initiative', desc: 'A proposed shared examination and credentialing repository for the region.', status: 'In Development' },
  { name: 'Corporate Technology Alliance', desc: 'A strategic alliance supporting joint go-to-market for enterprise AI services.', status: 'Active' },
];

export default function Partnerships() {
  return (
    <section className="engagements section-pad" id="partnerships">
      <div className="wrap">
        <div className="kicker on-dark mono">Licensing &amp; Partnerships</div>
        <h2 className="section-title on-dark">How we structure alliances</h2>
        <p className="section-lede on-dark">BestBean structures licensing and joint-venture partnerships separately from platform ownership — our technology and IP remain ours regardless of the commercial structure.</p>

        <div className="part-categories">
          {categories.map((c) => (
            <div className="part-cat-card" key={c.title}>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="partnerships">
          <div className="kicker on-dark mono">In Development</div>
          <h3 className="section-title on-dark" style={{ fontSize: '1.5rem' }}>Alliances currently underway</h3>
          <div className="part-list">
            {active.map((p) => (
              <div className="part-row" key={p.name}>
                <div><div className="p-name">{p.name}</div><div className="p-desc">{p.desc}</div></div>
                <div className="p-status">{p.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
