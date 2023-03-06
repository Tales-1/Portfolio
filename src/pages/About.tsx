import Profile from "../assets/pp_hd.jpg"
import { motion } from "framer-motion"



const About:React.FC = () => {

    return ( 
            <section className="relative flex flex-col 2xl:h-[83vh]">
                <h1 className="mt-8 text-center font-bold text-2xl xl:text-3xl text-react underline underline-offset-8">My Story</h1>
                <div className="flex flex-col-reverse w-3/4 max-w-[90rem] m-auto mt-8 2xl:m-auto pb-12 md:flex-row relative gap-14">
                    <motion.div 
                        className="relative w-3/5 max-w-[22rem] m-auto aspect-square border-2 border-react rounded-md"
                        initial={{opacity:0, x:-60}}
                        animate={{opacity:1, x:0, transition:{duration:0.7}}}
                        whileHover={{scale:1.05}}
                        whileTap={{scale:1.05}}>

                        <div className="w-full h-full m-auto rounded-md overflow-hidden relative left-4 bottom-4
                                        before:absolute before:bg-react before:opacity-20 before:inset-0 hover:before:opacity-0 focus:before:opacity-0">
                            <img src={Profile} alt="me" className="object-cover w-full h-full" />
                        </div>
                        
                    </motion.div>
                    <motion.div className="flex flex-col justify-around p-8 w-full relative z-10 rounded-md text-slate-300"
                                initial={{opacity:0, x:60}}
                                animate={{opacity:1, x:0, transition:{duration:0.7}}}>
                        <p className="text-[0.9rem] dt:text-[1.1rem] font-body tracking-[.5px] leading-6 text-black 2xl:text-lg">
                            Hello! I'm Jawad Nazir and I enjoy building web applications. My passion for web development surfaced in November 2021 when, out of curiosity, I decided to try HTML and CSS. A week later, that curiosity whirled into a new-found passion.<br/><br/>
                            In January 2022, I made a significant advancement in my learning when I enrolled in freeCodeCamp's JavaScript course. After a month of intense study, I leapt from pure theory to practice and haven't looked back.<br/><br/> 
                            My passion and dedication to learning has led me from making calculators in vanilla JS to building a full-stack e-commerce website 10 months later! As a highly self-motivated individual, I am always seeking new challenges and projects to take on. 
                        </p>
                    </motion.div>
                </div>
            </section>
     
    )
}

export default About