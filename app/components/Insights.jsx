// FILE: components/Insights.jsx
const categories = [
  { tag: 'Licensing', title: 'Licensing Announcements', desc: 'Updates on new technology licensing agreements as they are finalized.' },
  { tag: 'Deployments', title: 'New Deployments', desc: 'Coverage of new platform rollouts across schools, ministries, and enterprises.' },
  { tag: 'Government', title: 'Ministry Engagements', desc: 'Updates from active work with federal and state government partners.' },
  { tag: 'Products', title: 'Product Launches', desc: 'Announcements for new features and platforms as they go live.' },
  { tag: 'Events', title: 'Conferences', desc: 'Where to find BestBean at industry and government technology events.' },
  { tag: 'Press', title: 'Press Releases', desc: 'Official statements and media coverage of BestBean\u2019s work.' },
];

export default function Insights() {
  return (
    <section className="news section-pad" id="insights">
      <div className="wrap">
        <div className="kicker mono">Insights</div>
        <h2 className="section-title">Perspective from the field</h2>
        <p className="section-lede">Placeholder categories — replace with real posts before launch.</p>
        <div className="news-grid three-col">
          {categories.map((n) => (
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
  );
}
