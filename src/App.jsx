import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="resume-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Languages />
      </main>
      <Footer />
    </div>
  )
}