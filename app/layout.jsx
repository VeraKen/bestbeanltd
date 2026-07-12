import './globals.css';

export const metadata = {
  title: 'BestBean Ltd | AI Solutions. Measurable Outcomes.',
  description: 'BestBean Ltd is the parent technology company behind ExamSphere.app, education device management, government AI, BenQ education solutions, enterprise AI consulting and future SaaS products.',
  keywords: ['BestBean Ltd', 'AI solutions Nigeria', 'ExamSphere', 'government AI', 'education technology', 'BenQ education', 'enterprise AI consulting'],
  openGraph: {
    title: 'BestBean Ltd | AI Solutions. Measurable Outcomes.',
    description: 'Technology platforms and implementation solutions for education, government and enterprise.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
