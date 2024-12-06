import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <div className="fixed -z-10 h-full w-full">
        <div
          className="absolute z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-neutral-700 to-black"
        ></div>
      </div>
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
