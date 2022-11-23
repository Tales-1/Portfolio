import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import ProjectCards from "./ProjectCards"
type Props = {
    visible:boolean
}

const Projects:React.FC<Props> = ({visible}) => {
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
        <section className="border-b-2 border-white flex flex-col justify-center gap-16 h-fit py-12 w-full">
             <motion.div 
                className="absolute h-4/5 w-[3px] bg-white left-[50%] top-24"
                initial={{scaleY:0}}
                style={{scaleY:scrollYProgress, originY:"top"}}>
                </motion.div>
                
                <h2 className="text-3xl lg:text-4xl text-center text-react">&#60;Projects /&gt;</h2>
                <ul className="grid justify-center w-full gap-12">
                    <ProjectCards />
                </ul>
        </section>
    )
}

export default Projects

{/*  */}

// relative 