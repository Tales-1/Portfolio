import { motion } from "framer-motion"

const Contact:React.FC= () => {

    return ( 
        <section className="relative grid grid-rows-4 w-full h-[80vh]">
                <h1 className="text-center font-bold text-3xl lg:text-4xl text-react w-full row-start-1 mt-8 underline underline-offset-8">Contact</h1>
                <motion.div className="text-center flex flex-col gap-6 items-center w-4/5 text-white row-start-2 row-span-2 m-auto"
                            initial={{opacity:0, y:-50}}
                            animate={{opacity:1, y:0, transition:{duration:0.7}}}
                >
                    <h2 className="text-4xl lg:text-6xl font-poppins font-bold text-title">Get in <span className="text-react">Touch.</span></h2>
                    <p className="text-lg font-body tracking-wider text-body">If you would like to solicit my services, feel free to contact me.  </p>
                    <a href="mailto:jawad.nazir248@gmail.com">
                    <motion.button 
                         className="relative p-[1rem] w-fit mt-16 text-white before:border-2 before:border-react lg:text-lg cursor-pointer
                                    before:absolute before:w-full before:h-full bg-body before:left-[4px] before:bottom-[4px]
                                    rounded-lg before:rounded-lg"
                         whileHover={{scale:1.2, opacity:1, zIndex:20}}
                    >
                       Contact
                    </motion.button>
                    </a>
                </motion.div>
            
        </section>
    )
}


export default Contact