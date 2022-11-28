import Profile from "../assets/pp_hd.jpg"
import { motion } from "framer-motion"



const About:React.FC = () => {

    return ( 
            <section 
                className="relative flex flex-col" >
                <h1 className="mt-8 text-center font-bold text-3xl lg:text-4xl text-react">About</h1>

                <div className="flex flex-col-reverse w-3/4 max-w-[90rem] m-auto mt-16 pb-12
                        md:flex-row relative gap-14">
                    
                    <motion.div 
                        className="relative w-3/5 max-w-[22rem] m-auto aspect-square border-2 border-react 
                                rounded-md"
                        whileHover={{scale:1.05}}
                        whileTap={{scale:1.05}}>

                        <div className="w-full h-full m-auto rounded-md overflow-hidden relative left-4 bottom-4
                        before:absolute before:bg-react before:opacity-20 before:inset-0 hover:before:opacity-0 focus:before:opacity-0
                        ">
                            <img src={Profile} alt="me" className="object-cover w-full h-full" />
                        </div>
                        
                    </motion.div>

                    <div className="flex flex-col gap-12 justify-around p-8 w-full relative z-10 rounded-md text-slate-300 " >
                        <h2 className="text-xl lg:text-2xl underline underline-offset-8 text-title font-poppins font-semibold tracking-wide">
                            About Me
                        </h2>
                        <p className="text-sm lg:text-[1.1rem] font-body tracking-[.5px] leading-6 text-body">Hello! I'm Jawad Nazir and I enjoy building web applications. My passion for web development surfaced in November 2021 when, out of curiosity, I decided to try HTML and CSS. A week later, that curiosity whirled into a new-found passion.<br/><br/>
                        In January 2022,I made a significant advancement in my learning when I enrolled in freeCodeCamp's JavaScript course. After a month of intense study, I made the leap from pure theory to practice and haven't looked back since.<br/><br/> 
                        From learning how to create a calculator, to creating a miniature role-playing game using Vanilla JS,, to building a near-complete e-commerce app in React, I've demonstrated the ability to solve problems effectively, and a hunger to learm. I'm currently looking for a job in the technical field as a front-end developer.</p>
                    </div>
                    
                    
                </div>
                    
            </section>
     
    )
}

export default About