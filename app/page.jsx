// FILE: page.jsx
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Consulting from './components/Consulting';
import Solutions from './components/Solutions';
import Engagements from './components/Engagements';
import Partnerships from './components/Partnerships';
import Industries from './components/Industries';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Consulting />
      <Solutions />
      <Engagements />
      <Partnerships />
      <Industries />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
