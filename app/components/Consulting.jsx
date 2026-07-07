// FILE: components/Consulting.jsx
import { SectionIcon } from './Icons';

const items = [
  {
    tag: '01 — STRATEGY',
    title: 'Business Strategy',
    desc: 'Independent advice on market positioning, growth strategy, and operating model design for institutions navigating change.',
    list: ['Market Positioning', 'Growth Strategy', 'Operating Model Design', 'Board Advisory'],
    icon: 'strategy',
  },
  {
    tag: '02 — TRANSFORMATION',
    title: 'Digital Transformation',
    desc: "Turning legacy processes into systems that scale — without disrupting the people who depend on them daily.",
    list: ['Process Modernization', 'Change Management', 'Legacy System Migration', 'Data Infrastructure'],
    icon: 'transform',
  },
  {
    tag: '03 — AI ADVISORY',
    title: 'AI Advisory',
    desc: 'Practical guidance on where AI creates real value — and the governance needed to deploy it responsibly.',
    list: ['AI Readiness Assessment', 'Use-Case Prioritization', 'Responsible AI Governance', 'Vendor Evaluation'],
    icon: 'ai',
  },
  {
    tag: '04 — PLANNING',
    title: 'Technology Roadmaps',
    desc: 'Multi-year technology plans aligned to budget cycles, procurement realities, and institutional risk tolerance.',
    list: ['Multi-Year Planning', 'Budget Alignment', 'Procurement Strategy', 'Risk Management'],
    icon: 'roadmap',
  },
];

export default function Consulting() {
  return (
    <section className="capabilities section-pad" id="consulting">
      <div className="wrap">
        <div className="kicker mono">Consulting</div>
        <h2 className="section-title">Independent advice, delivered by people who&apos;ve shipped</h2>
        <p className="section-lede">Strategy work grounded in what actually happens during implementation — not slideware.</p>

        {items.map((item, i) => (
          <div className={`cap-row${i % 2 === 1 ? ' tint' : ''}`} key={item.title}>
            <div>
              <div className="cap-icon-wrap"><SectionIcon name={item.icon} /></div>
              <div className="cap-eyebrow">{item.tag}</div>
              <h3>{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </div>
            <ul className="cap-list">
              {item.list.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
