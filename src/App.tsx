import { ThemeProvider } from './theme/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
