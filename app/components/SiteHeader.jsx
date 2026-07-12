"use client";

import Link from "next/link";
import { useState } from "react";
import { portfolio } from "../../lib/portfolio";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  return (
    <header className="siteHeader">
      <nav className="nav shellNav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="BestBean Ltd home">
          <span>B</span><div><strong>BestBean Ltd</strong><small>AI Solutions. Measurable Outcomes.</small></div>
        </Link>
        <button className="menuButton" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">☰</button>
        <div className={`navMenu ${open ? "navMenuOpen" : ""}`}>
          <div className="megaWrap" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
            <button className="navLinkButton" onClick={() => setSolutionsOpen(!solutionsOpen)} aria-expanded={solutionsOpen}>Solutions <span>⌄</span></button>
            {solutionsOpen && <div className="megaMenu">
              <div className="megaIntro"><small>BESTBEAN PORTFOLIO</small><strong>Six growth engines.<br/>One accountable partner.</strong><p>Products, platforms and implementation capabilities for education, government and enterprise.</p></div>
              <div className="megaGrid">{portfolio.map(item => <Link key={item.slug} href={`/solutions/${item.slug}`} onClick={() => setOpen(false)}><span>{item.number}</span><div><strong>{item.title}</strong><small>{item.label}</small></div></Link>)}</div>
            </div>}
          </div>
          <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
          <Link href="/#model" onClick={() => setOpen(false)}>How We Deliver</Link>
          <Link href="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
          <Link href="/insights" onClick={() => setOpen(false)}>Insights</Link>
          <Link href="/readiness" onClick={() => setOpen(false)}>AI Assessment</Link>
          <Link href="/leadership" onClick={() => setOpen(false)}>Leadership</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link className="navCta" href="/contact" onClick={() => setOpen(false)}>Discuss an Initiative</Link>
        </div>
      </nav>
    </header>
  );
}
