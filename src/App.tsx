import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import ViewProject from "./pages/projects/ViewProject";

const App: React.FC = () => {
  const location = useLocation();
  const {pathname} = location
  const height = pathname === "/projects" ? "h-fit" : pathname === "/about" ? "h-fit lg:h-[80vh]" : "h-[80vh]"
  return (
    <div className="relative flex flex-col min-h-[100vh] z-0 w-full bg-body">
      <Header />
      <main className={`flex flex-col items-center z-10 w-full mt-2 ${height} lg:w-[70%] mx-auto bg-white lg:rounded-xl overflow-hidden shadow-card`}>
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects">
              <Route index element={<Projects />} />
              <Route path=":pageRoute" element={<ViewProject />} />
            </Route>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
