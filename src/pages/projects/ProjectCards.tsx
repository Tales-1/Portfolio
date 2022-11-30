import projectData from "./projectData"
import { motion } from "framer-motion"
import GithubIcon from "../../assets/github.png"
import LinkIcon from "../../assets/live-link.png"
import { imgMotion } from "./variants"
import { cardMotion } from "./variants"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
        const displayTools = tools.map((tool,i) => <li className="text-light" key={i}>{tool}</li>)

        return (
            <motion.li className="flex flex-col lg-2:flex-row max-w-[70rem] w-4/5 sm:w-3/5 lg-2:w-5/6 m-auto"
                        initial="rest" whileHover="hover" key={i}
                        animate= {desktop ? "restDesktop" : "rest"}>
                            
                    <motion.div className="w-full aspect-[1.2/1] flex flex-col 
                        rounded-t-lg lg-2:rounded-t-none lg-2:rounded-tl-lg lg-2:rounded-bl-lg overflow-hidden
                        shadow-card"
                        variants={imgMotion}
                        whileTap={{opacity:1}}                   >
                        <img src={src} alt="thumbnail of project" className="object-cover h-full w-full" />
                    </motion.div>

                    <motion.div className="grid grid-cols-2 place-items-center bg-title w-full 
                        rounded-b-lg lg-2:rounded-b-none lg-2:rounded-br-lg lg-2:rounded-tr-lg overflow-hidden
                        shadow-card"
                        variants={cardMotion}>
                        <h1 className="py-3 font-poppins font-bold underline underline-offset-4 text-light text-center row-start-1 col-start-1 col-span-full">
                            {name}
                        </h1>
                        
                        
                        <p className="col-start-1 col-span-full text-sm lg:text-base p-8 text-justify row-start-2 md:px-12 font-body text-light leading-7">
                            {description}
                        </p>
                        
                        <Link to={`/projects/${item.pageRoute}`} className="row-start-3 text-white ml-8 md:ml-12 self-center 
                            justify-self-start underline underline-offset-4 text-xs lg:text-[.9rem] hover:opacity-80">
                            Read more
                        </Link>
                        <div className="col-start-2 row-start-3 flex items-center gap-6 ml-auto mr-8 md:mr-12">
                            <motion.a href={github} target="#"
                                whileHover={{rotateZ:[0,20,-20,20,0],transition:{repeat:Infinity,duration:1}}}>
                                <img src={GithubIcon} alt="github logo" className="w-5 lg-2:w-7" />
                            </motion.a>
                            <motion.a href={live} target="#" className=""
                                whileHover={{rotateZ:[0,20,-20,20,0],transition:{repeat:Infinity,duration:1}}}>
                                <img src={LinkIcon} alt="link logo" className="w-4 lg-2:w-[1.4rem]"/>
                            </motion.a>
                        </div>
                        
                        
                        <ul className="row-start-4 col-start-1 col-span-full flex flex-wrap gap-8 justify-center
                                     bg-body w-full p-6 mt-6 self-end text-xs lg-2:text-sm">
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