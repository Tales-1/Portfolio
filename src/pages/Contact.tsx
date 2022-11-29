import { motion } from "framer-motion"

const Contact:React.FC= () => {

    return ( 
        <section className="relative grid grid-rows-4 w-full h-[80vh]">
                <h1 className="text-center font-bold text-3xl lg:text-4xl text-react w-full row-start-1 mt-8">Contact</h1>
                <motion.div className="text-center flex flex-col gap-6 items-center w-4/5 text-white row-start-2 row-span-2 m-auto"
                            initial={{opacity:0, y:-50}}
                            animate={{opacity:1, y:0, transition:{duration:0.7}}}
                >
                    <h2 className="text-4xl lg:text-6xl font-poppins font-bold text-title">Get in <span className="text-react">Touch.</span></h2>
                    <p className="text-lg font-body tracking-wider text-body">If you would like to solicit my services, feel free to contact me.  </p>
                    <a href="mailto:jawad.nazir248@gmail.com">
                        <button className="border-2 border-react p-[1rem] w-fit mt-10 mb-16 text-react font-bold lg:text-lg cursor-pointer">
                            Contact Me
                        </button>
                    </a>
                </motion.div>
            
        </section>
    )
}


export default Contact