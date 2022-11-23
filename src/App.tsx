import { useState } from "react"
import { motion } from "framer-motion"
import { Routes, Route } from "react-router-dom"
import NavigationTree from "./NavigationTree"
import Home from "./Home"
import About from "./About"
import Projects from "./projects/Projects"
import Contact from "./Contact"
import WelcomeScreen from "./WelcomeScreen"


const App:React.FC = () => {
    const [visible, setVisible] = useState(true)
    const [showTree, setShowTree] = useState(false)
    function toggleTree(){
        setShowTree(prev => !prev)
    }
    setTimeout(()=>setVisible(false), 2200)

    return (
        <div className="text-white grid">
            <WelcomeScreen visible={visible}/>
            <motion.header 
                className={`w-screen flex text-react h-[12vh] bg-dark grid grid-flow-col gap-12
                items-center overflow-hidden`}
                animate={{height:showTree ? "80vh" : "12vh", transition:{duration:0.5}}}> 

                <div className="flex flex-col gap-2 mt-4 text-center">
                    <span className="lg:text-xl">DOM Tree</span>
                    <button className="text-xs lg:text-base underline hover:opacity-40" onClick={toggleTree}>
                    {showTree ? "Hide" : "Show"}
                    </button>
               </div>

               <NavigationTree toggleTree={toggleTree} />
            </motion.header>

            <main className="h-full bg-light flex flex-col items-center h-fit z-20">
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />}/>
                        <Route path="projects" element={<Projects visible={visible} />}/>
                        <Route path="contact" element={<Contact />}/>
                    </Route>
                </Routes>
            </main>
        </div>
    )
}

export default App