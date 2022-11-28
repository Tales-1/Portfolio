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
        <section 
            className="relative flex flex-col justify-center gap-16 h-fit w-full pb-12"
            >
             <motion.div 
                className="absolute h-4/5 w-[3px] bg-white left-[50%] top-32 z-0"
                initial={{scaleY:0}}
                style={{scaleY:scrollYProgress, originY:"top"}}>
            </motion.div>
                
            <h1 className="mt-8 text-center font-bold text-3xl lg:text-4xl text-react">Projects</h1>
            <ul className="grid justify-center w-full gap-12 z-10">
                <ProjectCards />
            </ul>
        </section>
    )
}

export default Projects

{/*  */}

// relative 