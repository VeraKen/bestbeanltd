import './globals.css';

export const metadata = {
  title: 'BestBean Ltd | Technology Consulting, AI & Digital Transformation',
  description: 'BestBean Ltd partners with governments, educational institutions and enterprises to deliver AI, digital transformation, enterprise software and smart learning solutions across Africa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
