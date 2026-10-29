import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageHero from './components/PageHero';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Process from './components/Process';
import Contact from './components/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Process />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      {/* THIS FIXES THE FOOTER LANDING ISSUE */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-dark">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={
              <>
                <PageHero title="About Me" subtitle="Turning Ideas Into Functional Digital Solutions." />
                <About />
              </>
            } />

            <Route path="/services" element={
              <>
                <PageHero title="My Services" subtitle="Practical, scalable, and modern digital solutions tailored to your business needs." />
                <Services />
              </>
            } />

            <Route path="/projects" element={
              <>
                <PageHero title="Featured Projects" subtitle="A selection of my recent work, showcasing practical digital solutions and technical expertise." />
                <Projects />
              </>
            } />

            <Route path="/project/:id" element={<ProjectDetail />} />

            <Route path="/skills" element={
              <>
                <PageHero title="Skills & Technologies" subtitle="A practical, modern tech stack focused on reliability, performance, and scalability." />
                <Skills />
              </>
            } />

            <Route path="/contact" element={
              <>
                <PageHero title="Get In Touch" subtitle="Have a project in mind? Let's build it together." />
                <Contact />
              </>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;