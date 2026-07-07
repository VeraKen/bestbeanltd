import './globals.css';

export const metadata = {
  title: 'BestBean Ltd | Technology Consulting, AI & Digital Transformation',
  description:
    'BestBean Ltd delivers technology consulting, AI solutions, educational technology, enterprise software and government digital transformation programs across Africa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
