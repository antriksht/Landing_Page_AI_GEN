import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Clients />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;