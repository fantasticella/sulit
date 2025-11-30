import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import AboutPreview from "./components/AboutPreview.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <AboutPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
