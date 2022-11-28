import { motion } from "framer-motion"

const Contact:React.FC= () => {

    return ( 
        <motion.section 
            className="relative grid place-items-center w-full gap-28"
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0, transition:{duration:.5,delay:0.5}}}
            exit={{y:200, opacity:0, transition:{duration:0.5}}}>
            
                <h1 className="text-center font-bold text-3xl lg:text-4xl text-[#8892b0] w-full py-12">&#60;Contact /&gt;</h1>
                <div className="m-auto text-center flex flex-col gap-6 items-center w-4/5 py-12 text-white">
                    <h2 className="text-4xl lg:text-6xl font-poppins font-bold">Get in <span className="text-react">Touch.</span></h2>
                    <p className="text-lg font-body tracking-wider">If you would like to solicit my services, feel free to contact me.  </p>
                    <a href="mailto:jawad.nazir248@gmail.com">
                        <button className="border-2 border-react p-[1rem] w-fit mt-10 mb-16 text-react font-bold lg:text-lg cursor-pointer">
                            Contact Me
                        </button>
                    </a>
                </div>
            
        </motion.section>
    )
}


export default Contact