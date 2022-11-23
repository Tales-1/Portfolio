import projectData from "./projectData"
import { motion } from "framer-motion"
import GithubIcon from "../assets/github.png"
import LinkIcon from "../assets/live-link.png"
import { imgMotion } from "./variants"
import { cardMotion } from "./variants"
import { useEffect, useState } from "react"

const ProjectCards:React.FC = () => { 
    const [width, setWidth] = useState(window.innerWidth)
    const desktop = width > 1275
    useEffect(()=> {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
        return () => {
            window.removeEventListener("resize", () => {
                setWidth(window.innerWidth)
            })
        }
    },[])

    const displayProjects = projectData.map((item,i) => {
        const {name,src,github,live,description,tools} = item
        const displayTools = tools.map((tool,i) => <li className="text-react" key={i}>{tool}</li>)

        return (
            <motion.li className="flex flex-col md:flex-row max-w-[70rem] w-5/6 m-auto"
                        initial="rest" whileHover="hover" key={i}
                        animate= {desktop ? "restDesktop" : "rest"}
        
            >
                    <motion.div className="w-full aspect-[1.2/1] flex flex-col 
                        rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:rounded-bl-lg overflow-hidden
                        shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
                        variants={imgMotion}
                        whileTap={{opacity:1}}                   >
                        <img src={src} alt="thumbnail of project" className="object-cover h-full w-full" />
                    </motion.div>

                    <motion.div className="grid grid-cols-2 place-items-center bg-dark w-full 
                        rounded-b-lg md:rounded-b-none md:rounded-br-lg md:rounded-tr-lg overflow-hidden
                        shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
                        variants={cardMotion}>

                        <h1 className="text-center row-start-1 col-start-1 col-span-full py-3">&#60;{name} /&gt;</h1>
                        <p className="col-start-1 col-span-full p-6 text-justify row-start-2 md:px-12">{description}</p>
                        
                        <div className="col-start-2 row-start-3 flex items-center gap-6 ml-auto mr-8">
                            <motion.a href={github} target="#"
                                whileHover={{rotateZ:[0,20,-20,20,0],transition:{repeat:Infinity,duration:1}}}>
                                <img src={GithubIcon} alt="github logo" className="w-8" />
                            </motion.a>
                            <motion.a href={live} target="#" className=""
                                whileHover={{rotateZ:[0,20,-20,20,0],transition:{repeat:Infinity,duration:1}}}>
                                <img src={LinkIcon} alt="link logo" className="w-6"/>
                            </motion.a>
                        </div>
                        
                        <ul className="row-start-4 col-start-1 col-span-full flex flex-wrap 
                        gap-6 justify-center bg-light w-full p-4 mt-6 self-end">
                            {displayTools}
                        </ul>

                    </motion.div>  
            </motion.li>
        )
    })
    return (
        <>
            {displayProjects}
        </>
        
    )
} 

export default ProjectCards