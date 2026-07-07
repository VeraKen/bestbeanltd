// FILE: components/Solutions.jsx
import { SectionIcon } from './Icons';

const items = [
  {
    tag: '01 — PUBLIC SECTOR',
    title: 'Government Technology',
    desc: 'Ministry-grade platforms built for procurement, compliance, and scale requirements unique to the public sector.',
    list: ['Ministry Platforms', 'Regulatory Compliance', 'Public Infrastructure', 'Data Residency & Security'],
    icon: 'gov',
  },
  {
    tag: '02 — EDUCATION',
    title: 'Educational Technology',
    desc: 'Learning and assessment platforms designed around how teachers teach and students actually learn.',
    list: ['Learning Platforms', 'Teacher Training', 'Assessment Systems', 'Curriculum Technology'],
    icon: 'edu',
  },
  {
    tag: '03 — ENTERPRISE',
    title: 'Enterprise Software',
    desc: 'Custom applications and integrations that fit how your organization actually operates, not a generic template.',
    list: ['Custom Applications', 'Systems Integration', 'Workflow Automation', 'API Development'],
    icon: 'software',
  },
  {
    tag: '04 — CLASSROOM',
    title: 'Smart Classrooms',
    desc: 'Interactive classroom technology that teachers actually use, backed by training and ongoing support.',
    list: ['Interactive Displays', 'Classroom Management Systems', 'AV Integration', 'Digital Whiteboards'],
    icon: 'classroom',
  },
  {
    tag: '05 — INFRASTRUCTURE',
    title: 'Cloud & Infrastructure',
    desc: 'The network, security, and cloud foundation that everything else in this list depends on.',
    list: ['Cloud Migration', 'Network Modernization', 'Cybersecurity', 'Managed Services'],
    icon: 'cloud',
  },
];

export default function Solutions() {
  return (
    <section className="capabilities section-pad" id="solutions">
      <div className="wrap">
        <div className="kicker mono">Solutions</div>
        <h2 className="section-title">Platforms built for institutions that can&apos;t afford downtime</h2>
        <p className="section-lede">Five solution areas, delivered by one accountable team from design through long-term support.</p>

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
