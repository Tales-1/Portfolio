import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { iconsArray } from "../assets/iconsArray"


const Home:React.FC = () => {
    let y = -30
    let delay = 0.1
    let duration = 0.2

    const displayIcons = iconsArray.map((icon,i) => {
        return (
                <motion.li 
                    className="hover:text-react"
                    whileHover={{scale:1.5}}
                    key={i}
                    >

                        <a href={icon.link} target="#">
                            <img src={icon.src} alt={icon.alt} className="w-6 lg:w-8" />
                        </a>
                </motion.li>
            
                
           
        )
    })
    return ( 
            <motion.section className="relative flex flex-col w-full h-[80vh] pb-12" >
                                
                <h1 className="text-center font-bold text-3xl lg:text-4xl text-react mt-8 underline underline-offset-8">
                    Home
                </h1>
                <motion.div className="m-auto mt-16 lg:justify-center lg:mt-0 flex flex-col md:items-center max-w-[45rem] lg:h-[70vh] w-4/5">
                    <motion.h2 className="text-6xl lg:text-[5rem] font-bold font-poppins text-title"
                             initial={{opacity:0, y:y}}
                             animate={{opacity:1, y:0, transition:{delay:delay + 0.1, duration:duration}}}
                    >
                        <motion.span 
                             className="block text-base lg:text-lg text-react"
                             initial={{opacity:0, y:y}}
                             animate={{opacity:1, y:0, transition:{delay:delay + 0.2, duration:duration}}}
                             >
                             HI, I'M 
                         </motion.span>
                        JAWAD NAZIR
                    </motion.h2>
                    <motion.span 
                         className="text-2xl md:text-3xl lg:text-4xl text-react mt-2 font-poppins"
                         initial={{opacity:0, y:y}}
                         animate={{opacity:1, y:0, transition:{delay:delay + 0.3, duration:duration}}}
                         >
                        Frontend Developer
                    </motion.span>
                     <motion.p 
                         className="block text-[#282d35] md:text-center mt-12 font-semibold md:w-[65ch] lg:text-lg"
                         initial={{opacity:0, y:y}}
                         animate={{opacity:1, y:0, transition:{delay:delay + 0.5, duration:duration}}}
                         > 
                        A Developer with a passion for creating simple and intuitive web experiences. <br />
                        <span className="mt-2 block">I'm currently seeking a role as a Front-End Developer.</span>
                     </motion.p>
                   
                    <motion.button 
                         className="relative p-[1rem] w-fit mt-16 text-white before:border-2 before:border-react lg:text-lg cursor-pointer
                                    before:absolute before:w-full before:h-full bg-body before:left-[4px] before:bottom-[4px]
                                    "
                         initial={{opacity:0,  y:y}} 
                         animate={{opacity:1, y:0,rotateX:"-5deg", transition:{delay:delay + 0.6, duration:duration}}}
                         whileHover={{scale:1.2, opacity:1, zIndex:20}}
                    >
                       Resume
                    </motion.button>
                </motion.div>
                    <motion.ul className="flex w-full justify-evenly items-center max-w-[25rem] gap-2 m-auto p-3 bg-[#3b4f4f] rounded-xl
                               relative top-8"
                                initial={{opacity:0, y:-y}}
                                animate={{opacity:1, y:0, transition:{delay:delay + 0.8}}}>
                        {displayIcons}
                     </motion.ul>  
                     <h4 className="font-poppins fixed right-0 bottom-0 z-10 text-[0.75rem] lg:m-3 text-white">
                        Designed & built with <span className="text-red-500">&#10084;</span> by<span className="text-white"> Jawad Nazir.</span>
                    </h4>
            </motion.section>
    )
}


export default Home