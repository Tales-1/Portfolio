import Hamburger from "../assets/white-hamburger.png"
import NavLinks from "./NavLinks"
import { useState } from "react"
import SlidingMenu from "./SlidingMenu"
import Blur from "./Blur"

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
            <header className={`mx-auto flex gap-4 relative h-[10vh] w-3/5`}>  
                <nav className="m-auto w-5/6 max-w-[40rem]">
                 {mobile ? 
                    <img src={Hamburger} alt="hamburger" onClick={()=>setVisible(true)} 
                         className="w-6 relative right-16"
                    /> : <NavLinks /> }
                    
                </nav>
            </header>
            <SlidingMenu translateX={visible ? "translate-x-0" : "-translate-x-full"} close={()=>setVisible(false)} mobile={mobile} />
            <Blur visible={visible} func={() => setVisible(prev => !prev)}/>
        </>
    )
}

export default Header