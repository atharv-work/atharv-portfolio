import { useRef } from "react";
import "./App.css";
import {
  Header,
  Home,
  About,
  Skills,
  Education,
  Contact,
} from "./components/index";
import { headersArray, homeData, aboutData, educationData } from "./constants";
function App() {
  const scrollToAboutRef = useRef(null);
  const scrollToEducationRef = useRef(null);
  const scrollToSkillsRef = useRef(null);
  const scrollToContactRef = useRef(null);
  const scrollToHomeRef = useRef(null);
  return (
    <div className="App">
      <div
        className="bg-neutral-200 p-8 h-20 flex items-center justify-end sticky"
        style={{ top: 0, right: 0, width: "99.2vw" }}
      >
        <Header
          scrollToHomeRef={scrollToHomeRef}
          scrollToAboutRef={scrollToAboutRef}
          scrollToEducationRef={scrollToEducationRef}
          scrollToSkillsRef={scrollToSkillsRef}
          scrollToContactRef={scrollToContactRef}
          headersArray={headersArray}
        />
      </div>
      <div className="mt-10" ref={scrollToHomeRef}>
        <Home homeData={homeData} />
      </div>
      <div className="mt-10" ref={scrollToAboutRef}>
        <About aboutData={aboutData} />
      </div>
      <div className="mt-10" ref={scrollToEducationRef}>
        <Education educationData={educationData} />
      </div>
      <div className="mt-20" ref={scrollToSkillsRef}>
        <Skills />
      </div>
      <div className="mt-20" ref={scrollToContactRef}>
        <Contact educationData={educationData} />
      </div>
    </div>
  );
}

export default App;
