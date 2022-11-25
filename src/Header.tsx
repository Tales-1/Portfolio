import NavigationTree from "./NavigationTree"
import { useState } from "react"
import { motion } from "framer-motion"

type Props = { 
    toggleTrans:() => void
}
const Header:React.FC<Props> = ({toggleTrans}) => {
    const [showTree, setShowTree] = useState(false)
    function toggleTree(){
        if(showTree){
            setTimeout(()=> setShowTree(prev => !prev),500)
        } else { setShowTree(prev => !prev)}
        
    }
    return ( 
        <motion.header 
             className={`w-screen text-react h-[10vh] bg-dark grid grid-flow-col gap-12
              overflow-hidden relative`}
             animate={{height:showTree ? "100vh" : "10vh", transition:{type:"spring",stiffness:50}}}> 
            
             <div className="flex flex-col gap-2 mt-4 text-center">
                 <span className="lg:text-xl">Virtual DOM</span>
                 <button className="text-xs lg:text-base underline hover:opacity-40 text-white" onClick={toggleTree}>
                 {showTree ? "Hide" : "Show"}
                 </button>
            </div>
            
            <NavigationTree toggleTree={toggleTree} toggleTrans={toggleTrans} />
        </motion.header>
    )
}

export default Header