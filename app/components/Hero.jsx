// FILE: components/Hero.jsx
'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(target, start) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const duration = 1400;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);
  return value;
}

export default function Hero() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const devices = useCountUp(10000, visible);
  const schools = useCountUp(96, visible);
  const cities = useCountUp(12, visible);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow mono">Technology Consulting &amp; Enterprise Solutions</div>
          <h1>Transforming Education, Business &amp; Government Through Technology</h1>
          <p className="sub">BestBean is a technology consulting and solutions firm serving ministries, universities, enterprises, and international organizations across Africa.</p>
          <div className="hero-stats" ref={ref}>
            <div><div className="stat-num">{devices.toLocaleString()}+</div><div className="stat-label">Devices Managed</div></div>
            <div><div className="stat-num">{schools}</div><div className="stat-label">Schools Onboarded</div></div>
            <div><div className="stat-num">{cities}</div><div className="stat-label">Cities Covered</div></div>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Schedule a Consultation</a>
            <a href="#solutions" className="btn btn-outline">Explore Our Solutions</a>
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
  );
}
