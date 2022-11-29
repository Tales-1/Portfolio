import { useState,  } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/projects/Projects"
import Contact from "./pages/Contact"
import Header from "./Header"

const App:React.FC = () => {
    const [visible, setVisible] = useState(true)
    const location = useLocation()
   
    setTimeout(() => setVisible(false),1500)
    console.log(visible)
    return (
            <div className="relative flex flex-col min-h-[100vh] z-0 w-full bg-[#3b4f4f]">
                
                <Header  />
                    <main className="flex flex-col items-center z-10 w-full lg:w-[70%] mx-auto bg-light lg:rounded-xl shadow-card">
                            <Routes location={location} key={location.pathname}> 
                                <Route path="/">
                                    <Route index element={<Home />} />
                                    <Route path="about" element={<About />}/>
                                    <Route path="projects" element={<Projects  />}/>
                                    <Route path="contact" element={<Contact  />}/>
                                </Route>

                            </Routes>
                       
                    </main>
                
            </div>
        
       
    )
}

export default App