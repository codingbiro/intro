import { ThemeProvider } from './theme/ThemeContext';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Outcomes from './components/Outcomes';
import Focus from './components/Focus';
import Background from './components/Background';
import Outside from './components/Outside';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="shell">
        <Sidebar />
        <main id="main">
          <Intro />
          <Outcomes />
          <Background />
          <Focus />
          <Outside />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
