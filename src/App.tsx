import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import ViewProject from "./pages/projects/ViewProject";

const App: React.FC = () => {
  const location = useLocation()
  
  return (
    <div className="relative z-0 flex min-h-[100vh] w-full flex-col bg-body">
      <Header />
      <main
        className={`z-10 mx-auto mt-2 flex w-full flex-col items-center overflow-hidden bg-white shadow-card lg:w-[70%] lg:rounded-xl`}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:pageRoute" element={<ViewProject />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
