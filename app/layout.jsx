import './globals.css';

export const metadata = {
  title: 'BestBean Ltd | Business Consulting, AI & Educational Technology',
  description: 'BestBean Ltd provides business consulting, educational technology, AI solutions, digital transformation, ExamSphere, and enterprise education device management solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
