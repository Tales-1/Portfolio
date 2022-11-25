import { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Projects from "./projects/Projects"
import Contact from "./Contact"
import WelcomeScreen from "./WelcomeScreen"
import { AnimatePresence } from "framer-motion"
import Header from "./Header"

const App:React.FC = () => {
    const [visible, setVisible] = useState(true)
    const location = useLocation()
    function toggleTransition(){
        setVisible(true)
        setTimeout(()=>setVisible(false),1200)
    } 
   
    setTimeout(() => setVisible(false),1200)
    
    return (
            <div className="relative text-white flex flex-col min-h-[100vh] bg-light z-0 w-full">
                <WelcomeScreen visible={visible} />
                <Header toggleTrans={toggleTransition} />
                    <main className="bg-light flex flex-col items-center z-10 h-[90vh]">
                        <AnimatePresence>
                            <Routes location={location} key={location.pathname}> 
                                <Route path="/">
                                    <Route index element={<Home />} />
                                    <Route path="about" element={<About visible={visible} toggle={toggleTransition}/>}/>
                                    <Route path="projects" element={<Projects visible={visible} toggle={toggleTransition} />}/>
                                    <Route path="contact" element={<Contact visible={visible} toggle={toggleTransition} />}/>
                                </Route>

                            </Routes>
                        </AnimatePresence>
                    </main>
                   
            </div>
        
       
    )
}

export default App