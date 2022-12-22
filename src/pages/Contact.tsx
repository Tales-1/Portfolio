import { motion } from "framer-motion"
import { useState } from "react"
import ContactForm from "../components/ContactForm"

const Contact:React.FC= () => {
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = () => {
        setTimeout(() => {
          setSubmitted(true);
        }, 100);
      };
    return ( 
        <section className="relative w-full flex flex-col gap-12 h-fit xl:h-[83vh]">
                <h1 className="text-center font-bold text-3xl lg:text-4xl text-react w-full mt-8 underline underline-offset-8">Contact</h1>
                <motion.div className={`text-center flex flex-col gap-6 lg:gap-12 items-center w-4/5 text-white ${submitted ? "" : ""} m-auto`}
                                initial={{opacity:0, y:-50}}
                                animate={{opacity:1, y:0, transition:{duration:0.7}}}>
                        {submitted ? 
                                <div className="grid gap-12 relative bottom-8">
                                    <h2 className="text-[2.8rem] lg:text-7xl font-poppins font-bold text-title">Thank <span className="text-react">you!</span></h2>
                                    <p className="text-sm font-body tracking-wider text-body lg:text-xl">I'll be in touch soon.</p>
                                </div>
                            : 
                                <div className="flex flex-col gap-8 2xl:gap-10 relative 2xl:bottom-4">
                                    <h2 className="text-[2.8rem] md:text-[3.3rem] 2xl:text-[4rem] font-poppins font-bold text-title">Get in <span className="text-react">Touch.</span></h2>
                                    <p className="text-sm font-body tracking-wider text-body lt:text-base 2xl:text-lg">Want a clean and friendly interface for your app?
                                    <span className="block mt-2">Well, what are you waiting for!</span> </p>
                                    <ContactForm handleSubmit = {handleSubmit}/>
                                </div>
                        }
                </motion.div>
        </section>
    )
}


export default Contact