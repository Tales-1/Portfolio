import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import ProjectCards from "./ProjectCards"



const Projects:React.FC= () => {
    const [width,setWidth] = useState(window.innerWidth)
    const desktop = width > 1275 
    const { scrollYProgress } = useScroll()
  
    useEffect(()=>{
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })

        return () => {
            window.removeEventListener("resize", () => {
                setWidth(window.innerWidth)
            })
        }
    },[])

    return (
        <motion.section 
            className="relative border-b-2 border-white flex flex-col justify-center gap-16 h-fit py-12 w-full bg-light"
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0, transition:{duration:.5,delay:0.5}}}
            exit={{y:100, opacity:0, transition:{duration:0.5}}}
            >
             <motion.div 
                className="absolute h-4/5 w-[3px] bg-white left-[50%] top-32 z-0"
                initial={{scaleY:0}}
                style={{scaleY:scrollYProgress, originY:"top"}}>
                </motion.div>
                
                <h1 className="text-center font-bold text-3xl lg:text-4xl text-[#8892b0]">&#60;Projects /&gt;</h1>
                <ul className="grid justify-center w-full gap-12 z-10">
                    <ProjectCards />
                </ul>
        </motion.section>
    )
}

export default Projects

{/*  */}

// relative 