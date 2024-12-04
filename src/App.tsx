import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <div className="fixed -z-10 h-full w-full bg-black"></div>
      {/* <div className="absolute z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div
        className="absolute z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-neutral-700 to-black"
      ></div>
      <div
        className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-neutral-700 to-black"
      >
        <div className="flex flex-col justify-center items-center ">
          <Hero />
          <About />
          <Skills />
          <Experiences />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
