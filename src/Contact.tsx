import { motion } from "framer-motion"
type Props = {
    toggle:() => void
    visible:boolean
}

const Contact:React.FC<Props> = ({toggle,visible}) => {

    return ( 
        <motion.section 
            className="relative border-b-2 border-white h-screen grid place-items-center w-full"
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:0.4, delay:1.2}}}>
            <div className="w-full">
                <h1 className="absolute top-8 left-[50%] translate-x-[-50%] text-center font-bold text-3xl lg:text-4xl text-[#8892b0] w-full">&#60;Contact /&gt;</h1>
                <div className="m-auto text-center flex flex-col gap-6 items-center w-4/5">
                    <h2 className="text-4xl lg:text-7xl font-poppins font-bold">Get in <span className="text-react">Touch.</span></h2>
                    <p className="text-lg font-body tracking-wider">I'm currently looking for new opportunities. </p>
                    <a href="mailto:jawad.nazir248@gmail.com">
                        <button className="border-2 border-react py-[1.15rem] px-[1.5rem] w-fit mt-10 mb-16 text-react font-bold lg:text-lg cursor-pointer">
                            Contact Me
                        </button>
                    </a>
                    
                </div>
            </div>
            
        </motion.section>
    )
}


export default Contact