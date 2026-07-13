import './globals.css';

export const metadata = {
  title: 'BestBean Ltd | AI Solutions. Measurable Outcomes.',
  description: 'BestBean Ltd is a human-led technology platform company building proprietary AI-powered products and digital transformation solutions for education, government and enterprise, including Exansphere.APP.',
  keywords: ['BestBean Ltd', 'AI solutions Nigeria', 'Exansphere.APP', 'government AI', 'education technology', 'BenQ education', 'enterprise AI consulting'],
  openGraph: {
    title: 'BestBean Ltd | AI Solutions. Measurable Outcomes.',
    description: 'Technology platforms and implementation solutions for education, government and enterprise.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
