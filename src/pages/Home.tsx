import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { iconsArray } from "../assets/iconsArray"


const Home:React.FC = () => {
    let y = -30
    let delay = 0.7
    let duration = 0.2

    const displayIcons = iconsArray.map((icon) => {
        return (
                <motion.li 
                    className="hover:text-react"
                    initial={{opacity:0, y:-y}}
                    animate={{opacity:1, y:0, transition:{delay:delay + 0.8}}}
                    whileHover={{scale:1.5}}>

                        <a href={icon.link} target="#">
                            <img src={icon.src} alt={icon.alt} className="w-6 lg:w-8" />
                        </a>
                </motion.li>
            
                
           
        )
    })
    return ( 
            <motion.section className="relative flex flex-col w-full h-fit py-8 bg-light"
                            initial={{opacity:0, y:-100}}
                            animate={{opacity:1, y:0, transition:{duration:.5,delay:0.5}}}
                            exit={{y:100, opacity:0, transition:{duration:0.5}}}
                            >
                                
                <h1 className="text-center font-bold text-3xl lg:text-4xl text-[#8892b0]">
                    &#60;Home /&gt;
                </h1>
                <motion.div className="m-auto mt-16 lg:justify-center lg:mt-0 flex flex-col lg:items-center w-5/6 max-w-[45rem] h-[75vh]">
                    <motion.h2 className="text-5xl md:text-6xl lg:text-[5.8rem] font-bold font-poppins text-white"
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
                         className="mt-12 max-w-[75ch] leading-7 lg:text-center lg:text-lg font-body tracking-wide text-white"
                         initial={{opacity:0, y:y}}
                         animate={{opacity:1, y:0, transition:{delay:delay + 0.4, duration:duration}}}
                     >I'm a former Arabic Language Teacher and Community Development Officer.
                     <motion.span 
                         className="block"
                         initial={{opacity:0, y:y}}
                         animate={{opacity:1, y:0, transition:{delay:delay + 0.5, duration:duration}}}
                         > 
                         As a Front-End developer my focus is now geared towards creating simple, appealing and intuitive web applications
                     </motion.span>
                    </motion.p>
                    <motion.div 
                         className="border-2 border-react p-[1rem] w-fit mt-16 text-react lg:text-lg cursor-pointer"
                         initial={{opacity:0, y:y}} 
                         animate={{opacity:1, y:0, transition:{delay:delay + 0.6, duration:duration}}}
                    >
                         <Link to="">
                                Resume
                          </Link>
                    </motion.div>
                </motion.div>
                <ul className="fixed bottom-4 left-[50%] translate-x-[-50%] flex w-3/5 max-w-[25rem] justify-evenly items-center gap-2 mx-auto">
                    {displayIcons}
                </ul>
                {/* <h4 className="font-poppins fixed
                    right-0 bottom-0 z-10 text-[0.75rem] md:text-[0.78rem] lg:text-sm lg:m-3 text-white">
                        Designed & built with <span className="text-red-500">&#10084;</span> by<span className="text-"> Jawad Nazir.</span>
                 </h4> */}
            </motion.section>
    )
}


export default Home