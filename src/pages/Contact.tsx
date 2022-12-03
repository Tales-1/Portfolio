import { motion } from "framer-motion"
import ContactForm from "../components/Contact"

const Contact:React.FC= () => {

    return ( 
        <section className="relative grid grid-rows-5 w-full h-[80vh]">
                <h1 className="text-center font-bold text-3xl lg:text-4xl text-react w-full row-start-1 mt-8 underline underline-offset-8">Contact</h1>
                <motion.div className="text-center flex flex-col gap-6 lg:gap-12 items-center w-4/5 text-white row-start-2 row-span-2 m-auto mt-6"
                            initial={{opacity:0, y:-50}}
                            animate={{opacity:1, y:0, transition:{duration:0.7}}}
                >
                    <h2 className="text-[2.8rem] lg:text-7xl font-poppins font-bold text-title">Get in <span className="text-react">Touch.</span></h2>
                    <p className="text-sm font-body tracking-wider text-body lg:text-xl">Want a clean and friendly face for your app?
                     <span className="block mt-2">Well, what are you waiting for!</span> </p>
                    <ContactForm />
                </motion.div>
            
        </section>
    )
}


export default Contact