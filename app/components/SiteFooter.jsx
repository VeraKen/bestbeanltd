import Link from "next/link";
import { portfolio } from "../../lib/portfolio";

export default function SiteFooter(){
 return <footer className="siteFooter">
  <div className="footerGrid">
   <div><Link className="brand" href="/"><span>B</span><div><strong>BestBean Ltd</strong><small>AI Solutions. Measurable Outcomes.</small></div></Link><p>Building scalable technology platforms and transformation programmes for education, government and enterprise.</p></div>
   <div><h4>Solutions</h4>{portfolio.slice(0,3).map(i=><Link key={i.slug} href={`/solutions/${i.slug}`}>{i.title}</Link>)}</div>
   <div><h4>More Solutions</h4>{portfolio.slice(3).map(i=><Link key={i.slug} href={`/solutions/${i.slug}`}>{i.title}</Link>)}</div>
   <div><h4>Company</h4><Link href="/industries">Industries</Link><Link href="/leadership">Leadership</Link><Link href="/contact">Contact</Link><a href="mailto:info@bestbeanltd.com">info@bestbeanltd.com</a></div>
  </div>
  <div className="footerBottom"><span>© {new Date().getFullYear()} BestBean Ltd. All rights reserved.</span><span>Lagos, Nigeria</span></div>
 </footer>
}
