import './globals.css';

export const metadata = {
  title: 'BestBean Ltd | Technology Consulting, AI & Digital Transformation',
  description: 'BestBean Ltd delivers technology consulting, AI solutions, educational technology, government digital transformation, and enterprise software implementation across Africa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
