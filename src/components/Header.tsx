import NavLinks from "./NavLinks"
import { useState } from "react"
import { motion } from "framer-motion"
import SlidingMenu from "./SlidingMenu"
import Blur from "./Blur"
import Logo from "../assets/jnlogo.png"

const Header:React.FC = () => {
    const [width,setWidth] = useState(window.innerWidth)
    const [visible,setVisible] = useState(false)

    window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
        if(!mobile) setVisible(false)
    })

    let mobile = width < 550

    return ( 
        <>
            <header className={`mx-auto flex gap-4 relative h-[8vh] lg:h-[10vh] w-full lg:w-[70%]`}>  
                <nav className="m-auto w-full flex justify-center items-center">
                 {mobile ? 
                 <>
                    <img src={Logo} alt="initials of JN"  className="w-10 mr-auto ml-4 object-cover" />
                    <motion.div  
                        onClick={()=>setVisible(prev => !prev)}
                        className="w-fit z-40 relative right-6 flex flex-col gap-1"
                        initial={{rotateZ:0}}
                        animate={{rotateZ:visible ? "495deg" : "0deg", transition:{duration:0.5}}}>
                            <span className={`h-[3px] bg-white transition-all duration-500 ${visible ? "translate-y-[.4rem] rotate-0 w-[1.6rem]" :"w-[1.3rem]"}`}></span>
                            <span className={`h-[3px] w-[1.3rem] bg-white ${visible ? "opacity-0" : "opacity-1"} transition-all duration-500`}></span>
                            <span className={`h-[3px] bg-white transition-all duration-500 ${visible ? "-translate-y-[.5rem] -rotate-90 w-[1.6rem]" : "w-[1.3rem]"} `}></span>
                    </motion.div>
                    
                 </>
                :<>
                    <NavLinks flex="ml-auto"/> 
                    <img src={Logo} alt="initials JN" className="w-12 object-cover self-center ml-auto relative right-2"/>
                 </>}
                </nav>
            </header>
            <SlidingMenu translateX={visible ? "translate-x-0" : "translate-x-full"} close={()=>setVisible(false)} mobile={mobile} />
            <Blur visible={visible} func={() => setVisible(prev => !prev)}/>
        </>
    )
}

export default Header