// FILE: components/Industries.jsx
import { IndustryIcon } from './Icons';

const industries = ['Federal Government', 'State Governments', 'Universities', 'Schools', 'Healthcare', 'Financial Services', 'Manufacturing', 'NGOs'];

export default function Industries() {
  return (
    <section className="industries section-pad" id="industries">
      <div className="wrap">
        <div className="kicker mono">Industries</div>
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
  );
}
